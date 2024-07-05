
import React, { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { Paper } from '@mui/material';
import Table from './Table';
import { isOverlapping } from '../utils/overlap';

const MainRoom = () => {
  const [tables, setTables] = useState([]);
  const containerRef = useRef(null);

  const [, drop] = useDrop({
    accept: 'TABLE',
    drop: (item, monitor) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const offset = monitor.getClientOffset();
      if (!offset || !containerRect) return;
      const left = offset.x - containerRect.left;
      const top = offset.y - containerRect.top;

      const newTable = { id: item.isNew ? tables.length + 1 : item.id, type: item.type, left, top };

      const overlapping = tables.some(
        (table) => table.id !== item.id && isOverlapping(table, newTable)
      );
 
      if (!overlapping) {
        if (item.isNew) {
          // Add new table
          setTables((prevTables) => [...prevTables, newTable]);
        } else {
          // Move existing table
          setTables((prevTables) =>
            prevTables.map((table) =>
              table.id === item.id ? { ...table, left, top } : table
            )
          );
        }
      } else {
        console.log('Cannot place table here, it overlaps with another table.');
      }
    },
  });

  const deleteTable = (id) => {
    setTables((prevTables) => prevTables.filter((table) => table.id !== id));
  };

  return (
    <Paper
      ref={(node) => {
        drop(node);
        containerRef.current = node;
      }}
      elevation={3}
      style={{ height: '80vh', position: 'relative', marginTop: '10px' }}
    >
      {tables.map((table) => (
        <Table key={table.id} id={table.id} type={table.type} left={table.left} top={table.top} onDelete={deleteTable} />
      ))}
    </Paper>
  );
};

export default MainRoom;

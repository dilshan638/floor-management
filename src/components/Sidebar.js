
import React from 'react';
import { Paper, Button } from '@mui/material';
import { useDrag } from 'react-dnd';
import squareTable from '../images/table-square.svg';
import circleTable from '../images/table-circle.svg';

const TableItem = ({ type, image }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TABLE',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={image}
      alt={type}
      style={{ opacity: isDragging ? 0.5 : 1, width: '100px', margin: '0.5rem' }}
    />
  );
};

const Sidebar = () => (
  <Paper elevation={3} style={{ padding: '1rem' }}>
    <Button variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
      Add Room 
    </Button>
    <div>
      <TableItem type="square" image={squareTable} />
      <TableItem type="circle" image={circleTable} />
    </div>
  </Paper>
);

export default Sidebar;

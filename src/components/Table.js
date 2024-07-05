
import React from 'react';
import { useDrag } from 'react-dnd';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import squareTable from '../images/table-square.svg';
import circleTable from '../images/table-circle.svg';

const Table = ({ id, type, left, top, onDelete }) => {
  const tableImage = type === 'square' ? squareTable : circleTable;

  const [, drag] = useDrag({
    type: 'TABLE',
    item: { id, type, isNew: false },
  });

  return (
    <div
      ref={drag}
      style={{
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
        transform: 'translate(-50%, -50%)',
        cursor: 'move',
      }}
    >
      <img
        src={tableImage}
        alt={type}
        style={{
          width: '100px',
          height: '100px',
        }}
      />
      <IconButton
        onClick={() => onDelete(id)}
        size="small"
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          background: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default Table;

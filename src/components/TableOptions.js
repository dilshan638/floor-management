
import React from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import squareTable from '../images/table-square.svg';
import circleTable from '../images/table-circle.svg';
import TableDetails from './TableDetails';

const TableOptions = () => {
  const [, dragSquare] = useDrag({
    type: 'TABLE',
    item: { type: 'square', isNew: true },
  });

  const [, dragCircle] = useDrag({
    type: 'TABLE',
    item: { type: 'circle', isNew: true },
  });

  return (
    <div>
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Tables
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <div ref={dragSquare} style={{ cursor: 'move', marginBottom: '10px', textAlign: 'center' }}>
                <img src={squareTable} alt="Square Table" width="100" height="100" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div ref={dragCircle} style={{ cursor: 'move', textAlign: 'center' }}>
                <img src={circleTable} alt="Circle Table" width="100" height="100" />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <TableDetails />
    </div>
  );
};

export default TableOptions;

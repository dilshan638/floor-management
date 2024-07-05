import React from 'react';
import { Card, CardContent, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainRoom from './components/MainRoom';
import TableOptions from './components/TableOptions';


const AddRoomButton = styled(Button)({
  backgroundColor: '#8b0000',
  color: '#fff',
  marginRight: '10px',
  '&:hover': {
    backgroundColor: '#800000',
  },
});

const SaveRoomButton = styled(Button)({
  backgroundColor: '#d3d3d3',
  color: '#000',
  '&:hover': {
    backgroundColor: '#a9a9a9',
  },
});

const App = () => {
  const handleAddRoom = () => {
    // Add room logic here
    console.log('Add Room');
  };

  const handleSaveRoom = () => {
    console.log('Save Room');
  };

  return (
    <Box display="flex" p={2}>
      <Box width="300px" mr={2}>
        <TableOptions />
      </Box>
      <Box flex={1}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6">Main Room</Typography>
              <Box>
                <AddRoomButton
                  variant="contained"
                  onClick={handleAddRoom}
                >
                  Add Room
                </AddRoomButton>
                <SaveRoomButton
                  variant="contained"
                  onClick={handleSaveRoom}
                >
                  Save Room
                </SaveRoomButton>
              </Box>
            </Box>
            <MainRoom />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default App;

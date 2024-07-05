
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, IconButton, Switch, FormControlLabel, Divider, Checkbox, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const TableDetails = () => {
  const [minCovers, setMinCovers] = useState(1);
  const [maxCovers, setMaxCovers] = useState(4);
  const [isOnline, setIsOnline] = useState(true);
  const [isAdvancedSettings, setIsAdvancedSettings] = useState(false);

  const handleMinCoversChange = (value) => {
    setMinCovers((prev) => Math.max(1, prev + value));
  };

  const handleMaxCoversChange = (value) => {
    setMaxCovers((prev) => Math.max(minCovers, prev + value));
  };

  const handleSwitchChange = (event) => {
    setIsOnline(event.target.checked);
  };

  const handleCheckboxChange = (event) => {
    setIsAdvancedSettings(event.target.checked);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Table Details
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField
              label="Table Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Min Covers:</Typography>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => handleMinCoversChange(-1)}><RemoveCircleIcon /></IconButton>
            <Typography>{minCovers}</Typography>
            <IconButton onClick={() => handleMinCoversChange(1)}><AddCircleIcon /></IconButton>
          </Grid>
          <Grid item xs={6}>
            <Typography>Max Covers:</Typography>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => handleMaxCoversChange(-1)}><RemoveCircleIcon /></IconButton>
            <Typography>{maxCovers}</Typography>
            <IconButton onClick={() => handleMaxCoversChange(1)}><AddCircleIcon /></IconButton>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={isOnline}
                  onChange={handleSwitchChange}
                  color="primary"
                />
              }
              label={`Status: ${isOnline ? 'Active' : 'Inactive'}`}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAdvancedSettings}
                  onChange={handleCheckboxChange}
                  color="primary"
                />
              }
              label="Advanced Settings"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TableDetails;

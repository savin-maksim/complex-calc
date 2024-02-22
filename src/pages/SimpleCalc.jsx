import React, { useState } from 'react';
import { Container, Grid, Button, Box, Typography } from '@mui/material';

function SimpleCalc() {
  const [input, setInput] = useState('');

  const addToInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    try {
      setInput(String(eval(input)));
    } catch (e) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput('0');
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ width: '100%', border: '1px solid black', textAlign:'right', p:2}}>
              <Typography>{input || "0"}</Typography>
            </Box>
          </Grid>
          {["7", "8", "9", "*", "4", "5", "6", "/", "1", "2", "3", "-", ".", "0",].map((val) => (
            <Grid item xs={3} key={val}>
              <Button fullWidth variant="contained" onClick={() => addToInput(val)}>{val}</Button>
            </Grid>
          ))}
          <Grid item xs={3}>
            <Button fullWidth variant="outlined" onClick={() => clearInput()}>Clear</Button>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth variant="outlined" onClick={() => calculateResult()}>=</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SimpleCalc;
import React, { useState } from 'react';
import { Container, Grid, Button, Box, Typography } from '@mui/material';
import { create, all } from 'mathjs';

const math = create(all);

function SimpleCalc() {
  const [input, setInput] = useState('');

  const addToInput = val => {
    setInput(input + val);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(String(math.evaluate(input)));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <Container maxWidth='xs'>
      <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <Grid item xs={3}>
              <Button fullWidth variant='outlined'>form</Button>
            </Grid>
            <Box sx={{ width: '100%', border: '1px solid black', textAlign: 'right', p: 2 }}>
              <Typography>{input || '0'}</Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Button fullWidth variant='outlined' onClick={() => addToInput('(')}>(</Button>
          </Grid>

          <Grid item xs={3}>
            <Button fullWidth variant='outlined' onClick={() => addToInput(')')}>)</Button>
          </Grid>

          <Grid item xs={3}>
            <Button fullWidth variant='outlined' onClick={() => clearInput()}>Clear</Button>
          </Grid>

          <Grid item xs={3}>
            <Button fullWidth variant='outlined'>?</Button>
          </Grid>

          <Grid item xs={3}>
            <Button fullWidth variant='outlined'>?</Button>
          </Grid>

          {['i', 'ang'].map((val) => (
            <Grid item xs={3} key={val}>
              <Button fullWidth variant='outlined' onClick={() => addToInput(val)}>{val}</Button>
            </Grid>
          ))}

          <Grid item xs={3}>
            <Button fullWidth variant='outlined'>?</Button>
          </Grid>

          {['+/-', '/', '*', '-'].map((val) => (
            <Grid item xs={3} key={val}>
              <Button fullWidth variant='outlined' onClick={() => addToInput(val)}>{val}</Button>
            </Grid>
          ))}

          {['7', '8', '9'].map((val) => (
            <Grid item xs={3} key={val}>
              <Button fullWidth variant='contained' onClick={() => addToInput(val)}>{val}</Button>
            </Grid>
          ))}

          <Grid item xs={3}>
            <Button fullWidth variant='outlined' onClick={() => addToInput('+')}>+</Button>
          </Grid>

          {['4', '5', '6', ''].map((val) => (
            <Grid item xs={3} key={val}>
              <Button fullWidth variant='contained' onClick={() => addToInput(val)}>{val}</Button>
            </Grid>
          ))}

          {['1', '2', '3'].map((val) => (
            <Grid item xs={3} key={val}>
              <Button fullWidth variant='contained' onClick={() => addToInput(val)}>{val}</Button>
            </Grid>
          ))}

          <Grid item xs={3}>
            <Button fullWidth variant='outlined' onClick={() => calculateResult()}>=</Button>
          </Grid>

          <Grid item xs={6}>
            <Button fullWidth variant='contained' onClick={() => addToInput('0')}>0</Button>
          </Grid>

          <Grid item xs={3}>
            <Button fullWidth variant='contained' onClick={() => addToInput('.')}>.</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SimpleCalc;
import React, { useState } from "react";
import { Button, Typography, Box, TextField, Container, Grid } from "@material-ui/core";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const coins = [
  { id: 1, name: "BTC" },
  { id: 2, name: "ethereum" },
  { id: 3, name: "BTC" },
  { id: 4, name: "doge" },
];

const SwapMain = () => {
  const [swap, setSwap] = useState(false);

  const handleSwap = () => {
    setSwap(!swap);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Swap
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Box border={1} borderRadius="borderRadius" p={2}>
              <Typography variant="h6">From</Typography>
              <Typography variant="body1">BTC</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleSwap}>
              <SwapHorizIcon />
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Box border={1} borderRadius="borderRadius" p={2}>
              <Typography variant="h6">To</Typography>
              <Typography variant="body1">ETH</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box my={2}>
          <Typography variant="h6">Swap from</Typography>
          <TextField fullWidth variant="outlined" placeholder="0.0" />
        </Box>
        <Box my={2}>
          <Typography variant="h6">Swap to</Typography>
          <TextField fullWidth variant="outlined" placeholder="0.0" />
        </Box>
        <Button variant="contained" color="primary" fullWidth>
          Connect Wallet
        </Button>
      </Box>
    </Container>
  );
};

export default SwapMain;

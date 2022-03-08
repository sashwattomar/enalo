import React, {Fragment} from 'react';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const UiGrid = () => {
  return (
    <Fragment>
      <Box style={{marginRight: '5rem', color: 'rgb(113,125,139)'}}>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
          <Grid item xs={4}>
            Expiry
          </Grid>{' '}
          <Grid item xs={4}>
            YY
          </Grid>{' '}
          <Grid item xs={4}>
            CVV
          </Grid>
          <Grid style={{color: 'rgb(113,125,139)'}} item xs={4}>
            <Item>MM</Item>
          </Grid>
          <Grid style={{color: 'rgb(113,125,139)'}} item xs={4}>
            <Item>YY</Item>
          </Grid>
          <Grid style={{color: 'rgb(113,125,139)'}} item xs={4}>
            <Item>CVV</Item>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default UiGrid;

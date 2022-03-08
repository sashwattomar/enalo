import Box from '@mui/material/Box';
import {Fragment} from 'react';
const UiBox = (props) => {
  return (
    <Fragment>
      <Box
        name={props.name}
        sx={{
          p: 2,
          border: '1px solid  rgb(52, 119, 235)',
          color: 'rgb(52, 119, 235)',
        }}
      >
        <span style={{display: 'inline-flex'}}>
          {props.children}
          <span
            style={{marginLeft: '2rem', fontSize: '1.1rem', float: 'right'}}
          >
            {props.name}
          </span>
        </span>
      </Box>
    </Fragment>
  );
};
export default UiBox;

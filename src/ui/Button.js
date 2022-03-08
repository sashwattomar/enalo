import React from 'react';
import {Button} from '@mui/material';

const UiButton = (props) => {
  return (
    <Button
      variant='contained'
      color='success'
      size='large'
      style={{width: '290px', fontSize: '15px'}}
      type='submit'
    >
      {props.name}
    </Button>
  );
};
export default UiButton;

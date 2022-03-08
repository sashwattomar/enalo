import React, {Fragment} from 'react';
import Box from '@mui/material/Box';
import InputField from '../ui/InputField';
import UiGrid from '../ui/UiGrid';
import {Link} from 'react-router-dom';
const CreditDebitCard = () => {
  return (
    <Fragment>
      <form>
        <div>
          <Box>
            <span>Credit /DebitCards</span>
            <Link
              to='/'
              style={{
                color: 'rgb(52, 119, 235)',
                float: 'right',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Change
            </Link>
          </Box>
          <br />
          <Box>
            <label style={{color: 'rgb(113, 125, 139)'}}>Card Number</label>
            <InputField />
          </Box>
          <Box>
            <UiGrid />
          </Box>
          <br />
        </div>
      </form>
    </Fragment>
  );
};

export default CreditDebitCard;

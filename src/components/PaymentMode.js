import React, {Fragment, useCallback} from 'react';
import Box from '@mui/material/Box';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Button from '@mui/material/Button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const PaymentMode = (props) => {
  const OnClick = useCallback((e) => {
    console.log('here');
    console.log(e);
    console.log(e.target.innerText);
    props.fun(e.target.innerText);
  });
  return (
    <Fragment>
      {' '}
      <div>
        {' '}
        <Box style={{fontSize: '19px'}}>
          <div>More Payment Option</div>
        </Box>
        <br />
        <Button
          size='large'
          onClick={(e) => OnClick(e)}
          style={{
            marginBottom: '1rem',
            border: '1px solid  rgb(52, 119, 235)',
            width: '290px',
            fontSize: '15px',
          }}
          name={'Credit Debit Card'}
        >
          <span>
            {' '}
            <CreditCardIcon />
          </span>{' '}
          <span>Credit/Debit Cards</span>
        </Button>
        <br />
        <Button
          size='large'
          onClick={(e) => OnClick(e)}
          style={{
            marginBottom: '1rem',
            border: '1px solid  rgb(52, 119, 235)',
            width: '290px',
            fontSize: '15px',
          }}
          name={'Net Banking'}
        >
          <span>
            {' '}
            <AccountBalanceIcon />
          </span>{' '}
          <span style={{marginLeft: '12px', marginRight: '3.3rem'}}>
            Net Banking
          </span>
        </Button>
      </div>
    </Fragment>
  );
};
PaymentMode.propTypes = {
  purpose: PropTypes.string,
  amount: PropTypes.string,
};
const mapStateToProp = (state) => ({
  purpose: state.payment.purpose,
  amount: state.payment.amount,
});
export default connect(mapStateToProp, null)(PaymentMode);

import Card from '@mui/material/Card';
import React, {useState} from 'react';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CreditDebitCard from './CreditDebitCard';
import UiButton from '../ui/Button';
import UiHeader from '../ui/UiHeader';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PaymentMode from './PaymentMode';

const PageThree = ({purpose, amount}) => {
  const [payMethod, setPayMethod] = useState({card: false, banking: false});

  const {card, banking} = payMethod;

  const myfun = (name) => {
    console.log('myfun');
    if (name === 'CREDIT/DEBIT CARDS') {
      setPayMethod({...payMethod, card: true});
    } else if (name === 'Net Banking') {
      setPayMethod({...payMethod, banking: true});
    }
  };
  return (
    <Card sx={{maxWidth: 345}}>
      <UiHeader />
      <CardContent style={{fontSize: '19px', marginBottom: '5rem'}}>
        <Box style={{marginBottom: '12px'}}>
          {' '}
          <span style={{color: 'rgb(113,125,139)'}}>Purpose of Payment</span>
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
        <Box
          sx={{p: '2', borderBottom: ' 1px  solid  rgba(227, 236, 242, 0.5)'}}
        >
          <div style={{marginBottom: '0.5rem'}}>
            <span>Amount</span>{' '}
            <span
              style={{
                float: 'right',
                marginBottom: '12px',
                color: 'rgb(113,125,139)',
              }}
            >
              {amount}
              {/* amount */}
            </span>
          </div>

          <p style={{color: 'rgb(113, 125, 139)'}}>
            <span>Convinence fee</span>{' '}
            <span style={{float: 'right'}}>amount value</span>
          </p>
        </Box>
        <br />
        <Box
          sx={{p: '2', borderBottom: ' 1px  solid  rgba(227, 236, 242, 0.5)'}}
        >
          <div>
            <span>Total</span>{' '}
            <span style={{float: 'right'}}>amount value</span>
          </div>
        </Box>
        <br />
        <Box
          sx={{
            p: '2',
            borderBottom: ' 1px  solid  rgba(227, 236, 242, 0.5)',
          }}
        >
          <section style={{padding: '8px 0px'}}>
            {' '}
            <span
              style={{
                color: 'rgb(113,125,139)',
                fontSize: '19px',
                lineHeight: '15px',
                marginRight: '5px',
              }}
            >
              Your Details
            </span>
            <span>
              <KeyboardArrowRightIcon
                style={{
                  lineHeight: '12px',
                  height: '0.9em',
                  color: 'rgb(113,125,139)',
                  marginRight: '5px',
                }}
                sx={{fontSize: 19}}
              />
            </span>
            <span style={{fontSize: '19px', color: 'rgb(113,125,139)'}}>
              Payment
            </span>
          </section>
        </Box>
        <br />
        <Box sx={{p: 2, border: '1px dashed grey'}}>
          {card && <CreditDebitCard />}
          {!card && !banking && <PaymentMode fun={myfun} />}

          <br />
          <UiButton name={'Next'} />
        </Box>
      </CardContent>
    </Card>
  );
};
PageThree.propTypes = {
  purpose: PropTypes.string,
  amount: PropTypes.string,
};
const mapStateToProp = (state) => ({
  purpose: state.payment.purpose,
  amount: state.payment.amount,
});
export default connect(mapStateToProp, null)(PageThree);

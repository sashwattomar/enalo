import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import InputField from '../ui/InputField';
import UiButton from '../ui/Button';
import {connect} from 'react-redux';
import {details} from '../actions/details';
import PropTypes from 'prop-types';
import UiHeader from '../ui/UiHeader';
import {Link, useNavigate} from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
//Functional Based Component
const PageTwo = ({details, purpose, amount, name, email, number}) => {
  let navigate = useNavigate();
  const [persnolDetails, setPersnolDetails] = useState({
    name: '',
    email: '',
    number: '',
  });
  useEffect(() => {
    if (name !== ' ') {
      setPersnolDetails({...persnolDetails, [persnolDetails.name]: name});
    }
    if (email !== ' ') {
      setPersnolDetails({...persnolDetails, [persnolDetails.email]: email});
    }
    if (number !== ' ') {
      setPersnolDetails({...persnolDetails, [persnolDetails.number]: number});
    }
  }, []);
  const OnChange = (event) => {
    console.log('onchange');
    setPersnolDetails({
      ...persnolDetails,
      [event.target.name]: event.target.value,
    });
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    details({
      name: persnolDetails.name,
      number: persnolDetails.number,
      email: persnolDetails.email,
    });
    navigate('/pageThree');
  };

  return (
    <Card sx={{maxWidth: 345}}>
      <UiHeader />
      <CardContent style={{fontSize: '19px', marginBottom: '5rem'}}>
        <form
          onSubmit={(e) => {
            OnSubmit(e);
          }}
        >
          <Box
            sx={{
              p: '2',
              borderBottom: ' 2px  solid  rgba(227, 236, 242, 0.5)',
            }}
            style={{marginBottom: '2px', padding: '8px 0px'}}
          >
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
            <p style={{fontSize: '19px'}}>{purpose}</p>
            <div style={{fontSize: '19px'}}>
              <span>Amount</span>{' '}
              <span
                style={{
                  float: 'right',
                  marginBottom: '12px',
                  color: 'rgb(113,125,139)',
                }}
              >
                {amount}
              </span>
            </div>
          </Box>
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

          <div style={{fontSize: '19px'}}>
            <br />
            <label style={{color: 'rgb(113, 125, 139)'}}>Name</label>
            <InputField
              value={persnolDetails.name}
              fun={OnChange}
              name='name'
              type='text'
            />

            <label style={{color: 'rgb(113, 125, 139)'}}>Email</label>
            <InputField
              value={persnolDetails.email}
              fun={OnChange}
              name='email'
              type='email'
            />

            <label style={{color: 'rgb(113, 125, 139)'}}> Phone Number</label>

            <InputField
              value={persnolDetails.number}
              fun={OnChange}
              name='number'
              type='text'
            ></InputField>

            <div style={{marginBottom: '1rem'}}>
              <span style={{color: 'rgb(113, 125, 139)'}}>Amount</span>{' '}
              <span style={{float: 'right', color: 'rgb(113, 125, 139)'}}>
                {amount}
              </span>
            </div>
            <UiButton name={'Next'} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
PageTwo.propTypes = {
  details: PropTypes.func.isRequired,
  purpose: PropTypes.string,
  amount: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.string,
};
const mapStateToProp = (state) => ({
  name: state.details.name,
  email: state.details.email,
  number: state.details.number,
  purpose: state.payment.purpose,
  amount: state.payment.amount,
});
export default connect(mapStateToProp, {details})(PageTwo);

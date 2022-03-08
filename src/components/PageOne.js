import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UiButton from '../ui/Button';
import InputField from '../ui/InputField';
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {pay} from '../actions/payment';
import UiHeader from '../ui/UiHeader';
import {withRouter} from './withRouter';
import classes from './PageOne.module.css';
//Class based Component
class PageOne extends React.Component {
  //state declaration
  state = {purpose: ' ', amount: ' ', error: false};
  //constructor
  constructor() {
    super();
    this.OnSubmit = this.OnSubmit.bind(this);
  }
  //handling user input
  OnChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    inputName === 'purpose'
      ? this.setState({purpose: inputValue})
      : this.setState({error: false, amount: inputValue});
  };
  //handling input submission, redux action "pay", vallidation
  OnSubmit = (e) => {
    e.preventDefault();
    this.state.amount < 9
      ? this.setState({error: true})
      : this.props.pay({
          purpose: this.state.purpose,
          amount: this.state.amount,
        });
    this.props.navigate('/pageTwo');
  };
  //using Lifecycle Method
  componentDidMount() {
    if (this.props.purpose !== ' ') {
      this.setState({purpose: this.props.purpose});
    }
    if (this.props.amount !== ' ') {
      this.setState({amount: this.props.amount});
    }
  }
  render() {
    return (
      <Fragment>
        <Card sx={{maxWidth: 345}}>
          <UiHeader />
          <CardContent>
            <form
              onSubmit={(e) => {
                this.OnSubmit(e);
              }}
            >
              {/* <label className={classes.header}> */}
              <label style={{color: 'rgb(113, 125, 139)', fontSize: '15px'}}>
                Purpose of Payment
              </label>
              <InputField
                value={this.state.purpose}
                fun={this.OnChange}
                name='purpose'
                type='text'
              />
              <label style={{color: 'rgb(113, 125, 139)', fontSize: '15px'}}>
                Amount
              </label>
              <InputField
                value={this.state.amount}
                fun={this.OnChange}
                name='amount'
                type='number'
              />
              {this.state.error && (
                <li
                  style={{
                    listStyleType: 'none',
                    fontSize: '15px',
                    float: 'bottom',
                    color: 'red',
                  }}
                >
                  Minimum amount should be Rs. 9
                </li>
              )}
              <br />
              <UiButton name={'Pay'} />
            </form>
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}
PageOne.propTypes = {
  pay: PropTypes.func.isRequired,
  purpose: PropTypes.string,
  amount: PropTypes.string,
};
const mapStateToProp = (state) => ({
  purpose: state.payment.purpose,
  amount: state.payment.amount,
});
export default connect(mapStateToProp, {pay})(withRouter(PageOne));

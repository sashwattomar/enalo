import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import {red} from '@mui/material/colors';
const UiHeader = () => {
  return (
    <CardHeader
      style={{
        backgroundColor: 'rgb(97, 115, 137)',
        color: '#192a38',
        fontFamily: 'Roboto,sans-serif',
        fontWeight: '400',
      }}
      avatar={
        <Avatar variant='square' sx={{bgcolor: red[500]}} aria-label='recipe'>
          F
        </Avatar>
      }
      title={
        <div>
          <label style={{color: 'rgb(255, 255, 255)', fontSize: '15px'}}>
            Paying to{' '}
          </label>{' '}
          <br />
          <label style={{color: 'rgb(255, 255, 255)', fontSize: '15px'}}>
            Exposys Data Lab
          </label>
        </div>
      }
    />
  );
};
export default UiHeader;

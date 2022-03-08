import TextField from '@mui/material/TextField';

const InputField = (props) => {
  const OnChange = (event) => {
    props.fun(event);
  };
  return (
    <div style={{marginBottom: '2rem', marginTop: '1rem', width: '290px'}}>
      {/* {console.log(props.children)} */}
      <TextField
        onChange={(event) => {
          OnChange(event);
        }}
        id='outlined-basic'
        size='small'
        variant='outlined'
        fullWidth={true}
        formcontrol='true'
        name={props.name}
        value={props.value}
        type={props.type}
      />
    </div>
  );
};
export default InputField;

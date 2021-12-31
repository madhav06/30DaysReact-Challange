import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import  ButtonGroup  from '@material-ui/core/ButtonGroup';
import  Checkbox  from '@material-ui/core/Checkbox';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import  TextField  from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import  Typography  from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import  Toolbar  from '@material-ui/core/Toolbar';
import  IconButton  from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FE8E53)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '20 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15
      
    }
  },
  button: {
    div: {
      padding: '20 30px',
      color: 'white'
    }
  }
  ,
  palette: {
    primary: {
      main: orange[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return(
    <FormControlLabel 
      control={<Checkbox 
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Testing Checkbox"
    />  
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <header className="App-header">
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant='h2' component='div'>
          MUI React App!
        </Typography>
        <Button color='secondary' component='div'>
          Login
        </Button>
          </Toolbar>
        </AppBar>
        <Typography variant='h2' component='div'>
          Welcome to MUI!
        </Typography>
        <Typography variant='h5'>
          Exploring how to use Material-UI with React framework. Learn more at: https://mui.org/
        </Typography>
        <ButtonStyled />
        <TextField 
          variant='outlined'
          color='secondary'
          type='date'
          aria-label='The Date'
          />
          <TextField 
          variant='outlined'
          color='secondary'
          type='time'
          aria-label='The Time'
          />
        <CheckboxExample />
        <ButtonGroup variant='contained' color='primary'>
        <Button
          startIcon={<SaveIcon/>} 
          >
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon/>} 
          >
          Discard
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </ThemeProvider>
    
  );
}

export default App;

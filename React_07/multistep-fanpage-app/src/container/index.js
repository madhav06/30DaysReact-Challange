import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fan from '../component/fan';
import Talent from '../component/talent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../component/fan';
import '../component/talent';



const SignInOutContainer=() => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const paperStyle={width:300, margin: "0 auto", padding: 8, height: '81vh'}
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    
    return (
        
        <Paper style={paperStyle} elevation={25}>
            <Tabs
              value={value}
              indicatorColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
              >
                <Tab label='Fan SignUp'/>
                <Tab label='Talent SignUp' />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Fan />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Talent />
            </TabPanel>
        </Paper>
    );
}

export default SignInOutContainer;
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ForumIcon from '@material-ui/icons/Forum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from './home';
import Nutrition from './nutrition';
import Aboutus from './aboutus';
import Contactus from './contactus';
import Searchmore from './searchmore';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="Nutrition" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Search More" icon={<ImageSearchIcon />} {...a11yProps(2)} />
          <Tab label="Contact Us" icon={<ForumIcon />} {...a11yProps(3)} />
          <Tab label="About Us" icon={<AccountCircleIcon />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home/>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Nutrition/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Searchmore />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Contactus/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Aboutus />
      </TabPanel>
    </div>
  );
}


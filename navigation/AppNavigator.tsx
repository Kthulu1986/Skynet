import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Loading from '../screens/Loading';
import Navigation from  '../navigation';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
   
    Navigation:Navigation
  })
);

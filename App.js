import React, {Component} from 'react';
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';

import WelcomeScene from './scenes/WelcomeScene';
import TeamSelectorScene from './scenes/TeamSelectorScene';
import TeamProfileScene from './scenes/TeamProfileScene';

import TabIcon from './components/navigation/Tab';

import {Provider} from 'react-redux';

import configureStore from './store/store';

const store = configureStore({});


const App = () => {
  return(
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="Welcome" initla={true} component={WelcomeScene} title='Welcome'/>
          <Scene key="tabbar" tab={true} tabBarStyle={{backgroundColor: '#eee'}}>
            <Scene key="character" title="Characters" icon={TabIcon} intial={true}>
              <Scene key="characters" component={TeamSelectorScene} title="Characters" />
            </Scene>
            <Scene key="prof" title="Profile" icon={TabIcon}>
              <Scene key="profile" component={TeamProfileScene} title="Profile"/>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    </Provider>
  )
}

export default App
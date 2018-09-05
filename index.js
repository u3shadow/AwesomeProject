/** @format */

import {AppRegistry} from 'react-native';
import {App,HelloWorldApp} from './App';
import LoginLeaf from './LoginLeaf';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginLeaf);

import { AppRegistry } from 'react-native';
import App from './App';

import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

AppRegistry.registerComponent('VSACReactNative', () => codePush(codePushOptions)(App));
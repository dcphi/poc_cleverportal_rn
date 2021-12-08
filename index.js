/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification from 'react-native-push-notification';

AppRegistry.registerComponent(appName, () => App);

PushNotification.configure({
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  requestPermissions: Platform.OS === 'ios',
  popInitialNotification: true,
});

PushNotification.createChannel(
  {
    channelId: 'reminders', // (required)
    channelName: 'Task reminder notifications', // (required)
    channelDescription: 'Reminder for any tasks',
  },
  () => {}
);

import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
class Notifications {
  fireNotification(title, msg) {
    PushNotification.localNotification({
      channelId: 'reminders',
      title: title,
      message: msg,
      ignoreInForeground: false,
      allowWhileIdle: true,
    });
  }

  schduleNotification(date) {
    PushNotification.localNotificationSchedule({
      channelId: 'reminders',
      title: '🔔 Reminder!',
      message: 'You have set this reminder',
      date,
    });
  }
}

export default new Notifications();

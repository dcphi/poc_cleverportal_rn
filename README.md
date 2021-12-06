# Getting started
1. You should set up your environment according to the [official documentation](https://reactnative.dev/docs/environment-setup).
2. **Install project** dependencies by opening the terminal inside the project folder and run the following:

```
npm install
```
3. **Start the application** with:

```
// for iOS
npx react-native run-ios

// for Android
npx react-native run-android
```

4. For **debugging** you can access the *In-App Developer Menu* by shaking your device. You can also use the `⌘D` keyboard shortcut when your app is running in the iOS Simulator, or `⌘M` when running in an Android emulator on Mac OS and `Ctrl+M` on Windows and Linux.

5. Set up your code editor to automatically **lint** and **format** the code for you. If you are a [VS Code](https://code.visualstudio.com/) user install the following plugins:
    - [ESLint VS Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

And add the following changes to your VS Code Settings:

```
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

# Summary

This project is bootstrapped using the [React Native CLI](https://reactnative.dev/docs/environment-setup) with  `react-native:0.66.3` and `react-native-template-typescript:6.8.x`.
## Creating a New React Native Project

If you don’t already have a React Native project, you can create one using the following command:

```bash
npx react-native init mysdklibrary
```

Replace `mysdklibrary` with your chosen project name.

## Implementing Your React Native Features

Develop your React Native components as you would in any typical React Native project.

## Preparing for Integration

In your `android/app/build.gradle` file, add the following to the `defaultConfig` section:

```groovy
...
multiDexEnabled true
...
```

## Creating a React Native Activity for Android

Add a new `ReactNativeActivity.java` in `android/app/src/main/java/com/mysdklibrary`. This will host your React Native view.

## Packaging React Native as an Android Archive (AAR)

1. Configure the Build Gradle:

   Make necessary modifications in your `android/app/build.gradle` file.

2. Configure the Settings Gradle:

   Include and specify your React Native project directory.

3. Remove the application tag from the manifest file.

4. Create the Android Assets Directory:

   Run the following command to create the directory:

   ```bash
   mkdir -p android/app/src/main/assets
   ```

5. Bundle Your React Native Project:

   Run the following command to bundle your project:

   ```bash
   npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
   ```

6. Build the AAR File:

   Navigate to the android directory of your React Native project and run:

   ```bash
   ./gradlew :youreactnativeproject:assembleRelease
   ```

## Implementing the AAR in a Native Android Project

1. Import the AAR:

   Create a `libs` folder in `android/app` and copy your generated AAR file.

2. Add React Native’s Maven Repository:

   Make sure your native Android project can access React Native dependencies by adding the repository in the `build.gradle` file.

3. Include Necessary Dependencies:

   Add required dependencies in your app’s `build.gradle`.

4. Modify the `MainApplication.java`:

   ```

5. Add `ReactNativeActivity` in `AndroidManifest.xml`:

   ```xml
   <activity android:name="com.mysdklibrary.ReactNativeActivity">
   ```

## Congratulations! :tada:

You've successfully integrated your React Native App into a native Android project. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

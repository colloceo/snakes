# 📱 Build Android APK Guide

Follow these steps to convert your Snakes & Ladders web game into an Android APK.

## 🛠️ Prerequisites

1. **Install Node.js** (if not already installed):
   - Download from: https://nodejs.org/
   - Choose LTS version

2. **Install Android Studio**:
   - Download from: https://developer.android.com/studio
   - Install with default settings
   - Open Android Studio and install SDK

## 📦 Step 1: Install Dependencies

Open Command Prompt in your project folder and run:

```bash
cd "c:\Users\THE CEO\Downloads\snakes-ladders-main\snakes-ladders-main"
npm install
```

## 🔧 Step 2: Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

## 🚀 Step 3: Initialize Capacitor

```bash
npx cap init
```

## 📱 Step 4: Add Android Platform

```bash
npx cap add android
```

## 🔄 Step 5: Sync Files

```bash
npx cap sync
```

## 🏗️ Step 6: Build APK

```bash
npx cap open android
```

This will open Android Studio. Then:

1. Wait for Gradle sync to complete
2. Go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. Wait for build to complete
4. Click **locate** to find your APK file

## 📍 APK Location

Your APK will be located at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

## 🎯 Alternative: Quick APK Build

If you want a simpler approach, use **APK Builder Online**:

1. Go to: https://appsgeyser.com/ or https://websitetoapk.com/
2. Enter your GitHub Pages URL: https://colloceo.github.io/snakes/
3. Customize app name, icon, and settings
4. Download the generated APK

## 📋 App Details

- **App Name**: Snakes & Ladders
- **Package ID**: com.colloceo.snakesladders
- **Version**: 1.0.0
- **Developer**: Collins Otieno

## 🔧 Troubleshooting

**If build fails:**
1. Make sure Android SDK is properly installed
2. Set ANDROID_HOME environment variable
3. Accept all SDK licenses: `sdkmanager --licenses`

**For signing APK:**
1. Generate keystore: `keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`
2. Sign APK in Android Studio under **Build** → **Generate Signed Bundle/APK**

## 🎉 Success!

Once built, you can install the APK on any Android device and enjoy your Snakes & Ladders game as a native mobile app!
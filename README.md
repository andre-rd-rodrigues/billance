# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). It uses [Bun](https://bun.sh/) as the package manager ([Expo + Bun guide](https://docs.expo.dev/guides/using-bun/)).

## Prerequisites

- [Bun](https://bun.sh/docs/installation) installed
- Node.js LTS (required for `bun create expo-app` and `bun expo prebuild`)

## Get started

1. Install dependencies

   ```bash
   bun install
   ```

2. Start the app

   ```bash
   bun run start
   ```

   Or run directly: `bun expo start`. Install Expo packages with `bun expo install <package>`.

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
bun run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Progressive Web App (PWA)

The app is set up as a PWA so it can be installed and used in a browser.

- **Manifest**: `public/manifest.json` (name, icons, theme, display mode).
- **HTML root**: `app/+html.tsx` links the manifest and sets `theme-color`.
- **Icons**: Generate 192×192 and 512×512 icons with:
  ```bash
  bun run generate-pwa-icons
  ```
  (Uses macOS `sips`, or install `sharp` / ImageMagick.)

Build for web: `bun run build:web` (output in `dist/`). Deploy `dist/` to any static host (e.g. Vercel). For offline support, you can add a service worker (e.g. [Workbox](https://developer.chrome.com/docs/workbox/)); see [Expo PWA docs](https://docs.expo.dev/guides/progressive-web-apps/).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

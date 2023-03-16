# SVG Preview

This is a utility app for Mac OS to preview SVG Files. You can either preview single files or a list of files. The main avantage over the preview built into Mac OS is that it works for svgs with white content which is not visible in the built in preview.

![demo](./demo.gif)

## Tech Stack
This app is built using the following Technologies
- [Tauri](https://tauri.app/)
- [Vite](https://vitejs.dev/)
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## What I learned
This is my first complete tauri app, so I learned the basic tauri setup, setting it up as a system tray app and using GitHub Actions to build the app on release.

In this app I also implemented a dark/light mode switch for the first time. The mode switches based on the mode in the OS as well as in the app itself.
# My Notes app

## React app

Create react app with typescript

```bash
npx create-react-app my-notes --template typescript
```

## Cordova

Create cordova app

```bash
npx cordova create ./cordova io.github.danny270793.mynotes MyNotes
```

## Work with it

### For the web

Work on the web version of the app

```bash
npm run react:start
```

Generate static html, css and js to deploy it

```bash
npm run react:build
```

### For mobile

Build the latest version of the web app

```bash
npm run react:build
```

Start on android emulator (based on last react build)

```bash
npm run cordova:start android
```

Start on ios emulator (based on last react build)

```bash
npm run cordova:start ios
```

Generate apk (based on last react build)

```bash
npm run cordova:build android
```

Generate ipa (based on last react build)

```bash
npm run cordova:build ios
```

### For desktop

Build the latest version of the web app

```bash
npm run react:build
```

Generate electorn app (based on last react build)

```bash
npm run build:electron
```

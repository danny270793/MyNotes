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

## Final app

Take react files and generate static html, css and js

```bash
npm run build:react
```

Generate apk from latest react build

```bash
npm run build:cordova -- android
```

Generate ipa from latest react build

```bash
npm run build:cordova -- ios
```

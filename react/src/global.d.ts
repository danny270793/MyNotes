export {};

declare global {
  interface Window {
    cordova: any|undefined;
    electron: any|undefined;
  }
}

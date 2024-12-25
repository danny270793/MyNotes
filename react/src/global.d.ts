import { Fingerprint } from './utils/fingerprint'

export {}

declare global {
  interface Window {
    cordova: unknown | undefined
    Fingerprint: Fingerprint
    electron: unknown | undefined
  }
}

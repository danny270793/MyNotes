export type Platform = 'WEB' | 'CORDOVA' | 'ELECTRON'

export const getCurrentPlatform = (): Platform => {
  if (window.cordova) {
    return 'CORDOVA'
  }
  if (window.electron) {
    return 'ELECTRON'
  }
  return 'WEB'
}

export type Platform = 'WEB'|'CORDOVA'|'ELECTRON'

export const usePlatform = (): Platform => {
    if((window as any).cordova) {
        return 'CORDOVA'
    }
    if((window as any).electron) {
        return 'ELECTRON'    
    }
    return 'WEB'
}

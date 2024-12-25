export interface Error {
    value: number
    message: string
}

export interface IsAvailableOptionalParams {
    allowBackup?: boolean
    requireStrongBiometrics?: boolean
}

export interface ShowOptionalParams {
    title?: string
    subtitle?: string
    description?: string
    fallbackButtonTitle?: string
    disableBackup?: boolean
    cancelButtonTitle?: string
    confirmationRequired?: false
}

export interface Fingerprint {
    isAvailable(success: (result: string) => void, error: (result: Error) => void, optionalParams: IsAvailableOptionalParams|undefined): void
    show(options: ShowOptionalParams|undefined, success: (result: string) => void, error: (result: Error) => void): void
}

export const isAvailable = (optionalParams?: IsAvailableOptionalParams) => {
    return new Promise<string>((resolve, reject) => {
        window.Fingerprint.isAvailable((result: string) => {
            resolve(result)
        }, (error: Error) => {
            reject(error)
        }, optionalParams)
    })
}

export const request = (optionalParams?: ShowOptionalParams) => {
    return new Promise((resolve, reject) => {
        window.Fingerprint.show(optionalParams, resolve, (error: Error) => {
            reject(error)
        })
    })
}

export const isAvailable = () => {
    return new Promise((resolve, reject) => {
        (window as any).Fingerprint.isAvailable((result: any) => {
            resolve(result)
        }, (error: any) => {
            reject(error)
        })
    })
}

export const request = () => {
    return new Promise((resolve, reject) => {
        (window as any).Fingerprint.show({description: 'Authnticate to continue'}, resolve, (error: any) => {
            reject(error)
        })
    })
}

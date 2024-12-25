const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  app: () => '0.0.1',
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})

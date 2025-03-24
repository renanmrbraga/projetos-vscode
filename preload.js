const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getProjetos: () => ipcRenderer.invoke('getProjetos'),
  abrirProjeto: (nome) => ipcRenderer.invoke('abrirProjeto', nome),
});


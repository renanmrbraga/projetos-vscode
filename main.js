const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
require('dotenv').config();

// ⚙️ Correções para GPUs AMD (7800 XT e similares)
app.commandLine.appendSwitch('use-angle', 'd3d11');
app.commandLine.appendSwitch('use-gl', 'warp');
app.commandLine.appendSwitch('enable-features', 'UseSkiaRenderer');
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('ignore-gpu-blocklist');

const PROJETOS_PATH = process.env.PROJETOS_PATH || path.join(__dirname, 'Projetos');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    autoHideMenuBar: true, // remove menu "File/Edit"
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.setMenuBarVisibility(false); // esconde o menu (reforço extra)
  win.loadFile('dist/index.html');
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('getProjetos', async () => {
    try {
      const pastas = fs.readdirSync(PROJETOS_PATH, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      return pastas;
    } catch (err) {
      console.error('Erro ao ler diretório de projetos:', err);
      return [];
    }
  });

  ipcMain.handle('abrirProjeto', async (event, nome) => {
    const fullPath = path.join(PROJETOS_PATH, nome);
    try {
      exec(`code -n "${fullPath}"`);
      return { success: true };
    } catch (err) {
      console.error('Erro ao abrir projeto no VSCode:', err);
      return { success: false, error: err.message };
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

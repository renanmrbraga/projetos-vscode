const waitOn = require('wait-on');

waitOn(
  {
    // Espera o HTML real, não só a porta
    resources: ['http://localhost:5173/index.html'],
    delay: 200,
    interval: 300,
    timeout: 15000,
    window: 1000,
  },
  function (err) {
    if (err) {
      console.error('❌ Vite não respondeu a tempo. Encerrando Electron...');
      process.exit(1);
    } else {
      console.log('✅ Vite pronto. Iniciando Electron...');
      const { spawn } = require('child_process');
      spawn('npx', ['electron', '.'], {
        stdio: 'inherit',
        shell: true,
      });
    }
  }
);

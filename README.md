
# Projetos App

Aplicativo de desktop leve e moderno para abrir projetos locais no VSCode com interface futurista (Electron + React + Vite).

---

## Como rodar em modo desenvolvimento

1. Clone o repositório:

```bash
git clone https://github.com/renanmrbraga/projetos-vscode.git
cd projetos-vscode
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo `.env` na raiz com o caminho dos seus projetos:

```env
PROJETOS_PATH=C:\Users\SeuUsuario\Projetos
```

4. Inicie o app:

```bash
npm run dev
```

---

## Como gerar o instalador `.exe` (modo produção)

1. Gere o build da interface:

```bash
npm run build
```

2. Empacote o aplicativo:

```bash
npm run dist
```

3. Após o processo, você terá:

- `dist/Projetos App Setup 1.0.0.exe` → Instalador do app
- `dist/win-unpacked/` → Versão portátil que roda direto


4. Colocar o arquivo .env na pasta do programa.

---

## Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- Visual Studio Code instalado e acessível no terminal (`code`)
- Git instalado (para clonar o repositório)
- Windows 10/11 com suporte a execução de aplicativos locais

---

## Estrutura esperada

```
projetos-vscode/
├── build/                # Ícone do app (icon.ico)
├── dist/                 # Gerado após build
├── node_modules/         # Dependências
├── src/                  # Código React
├── main.js               # Entrada principal do Electron
├── preload.js            # Comunicação segura
├── vite.config.js        # Configuração do Vite
├── .env                  # Caminho dos projetos
├── package.json
```

---

## Recursos

- Interface dark moderna
- Listagem automática de projetos
- Abertura direta no VSCode
- Compatível com Windows (instalador ou portátil)
- Suporte a `.env` com caminho dinâmico

---

## 📄 Licença

MIT

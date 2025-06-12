# Build Instructions

## Prerequisites
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Installation Steps

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development Build
To run the application in development mode:
```bash
npm start
```

## Production Build
To create a production build:
```bash
npm run build
```

## Project Structure
- `main.js` - Main Electron process
- `renderer.js` - Renderer process
- `styles.css` - Application styles
- `index.html` - Main application window

## Dependencies
All dependencies are managed through npm and listed in `package.json`. The main dependencies include:
- Electron
- Other dependencies as specified in package.json

## Troubleshooting
If you encounter any build issues:
1. Delete the `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Try building the project again 
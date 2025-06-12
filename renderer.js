const { ipcRenderer } = require('electron');

// Initialize Quill
const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean']
        ]
    }
});

const saveButton = document.getElementById('saveButton');
let currentFilePath = null;
let currentLayout = 32; // Default layout

// Handle preferences
ipcRenderer.on('preferences-loaded', (event, prefs) => {
    currentLayout = prefs.layout;
    // Apply layout class
    const editorContainer = document.querySelector('.ql-container');
    editorContainer.className = `ql-container layout-${currentLayout}`;
});

// Handle menu events
ipcRenderer.on('new-file', () => {
    quill.setContents([]);
    currentFilePath = null;
});

ipcRenderer.on('file-opened', (event, { content, filePath }) => {
    quill.root.innerHTML = content;
    currentFilePath = filePath;
});

ipcRenderer.on('save-file', async () => {
    if (currentFilePath) {
        await saveFile(currentFilePath);
    } else {
        await saveFileAs();
    }
});

ipcRenderer.on('save-file-as', async () => {
    await saveFileAs();
});

ipcRenderer.on('undo', () => {
    quill.history.undo();
});

ipcRenderer.on('redo', () => {
    quill.history.redo();
});

ipcRenderer.on('cut', () => {
    document.execCommand('cut');
});

ipcRenderer.on('copy', () => {
    document.execCommand('copy');
});

ipcRenderer.on('paste', () => {
    document.execCommand('paste');
});

ipcRenderer.on('layout-changed', (event, pageCount) => {
    currentLayout = pageCount;
    // Update the editor container class
    const editorContainer = document.querySelector('.ql-container');
    editorContainer.className = `ql-container layout-${pageCount}`;
});

ipcRenderer.on('zoom-in', () => {
    const currentZoom = document.body.style.zoom || 1;
    document.body.style.zoom = currentZoom + 0.1;
});

ipcRenderer.on('zoom-out', () => {
    const currentZoom = document.body.style.zoom || 1;
    document.body.style.zoom = Math.max(0.5, currentZoom - 0.1);
});

ipcRenderer.on('zoom-reset', () => {
    document.body.style.zoom = 1;
});

// Save functions
async function saveFile(filePath) {
    const content = quill.root.innerHTML;
    const result = await ipcRenderer.invoke('save-file', {
        filePath,
        content
    });
    
    if (result.success) {
        console.log('File saved successfully');
    } else {
        alert('Error saving file: ' + result.error);
    }
}

async function saveFileAs() {
    const content = quill.root.innerHTML;
    const filePath = await ipcRenderer.invoke('save-dialog');
    
    if (filePath) {
        currentFilePath = filePath;
        await saveFile(filePath);
    }
}

// Button click handler
saveButton.addEventListener('click', async () => {
    if (currentFilePath) {
        await saveFile(currentFilePath);
    } else {
        await saveFileAs();
    }
}); 
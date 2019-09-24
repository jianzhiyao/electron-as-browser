const { ipcRenderer } = require('electron');

module.exports = function (options = {}) {
    const { browserWindowId } = options;

    return {
        sendEnterURL: (url) => { ipcRenderer.send('url-enter', url, { browserWindowId }) },
        sendChangeURL: (url) => { ipcRenderer.send('url-change', url, { browserWindowId }) },

        sendGoBack: () => { ipcRenderer.send('act', 'goBack', { browserWindowId }) },
        sendGoForward: () => { ipcRenderer.send('act', 'goForward', { browserWindowId }) },
        sendReload: () => { ipcRenderer.send('act', 'reload', { browserWindowId }) },
        sendStop: () => { ipcRenderer.send('act', 'stop', { browserWindowId }) },

        sendNewTab: (url) => { ipcRenderer.send('new-tab', url, { browserWindowId }); },
        sendSwitchTab: (id) => { ipcRenderer.send('switch-tab', id, { browserWindowId }) },
        sendCloseTab: (id) => { ipcRenderer.send('close-tab', id, { browserWindowId }) },
    };
};

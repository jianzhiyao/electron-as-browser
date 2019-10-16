const { ipcRenderer } = require('electron');

//处理界面点击相关事件
module.exports = function(options = {}) {
    const { browserWindowId } = options;

    const ipcRendererSend = (ation, value) => {
        ipcRenderer.send(ation, value, { browserWindowId })
    }

    return {
        sendEnterURL: (url) => { ipcRendererSend('url-enter', url) },
        sendChangeURL: (url) => { ipcRendererSend('url-change', url) },

        sendGoBack: () => { ipcRendererSend('act', 'goBack') },
        sendGoForward: () => { ipcRendererSend('act', 'goForward') },
        sendReload: () => { ipcRendererSend('act', 'reload') },
        sendStop: () => { ipcRendererSend('act', 'stop') },

        sendNewTab: (url) => { ipcRendererSend('new-tab', url); },
        sendSwitchTab: (id) => { ipcRendererSend('switch-tab', id) },
        sendCloseTab: (id) => { ipcRendererSend('close-tab', id) },
    };
}
import { transformUrl } from './utils.js';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        const newUrl = transformUrl(tab.url);
        if (tab.url !== newUrl) {
            chrome.tabs.update(tabId, { url: newUrl });
        }
    }
});
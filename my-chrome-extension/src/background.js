import { transformUrl } from './utils.js';

chrome.action.onClicked.addListener((tab) => {
    const newUrl = transformUrl(tab.url);
    if (tab.url !== newUrl) {
        chrome.tabs.update(tab.id, { url: newUrl });
    }
});
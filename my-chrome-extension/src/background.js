import { transformUrl } from './utils.js';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach((currentTab) => {
                const newUrl = transformUrl(currentTab.url);
                if (currentTab.url !== newUrl) {
                    // Update the tab URL if it has changed
                    chrome.tabs.update(currentTab.id, { url: newUrl });
                }
            });
        });
    }
});
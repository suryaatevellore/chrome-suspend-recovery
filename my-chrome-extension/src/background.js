import { transformUrl } from './utils.js';

chrome.action.onClicked.addListener((tab) => {
    console.log('Extension clicked on tab:', tab);
    console.log('Original URL:', tab.url);
    
    const newUrl = transformUrl(tab.url);
    console.log('Transformed URL:', newUrl);
    
    if (tab.url !== newUrl) {
        console.log('Updating tab with new URL');
        chrome.tabs.update(tab.id, { url: newUrl });
    } else {
        console.log('URLs match, no update needed');
    }
});
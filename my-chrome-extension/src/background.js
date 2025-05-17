import { transformUrl } from './utils.js';

// Log when service worker loads
console.log('Service worker initialized');

// Listen for extension button clicks
chrome.action.onClicked.addListener(async (tab) => {
    console.log('Button clicked on tab:', tab.id);
    try {
        // Request permission for the current tab
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => true
        });
        
        const newUrl = transformUrl(tab.url);
        if (tab.url !== newUrl) {
            await chrome.tabs.update(tab.id, { url: newUrl });
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
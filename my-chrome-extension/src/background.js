import { transformUrl } from './utils.js';

// Log when service worker loads
console.log('Service worker initialized');

// Listen for extension button clicks
chrome.action.onClicked.addListener(async (tab) => {
    console.log('Button clicked on tab:', tab.id);
    try {
        // No need to execute script for URL transformation
        const newUrl = transformUrl(tab.url);
        console.log('Original URL:', tab.url);
        console.log('Transformed URL:', newUrl);
        
        if (tab.url !== newUrl) {
            await chrome.tabs.update(tab.id, { url: newUrl });
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
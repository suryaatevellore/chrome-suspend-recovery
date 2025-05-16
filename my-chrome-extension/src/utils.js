function transformUrl(originalUrl) {
    // Check if the URL is a suspended tab with a &uri= parameter
    const suspendedPrefix = 'chrome-extension://egphkchlgpkjfpffgpnjilpgaocjdlfp/suspended.html#';
    if (originalUrl.startsWith(suspendedPrefix)) {
        // Extract the fragment after '#'
        const fragment = originalUrl.split('#')[1];
        const params = new URLSearchParams(fragment);
        const actualUrl = params.get('uri');
        if (actualUrl) {
            return actualUrl;
        }
    }
    // Otherwise, return the original URL
    return originalUrl;
}

function addQueryParam(url, param, value) {
    const newUrl = new URL(url);
    newUrl.searchParams.append(param, value);
    return newUrl.toString();
}

export { transformUrl, addQueryParam };
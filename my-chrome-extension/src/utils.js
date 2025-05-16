function transformUrl(originalUrl) {
    // Regex to match chrome-extension://<random>/suspended.html#
    const suspendedRegex = /^chrome-extension:\/\/[a-z]{32}\/suspended\.html#/;
    if (suspendedRegex.test(originalUrl)) {
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
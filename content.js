function blobToBase64(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]); 
        reader.readAsDataURL(blob);
    });
}

async function getFaviconHash(url) {
    const response = await fetch(url, { mode: 'cors' });
    const blob = await response.blob();
    const base64 = await blobToBase64(blob);
    const spacedBase64 = base64.match(/.{1,76}/g).join("\n") + "\n"
	return murmurHash3.x86.hash32(new TextEncoder().encode(spacedBase64));
}

browser.runtime.onMessage.addListener(async (message) => {
    const faviconHash = await getFaviconHash(message.url);
    await navigator.clipboard.writeText("http.favicon.hash:" + faviconHash);
});
browser.contextMenus.create({
    id: "favicon-shodandork",
    title: "Copy the Shodan dork for the favicon to the clipboard",
    contexts: ["image"],
    documentUrlPatterns: ["*://*/*.ico"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "favicon-shodandork") {
        browser.tabs.sendMessage(tab.id, { url: info.srcUrl });
    }
});



chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed and Running");

    // Define rules for blocking websites
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
            {
                id: 1,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "facebook.com", // Blocking Facebook
                    resourceTypes: ["main_frame"]
                }
            },
            {
                id: 2,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "malicious-site.com", // Blocking malicious-site.com
                    resourceTypes: ["main_frame"]
                }
            }
        ],
        removeRuleIds: [1, 2] // Remove previous rules if they exist
    });
});

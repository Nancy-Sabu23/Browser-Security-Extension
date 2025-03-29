document.getElementById("addSite").addEventListener("click", function() {
    let site = document.getElementById("siteInput").value.trim();
    if (site) {
        chrome.storage.local.get({ blockedSites: [] }, function(data) {
            let sites = data.blockedSites;
            sites.push(site);
            chrome.storage.local.set({ blockedSites: sites }, function() {
                displayBlockedSites();
            });
        });
    }
});

function displayBlockedSites() {
    chrome.storage.local.get({ blockedSites: [] }, function(data) {
        let list = document.getElementById("blockedList");
        list.innerHTML = "";
        data.blockedSites.forEach(site => {
            let li = document.createElement("li");
            li.textContent = site;
            list.appendChild(li);
        });
    });
}

// Load the blocked sites on popup open
displayBlockedSites();

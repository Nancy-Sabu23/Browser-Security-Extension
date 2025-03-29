# Browser-Security-Extension

We’re building a Browser Security Extension that helps block malicious websites.

---

🔹 Project Overview

✅ Create a Chrome Extension that monitors URLs.

✅ Block access to malicious websites based on a predefined list.

✅ Use JavaScript, Manifest V3, and Chrome Extension APIs.

---

🔹 Step 1: Set Up Your Project Folder

1️⃣ Create a folder named browser-security-extension.

2️⃣ Inside the folder, create these files:

manifest.json → Extension configuration

background.js → The main logic for blocking sites

popup.html → UI for managing blocked sites

popup.js → JavaScript for the UI

style.css → Styling for the popup

rules.json → Blocking rules

---

🔹 Step 2: Create manifest.json

This is the brain of the extension. It tells Chrome how the extension works.

Create manifest.json and add the code.
  
Explanation:  

✅ manifest_version: Chrome uses version 3.

✅ permissions: Access to web requests, storage, and tabs.

✅ background: Runs background.js as a service worker.

✅ action: Adds a popup UI for users to manage settings.

---

🔹 Step 3: Implement the Blocking Logic (background.js)

Create background.js and add the code.

Explanation:

✅ blockedSites: Stores a list of malicious domains.

✅ onBeforeRequest: Listens for network requests.

✅ Blocks access if a request matches a blocked domain.

---

🔹 Step 4: Create the Popup UI (popup.html)

Create popup.html and add the code.

Explanation:

✅ Input field → Allows users to add sites to the block list.

✅ Button → Blocks the entered site.

✅ List (ul) → Shows blocked sites.

---

🔹 Step 5: Add Functionality to the UI (popup.js)

Create popup.js and add the code.

Explanation:

✅ Stores blocked sites in Chrome’s local storage.

✅ Displays the list of blocked sites in the popup.

✅ Updates background.js whenever a new site is added.

---

🔹 Step 6: Style the Popup (style.css)

Create style.css and add the code.

---

🔹 Step 7: Create Blocking Rules (rules.json)

Create a new file in your project folder called rules.json.
Add the code inside it.

Explanation:

✅This tells chrome to block the sites.

---

🔹 Step 8: Add an Extension Icon (Optional)

Find a small PNG icon (128x128px) and save it as icon.png in your project folder.

---

🔹 Step 9: Load the Extension in Chrome

1️⃣ Open Chrome and go to chrome://extensions/.

2️⃣ Enable Developer Mode (toggle in the top-right).

3️⃣ Click "Load unpacked" and select your browser-security-extension folder.

4️⃣ The extension should now appear in Chrome!

---

🔹 Step 10: Test Your Extension

1️⃣ Click the extension icon → Enter facebook.com → Click Block.

2️⃣ Try opening facebook.com → It should be blocked!

3️⃣ Manage the blocked sites from the popup UI.

---

🔹 Next Steps

✅ Improve UI (better design, dark mode).

✅ Add an "Unblock" feature.

✅ Use an online threat database (like PhishTank) to detect threats.

---

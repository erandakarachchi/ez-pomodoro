console.log("Background script running");

let active = false;

function makeOrange(color: string): void {
  document.body.style.backgroundColor = color;
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(() => {
    console.log("Icon Clicked");
    // chrome.tabs.create({
    //   // url: chrome.runtime.getURL("settings.html"),
    // });
    const details: chrome.action.BadgeTextDetails = {
      text: "Off",
    };
    chrome.action.setBadgeText(details);
    chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
  });

  chrome.contextMenus.create({
    id: "toggleColor",
    title: "Toggle Background Color",
    contexts: ["action"],
  });
});

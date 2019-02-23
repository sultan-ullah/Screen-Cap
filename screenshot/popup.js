let choose = document.getElementById('chooseArea');

choose.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.insertCSS(tabs[0].id, {file: "contentStyles.css"});
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "inject.js"}
        );
    });
};



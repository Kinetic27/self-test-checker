chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        function: () => {
            document.querySelectorAll('input[data-ans="1"]').forEach((e) => {
                e.checked = true;
            });
            document.querySelectorAll('select').forEach((e) => {
                e.options[(+e.getAttribute('data-ans') + 1) % e.options.length].selected = true;
            });
        }
    });
});
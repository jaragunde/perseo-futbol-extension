chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://pf-env.eba-2fntvvpi.eu-west-3.elasticbeanstalk.com/";
    chrome.tabs.create({ url: newURL });
});

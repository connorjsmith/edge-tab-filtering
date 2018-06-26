var button = document.getElementById('get-tabs');
button.onclick = function() {
    let target = document.getElementById('tab-result-container');
    let tabs = browser.tabs.query(
	{
	    currentWindow: true
	},
	function(tabs) {
	    console.log("Hello world!");
	    var str = "";
	    for (let tab of tabs) {
		str = str + tab.url + "<br>";
	    }
	    target.innerHTML = str;
	}
    );
};

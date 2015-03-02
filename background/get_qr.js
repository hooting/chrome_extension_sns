function setupQR(info,tab) {
	// sets up (some of) the strings needed to pass to the qr generator api
	qrsz = "230"
	showMethod = "newtab";
	
	if (!(!info.selectionText || info.selectionText.length == 0)){
		qrString = info.selectionText;
	}	else if(!(!info.srcUrl || info.srcUrl.length == 0)){
		qrString = info.srcUrl;
	} else{
		qrString = info.pageUrl;
	}
	
	qrString = qrString.replace(/\n/gi,"%0A");
	qrString = qrString.replace("\"","%22");
	qrString = qrString.replace(/&/gi,"%26");
	qrString = qrString.replace("\+","%2B");
	qrString = qrString.replace(/#/gi,"%23");
	
	if (showMethod == "newtab") {
		chrome.tabs.create({url: "http://chart.apis.google.com/chart?cht=qr&chs=" + qrsz + "x" + qrsz + "&chl=" + qrString});
	}
}


// generates a context menu and launches setupQR() every time an item is rightclicked
chrome.contextMenus.create({title: chrome.i18n.getMessage("getSelectionQR"),
														contexts:["selection"],onclick:setupQR});
chrome.contextMenus.create({title: chrome.i18n.getMessage("getPageQR"),
														contexts:["page"],onclick:setupQR});
chrome.contextMenus.create({title: chrome.i18n.getMessage("getImageQR"),
														contexts:["image"],onclick:setupQR});







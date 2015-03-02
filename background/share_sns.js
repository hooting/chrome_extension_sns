var page = {
	shareEx: function(tab, selection, pic,type) {	
		
		if(selection == null)
		{
			selection = "";
		}
			page.share(tab.title, selection, tab.url, pic,type);
	},
	share: function(title, selected, shareUrl, pic,type) {
		var url;
		if (type == "sina"){
			url = 'http://v.t.sina.com.cn/share/share.php?';	
			url += 'title=' + '【' + encodeURIComponent(title) + '】'+  encodeURIComponent(selected);
			url += "&url=" + encodeURIComponent(shareUrl);
			if (pic) {
				url += "&pic=" + encodeURIComponent(pic);
			}
			else
				url += "&pic=";
		}	
		else if (type == "renren"){
			url = 'http://widget.renren.com/dialog/forward?api_key=fpe53jfc52ns9tnduh2yk9wxux6cyvdx';		
			url += '&url=' + encodeURIComponent(shareUrl);
			url += '&title='+'【' + encodeURIComponent(title) + '】';
			if (pic)
				url += '&images='+ encodeURIComponent(pic);
			else
				url += '&content='+'【' + encodeURIComponent(title) + '】' + encodeURIComponent(selected);			
		}		
		else if (type == "shuoshuo"){
			url = 'http://v.t.qq.com/share/share.php?';
			url += 'url=' + encodeURIComponent(shareUrl);
			url += '&title='+'【' + encodeURIComponent(title) + '】' + encodeURIComponent(selected);
			if (pic) {
				url += '&pic=' + encodeURIComponent(pic);
			}
			else
				url += '&pic=';
		}	
		window.open(url);
	},
	/*define functions of sina share*/
	imageShareSina: function(info, tab) {
		page.shareEx(tab, null, info.srcUrl,"sina");
	},
	pageShareSina: function(info, tab) {
		page.shareEx(tab, null, null,"sina");
	},
	selectionShareSina : function(info, tab) {
		page.shareEx(tab, info.selectionText, null,"sina");
	},
	
	/*define functions of renren share*/
	imageShareRenRen: function(info,tab) {
		page.shareEx(tab,null,info.srcUrl,"renren");
	},
	pageShareRenRen: function(info,tab){
		page.shareEx(tab,null,null,"renren");
	},
	selectionShareRenRen: function(info,tab){
		page.shareEx(tab,info.selectionText,null,"renren");
	},
	
	/*define functions of shuoshuo share*/
	imageShareShuoShuo: function(info,tab) {
		page.shareEx(tab,null,info.srcUrl,"shuoshuo");
	},
	pageShareShuoShuo: function(info,tab){
		page.shareEx(tab,null,null,"shuoshuo");
	},
	selectionShareShuoShuo: function(info,tab){
		page.shareEx(tab,info.selectionText,null,"shuoshuo");
	},
	
}

/*add sina share buttons*/
var image_menu_sina = chrome.contextMenus.create({
	"title": chrome.i18n.getMessage("contextMenuShareImage"),
	"contexts" : ["image"],
	"onclick": page.imageShareSina
});

var page_menu_sina = chrome.contextMenus.create({
	"title" : chrome.i18n.getMessage("contextMenuSharePage"),
	"contexts" : ["page"],
	"onclick": page.pageShareSina
});

var selection_menu_sina = chrome.contextMenus.create({
	"title" : chrome.i18n.getMessage("contextMenuShareSelection"),
	"contexts" : ["selection"],
	"onclick": page.selectionShareSina
});


/*add renren share buttons*/
var image_menu_renren = chrome.contextMenus.create({
	"title": chrome.i18n.getMessage("contextMenuShareImageRenRen"),
	"contexts" : ["image"],
	"onclick": page.imageShareRenRen
});

var page_menu_renren = chrome.contextMenus.create({
	"title": chrome.i18n.getMessage("contextMenuSharePageRenRen"),
	"contexts" : ["page"],
	"onclick": page.pageShareRenRen
});

var selection_menu_renren = chrome.contextMenus.create({
	"title": chrome.i18n.getMessage("contextMenuShareSelectionRenRen"),
	"contexts" : ["selection"],
	"onclick": page.selectionShareRenRen
});


/*add shuoshuo share buttons*/
var image_menu_shuoshuo = chrome.contextMenus.create({
	"title": chrome.i18n.getMessage("contextMenuShareImageTencent"),
	"contexts" : ["image"],
	"onclick": page.imageShareShuoShuo
});

var page_menu_shuoshuo = chrome.contextMenus.create({
	"title": chrome.i18n.getMessage("contextMenuSharePageTencent"),
	"contexts" : ["page"],
	"onclick": page.pageShareShuoShuo
});

var selection_menu_shuoshuo = chrome.contextMenus.create({
	"title": chrome.i18n.getMessage("contextMenuShareSelectionTencent"),
	"contexts" : ["selection"],
	"onclick": page.selectionShareShuoShuo
});
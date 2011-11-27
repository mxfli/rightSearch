/**
 * FileName: rightSearch.js
 * Author: @mxfli
 * CreateTime: 2011-11-24 21:57
 * Description:
 *      Description of rightSearch.js
 */
function searchByDefaultEngine() {
    return function (info) {
        //console.log("info :", JSON.stringify(info));
        console.log("search '", info.selectionText, "' by default search engine.");
        //console.log("How to search by default engine?");
        var pageUrl = info.pageUrl.split(":");
        var isHTTP = pageUrl[0].indexOf("http") !== -1;
        var site = isHTTP ? " site:" + pageUrl[1].split("\/")[2] : "";
        console.log("site:", site);
        var searchStr = "https://encrypted.google.com/search?sourceid=chrome&ie=UTF-8&q=" + info.selectionText + site;
        chrome.tabs.create({url:searchStr}, function (searchTab) {
            console.log("load page URL:", searchStr);
        });

    }
}

chrome.contextMenus.create({
                               "title":"Search \"%s\" within this site",
                               "type":"normal",
                               "contexts":["selection"],
                               "onclick":searchByDefaultEngine()
                           });

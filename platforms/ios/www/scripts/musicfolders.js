!function(e){function r(){var e=i(),r=o[e];return r||(r=o[e]={query:{SortBy:"SortName",SortOrder:"Ascending",Fields:"PrimaryImageAspectRatio,SortName,SyncInfo",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",Limit:LibraryBrowser.getDefaultPageSize()},view:LibraryBrowser.getSavedView(e)||LibraryBrowser.getDefaultItemsView("Poster","Poster")},r.query.ParentId=LibraryMenu.getTopParentId(),LibraryBrowser.loadSavedQueryValues(e,r.query)),r}function t(){return r().query}function i(){return LibraryBrowser.getSavedQueryKey("folders")}function a(o,n){Dashboard.showLoadingMsg();var s=t();ApiClient.getItems(Dashboard.getCurrentUserId(),s).then(function(t){window.scrollTo(0,0);var u="",d=r().view,y=LibraryBrowser.getQueryPagingHtml({startIndex:s.StartIndex,limit:s.Limit,totalRecordCount:t.TotalRecordCount,viewButton:!1,showLimit:!1,sortButton:!1,addLayoutButton:!1,currentLayout:d,updatePageSizeSetting:!1,viewIcon:"filter-list",layouts:"List,Poster,PosterCard,Timeline"});o.querySelector(".listTopPaging").innerHTML=y,"Poster"==d&&(u=LibraryBrowser.getPosterViewHtml({items:t.Items,shape:"square",context:"music",showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0}));var l=o.querySelector("#items");l.innerHTML=u+y,ImageLoader.lazyChildren(l),e(".btnNextPage",o).on("click",function(){s.StartIndex+=s.Limit,a(o,n)}),e(".btnPreviousPage",o).on("click",function(){s.StartIndex-=s.Limit,a(o,n)}),LibraryBrowser.saveQueryValues(i(),s),LibraryBrowser.setLastRefreshed(o),Dashboard.hideLoadingMsg()})}var o={};window.MusicPage.initFoldersTab=function(){},window.MusicPage.renderFoldersTab=function(e,r){LibraryBrowser.needsRefresh(r)&&a(r)}}(jQuery,document);
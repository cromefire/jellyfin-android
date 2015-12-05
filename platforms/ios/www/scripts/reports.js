!function(e,t){function i(e){var t="";return t+='<table id="tblReport" data-role="table" data-mode="reflow" class="tblLibraryReport stripedTable ui-responsive table-stroke detailTable" style="display:table;">',t+="<thead>",e.Headers.map(function(e){var i='<th data-priority="persist">';e.ShowHeaderLabel&&(e.SortField&&(i+='<a class="lnkColumnSort" href="#" data-sortfield="'+e.SortField+'" style="text-decoration:underline;">'),i+=e.Name||"&nbsp;",e.SortField&&(i+="</a>",e.SortField===u&&(i+="Descending"===m.SortOrder?'<span style="font-weight:bold;margin-left:5px;vertical-align:top;font-size:14px">&darr;</span>':'<span style="font-weight:bold;margin-left:5px;vertical-align:top;font-size:14px;">&uarr;</span>'))),i+="</th>",t+=i}),t+="</thead>",t+="<tbody>",e.IsGrouped===!1?e.Rows.map(function(i){t+=a(e.Headers,i)}):e.Groups.map(function(i){t+='<tr style="background-color: rgb(51, 51, 51);">',t+='<th scope="rowgroup" colspan="'+e.Headers.length+'">'+(i.Name||"&nbsp;")+"</th>",t+="</tr>",i.Rows.map(function(i){t+=a(e.Headers,i)}),t+="<tr>",t+='<th scope="rowgroup" colspan="'+e.Headers.length+'">&nbsp;</th>',t+="</tr>"}),t+="</tbody>",t+="</table>"}function a(e,t){var i="";i+="<tr>";for(var a=0;a<e.length;a++){var s=e[a],n=t.Columns[a];i+=r(s,t,n)}return i+="</tr>"}function r(e,t,i){var a="";switch(a+="<td>",e.ItemViewType){case"None":a+=i.Name;break;case"Detail":var r=t.Id;i.Id&&(r=i.Id),a+='<a href="itemdetails.html?id='+r+'">'+i.Name+"</a>";break;case"Edit":a+='<a href="edititemmetadata.html?id='+t.Id+'">'+i.Name+"</a>";break;case"List":a+='<a href="itemlist.html?id='+t.Id+'">'+i.Name+"</a>";break;case"ItemByNameDetails":a+='<a href="itemdetails.html?id='+i.Id+"&context="+t.RowType+'">'+i.Name+"</a>";break;case"EmbeddedImage":t.HasEmbeddedImage&&(a+='<div class="libraryReportIndicator clearLibraryReportIndicator"><div class="ui-icon-check ui-btn-icon-notext"></div></div>');break;case"SubtitleImage":t.HasSubtitles&&(a+='<div class="libraryReportIndicator clearLibraryReportIndicator"><div class="ui-icon-check ui-btn-icon-notext"></div></div>');break;case"TrailersImage":t.HasLocalTrailer&&(a+='<div class="libraryReportIndicator clearLibraryReportIndicator"><div class="ui-icon-check ui-btn-icon-notext"></div></div>');break;case"SpecialsImage":t.HasSpecials&&(a+='<div class="libraryReportIndicator clearLibraryReportIndicator"><div class="ui-icon-check ui-btn-icon-notext"></div></div>');break;case"LockDataImage":t.HasLockData&&(a+='<img src="css/images/editor/lock.png"  style="width:18px"/>');break;case"TagsPrimaryImage":t.HasImageTagsPrimary||(a+='<a href="edititemimages.html?id='+t.Id+'"><img src="css/images/editor/missingprimaryimage.png" title="Missing primary image." style="width:18px"/></a>');break;case"TagsBackdropImage":t.HasImageTagsBackdrop||"Episode"!==t.RowType&&"Season"!==t.RowType&&"Audio"!==t.MediaType&&"TvChannel"!==t.RowType&&"MusicAlbum"!==t.RowType&&(a+='<a href="edititemimages.html?id='+t.Id+'"><img src="css/images/editor/missingbackdrop.png" title="Missing backdrop image." style="width:18px"/></a>');break;case"TagsLogoImage":t.HasImageTagsLogo||("Movie"===t.RowType||"Trailer"===t.RowType||"Series"===t.RowType||"MusicArtist"===t.RowType||"BoxSet"===t.RowType)&&(a+='<a href="edititemimages.html?id='+t.Id+'"><img src="css/images/editor/missinglogo.png" title="Missing logo image." style="width:18px"/></a>');break;case"UserPrimaryImage":if(t.UserId){var s=ApiClient.getUserImageUrl(t.UserId,{height:24,type:"Primary"});a+=s?'<img src="'+s+'" />':""}break;case"StatusImage":t.HasLockData&&(a+='<img src="css/images/editor/lock.png"  style="width:18px"/>'),t.HasLocalTrailer||"Movie"!==t.RowType||(a+='<img src="css/images/editor/missingtrailer.png" title="Missing local trailer."  style="width:18px"/>'),t.HasImageTagsPrimary||(a+='<a href="edititemimages.html?id='+t.Id+'"><img src="css/images/editor/missingprimaryimage.png" title="Missing primary image." style="width:18px"/></a>'),t.HasImageTagsBackdrop||"Episode"!==t.RowType&&"Season"!==t.RowType&&"Audio"!==t.MediaType&&"TvChannel"!==t.RowType&&"MusicAlbum"!==t.RowType&&(a+='<a href="edititemimages.html?id='+t.Id+'"><img src="css/images/editor/missingbackdrop.png" title="Missing backdrop image." style="width:18px"/></a>'),t.HasImageTagsLogo||("Movie"===t.RowType||"Trailer"===t.RowType||"Series"===t.RowType||"MusicArtist"===t.RowType||"BoxSet"===t.RowType)&&(a+='<a href="edititemimages.html?id='+t.Id+'"><img src="css/images/editor/missinglogo.png" title="Missing logo image." style="width:18px"/></a>');break;default:a+=i.Name}return a+="</td>"}function s(e){var t="";return t+='<div class="detailSection" >',t+='<div class="detailSectionContent">',e.Groups.map(function(e){t+='<div class="card transparentCard bannerCard"  style="vertical-align: top;">',t+='<div class="visualCardBox">',t+='<div class="cardBox " >',t+='<div class="detailSection">',t+='<div class="detailSectionHeader">',t+="<span>"+e.Header+"&nbsp;</span>",t+="</div>",t+='<div class="detailSectionContent">',t+='<div class="childrenItemsContainer itemsContainer" style="text-align: left;">',t+='<ul class="itemsListview ui-listview" >';for(var i=e.Items.length-1,a=0;p>a;a++){if(t+='<li class="ui-li listItem ui-li-has-alt ui-first-child">',i>=a){var r=e.Items[a];t+='<a class="item ui-btn"',r.Id>""&&(t+=' href="itemdetails.html?id='+r.Id+'"'),t+=">"+r.Name+"&nbsp;</a>",t+='<a title="" class="listviewMenuButton ui-btn ui-btn-inline">'+r.Value+"&nbsp;</a>"}else t+='<a class="item ui-btn">&nbsp;</a>';t+="</li>"}t+="</ul>",t+="</div>",t+="</div>",t+="</div>",t+="</div>",t+="</div>",t+="</div>"}),t+="</div>",t+="</div>"}function n(){m.UserId=Dashboard.getCurrentUserId(),m.HasQueryLimit=!1;var e=ApiClient.getUrl("Reports/Items/Download",m);e&&(window.location.href=e)}function o(t){m.UserId=Dashboard.getCurrentUserId();var i="";i=ApiClient.getUrl("Reports/Headers",m),ApiClient.getJSON(i).then(function(i){var a="None";e("#selectReportGroup",t).find("option").remove().end(),e("#selectReportGroup",t).append('<option value="None"></option>'),i.map(function(i){if(("Screen"===i.DisplayType||"ScreenExport"===i.DisplayType)&&i.CanGroup&&i.FieldName.length>0){var r='<option value="'+i.FieldName+'">'+i.Name+"</option>";e("#selectReportGroup",t).append(r),m.GroupBy===i.FieldName&&(a=i.FieldName)}}),e("#selectPageSize",t).val(a)})}function c(t,a){window.scrollTo(0,0);var r="";"ReportData"===m.ReportView||"ReportStatistics"===m.ReportView?(e("#selectIncludeItemTypesBox",t).show(),e("#tabFilter",t).show()):(e("#selectIncludeItemTypesBox",t).hide(),e("#tabFilterBox",t).hide(),e("#tabFilter",t).hide());var n=LibraryBrowser.getQueryPagingHtml({startIndex:m.StartIndex,limit:m.Limit,totalRecordCount:a.TotalRecordCount,updatePageSizeSetting:!1,viewButton:!0,showLimit:!1});switch("ReportData"===m.ReportView||"ReportActivities"===m.ReportView?(e(".listTopPaging",t).html(n).trigger("create"),e(".listTopPaging",t).show(),e(".listBottomPaging",t).html(n).trigger("create"),e(".listBottomPaging",t).show(),e(".btnNextPage",t).on("click",function(){m.StartIndex+=m.Limit,l(t)}),e(".btnNextPage",t).show(),e(".btnPreviousPage",t).on("click",function(){m.StartIndex-=m.Limit,l(t)}),e(".btnPreviousPage",t).show(),e("#btnReportExport",t).show(),e("#selectPageSizeBox",t).show(),e("#selectReportGroupingBox",t).show(),e("#grpReportsColumns",t).show(),r+=i(a),e(".reporContainer",t).html(r).trigger("create"),e(".lnkColumnSort",t).on("click",function(){var e=this.getAttribute("data-sortfield");m.SortBy===e?"Descending"===m.SortOrder?(m.SortOrder="Ascending",m.SortBy=u):(m.SortOrder="Descending",m.SortBy=e):(m.SortOrder="Ascending",m.SortBy=e),m.StartIndex=0,l(t)})):(e(".listTopPaging",t).html(n).trigger("create"),e(".listTopPaging",t).show(),e(".listBottomPaging",t).hide(),e(".btnNextPage",t).hide(),e(".btnPreviousPage",t).hide(),e("#btnReportExport",t).hide(),e("#selectPageSizeBox",t).hide(),e("#selectReportGroupingBox",t).hide(),e("#grpReportsColumns",t).hide(),r+=s(a),e(".reporContainer",t).html(r).trigger("create")),e("#GroupStatus",t).hide(),e("#GroupAirDays",t).hide(),e("#GroupEpisodes",t).hide(),m.IncludeItemTypes){case"Series":case"Season":e("#GroupStatus",t).show(),e("#GroupAirDays",t).show();break;case"Episode":e("#GroupStatus",t).show(),e("#GroupAirDays",t).show(),e("#GroupEpisodes",t).show()}e(".viewPanel",t).refresh}function l(e){Dashboard.showLoadingMsg(),m.UserId=Dashboard.getCurrentUserId();var t="";switch(m.ReportView){case"ReportData":m.HasQueryLimit=!0,t=ApiClient.getUrl("Reports/Items",m);break;case"ReportStatistics":m.TopItems=p,m.HasQueryLimit=!1,t=ApiClient.getUrl("Reports/Statistics",m);break;case"ReportActivities":m.HasQueryLimit=!0,t=ApiClient.getUrl("Reports/Activities",m)}ApiClient.getJSON(t).then(function(t){d(e),c(e,t)}),Dashboard.hideLoadingMsg()}function d(t){e(".chkStandardFilter",t).each(function(){var e=","+(m.Filters||""),t=this.getAttribute("data-filter");this.checked=-1!=e.indexOf(","+t)}).checkboxradio("refresh"),e(".chkVideoTypeFilter",t).each(function(){var e=","+(m.VideoTypes||""),t=this.getAttribute("data-filter");this.checked=-1!=e.indexOf(","+t)}).checkboxradio("refresh"),e(".chkStatus",t).each(function(){var e=","+(m.SeriesStatus||""),t=this.getAttribute("data-filter");this.checked=-1!=e.indexOf(","+t)}).checkboxradio("refresh"),e(".chkAirDays",t).each(function(){var e=","+(m.AirDays||""),t=this.getAttribute("data-filter");this.checked=-1!=e.indexOf(","+t)}).checkboxradio("refresh"),e("#chk3D",t).checked(1==m.Is3D).checkboxradio("refresh"),e("#chkHD",t).checked(1==m.IsHD).checkboxradio("refresh"),e("#chkSD",t).checked(0==m.IsHD).checkboxradio("refresh"),e("#chkSubtitle",t).checked(1==m.HasSubtitles).checkboxradio("refresh"),e("#chkTrailer",t).checked(1==m.HasTrailer).checkboxradio("refresh"),e("#chkMissingTrailer",t).checked(0==m.HasTrailer).checkboxradio("refresh"),e("#chkSpecialFeature",t).checked(1==m.HasSpecialFeature).checkboxradio("refresh"),e("#chkThemeSong",t).checked(1==m.HasThemeSong).checkboxradio("refresh"),e("#chkThemeVideo",t).checked(1==m.HasThemeVideo).checkboxradio("refresh"),e("#selectPageSize",t).val(m.Limit),e("#chkMissingRating",t).checked(0==m.HasOfficialRating).checkboxradio("refresh"),e("#chkMissingOverview",t).checked(0==m.HasOverview).checkboxradio("refresh"),e("#chkYearMismatch",t).checked(1==m.IsYearMismatched).checkboxradio("refresh"),e("#chkIsLocked",t).checked(1==m.IsLocked).checkboxradio("refresh"),e("#chkSpecialEpisode",t).checked(0==m.ParentIndexNumber).checkboxradio("refresh"),e("#chkMissingEpisode",t).checked(1==m.IsMissing).checkboxradio("refresh"),e("#chkFutureEpisode",t).checked(1==m.IsUnaired).checkboxradio("refresh"),e("#selectIncludeItemTypes").val(m.IncludeItemTypes)}function h(e){g||(g=!0,QueryReportFilters.loadFilters(e,Dashboard.getCurrentUserId(),m,function(){l(e)}),QueryReportColumns.loadColumns(e,Dashboard.getCurrentUserId(),m,function(){l(e)}))}var g,u="SortName",p=5,m={StartIndex:0,Limit:100,IncludeItemTypes:"Movie",HasQueryLimit:!0,GroupBy:"None",ReportView:"ReportData",DisplayType:"Screen"};e(t).on("pageinit","#libraryReportManagerPage",function(){var t=this;e("#selectIncludeItemTypes",t).on("change",function(){m.StartIndex=0,m.ReportView=e("#selectViewType",t).val(),m.IncludeItemTypes=this.value,m.SortOrder="Ascending",m.ReportColumns=null,e(".btnReportExport",t).hide(),g=!1,o(t),h(t),l(t)}),e("#selectViewType",t).on("change",function(){m.StartIndex=0,m.ReportView=this.value,m.IncludeItemTypes=e("#selectIncludeItemTypes",t).val(),m.SortOrder="Ascending",g=!1,m.ReportColumns=null,o(t),h(t),l(t)}),e("#selectReportGroup",t).on("change",function(){m.GroupBy=this.value,m.StartIndex=0,l(t)}),e("#btnReportExportCsv",t).on("click",function(e){m.ExportType="CSV",n(t,e)}),e("#btnReportExportExcel",t).on("click",function(e){m.ExportType="Excel",n(t,e)}),e("#btnResetReportColumns",t).on("click",function(){m.ReportColumns=null,m.StartIndex=0,g=!1,h(t),l(t)}),e(".viewPanel",t).on("panelopen",function(){h(t)}),e("#selectPageSize",t).on("change",function(){m.Limit=parseInt(this.value),m.StartIndex=0,l(t)}),e(".chkStandardFilter",this).on("change",function(){var e=this.getAttribute("data-filter"),i=m.Filters||"";i=(","+i).replace(","+e,"").substring(1),this.checked&&(i=i?i+","+e:e),m.StartIndex=0,m.Filters=i,l(t)}),e(".chkVideoTypeFilter",this).on("change",function(){var e=this.getAttribute("data-filter"),i=m.VideoTypes||"";i=(","+i).replace(","+e,"").substring(1),this.checked&&(i=i?i+","+e:e),m.StartIndex=0,m.VideoTypes=i,l(t)}),e("#chk3D",this).on("change",function(){m.StartIndex=0,m.Is3D=this.checked?!0:null,l(t)}),e("#chkHD",this).on("change",function(){m.StartIndex=0,m.IsHD=this.checked?!0:null,l(t)}),e("#chkSD",this).on("change",function(){m.StartIndex=0,m.IsHD=this.checked?!1:null,l(t)}),e("#chkSubtitle",this).on("change",function(){m.StartIndex=0,m.HasSubtitles=this.checked?!0:null,l(t)}),e("#chkTrailer",this).on("change",function(){m.StartIndex=0,m.HasTrailer=this.checked?!0:null,l(t)}),e("#chkMissingTrailer",this).on("change",function(){m.StartIndex=0,m.HasTrailer=this.checked?!1:null,l(t)}),e("#chkSpecialFeature",this).on("change",function(){m.StartIndex=0,m.HasSpecialFeature=this.checked?!0:null,l(t)}),e("#chkThemeSong",this).on("change",function(){m.StartIndex=0,m.HasThemeSong=this.checked?!0:null,l(t)}),e("#chkThemeVideo",this).on("change",function(){m.StartIndex=0,m.HasThemeVideo=this.checked?!0:null,l(t)}),e("#radioBasicFilters",this).on("change",function(){this.checked?(e(".basicFilters",t).show(),e(".advancedFilters",t).hide()):e(".basicFilters",t).hide()}),e("#radioAdvancedFilters",this).on("change",function(){this.checked?(e(".advancedFilters",t).show(),e(".basicFilters",t).hide()):e(".advancedFilters",t).hide()}),e("#chkIsLocked",t).on("change",function(){m.StartIndex=0,m.IsLocked=this.checked?!0:null,l(t)}),e("#chkMissingOverview",t).on("change",function(){m.StartIndex=0,m.HasOverview=this.checked?!1:null,l(t)}),e("#chkMissingEpisode",t).on("change",function(){m.StartIndex=0,m.IsMissing=this.checked?!0:!1,l(t)}),e("#chkMissingRating",t).on("change",function(){m.StartIndex=0,m.HasOfficialRating=this.checked?!1:null,l(t)}),e("#chkYearMismatch",t).on("change",function(){m.StartIndex=0,m.IsYearMismatched=this.checked?!0:null,l(t)}),e("#chkMissingEpisode",t).on("change",function(){m.StartIndex=0,m.IsMissing=this.checked?!0:!1,l(t)}),e("#chkFutureEpisode",t).on("change",function(){m.StartIndex=0,this.checked?(m.IsUnaired=!0,m.IsVirtualUnaired=null):(m.IsUnaired=null,m.IsVirtualUnaired=!1),l(t)}),e("#chkSpecialEpisode",t).on("change",function(){m.ParentIndexNumber=this.checked?0:null,l(t)}),e(".chkAirDays",this).on("change",function(){var e=this.getAttribute("data-filter"),i=m.AirDays||"";i=(","+i).replace(","+e,"").substring(1),this.checked&&(i=i?i+","+e:e),m.AirDays=i,m.StartIndex=0,l(t)}),e(".chkStatus",this).on("change",function(){var e=this.getAttribute("data-filter"),i=m.SeriesStatus||"";i=(","+i).replace(","+e,"").substring(1),this.checked&&(i=i?i+","+e:e),m.SeriesStatus=i,m.StartIndex=0,l(t)}),e(t.getElementsByClassName("viewTabButton")).on("click",function(){var t=e(this).parents(".viewPanel");e(".viewTabButton",t).removeClass("ui-btn-active"),this.classList.add("ui-btn-active"),e(".viewTab",t).addClass("hide"),e("."+this.getAttribute("data-tab"),t).removeClass("hide")})}).on("pageshow","#libraryReportManagerPage",function(){m.UserId=Dashboard.getCurrentUserId();var t=this;m.SortOrder="Ascending",QueryReportFilters.onPageShow(t,m),QueryReportColumns.onPageShow(t,m),e("#selectIncludeItemTypes",t).val(m.IncludeItemTypes).trigger("change"),d(t),g=!1,d(this)})}(jQuery,document),function(e){function t(e,t,i,a){var r;r=a.length?$(t,e).show():$(t,e).hide();var s="";s+='<div data-role="controlgroup">';var n=0,o="chk"+t.substring(1);s+=a.map(function(e){var t="",a=o+n,r=e,s=e,c=!1;return e.FieldName&&(r=e.Name,s=e.FieldName,c=e.Visible),t+='<label for="'+a+'">'+r+"</label>",t+='<input id="'+a+'" type="checkbox" data-filter="'+s+'" class="'+i+'"',c&&(t+=' checked="checked" '),t+="/>",n++,t}).join(""),s+="</div>",$(".filterOptions",r).html(s).trigger("create")}function i(e,i){i.Tags&&(i.Tags.length=Math.min(i.Tags.length,50)),t(e,".genreFilters","chkGenreFilter",i.Genres),t(e,".officialRatingFilters","chkOfficialRatingFilter",i.OfficialRatings),t(e,".tagFilters","chkTagFilter",i.Tags),t(e,".yearFilters","chkYearFilter",i.Years)}function a(e,i){i.Tags&&(i.Tags.length=Math.min(i.Tags.length,50)),t(e,".reportsColumns","chkReportColumns",i)}function r(e,t,i){$(".chkGenreFilter",e).on("change",function(){var e=this.getAttribute("data-filter"),a=t.Genres||"",r="|";a=(r+a).replace(r+e,"").substring(1),this.checked&&(a=a?a+r+e:e),t.StartIndex=0,t.Genres=a,i()}),$(".chkTagFilter",e).on("change",function(){var e=this.getAttribute("data-filter"),a=t.Tags||"",r="|";a=(r+a).replace(r+e,"").substring(1),this.checked&&(a=a?a+r+e:e),t.StartIndex=0,t.Tags=a,i()}),$(".chkYearFilter",e).on("change",function(){var e=this.getAttribute("data-filter"),a=t.Years||"",r=",";a=(r+a).replace(r+e,"").substring(1),this.checked&&(a=a?a+r+e:e),t.StartIndex=0,t.Years=a,i()}),$(".chkOfficialRatingFilter",e).on("change",function(){var e=this.getAttribute("data-filter"),a=t.OfficialRatings||"",r="|";a=(r+a).replace(r+e,"").substring(1),this.checked&&(a=a?a+r+e:e),t.StartIndex=0,t.OfficialRatings=a,i()})}function s(e,t,i){$(".chkReportColumns",e).on("change",function(){var e=this.getAttribute("data-filter"),a=t.ReportColumns||"",r="|";a=(r+a).replace(r+e,"").substring(1),this.checked&&(a=a?a+r+e:e),t.StartIndex=0,t.ReportColumns=a,i()})}function n(e,t,a,s){return ApiClient.getJSON(ApiClient.getUrl("Items/Filters",{UserId:t,ParentId:a.ParentId,IncludeItemTypes:a.IncludeItemTypes,ReportView:a.ReportView})).then(function(t){i(e,t),r(e,a,s)})}function o(e,t,i,r){return ApiClient.getJSON(ApiClient.getUrl("Reports/Headers",{UserId:t,IncludeItemTypes:i.IncludeItemTypes,ReportView:i.ReportView})).then(function(t){a(e,t);var n="",o="|";t.map(function(e){("Screen"===e.DisplayType||"ScreenExport"===e.DisplayType)&&(n=n?n+o+e.FieldName:e.FieldName)}),i.ReportColumns||(i.ReportColumns=n),s(e,i,r)})}function c(e,t){t.Genres=null,t.Years=null,t.OfficialRatings=null,t.Tags=null}function l(e,t){t.ReportColumns=null}e.QueryReportFilters={loadFilters:n,onPageShow:c},e.QueryReportColumns={loadColumns:o,onPageShow:l}}(window);
!function(e,r){function i(e){var r=DeferredBuilder.Deferred();return u&&g==e?(r.resolveWith(null,[u]),r.promise()):(u=null,Dashboard.showLoadingMsg(),ApiClient.getJSON(ApiClient.getUrl("LiveTv/Registration",{ProgramId:e,Feature:"seriesrecordings"})).then(function(i){g=e,u=i,r.resolveWith(null,[u]),Dashboard.hideLoadingMsg()},function(){r.resolveWith(null,[{TrialVersion:!0,IsValid:!0,IsRegistered:!1}]),Dashboard.hideLoadingMsg()}),r.promise())}function t(r,i,t){h=t,e(".itemName",r).html(t.Name),e(".itemEpisodeName",r).html(t.EpisodeTitle||""),e(".itemCommunityRating",r).html(LibraryBrowser.getRatingHtml(t)),LibraryBrowser.renderGenres(e(".itemGenres",r),t),LibraryBrowser.renderOverview(r.querySelectorAll(".itemOverview"),t),e(".itemMiscInfo",r).html(LibraryBrowser.getMiscInfoHtml(t)),e("#chkNewOnly",r).checked(i.RecordNewOnly),e("#chkAllChannels",r).checked(i.RecordAnyChannel),e("#chkAnyTime",r).checked(i.RecordAnyTime),e("#txtPrePaddingMinutes",r).val(i.PrePaddingSeconds/60),e("#txtPostPaddingMinutes",r).val(i.PostPaddingSeconds/60),t.IsSeries?e("#eligibleForSeriesFields",r).show():e("#eligibleForSeriesFields",r).hide(),a(r,i.Days),Dashboard.hideLoadingMsg()}function n(e){Dashboard.showLoadingMsg();var r=getParameterByName("programid"),i=ApiClient.getNewLiveTvTimerDefaults({programId:r}),n=ApiClient.getLiveTvProgram(r,Dashboard.getCurrentUserId());Promise.all([i,n]).then(function(r){var i=r[0],n=r[1];t(e,i,n)})}function a(r,i){for(var t=o(),n=0,a=t.length;a>n;n++){var s=t[n];e("#chk"+s,r).checked(-1!=i.indexOf(s))}}function o(){return LiveTvHelpers.getDaysOfWeek().map(function(e){return e.value})}function s(r){for(var i=o(),t=[],n=0,a=i.length;a>n;n++){var s=i[n];e("#chk"+s,r).checked()&&t.push(s)}return t}function d(){Dashboard.showLoadingMsg();var r=this,i=getParameterByName("programid");return ApiClient.getNewLiveTvTimerDefaults({programId:i}).then(function(i){i.PrePaddingSeconds=60*e("#txtPrePaddingMinutes",r).val(),i.PostPaddingSeconds=60*e("#txtPostPaddingMinutes",r).val(),i.RecordNewOnly=e("#chkNewOnly",r).checked(),i.RecordAnyChannel=e("#chkAllChannels",r).checked(),i.RecordAnyTime=e("#chkAnyTime",r).checked(),i.Days=s(r),e("#chkRecordSeries",r).checked()?ApiClient.createLiveTvSeriesTimer(i).then(function(){Dashboard.hideLoadingMsg(),Dashboard.navigate("livetv.html")}):ApiClient.createLiveTvTimer(i).then(function(){Dashboard.hideLoadingMsg(),Dashboard.navigate("livetv.html")})}),!1}function l(r){e("#seriesFields",r).hide(),r.querySelector(".btnSubmitContainer").classList.remove("hide"),r.querySelector(".supporterContainer").classList.add("hide")}function c(r){e("#seriesFields",r).show(),r.querySelector(".btnSubmitContainer").classList.remove("hide"),i(getParameterByName("programid")).then(function(e){e.IsValid?r.querySelector(".btnSubmitContainer").classList.remove("hide"):r.querySelector(".btnSubmitContainer").classList.add("hide"),e.IsRegistered?r.querySelector(".supporterContainer").classList.add("hide"):(r.querySelector(".supporterContainer").classList.remove("hide"),AppInfo.enableSupporterMembership?r.querySelector(".btnSupporter").classList.remove("hide"):r.querySelector(".btnSupporter").classList.add("hide"),e.TrialVersion?r.querySelector(".supporterTrial").classList.remove("hide"):r.querySelector(".supporterTrial").classList.add("hide"))})}var h,u,g;e(r).on("pageinit","#liveTvNewRecordingPage",function(){var r=this;e("#chkRecordSeries",r).on("change",function(){this.checked?c(r):l(r)}),e("#btnCancel",r).on("click",function(){var e=getParameterByName("programid");Dashboard.navigate("itemdetails.html?id="+e)}),e(".liveTvNewRecordingForm").off("submit",d).on("submit",d)}).on("pagebeforeshow","#liveTvNewRecordingPage",function(){var e=this;l(e),n(e)}).on("pagebeforehide","#liveTvNewRecordingPage",function(){h=null})}(jQuery,document);
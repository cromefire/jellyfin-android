!function(e){function r(r,a){for(var i,s="",t=new Date,o=0,n=a.Items.length;n>o;o++){var m=a.Items[o],l=parseISO8601Date(m.StartDate,{toLocal:!0}),d=LibraryBrowser.getFutureDateText(l),v=parseISO8601Date(m.EndDate,{toLocal:!0});d!=i&&(s+='<h1 tvProgramSectionHeader" style="margin-bottom:1em;margin-top:2em;">'+d+"</h1>",i=d),s+='<a href="itemdetails.html?id='+m.Id+'" class="tvProgram">';var c="tvProgramTimeSlot";t>=l&&v>t&&(c+=" tvProgramCurrentTimeSlot"),s+='<div class="'+c+'">',s+='<div class="tvProgramTimeSlotInner">'+LibraryBrowser.getDisplayTime(l)+"</div>",s+="</div>",c="tvProgramInfo",m.IsKids?c+=" childProgramInfo":m.IsSports?c+=" sportsProgramInfo":m.IsNews?c+=" newsProgramInfo":m.IsMovie&&(c+=" movieProgramInfo"),s+='<div data-programid="'+m.Id+'" class="'+c+'">';var g=m.Name;s+='<div class="tvProgramName">'+g+"</div>",s+='<div class="tvProgramTime">',m.IsLive?s+='<span class="liveTvProgram">'+Globalize.translate("LabelLiveProgram")+"&nbsp;&nbsp;</span>":m.IsPremiere?s+='<span class="premiereTvProgram">'+Globalize.translate("LabelPremiereProgram")+"&nbsp;&nbsp;</span>":m.IsSeries&&!m.IsRepeat&&(s+='<span class="newTvProgram">'+Globalize.translate("LabelNewProgram")+"&nbsp;&nbsp;</span>");var p=m.RunTimeTicks/6e8;p=Math.round(p||1)+" min",s+=m.EpisodeTitle?m.EpisodeTitle+"&nbsp;&nbsp;("+p+")":p,m.SeriesTimerId?(s+='<div class="timerCircle seriesTimerCircle"></div>',s+='<div class="timerCircle seriesTimerCircle"></div>',s+='<div class="timerCircle seriesTimerCircle"></div>'):m.TimerId&&(s+='<div class="timerCircle"></div>'),s+="</div>",s+='<div class="programAccent"></div>',s+="</div>",s+="</a>"}e("#childrenContent",r).html(s).createGuideHoverMenu(".tvProgramInfo")}function a(e,a){ApiClient.getLiveTvPrograms({ChannelIds:a,UserId:Dashboard.getCurrentUserId(),HasAired:!1,SortBy:"StartDate"}).then(function(a){r(e,a),Dashboard.hideLoadingMsg()})}window.LiveTvChannelPage={renderPrograms:a}}(jQuery,document);
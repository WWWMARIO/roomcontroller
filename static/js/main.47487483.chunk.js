(this.webpackJsonpadria=this.webpackJsonpadria||[]).push([[0],{64:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=a(9),c=a(7),s=a(11),u=a(12),m=a(13),d=a(57),p=a(15),h=a(3),E=a(55),f=a(22),g=a(122),b=a(118),y=a(119),O=a(120),w=a(40),j=a(121),v=a(76),S=a(56),k=a.n(S),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).displayAirQualityData=function(){return a.state.airQualityRijeka.measurements.map((function(e,t){return r.a.createElement("p",{style:{display:"inline-block",padding:"0 1em"}},e.parameter.toUpperCase()," : ",e.value,e.unit)}))},a.state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openaq.org/v1/latest?&country=HR&location=HR0005A").then((function(e){return e.json()})).then((function(t){e.setState({airQualityRijeka:t.results[0]}),e.displayAirQualityData()})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",null,"Air quality in Rijeka, latest measurements:",r.a.createElement("br",null)," ",this.state.airQualityRijeka&&this.displayAirQualityData())}}]),t}(r.a.Component),C=a(123),R=a(114),D=a(112),L=a(54),N=a.n(L),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onClickGenerateQRCode=function(){var e="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+a.props.controller.name;a.setState({qrUrl:e})},a.state={qrUrl:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{style:{fontSize:"15px",padding:"5px "},onClick:this.onClickGenerateQRCode},r.a.createElement(w.a,null,"GENERATE QR CODE")),r.a.createElement("br",null),""!==this.state.qrUrl?r.a.createElement("img",{src:this.state.qrUrl,alt:"qr kod replacement"}):"")}}]),t}(r.a.Component),H=a(110),I=a(109),P=a(108),_=function(e){var t=e.settings.map((function(e,t){return r.a.createElement(P.a,{key:t},r.a.createElement(I.a,null,e.Id),r.a.createElement(I.a,null,e.settingName),r.a.createElement(I.a,null,e.settingValue))}));return r.a.createElement(H.a,{size:"small"},r.a.createElement(P.a,null,r.a.createElement(I.a,{colSpan:3},r.a.createElement("strong",null,"Settings:"))),t)},z=function(e){return r.a.createElement(H.a,{size:"small"},r.a.createElement(P.a,null,r.a.createElement(I.a,{colSpan:3},r.a.createElement("strong",null,"Details:"))),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"id :"),r.a.createElement(I.a,null,e.id)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"name:"),r.a.createElement(I.a,null,e.name)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"address:"),r.a.createElement(I.a,null,e.address)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"object:"),r.a.createElement(I.a,null,e.object)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"subObject:"),r.a.createElement(I.a,null,e.subObject)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"zone:"),r.a.createElement(I.a,null,e.zone)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"subZone:"),r.a.createElement(I.a,null,e.subZone)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"ipAddress:"),r.a.createElement(I.a,null,e.ipAddress)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"ipPort:"),r.a.createElement(I.a,null,e.ipPort)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"LocalCommandHeatingCooling:"),r.a.createElement(I.a,null,String(e.LocalCommandHeatingCooling))),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"LocalCommandPanelBlocked:"),r.a.createElement(I.a,null,String(e.LocalCommandPanelBlocked))))},B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeCurrentTempFromLocalStorage=function(e){var t=JSON.parse(localStorage.getItem("currentTemperatureLocal"));"+"===e.target.value&&(t[a.props.item.id]=String(Number(t[a.props.item.id])+1)),"-"===e.target.value&&(t[a.props.item.id]=String(Number(t[a.props.item.id])-1)),localStorage.setItem("currentTemperatureLocal",JSON.stringify(t)),a.setState({CurrentTempFromLocalStorage:t})},a.state={CurrentTempFromLocalStorage:JSON.parse(localStorage.getItem("currentTemperatureLocal"))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(H.a,{size:"small"},r.a.createElement(P.a,null,r.a.createElement(I.a,{colSpan:3},r.a.createElement("strong",null,"Properties:"))),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"Set temperature:"),r.a.createElement(I.a,null,this.state.CurrentTempFromLocalStorage[this.props.item.id],r.a.createElement("button",{style:{height:"32px",width:"32px",fontSize:"22px"},value:"+",onClick:this.changeCurrentTempFromLocalStorage},"+"),r.a.createElement("button",{style:{height:"32px",width:"32px",fontSize:"22px"},value:"-",onClick:this.changeCurrentTempFromLocalStorage}," - "))),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"Current temperature:"),r.a.createElement(I.a,null,this.props.item.properties[8].Value)),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"1"===this.props.item.properties[24].Value?r.a.createElement("p",null,"DND"):r.a.createElement("p",null))),r.a.createElement(P.a,null,r.a.createElement(I.a,null,"1"===this.props.item.properties[38].Value?r.a.createElement("p",null,"Occupied"):r.a.createElement("p",null)," ")))}}]),t}(r.a.Component),J=a(75),Q=a(111),q=a(53),A=a.n(q),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClickDetailsOrSetting=function(){0===a.state.displayDetailsOrSetting?a.setState({displayDetailsOrSetting:1}):a.setState({displayDetailsOrSetting:0})},a.state={displayDetailsOrSetting:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{style:{width:"100%",overflowX:"auto"}},r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:this.handleClickDetailsOrSetting,startIcon:r.a.createElement(A.a,null)}," ",0===this.state.displayDetailsOrSetting?"Settings  &  QrCode":"Details & Properties")),r.a.createElement("div",{style:{float:"left",paddingRight:"50px",minWidth:"400px"}},1===this.state.displayDetailsOrSetting?_(this.props.controller):z(this.props.controller)),r.a.createElement("div",{style:{float:"left"}},1===this.state.displayDetailsOrSetting?r.a.createElement(T,{controller:this.props.controller}):r.a.createElement(B,{item:this.props.controller})))}}]),t}(r.a.Component),Y=a(113),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{id:"row-"+this.props.controller.id,expanded:this.props.expandedRow===this.props.controller.id},r.a.createElement(D.a,{style:{backgroundColor:"lightblue"},onClick:function(){return e.props.handleRowClick(e.props.controller.id)},expandIcon:r.a.createElement(N.a,null),"aria-controls":"panel1bh-content"},r.a.createElement("div",{style:{flexGrow:"1"}},r.a.createElement(Y.a,{container:!0,item:!0,xs:12,spacing:3},r.a.createElement(Y.a,{item:!0,xs:4},"Zone ",this.props.controller.zone),r.a.createElement(Y.a,{item:!0,xs:4},this.props.controller.name),r.a.createElement(Y.a,{item:!0,xs:4},"Address ",this.props.controller.address)))),r.a.createElement(R.a,{style:{minHeight:"500px"}},r.a.createElement(F,{displayDetailsOrSetting:this.props.displayDetailsOrSetting,handleClickDetailsOrSetting:this.props.handleClickDetailsOrSetting,controller:this.props.controller})))}}]),t}(r.a.Component),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderItem",value:function(e){return[r.a.createElement(V,{controller:e,expandedRow:this.props.expandedRow,handleRowClick:this.props.handleRowClick,handleClickDetailsOrSetting:this.handleClickDetailsOrSetting})]}},{key:"render",value:function(){var e=this,t=[];return this.props.rooms_status.controllers.forEach((function(a){var n=e.renderItem(a);t=t.concat(n)})),r.a.createElement("div",{style:{paddingBottom:"650px"}},t)}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getNextHoliday=function(){for(var e=new Date,t=a.state.holidayListJsonThisYear,n=0;n<t.length;n++){if("National holiday"===t[n].type[0]||"Observance"===t[n].type[0])if(e<new Date(t[n].date.datetime.year,t[n].date.datetime.month-1,t[n].date.datetime.day)){a.setState({nextHoliday:t[n]});break}}var r=t[Number(t.length-1)],l=new Date(r.date.datetime.year,r.date.datetime.month-1,r.date.datetime.day),i=a.state.holidayListJsonNextYear;e>=l&&a.setState({nextHoliday:i[0]})},a.state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Date,a="6d034c65d939a776bfb539b8ff87e8790ddc3d96",n=t.getFullYear(),r=Number(t.getFullYear()+1);fetch("https://calendarific.com/api/v2/holidays?&api_key="+a+"&country=hr&year="+n).then((function(e){return e.json()})).then((function(t){e.setState({holidayListJsonThisYear:t.response.holidays}),e.getNextHoliday()})).catch(console.log),fetch("https://calendarific.com/api/v2/holidays?&api_key="+a+"&country=hr&year="+r).then((function(e){return e.json()})).then((function(t){e.setState({holidayListJsonNextYear:t.response.holidays}),e.getNextHoliday()})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,null,"The next Croatian holiday is :",r.a.createElement("br",null),this.state.nextHoliday&&r.a.createElement("div",null,this.state.nextHoliday.name,r.a.createElement("br",null),this.state.nextHoliday.date.datetime.day,".",this.state.nextHoliday.date.datetime.month,".",this.state.nextHoliday.date.datetime.year,". "),r.a.createElement("br",null)))}}]),t}(r.a.Component),M=a(117),Z=a(124),W=a(116),X=a(115),K=a(39),$=a.n(K);var ee=function(e){var t=e.rooms_status.controllers.map((function(t){var a;return r.a.createElement(Z.a,(a={button:!0,alignItems:"center"},Object(p.a)(a,"button",!0),Object(p.a)(a,"key",t.id),Object(p.a)(a,"onClick",(function(){return e.handleRowLinkClick(t.id)})),Object(p.a)(a,"style",e.expandedRow===t.id?{background:"lightblue"}:null),a),r.a.createElement(X.a,null,t.zone))}));return t.unshift(r.a.createElement(Z.a,{button:!0,key:"home",onClick:function(){return e.handleRowLinkClick("home")}},r.a.createElement(W.a,null,r.a.createElement($.a,null)," "),r.a.createElement(X.a,null,"Home"))),r.a.createElement(M.a,{display:"flex"},t)};function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ne=Object(E.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:ae({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function re(e){var t=ne(),a=(Object(f.a)(),r.a.useState(!1)),n=Object(d.a)(a,2),l=n[0],i=n[1];return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,null),r.a.createElement(y.a,{position:"fixed",className:Object(h.a)(t.appBar,Object(p.a)({},t.appBarShift,l))},r.a.createElement(O.a,null,r.a.createElement(v.a,{color:"inherit","aria-label":"open drawer",onClick:l?function(){i(!1)}:function(){i(!0)},edge:"start",className:Object(h.a)(t.menuButton,l)},r.a.createElement(k.a,null)),r.a.createElement(w.a,{variant:"caption",noWrap:!0},r.a.createElement(x,null)))),r.a.createElement(g.a,{id:"drawer",className:t.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:t.drawerPaper}},r.a.createElement("div",{style:{position:"fixed",zIndex:"5",width:"231px",background:"white",paddingTop:"9px"}},r.a.createElement(Z.a,{button:!0,key:"home",onClick:function(){return e.handleRowLinkClick("home")}},r.a.createElement(W.a,null,r.a.createElement($.a,null)," "),r.a.createElement(X.a,null,"Home"),r.a.createElement(j.a,null))),r.a.createElement(j.a,null),r.a.createElement(ee,{rooms_status:e.rooms_status,handleRowLinkClick:e.handleRowLinkClick,expandedRow:e.expandedRow}),r.a.createElement(j.a,null),r.a.createElement(w.a,{variant:"caption"},r.a.createElement(G,null))),r.a.createElement("main",{className:Object(h.a)(t.content,Object(p.a)({},t.contentShift,l))},r.a.createElement("div",{className:t.drawerHeader}),r.a.createElement(w.a,{paragraph:!0},null!==JSON.parse(localStorage.getItem("currentTemperatureLocal"))?r.a.createElement(U,{rooms_status:e.rooms_status,handleRowClick:e.handleRowClick,expandedRow:e.expandedRow}):null)))}var le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleRowClick=function(e){"home"===e&&(a.setState({expandedRow:""}),window.scrollTo(0,0)),e!==a.state.expandedRow?a.setState({expandedRow:e}):a.setState({expandedRow:""})},a.handleRowLinkClick=function(e){if("home"===e)a.setState({expandedRow:""}),window.scrollTo(0,0);else if(e===a.state.expandedRow)a.setState({expandedRow:""});else if(""===a.state.expandedRow){document.getElementById("row-"+e).scrollIntoView(!0);var t=window.scrollY;t&&window.scrollTo({top:t-75,left:0,behavior:"smooth"}),setTimeout((function(){a.setState({expandedRow:e})}),500)}else a.setState({expandedRow:""}),setTimeout((function(){document.getElementById("row-"+e).scrollIntoView(!0);var t=window.scrollY;t&&window.scrollTo({top:t-75,left:0,behavior:"smooth"})}),500),setTimeout((function(){a.setState({expandedRow:e})}),1e3)},a.state={expandedRow:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ae.hr/rooms_status.php").then((function(e){return e.json()})).then((function(t){e.setState({rooms_status:t},(function(){if(null===JSON.parse(localStorage.getItem("currentTemperatureLocal"))){var t={};e.state.rooms_status.controllers.forEach((function(e){var a=e.id,n=e.properties[7].Value;t[a]=n})),localStorage.setItem("currentTemperatureLocal",JSON.stringify(t)),e.setState({localTempUpdated:!0})}}))})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.rooms_status?r.a.createElement(re,{rooms_status:this.state.rooms_status,handleRowLinkClick:this.handleRowLinkClick,handleRowClick:this.handleRowClick,expandedRow:this.state.expandedRow}):null)}}]),t}(r.a.Component),ie=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(le,null)}}]),t}(r.a.Component);i.a.render(r.a.createElement(ie,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.47487483.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1033:function(e,t,n){var o=n(700),i=n(1034),s=n(763),r=n(1035),p=s(function(e){var t=o(e,r);return t.length&&t[0]===e[0]?i(t):[]});e.exports=p},1034:function(e,t,n){var o=n(984),i=n(1014),s=n(1015),r=n(700),p=n(988),a=n(985),u=Math.min;e.exports=function(e,t,n){for(var l=n?s:i,c=e[0].length,d=e.length,h=d,f=Array(d),m=1/0,g=[];h--;){var y=e[h];h&&t&&(y=r(y,p(t))),m=u(y.length,m),f[h]=!n&&(t||c>=120&&y.length>=120)?new o(h&&y):void 0}y=e[0];var v=-1,L=f[0];e:for(;++v<c&&g.length<m;){var b=y[v],x=t?t(b):b;if(b=n||0!==b?b:0,!(L?a(L,x):l(g,x,n))){for(h=d;--h;){var P=f[h];if(!(P?a(P,x):l(e[h],x,n)))continue e}L&&L.push(x),g.push(b)}}return g}},1035:function(e,t,n){var o=n(783);e.exports=function(e){return o(e)?e:[]}},1114:function(e,t){e.exports=function(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}},1392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),i=n(641);t.default=function(e){var t=e.className,n=e.fill,s=void 0===n?"currentColor":n,r=e.size;return o.createElement(i.default,{className:t,size:r},o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{d:"M8 1v4H4",stroke:s,strokeWidth:"2",transform:"scale(-.83333 -.84583) rotate(45 7.66 -19.75)"}),o.createElement("path",{d:"M3 5.78h10v1.7H3z",fill:s}),o.createElement("path",{d:"M7.17 2.4h1.66v5.07H7.17z",fill:s}),o.createElement("g",null,o.createElement("path",{d:"M8.16 1.81V6.1H3.9",stroke:s,strokeWidth:"2",transform:"scale(.83333 .84583) rotate(45 -4.2 13.2)"}),o.createElement("path",{d:"M13 10.01H3v-1.7h10z",fill:s}),o.createElement("path",{d:"M8.83 13.4H7.17V9.15h1.66z",fill:s}))))}},2133:function(e,t,n){"use strict";n.r(t);var o=n(12),i=n(645),s=n.n(i),r=n(686),p=n(699),a=n(1515),u=n(1516),l=n(1151),c=n(1391),d=n(991),h=n(661),f=n(639),m=n.n(f),g=n(1168),y=n(1519),v=n(1392),L=n.n(v),b=n(34),x=n(787),P=n(1521),k=n(1390),O=n(1518),C=function(){return(C=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},I=2,S=2,E=4,_=9,j=10;function w(e,t){var n=e[0],o=e[1],i=t[0];return!(n>t[1]+E||o<i-E)}function B(e){return{component:e.component,textRange:e.textRange||{endLine:0,endOffset:0,startLine:0,startOffset:0}}}var M,D=(M=function(e,t){return(M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}M(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),T=32,N=function(e){function t(t){var n=e.call(this,t)||this;return n.doScroll=function(e){n.props.scroll&&n.props.scroll(e);var t=n.node.current;t&&Object(x.scrollHorizontally)(e,{leftOffset:T,rightOffset:t.getBoundingClientRect().width-T,parent:t})},n.expandBlock=function(e){return function(){return n.props.expandBlock(n.props.index,e)}},n.node=o.createRef(),n}return D(t,e),t.prototype.renderLine=function(e){var t=this,n=e.displayDuplications,i=e.index,s=e.issuesForLine,r=e.issueLocations,p=e.line,a=e.snippet,u=e.symbols,l=e.verticalBuffer,c=Object(k.b)(p,this.props.locations),d=this.props,h=d.duplications,f=d.duplicationsByLine,m=h?h.length:0,g=m&&f&&f[p.line]||[],y=s.some(function(e){return e.key===t.props.issue.key});return o.createElement(P.a,{branchLike:this.props.branchLike,displayAllIssues:!1,displayCoverage:!0,displayDuplications:n,displayIssues:!y||s.length>1,displayLocationMarkers:!0,duplications:g,duplicationsCount:m,highlighted:!1,highlightedLocationMessage:Object(O.b)(this.props.highlightedLocationMessage,c),highlightedSymbols:Object(O.a)(u,this.props.highlightedSymbols),issueLocations:r,issuePopup:this.props.issuePopup,issues:s,key:p.line,last:!1,line:p,linePopup:this.props.linePopup,loadDuplications:this.props.loadDuplications,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onIssueSelect:function(){},onIssueUnselect:function(){},onIssuesClose:this.props.handleCloseIssues,onIssuesOpen:this.props.handleOpenIssues,onLinePopupToggle:this.props.handleLinePopupToggle,onLocationSelect:this.props.onLocationSelect,onSymbolClick:this.props.handleSymbolClick,openIssues:this.props.openIssuesByLine[p.line],previousLine:i>0?a[i-1]:void 0,renderDuplicationPopup:this.props.renderDuplicationPopup,scroll:this.doScroll,secondaryIssueLocations:c,selectedIssue:Object(O.c)(this.props.issue.key,s),verticalBuffer:l})},t.prototype.render=function(){var e=this,t=this.props,n=t.component,i=t.issue,s=t.issuesByLine,r=void 0===s?{}:s,p=t.last,a=t.locationsByLine,u=t.openIssuesByLine,c=t.snippet,d=n.measures&&n.measures.lines&&parseInt(n.measures.lines,10),h=Object(l.e)(c),f=c[c.length-1].line,g=i.textRange?i.textRange.endLine:i.line,y=Math.max.apply(Math,Object.keys(r).map(function(e){return parseInt(e,10)}).filter(function(e){return function(e,t){return e>=t[0].line&&e<=t[t.length-1].line}(e,c)&&(e===g||u[e])})),v=p?Math.max(0,_-(f-y)):0,x=c.some(function(e){return!!e.duplicated});return o.createElement("div",{className:"source-viewer-code snippet",ref:this.node},o.createElement("div",null,c[0].line>1&&o.createElement("div",{className:"expand-block expand-block-above"},o.createElement("button",{"aria-label":Object(b.translate)("source_viewer.expand_above"),onClick:this.expandBlock("up"),type:"button"},o.createElement(L.a,null))),o.createElement("table",{className:m()("source-table",{"expand-up":c[0].line>1,"expand-down":!d||c[c.length-1].line<d})},o.createElement("tbody",null,c.map(function(t,n){return e.renderLine({displayDuplications:x,index:n,issuesForLine:r[t.line]||[],issueLocations:a[t.line]||[],line:t,snippet:c,symbols:h[t.line],verticalBuffer:n===c.length-1?v:0})}))),(!d||c[c.length-1].line<d)&&o.createElement("div",{className:"expand-block expand-block-below"},o.createElement("button",{"aria-label":Object(b.translate)("source_viewer.expand_below"),onClick:this.expandBlock("down"),type:"button"},o.createElement(L.a,null)))))},t}(o.PureComponent),R=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),F=function(){return(F=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.rootNodeRef=o.createRef(),t.state={additionalLines:{},highlightedSymbols:[],loading:!1,openIssuesByLine:{},snippets:[]},t.expandBlock=function(e,n){var o=t.props,i=o.branchLike,s=o.snippetGroup.component.key,p=t.state.snippets.find(function(t){return t.index===e});if(p){var a=j+E-1,u="up"===n?{from:Math.max(1,p.start-a),to:p.start-1}:{from:p.end+1,to:p.end+a};Object(r.u)(F({key:s},u,Object(h.d)(i))).then(function(e){return e.reduce(function(e,t){return t.coverageStatus=Object(g.a)(t),e[t.line]=t,e},{})}).then(function(o){return t.animateBlockExpansion(e,n,o)},function(){})}},t.expandComponent=function(){var e=t.props,n=e.branchLike,o=e.snippetGroup.component.key;t.setState({loading:!0}),Object(r.u)(F({key:o},Object(h.d)(n))).then(function(e){t.mounted&&t.setState(function(t){var n=t.additionalLines;return{additionalLines:F({},n,e),loading:!1,snippets:[{start:0,end:e[e.length-1].line,index:-1}]}})},function(){t.mounted&&t.setState({loading:!1})})},t.handleLinePopupToggle=function(e){t.props.onLinePopupToggle(F({},e,{component:t.props.snippetGroup.component.key}))},t.handleOpenIssues=function(e){t.setState(function(t){var n;return{openIssuesByLine:F({},t.openIssuesByLine,(n={},n[e.line]=!0,n))}})},t.handleCloseIssues=function(e){t.setState(function(t){var n;return{openIssuesByLine:F({},t.openIssuesByLine,(n={},n[e.line]=!1,n))}})},t.handleSymbolClick=function(e){t.setState({highlightedSymbols:e})},t.loadDuplications=function(e){t.props.loadDuplications(t.props.snippetGroup.component.key,e)},t.renderDuplicationPopup=function(e,n){return t.props.renderDuplicationPopup(t.props.snippetGroup.component,e,n)},t}return R(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.createSnippetsFromProps()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.createSnippetsFromProps=function(){var e,t,n,o=(e=this.props.snippetGroup.locations,t=this.props.last,((n=this.props.issue.secondaryLocations.length>0?this.props.issue:void 0)?[B(n)].concat(e):e).reduce(function(o,i,s){var r,p=Math.max(1,i.textRange.startLine-I),a=i.textRange.endLine+(n&&0===s||t&&s===e.length-1?_:S);return o=o.filter(function(e){if(w([e.start,e.end],[p,a])){var t=!1;return r||(r=e,t=!0),r.start=Math.min(p,e.start,r.start),r.end=Math.max(a,e.end,r.end),t}return!0}),void 0===r&&o.push({start:p,end:a,index:s}),o},[]));this.setState({snippets:o})},t.prototype.getNodes=function(e){var t=this.rootNodeRef.current;if(t){var n=t.querySelector("#snippet-wrapper-"+e);if(n){var o=n.querySelector(".snippet");if(o){var i=o.firstChild;if(i)return{wrapper:o,table:i}}}}},t.prototype.setMaxHeight=function(e,t,n){void 0===n&&(n=!1);var o=this.getNodes(e);if(o){var i=o.wrapper,s=o.table,r=void 0!==t?t:s.getBoundingClientRect().height;if(n){var p=i.getBoundingClientRect().height;s.style.transition="none",s.style.marginTop=p-r+"px",setTimeout(function(){s.style.transition="",s.style.marginTop="0px",i.style.maxHeight=r+20+"px"},0)}else i.style.maxHeight=r+20+"px"}},t.prototype.animateBlockExpansion=function(e,t,n){var o=this;if(this.mounted){var i=this.state.snippets,s=function(e){var t=e.direction,n=e.snippetIndex,o=e.snippets,i=o.find(function(e){return e.index===n});if(!i)throw new Error("Snippet "+n+" not found");return i.start=Math.max(0,i.start-("up"===t?j:0)),i.end+="down"===t?j:0,o.map(function(e){return e.index===n?i:(w([e.start,e.end],[i.start,i.end])&&(i.start=Math.min(e.start,i.start),i.end=Math.max(e.end,i.end),e.toDelete=!0),e)})}({direction:t,snippetIndex:e,snippets:i}),r=s.filter(function(e){return e.toDelete});r.forEach(function(e){return o.setMaxHeight(e.index)}),this.setMaxHeight(e),this.setState(function(e){var t=e.additionalLines,o=e.snippets;return{additionalLines:F({},t,n),snippets:o}},function(){r.forEach(function(e){o.setMaxHeight(e.index,0)}),o.setMaxHeight(e,void 0,"up"===t),setTimeout(function(){o.setState({snippets:s.filter(function(e){return!e.toDelete})})},200)})}},t.prototype.renderSnippet=function(e){var t=e.index,n=e.issuesByLine,i=e.last,s=e.locationsByLine,r=e.snippet;return o.createElement(N,{branchLike:this.props.branchLike,component:this.props.snippetGroup.component,expandBlock:this.expandBlock,handleCloseIssues:this.handleCloseIssues,handleLinePopupToggle:this.handleLinePopupToggle,handleOpenIssues:this.handleOpenIssues,handleSymbolClick:this.handleSymbolClick,highlightedLocationMessage:this.props.highlightedLocationMessage,highlightedSymbols:this.state.highlightedSymbols,index:t,issue:this.props.issue,issuePopup:this.props.issuePopup,issuesByLine:n,last:i,linePopup:this.props.linePopup,loadDuplications:this.loadDuplications,locations:this.props.locations,locationsByLine:s,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onLocationSelect:this.props.onLocationSelect,openIssuesByLine:this.state.openIssuesByLine,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippet:r})},t.prototype.render=function(){var e=this,t=this.props,n=t.branchLike,i=t.duplications,s=t.issue,r=t.issuesByLine,p=t.last,a=t.snippetGroup,u=this.state,c=u.additionalLines,d=u.loading,h=u.snippets,m=Object(l.d)([s]),g=1===h.length&&a.component.measures&&h[0].end-h[0].start===parseInt(a.component.measures.lines||"",10),v=function(e,t){return e.map(function(e){for(var n=[],o=e.start;o<=e.end;o++)t[o]&&n.push(t[o]);return n}).filter(function(e){return e.length>0})}(h,F({},a.sources,c));return o.createElement("div",{className:f("component-source-container",{"source-duplications-expanded":i&&i.length>0}),ref:this.rootNodeRef},o.createElement(y.a,{branchLike:n,expandable:!g,loading:d,onExpand:this.expandComponent,sourceViewerFile:a.component}),v.map(function(t,n){return o.createElement("div",{id:"snippet-wrapper-"+h[n].index,key:h[n].index},e.renderSnippet({snippet:t,index:h[n].index,issuesByLine:p?r:{},locationsByLine:p&&n===h.length-1?m:{},last:p&&n===h.length-1}))}))},t}(o.PureComponent),z=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),G=function(){return(G=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={components:{},duplicationsByLine:{},loading:!0},t.fetchDuplications=function(e,n){Object(r.q)(G({key:e},Object(h.d)(t.props.branchLike))).then(function(o){t.mounted&&t.setState(function(t){return{duplicatedFiles:o.files,duplications:o.duplications,duplicationsByLine:Object(l.a)(o.duplications),linePopup:1===o.duplications.length?{component:e,index:0,line:n.line,name:"duplications"}:t.linePopup}})},function(){})},t.handleIssuePopupToggle=function(e,n,o){t.setState(function(t){var i=t.issuePopup&&t.issuePopup.name===n&&t.issuePopup.issue===e;return!1===o||i?!0!==o&&i?{issuePopup:void 0}:null:{issuePopup:{issue:e,name:n}}})},t.handleLinePopupToggle=function(e){var n=e.component,o=e.index,i=e.line,s=e.name,r=e.open;t.setState(function(e){var t=void 0!==e.linePopup&&e.linePopup.line===i&&e.linePopup.name===s&&e.linePopup.component===n&&e.linePopup.index===o;return!1===r||t?!0!==r&&t?{linePopup:void 0}:null:{linePopup:{component:n,index:o,line:i,name:s}}})},t.handleCloseLinePopup=function(){t.setState({linePopup:void 0})},t.renderDuplicationPopup=function(e,n,i){var s=t.state,r=s.duplicatedFiles,p=s.duplications;if(!e||!r)return null;var l=Object(u.b)(p,n);return o.createElement(d.a.Consumer,null,function(n){var s=n.openComponent;return o.createElement(a.a,{blocks:Object(u.a)(l,i),branchLike:t.props.branchLike,duplicatedFiles:r,inRemovedComponent:Object(u.c)(l),onClose:t.handleCloseLinePopup,openComponent:s,sourceViewerFile:e})})},t}return z(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIssueFlowSnippets(this.props.issue.key)},t.prototype.componentWillReceiveProps=function(e){e.issue.key!==this.props.issue.key&&this.fetchIssueFlowSnippets(e.issue.key)},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchIssueFlowSnippets=function(e){var t=this;this.setState({loading:!0}),Object(p.h)(e).then(function(e){t.mounted&&(t.setState({components:e,issuePopup:void 0,linePopup:void 0,loading:!1}),t.props.onLoaded&&t.props.onLoaded())},function(){t.mounted&&t.setState({loading:!1})})},t.prototype.render=function(){var e=this;if(this.state.loading)return o.createElement("div",null,o.createElement(s.a,null));var t=this.state,n=t.components,i=t.duplications,r=t.duplicationsByLine,p=t.linePopup,a=Object(l.b)(this.props.issues),u=function(e,t){var n,o="",i=[];return e.forEach(function(e,s){e.component!==o&&(n=C({},t[e.component]||{component:{key:e.component,measures:{},path:"",project:"",projectName:"",q:"FIL",uuid:""},sources:[]},{locations:[]}),i.push(n),o=e.component),e.index=s,n.locations.push(e)}),i}(this.props.locations,n);return o.createElement("div",null,u.map(function(t,n){var s={};return p&&t.component.key===p.component&&(s={duplications:i,duplicationsByLine:r,linePopup:{index:p.index,line:p.line,name:p.name}}),o.createElement(c.a.Provider,{key:e.props.issue.key+"-"+(e.props.selectedFlowIndex||0)+"-"+n,value:{branchLike:e.props.branchLike,file:t.component}},o.createElement(H,G({branchLike:e.props.branchLike,highlightedLocationMessage:e.props.highlightedLocationMessage,issue:e.props.issue,issuePopup:e.state.issuePopup,issuesByLine:a[t.component.key]||{},last:n===u.length-1,loadDuplications:e.fetchDuplications,locations:t.locations||[],onIssueChange:e.props.onIssueChange,onIssuePopupToggle:e.handleIssuePopupToggle,onLinePopupToggle:e.handleLinePopupToggle,onLocationSelect:e.props.onLocationSelect,renderDuplicationPopup:e.renderDuplicationPopup,scroll:e.props.scroll,snippetGroup:t},s)))}))},t}(o.PureComponent);t.default=A},724:function(e,t,n){var o=n(782),i=n(727),s=Object.prototype.hasOwnProperty,r=i(function(e,t,n){s.call(e,n)?e[n].push(t):o(e,n,[t])});e.exports=r},846:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(639),i=n(12),s=n(665),r=n(641);t.default=function(e){var t=e.className,n=e.favorite,p=e.fill,a=e.size;return i.createElement(s.ThemeConsumer,null,function(e){return i.createElement(r.default,{className:o("icon-outline",{"is-filled":n},t),size:a,style:{color:p||e.colors.orange}},i.createElement("g",{transform:"matrix(0.988024,0,0,0.988024,0.0957953,0.717719)"},i.createElement("path",{d:"M15.428,5.777C15.428,5.908 15.35,6.051 15.195,6.205L11.954,9.366L12.722,13.83C12.728,13.872 12.731,13.932 12.731,14.009C12.731,14.134 12.7,14.24 12.637,14.326C12.575,14.412 12.484,14.455 12.365,14.455C12.252,14.455 12.133,14.42 12.008,14.348L7.999,12.241L3.99,14.348C3.859,14.42 3.74,14.455 3.633,14.455C3.508,14.455 3.414,14.412 3.352,14.326C3.289,14.24 3.258,14.134 3.258,14.009C3.258,13.973 3.264,13.914 3.276,13.83L4.044,9.366L0.794,6.205C0.645,6.045 0.57,5.902 0.57,5.777C0.57,5.557 0.737,5.42 1.07,5.366L5.552,4.714L7.561,0.652C7.674,0.408 7.82,0.286 7.999,0.286C8.177,0.286 8.323,0.408 8.436,0.652L10.445,4.714L14.927,5.366C15.261,5.42 15.427,5.557 15.427,5.777L15.428,5.777Z"})))})}},927:function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var s=n(639),r=n(12),p=n(34),a=n(846),u=n(640),l=n(644),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.favorite,o=e.qualifier,i=e.toggleFavorite,c=n?p.translate("favorite.current",o):p.translate("favorite.check",o),d=p.translate("favorite.action",n?"remove":"add");return r.createElement(l.default,{overlay:c},r.createElement(u.ButtonLink,{"aria-label":d,className:s("favorite-link","link-no-underline",t),onClick:i},r.createElement(a.default,{favorite:n})))},t}(r.PureComponent);t.default=c}}]);
//# sourceMappingURL=330.1570825310815.chunk.js.map
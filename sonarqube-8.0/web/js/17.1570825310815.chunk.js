(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1151:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"b",function(){return a}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return u}),n.d(t,"e",function(){return p});var o=n(1109),r=n.n(o),i=n(1517),s=n(1390);function c(e){var t={};return e.forEach(function(e){var n=e.textRange?e.textRange.endLine:0;n in t||(t[n]=[]),t[n].push(e)}),t}function a(e){return void 0===e&&(e=[]),e.reduce(function(e,t){e[t.component]=e[t.component]||{};var n=t.textRange?t.textRange.endLine:0;return e[t.component][n]=e[t.component][n]||[],e[t.component][n].push(t),e},{})}function l(e){var t={};return e.forEach(function(e){Object(s.a)(e.textRange).forEach(function(e){e.line in t||(t[e.line]=[]),t[e.line].push(e)})}),t}function u(e){if(null==e)return{};var t={};return e.forEach(function(e,n){e.blocks.forEach(function(e){if("1"===e._ref)for(var o=e.from;o<e.from+e.size;o++)o in t||(t[o]=[]),t[o].push(n)})}),t}function p(e){var t={};return e.forEach(function(e){var n=Object(i.c)(e.code||""),o=r()(n.map(function(e){var t=e.className.match(/sym-\d+/g);return null!=t?t:[]}));t[e.line]=o.filter(function(e){return e})}),t}},1390:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function r(e){if(!e)return[];for(var t=[],n=e.startLine;n<=e.endLine;n++){var o=n===e.startLine?e.startOffset:0,r=n===e.endLine?e.endOffset:999999;t.push({line:n,from:o,to:r})}return t}function i(e,t){return t?t.reduce(function(t,n){var i=n?r(n.textRange).filter(function(t){return t.line===e.line}).map(function(e){return o({},e,{startLine:n.textRange.startLine,index:n.index,text:n.msg})}):[];return t.concat(i)},[]):[]}},1391:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(12),r=o.createContext({branchLike:{},file:{}})},1515:function(e,t,n){"use strict";var o,r=n(655),i=n.n(r),s=n(724),c=n.n(s),a=n(12),l=n(159),u=n(658),p=n(676),d=n.n(p),h=n(656),f=n(740),m=n(34),v=n(730),g=n(661),b=n(649),y=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isDifferentComponent=function(e,t){return Boolean(e&&t&&(e.project!==t.project||e.subProject!==t.subProject))},t.handleFileClick=function(e){e.preventDefault(),e.currentTarget.blur();var n=e.currentTarget.dataset,o=n.key,r=n.line;t.shouldLink()&&o&&t.props.openComponent({branchLike:t.props.branchLike,key:o,line:r?Number(r):void 0}),t.props.onClose()},t}return y(t,e),t.prototype.shouldLink=function(){var e=this.props.branchLike;return!Object(g.j)(e)&&!Object(g.h)(e)},t.prototype.renderDuplication=function(e,t,n){return this.shouldLink()?a.createElement("a",{"data-key":e.key,"data-line":n,href:"#",onClick:this.handleFileClick,title:e.name},t):t},t.prototype.render=function(){var e=this,t=this.props,n=t.duplicatedFiles,o=void 0===n?{}:n,r=t.sourceViewerFile,s=c()(this.props.blocks,"_ref"),p=Object.keys(s).map(function(e){return{blocks:s[e],file:o[e]}});return p=i()(p,function(e){return e.file.projectName!==r.projectName},function(e){return e.file.subProjectName!==r.subProjectName},function(e){return e.file.key!==r.key}),a.createElement(u.DropdownOverlay,{placement:f.PopupPlacement.RightTop},a.createElement("div",{className:"source-viewer-bubble-popup abs-width-400"},this.props.inRemovedComponent&&a.createElement(h.Alert,{variant:"warning"},Object(m.translate)("duplications.dups_found_on_deleted_resource")),p.length>0&&a.createElement(a.Fragment,null,a.createElement("h6",{className:"spacer-bottom"},Object(m.translate)("component_viewer.transition.duplication")),p.map(function(t){return a.createElement("div",{className:"spacer-top text-ellipsis",key:t.file.key},a.createElement("div",{className:"component-name"},e.isDifferentComponent(t.file,e.props.sourceViewerFile)&&a.createElement(a.Fragment,null,a.createElement("div",{className:"component-name-parent"},a.createElement(d.a,{className:"little-spacer-right",qualifier:"TRK"}),a.createElement(l.Link,{to:Object(b.s)(t.file.project)},t.file.projectName)),t.file.subProject&&t.file.subProjectName&&a.createElement("div",{className:"component-name-parent"},a.createElement(d.a,{className:"little-spacer-right",qualifier:"BRC"}),t.file.subProjectName)),t.file.key!==e.props.sourceViewerFile.key&&a.createElement("div",{className:"component-name-path"},e.renderDuplication(t.file,a.createElement(a.Fragment,null,a.createElement("span",null,Object(v.collapsedDirFromPath)(t.file.name)),a.createElement("span",{className:"component-name-file"},Object(v.fileFromPath)(t.file.name))))),a.createElement("div",{className:"component-name-path"},"Lines: ",t.blocks.map(function(n,o){return a.createElement(a.Fragment,{key:o},e.renderDuplication(t.file,a.createElement(a.Fragment,null,n.from," – ",n.from+n.size-1),n.from),o<t.blocks.length-1&&", ")}))))}))))},t}(a.PureComponent);t.a=k},1516:function(e,t,n){"use strict";function o(e,t){var n=!1;return e.filter(function(e){var o=e.from>t||e.from+e.size<t,r=!("1"===e._ref)||(o||n),i=void 0!==e._ref&&r;return"1"!==e._ref||o||(n=!0),i})}function r(e,t){return e&&e[t]&&e[t].blocks||[]}function i(e){return e.some(function(e){return void 0===e._ref})}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i})},1517:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return u});var o=n(781),r=n.n(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s="source-line-code-issue";function c(e,t){void 0===t&&(t="");var n=document.createElement("div"),o=[];return n.innerHTML=e,[].forEach.call(n.childNodes,function(e){if(1===e.nodeType){var n=t?t+" "+e.className:e.className,r=c(e.innerHTML,n);o=o.concat(r)}3===e.nodeType&&e.nodeValue&&o.push({className:t,markers:[],text:e.nodeValue})}),o}function a(e,t){var n=new RegExp("\\b"+t+"\\b");return e.map(function(e){return n.test(e.className)?i({},e,{className:e.className+" highlighted"}):e})}function l(e,t,n,o){return t>=o?e.substr(t-o,n-t):e.substr(0,n-t)}function u(e,t,n){return void 0===n&&(n=s),t.forEach(function(t){var o=[],s=0,c=t.line!==t.startLine;e.forEach(function(e){var a,u,p,d,h=(a=s,u=s+e.text.length,p=t.from,d=t.to,{from:Math.max(a,p),to:Math.min(u,d)}),f=l(e.text,s,h.from,s),m=l(e.text,h.from,h.to,s),v=l(e.text,h.to,s+e.text.length,s);if(f.length&&o.push(i({},e,{text:f})),m.length){var g=-1===e.className.indexOf(n)?e.className+" "+n:e.className;o.push({className:g,markers:c||null==t.index?e.markers:r()(e.markers.concat([t.index])),text:m}),c=!0}v.length&&o.push(i({},e,{text:v})),s+=e.text.length}),e=o.slice()}),e}},1518:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return c});var o=n(1033),r=n.n(o);function i(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]);var n=r()(e,t);return n.length?n:void 0}function s(e,t){return null!=e&&t.some(function(t){return t.index===e.index})?e:void 0}function c(e,t){return void 0!==e&&t.find(function(t){return t.key===e})?e:void 0}},1519:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var o=n(639),r=n(12),i=n(159),s=n(640),c=n(829),a=n(1392),l=n.n(a),u=n(676),p=n.n(u),d=n(645),h=n.n(d),f=n(34),m=n(730),v=n(652),g=n(661),b=n(649),y=n(919),k=(n(2045),function(){return(k=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)});function E(e){var t=e.branchLike,n=e.expandable,a=e.loading,u=e.onExpand,d=e.sourceViewerFile,E=d.key,x=d.measures,P=d.path,O=d.project,N=d.projectName,j=d.q,w=d.subProject,_=d.subProjectName;return r.createElement("div",{className:"source-viewer-header-slim display-flex-row display-flex-space-between"},r.createElement("div",{className:"display-flex-center flex-1"},r.createElement("div",null,r.createElement("a",{className:"link-with-icon",href:Object(v.getPathUrlAsString)(Object(b.b)(O,t))},r.createElement(p.a,{qualifier:"TRK"})," ",r.createElement("span",null,N))),void 0!==w&&r.createElement(r.Fragment,null,r.createElement(p.a,{qualifier:"BRC"})," ",r.createElement("span",null,_)),r.createElement("div",{className:"spacer-left"},r.createElement(p.a,{qualifier:j})," ",r.createElement("span",null,Object(m.collapsedDirFromPath)(P)),r.createElement("span",{className:"component-name-file"},Object(m.fileFromPath)(P))),r.createElement("div",{className:"spacer-left"},r.createElement(c.ClipboardIconButton,{className:"button-link link-no-underline",copyValue:P})),d.canMarkAsFavorite&&(!t||Object(g.g)(t))&&r.createElement("div",{className:"nudged-up spacer-left"},r.createElement(y.a,{className:"component-name-favorite",component:E,favorite:d.fav||!1,qualifier:d.q}))),void 0!==x.issues&&r.createElement("div",{className:o("flex-0 big-spacer-left",{"little-spacer-right":!n||a})},r.createElement(i.Link,{to:Object(b.g)(O,k({},Object(g.d)(t),{fileUuids:d.uuid,resolved:"false"}))},Object(f.translate)("source_viewer.view_all_issues"))),n&&r.createElement(h.a,{className:"little-spacer-right",loading:a},r.createElement("div",{className:"flex-0 big-spacer-left"},r.createElement(s.ButtonIcon,{className:"js-actions",onClick:u},r.createElement(l.a,null)))))}},1521:function(e,t,n){"use strict";var o=n(1114),r=n.n(o),i=n(639),s=n(12),c=(n(2043),n(1136)),a=n(1260),l=n(1517),u=n(1395);function p(e){var t=e.issuePopup;return s.createElement("div",{className:"issue-list"},e.issues.map(function(n){return s.createElement(u.a,{branchLike:e.branchLike,issue:n,key:n.key,onChange:e.onIssueChange,onClick:e.onIssueClick,onPopupToggle:e.onIssuePopupToggle,openPopup:t&&t.issue===n.key?t.name:void 0,selected:e.selectedIssue===n.key})}))}var d,h=(d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this;return n.handleSymbolClick=function(e){e.preventDefault();var t=e.currentTarget.className.match(/sym-\d+/g);t&&t.length>0&&n.props.onSymbolClick(t)},n.state={tokens:Object(l.c)(t.line.code||"")},n}return h(t,e),t.prototype.componentDidMount=function(){this.attachEvents(),this.props.highlightedLocationMessage&&this.activeMarkerNode&&this.props.scroll&&this.props.scroll(this.activeMarkerNode)},t.prototype.componentWillReceiveProps=function(e){e.line.code!==this.props.line.code&&this.setState({tokens:Object(l.c)(e.line.code||"")})},t.prototype.componentWillUpdate=function(){this.detachEvents()},t.prototype.componentDidUpdate=function(e){this.attachEvents(),this.props.highlightedLocationMessage&&(!e.highlightedLocationMessage||e.highlightedLocationMessage.index!==this.props.highlightedLocationMessage.index)&&this.activeMarkerNode&&this.props.scroll&&this.props.scroll(this.activeMarkerNode)},t.prototype.componentWillUnmount=function(){this.detachEvents()},t.prototype.attachEvents=function(){if(this.codeNode&&(this.symbols=this.codeNode.querySelectorAll(".sym"),this.symbols))for(var e=0;e<this.symbols.length;e++){this.symbols[e].addEventListener("click",this.handleSymbolClick)}},t.prototype.detachEvents=function(){if(this.symbols)for(var e=0;e<this.symbols.length;e++){this.symbols[e].addEventListener("click",this.handleSymbolClick)}},t.prototype.renderMarker=function(e,t,n,o){var r=this,i=this.props.onLocationSelect,l=i?function(){return i(e)}:void 0,u=n?function(e){return r.activeMarkerNode=e}:void 0;return s.createElement(c.a,{key:"marker-"+e,leading:o,onClick:l,selected:n},s.createElement("span",{ref:u},e+1),t&&s.createElement(a.a,{selected:!0},t))},t.prototype.render=function(){var e=this,t=this.props,n=t.highlightedLocationMessage,o=t.highlightedSymbols,r=t.issues,c=t.issueLocations,a=t.line,u=t.onIssueSelect,d=t.padding,h=t.secondaryIssueLocations,f=t.selectedIssue,m=t.showIssues,v=this.state.tokens.slice();if(o&&o.forEach(function(e){v=Object(l.b)(v,e)}),c.length>0&&(v=Object(l.a)(v,c)),h&&(v=Object(l.a)(v,h,"issue-location"),n)){var g=h.find(function(e){return e.index===n.index});g&&(v=Object(l.a)(v,[g],"selected"))}var b=i("source-line-code","code",{"has-issues":r.length>0}),y=[],k=!1;v.forEach(function(t,o){e.props.displayLocationMarkers&&t.markers.length>0&&t.markers.forEach(function(t){var o=void 0!==n&&n.index===t,r=h.find(function(e){return e.index===t}),i=r&&r.text;y.push(e.renderMarker(t,i,o,k))}),y.push(s.createElement("span",{className:t.className,key:o},t.text)),k=(0===o||k)&&!t.text.trim().length});var E=d?{paddingBottom:d+"px"}:void 0,x=r.filter(function(e){return e.key===f});return s.createElement("td",{className:b,"data-line-number":a.line,style:E},s.createElement("div",{className:"source-line-code-inner"},s.createElement("pre",{ref:function(t){return e.codeNode=t}},y)),m&&r.length>0&&s.createElement(p,{branchLike:this.props.branchLike,issuePopup:this.props.issuePopup,issues:r,onIssueChange:this.props.onIssueChange,onIssueClick:u,onIssuePopupToggle:this.props.onIssuePopupToggle,selectedIssue:f}),f&&!m&&s.createElement(p,{branchLike:this.props.branchLike,issuePopup:this.props.issuePopup,issues:x,onIssueChange:this.props.onIssueChange,onIssueClick:u,onIssuePopupToggle:this.props.onIssuePopupToggle,selectedIssue:f}))},t}(s.PureComponent),m=n(644),v=n.n(m),g=n(34);function b(e){var t=e.line,n="source-meta source-line-coverage"+(null!=t.coverageStatus?" source-line-"+t.coverageStatus:"");return s.createElement("td",{className:n,"data-line-number":t.line},s.createElement(v.a,{overlay:y(t),placement:"right"},s.createElement("div",{className:"source-line-bar"})))}function y(e){return"uncovered"===e.coverageStatus?e.conditions?Object(g.translateWithParameters)("source_viewer.tooltip.uncovered.conditions",e.conditions):Object(g.translate)("source_viewer.tooltip.uncovered"):"covered"===e.coverageStatus?e.conditions?Object(g.translateWithParameters)("source_viewer.tooltip.covered.conditions",e.conditions):Object(g.translate)("source_viewer.tooltip.covered"):"partially-covered"===e.coverageStatus?e.conditions?Object(g.translateWithParameters)("source_viewer.tooltip.partially-covered.conditions",e.coveredConditions||0,e.conditions):Object(g.translate)("source_viewer.tooltip.partially-covered"):void 0}var k=n(709),E=n.n(k),x=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),t.props.onPopupToggle({index:t.props.index,line:t.props.line.line,name:"duplications"})},t.handleTogglePopup=function(e){t.props.onPopupToggle({index:t.props.index,line:t.props.line.line,name:"duplications",open:e})},t.closePopup=function(){t.handleTogglePopup(!1)},t}return x(t,e),t.prototype.render=function(){var e=this.props,t=e.duplicated,n=e.index,o=e.line,r=e.popupOpen,c=i("source-meta","source-line-duplications-extra",{"source-line-duplicated":t});return t?s.createElement("td",{className:c,"data-index":n,"data-line-number":o.line},s.createElement(E.a,{onRequestClose:this.closePopup,open:r,overlay:this.props.renderDuplicationPopup(n,o.line)},s.createElement(v.a,{overlay:r?void 0:Object(g.translate)("source_viewer.tooltip.duplicated_block"),placement:"right"},s.createElement("div",{className:"source-line-bar",onClick:this.handleClick,role:"button",tabIndex:0})))):s.createElement("td",{className:c,"data-index":n,"data-line-number":o.line},s.createElement("div",{className:"source-line-bar"}))},t}(s.PureComponent),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),t.props.onClick(t.props.line)},t}return O(t,e),t.prototype.render=function(){var e=this.props.line,t=i("source-meta","source-line-duplications",{"source-line-duplicated":e.duplicated}),n=s.createElement("td",{className:t,onClick:e.duplicated?this.handleClick:void 0,role:e.duplicated?"button":void 0,tabIndex:e.duplicated?0:void 0},s.createElement("div",{className:"source-line-bar"}));return e.duplicated?s.createElement(v.a,{overlay:Object(g.translate)("source_viewer.tooltip.duplicated_line"),placement:"right"},n):n},t}(s.PureComponent),j=n(798),w=n.n(j),_=n(1016),C=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),t.props.onClick()},t}return C(t,e),t.prototype.render=function(){var e=this.props,t=e.issues,n=e.line,o=t.length>0,r=i("source-meta","source-line-issues",{"source-line-with-issues":o}),c=o?Object(_.b)(t)[0]:null;return s.createElement("td",{className:r,"data-line-number":n.line,onClick:o?this.handleClick:void 0,role:o?"button":void 0,tabIndex:o?0:void 0},null!=c&&s.createElement(w.a,{type:c.type}),t.length>1&&s.createElement("span",{className:"source-line-issues-counter"},t.length))},t}(s.PureComponent),L=n(159),A=n(658),M=n(740),R=n(649),D=n(1391);function T(e){var t=e.line;return s.createElement(D.a.Consumer,null,function(e){var n=e.branchLike,o=e.file;return s.createElement(A.DropdownOverlay,{placement:M.PopupPlacement.RightTop},s.createElement("div",{className:"source-viewer-bubble-popup nowrap"},s.createElement(L.Link,{className:"js-get-permalink",onClick:function(e){e.stopPropagation()},rel:"noopener noreferrer",target:"_blank",to:Object(R.c)(o.project,n,o.key,t.line)},Object(g.translate)("component_viewer.get_permalink"))))})}var S=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),t.props.onPopupToggle({line:t.props.line.line,name:"line-number"})},t.handleTogglePopup=function(e){t.props.onPopupToggle({line:t.props.line.line,name:"line-number",open:e})},t.closePopup=function(){t.handleTogglePopup(!1)},t}return S(t,e),t.prototype.render=function(){var e=this.props,t=e.line,n=e.popupOpen,o=t.line;return!!o?s.createElement("td",{className:"source-meta source-line-number","data-line-number":o,onClick:this.handleClick,role:"button",tabIndex:0},s.createElement(E.a,{onRequestClose:this.closePopup,open:n,overlay:s.createElement(T,{line:t})})):s.createElement("td",{className:"source-meta source-line-number"})},t}(s.PureComponent),Z=n(672);function G(e){var t=e.line,n=""!==t.scmAuthor;return s.createElement(A.DropdownOverlay,{placement:M.PopupPlacement.RightTop},s.createElement("div",{className:"source-viewer-bubble-popup abs-width-400"},n&&s.createElement("div",null,t.scmAuthor),t.scmDate&&s.createElement("div",{className:i({"spacer-top":n})},s.createElement(Z.a,{date:t.scmDate})),t.scmRevision&&s.createElement("div",{className:"spacer-top"},t.scmRevision)))}var U=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),t.props.onPopupToggle({line:t.props.line.line,name:"scm"})},t.handleTogglePopup=function(e){t.props.onPopupToggle({line:t.props.line.line,name:"scm",open:e})},t.closePopup=function(){t.handleTogglePopup(!1)},t}return U(t,e),t.prototype.render=function(){var e=this.props,t=e.line,n=e.popupOpen,o=e.previousLine,r=!!t.line,i=function(e,t){var n=!0;null!=t&&null!=e.scmRevision&&null!=t.scmRevision&&(n=e.scmRevision!==t.scmRevision||e.scmDate!==t.scmDate);return n}(t,o)&&s.createElement("div",{className:"source-line-scm-inner","data-author":t.scmAuthor||"…"});return r?s.createElement("td",{className:"source-meta source-line-scm","data-line-number":t.line,onClick:this.handleClick,role:"button",tabIndex:0},s.createElement(E.a,{onRequestClose:this.closePopup,open:n,overlay:s.createElement(G,{line:t})},i)):s.createElement("td",{className:"source-meta source-line-scm","data-line-number":t.line},i)},t}(s.PureComponent);var W=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isPopupOpen=function(e,n){var o=t.props,r=o.line,i=o.linePopup;return void 0!==i&&i.index===n&&i.line===r.line&&i.name===e},t.handleIssuesIndicatorClick=function(){if(t.props.openIssues)t.props.onIssuesClose(t.props.line),t.props.onIssueUnselect();else{t.props.onIssuesOpen(t.props.line);var e=t.props.issues;e.length>0&&t.props.onIssueSelect(e[0].key)}},t}return W(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.displayCoverage,o=t.duplications,c=t.duplicationsCount,a=t.issuePopup,l=t.line,u=i("source-line",{"source-line-highlighted":this.props.highlighted,"source-line-filtered":l.isNew,"source-line-filtered-dark":n&&("uncovered"===l.coverageStatus||"partially-covered"===l.coverageStatus),"source-line-last":!0===this.props.last}),p=this.props.verticalBuffer?18*this.props.verticalBuffer:void 0;return s.createElement("tr",{className:u,"data-line-number":l.line},s.createElement(F,{line:l,onPopupToggle:this.props.onLinePopupToggle,popupOpen:this.isPopupOpen("line-number")}),s.createElement(z,{line:l,onPopupToggle:this.props.onLinePopupToggle,popupOpen:this.isPopupOpen("scm"),previousLine:this.props.previousLine}),this.props.displayIssues&&!this.props.displayAllIssues?s.createElement(I,{issues:this.props.issues,line:l,onClick:this.handleIssuesIndicatorClick}):s.createElement("td",{className:"source-meta source-line-issues"}),this.props.displayDuplications&&s.createElement(N,{line:l,onClick:this.props.loadDuplications}),r()(c,function(t){return s.createElement(P,{duplicated:o.includes(t),index:t,key:t,line:e.props.line,onPopupToggle:e.props.onLinePopupToggle,popupOpen:e.isPopupOpen("duplications",t),renderDuplicationPopup:e.props.renderDuplicationPopup})}),this.props.displayCoverage&&s.createElement(b,{line:l}),s.createElement(f,{branchLike:this.props.branchLike,displayLocationMarkers:this.props.displayLocationMarkers,highlightedLocationMessage:this.props.highlightedLocationMessage,highlightedSymbols:this.props.highlightedSymbols,issueLocations:this.props.issueLocations,issuePopup:a,issues:this.props.issues,line:l,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onIssueSelect:this.props.onIssueSelect,onLocationSelect:this.props.onLocationSelect,onSymbolClick:this.props.onSymbolClick,padding:p,scroll:this.props.scroll,secondaryIssueLocations:this.props.secondaryIssueLocations,selectedIssue:this.props.selectedIssue,showIssues:this.props.openIssues||this.props.displayAllIssues}))},t}(s.PureComponent);t.a=B},2043:function(e,t,n){var o=n(2044);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(o,r);o.locals&&(e.exports=o.locals)},2044:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,'.source-line:hover .source-line-coverage,.source-line:hover .source-line-duplications,.source-line:hover .source-line-duplications-extra,.source-line:hover .source-line-issues,.source-line:hover .source-line-number,.source-line:hover .source-line-scm{border-color:#e9e9e9;background-color:#e9e9e9}.source-line:hover .source-line-code{background-color:#f5f5f5}.source-line-highlighted .source-line-coverage,.source-line-highlighted .source-line-duplications,.source-line-highlighted .source-line-duplications-extra,.source-line-highlighted .source-line-issues,.source-line-highlighted .source-line-number,.source-line-highlighted .source-line-scm,.source-line-highlighted:hover .source-line-coverage,.source-line-highlighted:hover .source-line-duplications,.source-line-highlighted:hover .source-line-duplications-extra,.source-line-highlighted:hover .source-line-issues,.source-line-highlighted:hover .source-line-number,.source-line-highlighted:hover .source-line-scm{border-color:#c4dfec!important;background-color:#c4dfec}.source-line-highlighted .source-line-code,.source-line-highlighted:hover .source-line-code{background-color:#d9edf7}.source-line-filtered .source-line-code{background-color:#fbf3d5!important}.source-line-filtered.source-line-highlighted .source-line-code,.source-line-filtered.source-line-highlighted:hover .source-line-code{background-color:#cdd9c4!important}.source-line-filtered:hover .source-line-code{background-color:#f1e8cb!important}.source-line-filtered.source-line-filtered-dark .source-line-code{background-color:#f9ebb7!important}.source-line-filtered.source-line-filtered-dark:hover .source-line-code{background-color:#eaddb2!important}.source-line-last .source-line-code{padding-bottom:160px}.source-viewer pre{height:18px;padding:0}.source-line-number,.source-line-scm,.source-viewer pre{line-height:18px;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px}.source-line-code{position:relative;padding:0 10px}.source-line-code pre{float:left}.source-line-code .issue-list{margin-left:-10px;margin-right:-10px}.source-line-code-inner{min-height:18px}.source-line-code-inner:after,.source-line-code-inner:before{display:table;content:"";line-height:0}.source-line-code-inner:after{clear:both}.source-line-code-issue{display:inline-block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAGCAYAAAAPDoR2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1M0M2Rjk4M0M3QUYxMUUzODkzRUREMUM5OTNDMjY4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1M0M2Rjk4NEM3QUYxMUUzODkzRUREMUM5OTNDMjY4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzQzZGOTgxQzdBRjExRTM4OTNFREQxQzk5M0MyNjhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUzQzZGOTgyQzdBRjExRTM4OTNFREQxQzk5M0MyNjhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bcqJtQAAAEhJREFUeNpi+G+swwDGDAwgbAWlwZiJAQFCgfgwEIfDRaC67ID4NRDnQ2kQnwFZwgFqnANMAQOUYY9sF0wBiCGH5CBkrAgQYACuWi4sSGW8yAAAAABJRU5ErkJggg==);background-repeat:repeat-x;background-size:4px;background-position:bottom}.source-meta{position:relative;vertical-align:top;width:1px;background-clip:padding-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.source-meta:focus{outline:none}.source-meta[role=button]{cursor:pointer}.source-meta+.source-meta{border-left:1px solid #f3f3f3}.source-line-number{min-width:18px;padding:0 10px;background-color:#f3f3f3;color:#777;text-align:right}.source-line-number:before{content:attr(data-line-number)}.source-line-issues{position:relative;padding:0 2px;background-color:#f3f3f3;white-space:nowrap}.source-line-with-issues{padding-right:4px}.source-line-issues-counter{position:absolute;left:17px;line-height:8px;font-size:8px;z-index:900}.source-line-coverage,.source-line-duplications,.source-line-duplications-extra{background-color:#f3f3f3}.source-duplications-expanded .source-line-duplications,.source-line-duplications-extra{display:none}.source-duplications-expanded .source-line-duplications-extra{display:table-cell}.source-line-scm{padding:0 5px;background-color:#f3f3f3}.source-line-scm-inner{max-width:40px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.source-line-scm-inner:before{content:attr(data-author)}.source-line-bar{width:5px;height:18px}.source-line-bar[role=button]{cursor:pointer}.source-line-bar:focus{outline:none}.source-line-covered{background-color:#b4dd78!important}.source-line-partially-covered,.source-line-uncovered{background-color:#a4030f!important}.source-line-partially-covered{background-image:repeating-linear-gradient(45deg,hsla(0,0%,100%,.5) 4px,transparent 0,transparent 8px,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 12px,transparent 0,transparent 16px,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 20px)!important}.source-line-duplicated{background-color:#797979!important}',""])},2045:function(e,t,n){var o=n(2046);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(o,r);o.locals&&(e.exports=o.locals)},2046:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,".source-viewer-header-slim{padding:4px 10px;border-bottom:1px solid #cdcdcd;background-color:#f3f3f3;align-items:center;min-height:25px}",""])},919:function(e,t,n){"use strict";var o=n(12),r=n(927),i=n.n(r),s=n(48);function c(e){return Object(s.post)("/api/favorites/add",{component:e})}function a(e){return Object(s.post)("/api/favorites/remove",{component:e})}var l,u=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.toggleFavorite=function(){var e=!n.state.favorite;return(e?c:a)(n.props.component).then(function(){n.mounted&&n.setState({favorite:e},function(){n.props.handleFavorite&&n.props.handleFavorite(n.props.component,e)})})},n.state={favorite:t.favorite},n}return u(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentDidUpdate=function(e,t){t.favorite!==this.props.favorite&&this.setState({favorite:this.props.favorite})},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.className,n=e.qualifier,r=this.state.favorite;return o.createElement(i.a,{className:t,favorite:r,qualifier:n,toggleFavorite:this.toggleFavorite})},t}(o.PureComponent);t.a=p}}]);
//# sourceMappingURL=17.1570825310815.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1876:function(t,e,n){var r=n(1877);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(643)(r,o);r.locals&&(t.exports=r.locals)},1877:function(t,e,n){(t.exports=n(642)(!1)).push([t.i,".markdown-content .alert{margin-bottom:8px;border:1px solid;border-radius:2px}.markdown-content .alert.is-inline{display:inline-flex}.markdown-content .alert:empty{display:none}.markdown-content .alert-error{border-color:#f4b1b0;background-color:#f2dede;color:#862422}.markdown-content .alert-error .alert-icon{border-color:#f4b1b0}.markdown-content .alert-warning{border-color:#faebcc;background-color:#fcf8e3;color:#6f4f17}.markdown-content .alert-warning .alert-icon{border-color:#faebcc}.markdown-content .alert-info{border-color:#b1dff3;background-color:#d9edf7;color:#0e516f}.markdown-content .alert-info .alert-icon{border-color:#b1dff3}.markdown-content .alert-success{border-color:#d6e9c6;background-color:#dff0d8;color:#215821}.markdown-content .alert-success .alert-icon{border-color:#d6e9c6}",""])},804:function(t,e,n){"use strict";n.r(e);var r,o=n(639),c=n(12),a=n(1246),l=n.n(a),i=n(1830),s=n.n(i),u=n(1481),p=n.n(u),f=n(1492),h=n.n(f),d=n(787),m=n(793),y=n.n(m),b=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={open:!1},e.handleClick=function(t){e.setState(function(t){return{open:!t.open}}),t.stopPropagation(),t.preventDefault()},e}return b(e,t),e.prototype.renderTitle=function(t){return c.createElement("a",{"aria-expanded":this.state.open,"aria-haspopup":!0,className:"link-no-underline",href:"#",onClick:this.handleClick},c.createElement(y.a,{className:"text-middle little-spacer-right",open:this.state.open}),t.props?t.props.children:t)},e.prototype.render=function(){var t=c.Children.toArray(this.props.children);if(t.length<1)return null;var e=c.Children.toArray(t[0].props.children);return e.length<2?null:c.createElement("div",{className:"collapse-container"},this.renderTitle(e[0]),this.state.open&&e.slice(1))},e}(c.PureComponent),O=n(652),g=function(){return(g=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},w=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function k(t){var e=t.alt,n=t.src,r=w(t,["alt","src"]);return c.createElement("img",g({alt:e,className:"max-width-100",src:Object(O.getBaseUrl)()+"/images/embed-doc"+n},r))}var _=n(159),j=n(811),E=n.n(j),P=n(118),A=n(845),C=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(){return(S=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},x=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},N="/#sonarcloud#/",H="/#sonarqube#/",W="/#sonarqube-admin#/",L=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleClickOnAnchor=function(t){var n=e.props,r=n.customProps,o=n.href,c=void 0===o?"#":o;r&&r.onAnchorClick&&r.onAnchorClick(c,t)},e}return C(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=t.href,r=(t.customProps,x(t,["children","href","customProps"]));if(n&&n.startsWith("#"))return c.createElement("a",{href:"#",onClick:this.handleClickOnAnchor},e);if(n&&n.startsWith("/")){if(n.startsWith(N))return c.createElement(D,{url:n},e);if(n.startsWith(H))return c.createElement(F,{url:n},e);if(n.startsWith(W))return c.createElement(q,{canAdmin:this.props.appState.canAdmin,url:n},e);var o="/documentation"+n;return c.createElement(_.Link,S({to:o},r),e)}return c.createElement(c.Fragment,null,c.createElement("a",S({href:n,rel:"noopener noreferrer",target:"_blank"},r),e),c.createElement(E.a,{className:"text-muted little-spacer-left little-spacer-right text-baseline",size:12}))},e}(c.PureComponent),T=Object(A.a)(L);function D(t){var e=t.children,n=t.url;if(Object(P.isSonarCloud)()){var r="/"+n.substr(N.length);return c.createElement(_.Link,{to:r},e)}return c.createElement(c.Fragment,null,e)}function F(t){var e=t.children,n=t.url;if(Object(P.isSonarCloud)())return c.createElement(c.Fragment,null,e);var r="/"+n.substr(H.length);return c.createElement(_.Link,{target:"_blank",to:r},e)}function q(t){var e=t.canAdmin,n=t.children,r=t.url;if(Object(P.isSonarCloud)()||!e)return c.createElement(c.Fragment,null,n);var o="/"+r.substr(W.length);return c.createElement(_.Link,{target:"_blank",to:o},n)}n(1876);var z=n(836),U=n.n(z),I=n(693),J=n.n(I),M=n(824),R=n(34),B=n(1878),Y=n.n(B);function G(){return this.use(h.a),function(t){var e=Y()(t,{heading:"doctoc",maxDepth:2});null!==e.index&&-1!==e.index&&e.map?t.children=[e.map]:t.children=[]}}var K=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Q=function(t){function e(e){var n=t.call(this,e)||this;return n.node=null,n.state={anchors:[]},n.scrollHandler=function(){var t=Object(M.findDOMNode)(n);if(t&&t.parentNode){for(var e,r=t.parentNode.querySelectorAll("h2[id]"),o=window.pageYOffset||document.body.scrollTop,c=0,a=r.length;c<a&&!(r.item(c).offsetTop>o+120);c++)e="#"+r.item(c).id;n.setState({highlightAnchor:e})}},n.debouncedScrollHandler=J()(n.scrollHandler),n}return K(e,t),e.getDerivedStateFromProps=function(t){var n=t.content;return{anchors:e.getAnchors(n)}},e.prototype.componentDidMount=function(){window.addEventListener("scroll",this.debouncedScrollHandler,!0),this.scrollHandler()},e.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.debouncedScrollHandler,!0)},e.prototype.render=function(){var t=this,e=this.state,n=e.anchors,r=e.highlightAnchor;return 0===n.length?null:c.createElement("div",{className:"markdown-toc"},c.createElement("div",{className:"markdown-toc-content"},c.createElement("h4",null,Object(R.translate)("documentation.on_this_page")),n.map(function(e){return c.createElement("a",{className:o({active:r===e.href}),href:e.href,key:e.title,onClick:function(n){t.props.onAnchorClick(e.href,n)}},e.title)})))},e.getAnchors=U()(function(t){var e=l()().use(p.a).use(G).processSync("\n## doctoc\n"+t);if(e&&e.contents.props.children){for(var n=e.contents,r=10;r&&n.props.children.length&&"ul"!==n.type;)n=n.props.children[0],r--;if("ul"===n.type&&n.props.children.length)return n.props.children.map(function(t){if("string"==typeof t)return null;var e=t.props.children[0];return{href:e.props.href,title:e.props.children[0]}}).filter(function(t){return t})}return[]}),e}(c.PureComponent),V=n(1253),X=n.n(V),Z=function(){return(Z=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},$=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},tt="/#sonarcloud#/";function et(t){var e=t.children,n=t.customProps,r=t.href,o=$(t,["children","customProps","href"]);return n&&X()(n,function(t,e){r&&(r=r.replace("#"+e+"#",encodeURIComponent(t)))}),r&&r.startsWith("/")?(r=r.startsWith(tt)?"/"+r.substr(tt.length):"/documentation/"+r.substr(1),c.createElement(_.Link,Z({rel:"noopener noreferrer",target:"_blank",to:r},o),e)):c.createElement(c.Fragment,null,c.createElement("a",Z({href:r,rel:"noopener noreferrer",target:"_blank"},o),e),c.createElement(E.a,{className:"little-spacer-left little-spacer-right text-baseline",size:12}))}var nt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),rt=function(){return(rt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ot=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.node=null,e.handleAnchorClick=function(t,n){if(e.node){var r=e.node.querySelector(t);r&&(n.preventDefault(),Object(d.scrollToElement)(r,{bottomOffset:window.innerHeight-80}),history.pushState&&history.pushState(null,"",t))}},e}return nt(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.childProps,r=e.content,a=e.className,i=e.title,u=e.stickyToc,f=e.isTooltip,d=l()();return d.use(s.a,{danger:{classes:"alert alert-danger"},warning:{classes:"alert alert-warning"},info:{classes:"alert alert-info"},success:{classes:"alert alert-success"},collapse:{classes:"collapse"}}).use(p.a,{remarkReactComponents:{div:at,a:f?ct(et,n):ct(T,{onAnchorClick:this.handleAnchorClick}),img:k},toHast:{},sanitize:!1}).use(h.a),c.createElement("div",{className:o("markdown",a,{"has-toc":u}),ref:function(e){return t.node=e}},c.createElement("div",{className:"markdown-content"},void 0!==i&&c.createElement("h1",{className:"documentation-title"},i),d.processSync(r).contents),u&&c.createElement(Q,{content:r,onAnchorClick:this.handleAnchorClick}))},e}(c.PureComponent);e.default=ot;function ct(t,e){return function(n){return c.createElement(t,rt({customProps:e},n))}}function at(t){return t.className?t.className.includes("collapse")?c.createElement(v,null,t.children):c.createElement("div",{className:o("cut-margins",t.className)},t.children):t.children}},845:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r,o=n(12),c=n(646),a=n(647),l=n(728),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t){var e=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n.prototype.render=function(){return o.createElement(t,s({},this.props))},n.displayName=Object(l.a)(t,"withAppState"),n}(o.Component);return Object(c.connect)(function(t){return{appState:Object(a.getAppState)(t)}})(e)}}}]);
//# sourceMappingURL=10.1570825310815.chunk.js.map
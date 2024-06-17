(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{2117:function(e,t,n){"use strict";n.r(t);var r,a=n(12),o=n(654),s=n.n(o),c=n(682),i=n.n(c),l=n(34),u=n(892),m=n(660),p=n(656),d=n(645),f=n.n(d),h=n(640),g=n(668),b=n.n(g),y=n(662),v=n.n(y),C=n(990),E=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.handleSubmit=function(){return n.state.metricKey?n.props.onSubmit({description:n.state.description,metricKey:n.state.metricKey,value:n.state.value}).then(n.props.onClose):Promise.reject(void 0)},n.fetchCustomMetrics=function(){n.setState({loading:!0}),Object(C.c)({isCustom:!0}).then(function(e){n.mounted&&n.setState({loading:!1,metrics:e})},function(){n.mounted&&n.setState({loading:!1})})},n.handleMetricSelect=function(e){var t=e.value;n.setState({metricKey:t})},n.handleDescriptionChange=function(e){n.setState({description:e.currentTarget.value})},n.handleValueChange=function(e){n.setState({value:e.currentTarget.value})},n.renderMetricSelect=function(e){return e.length||n.state.loading?a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"create-custom-measure-metric"},Object(l.translate)("custom_measures.metric"),a.createElement("em",{className:"mandatory"},"*")),n.state.loading?a.createElement("i",{className:"spinner"}):a.createElement(b.a,{autoFocus:!0,clearable:!1,id:"create-custom-measure-metric",onChange:n.handleMetricSelect,options:e,value:n.state.metricKey})):a.createElement(p.Alert,{variant:"warning"},Object(l.translate)("custom_measures.all_metrics_taken"))},n.state={description:t.measure&&t.measure.description||"",loading:!1,metricKey:t.measure&&t.measure.metric.key,value:t.measure&&t.measure.value||""},n}return E(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.props.measure||this.fetchCustomMetrics()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=this.props.skipMetrics,n=void 0===t?[]:t,r=this.state.metrics,o=(void 0===r?[]:r).filter(function(e){return!n.includes(e.key)}).map(function(e){return{label:e.name,value:e.key}}),s=!this.props.measure&&!o.length;return a.createElement(v.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},function(t){var n=t.onCloseClick,r=t.onFormSubmit,c=t.submitting;return a.createElement("form",{onSubmit:r},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,e.props.header)),a.createElement("div",{className:"modal-body"},!e.props.measure&&e.renderMetricSelect(o),a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"create-custom-measure-value"},Object(l.translate)("value"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:void 0!==e.props.measure,id:"create-custom-measure-value",maxLength:200,name:"value",onChange:e.handleValueChange,required:!0,type:"text",value:e.state.value})),a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"create-custom-measure-description"},Object(l.translate)("description")),a.createElement("textarea",{id:"create-custom-measure-description",name:"description",onChange:e.handleDescriptionChange,value:e.state.description}))),a.createElement("footer",{className:"modal-foot"},a.createElement(f.a,{className:"spacer-right",loading:c}),a.createElement(h.SubmitButton,{disabled:s||c,id:"create-custom-measure-submit"},e.props.confirmButtonText),a.createElement(h.ResetButtonLink,{disabled:c,id:"create-custom-measure-cancel",onClick:n},Object(l.translate)("cancel"))))})},t}(a.PureComponent),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleClick=function(){t.setState({modal:!0})},t.handleClose=function(){t.mounted&&t.setState({modal:!1})},t}return O(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement(h.Button,{id:"custom-measures-create",onClick:this.handleClick},Object(l.translate)("create")),this.state.modal&&a.createElement(_,{confirmButtonText:Object(l.translate)("create"),header:Object(l.translate)("custom_measures.create_custom_measure"),onClose:this.handleClose,onSubmit:this.props.onCreate,skipMetrics:this.props.skipMetrics}))},t}(a.PureComponent);function S(e){var t=e.loading,n=e.onCreate,r=e.skipMetrics;return a.createElement("header",{className:"page-header",id:"custom-measures-header"},a.createElement("h1",{className:"page-title"},Object(l.translate)("custom_measures.page")),a.createElement(f.a,{loading:t}),a.createElement("div",{className:"page-actions"},a.createElement(j,{onCreate:n,skipMetrics:r})),a.createElement("div",{className:"page-description"},a.createElement(p.Alert,{display:"inline",variant:"error"},Object(l.translate)("custom_measures.deprecated")),a.createElement("p",null,Object(l.translate)("custom_measures.page.description"))))}var N=n(655),w=n.n(N),k=n(702),P=n.n(k),M=n(644),D=n.n(M),F=n(648),L=n(659);function x(e){var t=e.measure,n=e.onClose,r=e.onSubmit,o=Object(l.translate)("custom_measures.delete_custom_measure");return a.createElement(v.a,{header:o,onClose:n,onSubmit:r},function(e){var n=e.onCloseClick,r=e.onFormSubmit,s=e.submitting;return a.createElement("form",{onSubmit:r},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,o)),a.createElement("div",{className:"modal-body"},Object(l.translateWithParameters)("custom_measures.delete_custom_measure.confirmation",t.metric.name)),a.createElement("footer",{className:"modal-foot"},a.createElement(f.a,{className:"spacer-right",loading:s}),a.createElement(h.SubmitButton,{className:"button-red",disabled:s},Object(l.translate)("delete")),a.createElement(h.ResetButtonLink,{disabled:s,onClick:n},Object(l.translate)("cancel"))))})}var A=n(672);function T(e){var t=e.measure;return t.updatedAt?a.createElement(a.Fragment,null,Object(l.translate)("updated_on")," ",a.createElement("span",{className:"js-custom-measure-created-at"},a.createElement(A.a,{date:t.updatedAt}))):t.createdAt?a.createElement(a.Fragment,null,Object(l.translate)("created_on")," ",a.createElement("span",{className:"js-custom-measure-created-at"},a.createElement(A.a,{date:t.createdAt}))):a.createElement(a.Fragment,null,Object(l.translate)("created"))}var B=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),K=function(){return(K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},W=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={deleteForm:!1,editForm:!1},t.handleEditClick=function(){t.setState({editForm:!0})},t.handleDeleteClick=function(){t.setState({deleteForm:!0})},t.closeEditForm=function(){t.mounted&&t.setState({editForm:!1})},t.closeDeleteForm=function(){t.mounted&&t.setState({deleteForm:!1})},t.handleEditFormSubmit=function(e){return t.props.onEdit(K({id:t.props.measure.id},e))},t.handleDeleteFormSubmit=function(){return t.props.onDelete(t.props.measure.id)},t}return B(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.measure,t=e.user.name||e.user.login;return a.createElement("tr",{"data-metric":e.metric.key},a.createElement("td",{className:"nowrap"},a.createElement("div",null,a.createElement("span",{className:"js-custom-measure-metric-name"},e.metric.name),e.pending&&a.createElement(D.a,{overlay:Object(l.translate)("custom_measures.pending_tooltip")},a.createElement("span",{className:"js-custom-measure-pending badge badge-warning spacer-left"},Object(l.translate)("custom_measures.pending")))),a.createElement("span",{className:"js-custom-measure-domain note"},e.metric.domain)),a.createElement("td",{className:"nowrap"},a.createElement("strong",{className:"js-custom-measure-value"},Object(F.formatMeasure)(e.value,e.metric.type))),a.createElement("td",null,a.createElement("span",{className:"js-custom-measure-description"},e.description)),a.createElement("td",null,a.createElement(T,{measure:e})," ",Object(l.translate)("by_")," ",a.createElement("span",{className:"js-custom-measure-user"},Object(L.c)(e.user)?t:Object(l.translateWithParameters)("user.x_deleted",t))),a.createElement("td",{className:"thin nowrap"},a.createElement(P.a,null,a.createElement(k.ActionsDropdownItem,{className:"js-custom-measure-update",onClick:this.handleEditClick},Object(l.translate)("update_verb")),a.createElement(k.ActionsDropdownDivider,null),a.createElement(k.ActionsDropdownItem,{className:"js-custom-measure-delete",destructive:!0,onClick:this.handleDeleteClick},Object(l.translate)("delete")))),this.state.editForm&&a.createElement(_,{confirmButtonText:Object(l.translate)("update_verb"),header:Object(l.translate)("custom_measures.update_custom_measure"),measure:this.props.measure,onClose:this.closeEditForm,onSubmit:this.handleEditFormSubmit}),this.state.deleteForm&&a.createElement(x,{measure:this.props.measure,onClose:this.closeDeleteForm,onSubmit:this.handleDeleteFormSubmit}))},t}(a.PureComponent);function I(e){var t=e.measures,n=e.onDelete,r=e.onEdit;return a.createElement("div",{className:"boxed-group boxed-group-inner",id:"custom-measures-list"},t.length>0?a.createElement("table",{className:"data zebra zebra-hover"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,Object(l.translate)("custom_measures.metric")),a.createElement("th",null,Object(l.translate)("value")),a.createElement("th",null,Object(l.translate)("description")),a.createElement("th",null,Object(l.translate)("date")),a.createElement("th",null))),a.createElement("tbody",null,w()(t,function(e){return e.metric.name.toLowerCase()}).map(function(e){return a.createElement(W,{key:e.id,measure:e,onDelete:n,onEdit:r})}))):a.createElement("p",null,Object(l.translate)("no_results")))}var U=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),z=function(){return(z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},R=50,q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.fetchMeasures=function(){t.setState({loading:!0}),Object(u.c)({projectKey:t.props.component.key,ps:R}).then(function(e){var n=e.customMeasures,r=e.paging;t.mounted&&t.setState({loading:!1,measures:n,paging:r})},t.stopLoading)},t.fetchMore=function(){var e=t.state.paging;e&&(t.setState({loading:!0}),Object(u.c)({projectKey:t.props.component.key,p:e.pageIndex+1,ps:R}).then(function(e){var n=e.customMeasures,r=e.paging;t.mounted&&t.setState(function(e){var t=e.measures;return{loading:!1,measures:(void 0===t?[]:t).concat(n),paging:r}})},t.stopLoading))},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.handleCreate=function(e){return Object(u.a)(z({},e,{projectKey:t.props.component.key})).then(function(e){t.mounted&&t.setState(function(t){var n=t.measures,r=void 0===n?[]:n,a=t.paging;return{measures:r.concat([e]),paging:a&&z({},a,{total:a.total+1})}})})},t.handleEdit=function(e){return Object(u.g)(e).then(function(){t.mounted&&t.setState(function(t){var n=t.measures;return{measures:(void 0===n?[]:n).map(function(t){return t.id===e.id?z({},t,e):t})}})})},t.handleDelete=function(e){return Object(u.b)({id:e}).then(function(){t.mounted&&t.setState(function(t){var n=t.measures,r=void 0===n?[]:n,a=t.paging;return{measures:r.filter(function(t){return t.id!==e}),paging:a&&z({},a,{total:a.total-1})}})})},t}return U(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchMeasures()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.state,t=e.loading,n=e.measures,r=e.paging;return a.createElement(a.Fragment,null,a.createElement(m.a,{suggestions:"custom_measures"}),a.createElement(s.a,{title:Object(l.translate)("custom_measures.page")}),a.createElement("div",{className:"page page-limited"},a.createElement(S,{loading:t,onCreate:this.handleCreate,skipMetrics:n&&n.map(function(e){return e.metric.key})}),n&&a.createElement(I,{measures:n,onDelete:this.handleDelete,onEdit:this.handleEdit}),n&&r&&a.createElement(i.a,{count:n.length,loadMore:this.fetchMore,ready:!t,total:r.total})))},t}(a.PureComponent);t.default=q},660:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r,a=n(12),o=n(679),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function c(e){var t=e.suggestions;return a.createElement(o.a.Consumer,null,function(e){var n=e.addSuggestions,r=e.removeSuggestions;return a.createElement(i,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(a.PureComponent)},662:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=n(12),i=n(657),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return a(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,a=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return c.createElement(i.default,o({contentLabel:n,onRequestClose:r},a),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(c.Component);t.default=l},672:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var r=n(12),a=n(634),o=n(160),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c={year:"numeric",month:"short",day:"2-digit"},i={year:"numeric",month:"long",day:"numeric"};function l(e){var t=e.children,n=e.date,l=e.long;return r.createElement(a.FormattedDate,s({value:Object(o.parseDate)(n)},l?i:c),t)}},682:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var a=n(639),o=n(12),s=n(34),c=n(648),i=n(645);t.default=function(e){var t,n=e.ready,l=void 0===n||n,u=r(e,["ready"]),m=u.total&&u.total>u.count,p=o.createElement("a",{className:"spacer-left","data-test":"show-more",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),u.loadMore&&u.loadMore()}},s.translate("show_more")),d=o.createElement("a",{className:"spacer-left","data-test":"reload",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),u.reload&&u.reload()}},s.translate("reload")),f=a("spacer-top note text-center",{"new-loading":!l},u.className);return u.needReload&&u.reload?t=d:m&&u.loadMore&&(t=p),o.createElement("footer",{className:f},s.translateWithParameters("x_of_y_shown",c.formatMeasure(u.count,"INT",null),c.formatMeasure(u.total,"INT",null)),t,u.loading&&o.createElement(i.default,{className:"text-bottom spacer-left position-absolute"}))}},702:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(639),s=n(12),c=n(159),i=n(663),l=n(703),u=n(640),m=n(658);t.default=function(e){return s.createElement(m.default,{className:e.className,onOpen:e.onOpen,overlay:s.createElement("ul",{className:"menu"},e.children)},s.createElement(u.Button,{className:o("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},s.createElement(l.default,{size:e.small?12:14}),s.createElement(i.default,{className:"little-spacer-left"})))};var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return a(t,e),t.prototype.render=function(){var e=o(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?s.createElement("li",null,s.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?s.createElement("li",null,s.createElement(c.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):s.createElement("li",null,s.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(s.PureComponent);t.ActionsDropdownItem=p,t.ActionsDropdownDivider=function(){return s.createElement("li",{className:"divider"})}},703:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),a=n(641);t.default=function(e){var t=e.className,n=e.fill,o=void 0===n?"currentColor":n,s=e.size,c=void 0===s?14:s;return r.createElement(a.default,{className:t,size:c,viewBox:"0 0 14 14"},r.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},r.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:o}})))}}}]);
//# sourceMappingURL=342.1570825310815.chunk.js.map
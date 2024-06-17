(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{1648:function(e,t,n){"use strict";n.r(t),t.default="This Quality Profile is built in, and cannot be updated manually. If you want to activate more rules, create a new profile that inherits from this one and add rules there.\n"},1770:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(33),s=n(5);class l extends a.PureComponent{getExportUrl(e){const t=this.props,n=t.organization,a=t.profile,s={exporterKey:e.key,language:a.language,qualityProfile:a.name};return n&&Object.assign(s,{organization:n}),window.baseUrl+"/api/qualityprofiles/export?"+Object(r.stringify)(s)}render(){const e=this.props,t=e.exporters,n=e.profile,r=t.filter(e=>e.languages.includes(n.language));return 0===r.length?null:a.createElement("div",{className:"boxed-group quality-profile-exporters"},a.createElement("h2",null,Object(s.translate)("quality_profiles.exporters")),a.createElement("div",{className:"boxed-group-inner"},a.createElement("ul",null,r.map((e,t)=>a.createElement("li",{className:t>0?"spacer-top":void 0,"data-key":e.key,key:e.key},a.createElement("a",{href:this.getExportUrl(e),target:"_blank"},e.name))))))}}var o=n(309),i=n(310),c=n(353),u=n(324),p=n.n(u),d=n(327),m=n.n(d),h=n(338),f=n.n(h);class g extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,selected:null},this.handleSelectChange=e=>{this.setState({selected:e.value})},this.handleFormSubmit=e=>{e.preventDefault();const t=this.state.selected;null!=t&&(this.setState({loading:!0}),Object(c.g)(this.props.profile.key,t).then(this.props.onChange).catch(()=>{this.mounted&&this.setState({loading:!1})}))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.profiles,t=[{label:Object(s.translate)("none"),value:""},...p()(e,"name").map(e=>({label:e.isBuiltIn?"".concat(e.name," (").concat(Object(s.translate)("quality_profiles.built_in"),")"):e.name,value:e.key}))],n=this.state.loading||null==this.state.selected||this.state.selected===this.props.profile.parentKey;return a.createElement(m.a,{contentLabel:Object(s.translate)("quality_profiles.change_parent"),onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"change-profile-parent-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,Object(s.translate)("quality_profiles.change_parent"))),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"change-profile-parent"},Object(s.translate)("quality_profiles.parent")," ",a.createElement("em",{className:"mandatory"},"*")),a.createElement(f.a,{clearable:!1,id:"change-profile-parent",name:"parentKey",onChange:this.handleSelectChange,options:t,value:null!=this.state.selected?this.state.selected:this.props.profile.parentKey||""}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(i.SubmitButton,{disabled:n,id:"change-profile-parent-submit"},Object(s.translate)("change_verb")),a.createElement(i.ResetButtonLink,{id:"change-profile-parent-cancel",onClick:this.props.onClose},Object(s.translate)("cancel")))))}}var y=n(323),b=n.n(y),E=n(664),j=n(679);function v(e){const t=e.className,n=e.depth,r=e.extendsBuiltIn,l=e.language,o=e.organization,i=e.profile,c=e.displayLink,u=void 0===c||c,p=e.type,d=void 0===p?"current":p,m=25*n;return a.createElement("tr",{className:t,"data-test":"quality-profiles__inheritance-".concat(d)},a.createElement("td",null,a.createElement("div",{style:{paddingLeft:m}},u?a.createElement(j.a,{className:"text-middle",language:l,name:i.name,organization:o},i.name):a.createElement("span",{className:"text-middle"},i.name),i.isBuiltIn&&a.createElement(E.a,{className:"spacer-left"}),r&&a.createElement(b.a,{className:"spacer-left",overlay:Object(s.translate)("quality_profiles.extends_built_in")}))),a.createElement("td",null,Object(s.translateWithParameters)("quality_profile.x_active_rules",i.activeRuleCount)),a.createElement("td",null,null!=i.overridingRuleCount&&a.createElement("p",null,Object(s.translateWithParameters)("quality_profiles.x_overridden_rules",i.overridingRuleCount))))}class O extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={formOpen:!1,loading:!0},this.handleChangeParentClick=()=>{this.setState({formOpen:!0})},this.closeForm=()=>{this.setState({formOpen:!1})},this.handleParentChange=()=>{this.props.updateProfiles().then(()=>{this.loadData()},()=>{}),this.closeForm()}}componentDidMount(){this.mounted=!0,this.loadData()}componentDidUpdate(e){e.profile.key!==this.props.profile.key&&this.loadData()}componentWillUnmount(){this.mounted=!1}loadData(){Object(c.q)(this.props.profile.key).then(e=>{if(this.mounted){const t=e.ancestors,n=e.children;t.reverse(),this.setState({children:n,ancestors:t,profile:e.profile,loading:!1})}},()=>{this.mounted&&this.setState({loading:!1})})}render(){const e=this.props,t=e.profile,n=e.profiles,r=this.state.ancestors,l=!this.state.loading&&null!=r&&null!=this.state.children&&(r.length>0||this.state.children.length>0),c=null!=r&&r.some(e=>e.isBuiltIn);return a.createElement("div",{className:"boxed-group quality-profile-inheritance"},t.actions&&t.actions.edit&&!t.isBuiltIn&&a.createElement("div",{className:"boxed-group-actions"},a.createElement(i.Button,{className:"pull-right js-change-parent",onClick:this.handleChangeParentClick},Object(s.translate)("quality_profiles.change_parent"))),a.createElement("header",{className:"boxed-group-header"},a.createElement("h2",null,Object(s.translate)("quality_profiles.profile_inheritance"))),a.createElement("div",{className:"boxed-group-inner"},this.state.loading?a.createElement("i",{className:"spinner"}):a.createElement("table",{className:"data zebra"},a.createElement("tbody",null,null!=r&&r.map((e,n)=>a.createElement(v,{depth:n,key:e.key,language:t.language,organization:this.props.organization,profile:e,type:"ancestor"})),null!=this.state.profile&&a.createElement(v,{className:o({selected:l}),depth:r?r.length:0,displayLink:!1,extendsBuiltIn:c,language:t.language,organization:this.props.organization,profile:this.state.profile}),null!=this.state.children&&this.state.children.map(e=>a.createElement(v,{depth:r?r.length+1:0,key:e.key,language:t.language,organization:this.props.organization,profile:e,type:"child"}))))),this.state.formOpen&&a.createElement(g,{onChange:this.handleParentChange,onClose:this.closeForm,profile:t,profiles:n.filter(e=>e!==t&&e.language===t.language)}))}}var N=n(543),S=n.n(N),q=n(616),C=n.n(q),k=n(362),_=n.n(k),x=n(609),z=n.n(x),P=n(390);class D extends a.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleSearch=e=>{this.setState({loading:!0}),this.props.onSearch(e).then(e=>{this.mounted&&this.setState({loading:!1,searchResults:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleInputChange=e=>{this.setState({query:e}),e.length>1&&this.handleSearch(e)},this.handleSearch=_()(this.handleSearch,250),this.state={loading:!1,query:"",searchResults:[]}}componentDidMount(){this.mounted=!0,this.handleSearch(this.state.query)}componentWillUnmount(){this.mounted=!1}render(){const e=1===this.state.query.length?Object(s.translateWithParameters)("select2.tooShort",2):Object(s.translate)("no_results"),t=this.state.searchResults.map(e=>Object.assign({},e,{value:R(e)}));return a.createElement(f.a,{autoFocus:!0,className:"Select-big",clearable:!1,filterOptions:C.a,isLoading:this.state.loading,noResultsText:e,onChange:this.props.onChange,onInputChange:this.handleInputChange,optionRenderer:M,options:t,placeholder:"",searchable:!0,value:this.props.selected&&R(this.props.selected),valueRenderer:M})}}function T(e){return void 0!==e.login}function R(e){return T(e)?"user:".concat(e.login):"group:".concat(e.name)}function M(e){return T(e)?a.createElement(a.Fragment,null,a.createElement(P.a,{hash:e.avatar,name:e.name,size:16}),a.createElement("strong",{className:"spacer-left"},e.name),a.createElement("span",{className:"note little-spacer-left"},e.login)):a.createElement(a.Fragment,null,a.createElement(z.a,{size:16}),a.createElement("strong",{className:"spacer-left"},e.name))}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}class U extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=()=>{this.mounted&&this.setState({submitting:!1})},this.handleUserAdd=e=>Object(c.c)({language:this.props.profile.language,login:e.login,organization:this.props.organization,qualityProfile:this.props.profile.name}).then(()=>this.props.onUserAdd(e),this.stopSubmitting),this.handleGroupAdd=e=>Object(c.b)({group:e.name,language:this.props.profile.language,organization:this.props.organization,qualityProfile:this.props.profile.name}).then(()=>this.props.onGroupAdd(e),this.stopSubmitting),this.handleFormSubmit=e=>{e.preventDefault();const t=this.state.selected;t&&(this.setState({submitting:!0}),void 0!==t.login?this.handleUserAdd(t):this.handleGroupAdd(t))},this.handleSearch=e=>{const t=this.props,n=t.organization,a=t.profile,r={language:a.language,organization:n,q:e,qualityProfile:a.name,selected:"deselected"};return Promise.all([Object(c.z)(r),Object(c.x)(r)]).then(e=>{let t=w(e,2),n=t[0],a=t[1];return[...n.users,...a.groups]})},this.handleValueChange=e=>{this.setState({selected:e})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=Object(s.translate)("quality_profiles.grant_permissions_to_user_or_group"),t=!this.state.selected||this.state.submitting;return a.createElement(m.a,{contentLabel:e,onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,e)),a.createElement("form",{onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",null,Object(s.translate)("quality_profiles.search_description")),a.createElement(D,{onChange:this.handleValueChange,onSearch:this.handleSearch,selected:this.state.selected}))),a.createElement("footer",{className:"modal-foot"},this.state.submitting&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(i.SubmitButton,{disabled:t},Object(s.translate)("add_verb")),a.createElement(i.ResetButtonLink,{onClick:this.props.onClose},Object(s.translate)("cancel")))))}}var B=n(304),L=n(332),A=n.n(L);class F extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteModal:!1},this.handleDeleteClick=()=>{this.setState({deleteModal:!0})},this.handleDeleteModalClose=()=>{this.mounted&&this.setState({deleteModal:!1})},this.handleDelete=()=>{const e=this.props,t=e.group,n=e.organization,a=e.profile;return Object(c.t)({group:t.name,language:a.language,organization:n,qualityProfile:a.name}).then(()=>{this.handleDeleteModalClose(),this.props.onDelete(t)})},this.renderDeleteModal=e=>a.createElement("div",null,a.createElement("header",{className:"modal-head"},a.createElement("h2",null,Object(s.translate)("groups.remove"))),a.createElement("div",{className:"modal-body"},a.createElement(B.FormattedMessage,{defaultMessage:Object(s.translate)("groups.remove.confirmation"),id:"groups.remove.confirmation",values:{user:a.createElement("strong",null,this.props.group.name)}})),a.createElement("footer",{className:"modal-foot"},e.submitting&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(i.Button,{className:"button-red",disabled:e.submitting,onClick:e.onSubmitClick},Object(s.translate)("remove")),a.createElement(i.ResetButtonLink,{onClick:e.onCloseClick},Object(s.translate)("cancel"))))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.group;return a.createElement("div",{className:"clearfix big-spacer-bottom"},a.createElement(i.DeleteButton,{className:"pull-right spacer-top spacer-left spacer-right button-small",onClick:this.handleDeleteClick}),a.createElement(z.a,{className:"pull-left spacer-right",size:32}),a.createElement("div",{className:"overflow-hidden",style:{lineHeight:"32px"}},a.createElement("strong",null,e.name)),this.state.deleteModal&&a.createElement(A.a,{header:Object(s.translate)("group.remove"),onClose:this.handleDeleteModalClose,onSubmit:this.handleDelete},this.renderDeleteModal))}}class I extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteModal:!1},this.handleDeleteClick=()=>{this.setState({deleteModal:!0})},this.handleDeleteModalClose=()=>{this.mounted&&this.setState({deleteModal:!1})},this.handleDelete=()=>{const e=this.props,t=e.organization,n=e.profile,a=e.user;return Object(c.u)({language:n.language,login:a.login,organization:t,qualityProfile:n.name}).then(()=>{this.handleDeleteModalClose(),this.props.onDelete(a)})},this.renderDeleteModal=e=>a.createElement("div",null,a.createElement("header",{className:"modal-head"},a.createElement("h2",null,Object(s.translate)("users.remove"))),a.createElement("div",{className:"modal-body"},a.createElement(B.FormattedMessage,{defaultMessage:Object(s.translate)("users.remove.confirmation"),id:"users.remove.confirmation",values:{user:a.createElement("strong",null,this.props.user.name)}})),a.createElement("footer",{className:"modal-foot"},e.submitting&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(i.SubmitButton,{className:"button-red",disabled:e.submitting,onClick:e.onSubmitClick},Object(s.translate)("remove")),a.createElement(i.ResetButtonLink,{onClick:e.onCloseClick},Object(s.translate)("cancel"))))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.user;return a.createElement("div",{className:"clearfix big-spacer-bottom"},a.createElement(i.DeleteButton,{className:"pull-right spacer-top spacer-left spacer-right button-small",onClick:this.handleDeleteClick}),a.createElement(P.a,{className:"pull-left spacer-right",hash:e.avatar,name:e.name,size:32}),a.createElement("div",{className:"overflow-hidden"},a.createElement("strong",null,e.name),a.createElement("div",{className:"note"},e.login)),this.state.deleteModal&&a.createElement(A.a,{header:Object(s.translate)("users.remove"),onClose:this.handleDeleteModalClose,onSubmit:this.handleDelete},this.renderDeleteModal))}}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}class W extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={addUserForm:!1,loading:!0},this.handleAddUserButtonClick=()=>{this.setState({addUserForm:!0})},this.handleAddUserFormClose=()=>{this.mounted&&this.setState({addUserForm:!1})},this.handleUserAdd=e=>{this.mounted&&this.setState(t=>({addUserForm:!1,users:t.users&&S()([...t.users,e],e=>e.login)}))},this.handleUserDelete=e=>{this.mounted&&this.setState(t=>({users:t.users&&t.users.filter(t=>t!==e)}))},this.handleGroupAdd=e=>{this.mounted&&this.setState(t=>({addUserForm:!1,groups:t.groups&&S()([...t.groups,e],e=>e.name)}))},this.handleGroupDelete=e=>{this.mounted&&this.setState(t=>({groups:t.groups&&t.groups.filter(t=>t!==e)}))}}componentDidMount(){this.mounted=!0,this.fetchUsersAndGroups()}componentDidUpdate(e){e.organization===this.props.organization&&e.profile.key===this.props.profile.key||this.fetchUsersAndGroups()}componentWillUnmount(){this.mounted=!1}fetchUsersAndGroups(){this.setState({loading:!0});const e=this.props,t=e.organization,n=e.profile,a={language:n.language,organization:t,qualityProfile:n.name,selected:"selected"};Promise.all([Object(c.z)(a),Object(c.x)(a)]).then(e=>{let t=J(e,2),n=t[0],a=t[1];this.mounted&&this.setState({groups:a.groups,loading:!1,users:n.users})},()=>{this.mounted&&this.setState({loading:!1})})}render(){return a.createElement("div",{className:"boxed-group"},a.createElement("h2",null,Object(s.translate)("permissions.page")),a.createElement("div",{className:"boxed-group-inner"},a.createElement("p",{className:"note"},Object(s.translate)("quality_profiles.default_permissions")),this.state.loading?a.createElement("div",{className:"big-spacer-top"},a.createElement("i",{className:"spinner"})):a.createElement("div",{className:"big-spacer-top"},this.state.users&&p()(this.state.users,"name").map(e=>a.createElement(I,{key:e.login,onDelete:this.handleUserDelete,organization:this.props.organization,profile:this.props.profile,user:e})),this.state.groups&&p()(this.state.groups,"name").map(e=>a.createElement(F,{group:e,key:e.name,onDelete:this.handleGroupDelete,organization:this.props.organization,profile:this.props.profile})),a.createElement("div",{className:"text-right"},a.createElement(i.Button,{onClick:this.handleAddUserButtonClick},Object(s.translate)("quality_profiles.grant_permissions_to_more_users"))))),this.state.addUserForm&&a.createElement(U,{onClose:this.handleAddUserFormClose,onGroupAdd:this.handleGroupAdd,onUserAdd:this.handleUserAdd,organization:this.props.organization,profile:this.props.profile}))}}var K=n(28),G=n(352),H=n.n(G),V=n(346),Y=n.n(V),Q=n(356),$=n.n(Q),X=n(533),Z=n.n(X),ee=n(678),te=n.n(ee);class ne extends a.PureComponent{constructor(e){super(e),this.mounted=!1,this.fetchProjects=e=>Object(c.r)({key:this.props.profile.key,organization:this.props.organization,p:e.page,ps:e.pageSize,q:""!==e.query?e.query:void 0,selected:e.filter}).then(t=>{this.mounted&&this.setState(n=>{const a=null!=e.page&&e.page>1,r=a?[...n.projects,...t.results]:t.results,s=t.results.filter(e=>e.selected).map(e=>e.key),l=a?[...n.selectedProjects,...s]:s;return{lastSearchParams:e,needToReload:!1,projects:r,projectsTotalCount:t.paging.total,selectedProjects:l}})}),this.handleSelect=e=>Object(c.d)(this.props.profile.key,e).then(()=>{this.mounted&&this.setState(t=>({needToReload:!0,selectedProjects:[...t.selectedProjects,e]}))}),this.handleUnselect=e=>Object(c.m)(this.props.profile.key,e).then(()=>{this.mounted&&this.setState(t=>({needToReload:!0,selectedProjects:$()(t.selectedProjects,e)}))}),this.handleCloseClick=e=>{e.preventDefault(),this.props.onClose()},this.renderElement=e=>{const t=Z()(this.state.projects,{key:e});return a.createElement("div",{className:"select-list-list-item"},void 0===t?e:a.createElement(a.Fragment,null,t.name,a.createElement("br",null),a.createElement("span",{className:"note"},t.key)))},this.state={needToReload:!1,projects:[],selectedProjects:[]}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=Object(s.translate)("projects");return a.createElement(m.a,{contentLabel:e,onRequestClose:this.props.onClose},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,e)),a.createElement("div",{className:"modal-body modal-container",id:"profile-projects"},a.createElement(te.a,{allowBulkSelection:!0,elements:this.state.projects.map(e=>e.key),elementsTotalCount:this.state.projectsTotalCount,labelAll:Object(s.translate)("quality_gates.projects.all"),labelSelected:Object(s.translate)("quality_gates.projects.with"),labelUnselected:Object(s.translate)("quality_gates.projects.without"),needToReload:this.state.needToReload&&this.state.lastSearchParams&&this.state.lastSearchParams.filter!==ee.SelectListFilter.All,onSearch:this.fetchProjects,onSelect:this.handleSelect,onUnselect:this.handleUnselect,renderElement:this.renderElement,selectedElements:this.state.selectedProjects,withPaging:!0})),a.createElement("div",{className:"modal-foot"},a.createElement("a",{href:"#",onClick:this.handleCloseClick},Object(s.translate)("close"))))}}class ae extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={formOpen:!1,loading:!0,loadingMore:!1,page:1,projects:[],total:0},this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.loadMore=()=>{this.setState({loadingMore:!0});const e={key:this.props.profile.key,page:this.state.page+1};Object(c.r)(e).then(e=>{let t=e.paging,n=e.results;this.mounted&&this.setState(e=>({projects:[...e.projects,...n],total:t.total,loadingMore:!1}))},this.stopLoading)},this.handleChangeClick=()=>{this.setState({formOpen:!0})},this.closeForm=()=>{this.setState({formOpen:!1}),this.loadProjects()}}componentDidMount(){this.mounted=!0,this.loadProjects()}componentDidUpdate(e){e.profile.key!==this.props.profile.key&&this.loadProjects()}componentWillUnmount(){this.mounted=!1}loadProjects(){if(this.props.profile.isDefault)return void this.setState({loading:!1,projects:[]});this.setState({loading:!0});const e={key:this.props.profile.key,page:this.state.page};Object(c.r)(e).then(e=>{let t=e.paging,n=e.results;this.mounted&&this.setState({projects:n,total:t.total,loading:!1})},this.stopLoading)}renderDefault(){return a.createElement("div",null,a.createElement("span",{className:"badge spacer-right"},Object(s.translate)("default")),Object(s.translate)("quality_profiles.projects_for_default"))}renderProjects(){if(this.state.loading)return a.createElement("i",{className:"spinner"});const e=this.state.projects;return 0===e.length?a.createElement("div",null,Object(s.translate)("quality_profiles.no_projects_associated_to_profile")):a.createElement(a.Fragment,null,a.createElement("ul",null,e.map(e=>a.createElement("li",{className:"spacer-top js-profile-project","data-key":e.key,key:e.key},a.createElement(K.Link,{className:"link-with-icon",to:{pathname:"/dashboard",query:{id:e.key}}},a.createElement(Y.a,{qualifier:"TRK"})," ",a.createElement("span",null,e.name))))),a.createElement(H.a,{count:e.length,loadMore:this.loadMore,ready:!this.state.loadingMore,total:this.state.total}))}render(){const e=this.props.profile;return a.createElement("div",{className:"boxed-group quality-profile-projects"},e.actions&&e.actions.associateProjects&&a.createElement("div",{className:"boxed-group-actions"},a.createElement(i.Button,{className:"js-change-projects",onClick:this.handleChangeClick},Object(s.translate)("quality_profiles.change_projects"))),a.createElement("header",{className:"boxed-group-header"},a.createElement("h2",null,Object(s.translate)("projects"))),a.createElement("div",{className:"boxed-group-inner"},e.isDefault?this.renderDefault():this.renderProjects()),this.state.formOpen&&a.createElement(ne,{onClose:this.closeForm,organization:this.props.organization,profile:e}))}}var re=n(435),se=n.n(re),le=n(396),oe=n(339),ie=n(319);function ce(e){return a.createElement("div",{className:"quality-profile-rules-deprecated clearfix"},a.createElement("span",{className:"pull-left"},a.createElement("span",{className:"text-middle"},Object(s.translate)("quality_profiles.deprecated_rules")),a.createElement(b.a,{className:"spacer-left",overlay:Object(s.translate)("quality_profiles.deprecated_rules_description")})),a.createElement(K.Link,{className:"pull-right",to:Object(ie.i)({qprofile:e.profile},e.organization)},e.activeDeprecatedRules))}var ue=n(377),pe=n.n(ue),de=n(318);function me(e){const t=Object(ie.y)({qprofile:e.qprofile,activation:"true",types:e.type},e.organization),n=Object(ie.y)({qprofile:e.qprofile,activation:"false",types:e.type},e.organization);let r=null;return null!=e.count&&null!=e.total&&(r=e.total-e.count),a.createElement("tr",null,a.createElement("td",null,a.createElement("span",null,a.createElement(pe.a,{className:"little-spacer-right",query:e.type}),Object(s.translate)("issue.type",e.type,"plural"))),a.createElement("td",{className:"thin nowrap text-right"},null!=e.count&&a.createElement(K.Link,{to:t},Object(de.formatMeasure)(e.count,"SHORT_INT",null))),a.createElement("td",{className:"thin nowrap text-right"},null!=r&&(r>0?a.createElement(K.Link,{className:"small text-muted",to:n},Object(de.formatMeasure)(r,"SHORT_INT",null)):a.createElement("span",{className:"note text-muted"},"0"))))}function he(e){const t=Object(ie.y)({qprofile:e.qprofile,activation:"true"},e.organization),n=Object(ie.y)({qprofile:e.qprofile,activation:"false"},e.organization);let r=null;return null!=e.count&&null!=e.total&&(r=e.total-e.count),a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,Object(s.translate)("total"))),a.createElement("td",{className:"thin nowrap text-right"},null!=e.count&&a.createElement(K.Link,{to:t},a.createElement("strong",null,Object(de.formatMeasure)(e.count,"SHORT_INT",null)))),a.createElement("td",{className:"thin nowrap text-right"},null!=r&&(r>0?a.createElement(K.Link,{className:"small text-muted",to:n},a.createElement("strong",null,Object(de.formatMeasure)(r,"SHORT_INT",null))):a.createElement("span",{className:"note text-muted"},"0"))))}function fe(e){const t=Object(ie.y)({qprofile:e.profile,activation:"false",compareToProfile:e.sonarway,languages:e.language},e.organization);return a.createElement("div",{className:"quality-profile-rules-sonarway-missing clearfix"},a.createElement("span",{className:"pull-left"},a.createElement("span",{className:"text-middle"},Object(s.translate)("quality_profiles.sonarway_missing_rules")),a.createElement(b.a,{className:"spacer-left",overlay:Object(s.translate)("quality_profiles.sonarway_missing_rules_description")})),a.createElement(K.Link,{className:"pull-right","data-test":"rules",to:t},e.sonarWayMissingRules))}function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const ye=["BUG","VULNERABILITY","CODE_SMELL","SECURITY_HOTSPOT"];class be extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={activatedTotal:null,activatedByType:se()(ye.map(e=>({val:e,count:null})),"val"),allByType:se()(ye.map(e=>({val:e,count:null})),"val"),compareToSonarWay:null,total:null}}componentDidMount(){this.mounted=!0,this.loadRules()}componentDidUpdate(e){e.profile.key!==this.props.profile.key&&this.loadRules()}componentWillUnmount(){this.mounted=!1}loadProfile(){return this.props.profile.isBuiltIn?Promise.resolve(null):Object(c.s)({compareToSonarWay:!0,profile:this.props.profile.key})}loadAllRules(){return Object(le.f)({languages:this.props.profile.language,facets:"types",organization:this.props.organization||void 0,ps:1})}loadActivatedRules(){return Object(le.f)({activation:"true",facets:"types",organization:this.props.organization||void 0,ps:1,qprofile:this.props.profile.key})}loadRules(){Promise.all([this.loadAllRules(),this.loadActivatedRules(),this.loadProfile()]).then(e=>{if(this.mounted){const t=ge(e,3),n=t[0],a=t[1],r=t[2];this.setState({activatedTotal:a.total,allByType:se()(Object(le.g)(n,"types"),"val"),activatedByType:se()(Object(le.g)(a,"types"),"val"),compareToSonarWay:r&&r.compareToSonarWay,total:n.total})}})}getRulesCountForType(e){return this.state.activatedByType&&this.state.activatedByType[e]?this.state.activatedByType[e].count:null}getRulesTotalForType(e){return this.state.allByType&&this.state.allByType[e]?this.state.allByType[e].count:null}render(){const e=this.props,t=e.organization,r=e.profile,l=this.state.compareToSonarWay,o=Object(ie.y)({qprofile:r.key,activation:"false"},t),c=r.actions,u=void 0===c?{}:c;return a.createElement("div",{className:"boxed-group quality-profile-rules"},a.createElement("div",{className:"quality-profile-rules-distribution"},a.createElement("table",{className:"data condensed"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,a.createElement("h2",null,Object(s.translate)("rules"))),a.createElement("th",null,Object(s.translate)("active")),a.createElement("th",null,Object(s.translate)("inactive")))),a.createElement("tbody",null,a.createElement(he,{count:this.state.activatedTotal,organization:t,qprofile:r.key,total:this.state.total}),ye.map(e=>a.createElement(me,{count:this.getRulesCountForType(e),key:e,organization:t,qprofile:r.key,total:this.getRulesTotalForType(e),type:e})))),u.edit&&!r.isBuiltIn&&a.createElement("div",{className:"text-right big-spacer-top"},a.createElement(K.Link,{className:"button js-activate-rules",to:o},Object(s.translate)("quality_profiles.activate_more"))),u.copy&&r.isBuiltIn&&a.createElement("div",{className:"text-right big-spacer-top"},a.createElement(oe.a,{doc:Promise.resolve().then(n.bind(null,1648))},a.createElement(i.Button,{className:"disabled js-activate-rules"},Object(s.translate)("quality_profiles.activate_more"))))),r.activeDeprecatedRuleCount>0&&a.createElement(ce,{activeDeprecatedRules:r.activeDeprecatedRuleCount,organization:t,profile:r.key}),null!=l&&l.missingRuleCount>0&&a.createElement(fe,{language:r.language,organization:t,profile:r.key,sonarWayMissingRules:l.missingRuleCount,sonarway:l.profile}))}}function Ee(e){const t=e.organization,n=e.profile;return a.createElement("div",null,a.createElement("div",{className:"quality-profile-grid"},a.createElement("div",{className:"quality-profile-grid-left"},a.createElement(be,{organization:t,profile:n}),a.createElement(l,{exporters:e.exporters,organization:t,profile:n}),n.actions&&n.actions.edit&&!n.isBuiltIn&&a.createElement(W,{organization:t||void 0,profile:n})),a.createElement("div",{className:"quality-profile-grid-right"},a.createElement(O,{organization:t,profile:n,profiles:e.profiles,updateProfiles:e.updateProfiles}),a.createElement(ae,{organization:t,profile:n}))))}n.d(t,"default",function(){return Ee})},339:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(2),r=n(323),s=n.n(r),l=n(321),o=n(364);const i=Object(l.lazyLoad)(()=>Promise.all([n.e(6),n.e(19)]).then(n.bind(null,456)));class c extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={open:!1},this.close=()=>{this.mounted&&this.setState({open:!1})}}componentDidMount(){this.mounted=!0,this.props.doc.then(e=>{let t=e.default;this.mounted&&this.setState({content:t})},()=>{}),document.addEventListener("scroll",this.close,!0)}componentWillUnmount(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)}render(){return this.state.content?a.createElement(s.a,{className:this.props.className,overlay:a.createElement("div",{className:"abs-width-300"},a.createElement(i,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(o.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null}}},353:function(e,t,n){"use strict";n.d(t,"y",function(){return i}),n.d(t,"s",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"w",function(){return p}),n.d(t,"r",function(){return d}),n.d(t,"q",function(){return m}),n.d(t,"A",function(){return h}),n.d(t,"v",function(){return f}),n.d(t,"i",function(){return g}),n.d(t,"l",function(){return y}),n.d(t,"g",function(){return b}),n.d(t,"o",function(){return E}),n.d(t,"n",function(){return j}),n.d(t,"p",function(){return v}),n.d(t,"h",function(){return O}),n.d(t,"d",function(){return N}),n.d(t,"m",function(){return S}),n.d(t,"z",function(){return q}),n.d(t,"x",function(){return C}),n.d(t,"c",function(){return k}),n.d(t,"u",function(){return _}),n.d(t,"b",function(){return x}),n.d(t,"t",function(){return z}),n.d(t,"e",function(){return P}),n.d(t,"f",function(){return D}),n.d(t,"a",function(){return T}),n.d(t,"k",function(){return R});var a=n(354),r=n.n(a),s=n(469),l=n(8),o=n(320);function i(e){return Object(l.getJSON)("/api/qualityprofiles/search",e).catch(o.a)}function c(e){return Object(l.getJSON)("/api/qualityprofiles/show",e)}function u(e){return Object(l.postJSON)("/api/qualityprofiles/create",e).catch(o.a)}function p(e){return Object(l.postJSON)("/api/qualityprofiles/restore",e).catch(o.a)}function d(e){return Object(l.getJSON)("/api/qualityprofiles/projects",e).catch(o.a)}function m(e){return Object(l.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(o.a)}function h(e){return Object(l.post)("/api/qualityprofiles/set_default",{profileKey:e})}function f(e,t){return Object(l.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(o.a)}function g(e,t){return Object(l.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(o.a)}function y(e){return Object(l.post)("/api/qualityprofiles/delete",{profileKey:e}).catch(o.a)}function b(e,t){return Object(l.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:t}).catch(o.a)}function E(){return Object(l.getJSON)("/api/qualityprofiles/importers").then(e=>e.importers,o.a)}function j(){return Object(l.getJSON)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function v(e){return Object(l.getJSON)("/api/qualityprofiles/changelog",e)}function O(e,t){return Object(l.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function N(e,t){return Object(l.post)("/api/qualityprofiles/add_project",{key:e,project:t}).catch(o.a)}function S(e,t){return Object(l.post)("/api/qualityprofiles/remove_project",{key:e,project:t}).catch(o.a)}function q(e){return Object(l.getJSON)("/api/qualityprofiles/search_users",e).catch(o.a)}function C(e){return Object(l.getJSON)("/api/qualityprofiles/search_groups",e).catch(o.a)}function k(e){return Object(l.post)("/api/qualityprofiles/add_user",e).catch(o.a)}function _(e){return Object(l.post)("/api/qualityprofiles/remove_user",e).catch(o.a)}function x(e){return Object(l.post)("/api/qualityprofiles/add_group",e).catch(o.a)}function z(e){return Object(l.post)("/api/qualityprofiles/remove_group",e).catch(o.a)}function P(e){return Object(l.postJSON)("/api/qualityprofiles/activate_rules",e)}function D(e){return Object(l.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function T(e){const t=e.params&&r()(e.params,(e,t)=>"".concat(t,"=").concat(Object(s.csvEscape)(e))).join(";");return Object(l.post)("/api/qualityprofiles/activate_rule",Object.assign({},e,{params:t})).catch(o.a)}function R(e){return Object(l.post)("/api/qualityprofiles/deactivate_rule",e).catch(o.a)}},364:function(e,t,n){"use strict";function a(e){let t,n;for(let a=0;a<e.length;a++){if("---"===e[a].trim()){if(void 0!==t){n=a;break}t=a}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function r(e){const t={};for(let n=0;n<e.length;n++){const a=e[n].split(":").map(e=>e.trim());2===a.length&&(t[a[0]]=a[1])}return t}function s(e,t){const n="\x3c!-- ".concat(t," --\x3e"),a="\x3c!-- /".concat(t," --\x3e");let r=e,s=r.indexOf(n),l=r.indexOf(a);for(;-1!==s&&-1!==l;)s=(r=r.substring(0,s)+r.substring(l+a.length)).indexOf(n),l=r.indexOf(a);return r}e.exports={getFrontMatter:function(e){const t=e.split("\n"),n=a(t);return n?r(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){const t=e.split("\n"),n=a(t);if(n){const e=r(t.slice(n.firstLine+1,n.lastLine)),a=t.slice(n.lastLine+1).join("\n");return{frontmatter:e,content:a}}return{frontmatter:{},content:e}},filterContent:function(e){const t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",a=n(22),r=a.isSonarCloud,l=a.getInstance,o=s(e.replace(/{instance}/gi,l()),"static");return(r()?s(o,"sonarqube"):s(o,"sonarcloud")).replace(new RegExp("^".concat(t,"(\n|\r|\r\n|$)"),"gm"),"").replace(new RegExp("".concat(t),"g"),"")}}},396:function(e,t,n){"use strict";n.d(t,"e",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"h",function(){return d});var a=n(8),r=n(320);function s(e){return Object(a.getJSON)("/api/rules/app",e).catch(r.a)}function l(e){return Object(a.getJSON)("/api/rules/search",e).catch(r.a)}function o(e,t){const n=e.facets.find(e=>e.property===t);return n?n.values:[]}function i(e){return Object(a.getJSON)("/api/rules/show",e).catch(r.a)}function c(e){return Object(a.getJSON)("/api/rules/tags",e).then(e=>e.tags,r.a)}function u(e){return Object(a.postJSON)("/api/rules/create",e).then(e=>e.rule,e=>e&&409===e.status?Promise.reject(e):Object(r.a)(e))}function p(e){return Object(a.post)("/api/rules/delete",e).catch(r.a)}function d(e){return Object(a.postJSON)("/api/rules/update",e).then(e=>e.rule,r.a)}},664:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(309),r=n(2),s=n(5),l=n(339);function o(e){let t=e.className,o=e.tooltip,i=void 0===o||o;const c=r.createElement("div",{className:a("badge badge-info",t)},Object(s.translate)("quality_profiles.built_in"));return i?r.createElement(l.a,{doc:Promise.resolve().then(n.bind(null,707))},c):c}},679:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(2),r=n(28),s=n(464),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function o(e){var t=e.name,n=e.language,o=e.organization,i=e.children,c=l(e,["name","language","organization","children"]);return a.createElement(r.Link,Object.assign({activeClassName:"link-no-underline",to:Object(s.c)(t,n,o)},c),i)}},707:function(e,t,n){"use strict";n.r(t),t.default="Built-in profiles are provided directly by the language analyzers and may be updated with each new analyzer version. They represent best-practice, minimum rule sets.\n"}}]);
//# sourceMappingURL=327.m.c316fe7f.chunk.js.map
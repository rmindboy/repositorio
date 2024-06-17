(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{1272:function(e,t,n){"use strict";var a,r=n(639),c=n(12),s=n(654),i=n.n(s),l=n(634),m=n(640),o=n(34),u=n(652),d=n(847),p=n(719),f=n(689),g=n(907),h=n(118),E=(n(1273),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.fetchStatus=function(){(t.props.setup?t.fetchMigrationState():t.fetchSystemStatus()).catch(function(){t.mounted&&t.setState({message:void 0,startedAt:void 0,state:void 0,status:"OFFLINE"})})},t.fetchSystemStatus=function(){return Object(d.c)().then(function(e){var n=e.status;t.mounted&&(t.setState({status:n}),"STARTING"===n?(t.setState({wasStarting:!0}),t.scheduleRefresh()):"UP"===n?t.state.wasStarting&&t.loadPreviousPage():t.scheduleRefresh())})},t.fetchMigrationState=function(){return Object(d.a)().then(function(e){var n=e.message,a=e.startedAt,r=e.state;t.mounted&&(t.setState({message:n,startedAt:a,state:r}),"MIGRATION_SUCCEEDED"===r?t.loadPreviousPage():"NO_MIGRATION"!==r&&t.scheduleRefresh())})},t.scheduleRefresh=function(){t.interval=window.setTimeout(t.fetchStatus,5e3)},t.loadPreviousPage=function(){setInterval(function(){window.location.href=Object(u.getReturnUrl)(t.props.location)},2500)},t.handleMigrateClick=function(){Object(d.e)().then(function(e){var n=e.message,a=e.startedAt,r=e.state;t.mounted&&t.setState({message:n,startedAt:a,state:r})},function(){})},t}return E(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchStatus()},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.interval&&window.clearInterval(this.interval)},t.prototype.render=function(){var e=this.state,t=e.state,n=e.status;return c.createElement(c.Fragment,null,c.createElement(i.a,{defaultTitle:Object(o.translate)("maintenance.page")}),c.createElement("div",{className:"page-wrapper-simple",id:"bd"},c.createElement("div",{className:r("page-simple",{"panel-warning":"MIGRATION_REQUIRED"===t}),id:"nonav"},"OFFLINE"===n&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-danger"},c.createElement(p.a,{message:Object(o.translate)("maintenance.is_offline")})),!Object(h.isSonarCloud)()&&c.createElement("p",{className:"maintenance-text"},Object(o.translate)("maintenance.sonarqube_is_offline.text")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(o.translate)("maintenance.try_again")))),"UP"===n&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},c.createElement(p.a,{message:Object(o.translate)("maintenance.is_up")})),c.createElement("p",{className:"maintenance-text text-center"},Object(o.translate)("maintenance.all_systems_opetational")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(o.translate)("layout.home")))),"STARTING"===n&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},c.createElement(p.a,{message:Object(o.translate)("maintenance.is_starting")})),c.createElement("p",{className:"maintenance-spinner"},c.createElement("i",{className:"spinner"}))),"DOWN"===n&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-danger"},c.createElement(p.a,{message:Object(o.translate)("maintenance.is_down")})),c.createElement("p",{className:"maintenance-text"},Object(o.translate)("maintenance.sonarqube_is_down.text")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(o.translate)("maintenance.try_again")))),("DB_MIGRATION_NEEDED"===n||"DB_MIGRATION_RUNNING"===n)&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},c.createElement(p.a,{message:Object(o.translate)("maintenance.is_under_maintenance")})),!Object(h.isSonarCloud)()&&c.createElement(c.Fragment,null,c.createElement("p",{className:"maintenance-text"},c.createElement(l.FormattedMessage,{defaultMessage:Object(o.translate)("maintenance.sonarqube_is_under_maintenance.1"),id:"maintenance.sonarqube_is_under_maintenance.1",values:{link:c.createElement("a",{href:"https://redirect.sonarsource.com/doc/plugin-library.html"},Object(o.translate)("maintenance.sonarqube_is_under_maintenance_link.1"))}})),c.createElement("p",{className:"maintenance-text"},c.createElement(l.FormattedMessage,{defaultMessage:Object(o.translate)("maintenance.sonarqube_is_under_maintenance.2"),id:"maintenance.sonarqube_is_under_maintenance.2",values:{link:c.createElement("a",{href:"https://redirect.sonarsource.com/doc/upgrading.html"},Object(o.translate)("maintenance.sonarqube_is_under_maintenance_link.2"))}})))),"NO_MIGRATION"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},Object(o.translate)("maintenance.database_is_up_to_date")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(o.translate)("layout.home")))),"MIGRATION_REQUIRED"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},Object(o.translate)("maintenance.upgrade_database")),c.createElement("p",{className:"maintenance-text"},Object(o.translate)("maintenance.upgrade_database.1")),c.createElement("p",{className:"maintenance-text"},Object(o.translate)("maintenance.upgrade_database.2")),c.createElement("p",{className:"maintenance-text"},Object(o.translate)("maintenance.upgrade_database.3")),c.createElement("div",{className:"maintenance-spinner"},c.createElement(m.Button,{id:"start-migration",onClick:this.handleMigrateClick},Object(o.translate)("maintenance.upgrade")))),"NOT_SUPPORTED"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-danger"},Object(o.translate)("maintenance.migration_not_supported")),c.createElement("p",null,Object(o.translate)("maintenance.migration_not_supported.text"))),"MIGRATION_RUNNING"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},Object(o.translate)("maintenance.database_migration")),this.state.message&&c.createElement("p",{className:"maintenance-text text-center"},this.state.message),this.state.startedAt&&c.createElement("p",{className:"maintenance-text text-center"},Object(o.translate)("background_tasks.table.started")," ",c.createElement(f.a,{date:this.state.startedAt}),c.createElement("br",null),c.createElement("small",{className:"text-muted"},c.createElement(g.a,{date:this.state.startedAt,long:!0}))),c.createElement("p",{className:"maintenance-spinner"},c.createElement("i",{className:"spinner"}))),"MIGRATION_SUCCEEDED"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-success"},Object(o.translate)("maintenance.database_is_up_to_date")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(o.translate)("layout.home")))),"MIGRATION_FAILED"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-danger"},Object(o.translate)("maintenance.upgrade_failed")),c.createElement("p",{className:"maintenance-text"},Object(o.translate)("maintenance.upgrade_failed.text"))))))},t}(c.PureComponent);t.a=b},1273:function(e,t,n){var a=n(1274);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(a,r);a.locals&&(e.exports=a.locals)},1274:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,".maintenance-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}.maintenance-text{margin-bottom:16px;line-height:1.5;font-size:16px;font-weight:300}.maintenance-spinner{margin-top:40px;text-align:center}",""])},2076:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(12),r=n(1272),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function s(e){return a.createElement(r.a,c({setup:!1},e))}},689:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(12),r=n(634),c=n(160);function s(e){var t=e.children,n=e.date;return a.createElement(r.FormattedRelative,{value:Object(c.parseDate)(n)},t)}},847:function(e,t,n){"use strict";n.d(t,"g",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"e",function(){return o}),n.d(t,"f",function(){return u}),n.d(t,"h",function(){return d});var a=n(48),r=n(651);function c(e){return Object(a.post)("/api/system/change_log_level",{level:e}).catch(r.a)}function s(){return Object(a.getJSON)("/api/system/info").catch(r.a)}function i(){return Object(a.getJSON)("/api/system/status")}function l(){return Object(a.getJSON)("/api/system/upgrades")}function m(){return Object(a.getJSON)("/api/system/db_migration_status")}function o(){return Object(a.postJSON)("/api/system/migrate_db")}function u(){return Object(a.post)("/api/system/restart").catch(r.a)}function d(){return Object(a.requestTryAndRepeatUntil)(i,{max:-1,slowThreshold:-15},function(e){return"UP"===e.status})}},907:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(12),r=n(634),c=n(160),s=function(){return(s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i={hour:"numeric",minute:"numeric"},l={hour:"numeric",minute:"numeric",second:"numeric"};function m(e){var t=e.children,n=e.date,m=e.long;return a.createElement(r.FormattedTime,s({value:Object(c.parseDate)(n)},m?l:i),t)}}}]);
//# sourceMappingURL=339.1570825310815.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{1749:function(e,s,n){"use strict";n.r(s),n.d(s,"default",function(){return r});var t=n(2),o=n(330),i=n(786);function r(e){return t.createElement(t.Fragment,null,t.createElement(i.a,{isFavorite:!1,location:e.location,organization:e.organization}),t.createElement(o.a,{suggestions:"organization_projects"}))}},330:function(e,s,n){"use strict";n.d(s,"a",function(){return i});var t=n(2),o=n(349);function i(e){let s=e.suggestions;return t.createElement(o.a.Consumer,null,e=>{let n=e.addSuggestions,o=e.removeSuggestions;return t.createElement(r,{addSuggestions:n,removeSuggestions:o,suggestions:s})})}class r extends t.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}}}]);
//# sourceMappingURL=363.m.fc8c4152.chunk.js.map
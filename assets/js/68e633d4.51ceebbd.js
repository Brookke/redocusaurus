(self.webpackChunkredocusaurus_example=self.webpackChunkredocusaurus_example||[]).push([[843],{4142:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(120),a=n(7378),u=n(4289),i=n(5626),c=n(161),s=(0,a.createContext)({collectLink:function(){}}),o=n(8948);var l=function(e){var t,n,l,d=e.isNavLink,v=e.to,f=e.href,m=e.activeClassName,E=e.isActive,h=e["data-noBrokenLinkCheck"],_=e.autoAddBaseUrl,b=void 0===_||_,g=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,o.C)().withBaseUrl,p=(0,a.useContext)(s),w=v||f,C=(0,i.Z)(w),N=null==w?void 0:w.replace("pathname://",""),Z=void 0!==N?(n=N,b&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0,L=(0,a.useRef)(!1),U=d?u.OL:u.rU,B=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!B&&C&&null!=Z&&window.docusaurus.prefetch(Z),function(){B&&l&&l.disconnect()}}),[Z,B,C]);var O=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,y=!Z||!C||O;return Z&&C&&!O&&!h&&p.collectLink(Z),y?a.createElement("a",Object.assign({href:Z},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},g)):a.createElement(U,Object.assign({},g,{onMouseEnter:function(){L.current||null==Z||(window.docusaurus.preload(Z),L.current=!0)},innerRef:function(e){var t,n;B&&e&&C&&(t=e,n=function(){null!=Z&&window.docusaurus.prefetch(Z)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),n())}))}))).observe(t))},to:Z||""},d&&{isActive:E,activeClassName:m}))}},5626:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},8948:function(e,t,n){"use strict";n.d(t,{C:function(){return u},Z:function(){return i}});var r=n(353),a=n(5626);function u(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,c=void 0!==i&&i,s=u.absolute,o=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(u,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},9765:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7378),a=n(5361),u=n(4142),i="container_iLOz",c="nav_2vnD",s="navlink_kL_s",o=function(e){var t=e.to,n=e.children;return r.createElement(u.Z,{className:s,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};var l=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Docusaurus debug panel")),r.createElement("div",null,r.createElement("nav",{className:c},r.createElement(o,{to:"/__docusaurus/debug"},"Config"),r.createElement(o,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.createElement(o,{to:"/__docusaurus/debug/registry"},"Registry"),r.createElement(o,{to:"/__docusaurus/debug/routes"},"Routes"),r.createElement(o,{to:"/__docusaurus/debug/content"},"Content"),r.createElement(o,{to:"/__docusaurus/debug/globalData"},"Global data")),r.createElement("main",{className:i},t)))}},3027:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7378),a=n(9765),u=n(353),i="sectionTitle_2Z_6",c="list_3SIz",s="listItem_2ulV",o="version_GR1M",l="name_23Qg";var d=function(){var e=(0,u.default)().siteMetadata;return r.createElement(a.Z,null,r.createElement("h2",null,"Site Metadata"),r.createElement("div",null,"Docusaurus Version: ",r.createElement("code",null,e.docusaurusVersion)),r.createElement("div",null,"Site Version:"," ",r.createElement("code",null,e.siteVersion||"No version specified")),r.createElement("h3",{className:i},"Plugins and themes"),r.createElement("ul",{className:c},Object.entries(e.pluginVersions).map((function(e){var t=e[0],n=e[1];return r.createElement("li",{key:t,className:s},n.version&&r.createElement("div",{className:o},r.createElement("code",null,n.version)),r.createElement("div",{className:l},t),r.createElement("div",null,"Type: ",n.type))}))))}}}]);
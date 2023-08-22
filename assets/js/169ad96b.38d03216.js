"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4813],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),v=l(t),u=o,d=v["".concat(c,".").concat(u)]||v[u]||p[u]||i;return t?n.createElement(d,a(a({ref:r},m),{},{components:t})):n.createElement(d,a({ref:r},m))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},1871:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2,sidebar_label:"VKPR metric-server remove",title:"VKPR metric-server remove"},a="VKPR metric-server remove",s={unversionedId:"commands/metric-server/remove",id:"commands/metric-server/remove",title:"VKPR metric-server remove",description:"Description",source:"@site/docs/commands/metric-server/remove.mdx",sourceDirName:"commands/metric-server",slug:"/commands/metric-server/remove",permalink:"/docs/commands/metric-server/remove",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/metric-server/remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR metric-server remove",title:"VKPR metric-server remove"},sidebar:"tutorialSidebar",previous:{title:"VKPR metric-server install aws",permalink:"/docs/commands/metric-server/install/aws"},next:{title:"VKPR loki install",permalink:"/docs/commands/loki/install"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-metric-server-remove"},"VKPR metric-server remove"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Remove all the content of metric-server from the cluster."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Non-interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr metric-server remove\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/metric-server/install/aws"},"VKPR metric-server install aws")," - Install metric-server AWS in the cluster.")))}p.isMDXComponent=!0}}]);
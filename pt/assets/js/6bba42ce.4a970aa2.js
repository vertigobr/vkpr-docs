"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[5548],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,v=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return t?n.createElement(v,i(i({ref:r},d),{},{components:t})):n.createElement(v,i({ref:r},d))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},893:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2,sidebar_label:"VKPR redis remove",title:"VKPR redis remove"},i="VKPR redis remove",s={unversionedId:"commands/redis/remove",id:"commands/redis/remove",title:"VKPR redis remove",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/redis/remove.mdx",sourceDirName:"commands/redis",slug:"/commands/redis/remove",permalink:"/pt/docs/commands/redis/remove",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/redis/remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR redis remove",title:"VKPR redis remove"},sidebar:"tutorialSidebar",previous:{title:"VKPR redis install",permalink:"/pt/docs/commands/redis/install"},next:{title:"VKPR Upgrade",permalink:"/pt/docs/commands/upgrade"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],d={toc:l};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-redis-remove"},"VKPR redis remove"),(0,o.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,o.kt)("p",null,"Desinstala todo conte\xfado do Redis no cluster."),(0,o.kt)("h2",{id:"comando"},"Comando"),(0,o.kt)("p",null,"Comando n\xe3o interativo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr redis remove\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/redis/install"},"VKPR redis install")," - Instala o Redis no cluster.")))}m.isMDXComponent=!0}}]);
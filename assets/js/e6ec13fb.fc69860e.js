"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[2414],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,k=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return t?r.createElement(k,c(c({ref:n},d),{},{components:t})):r.createElement(k,c({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1,sidebar_label:"VKPR kong deck dump",title:"VKPR kong deck dump"},c="VKPR kong deck dump",i={unversionedId:"commands/kong/deck/dump",id:"commands/kong/deck/dump",title:"VKPR kong deck dump",description:"Description",source:"@site/docs/commands/kong/deck/dump.mdx",sourceDirName:"commands/kong/deck",slug:"/commands/kong/deck/dump",permalink:"/docs/commands/kong/deck/dump",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/kong/deck/dump.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR kong deck dump",title:"VKPR kong deck dump"},sidebar:"tutorialSidebar",previous:{title:"VKPR kong install",permalink:"/docs/commands/kong/install"},next:{title:"VKPR kong deck sync",permalink:"/docs/commands/kong/deck/sync"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"See Also",id:"see-also",level:2}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-kong-deck-dump"},"VKPR kong deck dump"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Export kong workspace content."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr kong deck dump [flags]\n")),(0,o.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,o.kt)("h3",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"  --default           Use to automatically fill inputs with default values\n  --kong_addr         Specifies the Kong Admin Adress\n  --kong_admin_token  Specifies the Kong Admin Token\n  --kong_workspace    Specifies the Kong's Workspace\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/kong/deck/sync"},"VKPR kong deck sync")," - Import content into kong workspace.")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[3875],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>k});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),m=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=m(e.components);return a.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(t),k=n,u=d["".concat(c,".").concat(k)]||d[k]||s[k]||o;return t?a.createElement(u,l(l({ref:r},p),{},{components:t})):a.createElement(u,l({ref:r},p))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1066:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:1,sidebar_label:"VKPR keycloak realm import",title:"VKPR keycloak realm import"},l="VKPR keycloak realm import",i={unversionedId:"commands/keycloak/realm/import",id:"commands/keycloak/realm/import",title:"VKPR keycloak realm import",description:"Description",source:"@site/docs/commands/keycloak/realm/import.mdx",sourceDirName:"commands/keycloak/realm",slug:"/commands/keycloak/realm/import",permalink:"/docs/commands/keycloak/realm/import",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/keycloak/realm/import.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR keycloak realm import",title:"VKPR keycloak realm import"},sidebar:"tutorialSidebar",previous:{title:"VKPR keycloak remove",permalink:"/docs/commands/keycloak/remove"},next:{title:"VKPR keycloak realm idp",permalink:"/docs/commands/keycloak/realm/idp"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"See Also",id:"see-also",level:2}],p={toc:m};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vkpr-keycloak-realm-import"},"VKPR keycloak realm import"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Import realm from the specifed file in Keycloak."),(0,n.kt)("h2",{id:"commands"},"Commands"),(0,n.kt)("p",null,"Interactive inputs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr keycloak realm import [flags]\n")),(0,n.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,n.kt)("h3",{id:"flags"},"Flags"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"  --realm_path         Specifies the path to file.\n  --keycloak_password  Specifies the Keycloak Super admin password.\n  --keycloak_username  Specifies the Keycloak Super admin username.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/commands/keycloak/realm/idp"},"VKPR keycloak realm idp")," - Add a Identity Provider in the realm.")))}s.isMDXComponent=!0}}]);
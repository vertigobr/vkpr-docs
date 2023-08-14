"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[7402],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>k});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),k=n,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||o;return t?a.createElement(u,l(l({ref:r},s),{},{components:t})):a.createElement(u,l({ref:r},s))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},107:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:2,sidebar_label:"VKPR keycloak realm idp",title:"VKPR keycloak realm idp"},l="VKPR keycloak realm idp",i={unversionedId:"commands/keycloak/realm/idp",id:"commands/keycloak/realm/idp",title:"VKPR keycloak realm idp",description:"Description",source:"@site/docs/commands/keycloak/realm/idp.mdx",sourceDirName:"commands/keycloak/realm",slug:"/commands/keycloak/realm/idp",permalink:"/docs/commands/keycloak/realm/idp",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/keycloak/realm/idp.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR keycloak realm idp",title:"VKPR keycloak realm idp"},sidebar:"tutorialSidebar",previous:{title:"VKPR keycloak realm import",permalink:"/docs/commands/keycloak/realm/import"},next:{title:"VKPR kong install",permalink:"/docs/commands/kong/install"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"See Also",id:"see-also",level:2}],s={toc:p};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vkpr-keycloak-realm-idp"},"VKPR keycloak realm idp"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Add a Identity Provider in the realm."),(0,n.kt)("h2",{id:"commands"},"Commands"),(0,n.kt)("p",null,"Interactive inputs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr keycloak realm idp [flags]\n")),(0,n.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,n.kt)("h3",{id:"flags"},"Flags"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"  --realm_name         Specifies the realm name.\n  --keycloak_password  Specifies the Keycloak Super admin password.\n  --keycloak_username  Specifies the Keycloak Super admin username.\n  --provider_name      Specifies which provider will be configured.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/commands/keycloak/realm/import"},"VKPR keycloak realm import")," - Import realm into keycloak database")))}m.isMDXComponent=!0}}]);
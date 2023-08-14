"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),v=a,d=p["".concat(i,".").concat(v)]||p[v]||m[v]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,sidebar_label:"VKPR vault remove",title:"VKPR vault remove"},l="VKPR vault remove",c={unversionedId:"commands/vault/remove",id:"commands/vault/remove",title:"VKPR vault remove",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/vault/remove.mdx",sourceDirName:"commands/vault",slug:"/commands/vault/remove",permalink:"/pt/docs/commands/vault/remove",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/vault/remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR vault remove",title:"VKPR vault remove"},sidebar:"tutorialSidebar",previous:{title:"VKPR vault install",permalink:"/pt/docs/commands/vault/install"},next:{title:"VKPR vault create external-secret",permalink:"/pt/docs/commands/vault/create-external-secret"}},i={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],s={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-vault-remove"},"VKPR vault remove"),(0,a.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,a.kt)("p",null,"Desinstala todo conte\xfado do Vault no cluster."),(0,a.kt)("h2",{id:"comando"},"Comando"),(0,a.kt)("p",null,"Comando n\xe3o interativo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr vault remove\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/vault/install"},"VKPR vault install")," - Instala o vault no cluster.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[8654],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=o,v=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return t?n.createElement(v,c(c({ref:r},d),{},{components:t})):n.createElement(v,c({ref:r},d))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3973:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2,sidebar_label:"VKPR argocd remove",title:"VKPR argocd remove"},c="VKPR argocd remove",i={unversionedId:"commands/argocd/remove",id:"commands/argocd/remove",title:"VKPR argocd remove",description:"Description",source:"@site/docs/commands/argocd/remove.mdx",sourceDirName:"commands/argocd",slug:"/commands/argocd/remove",permalink:"/docs/commands/argocd/remove",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/argocd/remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR argocd remove",title:"VKPR argocd remove"},sidebar:"tutorialSidebar",previous:{title:"VKPR argocd install",permalink:"/docs/commands/argocd/install"},next:{title:"VKPR argocd set applicationset",permalink:"/docs/commands/argocd/set/applicationset"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:s};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-argocd-remove"},"VKPR argocd remove"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Uninstall all the content of ArgoCD from the cluster."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Non-interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr argocd remove\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/argocd/install"},"VKPR argocd install")," - Install ArgoCD in the cluster.")))}m.isMDXComponent=!0}}]);
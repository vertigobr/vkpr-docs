"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[2174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||n;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<n;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2,sidebar_label:"VKPR prometheus-stack import",title:"VKPR prometheus-stack import"},s="VKPR prometheus-stack import",c={unversionedId:"commands/prometheus-stack/import",id:"commands/prometheus-stack/import",title:"VKPR prometheus-stack import",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/prometheus-stack/import.mdx",sourceDirName:"commands/prometheus-stack",slug:"/commands/prometheus-stack/import",permalink:"/pt/docs/commands/prometheus-stack/import",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/prometheus-stack/import.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR prometheus-stack import",title:"VKPR prometheus-stack import"},sidebar:"tutorialSidebar",previous:{title:"VKPR prometheus-stack install",permalink:"/pt/docs/commands/prometheus-stack/install"},next:{title:"VKPR prometheus-stack remove",permalink:"/pt/docs/commands/prometheus-stack/remove"}},i={},p=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-prometheus-stack-import"},"VKPR prometheus-stack import"),(0,a.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,a.kt)("p",null,"Importa um Dashboard por um arquivo para o Grafana."),(0,a.kt)("h2",{id:"comando"},"Comando"),(0,a.kt)("p",null,"Comando interativo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr prometheus-stack import [flags]\n")),(0,a.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,a.kt)("h3",{id:"flags"},"Flags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"  --dashboard_path   Espec\xedfica o caminho do arquivo do dashboard\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/prometheus-stack/install"},"VKPR prometheus-stack install")," - Instala o prometheus-stack no cluster.")))}m.isMDXComponent=!0}}]);
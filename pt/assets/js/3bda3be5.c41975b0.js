"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[2691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:21,sidebar_label:"VKPR plan",title:"VKPR plan"},i="VKPR plan",l={unversionedId:"commands/plan",id:"commands/plan",title:"VKPR plan",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/plan.mdx",sourceDirName:"commands",slug:"/commands/plan",permalink:"/pt/docs/commands/plan",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/plan.mdx",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,sidebar_label:"VKPR plan",title:"VKPR plan"},sidebar:"tutorialSidebar",previous:{title:"VKPR postgresql remove",permalink:"/pt/docs/commands/postgresql/remove"},next:{title:"VKPR prometheus-stack install",permalink:"/pt/docs/commands/prometheus-stack/install"}},s={},p=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-plan"},"VKPR plan"),(0,a.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,a.kt)("p",null,"O VKPR plan \xe9 um m\xe9todo mais simples de validar a instala\xe7\xe3o e poss\xedveis atualiza\xe7\xf5es de aplicativos que voc\xea deseja instalar com o VKPR. Com um arquivo yaml informando os valores que as aplica\xe7\xf5es ir\xe3o utilizar, ser\xe1 gerado um preview de todos os artefatos Kubernetes que ser\xe3o gerados e ser\xe3o exibidos em um terminal interativo para visualiza\xe7\xe3o."),(0,a.kt)("h2",{id:"comando"},"Comando"),(0,a.kt)("p",null,"Comando interativo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr plan [flags]\n")),(0,a.kt)("p",null,"Comando n\xe3o interativo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  vkpr plan --path_to_file="/path/to/vkpr.yaml"\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/init"},"VKPR init")," - Inicializa o VKPR.")))}m.isMDXComponent=!0}}]);
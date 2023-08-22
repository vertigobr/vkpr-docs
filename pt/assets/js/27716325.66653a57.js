"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[3807],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6626:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:4,sidebar_label:"VKPR infra stop",title:"VKPR infra stop"},i="VKPR infra stop",s={unversionedId:"commands/infra/stop",id:"commands/infra/stop",title:"VKPR infra stop",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/infra/stop.mdx",sourceDirName:"commands/infra",slug:"/commands/infra/stop",permalink:"/pt/docs/commands/infra/stop",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/infra/stop.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"VKPR infra stop",title:"VKPR infra stop"},sidebar:"tutorialSidebar",previous:{title:"VKPR infra start",permalink:"/pt/docs/commands/infra/start"},next:{title:"VKPR nginx install",permalink:"/pt/docs/commands/nginx/install"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],p={toc:l};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-infra-stop"},"VKPR infra stop"),(0,a.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,a.kt)("p",null,"Destroi o cluster K3D juntamente com seus registries."),(0,a.kt)("h2",{id:"comando"},"Comando"),(0,a.kt)("p",null,"Comando interativo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra stop [flags]\n")),(0,a.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,a.kt)("h3",{id:"flags"},"Flags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"  --default          Use para preencher automaticamente as entradas com valores padr\xf5es\n  --delete_registry  Espec\xedfica se deseja destruir os registries criados com docker\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/infra/up"},"VKPR infra up")," - Cria um cluster com K3D padr\xe3o."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/infra/start"},"VKPR infra start")," - Cria um cluster com K3D com op\xe7\xf5es de customiza\xe7\xe3o.")))}m.isMDXComponent=!0}}]);
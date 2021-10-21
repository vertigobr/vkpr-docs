"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[6815],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7812:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],s={sidebar_position:6},o="VKPR Infra",p={unversionedId:"commands/vkpr_infra",id:"commands/vkpr_infra",isDocsHomePage:!1,title:"VKPR Infra",description:"VKPR infra up",source:"@site/docs/commands/vkpr_infra.mdx",sourceDirName:"commands",slug:"/commands/vkpr_infra",permalink:"/docs/commands/vkpr_infra",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/vkpr_infra.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"VKPR External-DNS",permalink:"/docs/commands/vkpr_external-dns"},next:{title:"VKPR Ingress",permalink:"/docs/commands/vkpr_ingress"}},u=[{value:"VKPR infra up",id:"vkpr-infra-up",children:[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[]}]},{value:"VKPR infra start",id:"vkpr-infra-start",children:[{value:"Description",id:"description-1",children:[]},{value:"Commands",id:"commands-1",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Values File Parameters",id:"values-file-parameters",children:[]}]},{value:"VKPR infra down",id:"vkpr-infra-down",children:[{value:"Description",id:"description-2",children:[]},{value:"Commands",id:"commands-2",children:[]},{value:"Parameters",id:"parameters-1",children:[]}]}],c={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-infra"},"VKPR Infra"),(0,i.kt)("h2",{id:"vkpr-infra-up"},"VKPR infra up"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Create a k3d cluster using ",(0,i.kt)("a",{parentName:"p",href:"#vkpr-infra-start"},"VKPR infra start")," defaults."),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Non-Interactive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra up\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"vkpr-infra-start"},"VKPR infra start"),(0,i.kt)("h3",{id:"description-1"},"Description"),(0,i.kt)("p",null,"Create a k3d cluster to test the applications."),(0,i.kt)("h3",{id:"commands-1"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra start\n")),(0,i.kt)("p",null,"Non-interactive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra start --http_port=8000 \\\n                   --https_port=8001 \\\n                   --enable_traefik=false\n")),(0,i.kt)("p",null,"Non-interactive without setting values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra start --default\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  --http_port         Define HTTP port used by k3d.           Default: 8000\n  --https_port        Define HTTPS port used by k3d.          Default: 8001\n  --enable_traefik    Set traefik as the default ingress.     Default: false\n  --default           Set all values with default.\n")),(0,i.kt)("h3",{id:"values-file-parameters"},"Values File Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr-values.yaml"',title:'"vkpr-values.yaml"'},"global:\n  infra:\n    http_port:  <Number>\n    https_port: <Number>\n    traefik:\n      enabled:  <Boolean>\n    resources:\n      servers:  <Number>\n      agents:   <Number>\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"vkpr-infra-down"},"VKPR infra down"),(0,i.kt)("h3",{id:"description-2"},"Description"),(0,i.kt)("p",null,"Destroy the k3d cluster."),(0,i.kt)("h3",{id:"commands-2"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra down\n")),(0,i.kt)("p",null,"Non-interactive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra down --delete_registry=false\n")),(0,i.kt)("p",null,"Non-interactive without setting values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr infra down --default\n")),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  --delete_registry   Delete Registry and Mirror Registry.   Default: false\n  --default           Set all values with default.\n")))}d.isMDXComponent=!0}}]);
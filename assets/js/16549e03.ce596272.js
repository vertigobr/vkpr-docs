"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[7971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?l.createElement(k,r(r({ref:t},m),{},{components:n})):l.createElement(k,r({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,sidebar_label:"VKPR loki install",title:"VKPR loki install"},r="VKPR loki install",o={unversionedId:"commands/loki/install",id:"commands/loki/install",title:"VKPR loki install",description:"Description",source:"@site/docs/commands/loki/install.mdx",sourceDirName:"commands/loki",slug:"/commands/loki/install",permalink:"/docs/commands/loki/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/loki/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR loki install",title:"VKPR loki install"},sidebar:"tutorialSidebar",previous:{title:"VKPR metric-server remove",permalink:"/docs/commands/metric-server/remove"},next:{title:"VKPR loki remove",permalink:"/docs/commands/loki/remove"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"Values File",id:"values-file",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Environment values",id:"environment-values",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vkpr-loki-install"},"VKPR loki install"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Install Loki into cluster. For more information about Loki, click ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"here"),"."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"Interactive inputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr loki install [flags]\n")),(0,a.kt)("p",null,"Non-interactive without setting values or using ",(0,a.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr loki install --default\n")),(0,a.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,a.kt)("h3",{id:"flags"},"Flags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"  --default  Use to automatically fill inputs with default values\n  --dry_run  Simulate an install\n")),(0,a.kt)("h3",{id:"values-file"},"Values File"),(0,a.kt)("h4",{id:"globals"},"Globals"),(0,a.kt)("p",null,"The following arguments are supported by the globals:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domain")," - (Required) Define the domain used by the application. The default is ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,a.kt)("inlineCode",{parentName:"li"},"vkpr"),".")),(0,a.kt)("h4",{id:"local"},"Local"),(0,a.kt)("p",null,"The following arguments are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled")," - (Required unless using the ",(0,a.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),") Enable the auto install from the application"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,a.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"persistence")," - (Optional) Specifies if the content from the application will be storage in a volume. The default is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metrics")," - (Optional) Specifies if the application will expose your metrics. The default is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Optional) Used when you need to change some value or add a new value to the helm values used by the formula.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it when you know what you're doing")),(0,a.kt)("h3",{id:"environment-values"},"Environment values"),(0,a.kt)("p",null,"The following variables are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,a.kt)("strong",{parentName:"li"},"VKPR_ENV_LOKI_NAMESPACE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"persistence")," - ",(0,a.kt)("strong",{parentName:"li"},"VKPR_ENV_LOKI_PERSISTENCE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metrics")," - ",(0,a.kt)("strong",{parentName:"li"},"VKPR_ENV_LOKI_METRICS"))),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"About the Formula",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 2.8.7 ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Application Version"),": v2.6.1 ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,a.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/grafana/loki-stack"},"grafana/loki-stack")," ",(0,a.kt)("br",null))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/commands/loki/remove"},"VKPR loki remove")," - Uninstall loki from the cluster.")))}u.isMDXComponent=!0}}]);
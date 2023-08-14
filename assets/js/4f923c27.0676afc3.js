"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[3739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,v=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(v,o(o({ref:t},m),{},{components:n})):r.createElement(v,o({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_position:1,sidebar_label:"VKPR otel install",title:"VKPR otel install"},o="VKPR otel install",i={unversionedId:"commands/opentelemetry/install",id:"commands/opentelemetry/install",title:"VKPR otel install",description:"Description",source:"@site/docs/commands/opentelemetry/install.mdx",sourceDirName:"commands/opentelemetry",slug:"/commands/opentelemetry/install",permalink:"/docs/commands/opentelemetry/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/opentelemetry/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR otel install",title:"VKPR otel install"},sidebar:"tutorialSidebar",previous:{title:"VKPR Upgrade",permalink:"/docs/commands/upgrade"},next:{title:"VKPR otel remove",permalink:"/docs/commands/opentelemetry/remove"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"Values File",id:"values-file",level:3},{value:"Local",id:"local",level:4},{value:"Environment values",id:"environment-values",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vkpr-otel-install"},"VKPR otel install"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Install opentelemetry into cluster. For more information about opentelemetry, click ",(0,l.kt)("a",{parentName:"p",href:"https://grafana.com/oss/otel/"},"here"),"."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"Interactive inputs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr otel install [flags]\n")),(0,l.kt)("p",null,"Non-interactive without setting values or using ",(0,l.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr otel install --default\n")),(0,l.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"  --autoinstrumentation   Use to auto-instrument application traces\n  --dry_run   Simulate an install\n")),(0,l.kt)("h3",{id:"values-file"},"Values File"),(0,l.kt)("h4",{id:"local"},"Local"),(0,l.kt)("p",null,"The following arguments are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"vkpr"),".")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it when you know what you're doing")),(0,l.kt)("h3",{id:"environment-values"},"Environment values"),(0,l.kt)("p",null,"The following variables are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_otel_NAMESPACE"))),(0,l.kt)("hr",null),(0,l.kt)("admonition",{title:"About the Formula",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 0.24.0 ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Application Version"),": v0.70.0 ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/opentelemetry-helm/opentelemetry-operator"},"opentelemetry-helm/opentelemetry-operator")," ",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/commands/opentelemetry/remove"},"VKPR otel remove")," - Uninstall otel from the cluster.")))}c.isMDXComponent=!0}}]);
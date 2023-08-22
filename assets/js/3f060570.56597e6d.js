"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[5420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:1,sidebar_label:"VKPR tempo install",title:"VKPR tempo install"},r="VKPR tempo install",o={unversionedId:"commands/tempo/install",id:"commands/tempo/install",title:"VKPR tempo install",description:"Description",source:"@site/docs/commands/tempo/install.mdx",sourceDirName:"commands/tempo",slug:"/commands/tempo/install",permalink:"/docs/commands/tempo/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/tempo/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR tempo install",title:"VKPR tempo install"},sidebar:"tutorialSidebar",previous:{title:"VKPR Upgrade",permalink:"/docs/commands/upgrade"},next:{title:"VKPR tempo remove",permalink:"/docs/commands/tempo/remove"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Commands",id:"commands",level:2},{value:"Argument Reference",id:"argument-reference",level:2},{value:"Flags",id:"flags",level:3},{value:"Values File",id:"values-file",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Environment values",id:"environment-values",level:3},{value:"See Also",id:"see-also",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vkpr-tempo-install"},"VKPR tempo install"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Install tempo into cluster. For more information about tempo, click ",(0,l.kt)("a",{parentName:"p",href:"https://grafana.com/oss/tempo/"},"here"),"."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"Interactive inputs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr tempo install [flags]\n")),(0,l.kt)("p",null,"Non-interactive without setting values or using ",(0,l.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr tempo install --default\n")),(0,l.kt)("h2",{id:"argument-reference"},"Argument Reference"),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"  --default   Use to automatically fill inputs with default values\n  --dry_run   Simulate an install\n  --domain    Set the application address\n  --secure    Using HTTPS in the application\n  --ssl       Defines that the application will use its own certificate\n  --crt_file  Specifies the tempo .crt file path\n  --key_file  Specifies the tempo .key file path\n")),(0,l.kt)("h3",{id:"values-file"},"Values File"),(0,l.kt)("h4",{id:"globals"},"Globals"),(0,l.kt)("p",null,"The following arguments are supported by the globals:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"domain")," - (Required) Define the domain used by the application. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secure")," - (Required) Specifies if the services from the application will expose HTTPS ports inside the cluster. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingressClassname")," - (Optional) Define which ingress controller will expose the application. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"nginx"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"vkpr"),".")),(0,l.kt)("h4",{id:"local"},"Local"),(0,l.kt)("p",null,"The following arguments are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," - (Optional) Enables the installation if performed with the command ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - (Optional) Define where the application will be provisioned. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingressClassname")," - (Optional) Define which ingress controller will expose the application. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"nginx"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"persistence")," - (Optional) Specifies if the content from the application will be storage in a volume. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics")," - (Optional) Specifies if the application will expose your metrics. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssl"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," - (Optional) Enable the manual certificate into ingress. The default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"crt")," - Specify the certificate path."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," - Specify the key path."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secretName")," - (Optional) Specifies if the content from the application will be storage in a volume."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Optional) Used when you need to change some value or add a new value to the helm values used by the formula.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Using helmArgs the application may behave in a way that VKPR may not be used in the best way it was designed.\nUse it when you know what you're doing")),(0,l.kt)("h3",{id:"environment-values"},"Environment values"),(0,l.kt)("p",null,"The following variables are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_TEMPO_INGRESS_CLASS_NAME")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_TEMPO_NAMESPACE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"persistence")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_TEMPO_PERSISTENCE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_TEMPO_METRICS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssl"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_TEMPO_SSL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"crt")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_TEMPO_CERTIFICATE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_TEMPO_KEY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"secretName")," - ",(0,l.kt)("strong",{parentName:"li"},"VKPR_ENV_TEMPO_SSL_SECRET"))))),(0,l.kt)("hr",null),(0,l.kt)("admonition",{title:"About the Formula",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 1.5.0 ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Application Version"),": v2.2.0 ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/grafana/tempo"},"grafana/tempo")," ",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/commands/tempo/remove"},"VKPR tempo remove")," - Uninstall tempo from the cluster.")))}u.isMDXComponent=!0}}]);
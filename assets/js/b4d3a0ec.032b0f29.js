"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4490],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?n.createElement(g,a(a({ref:r},u),{},{components:t})):n.createElement(g,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5715:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const s={sidebar_position:1,sidebar_label:"Ingress",title:"Ingress",slug:"/category/ingress"},a="Ingress",i={unversionedId:"components-guide/ingress",id:"components-guide/ingress",title:"Ingress",description:"In order for users to access the internal applications of a K8S cluster, it is necessary to use Ingress. But for Ingress to work you will need an Ingress-Controller to manage all the load balancing.",source:"@site/docs/components-guide/ingress.mdx",sourceDirName:"components-guide",slug:"/category/ingress",permalink:"/docs/category/ingress",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/components-guide/ingress.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Ingress",title:"Ingress",slug:"/category/ingress"},sidebar:"tutorialSidebar",previous:{title:"Okteto",permalink:"/docs/provisioning/dev/cloud/okteto"},next:{title:"Observability",permalink:"/docs/category/observability"}},l={},c=[],u={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ingress"},"Ingress"),(0,o.kt)("p",null,"In order for users to access the internal applications of a K8S cluster, it is necessary to use Ingress. But for Ingress to work you will need an Ingress-Controller to manage all the load balancing."),(0,o.kt)("p",null,"VKPR offers two types of Ingress-Controllers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.consul.io/docs"},"Consul"),": Consul is a multi-network tool that solves the network and security challenges of operating microservices and cloud infrastructure. To see Consul commands, click ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/consul/install"},"here")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx"},"nGINX"),": Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer. To see nGINX commands, click ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/ingress/install"},"here")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.konghq.com/"},"Kong"),": API gateway built for hybrid and multi-cloud, optimized for microservices and distributed architectures. To see Kong commands, click ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/kong/install"},"here")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://doc.traefik.io/traefik/"},"Traefik"),": A modern HTTP reverse proxy and load balancer made to deploy microservices with ease. (Only in local Env) To see Traefik commands, click ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/infra/start"},"here"))))}p.isMDXComponent=!0}}]);
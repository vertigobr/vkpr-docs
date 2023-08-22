"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[6311],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1,sidebar_label:"Basics",title:"Basics",slug:"/basics"},a="VKPR Basics",l={unversionedId:"user-guide/user-guide",id:"user-guide/user-guide",title:"Basics",description:"Adopting Kubernetes is a challenging mission for companies of any size - it has a steep learning curve and skilled professionals are very hard to come by. Although managed kubernetes offerings from cloud vendors are a great step in a good direction, it is still hard to find the best way to provision and maintain them.",source:"@site/docs/user-guide/user-guide.md",sourceDirName:"user-guide",slug:"/basics",permalink:"/docs/basics",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/user-guide/user-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Basics",title:"Basics",slug:"/basics"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/intro"},next:{title:"Install",permalink:"/docs/install"}},s={},p=[{value:"What is VKPR",id:"what-is-vkpr",level:2},{value:"Developer workflow",id:"developer-workflow",level:2},{value:"Deployment workflow",id:"deployment-workflow",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-basics"},"VKPR Basics"),(0,o.kt)("p",null,"Adopting Kubernetes is a challenging mission for companies of any size - it has a steep learning curve and skilled professionals are very hard to come by. Although managed kubernetes offerings from cloud vendors are a great step in a good direction, it is still hard to find the best way to provision and maintain them."),(0,o.kt)("p",null,"Once provisioned, it is even harder to go from a barebones cluster to a production-ready one: what tools and settings do I need for monitoring, security, logging or backup? How can I automate their setup in a simple and repeatable way?"),(0,o.kt)("h2",{id:"what-is-vkpr"},"What is VKPR"),(0,o.kt)("p",null,"VKPR was developed to make Kubernetes easier to use. It is composed of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A very clean CLI with a simple syntax"),(0,o.kt)("li",{parentName:"ul"},"Automations and ready-to-use pipelines that make your life easier"),(0,o.kt)("li",{parentName:"ul"},"Third-party open-source components")),(0,o.kt)("p",null,"VKPR was organized in a way in can deliver both a production-ready Kubernetes with minimal effort as well as a quick local development environment that can be discarded easily."),(0,o.kt)("h2",{id:"developer-workflow"},"Developer workflow"),(0,o.kt)("p",null,"VKPR supports convenient workflows for a developer that must rely on kubernetes but wishes to avoid its complexity."),(0,o.kt)("p",null,"Things you can do with VKPR working as a local development tool:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provision local kubernetes clusters that can be discarded easily (using ",(0,o.kt)("inlineCode",{parentName:"li"},"k3d"),") ","\u2705"),(0,o.kt)("li",{parentName:"ul"},"Deploy VKPR components locally ","\u2705"),(0,o.kt)("li",{parentName:"ul"},"Run a local private Docker registry ",(0,o.kt)("em",{parentName:"li"},"and")," a local registry mirror (image pull cache for kubernetes) ","\u2705")),(0,o.kt)("p",null,"Things you can do with VKPR working as a remote development tool:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provision simple remote kubernetes clusters that can be discarded easily (using DigitalOcean as provider) ","\u274c"),(0,o.kt)("li",{parentName:"ul"},"Deploy VKPR components remotely ","\u274c")),(0,o.kt)("p",null,"..."),(0,o.kt)("h2",{id:"deployment-workflow"},"Deployment workflow"),(0,o.kt)("p",null,"VKPR supports convenient self-service workflows for provisioning and configuring production-ready kubernetes clusters. VKPR also enforces a GitOps workflow for provisioning automation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Provision AWS EKS kubernetes clusters from a declared definition (GitOps repos) ","\u2705")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Deploy VKPR components remotely ","\u2705")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Drop GitLab pipelines for a pull-reconcile approach for components (Argo or Flux) ","\u274c"))))}c.isMDXComponent=!0}}]);
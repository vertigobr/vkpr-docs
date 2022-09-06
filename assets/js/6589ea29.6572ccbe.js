"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[3079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,sidebar_label:"VKPR digitalocean cluster deploy",title:"VKPR digitalocean cluster deploy"},i="VKPR digitalocean cluster deploy",l={unversionedId:"commands/digitalocean/cluster/deploy",id:"commands/digitalocean/cluster/deploy",title:"VKPR digitalocean cluster deploy",description:"Description",source:"@site/docs/commands/digitalocean/cluster/deploy.mdx",sourceDirName:"commands/digitalocean/cluster",slug:"/commands/digitalocean/cluster/deploy",permalink:"/docs/commands/digitalocean/cluster/deploy",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/digitalocean/cluster/deploy.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR digitalocean cluster deploy",title:"VKPR digitalocean cluster deploy"},sidebar:"tutorialSidebar",previous:{title:"VKPR digitalocean cluster init",permalink:"/docs/commands/digitalocean/cluster/init"},next:{title:"VKPR digitalocean cluster kubeconfig",permalink:"/docs/commands/digitalocean/cluster/kubeconfig"}},c={},s=[{value:"Description",id:"description",level:3},{value:"Commands",id:"commands",level:3},{value:"See Also",id:"see-also",level:2}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-digitalocean-cluster-deploy"},"VKPR digitalocean cluster deploy"),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Deploy the configuration generated by the Gitops pipeline to Digitalocean."),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Non-interactive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr digitalocean cluster deploy [flags]\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/digitalocean/cluster/kubeconfig"},"VKPR digitalocean cluster kubeconfig")," - Download Kubeconfig to access the Cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/digitalocean/cluster/destroy"},"VKPR digitalocean cluster destroy")," - Execute the pipeline to destroy the Cluster.")))}p.isMDXComponent=!0}}]);
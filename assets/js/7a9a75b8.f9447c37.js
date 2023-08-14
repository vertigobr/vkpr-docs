"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[2413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,sidebar_label:"VKPR info dump",title:"VKPR info dump"},a="VKPR info dump",p={unversionedId:"commands/info/dump",id:"commands/info/dump",title:"VKPR info dump",description:"Description",source:"@site/docs/commands/info/dump.mdx",sourceDirName:"commands/info",slug:"/commands/info/dump",permalink:"/docs/commands/info/dump",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/info/dump.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR info dump",title:"VKPR info dump"},sidebar:"tutorialSidebar",previous:{title:"VKPR gitlab parameter add",permalink:"/docs/commands/gitlab/parameter/add"},next:{title:"VKPR infra up",permalink:"/docs/commands/infra/up"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Command",id:"command",level:2},{value:"How it work?",id:"how-it-work",level:2}],l={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-info-dump"},"VKPR info dump"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Retrieve the logs of the desired applications as well as the description of the resources created by the applications within the cluster:"),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("p",null,"Interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vkpr info dump\n\nFormula was successfully built!\n? Type the application name: kong\n? Path for the logs: /home/user/folder \n==============================\nVKPR Info Dump Routine\nApplication Name: kong\nApplication Path: /home/user/folder\nApplication Namespace: vkpr\n==============================\nStarting log extraction process...\n\n")),(0,o.kt)("h2",{id:"how-it-work"},"How it work?"),(0,o.kt)("p",null,"This command performs a series of state checks on the desired application and extracts its main information within the cluster.\nAfter extracting the files are stored in a folder and compressed into a single zip file  in the specified directory."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vkpr info dump")," is able to identify the namespace where the application is installed."))}d.isMDXComponent=!0}}]);
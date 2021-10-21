"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[6180],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5685:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:1},p="VKPR Apply",s={unversionedId:"commands/vkpr_apply",id:"commands/vkpr_apply",isDocsHomePage:!1,title:"VKPR Apply",description:"VKPR apply",source:"@site/docs/commands/vkpr_apply.mdx",sourceDirName:"commands",slug:"/commands/vkpr_apply",permalink:"/docs/commands/vkpr_apply",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/vkpr_apply.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Security |WIP|",permalink:"/docs/components-guide/security"},next:{title:"VKPR AWS",permalink:"/docs/commands/vkpr_aws"}},c=[{value:"VKPR apply",id:"vkpr-apply-1",children:[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Example Values",id:"example-values",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vkpr-apply"},"VKPR Apply"),(0,o.kt)("h2",{id:"vkpr-apply-1"},"VKPR apply"),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"VKPR apply is a simpler method of installing all the tools you want with VKPR. With a yaml file informing the values that the applications will use, it will run all the necessary formulas to create the scenario that was specified in the yaml file."),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Interactive inputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr apply\n")),(0,o.kt)("p",null,"Non-interactive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'  vkpr apply --pathtofile="/path/to/values"\n')),(0,o.kt)("h3",{id:"example-values"},"Example Values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr-values.yaml"',title:'"vkpr-values.yaml"'},"global:\n  domain:                   <String>\n  secure:                   <Boolean>\n  whoami:\n    enabled:                <Boolean>\n    ingressClassName:       <String>\n    resources:              <Object>\n    extraEnv:               <String>\n  ingress:\n    enabled:                <Boolean>\n  external-dns:\n    enabled:                <Boolean>\n    provider:               <String>\n    provider_token:         <String>\n    resources:              <Object>\n    extraEnv:               <String>\n  cert-manager:\n    enabled:                <Boolean>\n    email:                  <String>\n    issuer:                 <String>\n    provider:\n      digitalocean:\n        digitalocean_token: <String>\n  keycloak:\n    enabled:                <Boolean>\n    ingressClassName:       <String>\n    admin_user:             <String>\n    admin_password:         <String>\n    resources:              <Object>\n    extraEnv:               <String>\n  postgres:\n    enabled:                <Boolean>\n    admin_password:         <String>\n    resources:              <Object>\n    extraEnv:               <String>\n  grafana:\n    enabled:                <Boolean>\n    admin_password:         <String>\n    alertmanager:           <Boolean>\n  loki:\n    enabled:                <Boolean>\n")))}d.isMDXComponent=!0}}]);
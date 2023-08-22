"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[4408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),p=n,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3,sidebar_label:"Seguran\xe7a",title:"Seguran\xe7a",slug:"/category/security"},s="Seguran\xe7a",i={unversionedId:"components-guide/security",id:"components-guide/security",title:"Seguran\xe7a",description:"Atualmente as empresas costumam ter dados sens\xedveis que devem ser armazenados e controlados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/components-guide/security.mdx",sourceDirName:"components-guide",slug:"/category/security",permalink:"/pt/docs/category/security",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/components-guide/security.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Seguran\xe7a",title:"Seguran\xe7a",slug:"/category/security"},sidebar:"tutorialSidebar",previous:{title:"Observabilidade",permalink:"/pt/docs/category/observability"},next:{title:"Integra\xe7\xe3o",permalink:"/pt/docs/category/integrate"}},c={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seguran\xe7a"},"Seguran\xe7a"),(0,n.kt)("p",null,"Atualmente as empresas costumam ter dados sens\xedveis que devem ser armazenados e controlados."),(0,n.kt)("p",null,"O VKPR oferece certos tipos de seguran\xe7a, sendo elas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/"},"Cert-Manager"),": O cert-manager adiciona, renova e valida certificados e emissores de certificados como tipos de recursos em clusters Kubernetes. Para visualizar os comandos do cert-manager, clique ",(0,n.kt)("a",{parentName:"li",href:"/docs/commands/cert-manager/install/aws"},"aqui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns"},"External-DNS"),": ExternalDNS sincroniza os servi\xe7os e entradas expostos do Kubernetes com provedores de DNS. Para visualizar os comandos do External-DNS, clique ",(0,n.kt)("a",{parentName:"li",href:"/docs/commands/external-dns/install/aws"},"aqui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/keycloak/keycloak-documentation"},"Keycloak"),": Keycloak \xe9 uma solu\xe7\xe3o de gerenciamento de acesso e identidade. Para visualizar os comandos do Keycloak, clique ",(0,n.kt)("a",{parentName:"li",href:"/docs/commands/keycloak/install"},"aqui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vaultproject.io/docs"},"Vault"),": HashiCorp Vault \xe9 um sistema de gerenciamento de criptografia e segredos baseados em identidade. Um segredo \xe9 qualquer coisa que voc\xea deseja controlar rigidamente o acesso, como chaves de criptografia de API, senhas e certificados. Para visualizar os comandos do Vault, clique ",(0,n.kt)("a",{parentName:"li",href:"/docs/commands/vault/install"},"aqui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://external-secrets.io/v0.6.0-rc1/"},"External-secrets"),": O External Secrets Operator \xe9 um operador do Kubernetes que integra sistemas de gerenciamento de secrets externas, como AWS Secrets Manager, HashiCorp Vault, Google Secrets Manager, Azure Key Vault e muito mais. O operador l\xea informa\xe7\xf5es de APIs externas e injeta automaticamente os valores em uma secret do Kubernetes. Para visualizar os comandos do External Secrets, clique ",(0,n.kt)("a",{parentName:"li",href:"/docs/commands/external-secrets/install"},"aqui"))))}d.isMDXComponent=!0}}]);
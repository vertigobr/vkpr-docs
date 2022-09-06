"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[3124],{3905:(e,r,a)=>{a.d(r,{Zo:()=>l,kt:()=>m});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),d=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},l=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return a?t.createElement(f,o(o({ref:r},l),{},{components:a})):t.createElement(f,o({ref:r},l))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7883:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=a(7462),n=(a(7294),a(3905));const s={sidebar_position:2,sidebar_label:"VKPR aws rds snapshot",title:"VKPR aws rds snapshot"},o="VKPR aws rds snapshot",i={unversionedId:"commands/aws/rds/snapshot",id:"commands/aws/rds/snapshot",title:"VKPR aws rds snapshot",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/aws/rds/snapshot.mdx",sourceDirName:"commands/aws/rds",slug:"/commands/aws/rds/snapshot",permalink:"/pt/docs/commands/aws/rds/snapshot",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/aws/rds/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR aws rds snapshot",title:"VKPR aws rds snapshot"},sidebar:"tutorialSidebar",previous:{title:"VKPR aws rds init",permalink:"/pt/docs/commands/aws/rds/init"},next:{title:"VKPR aws rds destroy",permalink:"/pt/docs/commands/aws/rds/destroy"}},c={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Configurando credenciais do provedor",id:"configurando-credenciais-do-provedor",level:2},{value:"AWS",id:"aws",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],l={toc:d};function p(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vkpr-aws-rds-snapshot"},"VKPR aws rds snapshot"),(0,n.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Cria um snapshot do RDS."),(0,n.kt)("h2",{id:"comando"},"Comando"),(0,n.kt)("p",null,"Comando interativo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws rds snapshot [flags]\n")),(0,n.kt)("p",null,"Comando n\xe3o interativo ou utilizando o ",(0,n.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws rds snapshot --default\n")),(0,n.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,n.kt)("h3",{id:"flags"},"Flags"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"  --default         Use para preencher automaticamente as entradas com valores padr\xf5es\n  --instance_name   Espec\xedfica a inst\xe2ncia do RDS para criar o snapshot\n")),(0,n.kt)("h2",{id:"configurando-credenciais-do-provedor"},"Configurando credenciais do provedor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CUIDADO: A configura\xe7\xe3o manual de credenciais substituir\xe1 as credenciais j\xe1 salvas na mem\xf3ria")),(0,n.kt)("h3",{id:"aws"},"AWS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="aws" --fields="accesskeyid,secretaccesskey,region" --values="seu-accesskey,seu-secretaccess,seu-region"\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/commands/aws/rds/destroy"},"VKPR aws rds destroy")," - Destroi o RDS.")))}p.isMDXComponent=!0}}]);
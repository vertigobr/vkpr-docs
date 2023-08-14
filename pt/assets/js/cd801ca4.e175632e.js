"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[1114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2,sidebar_label:"VKPR aws eks tfc",title:"VKPR aws eks tfc"},s="VKPR aws eks tfc",i={unversionedId:"commands/aws/eks/tfc",id:"commands/aws/eks/tfc",title:"VKPR aws eks tfc",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/aws/eks/tfc.mdx",sourceDirName:"commands/aws/eks",slug:"/commands/aws/eks/tfc",permalink:"/pt/docs/commands/aws/eks/tfc",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/aws/eks/tfc.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VKPR aws eks tfc",title:"VKPR aws eks tfc"},sidebar:"tutorialSidebar",previous:{title:"VKPR aws eks init",permalink:"/pt/docs/commands/aws/eks/init"},next:{title:"VKPR aws eks deploy",permalink:"/pt/docs/commands/aws/eks/deploy"}},l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Configurando credenciais do provedor",id:"configurando-credenciais-do-provedor",level:2},{value:"Gitlab",id:"gitlab",level:3},{value:"Terraform Cloud",id:"terraform-cloud",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vkpr-aws-eks-tfc"},"VKPR aws eks tfc"),(0,n.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Faz Fork e configura o ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/vkpr/aws-eks"},"GitOps Repo")," no seu Gitlab, usando o Terraform Cloud para salvar o estado do Terraform."),(0,n.kt)("h2",{id:"comando"},"Comando"),(0,n.kt)("p",null,"Comando interativo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws eks tfc [flags]\n")),(0,n.kt)("p",null,"Comando n\xe3o interativo ou utilizando o ",(0,n.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr aws eks tfc --default\n")),(0,n.kt)("h2",{id:"configurando-credenciais-do-provedor"},"Configurando credenciais do provedor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CUIDADO: A configura\xe7\xe3o manual de credenciais substituir\xe1 as credenciais j\xe1 salvas na mem\xf3ria")),(0,n.kt)("h3",{id:"gitlab"},"Gitlab"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="gitlab" --fields="token,username" --values="seu-token,seu-username"\n')),(0,n.kt)("h3",{id:"terraform-cloud"},"Terraform Cloud"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="terraformcloud" --fields="token" --values="seu-token"\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/commands/aws/eks/deploy"},"VKPR aws eks deploy")," - Executa pipeline para provisionamento da infraestrutura criada pela pipeline do cluster EKS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/commands/aws/eks/destroy"},"VKPR aws eks destroy")," - Destrua o cluster EKS provisionada pela pipeline.")))}p.isMDXComponent=!0}}]);
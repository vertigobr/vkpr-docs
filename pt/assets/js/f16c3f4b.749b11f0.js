"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[7141],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?t.createElement(v,o(o({ref:a},c),{},{components:n})):t.createElement(v,o({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7940:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,sidebar_label:"VKPR external-dns install aws",title:"VKPR external-dns install aws"},o="VKPR external-dns install aws",i={unversionedId:"commands/external-dns/install/aws",id:"commands/external-dns/install/aws",title:"VKPR external-dns install aws",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/external-dns/install/aws.mdx",sourceDirName:"commands/external-dns/install",slug:"/commands/external-dns/install/aws",permalink:"/pt/docs/commands/external-dns/install/aws",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/external-dns/install/aws.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR external-dns install aws",title:"VKPR external-dns install aws"},sidebar:"tutorialSidebar",previous:{title:"VKPR digitalocean cluster destroy",permalink:"/pt/docs/commands/digitalocean/cluster/destroy"},next:{title:"VKPR external-dns install digitalocean",permalink:"/pt/docs/commands/external-dns/install/digitalocean"}},s={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Arquivo de configura\xe7\xe3o",id:"arquivo-de-configura\xe7\xe3o",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Valores Env",id:"valores-env",level:3},{value:"Configurando credenciais do provedor",id:"configurando-credenciais-do-provedor",level:2},{value:"AWS",id:"aws",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],c={toc:d};function p(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vkpr-external-dns-install-aws"},"VKPR external-dns install aws"),(0,r.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,r.kt)("p",null,"Instala o external-dns para AWS no cluster. Para mais informa\xe7\xf5es sobre o external-dns, clique ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/external-dns"},"aqui"),"."),(0,r.kt)("h2",{id:"comando"},"Comando"),(0,r.kt)("p",null,"Comando interativo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr external-dns install aws [flags]\n")),(0,r.kt)("p",null,"Comando n\xe3o interativo ou utilizando o ",(0,r.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr external-dns install aws --default\n")),(0,r.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  --default   Use para preencher automaticamente as entradas com valores padr\xf5es\n  --dry_run   Simula uma instala\xe7\xe3o\n  --domain    Espec\xedfica o dom\xednio do record no servidor DNS\n")),(0,r.kt)("h3",{id:"arquivo-de-configura\xe7\xe3o"},"Arquivo de configura\xe7\xe3o"),(0,r.kt)("h4",{id:"globals"},"Globals"),(0,r.kt)("p",null,"Os seguintes valores s\xe3o suportados pelo globals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domain")," - (Obrigat\xf3rio) Define o dom\xednio usado para delimitar o filtro no servidor DNS. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr"),".")),(0,r.kt)("h4",{id:"local"},"Local"),(0,r.kt)("p",null,"The following arguments are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Habilita a instala\xe7\xe3o se realizada com o comando ",(0,r.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")," - (Opcional) Define que a aplica\xe7\xe3o ir\xe1 expor as suas m\xe9tricas. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Opcional) Op\xe7\xe3o utilizada para definir valores pr\xf3prios do chart n\xe3o suportados pelo comando.")),(0,r.kt)("admonition",{title:"Cuidado",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Utilizar o helmArgs pode fazer com que a aplica\xe7\xe3o n\xe3o se comporte como esperado ou ter valores sobrescritos definidos pelo VKPR.\nUse-o quando souber o que est\xe1 fazendo!")),(0,r.kt)("h3",{id:"valores-env"},"Valores Env"),(0,r.kt)("p",null,"As seguintes vari\xe1veis s\xe3o suportadas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_EXTERNAL_DNS_NAMESPACE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_EXTERNAL_DNS_METRICS"))),(0,r.kt)("h2",{id:"configurando-credenciais-do-provedor"},"Configurando credenciais do provedor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CUIDADO: A configura\xe7\xe3o manual de credenciais substituir\xe1 as credenciais j\xe1 salvas na mem\xf3ria")),(0,r.kt)("h3",{id:"aws"},"AWS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="aws" --fields="accesskeyid,secretaccesskey,region" --values="seu-accesskey,seu-secretaccess,seu-region"\n')),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Sobre o comando",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Vers\xe3o do Chart"),": 1.10.1 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Vers\xe3o da aplica\xe7\xe3o"),": v0.12.0 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/external-dns/external-dns"},"external-dns/external-dns")," ",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/commands/external-dns/remove"},"VKPR external-dns remove")," - Desinstala o external-dns do cluster.")))}p.isMDXComponent=!0}}]);
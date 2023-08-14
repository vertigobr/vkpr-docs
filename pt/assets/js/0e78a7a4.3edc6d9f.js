"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[1278],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?n.createElement(k,l(l({ref:a},m),{},{components:t})):n.createElement(k,l({ref:a},m))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7514:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1,sidebar_label:"VKPR whoami install",title:"VKPR whoami install"},l="VKPR whoami install",r={unversionedId:"commands/whoami/install",id:"commands/whoami/install",title:"VKPR whoami install",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/whoami/install.mdx",sourceDirName:"commands/whoami",slug:"/commands/whoami/install",permalink:"/pt/docs/commands/whoami/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/whoami/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR whoami install",title:"VKPR whoami install"},sidebar:"tutorialSidebar",previous:{title:"VKPR vault create external-secret",permalink:"/pt/docs/commands/vault/create-external-secret"},next:{title:"VKPR whoami remove",permalink:"/pt/docs/commands/whoami/remove"}},s={},p=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Arquivo de configura\xe7\xe3o",id:"arquivo-de-configura\xe7\xe3o",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Valores Env",id:"valores-env",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],m={toc:p};function c(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-whoami-install"},"VKPR whoami install"),(0,i.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,i.kt)("p",null,"Instala o Whoami no cluster. Para mais informa\xe7\xf5es sobre o Whoami, clique ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/traefik/whoami"},"aqui"),"."),(0,i.kt)("h2",{id:"comando"},"Comando"),(0,i.kt)("p",null,"Comando interativo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr whoami install [flags]\n")),(0,i.kt)("p",null,"Comando n\xe3o interativo ou utilizando o ",(0,i.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr whoami install --default\n")),(0,i.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,i.kt)("h3",{id:"flags"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  --default   Use para preencher automaticamente as entradas com valores padr\xf5es\n  --dry_run   Simula uma instala\xe7\xe3o\n  --domain    Define o endere\xe7o da aplica\xe7\xe3o\n  --secure    Utilizar HTTPS na aplica\xe7\xe3o\n  --ssl       Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio\n  --crt_file  Espec\xedfica o caminho do .crt do whoami\n  --key_file  Espec\xedfica o caminho do .key do whoami\n")),(0,i.kt)("h3",{id:"arquivo-de-configura\xe7\xe3o"},"Arquivo de configura\xe7\xe3o"),(0,i.kt)("h4",{id:"globals"},"Globals"),(0,i.kt)("p",null,"Os seguintes valores s\xe3o suportados pelo globals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domain")," - (Obrigat\xf3rio) Define o endere\xe7o da aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secure")," - (Obrigat\xf3rio) Define que a aplica\xe7\xe3o ser\xe1 acessada externamente por HTTPS. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - (Opcional) Define qual o ingressController que ser\xe1 utilizado para expor a aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx"),".")),(0,i.kt)("h4",{id:"local"},"Local"),(0,i.kt)("p",null,"Os seguintes valores s\xe3o suportados:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Habilita a instala\xe7\xe3o se realizada com o comando ",(0,i.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - (Opcional) Define qual o ingressController que ser\xe1 utilizado para expor a aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crt")," - Espec\xedfica o caminho do certificado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - Espec\xedfica o caminho do chave."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," - (Opcional) Espec\xedfica uma secret TLS a qual conter\xe1 os valores do crt e key descritos."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Opcional) Op\xe7\xe3o utilizada para definir valores pr\xf3prios do chart n\xe3o suportados pelo comando.")),(0,i.kt)("admonition",{title:"Cuidado",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Utilizar o helmArgs pode fazer com que a aplica\xe7\xe3o n\xe3o se comporte como esperado ou ter valores sobrescritos definidos pelo VKPR.\nUse-o quando souber o que est\xe1 fazendo!")),(0,i.kt)("h3",{id:"valores-env"},"Valores Env"),(0,i.kt)("p",null,"As seguintes vari\xe1veis s\xe3o suportadas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_WHOAMI_NAMESPACE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_WHOAMI_INGRESS_CLASS_NAME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_WHOAMI_SSL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crt")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_WHOAMI_CERTIFICATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_WHOAMI_KEY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_WHOAMI_SSL_SECRET"))))),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"Sobre o comando",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Vers\xe3o do Chart"),": 2.5.0 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Vers\xe3o da aplica\xe7\xe3o"),": v1.5.0 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/cowboysysop/whoami"},"cowboysysop/whoami")," ",(0,i.kt)("br",null))),(0,i.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/whoami/remove"},"VKPR whoami remove")," - Desinstala o whoami do cluster.")))}c.isMDXComponent=!0}}]);
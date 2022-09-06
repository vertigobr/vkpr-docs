"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[6220],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?t.createElement(k,l(l({ref:a},c),{},{components:n})):t.createElement(k,l({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2266:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,sidebar_label:"VKPR ingress install",title:"VKPR ingress install"},l="VKPR ingress install",o={unversionedId:"commands/ingress/install",id:"commands/ingress/install",title:"VKPR ingress install",description:"Description",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/ingress/install.mdx",sourceDirName:"commands/ingress",slug:"/commands/ingress/install",permalink:"/pt/docs/commands/ingress/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/ingress/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR ingress install",title:"VKPR ingress install"},sidebar:"tutorialSidebar",previous:{title:"VKPR infra stop",permalink:"/pt/docs/commands/infra/stop"},next:{title:"VKPR ingress remove",permalink:"/pt/docs/commands/ingress/remove"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Arquivo de configura\xe7\xe3o",id:"arquivo-de-configura\xe7\xe3o",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Valores Env",id:"valores-env",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],c={toc:p};function m(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vkpr-ingress-install"},"VKPR ingress install"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Instala o nGINX IngressController no cluster. Para mais informa\xe7\xf5es sobre o nGINX IngressController, clique ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"aqui"),"."),(0,r.kt)("h2",{id:"comando"},"Comando"),(0,r.kt)("p",null,"Comando interativo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr ingress install [flags]\n")),(0,r.kt)("p",null,"Comando n\xe3o interativo ou utilizando o ",(0,r.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr ingress install --default\n")),(0,r.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  --default   Use para preencher automaticamente as entradas com valores padr\xf5es\n  --dry_run   Simula uma instala\xe7\xe3o\n  --ssl       Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio\n  --crt_file  Espec\xedfica o caminho do .crt do nginx\n  --key_file  Espec\xedfica o caminho do .key do nginx\n")),(0,r.kt)("h3",{id:"arquivo-de-configura\xe7\xe3o"},"Arquivo de configura\xe7\xe3o"),(0,r.kt)("h4",{id:"globals"},"Globals"),(0,r.kt)("p",null,"Os seguintes valores s\xe3o suportados pelo globals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr"),".")),(0,r.kt)("h4",{id:"local"},"Local"),(0,r.kt)("p",null,"Os seguintes valores s\xe3o suportados:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Habilita a instala\xe7\xe3o se realizada com o comando ",(0,r.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")," - (Opcional) Define que a aplica\xe7\xe3o ir\xe1 expor as suas m\xe9tricas. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Define que a aplica\xe7\xe3o utilizar\xe1 certificado interno para expor as aplica\xe7\xf5es que passarem por seu ingressController. O valor padr\xe3o \xe9 ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crt")," - Espec\xedfica o caminho do certificado."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - Espec\xedfica o caminho do chave."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secretName")," - (Opcional) Espec\xedfica uma secret TLS a qual conter\xe1 os valores do crt e key descritos."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Opcional) Op\xe7\xe3o utilizada para definir valores pr\xf3prios do chart n\xe3o suportados pelo comando.")),(0,r.kt)("admonition",{title:"Cuidado",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Utilizar o helmArgs pode fazer com que a aplica\xe7\xe3o n\xe3o se comporte como esperado ou ter valores sobrescritos definidos pelo VKPR.\nUse-o quando souber o que est\xe1 fazendo!")),(0,r.kt)("h3",{id:"valores-env"},"Valores Env"),(0,r.kt)("p",null,"As seguintes vari\xe1veis s\xe3o suportadas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_INGRESS_NAMESPACE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_INGRESS_METRICS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_INGRESS_SSL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crt")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_INGRESS_CERTIFICATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_INGRESS_KEY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secretName")," - ",(0,r.kt)("strong",{parentName:"li"},"VKPR_ENV_INGRESS_SSL_SECRET"))))),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Sobre o comando",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Vers\xe3o do Chart"),": 4.0.13 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Vers\xe3o da aplica\xe7\xe3o"),": v1.1.0 ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/ingress-nginx/ingress-nginx"},"helm/nginx-ingress")," ",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/commands/ingress/remove"},"VKPR ingress remove")," - Desinstala o ingress do cluster.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[9155],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return t?n.createElement(k,r(r({ref:a},m),{},{components:t})):n.createElement(k,r({ref:a},m))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},712:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const l={sidebar_position:1,sidebar_label:"VKPR prometheus-stack install",title:"VKPR prometheus-stack install"},r="VKPR prometheus-stack install",o={unversionedId:"commands/prometheus-stack/install",id:"commands/prometheus-stack/install",title:"VKPR prometheus-stack install",description:"Descri\xe7\xe3o",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/commands/prometheus-stack/install.mdx",sourceDirName:"commands/prometheus-stack",slug:"/commands/prometheus-stack/install",permalink:"/pt/docs/commands/prometheus-stack/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/commands/prometheus-stack/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"VKPR prometheus-stack install",title:"VKPR prometheus-stack install"},sidebar:"tutorialSidebar",previous:{title:"VKPR postgresql remove",permalink:"/pt/docs/commands/postgresql/remove"},next:{title:"VKPR prometheus-stack import",permalink:"/pt/docs/commands/prometheus-stack/import"}},p={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Comando",id:"comando",level:2},{value:"Refer\xeancia de valores",id:"refer\xeancia-de-valores",level:2},{value:"Flags",id:"flags",level:3},{value:"Arquivo de configura\xe7\xe3o",id:"arquivo-de-configura\xe7\xe3o",level:3},{value:"Globals",id:"globals",level:4},{value:"Local",id:"local",level:4},{value:"Valores Env",id:"valores-env",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],m={toc:s};function c(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-prometheus-stack-install"},"VKPR prometheus-stack install"),(0,i.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,i.kt)("p",null,"Instala o prometheus-stack no cluster. Para mais informa\xe7\xf5es sobre o prometheus-stack, clique ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"aqui"),"."),(0,i.kt)("p",null,"Kube-prometheus-stack \xe9 um pacote de aplica\xe7\xf5es de monitoramento, contendo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Alert-Manager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/"},"Grafana")),(0,i.kt)("li",{parentName:"ul"},"Kubernetes Exporters")),(0,i.kt)("p",null,"Esta f\xf3rmula tamb\xe9m instala o Loki junto ao prometheus-stack unificando metricas e logs em uma unica stack. Para mais informa\xe7\xf5es sobre o Loki clique ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands/loki/install"},"aqui"),"."),(0,i.kt)("admonition",{title:"Info",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Se o VKPR n\xe3o encontrar nenhum instancia do Loki dentro do cluster, ele ir\xe1 ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands/loki/install"},"instalar")," um para utilizar juntamente com o prometheus-stack.")),(0,i.kt)("h2",{id:"comando"},"Comando"),(0,i.kt)("p",null,"Comando interativo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr prometheus-stack install [flags]\n")),(0,i.kt)("p",null,"Comando n\xe3o interativo ou utilizando o ",(0,i.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr prometheus-stack install --default\n")),(0,i.kt)("h2",{id:"refer\xeancia-de-valores"},"Refer\xeancia de valores"),(0,i.kt)("h3",{id:"flags"},"Flags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  --default           Use para preencher automaticamente as entradas com valores padr\xf5es\n  --dry_run           Simula uma instala\xe7\xe3o\n  --domain            Define o endere\xe7o da aplica\xe7\xe3o\n  --secure            Utilizar HTTPS na aplica\xe7\xe3o\n  --alertmanager      Habilita o Alert-manager para ser exposto pelo ingressController\n  --HA                Define que aplica\xe7\xe3o do alertManager ter\xe1 HA\n  --grafana_password  Espec\xedfica a senha do admin do Grafana\n  --ssl               Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio\n  --crt_file          Espec\xedfica o caminho do .crt do grafana\n  --key_file          Espec\xedfica o caminho do .key do grafana\n")),(0,i.kt)("h3",{id:"arquivo-de-configura\xe7\xe3o"},"Arquivo de configura\xe7\xe3o"),(0,i.kt)("h4",{id:"globals"},"Globals"),(0,i.kt)("p",null,"Os seguintes valores s\xe3o suportados pelo globals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domain")," - (Obrigat\xf3rio) Define o endere\xe7o da aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secure")," - (Obrigat\xf3rio) Define que a aplica\xe7\xe3o ser\xe1 acessada externamente por HTTPS. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - (Opcional) Define qual o ingressController que ser\xe1 utilizado para expor a aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx"),".")),(0,i.kt)("h4",{id:"local"},"Local"),(0,i.kt)("p",null,"Os seguintes valores s\xe3o suportados:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Habilita a instala\xe7\xe3o se realizada com o comando ",(0,i.kt)("a",{parentName:"li",href:"/docs/commands/apply"},"vkpr apply"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," - (Opcional) Define o namespace o qual a aplica\xe7\xe3o ser\xe1 instalada. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"vkpr"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - (Opcional) Define qual o ingressController que ser\xe1 utilizado para expor a aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8sExporters")," - (Opcional) Habilita coleta de m\xe9tricas do Kubernetes. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alertManager"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Obrigat\xf3rio) Disponibiliza Endpoint para acesso da aplica\xe7\xe3o. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HA")," - (Opcional) Define que a aplica\xe7\xe3o ser\xe1 instalada em HA. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistence"),"  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Optional) Specifies if the content from the application will be storage in a volume. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," - (Optional) Specifies the volume size to be provisioned. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"2Gi"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crt")," - Espec\xedfica o caminho do certificado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - Espec\xedfica o caminho do chave."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," - (Opcional) Espec\xedfica uma secret TLS a qual conter\xe1 os valores do crt e key descritos."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grafana"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"adminPassword")," - (Obrigat\xf3rio) Espec\xedfica a senha do admin do Grafana. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"vkpr123"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistence"),"  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Especifica se o conte\xfado do aplicativo ser\xe1 armazenado em um volume. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," - (Opcional) Especifica o tamanho do volume a ser provisionado. O padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"8Gi"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crt")," - Espec\xedfica o caminho do certificado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - Espec\xedfica o caminho do chave."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," - (Opcional) Espec\xedfica uma secret TLS a qual conter\xe1 os valores do crt e key descritos."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prometheus"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Obrigat\xf3rio) Disponibiliza Endpoint para acesso da aplica\xe7\xe3o. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistence"),"  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Especifica se o conte\xfado do aplicativo ser\xe1 armazenado em um volume. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," - (Opcional) Especifica o tamanho do volume a ser provisionado. O padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"8Gi"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - (Opcional) Define que a aplica\xe7\xe3o utilizar\xe1 certificado pr\xf3prio. O valor padr\xe3o \xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crt")," - Espec\xedfica o caminho do certificado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - Espec\xedfica o caminho do chave."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," - (Opcional) Espec\xedfica uma secret TLS a qual conter\xe1 os valores do crt e key descritos."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"helmArgs")," - (Opcional) Op\xe7\xe3o utilizada para definir valores pr\xf3prios do chart n\xe3o suportados pelo comando.")),(0,i.kt)("admonition",{title:"Cuidado",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Utilizar o helmArgs pode fazer com que a aplica\xe7\xe3o n\xe3o se comporte como esperado ou ter valores sobrescritos definidos pelo VKPR.\nUse-o quando souber o que est\xe1 fazendo!")),(0,i.kt)("h3",{id:"valores-env"},"Valores Env"),(0,i.kt)("p",null,"As seguintes vari\xe1veis s\xe3o suportadas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressClassName")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS_STACK_INGRESS_CLASS_NAME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS_STACK_NAMESPACE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k8sExporters")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS_STACK_EXPORTERS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alertManager"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_ALERTMANAGER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HA")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_ALERTMANAGER_HA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_ALERTMANAGER_SSL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crt")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_ALERTMANAGER_CERTIFICATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_ALERTMANAGER_KEY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_ALERTMANAGER_SSL_SECRET")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grafana"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"adminPassword")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_GRAFANA_PASSWORD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistence")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_GRAFANA_PERSISTENCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_GRAFANA_SSL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crt")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_GRAFANA_CERTIFICATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_GRAFANA_KEY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_GRAFANA_SSL_SECRET")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prometheus"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"persistence")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS_PERSISTENCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssl"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS_SSL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crt")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS_CERTIFICATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS_KEY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretName")," - ",(0,i.kt)("strong",{parentName:"li"},"VKPR_ENV_PROMETHEUS_SSL_SECRET"))))))),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"Sobre o comando",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Vers\xe3o do Chart"),": 35.3.0 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Vers\xe3o da aplica\xe7\xe3o"),": v0.56.2 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack"},"prometheus-community/kube-prometheus-stack")," ",(0,i.kt)("br",null))),(0,i.kt)("h2",{id:"veja-tamb\xe9m"},"Veja tamb\xe9m"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/prometheus-stack/remove"},"VKPR prometheus-stack remove")," - Desinstala o prometheus-stack do cluster.")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[9636],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>d});var t=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||n;return a?t.createElement(f,i(i({ref:r},u),{},{components:a})):t.createElement(f,i({ref:r},u))}));function d(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},844:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var t=a(7462),o=(a(7294),a(3905));const n={sidebar_position:2,sidebar_label:"Observabilidade",title:"Observabilidade",slug:"/category/observability"},i="Monitoramento e Registro",s={unversionedId:"components-guide/monitoring",id:"components-guide/monitoring",title:"Observabilidade",description:"Ao dimensionar e aprimorar aplicativos com o K8S, \xe9 necess\xe1rio em algum momento verificar se as aplica\xe7\xf5es est\xe3o funcionando conforme o esperado. Ao monitorar suas aplica\xe7\xf5es, voc\xea pode ver que sua infraestrutura est\xe1 subutilizando recursos que poderiam ser salvos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/components-guide/monitoring.mdx",sourceDirName:"components-guide",slug:"/category/observability",permalink:"/pt/docs/category/observability",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/components-guide/monitoring.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Observabilidade",title:"Observabilidade",slug:"/category/observability"},sidebar:"tutorialSidebar",previous:{title:"Ingress",permalink:"/pt/docs/category/ingress"},next:{title:"Seguran\xe7a",permalink:"/pt/docs/category/security"}},c={},l=[],u={toc:l};function p(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoramento-e-registro"},"Monitoramento e Registro"),(0,o.kt)("p",null,"Ao dimensionar e aprimorar aplicativos com o K8S, \xe9 necess\xe1rio em algum momento verificar se as aplica\xe7\xf5es est\xe3o funcionando conforme o esperado. Ao monitorar suas aplica\xe7\xf5es, voc\xea pode ver que sua infraestrutura est\xe1 subutilizando recursos que poderiam ser salvos."),(0,o.kt)("p",null,"O VKPR disponibiliza a integra\xe7\xe3o de determinadas ferramentas de monitoramento para uso em seu cluster, sendo elas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/grafana/"},"Grafana"),": Dashboard para visualizar todos os dados das suas aplica\xe7\xf5es. Para visualizar os comandos do Grafana, clique ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/prometheus-stack/install"},"aqui")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/oss/loki/"},"Loki"),": Usado para monitorar logs das aplica\xe7\xf5es. Para visualizar os comandos do Loki, clique ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/loki/install"},"aqui")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jaegertracing/documentation"},"Jaeger"),": Usado para monitorar e solucionar problemas de sistemas distribu\xeddos baseados em microsservi\xe7os. Para visualizar os comandos do Jaeger, clique ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/jaeger/install"},"aqui")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus"),": Usado para monitorar e alertar aplica\xe7\xf5es. Para visualizar os comandos do Prometheus, clique ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/prometheus-stack/install"},"aqui"))))}p.isMDXComponent=!0}}]);
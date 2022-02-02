"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[2066],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,v=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(v,l(l({ref:n},d),{},{components:t})):r.createElement(v,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4889:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],s={sidebar_position:1,version:"v1.0.20"},o="VKPR external-dns install",c={unversionedId:"commands/external-dns/vkpr_external-dns_install",id:"commands/external-dns/vkpr_external-dns_install",isDocsHomePage:!1,title:"VKPR external-dns install",description:"Description",source:"@site/docs/commands/external-dns/vkpr_external-dns_install.mdx",sourceDirName:"commands/external-dns",slug:"/commands/external-dns/vkpr_external-dns_install",permalink:"/pt/docs/commands/external-dns/vkpr_external-dns_install",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/commands/external-dns/vkpr_external-dns_install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,version:"v1.0.20"},sidebar:"tutorialSidebar",previous:{title:"VKPR Create Formula",permalink:"/pt/docs/commands/vkpr_create"},next:{title:"VKPR external-dns remove",permalink:"/pt/docs/commands/external-dns/vkpr_external-dns_remove"}},d=[{value:"Description",id:"description",children:[]},{value:"Commands",id:"commands",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Setting Provider credentials manually",id:"setting-provider-credentials-manually",children:[]},{value:"Values File Parameters",id:"values-file-parameters",children:[]},{value:"See Also",id:"see-also",children:[]}]}],p={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vkpr-external-dns-install"},"VKPR external-dns install"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Install external-dns into cluster. For more information about external-dns, click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/external-dns"},"here"),"."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Interactive inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr external-dns install [flags]\n")),(0,i.kt)("p",null,"Non-interactive without setting values or using ",(0,i.kt)("inlineCode",{parentName:"p"},"VKPR Values"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  vkpr external-dns install --default\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},'  --default       Set all values with default.\n  --provider      Define the provider of external-dns. Default: "aws" Allowed values: "aws", "digitalocean", "powerDNS"\n    --aws_access_key          Specifies the AWS Access Key Credential.\n    --aws_secret_key          Specifies the AWS Secret Key Credential.\n    --aws_region              Specifies the AWS Region to set the env.\n    --do_token                Specifies the Digital Ocean API Token.\n    --pdns_apikey             Specifies the PowerDNS API Key.\n    --pdns_apiurl             Specifies the PowerDNS server URL Endpoint.\n')),(0,i.kt)("h3",{id:"setting-provider-credentials-manually"},"Setting Provider credentials manually"),(0,i.kt)("h4",{id:"aws"},"AWS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="aws" --fields="accesskeyid,secretaccesskey,region" --values="your-accesskey,your-secretaccess,your-region"\n')),(0,i.kt)("h4",{id:"digital-ocean"},"Digital Ocean"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider="digitalocean" --fields="token" --values="your-api-token"\n')),(0,i.kt)("h4",{id:"powerdns"},"PowerDNS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  rit set credential --provider=\'powerdns\' --fields="apikey" --values="your-key"\n')),(0,i.kt)("h3",{id:"values-file-parameters"},"Values File Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="vkpr.yaml"',title:'"vkpr.yaml"'},"global:\n  external-dns:\n    provider:   <String>\n    metrics:    <Boolean>\n    powerDNS:\n      apiUrl:   <String>\n    helmArgs:   <Object>\n")),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About the Formula")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Chart Version"),": 5.4.9 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Application Version"),": v0.10.0 ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Helm Chart"),": ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/bitnami/external-dns"},"bitnami/external-dns")," ",(0,i.kt)("br",null)))),(0,i.kt)("h3",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/commands/external-dns/vkpr_external-dns_remove"},"VKPR external-dns remove")," - Uninstall external-dns from the cluster.")))}u.isMDXComponent=!0}}]);
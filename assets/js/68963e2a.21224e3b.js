"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[3984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"DigitalOcean",title:"DigitalOcean",slug:"/cloud-dev/digitalocean"},a=void 0,l={unversionedId:"provisioning-guide/cloud-dev/digitalocean",id:"provisioning-guide/cloud-dev/digitalocean",title:"DigitalOcean",description:"Provisioning with DigitalOcean",source:"@site/docs/provisioning-guide/cloud-dev/digitalocean.md",sourceDirName:"provisioning-guide/cloud-dev",slug:"/cloud-dev/digitalocean",permalink:"/docs/cloud-dev/digitalocean",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/provisioning-guide/cloud-dev/digitalocean.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"DigitalOcean",title:"DigitalOcean",slug:"/cloud-dev/digitalocean"},sidebar:"tutorialSidebar",previous:{title:"AWS EKS",permalink:"/docs/provisioning/dev/cloud/aws"},next:{title:"Okteto",permalink:"/docs/provisioning/dev/cloud/okteto"}},s={},c=[{value:"Provisioning with DigitalOcean",id:"provisioning-with-digitalocean",level:2},{value:"Starting the deployment",id:"starting-the-deployment",level:3},{value:"Dropping the cluster",id:"dropping-the-cluster",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"provisioning-with-digitalocean"},"Provisioning with DigitalOcean"),(0,o.kt)("p",null,"Another advantage that VKPR offers is the possibility of provisioning, similarly to AWS EKS, using DigitalOcean as a cloud provider, we can execute the command that will be responsible for creating a fork of our repository with all the necessary dependencies for the provisioning, a branch containing the name of our cluster will be created containing the information requested in the execution of the command responsible for provisioning."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fork VKPR repo",src:n(4770).Z,width:"1895",height:"946"})),(0,o.kt)("p",null,"First we need to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"vkpr digitalocean cluster init")," formula responsible for initializing the cluster with name, number of desired nodes, Kubernetes version, instance type, among other information questioned in the formula decision tree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ vkpr digitalocean cluster init\n\n? Project location: user\n? Type the Cluster name: do-sample\n? Choose the K8s version: 1.22\n? Choose the K8s region: nyc1\n? Choose nodes instance type: s-2vcpu-2gb\n? Desired number of nodes: 2\n\n")),(0,o.kt)("p",null,"After the execution, we will be able to view the series of information regarding cloning, as well as the creation of a fork of the VKPR git repository, where all the terraform templates that will be executed to provision the infrastructure are stored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"...\nSwitched to a new branch 'do-sample'\n[do-sample 7b0dae9] [VKPR] Initial configuration defaults.yml\n 1 file changed, 2 insertions(+), 2 deletions(-)\nEnumerating objects: 7, done.\nCounting objects: 100% (7/7), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (3/3), done.\nWriting objects: 100% (4/4), 374 bytes | 374.00 KiB/s, done.\nTotal 4 (delta 2), reused 0 (delta 0), pack-reused 0\nremote: \nremote: To create a merge request for do-sample, visit:\nremote:   https://gitlab.com/repository/k8s-digitalocean/-/merge_requests/new?merge_request%5Bsource_branch%5D=do-sample\nremote: \nTo https://gitlab.com/repository/k8s-digitalocean.git\n * [new branch]      do-sample -> do-sample\nBranch 'do-sample' set up to track remote branch 'do-sample' from 'origin'.\n\n...\n")),(0,o.kt)("p",null,"At this point, we can follow the pipeline by executing the initial provisioning steps by visiting the CI/CD part of our newly created repository, there we can view the variables created by VKPR regarding credentials and sensitive data, all with the greatest concern of data protection , we take the GitLab repository as an example below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gitlab pipeline",src:n(9148).Z,width:"1895",height:"946"})),(0,o.kt)("p",null,"The data requested in the decision tree is stored in config/defaults.yml in the branch of our newly forked repository."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gitlab configs",src:n(9244).Z,width:"1895",height:"946"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about the values \u200b\u200ballowed in ",(0,o.kt)("inlineCode",{parentName:"p"},"defaults.yml"),", click ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/vkpr/k8s-digitalocean"},"here"))),(0,o.kt)("h3",{id:"starting-the-deployment"},"Starting the deployment"),(0,o.kt)("p",null,"So we can start the deployment pipeline or execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"vkpr digitalocean cluster deploy")," command referring to the deployment of our cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ vkpr digitalocean cluster deploy\nFormula was successfully built!\nDeploy job started successfully\n")),(0,o.kt)("p",null,"We will be able to see the kubeconfig files being generated in the artifacts part at the end of the pipeline execution, but VKPR has features for extracting this file. By running the ",(0,o.kt)("inlineCode",{parentName:"p"},"vkpr digitalocean cluster kubeconfig")," command VKPR will be able to automatically extract kubeconfig directly from the pipeline of our newly provisioned infrastructure."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about kubeconfig click ",(0,o.kt)("a",{parentName:"p",href:"https://jamesdefabia.github.io/docs/user-guide/kubectl/kubectl_config/"},"here"))),(0,o.kt)("h3",{id:"dropping-the-cluster"},"Dropping the cluster"),(0,o.kt)("p",null,"Another command that VKPR makes available is to destroy the cluster provisioned through the previous steps. With the execution of the ",(0,o.kt)("inlineCode",{parentName:"p"},"vkpr digitalocean cluster destroy")," command, the last stage of our repository pipeline will be triggered, which will bring down all the infrastructure previously provisioned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ vkpr digitalocean cluster deploy\nFormula was successfully built!\nDestroy job started successfully\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Complete pipeline",src:n(4611).Z,width:"1895",height:"946"})))}d.isMDXComponent=!0},9244:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/configs-defaults-do-88d0b8e246f4476c082a772ff0a423f0.png"},4770:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fork-repo-do-a937332c45602bd2d16246bb374d846d.png"},9148:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/initial-step-pipeline-do-b713313144b33b1a000cf45fc67fc623.png"},4611:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pipeline-deploy-do-195c94b1346a93a315212c14f0e0baa1.png"}}]);
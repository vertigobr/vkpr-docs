"use strict";(self.webpackChunkvkpr_docs=self.webpackChunkvkpr_docs||[]).push([[5869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"Install",title:"Install",slug:"/install"},o="Setup VKPR",l={unversionedId:"user-guide/setup",id:"user-guide/setup",title:"Install",description:"To be using the VKPR CLI, the user must have the Docker and Git installed in their local environment. It is used in certain formulas to structure the applications and create the local cluster.",source:"@site/docs/user-guide/setup.md",sourceDirName:"user-guide",slug:"/install",permalink:"/docs/install",draft:!1,editUrl:"https://github.com/vertigobr/vkpr-docs/edit/main/docs/user-guide/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Install",title:"Install",slug:"/install"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/basics"},next:{title:"Provisioning",permalink:"/docs/deploy"}},s={},p=[{value:"Installing VKPR CLI",id:"installing-vkpr-cli",level:2},{value:"VKPR Structure",id:"vkpr-structure",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-vkpr"},"Setup VKPR"),(0,a.kt)("p",null,"To be using the VKPR CLI, the user must have the ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," installed in their local environment. It is used in certain formulas to structure the applications and create the local cluster."),(0,a.kt)("admonition",{title:"Take care",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"  Currently VKPR was specifically designed to be used in UNIX environments, so ",(0,a.kt)("strong",{parentName:"p"},"VKPR won't support being used in Windows distributions"),".")),(0,a.kt)("h2",{id:"installing-vkpr-cli"},"Installing VKPR CLI"),(0,a.kt)("p",null,"VKPR was built on top of Ritchie, but he abstracts most of his interaction with him. To install it, you must run the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://get.vkpr.net/ | bash\necho 'alias vkpr=\"rit vkpr\"' >> ~/.bashrc # If you use another Unix Shell, specify your specific source\n")),(0,a.kt)("p",null,"Running the above command will run a script that will install the following tools that are used in VKPR:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl"),": The Kubernetes command-line tool, allows you to run commands against Kubernetes clusters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm"),": Helm helps you manage Kubernetes applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://k3d.io/v4.4.8/"},"k3d"),": k3d is a lightweight wrapper to run ",(0,a.kt)("inlineCode",{parentName:"li"},"k3s")," (Rancher Lab\u2019s minimal Kubernetes distribution) in docker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alexellis/arkade"},"arkade"),": arkade provides a portable marketplace for downloading CLIs and installing helm charts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq"),": jq is a lightweight and flexible command-line JSON processor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mikefarah.gitbook.io/yq/"},"yq"),": yq is a lightweight and portable command-line YAML processor"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"aws"),": The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.okteto.com/"},"okteto"),": gives you free access to secure Kubernetes namespaces, fully integrated with remote development capabilities.")),(0,a.kt)("admonition",{title:"Tips",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," so that you can use these tools from the command line."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$HOME/.vkpr/bin:$PATH\n"))),(0,a.kt)("admonition",{title:"Note",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We do not use local tools that have already been installed previously, VKPR is fully responsible for their structure and their necessary tools for use.")),(0,a.kt)("h2",{id:"vkpr-structure"},"VKPR Structure"),(0,a.kt)("p",null,"All VKPR binaries and utilities are installed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"home")," directory.",(0,a.kt)("br",{parentName:"p"}),"\n","Its structure is separated as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".vkpr\n|_ bin          # Application binaries directory\n|__ tmp         # Application temporary storage directory\n|___ kubeconfig # Application cluster settings directory\n|____ config    # VKPR local infra config\n")))}u.isMDXComponent=!0}}]);
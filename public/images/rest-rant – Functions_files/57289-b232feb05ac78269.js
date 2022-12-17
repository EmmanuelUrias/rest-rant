(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57289],{491584:function(e,t){"use strict";t._k=void 0,t._k=[{name:"Turborepo",slug:"turbo",logo:"https://api-frameworks.vercel.sh/monorepo-logos/turborepo.svg",darkModeLogo:"https://api-frameworks.vercel.sh/monorepo-logos/turborepo-dark.svg",detectors:{some:[{path:"turbo.json"},{path:"package.json",matchContent:'"turbo":\\s*{[^}]*.+[^}]*}'}]},settings:{buildCommand:{placeholder:"Turborepo default",value:null},outputDirectory:{value:null},installCommand:{value:null},devCommand:{value:null}}},{name:"Nx",slug:"nx",logo:"https://api-frameworks.vercel.sh/monorepo-logos/nx.svg",detectors:{every:[{path:"nx.json"}]},settings:{buildCommand:{placeholder:"Nx default",value:null},outputDirectory:{value:null},installCommand:{value:null},devCommand:{value:null}}},{name:"Rush",slug:"rush",logo:"https://api-frameworks.vercel.sh/monorepo-logos/rush.svg",detectors:{every:[{path:"rush.json"}]},settings:{buildCommand:{placeholder:"Rush default",value:null},outputDirectory:{value:null},installCommand:{placeholder:"Rush default"},devCommand:{value:null}}}],t._k},670868:function(e){"use strict";let t=(e,{target:t=document.body}={})=>{let n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch(s){}return n.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus(),r};e.exports=t,e.exports.default=t},922709:function(e,t,n){"use strict";n.d(t,{Lt:function(){return G},p5:function(){return J}});var o=n(397458),l=n(465635),i=n.n(l),r=n(652983),s=n(491584),d=n(234498),a=n(577389),u=n(524769),m=n(706774),c=n(633361),p=n(201396),h=n(481437),g=n(97146),x=n(780356),v=n(830426),j=n(113745),C=n(577072),f=n(589383),y=n(516200),b=n(955913),w=n(37963),_=n(176463),S=n(687430),k=n(476795),D=n(695913),Z=n(102560),M=n(974417),I=n.n(M),N=n(764995),P=n(582799),L=n(761253),T=n(646952),B=n(89378),F=n(442814),W=n(589949),O=n.n(W);let R={turbo:/(?:npx|pnpm\sdlx|yarn)\sturbo\srun\sbuild\s--filter=(?:[^\s]+)\.\.\.$/,nx:/^(?:npx|pnpm\sdlx|yarn)\snx\sbuild\s(?:[^\s]+)$/,rush:/^node\s.+\/common\/scripts\/install-run-rush\.js\sbuild\s--to\s(?:[^\s]+)$/},A={turbo:{test:e=>!0},nx:{test:e=>!0},rush:/^node\s.+\/common\/scripts\/install-run-rush\.js\sinstall$/};function H(e){return"object"==typeof e&&e.hasOwnProperty("value")?e.value??"":""}function $(e){let{children:t}=e;return(0,o.jsx)(h.x,{as:"h5",style:{height:22,fontSize:12,fontWeight:500,lineHeight:"22px",display:"inline-block",userSelect:"none",cursor:"default"},children:t})}function E(e){let{name:t,framework:n,monorepoManager:l,description:s,field:d,autoDetect:a,setAutoDetect:m,fieldsetData:p,setFieldsetData:h,saving:g,loading:j,defaultValues:b}=e,w=p[d],_=b[d],S=(0,r.useRef)(),k=(0,r.useRef)(""),D=l?.settings[d].placeholder??n?.settings[d].placeholder??H(n?.settings[d]);return(0,r.useEffect)(()=>{w&&!k.current&&(k.current=w)},[w]),(0,o.jsxs)(x.Z,{row:!0,top:!0,children:[(0,o.jsxs)(x.Z,{direction:["column","row","row"],gap:0,vcenter:!0,children:[(0,o.jsxs)(x.Z,{noWrap:!0,row:!0,style:{maxWidth:180,minWidth:180,whiteSpace:"nowrap"},vcenter:!0,children:[(0,o.jsx)($,{children:t}),(0,o.jsx)(C.L,{x:.25}),(0,o.jsx)(f.Z,{center:!1,"data-testid":(0,B.C)("tooltip",d),invert:!1,padding:"var(--geist-gap)",position:"bottom",text:s,children:(0,o.jsx)(y.Z,{color:"var(--accents-3)",size:18})})]}),(0,o.jsx)(C.L,{y:.5}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(c.O,{className:"height-override",height:36,width:"100%",children:j?null:(0,o.jsx)(u.Z,{"aria-label":t,"data-testid":(0,B.C)("input",d),disabled:a[d]||g,innerRef(e){S.current=e||void 0},maxWidth:"100%",onChange(e){h({...p,[d]:e}),k.current=e},placeholder:D,value:a[d]?"":p[d],width:"100%"})})})]}),(0,o.jsxs)(x.Z,{center:!0,direction:["column","row","row"],flex:"0 0 auto",gap:0,children:[(0,o.jsx)(x.Z,{children:(0,o.jsx)($,{children:"Override"})}),(0,o.jsx)(C.L,{x:.5,y:.5}),(0,o.jsx)(x.Z,{right:!0,style:{width:"100%",minHeight:36},vcenter:!0,children:j?(0,o.jsx)(c.O,{className:"height-override",height:36,width:40}):(0,o.jsx)(v.Z,{checked:!a[d],"data-testid":(0,B.C)("override",d),onChange(e){let t=l?.settings[d].placeholder?_:"";m({...a,[d]:!e}),h({...p,[d]:e?k.current||H(n?.settings[d]):t}),setTimeout(()=>{e&&S.current&&S.current.select()},30)},size:"large"})})]}),(0,o.jsx)(i(),{id:"eac0b4191a73335d",children:"@media only screen and (max-device-width:780px)and (-webkit-min-device-pixel-ratio:0){.height-override.geist-skeleton{min-height:43px}}"})]})}function U(e){let{children:t,confirmBuildCommandModal:n,fieldsetProps:l}=e;return(0,o.jsxs)(x.Z,{children:[t,(0,o.jsx)("hr",{className:O().hr}),n,(0,o.jsx)(E,{description:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.x,{children:"The command your frontend framework provides for compiling your code."}),(0,o.jsx)(C.L,{y:.5}),(0,o.jsx)(h.x,{children:"If your frontend does not require a build, leave this field empty."})]}),field:"buildCommand",name:"Build Command",...l}),(0,o.jsx)(E,{description:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.x,{children:"The directory in which your compiled frontend will be located."}),(0,o.jsx)(C.L,{y:.5}),(0,o.jsx)(h.x,{children:"If you want to serve everything instead of a sub directory, leave this field empty."})]}),field:"outputDirectory",name:"Output Directory",...l}),(0,o.jsx)(E,{description:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.x,{children:"The command that is used to install your Project's software dependencies."}),(0,o.jsx)(C.L,{y:.5}),(0,o.jsx)(h.x,{children:"If you don't need to install dependencies, override this field and leave it empty."})]}),field:"installCommand",name:"Install Command",...l}),(0,o.jsx)(E,{description:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.x,{children:"The command your frontend framework provides for development."}),(0,o.jsx)(C.L,{y:.5}),(0,o.jsx)(h.x,{children:"If your frontend does not require a development command, leave this field empty."})]}),field:"devCommand",name:"Development Command",...l})]})}function Y(e){let{slug:t}=e,{data:n}=(0,N.G)(),l=(0,r.useMemo)(()=>n?.find(e=>e.slug===t)??null,[n,t]),i=(0,r.useMemo)(()=>l?.logo?(0,o.jsx)(P.Z,{alt:`${l.name} logo`,className:I().frameworkIcon,height:"20",layout:"fixed",srcDark:l.logo,srcLight:l.logo,width:"20"}):null,[l]);return void 0!==t?(0,o.jsx)(x.Z,{row:!0,top:!0,children:(0,o.jsxs)(x.Z,{direction:["column","row","row"],gap:0,vcenter:!0,children:[(0,o.jsx)(x.Z,{noWrap:!0,row:!0,style:{maxWidth:180,minWidth:180,whiteSpace:"nowrap"},vcenter:!0,children:(0,o.jsx)($,{children:"Framework"})}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(m.I,{disabled:!0,id:"framework-name",prefix:i,value:l?.name,width:"100%"})})]})}):null}function z(e){let{name:t,value:n}=e;return void 0!==n?(0,o.jsx)(x.Z,{row:!0,top:!0,children:(0,o.jsxs)(x.Z,{direction:["column","row","row"],gap:0,vcenter:!0,children:[(0,o.jsx)(x.Z,{noWrap:!0,row:!0,style:{maxWidth:180,minWidth:180,whiteSpace:"nowrap"},vcenter:!0,children:(0,o.jsx)($,{children:t})}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(u.Z,{"aria-label":t,disabled:!0,maxWidth:"100%",value:n??"",width:"100%"})})]})}):null}function q(e){let{settings:t,projectInfo:n}=e;return(0,o.jsxs)(x.Z,{children:[n?.framework!==t?.framework?(0,o.jsx)(Y,{slug:t?.framework}):null,n?.buildCommand!==t?.buildCommand?(0,o.jsx)(z,{name:"Build Command",value:t?.buildCommand}):null,n?.outputDirectory!==t?.outputDirectory?(0,o.jsx)(z,{name:"Output Directory",value:t?.outputDirectory}):null,n?.installCommand!==t?.installCommand?(0,o.jsx)(z,{name:"Install Command",value:t?.installCommand}):null,n?.devCommand!==t?.devCommand?(0,o.jsx)(z,{name:"Development Command",value:t?.devCommand}):null]})}function G(e){let{title:t,deploymentLink:n,children:l}=e,[i,s]=(0,r.useState)(!1),d=(0,r.useMemo)(()=>(0,o.jsx)(g.ChevronRight,{className:`${O().dropdownIcon} ${i?O().dropdownIconOpen:O().dropdownIconClosed}`}),[i]);return(0,o.jsxs)(j.Z,{children:[(0,o.jsxs)(Z.JH,{as:"button",className:O().deploymentSettings,onClick:()=>s(e=>!e),children:[d,(0,o.jsx)(Z.Sn,{title:t}),n?(0,o.jsx)(Z.Sn,{className:"geist-hide-on-tablet",description:n,right:!0}):null]}),i?(0,o.jsx)(Z.D2,{title:null,children:l}):null]})}function J(e){let{children:t,framework:n}=e,l=(0,a.useRouter)().query.project,i=l?String(l):void 0,{team:u,isReady:m}=(0,k.t7)(),{data:x,mutate:v,isLoading:C}=(0,b.PY)(i),{data:f,isLoading:y}=(0,L.s)(x?.id),{data:Z,isLoading:M}=(0,T.ZP)(f?.deployment.id),{can:I,isLoading:N}=(0,D.ZP)({projectId:x?.id}),P=I(D.aU.Update,D._z.Project);x&&(x.buildCommand??=null,x.outputDirectory??=null,x.installCommand??=null,x.devCommand??=null);let B=Z?.monorepoManager,W="string"==typeof B,$=Z?.projectSettings?.buildCommand,E=Z?.projectSettings?.outputDirectory,Y=Z?.projectSettings?.installCommand,z=x?.framework,J=x?.buildCommand,K=x?.outputDirectory,V=x?.installCommand,Q=x?.devCommand,{confirm:X,modal:ee}=(0,_.Z)(),et={buildCommand:null===J,outputDirectory:null===K,installCommand:null===V,devCommand:null===Q};et.buildCommand&&(J=""),et.outputDirectory&&(K=""),et.installCommand&&(V=""),et.devCommand&&(Q="");let[en,eo]=(0,r.useState)({buildCommand:J??"",outputDirectory:K??"",installCommand:V??"",devCommand:Q??""}),[el,ei]=(0,r.useState)({buildCommand:!1,outputDirectory:!1,installCommand:!1,devCommand:!1}),[er,es]=(0,r.useState)(!1),[ed,ea]=(0,r.useState)(null),eu=(0,w.e1)();(0,r.useEffect)(()=>{x&&m&&!M&&(ei({buildCommand:et.buildCommand||W&&Boolean($?.includes(x.buildCommand??""))&&R[B].test(x.buildCommand??""),installCommand:et.installCommand||W&&Boolean(Y?.includes(x.installCommand??""))&&A[B].test(x.installCommand??""),outputDirectory:et.outputDirectory,devCommand:et.devCommand}),eo({buildCommand:J??"",outputDirectory:K??"",installCommand:V??"",devCommand:Q??""}))},[x,m,n,M]);let em=!x||!m||!n||N||C||y||M,ec=H(n?.settings.buildCommand),ep=H(n?.settings.outputDirectory),eh=H(n?.settings.installCommand),eg=H(n?.settings.devCommand),ex=en.buildCommand!==J&&(!ec||ec!==en.buildCommand),ev=en.outputDirectory!==K&&(!ep||ep!==en.outputDirectory),ej=en.installCommand!==V&&(!eh||eh!==en.installCommand),eC=en.devCommand!==Q&&(!eg||eg!==en.devCommand),ef=!em&&P&&(n.slug!==z||ex||ev||ej||eC),ey=(0,r.useMemo)(()=>em?(0,o.jsx)(c.O,{boxHeight:32,vcenter:!0,width:200}):P?(0,o.jsxs)("span",{children:["Learn more about"," ",(0,o.jsx)(p.r,{external:!0,href:"/docs/deployments/build-step#build-&-development-settings",type:"highlight",children:"Build and Development Settings"})]}):(0,o.jsx)(h.x,{lineHeight:32,children:"You need additional permissions to manage your project's build and development settings."}),[em,P]);Z?.projectSettings&&(Z.projectSettings.buildCommand??=null,Z.projectSettings.installCommand??=null,Z.projectSettings.outputDirectory??=null,Z.projectSettings.devCommand??=null);let eb=(0,r.useMemo)(()=>void 0!==x&&Z?.projectSettings!==void 0&&(x.framework!==Z.projectSettings.framework||x.buildCommand!==Z.projectSettings.buildCommand||x.outputDirectory!==Z.projectSettings.outputDirectory||x.installCommand!==Z.projectSettings.installCommand||x.devCommand!==Z.projectSettings.devCommand),[Z,x]),ew=(0,r.useMemo)(()=>Z?.url?(0,o.jsx)(p.r,{href:Z.inspectorUrl,variant:"highlight",children:Z.url}):null,[Z]),e_={framework:n??void 0,monorepoManager:s._k.find(e=>e.slug===Z?.monorepoManager),fieldsetData:en,setFieldsetData:eo,autoDetect:el,setAutoDetect:ei,saving:er,loading:em,defaultValues:{buildCommand:(eb?$:J)??"",outputDirectory:(eb?E:K)??"",installCommand:(eb?Y:V)??"",devCommand:Q??""}};return(0,o.jsx)(F.Z,{description:"When using a framework for a new project, it will be automatically detected. As a result, several project settings are automatically configured to achieve the best result. You can override them below.",disabled:em||!P,error:ed,highlightNote:!em&&!P,note:ey,async onSave(){let e=en.buildCommand,t=en.outputDirectory,o=en.installCommand,l=en.devCommand;if(el.buildCommand&&(e=W?$??null:null),el.outputDirectory&&(t=W?E??null:null),el.installCommand&&(o=W?Y??null:null),el.devCommand&&(l=null),await X(e)){es(!0);try{ea(null),await (0,S.Z)(i,u?.id,{buildCommand:e,outputDirectory:t,installCommand:o,devCommand:l,framework:n?.slug});let r={...en};el.buildCommand&&(r.buildCommand=""),el.outputDirectory&&(r.outputDirectory=""),el.installCommand&&(r.installCommand=""),el.devCommand&&(r.devCommand=""),eo(r),await v(),eu.success("Updated Build & Development Settings successfully.")}catch(s){(0,d.x)(s)?ea(s.message):ea("Unknown error")}es(!1)}},saveDisabled:!ef,saveLoading:er,title:"Build & Development Settings",children:(0,o.jsx)("div",{className:O().buildDevelopmentFieldsetContent,children:eb?(0,o.jsxs)(j.Z,{className:O().multipleDeploymentSettingStack,gap:3,children:[(0,o.jsxs)(j.Z,{align:"center",direction:"row",gap:1,children:[(0,o.jsx)(g.AlertTriangle,{className:`${O().warningMessageIcon} geist-hide-on-mobile`}),(0,o.jsx)(h.x,{className:O().warningMessageMainText,weight:600,children:"Configuration Settings in the current Production deployment differ from your current Project Settings."})]}),(0,o.jsx)(G,{deploymentLink:ew,title:"Production Overrides",children:(0,o.jsx)(q,{projectInfo:x,settings:Z?.projectSettings})}),(0,o.jsx)(G,{title:"Project Settings",children:(0,o.jsx)(U,{confirmBuildCommandModal:ee,fieldsetProps:e_,children:t})})]}):(0,o.jsx)(U,{confirmBuildCommandModal:ee,fieldsetProps:e_,children:t})})})}},176463:function(e,t,n){"use strict";var o=n(397458),l=n(652983),i=n(369378),r=n(50134),s=n(201396);let d=()=>{let[e,t]=(0,l.useState)(!1),n=(0,l.useRef)(null),d=(0,l.useCallback)(async e=>{if(!e?.includes("start"))return!0;t(!0);let o=await new Promise(e=>{n.current=e});return t(!1),o},[]),a=(0,l.useMemo)(()=>(0,o.jsxs)(r.Modal,{active:e,onClickOutside:()=>n.current?.(!1),children:[(0,o.jsxs)(r.Body,{children:[(0,o.jsx)("header",{style:{textAlign:"center"},children:(0,o.jsx)(i.ZP,{Component:"h1",h3:!0,children:"Warning"})}),(0,o.jsxs)("main",{children:[(0,o.jsxs)(i.ZP,{preset:"body-2",children:["You're trying to save a Build Command that contains the word"," ",'"start".']}),(0,o.jsxs)(i.ZP,{preset:"body-2",children:["Please note that the Build Command is meant to be used for compiling source code, not starting a forever-running process."," ",(0,o.jsx)(s.r,{external:!0,href:"/guides/npm-run-start-not-working",type:"highlight",children:"Learn more"})]}),(0,o.jsx)(i.ZP,{preset:"body-2",children:"Are you sure you want to continue?"})]})]}),(0,o.jsxs)(r.Actions,{children:[(0,o.jsx)(r.Action,{onClick:()=>n.current?.(!1),children:"Cancel"}),(0,o.jsx)(r.Action,{onClick:()=>n.current?.(!0),children:"Continue"})]})]}),[e]);return{confirm:d,modal:a}};t.Z=d},830426:function(e,t,n){"use strict";var o=n(397458),l=n(652983),i=n(425789),r=n(187589),s=n(348041),d=n.n(s);let a=e=>{let{className:t,children:n,size:s,disabled:a,name:u,checked:m,onChange:c,onBlur:p,onFocus:h,noMargin:g,direction:x="label-first",labelCasing:v="title",...j}=e,C=(0,r.B)()||a,f=(0,l.useCallback)(()=>{!C&&c&&c(!m)},[m,c,C]);return(0,o.jsxs)("label",{className:(0,i.Z)(d().wrapper,t,{[d().large]:"large"===s,[d().medium]:"medium"===s,[d().switchFirst]:"switch-first"===x,[d().titleCasing]:"title"===v}),"data-version":"v1",...j,children:[(0,o.jsx)("span",{children:n}),(0,o.jsx)("input",{checked:m,className:(0,i.Z)(d().input),disabled:C,name:u,onBlur:p,onChange:f,onFocus:h,type:"checkbox"}),(0,o.jsx)("span",{className:(0,i.Z)(d().toggle,{[d().checked]:m,[d().disabled]:C,[d().noMargin]:g}),children:(0,o.jsx)("div",{className:(0,i.Z)(d().thumb,{[d().checked]:m})})})]})};t.Z=a},687430:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(241663),l=n(191425);async function i(e,t,n){return await (0,l.Z)(`${(0,o.HJ)("v5")}/${encodeURIComponent(e)}${t?"?teamId="+t:""}`,{method:"PATCH",body:JSON.stringify(n),throwOnHTTPError:!0})}},589949:function(e){e.exports={multipleDeploymentSettingStack:"build-development-settings_multipleDeploymentSettingStack__SLwdj",warningMessageIcon:"build-development-settings_warningMessageIcon__orb0r",warningMessageMainText:"build-development-settings_warningMessageMainText__SrH8B",warningMessageSubText:"build-development-settings_warningMessageSubText__TVMDM",buildDevelopmentFieldsetContent:"build-development-settings_buildDevelopmentFieldsetContent__eSlKl",ignoreCommandFieldsetContent:"build-development-settings_ignoreCommandFieldsetContent__6B0Fl",hr:"build-development-settings_hr__GeIUI",dropdownIcon:"build-development-settings_dropdownIcon__3lGFZ",dropdownIconOpen:"build-development-settings_dropdownIconOpen__l94SZ",dropdownIconClosed:"build-development-settings_dropdownIconClosed__WId1y",deploymentSettings:"build-development-settings_deploymentSettings__G_T3N"}},348041:function(e){e.exports={wrapper:"toggle_wrapper__taAID",titleCasing:"toggle_titleCasing__bhJUo",toggle:"toggle_toggle__rYC6d",noMargin:"toggle_noMargin__SHz6K",checked:"toggle_checked__mowuj",disabled:"toggle_disabled__Yjgme",thumb:"toggle_thumb__E9eh_",input:"toggle_input__id_om reset_visuallyHidden__Epm6x",large:"toggle_large__npqyU",medium:"toggle_medium__qYWkl",switchFirst:"toggle_switchFirst___0YY9"}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63009],{747268:function(e,t,n){"use strict";var i=n(397458),s=n(425789),r=n(769354),a=n.n(r);let l={QUEUED:"This deployment is queued.",BUILDING:"This deployment is building.",READY:"This deployment is ready.",ERROR:"This deployment had an error.",CANCELED:"This deployment was canceled.",INITIALIZING:"This deployment is initializing.",UPLOADING:"This deployment is initializing.",DEPLOYING:"This deployment is initializing.",ARCHIVED:"This deployment is initializing."},o=e=>{let{state:t,label:n}=e;return(0,i.jsxs)("span",{"aria-label":t?l[t]:void 0,className:a().wrapper,title:t?l[t]:void 0,children:[(0,i.jsx)("span",{className:(0,s.Z)(a().status,{[a().ready]:"READY"===t,[a().error]:"ERROR"===t,[a().building]:!!t&&["INITIALIZING","BUILDING","UPLOADING","DEPLOYING"].includes(t)})}),n&&t?(0,i.jsx)("span",{className:a()["status-label"],children:t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}):null]})};t.Z=o},442168:function(e,t,n){"use strict";n.d(t,{HD:function(){return d},oR:function(){return u}});var i=n(397458),s=n(652983),r=n(577389),a=n(411295),l=n(780307);let o={framework:l.Ec[0],toggleFramework:()=>null,language:l.Mj[0],toggleLanguage:()=>null},c=(0,s.createContext)(o),d=()=>(0,s.useContext)(c);function u(e){let{children:t}=e,[n,o]=(0,s.useState)(function(){let e=(0,a.ej)("selected-framework");return l.Ec.find(t=>t.slug===e)||l.Ec[0]}()),[d,u]=(0,s.useState)(function(){let e=(0,a.ej)("selected-language");return l.Mj.find(t=>t.name===e)||l.Mj[0]}()),g=(0,r.useRouter)(),{pathname:h}=g,x=(0,s.useMemo)(()=>e=>{let t=l.Ec.find(t=>t.slug===e);t&&((0,a.d8)("selected-framework",e),o(t))},[]),m=(0,s.useMemo)(()=>e=>{let t=l.Mj.find(t=>t.name===e);t&&((0,a.d8)("selected-language",e),u(t))},[]);return(0,s.useEffect)(()=>{let e=l.Ec.find(e=>e.slug===n.slug);if(e?.supportedFeatures){let t=e.supportedFeatures.find(e=>h.includes(e));t||x("nextjs")}},[n.slug,h,x]),(0,i.jsx)(c.Provider,{value:{framework:n,toggleFramework:x,language:d,toggleLanguage:m},children:t})}},780307:function(e,t,n){"use strict";n.d(t,{Ec:function(){return r},H8:function(){return i},Mj:function(){return s}});let i=["ts","js","nextjs","sveltekit","nuxt","create-react-app","gatsby","vue","vite","angular","docusaurus","remix","astro","html","all","other"],s=[{name:"TypeScript",slug:"ts"},{name:"JavaScript",slug:"js"}],r=[{name:"Next.js",slug:"nextjs",supportedFeatures:["edge-functions","edge-middleware","serverless-functions","image-optimization","incremental-static-regeneration","og-image","audiences","environment-variables"]},{name:"SvelteKit",slug:"sveltekit",supportedFeatures:["audiences","environment-variables"]},{name:"Create React App",slug:"create-react-app",supportedFeatures:["audiences","environment-variables"]},{name:"Nuxt",slug:"nuxt",supportedFeatures:["serverless-functions","incremental-static-regeneration","image-optimization","audiences","environment-variables"]},{name:"Gatsby",slug:"gatsby",supportedFeatures:["audiences","environment-variables"]},{name:"Vue",slug:"vue",supportedFeatures:["serverless-functions","audiences","environment-variables"]},{name:"Vite",slug:"vite",supportedFeatures:["serverless-functions","audiences","environment-variables"]},{name:"Angular",slug:"angular",supportedFeatures:[]},{name:"Docusaurus",slug:"docusaurus",supportedFeatures:["serverless-functions","incremental-static-regeneration","audiences"]},{name:"Remix",slug:"remix",supportedFeatures:[]},{name:"Astro",slug:"astro",supportedFeatures:["audiences","environment-variables"]},{name:"HTML",slug:"html",supportedFeatures:["serverless-functions","audiences"]},{name:"Other frameworks",slug:"other",supportedFeatures:["edge-functions","edge-middleware","serverless-functions","image-optimization","incremental-static-regeneration","og-image","audiences","environment-variables"]}]},894735:function(e,t,n){"use strict";n.d(t,{EK:function(){return T},ZM:function(){return D},_q:function(){return F}});var i=n(397458),s=n(425789),r=n(670868),a=n.n(r),l=n(652983),o=n(583596),c=n(761099),d=n(322053),u=n(654817),g=n(640501),h=n(337508),x=n(479035),m=n(589383),p=n(59174),j=n.n(p),f=n(442168),b=n(780307),y=n(187917),v=n(924e3),C=n(584037),_=n(685911),w=n.n(_);let E=Object.assign(function(e){let{triggerContent:t,children:n}=e;return(0,i.jsxs)(y.fC,{modal:!1,children:[(0,i.jsx)(y.xz,{asChild:!0,children:(0,i.jsx)(v.z,{className:w().dropdownTrigger,size:"small",suffix:(0,i.jsx)(C.Z,{size:13}),type:"secondary",children:t})}),(0,i.jsx)(y.VY,{align:"end",className:w().dropdown,side:"bottom",sideOffset:4,children:n})]})},{Item:function(e){let{children:t,...n}=e;return(0,i.jsx)(y.ck,{className:w().dropdownItem,...n,children:t})}});function k(){let{language:e,toggleLanguage:t}=(0,f.HD)();function n(e){if(e.target){let n=e.target,i=n.innerText;t(i)}}return(0,i.jsx)("div",{className:w().container,children:(0,i.jsx)(E,{triggerContent:e.name,children:b.Mj.map(e=>(0,i.jsx)(E.Item,{onSelect:n,textValue:e.name,children:e.name},e.name))})})}var Z=n(577389);function I(){let{framework:e,toggleFramework:t}=(0,f.HD)(),n=(0,Z.useRouter)(),{pathname:s}=n;return(0,i.jsx)("ul",{className:w().frameworksList,children:b.Ec.map((n,r)=>{let a=n.slug===e.slug,l=n.supportedFeatures?.some(e=>s.includes(e));return l?(0,i.jsxs)("li",{tabIndex:r,children:[(0,i.jsx)("input",{checked:a,id:n.slug,name:"framework",onChange(){t(n.slug)},type:"radio",value:n.slug}),(0,i.jsx)("label",{htmlFor:n.slug,children:n.name}),a?(0,i.jsx)(c.E.span,{className:w().underline,layoutId:"underline"}):null]},n.slug):null})})}var S=n(207850),N=n.n(S);function T(e){let{children:t,className:n,filename:r,framework:d}=e,[u,g]=(0,l.useState)(!1),{framework:m,language:p}=(0,f.HD)(),b=n&&/language-(?<language>.*)/.exec(n)?.groups||{},y=b.language===p.slug,v=d&&d===m.slug;(0,l.useEffect)(()=>{let e=setTimeout(()=>{u&&g(!1)},1500);return()=>clearTimeout(e)},[u]);let C=(0,l.useCallback)(()=>{let e=function e(t){let n="";return l.Children.forEach(t,t=>{"object"!=typeof t?n+=t:t.props.children&&(n+=e(t.props.children))}),n}(t);a()(e),g(!0)},[t]),_=r?(0,i.jsxs)("span",{className:N().path,children:["terminal"===r||"bash"===b.language?(0,i.jsx)(x.Z,{size:16}):(0,i.jsx)(h.Z,{size:16}),r]}):void 0,w=(0,i.jsx)(o.M,{children:(0,i.jsx)("pre",{className:N().pre,children:(0,i.jsx)(c.E.code,{animate:{y:0,opacity:1},className:(0,s.Z)(j().code,n),exit:{y:-10,opacity:0},initial:{y:10,opacity:0},transition:{duration:.5},children:t})})});return Boolean(v)&&y?(0,i.jsxs)("div",{className:N().codeContainer,children:[(0,i.jsx)(I,{}),(0,i.jsxs)("div",{className:N().filename,children:[_,(0,i.jsxs)("span",{className:N().langAndCopy,children:[P(b),L(u,r,C)]})]}),w]}):Boolean(d&&"all"===d)&&y?(0,i.jsxs)("div",{className:N().codeContainer,children:[(0,i.jsxs)("div",{className:(0,s.Z)(N().filename,N().noTopBorder),children:[_,(0,i.jsxs)("span",{className:N().langAndCopy,children:[P(b),L(u,r,C)]})]}),w]}):d?null:(0,i.jsxs)("div",{className:N().codeContainer,children:[(0,i.jsxs)("div",{className:(0,s.Z)(N().filename,N().noTopBorder),children:[_,L(u,r,C)]}),w]})}function L(e,t,n){let r={visible:{opacity:1,scale:1},hidden:{opacity:0,scale:.5}},a=(0,i.jsx)(d.A,{transition:{duration:.15},children:(0,i.jsx)(o.M,{initial:!1,mode:"wait",children:e?(0,i.jsx)(m.Z,{invert:!0,lowerDelay:!0,position:"top",text:"Copied!",tooltipClassName:N().tooltip,children:(0,i.jsx)(c.E.div,{animate:"visible",exit:"hidden",initial:"hidden",variants:r,children:(0,i.jsx)(g.Z,{size:18})},"check")}):(0,i.jsx)(c.E.div,{animate:"visible",exit:"hidden",initial:"hidden",variants:r,children:(0,i.jsx)(u.Z,{size:18})},"copy")})});return(0,i.jsx)("button",{className:(0,s.Z)("geist-reset",N().copy,void 0===t?N().noFilepath:""),onClick:n,type:"button",children:a})}function P(e){return"bash"!==e.language?(0,i.jsx)(k,{}):null}function D(e){let{children:t,noWrap:n,disabled:r,color:a,title:l}=e;return(0,i.jsx)("code",{className:(0,s.Z)(N().code,{[N().noWrap]:n,[N().disabled]:r}),style:a?{color:a}:void 0,title:l,children:t})}function F(e){return(0,i.jsx)(D,{color:"#0076FF",noWrap:!0,...e})}},618541:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var i=n(652983);function s(e,t){let[n,s]=(0,i.useState)(null);return(0,i.useEffect)(()=>{"number"==typeof t&&localStorage.setItem(e,String(t))},[e,t]),(0,i.useEffect)(()=>{let t=localStorage.getItem(e);t&&s(Number(t))},[e]),n}},573757:function(e,t,n){"use strict";n.d(t,{LI:function(){return c},OL:function(){return o},UL:function(){return l}});var i=n(397458),s=n(425789),r=n(268258),a=n.n(r);let l=e=>{let{children:t,className:n}=e;return(0,i.jsx)("ul",{className:(0,s.Z)(a().ul,n),children:t})},o=e=>{let{children:t,className:n}=e;return(0,i.jsx)("ol",{className:(0,s.Z)(a().ol,n),children:t})},c=e=>{let{children:t,className:n}=e;return(0,i.jsx)("li",{className:(0,s.Z)(a().li,n),children:t})}},700740:function(e,t,n){"use strict";var i=n(397458),s=n(425789),r=n(400246),a=n.n(r);let l=e=>{let{children:t,className:n,noWrap:r,title:l,style:o}=e;return(0,i.jsx)("code",{className:(0,s.Z)(a().code,n,{[a().nowrap]:r}),"data-geist-inline-code":"","data-version":"v1",style:o,title:l,children:t})};t.Z=l},332501:function(e,t,n){"use strict";n.r(t),n.d(t,{DashboardData:function(){return ex},default:function(){return em}});var i=n(397458),s=n(652983),r=n(250916),a=n.n(r),l=n(577389),o=n(116669),c=n(4898),d=n(589383),u=n(924e3),g=n(113745),h=n(619914),x=n(405235),m=n(481437),p=n(201396),j=n(847554),f=n(102560),b=n(757525),y=n(37963),v=n(476795),C=n(783277),_=n(375549),w=n(700740),E=n(23811),k=n(467819),Z=n(86723),I=n.n(Z);function S(e){let t=(0,i.jsx)(u.z,{onClick:e.onClick,size:"small",type:"success",typeName:"button",children:e.action||"Create Store"});return(0,i.jsxs)(g.Z,{align:"center",className:I().empty,gap:8,justify:"center",children:[(0,i.jsxs)(g.Z,{align:"center",gap:2,children:[(0,i.jsx)(m.x,{weight:500,children:e.title||"No Stores"}),(0,i.jsx)(m.x,{align:"center",color:"accents-6",children:e.subtitle||"Create an Edge Config store to begin reading key-value data from your projects."})]}),e.href?(0,i.jsx)(p.r,{href:e.href,children:t}):t]})}var N=n(598866),T=n(209671),L=n(498828),P=n(706774),D=n(50134),F=n(191425),M=n(241663),A=n(202764),O=n(685108),$=n(837667),B=n(974417),z=n.n(B),G=n(764995),U=n(125028),R=n(557562),H=n(577072),Y=n(138348),q=n(857132),J=n(853104),W=n(746137),V=n(470596),K=n.n(V),Q=n(894735),X=n(747268),ee=n(349018),et=n.n(ee);function en(e){let{projects:t,setProjects:n,isLoading:r,setErrorMessage:a,createdEdgeConfig:l}=e,{data:o}=(0,G.G)(),c=(0,s.useMemo)(()=>{let e={};if(!o)return e;for(let t of o)t.slug&&(e[t.slug]=t.logo);return e},[o]);if(!Array.isArray(t))return null;let u=(0,i.jsx)(i.Fragment,{children:t.map(e=>(0,i.jsxs)(f.JH,{actions:(0,i.jsx)("button",{className:et().clearButton,onClick(){n(t.filter(t=>t.id!==e.id)),a(void 0)},children:(0,i.jsx)("span",{children:(0,i.jsx)(U.Z,{size:20})})}),disabled:r,thumbnail:(0,i.jsx)("img",{className:z().frameworkIcon,height:"20",src:c[e.framework||"null"],width:"20"}),children:[(0,i.jsx)(f.Sn,{title:e.name}),e.env?.some(e=>e.edgeConfigId===l.id)?(0,i.jsx)(f.Sn,{avatar:(0,i.jsx)(d.Z,{text:`The ${e.name} project is already connected to this Edge Config`,children:(0,i.jsx)(T.Ct,{variant:"blue",children:"Connected"})}),right:!0}):e.env?.some(e=>"EDGE_CONFIG"===e.key)?(0,i.jsx)(f.Sn,{description:(0,i.jsx)(d.Z,{text:`This project already has a another default Edge Config connected. We will make the new "${l.slug}" Edge Config available as ${l.slug.toUpperCase().replace(/-/g,"_")}`,children:(0,i.jsxs)(g.Z,{direction:"row",gap:2,children:[(0,i.jsx)(X.Z,{state:"BUILDING"}),(0,i.jsx)(Q.ZM,{color:"var(--geist-warning)",children:l.slug.toUpperCase().replace(/-/g,"_")})]})}),right:!0}):(0,i.jsx)(f.Sn,{description:(0,i.jsx)(d.Z,{text:`The Edge Config "${l.slug}" will be available as the EDGE_CONFIG environment variable`,children:(0,i.jsx)(Q.ZM,{children:"EDGE_CONFIG"})}),right:!0})]},e.id))});return t.length>=5?(0,i.jsx)(R.Z,{gradient:"var(--accents-1) 0, transparent 20px",height:250,children:u}):u}function ei(e){let{active:t,navigateToEdgeConfig:n,onClickOutside:r,showSuccessToast:a}=e,{data:l}=(0,C.a)(),{team:o}=(0,v.t7)(),{data:c,mutate:d}=(0,b.FT)(),{mutate:u}=(0,L.kY)(),h=o?o.billing?.plan:l?.user?.billing?.plan,x=!!h&&!!c&&c.length>=(0,E.HX)(h),[j,f]=(0,s.useState)(""),[_,w]=(0,s.useState)(!1),[k,Z]=(0,s.useState)(null),[I,S]=(0,s.useState)(),[N,T]=(0,s.useState)([]),[B,z]=(0,s.useState)(!1),[G,U]=(0,s.useState)(null),R=(0,y.e1)(),V=(0,s.useCallback)(async e=>{e.preventDefault(),Z(null),w(!0);try{let t=await (0,F.I)(`${M.PL}${(0,A.c)({teamId:o?.id})}`,{method:"POST",throwOnHTTPError:!0,body:JSON.stringify({slug:j,items:{greeting:"hello world"}})});await u(`${M.PL}/${encodeURIComponent(t.id)}${(0,A.c)({teamId:o?.id})}`,t,{revalidate:!1}),a(t),await new Promise(e=>{setTimeout(e,0)}),await n(t),setTimeout(async()=>{await d(e=>e?[...e,t]:[t])},0)}catch(i){i instanceof Error?Z(i.message):R.error("Unexpected error while creating Edge Config"),w(!1)}},[o?.id,j,u,a,n,d,R]),X=(0,s.useRef)(null);return((0,s.useEffect)(()=>{setTimeout(()=>{t&&(X.current?.focus(),X.current?.select())},0)},[t]),G)?B?(0,i.jsxs)(D.Modal,{active:t,allowOverflow:!0,onClickOutside:r,width:480,children:[(0,i.jsx)(D.Body,{children:(0,i.jsxs)(g.Z,{gap:6,children:[(0,i.jsx)(D.Title,{center:!1,children:"Use your Edge Config"}),(0,i.jsxs)(D.Inset,{last:!0,children:[(0,i.jsxs)(m.x,{children:["The Edge Config ",(0,i.jsx)("b",{children:G.slug})," was successfully connected to your ",1===N.length?"project":"projects","."]}),(0,i.jsx)(H.L,{y:1.5}),(0,i.jsx)(m.x,{color:"accents-6",children:(0,i.jsx)("b",{children:"You can now use it in code"})}),(0,i.jsx)(H.L,{y:.25}),(0,i.jsx)(m.x,{children:"1. Pull your latest environment variables"}),(0,i.jsx)(H.L,{inline:!0,x:.5}),(0,i.jsx)(Q.ZM,{children:"vc pull"}),(0,i.jsx)(H.L,{y:.5}),(0,i.jsx)(m.x,{children:"2. Install our package"}),(0,i.jsx)(H.L,{inline:!0,x:.5}),(0,i.jsx)(Q.ZM,{children:"npm install @vercel/edge-config"}),(0,i.jsx)(H.L,{y:.5}),(0,i.jsx)(m.x,{children:"3. Use in code"}),(0,i.jsx)(Q.EK,{filename:"middleware.js",children:`import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/welcome' };

export function middleware() {
  const greeting = await get('greeting');
  return NextResponse.json(greeting);
}`}),(0,i.jsx)(H.L,{y:.5})]})]})}),(0,i.jsx)(D.Actions,{children:(0,i.jsx)(D.Action,{async onClick(){await n(G)},type:"button",children:"Done"})})]}):(0,i.jsx)(D.Modal,{active:t,allowOverflow:!0,onClickOutside:r,width:480,children:(0,i.jsxs)("form",{async onSubmit(e){if(e.preventDefault(),0===N.length)return;let t=await (0,F.I)(`${M.PL}/${G.id}/token${(0,A.c)({teamId:o?.id})}`,{method:"POST",throwOnHTTPError:!0,body:{label:"web-app-token"}});await Promise.all(N.map(async e=>{let n=null;if(!e.env?.some(e=>e.edgeConfigId===G.id)&&(e.env?.some(e=>"EDGE_CONFIG"===e.key)?(n=G.slug.toUpperCase().replace(/-/g,"_"),e.env.some(e=>e.key===n)&&(n=null)):n="EDGE_CONFIG",n))return(0,q.mT)(e.id,[{name:n,value:`https://edge-config.vercel.com/${G.id}?token=${t.token}`,type:J.t.Encrypted,target:[J.r.Production,J.r.Preview,J.r.Development]}],o?.id)})),R.success(1===N.length?"Connected Edge Config to Project":"Connected Edge Config to Projects"),z(!0)},children:[(0,i.jsxs)(D.Body,{children:[(0,i.jsxs)(g.Z,{gap:6,children:[(0,i.jsx)(D.Title,{center:!1,children:"Connect Edge Config to Projects"}),(0,i.jsxs)(D.Inset,{last:!0,children:[(0,i.jsxs)(m.x,{children:["The Edge Config ",(0,i.jsx)("b",{children:G.slug})," was created successfully."]}),(0,i.jsx)(H.L,{y:1.5}),(0,i.jsx)(m.x,{children:"Connect it to your projects"}),(0,i.jsx)(H.L,{y:.5}),(0,i.jsxs)("div",{children:[(0,i.jsx)($.y,{account:o?o.slug:l?.user?.username,disabled:!1,onSelect(e){e&&T([...N,e])},selected:N}),(0,i.jsx)(H.L,{y:.5}),(0,i.jsx)(en,{createdEdgeConfig:G,isLoading:!1,projects:N,setErrorMessage:S,setProjects:T}),(0,i.jsx)(H.L,{y:.25}),(0,i.jsx)(m.x,{color:"accents-6",size:12,children:"This will create a token and store it as an environment variable on your selected projects. You can then read the Edge Config from your code."})]})]})]}),I?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H.L,{}),(0,i.jsx)(Y.Z,{error:I})]}):null]}),(0,i.jsxs)(D.Actions,{children:[(0,i.jsx)(D.Action,{async onClick(){await n(G)},children:"Skip"}),(0,i.jsx)(D.Action,{disabled:0===N.length,loading:_,type:"submit",children:"Connect"})]})]})}):(0,i.jsx)(D.Modal,{active:t,allowOverflow:!0,onClickOutside:r,width:480,children:(0,i.jsxs)("form",{onSubmit:e=>void V(e),children:[(0,i.jsx)(D.Body,{children:(0,i.jsxs)(g.Z,{gap:6,children:[(0,i.jsx)(D.Title,{center:!1,children:"Create Edge Config Store"}),(0,i.jsx)(D.Inset,{last:!0,children:(0,i.jsxs)(g.Z,{gap:6,children:[(0,i.jsx)(g.Z,{gap:3,children:(0,i.jsx)(P.I,{"aria-label":"Edge Config Name",disabled:_||x,error:k,label:"Edge Config Name",onChange:e=>f(e.currentTarget.value),ref:X,value:j,width:"100%"})}),x?(0,i.jsx)(O.Z,{className:K()["warning-note"],fill:!0,label:!1,type:"warning",variant:"contrast",children:(0,i.jsxs)(g.Z,{align:"center",direction:"row",gap:4,style:{padding:1},children:[(0,i.jsx)(W.Z,{fill:!0,size:"16",style:{flexShrink:0}}),(0,i.jsxs)(g.Z,{align:"start",gap:2,children:[(0,i.jsx)(m.x,{as:"p",color:"inherit",children:"You have reached the maximum number of Edge Configs for your plan."}),(0,i.jsxs)(m.x,{as:"p",color:"inherit",children:["Upgrade your plan or"," ",(0,i.jsx)(p.r,{external:!0,href:"https://vercel.com/contact/sales",variant:"blend",children:"contact our sales"})," ","team to request a higher limit."]})]})]})}):null]})})]})}),(0,i.jsxs)(D.Actions,{children:[(0,i.jsx)(D.Action,{onClick:r,children:"Cancel"}),(0,i.jsx)(D.Action,{disabled:""===j.trim()||x,loading:_,type:"submit",children:"Create"})]})]})})}var es=n(548491),er=n(573757);async function ea(e,t,n,i){let s=null;return e.env?.some(t=>t.edgeConfigId===e.id)?null:(e.env?.some(e=>"EDGE_CONFIG"===e.key)?(s=t.slug.toUpperCase().replace(/-/g,"_"),e.env.some(e=>e.key===s)&&(s=null)):s="EDGE_CONFIG",s)?(await (0,q.mT)(e.id,[{name:s,value:`https://edge-config.vercel.com/${t.id}?token=${n}`,type:J.t.Encrypted,target:[J.r.Production,J.r.Preview,J.r.Development]}],i?.id),s):null}function el(e){let{active:t,navigateToEdgeConfig:n,onClickOutside:r,showSuccessToast:a,project:l,onAnimationDone:o}=e,{data:c}=(0,C.a)(),{team:d}=(0,v.t7)(),{data:u,mutate:h}=(0,b.FT)(),{mutate:x}=(0,L.kY)(),j=d?d.billing?.plan:c?.user?.billing?.plan,_=!!j&&!!u&&u.length>=(0,E.HX)(j),[w,k]=(0,s.useState)(""),[Z,I]=(0,s.useState)(!1),[S,N]=(0,s.useState)(null),[T,$]=(0,s.useState)(null),[B,z]=(0,s.useState)(null),G=(0,y.e1)(),U=(0,s.useCallback)(async e=>{if(e.preventDefault(),l){N(null),I(!0);try{let t=await (0,F.I)(`${M.PL}${(0,A.c)({teamId:d?.id})}`,{method:"POST",throwOnHTTPError:!0,body:JSON.stringify({slug:w,items:{greeting:"hello world"}})}),n=await (0,F.I)(`${M.PL}/${t.id}/token${(0,A.c)({teamId:d?.id})}`,{method:"POST",throwOnHTTPError:!0,body:{label:"web-app-token"}}),i=await ea(l,t,n.token,d);await x(`${M.PL}/${encodeURIComponent(t.id)}${(0,A.c)({teamId:d?.id})}`,t,{revalidate:!1}),$(t),z(i),a(t),await h(e=>e?[...e,t]:[t],{revalidate:!1}),I(!1)}catch(s){s instanceof Error?N(s.message):G.error("Unexpected error while creating Edge Config"),I(!1)}}},[x,h,l,a,w,d,G]),R=(0,s.useRef)(null);return((0,s.useEffect)(()=>{setTimeout(()=>{t&&(R.current?.focus(),R.current?.select())},0)},[t]),T)?(0,i.jsxs)(D.Modal,{active:t,allowOverflow:!0,onClickOutside:()=>void 0,width:480,children:[(0,i.jsx)(D.Body,{children:(0,i.jsxs)(g.Z,{gap:6,children:[(0,i.jsx)(D.Title,{children:"Edge Config Created"}),(0,i.jsxs)(D.Inset,{last:!0,children:[(0,i.jsxs)(f.JH,{size:"sm",children:[(0,i.jsx)(f.Sn,{description:(0,i.jsx)(m.x,{monospace:!0,children:T.slug})}),(0,i.jsx)(f.Sn,{avatar:(0,i.jsx)(es.Z,{}),right:!0})]}),(0,i.jsx)(H.L,{y:1}),(0,i.jsx)(m.x,{children:"In order to make your Edge Config accessible from your project we have:"}),(0,i.jsx)(H.L,{y:.25}),(0,i.jsxs)(er.UL,{children:[(0,i.jsxs)(er.LI,{children:["Created a token called ",(0,i.jsx)(Q.ZM,{children:"web-app-token"})]}),(0,i.jsxs)(er.LI,{children:["Stored a connection string based on that token in an environment variable called ",(0,i.jsx)(Q.ZM,{children:B})]})]}),(0,i.jsx)(H.L,{y:.25}),(0,i.jsx)(m.x,{children:"Both the token and the Environment Variable can be managed later from your Edge Config settings."})]})]})}),(0,i.jsx)(D.Actions,{children:(0,i.jsx)(D.Action,{async onClick(){await n(T)},type:"button",children:"Done"})})]}):(0,i.jsx)(D.Modal,{active:t,allowOverflow:!0,onAnimationDone:o,onClickOutside:r,width:480,children:(0,i.jsxs)("form",{onSubmit:e=>void U(e),children:[(0,i.jsx)(D.Body,{children:(0,i.jsxs)(g.Z,{gap:6,children:[(0,i.jsx)(D.Title,{center:!1,children:"Create Edge Config Store"}),(0,i.jsx)(D.Inset,{last:!0,children:(0,i.jsxs)(g.Z,{gap:6,children:[(0,i.jsx)(g.Z,{gap:3,children:(0,i.jsx)(P.I,{"aria-label":"Edge Config Name",disabled:Z||_,error:S,label:"Edge Config Name",onChange:e=>k(e.currentTarget.value),ref:R,value:w,width:"100%"})}),_?(0,i.jsx)(O.Z,{className:K()["warning-note"],fill:!0,label:!1,type:"warning",variant:"contrast",children:(0,i.jsxs)(g.Z,{align:"center",direction:"row",gap:4,style:{padding:1},children:[(0,i.jsx)(W.Z,{fill:!0,size:"16",style:{flexShrink:0}}),(0,i.jsxs)(g.Z,{align:"start",gap:2,children:[(0,i.jsx)(m.x,{as:"p",color:"inherit",children:"You have reached the maximum number of Edge Configs for your plan."}),(0,i.jsxs)(m.x,{as:"p",color:"inherit",children:["Upgrade your plan or"," ",(0,i.jsx)(p.r,{external:!0,href:"https://vercel.com/contact/sales",variant:"blend",children:"contact our sales"})," ","team to request a higher limit."]})]})]})}):null]})})]})}),(0,i.jsxs)(D.Actions,{children:[(0,i.jsx)(D.Action,{onClick:r,children:"Cancel"}),(0,i.jsx)(D.Action,{disabled:""===w.trim()||_,loading:Z,type:"submit",children:"Create"})]})]})})}var eo=n(618541),ec=n(955913),ed=n(917349),eu=n(695913);function eg(e){let{team:t,edgeConfig:n,userData:r,isProjectRoute:l}=e,o=t?t.billing?.plan:r?.user?.billing?.plan,c=(0,k.ZP)({search:void 0,limit:3,latestDeployments:0,edgeConfigId:n.id}),u=t?`/dashboard/${t.slug}/stores/edge-config/${n.id}/items`:`/dashboard/stores/edge-config/${n.id}/items`;return(0,i.jsxs)(f.JH,{thumbnail:(0,i.jsx)(p.r,{href:u,children:(0,i.jsx)(g.Z,{align:"center",children:(0,i.jsx)(j.Z,{})})}),children:[(0,i.jsx)(f.Sn,{description:(0,i.jsx)(p.r,{href:u,children:(0,i.jsx)(w.Z,{style:{fontSize:12},children:n.id})}),title:(0,i.jsx)(p.r,{href:u,children:n.slug})}),l?null:c.data?(0,i.jsx)(f.Sn,{description:0===c.data.projects.length?(0,i.jsx)(m.x,{color:"accents-4",children:(0,i.jsx)("em",{children:"Not used by any projects"})}):(0,i.jsx)(m.x,{children:c.data.projects.map((e,n,a)=>(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(p.r,{href:`/${t?t.slug:r?.user?.username||""}/${e.name}`,variant:"secondary",children:e.name}),n===a.length-1?null:(0,i.jsx)("span",{children:", "})]},e.id))}),label:!0,title:"Used by"}):(0,i.jsx)(N.f.Provider,{value:!0,children:(0,i.jsx)(f.Sn,{description:"loading this",label:!0,title:"Used by"})}),(0,i.jsx)(f.Sn,{description:(0,i.jsxs)(g.Z,{align:"center",as:"span",direction:"row",gap:2,children:[(0,i.jsx)("span",{children:a()(n.sizeInBytes)}),(0,i.jsx)(d.Z,{disableTriggers:!o,text:o?`You are using ${a()(n.sizeInBytes)} out of ${a()((0,E.io)(o))}`:void 0,children:(0,i.jsx)(_.Z,{max:o?(0,E.io)(o)/1024:8,value:Math.round(n.sizeInBytes/1024),width:30})})]}),label:!0,right:!0})]})}function eh(e){let{isProjectRoute:t}=e;return(0,i.jsxs)(f.JH,{placeholder:!0,thumbnail:(0,i.jsx)(g.Z,{align:"center",children:(0,i.jsx)(j.Z,{})}),children:[(0,i.jsx)(f.Sn,{description:"-".repeat(33),title:"no-slug"}),t?null:(0,i.jsx)(f.Sn,{description:"loading this",label:!0,title:"Used by"}),(0,i.jsx)(f.Sn,{description:(0,i.jsxs)(g.Z,{align:"center",direction:"row",gap:2,children:[(0,i.jsx)("span",{children:"00 kb"}),(0,i.jsx)(_.Z,{max:100,value:0,width:30})]}),label:!0,right:!0})]})}function ex(){let e=(0,l.useRouter)(),t=e.pathname.startsWith("/[teamSlug]/[project]"),{data:n}=(0,C.a)(),{team:r,isTeam:a,isReady:o}=(0,v.t7)(),{can:d,isLoading:j}=(0,eu.ZP)(),{data:f,mutate:_}=(0,b.FT)(),[w,E]=(0,s.useState)(e.query.edgeConfigId??""),k=(0,y.e1)(),Z=(0,ec.PY)(t?e.query.project:null),I=(0,s.useMemo)(()=>t?f?.filter(e=>Z.data?.env?.some(t=>t.edgeConfigId===e.id)):f,[f,Z,t]),N=e.query.teamSlug,T=(0,eo.A)(t?`edgeConfigPlaceholderCount:${N}:${e.query.project}`:`edgeConfigPlaceholderCount:${N}`,I?.length),L=(0,s.useMemo)(()=>({async mutateEdgeConfigList(e){await _(t=>t?[...t,e]:[e])},showSuccessToast(){k.success("Created Edge Config successfully")},async navigateToEdgeConfig(t){await e.push(a?`/dashboard/${N}/stores/edge-config/${t.id}/items`:`/dashboard/stores/edge-config/${t.id}/items`)}}),[_,k,a,N,e]),P=(0,s.useMemo)(()=>({...L,project:Z.data||null}),[L,Z]),[D,F]=function(e){let{navigateToEdgeConfig:t,showSuccessToast:n}=e,[r,a]=(0,s.useState)(!1),l=(0,s.useCallback)(()=>{a(!1)},[]),o=(0,s.useCallback)(()=>(0,i.jsx)(ei,{active:r,navigateToEdgeConfig:t,onClickOutside:l,showSuccessToast:n}),[r,l,t,n]),c=(0,s.useCallback)(()=>{a(!0)},[]);return(0,s.useMemo)(()=>[o,c],[o,c])}(L),[M,A]=function(e){let{navigateToEdgeConfig:t,showSuccessToast:n,project:i}=e,[r,a]=(0,s.useState)(!1),l=(0,s.useCallback)(()=>{a(!1)},[]),o=(0,s.useCallback)(()=>{a(!0)},[]),[c,d]=(0,s.useState)(0),u=(0,s.useCallback)(()=>{d(e=>e+1)},[d]);return[o,{active:r,navigateToEdgeConfig:t,onClickOutside:l,project:i,showSuccessToast:n,key:String(c),onAnimationDone:u}]}(P),O=(0,s.useMemo)(()=>I?.filter(e=>e.slug.includes(w)||e.id.includes(w))??[],[w,I]),$=!j&&o,B=d(eu.aU.List,eu._z.EdgeConfig);return(0,i.jsxs)(c.Z,{buttons:t?(0,i.jsx)(u.z,{onClick(){M()},typeName:"button",children:"Create Project Store"}):(0,i.jsx)(u.z,{onClick:()=>F(),typeName:"button",children:"Create Store"}),title:(0,i.jsxs)(g.Z,{gap:4,children:[(0,i.jsxs)(g.Z,{direction:"row",gap:3,children:[(0,i.jsx)(m.x,{as:"h1",size:32,weight:500,children:"Edge Config"}),(0,i.jsx)(x.Z,{})]}),t?(0,i.jsxs)(m.x,{color:"accents-5",children:["Stores used by this project."," ",(0,i.jsx)(p.r,{href:r?`/dashboard/${r.slug}/stores/edge-config`:"/dashboard/stores/edge-config",type:"highlight",children:"View all Edge Config stores"}),"."]}):(0,i.jsxs)(m.x,{color:"accents-5",children:["Ultra low-latency data you can read from your projects."," ",(0,i.jsx)(p.r,{external:!0,href:"/docs/concepts/edge-network/edge-config",type:"highlight",children:"Learn More"})]})]}),children:[t?(0,i.jsx)(el,{...A}):(0,i.jsx)(D,{}),B||!$?(0,i.jsx)(g.Z,{gap:4,children:f&&0===f.length?(0,i.jsx)(g.Z,{gap:1,children:t?(0,i.jsx)(S,{action:"Manage Edge Configs",href:r?`/dashboard/${r.slug}/stores/edge-config`:"/dashboard/stores/edge-config",subtitle:"Create a new Edge Config or connect an existing Edge Config to this project",title:"No Edge Config connected"}):(0,i.jsx)(S,{onClick:()=>F()})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{onChange(e){E(e.target.value)},placeholder:"Search stores ...",value:w}),(0,i.jsx)("div",{children:$&&I?O.map(e=>(0,i.jsx)(eg,{edgeConfig:e,isProjectRoute:t,team:r,userData:n},e.id)):(0,i.jsx)(i.Fragment,{children:Array.from({length:null===T?0:T}).map((e,n)=>(0,i.jsx)(eh,{isProjectRoute:t},n))})})]})}):(0,i.jsx)(ed._,{resource:"Edge Config",team:r})]})}var em=(0,o.ZP)(ex,{active:"Edge Config",pageName:"Edge Config",pageProps:{noIndex:!0}})},769354:function(e){e.exports={wrapper:"status-dot_wrapper__2B_jD",status:"status-dot_status__D6JuC",ready:"status-dot_ready__iYoet",error:"status-dot_error__B8GyE",building:"status-dot_building__o_RWi","status-label":"status-dot_status-label__HAkbt"}},685911:function(e){e.exports={container:"switchers_container__PA1Op",dropdownTrigger:"switchers_dropdownTrigger__QqInt",langTrigger:"switchers_langTrigger__c0_0g",dropdown:"switchers_dropdown__xarlb",dropdownItem:"switchers_dropdownItem__CK1oI",darkImage:"switchers_darkImage__qr8ru",lightImage:"switchers_lightImage__29bjI",frameworkContainer:"switchers_frameworkContainer__Q1F7U",frameworksList:"switchers_frameworksList__UtXFi",underline:"switchers_underline___Xq18"}},207850:function(e){e.exports={pre:"code_pre__0JNjw",code:"code_code__34cHb",codeContainer:"code_codeContainer__dI_5V",filename:"code_filename__b_YQU",noTopBorder:"code_noTopBorder__N31mA",path:"code_path__eRWLD",noWrap:"code_noWrap__Fx3jT",disabled:"code_disabled__gLX_b",copy:"code_copy__rcIH6",dark:"code_dark__ZStKZ",noFilepath:"code_noFilepath__xSx_w",langAndCopy:"code_langAndCopy__SDxJJ",tooltip:"code_tooltip__63T4m"}},86723:function(e){e.exports={empty:"empty-edge-configs_empty__qGMzQ"}},268258:function(e){e.exports={ul:"list_ul__6hDBW",ol:"list_ol__R8ead",li:"list_li__E3ptA"}},400246:function(e){e.exports={code:"inline_code__eh_jc",nowrap:"inline_nowrap__DF6bB"}},59174:function(e){e.exports={code:"syntax-theme_code__TkcxH"}},470596:function(e){e.exports={"warning-note":"warning-note_warning-note__bb7_x","warning-note-link":"warning-note_warning-note-link__ad_Tb"}},250916:function(e){"use strict";let t=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],n=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],s=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],r=(e,t,n)=>{let i=e;return"string"==typeof t||Array.isArray(t)?i=e.toLocaleString(t,n):(!0===t||void 0!==n)&&(i=e.toLocaleString(void 0,n)),i};e.exports=(e,a)=>{let l;if(!Number.isFinite(e))throw TypeError(`Expected a finite number, got ${typeof e}: ${e}`);a=Object.assign({bits:!1,binary:!1},a);let o=a.bits?a.binary?s:i:a.binary?n:t;if(a.signed&&0===e)return` 0 ${o[0]}`;let c=e<0,d=c?"-":a.signed?"+":"";if(c&&(e=-e),void 0!==a.minimumFractionDigits&&(l={minimumFractionDigits:a.minimumFractionDigits}),void 0!==a.maximumFractionDigits&&(l=Object.assign({maximumFractionDigits:a.maximumFractionDigits},l)),e<1){let u=r(e,a.locale,l);return d+u+" "+o[0]}let g=Math.min(Math.floor(a.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),o.length-1);e/=Math.pow(a.binary?1024:1e3,g),l||(e=e.toPrecision(3));let h=r(Number(e),a.locale,l),x=o[g];return d+h+" "+x}},431297:function(e,t,n){"use strict";var i=n(57654),s=n(519434);n(260360),n(162675),n(200354),n(238382);var r=n(652983);n(68193),n(12043),n(336117),n(996841),n(63730),r.Component;var a=(0,s.m)(i.S);t.ZP=a},322053:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var i=n(652983),s=n(285850),r=n(213228),a=n(196743);function l({children:e,isValidProp:t,...n}){t&&(0,r.K)(t),(n={...(0,i.useContext)(s._),...n}).isStatic=(0,a.h)(()=>n.isStatic);let l=(0,i.useMemo)(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return i.createElement(s._.Provider,{value:l},e)}}}]);
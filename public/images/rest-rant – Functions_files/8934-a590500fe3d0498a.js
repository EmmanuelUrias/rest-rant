(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8934],{4898:function(e,t,n){"use strict";var i=n(397458),r=n(425789),s=n(481437),a=n(113745),l=n(780356),o=n(251381),c=n.n(o);let d=e=>{let{children:t,title:n,description:o,message:d,controls:u,hideControlsOnMobile:h,actions:x,darkFold:m,buttons:p,buttonsStackDirection:g,truncateTitle:f,noBorder:j=!1}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("header",{className:(0,r.Z)(c().wrapper,{[c().border]:!j}),children:[(0,i.jsx)(l.Z,{wrapper:!0,children:(0,i.jsxs)(a.Z,{align:{sm:"stretch",md:"flex-start",lg:"center"},className:c()["title-container"],direction:{sm:"column",lg:"row"},gap:{sm:6,md:6,lg:10},children:[(0,i.jsxs)(a.Z,{direction:"column",flex:1,gap:4,style:{minWidth:f?0:void 0},children:["string"==typeof n?(0,i.jsx)(s.x,{as:"h1",size:32,title:f?n:void 0,truncate:f,weight:500,wrap:!f,children:n}):n,!!o&&(0,i.jsx)(s.x,{color:"accents-5",children:o})]}),!!p&&(0,i.jsx)(a.Z,{direction:g||{sm:"column",md:"row",lg:"row"},gap:{sm:4,md:4,lg:4},children:p})]})}),d?(0,i.jsx)("div",{className:c().message,children:d}):null,u||x?(0,i.jsxs)("div",{className:(0,r.Z)(c().menu,{[c().center]:!u||!x||h}),children:[u?(0,i.jsx)("div",{className:(0,r.Z)(c().controls,{[c().hideOnMobile]:h}),children:u}):(0,i.jsx)("div",{}),x?(0,i.jsx)("div",{className:c().actions,children:x}):(0,i.jsx)("div",{})]}):null]}),m?(0,i.jsx)("div",{className:c()["child-wrapper"],children:(0,i.jsx)("div",{className:c().main,children:t})}):t?(0,i.jsx)("div",{className:c().main,children:t}):null]})};t.Z=d},928:function(e,t,n){"use strict";var i=n(397458),r=n(577389),s=n(685108),a=n(955913),l=n(168112);let o=()=>{let e=(0,r.useRouter)(),{data:t}=(0,a.PY)(e.query.project),n=(0,l.F)(t);return t?.name&&n?(0,i.jsxs)(s.Z,{fill:!0,label:!1,type:"warning",variant:"contrast",children:["The Project ",(0,i.jsx)("b",{children:t.name})," is being transferred into"," ",(0,i.jsx)("b",{children:n.name}),"."]}):(0,i.jsx)(s.Z,{fill:!0,label:!1,type:"warning",variant:"contrast",children:"\xa0"})};t.Z=o},218557:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var i=n(455522),r=n(129319),s=n(854146);let a=()=>{let{isLoading:e,isTeam:t}=(0,s.Z)(),n=(0,r.xk)(),a=(0,i.tX)();return e?{isReady:!1,value:null,mutate:()=>Promise.resolve({isReady:!1,value:null})}:t?n:a}},491241:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(397458),r=n(425789),s=n(821505),a=n.n(s),l=n(652983),o=n(89378),c=n(113745),d=n(14313),u=n(481437),h=n(854146),x=n(659071),m=n.n(x);function p(e){let{links:t,sticky:n=!0,stickyTop:s=0,className:a,showAccountSection:o}=e,c=(0,h.Z)(),u=(0,l.useMemo)(()=>t.filter(e=>!e.inAccountSection),[t]),x=(0,l.useMemo)(()=>t.filter(e=>e.inAccountSection),[t]);return(0,i.jsx)("div",{className:(0,r.Z)(a,m().sidebar),"data-geist-sidebar":"","data-version":"v1",style:n?{position:"sticky",top:s}:void 0,children:o&&x.filter(e=>!e.hide).length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{first:!0,text:"TEAM",children:(0,i.jsx)(d.qE,{hash:c.team?.avatar,size:20,teamId:c.team?.id})}),u.map(e=>(0,i.jsx)(g,{...e},e.text)),(0,i.jsx)(f,{text:"ACCOUNT",children:(0,i.jsx)(d.qE,{hash:c.user?.avatar,size:20,username:c.user?.username})}),x.map(e=>(0,i.jsx)(g,{...e},e.text))]}):u.map(e=>(0,i.jsx)(g,{...e},e.text))})}function g(e){let{href:t,as:n,text:s,active:l,disabled:c,tooltip:d,hide:u,...h}=e;if(u)return null;if(t){let x=(0,i.jsx)(a(),{as:n,href:t,legacyBehavior:!0,shallow:!1,children:(0,i.jsx)("a",{className:(0,r.Z)(m().entry,{[m().active]:l,[m().disabled]:c}),"data-testid":(0,o.C)("settings","sidebar",s.toLowerCase()),...h,children:s})},t);return d?(0,i.jsxs)("div",{style:{position:"relative"},children:[x,d]},`tooltip_${t}`):x}return null}function f(e){let{children:t,text:n,first:s}=e;return(0,i.jsxs)(c.Z,{align:"center",className:(0,r.Z)({[m().section]:!0,[m().first]:s}),direction:"row",gap:2,children:[t,(0,i.jsx)(u.x,{color:"accents-5",lineHeight:20,size:12,weight:600,children:n})]})}},708934:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var i=n(397458),r=n(465635),s=n.n(r),a=n(652983),l=n(821505),o=n.n(l),c=n(577389),d=n(780356),u=n(577072),h=n(491241),x=n(997646),m=n(4898),p=n(928),g=n(187589),f=n(116669),j=n(367546),_=n(955913),v=n(168112),b=n(82435),y=n(771729),w=n(129319),Z=n(476795),N=n(218557);let S=e=>{let{showAdministratorsTab:t,showLogDrains:n,showWebhooks:i,showDeploymentProtectionTab:r}=e;return[{text:"General",path:"/general",default:!0},{text:"Domains",path:"/domains"},n&&{text:"Log Drains",path:"/log-drains"},i&&{text:"Webhooks",path:"/webhooks"},{text:"Integrations",path:"/integrations"},{text:"Git",path:"/git"},{text:"Functions",path:"/functions"},{text:"Environment Variables",path:"/environment-variables"},r&&{text:"Deployment Protection",path:"/deployment-protection"},t&&{text:"Administrators",path:"/administrators"},{text:"Security",path:"/security"},{text:"Advanced",path:"/advanced"}].filter(e=>e)},A=()=>{let{team:e,isReady:t}=(0,Z.t7)(),{isRoleEnabled:n}=(0,y.G)(w.mL.ADMIN),{isReady:i,value:r}=(0,w.r4)(),{isReady:s,value:l}=(0,w.CX)(),{isReady:o,value:c}=(0,N.M)(),d=t&&e?.billing?.plan==="enterprise"&&n,u=(0,a.useMemo)(()=>t&&o?S({showAdministratorsTab:d,showLogDrains:Boolean(l&&s),showWebhooks:Boolean(i&&r),showDeploymentProtectionTab:Boolean(c)}):[],[t,o,d,l,s,i,r,c]);return u},R=(0,a.memo)(e=>{let{isMobile:t,showMenu:n}=e,r=(0,c.useRouter)(),{teamSlug:a,project:l}=r.query,u=A(),m="/[teamSlug]/[project]/settings",p=`/${a?.toString()??""}/${encodeURIComponent(l?.toString()??"")}/settings`;return t?n?(0,i.jsxs)("div",{className:"jsx-d77735993e534ed1",children:[u.map(e=>(0,i.jsx)(o(),{as:p+e.path,href:m+e.path,legacyBehavior:!0,children:(0,i.jsx)("a",{className:"jsx-d77735993e534ed1 geist-reset",children:e.text})},e.path)),(0,i.jsx)(s(),{id:"d77735993e534ed1",children:"a.jsx-d77735993e534ed1{border-bottom:1px solid var(--accents-2);display:block;padding:var(--geist-gap)0}"})]}):(0,i.jsx)(o(),{as:p,href:m,legacyBehavior:!0,children:(0,i.jsxs)("a",{className:"jsx-9fe082b4334641b2 geist-reset",children:[(0,i.jsxs)(d.Z,{row:!0,vcenter:!0,children:[(0,i.jsx)(x.Z,{size:20}),(0,i.jsx)("span",{className:"jsx-9fe082b4334641b2",children:"Project Settings"})]}),(0,i.jsx)(s(),{id:"9fe082b4334641b2",children:"a.jsx-9fe082b4334641b2{color:var(--geist-foreground);color:var(--geist-foreground);padding:var(--geist-gap);margin:0 var(--geist-gap-negative);border-bottom:1px solid var(--accents-2)}span.jsx-9fe082b4334641b2{margin-left:.75em;font-size:1em;font-weight:600;line-height:1.5;letter-spacing:-.020625rem}"})]})}):(0,i.jsx)(h.Z,{links:u.map(e=>({text:e.text,href:m+e.path,as:p+e.path,active:r.route===m+e.path||r.route===m&&!0===e.default})),stickyTop:64})});function M(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=function(e,t){let n=()=>{let n=(0,c.useRouter)(),r=(0,j.Av)(),s="/[teamSlug]/[project]/settings"===n.route,a=!r||!s,{data:l,...o}=(0,_.PY)(n.query.project?.toString());(0,b.Z)(o.error);let h=(0,v.FA)(l);return(0,i.jsxs)(i.Fragment,{children:[h?(0,i.jsxs)(d.Z,{wrapper:!0,children:[(0,i.jsx)(u.L,{y:2}),(0,i.jsx)(p.Z,{})]}):null,(0,i.jsxs)(g.d.Provider,{value:h,children:[(0,i.jsx)(m.Z,{title:"Project Settings"}),(0,i.jsx)(u.L,{y:r?0:2}),t?(0,i.jsx)(e,{}):(0,i.jsxs)(d.Z,{direction:["column","column","row"],wrapper:!0,children:[(0,i.jsx)(d.Z,{flex:"0 0 auto",children:(0,i.jsx)(R,{isMobile:Boolean(r),showMenu:!a})}),(0,i.jsx)(d.Z,{children:a?(0,i.jsx)(e,{}):null})]})]}),(0,i.jsx)(u.L,{y:2})]})};return n.displayName="SectionWithSidebar",n}((0,a.memo)(e),n);return r.getLayout=function(){return(0,i.jsx)(f.BZ,{Section:r,opts:{pageName:"Project Settings",active:"Settings",requireAuth:!0,pageProps:{noIndex:!0}}})},r}R.displayName="ProjectSettingsSidebar"},82435:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(187058);function r(e){if(!(!e||"network_error"===e.code||"rate_limited"===e.code||"too_many_requests"===e.code||"cancelled"===e.message||(0,i.I)())&&504!==e.status&&!e.saml)throw e.isDashboard=!0,e}},168112:function(e,t,n){"use strict";n.d(t,{F:function(){return s},FA:function(){return r}});var i=n(476795);function r(e){return!!e&&Boolean(e.transferStartedAt&&!e.transferCompletedAt)}function s(e){let{team:t,teams:n}=(0,i.t7)();if(!e)return null;let{transferToAccountId:r}=e;if(r){let s=(n||[]).find(e=>e.id===r);return s||null}return t}},771729:function(e,t,n){"use strict";n.d(t,{G:function(){return s}});var i=n(129319),r=n(476795);function s(e){let{team:t,isReady:n}=(0,r.t7)(),{isReady:s,value:a}=(0,i.wv)(e),l=t?.billing?.plan==="enterprise";return{isReady:n&&s,isRoleEnabled:Boolean(a)&&l}}},251381:function(e){e.exports={wrapper:"full-heading_wrapper__0LLP7",border:"full-heading_border__cFCCM",icon:"full-heading_icon__b3nxX","title-container":"full-heading_title-container__JNHpj",header:"full-heading_header__Y4h9C",menu:"full-heading_menu__IR0M2",message:"full-heading_message__6KUQO",main:"full-heading_main__QZy4e",title:"full-heading_title__UBfpI",actions:"full-heading_actions__hgtUa","child-wrapper":"full-heading_child-wrapper__mXR8A",controls:"full-heading_controls__yaXqb",hideOnMobile:"full-heading_hideOnMobile___boHc",center:"full-heading_center__B4vrp","title-container-with-actions":"full-heading_title-container-with-actions__8ASNT"}},659071:function(e){e.exports={sidebar:"sidebar_sidebar__HrMlR",entry:"sidebar_entry__HAHlY",active:"sidebar_active__GiQmp",disabled:"sidebar_disabled__Bry0n",section:"sidebar_section__mxLAx",first:"sidebar_first__8Qn26"}}}]);
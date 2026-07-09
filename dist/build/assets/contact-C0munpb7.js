import{f as e,h as t,i as n,n as r,o as i,p as a,r as o,s,t as c}from"./main-footer-CpqzGuOS.js";var l=n(`CircleCheck`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),u=n(`CircleX`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),d=n(`TriangleAlert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),f=t(a(),1),p=e(),m=s();function h(){let e=(0,p.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,m.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-white`,children:(0,m.jsx)(`div`,{className:`loader`})}),e[0]=t):t=e[0],t}var g=(0,f.createContext)(null),_={success:{color:`#10b981`,bg:`#ecfdf5`,icon:l},error:{color:`#f43f5e`,bg:`#fff1f2`,icon:u},warning:{color:`#f59e0b`,bg:`#fffbeb`,icon:d}},v=0;function y({children:e}){let[t,n]=(0,f.useState)([]),r=(0,f.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e))},[]),i=(0,f.useCallback)((e,t={})=>{let r=++v,i={id:r,message:e,title:t.title,type:t.type||`success`,duration:t.duration??5e3};return n(e=>[i,...e]),r},[]),a={show:i,success:(e,t)=>i(e,{...t,type:`success`}),error:(e,t)=>i(e,{...t,type:`error`}),warning:(e,t)=>i(e,{...t,type:`warning`})};return(0,m.jsxs)(g.Provider,{value:a,children:[e,(0,m.jsx)(x,{toasts:t,onDismiss:r}),(0,m.jsx)(C,{})]})}function b(){let e=(0,f.useContext)(g);if(!e)throw Error(`useToast must be used within a ToastProvider`);return e}function x(e){let t=(0,p.c)(7),{toasts:n,onDismiss:r}=e,i;if(t[0]!==r||t[1]!==n){let e;t[3]===r?e=t[4]:(e=e=>(0,m.jsx)(S,{toast:e,onDismiss:()=>r(e.id)},e.id),t[3]=r,t[4]=e),i=n.map(e),t[0]=r,t[1]=n,t[2]=i}else i=t[2];let a;return t[5]===i?a=t[6]:(a=(0,m.jsx)(`div`,{className:`toast-viewport`,"aria-live":`polite`,"aria-atomic":`false`,children:i}),t[5]=i,t[6]=a),a}function S(e){let t=(0,p.c)(46),{toast:n,onDismiss:r}=e,{type:i,title:a,message:s,duration:c}=n,l=_[i]||_.success,u=l.icon,[d,g]=(0,f.useState)(!1),[v,y]=(0,f.useState)(!1),[b,x]=(0,f.useState)(`loading`),[S,C]=(0,f.useState)(`100%`),w=(0,f.useRef)(null),T=(0,f.useRef)(null),E;t[0]===r?E=t[1]:(E=()=>{g(!0),window.setTimeout(r,220)},t[0]=r,t[1]=E);let D=E,O,k;t[2]===b?(O=t[3],k=t[4]):(O=()=>{if(b!==`loading`)return;let e=window.setTimeout(()=>x(`toast`),1500);return()=>window.clearTimeout(e)},k=[b],t[2]=b,t[3]=O,t[4]=k),(0,f.useEffect)(O,k);let A,j;t[5]!==c||t[6]!==v||t[7]!==b?(A=()=>{if(!(b!==`toast`||v)&&c>0){let e=window.setTimeout(()=>C(`0%`),50);return()=>window.clearTimeout(e)}},j=[b,v,c],t[5]=c,t[6]=v,t[7]=b,t[8]=A,t[9]=j):(A=t[8],j=t[9]),(0,f.useEffect)(A,j);let M,N;if(t[10]!==D||t[11]!==c||t[12]!==b?(M=()=>{if(!(b!==`toast`||c===1/0||c<=0))return w.current=window.setTimeout(D,c),()=>{w.current&&window.clearTimeout(w.current)}},N=[b,c,D],t[10]=D,t[11]=c,t[12]=b,t[13]=M,t[14]=N):(M=t[13],N=t[14]),(0,f.useEffect)(M,N),b===`loading`){let e;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,m.jsx)(`div`,{className:`toast-backdrop`}),t[15]=e):e=t[15];let n;return t[16]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,m.jsxs)(`div`,{className:`toast-overlay`,children:[e,(0,m.jsx)(`div`,{className:`toast-fullscreen-loader`,children:(0,m.jsx)(h,{})})]}),t[16]=n):n=t[16],n}let P=`toast-item toast-${i}${d?` is-leaving`:``}`,F;t[17]!==l.bg||t[18]!==l.color?(F={"--toast-color":l.color,"--toast-bg":l.bg},t[17]=l.bg,t[18]=l.color,t[19]=F):F=t[19];let I,L;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(I=()=>y(!0),L=()=>y(!1),t[20]=I,t[21]=L):(I=t[20],L=t[21]);let R;t[22]===u?R=t[23]:(R=(0,m.jsx)(`div`,{className:`toast-icon`,children:(0,m.jsx)(u,{size:19,strokeWidth:2})}),t[22]=u,t[23]=R);let z;t[24]===a?z=t[25]:(z=a&&(0,m.jsx)(`div`,{className:`toast-title`,children:a}),t[24]=a,t[25]=z);let B;t[26]===s?B=t[27]:(B=(0,m.jsx)(`div`,{className:`toast-message`,children:s}),t[26]=s,t[27]=B);let V;t[28]!==z||t[29]!==B?(V=(0,m.jsxs)(`div`,{className:`toast-body`,children:[z,B]}),t[28]=z,t[29]=B,t[30]=V):V=t[30];let H;t[31]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,m.jsx)(o,{size:15,strokeWidth:2.4}),t[31]=H):H=t[31];let U;t[32]===D?U=t[33]:(U=(0,m.jsx)(`button`,{className:`toast-close`,onClick:D,"aria-label":`Dismiss notification`,children:H}),t[32]=D,t[33]=U);let W;t[34]!==S||t[35]!==c||t[36]!==v||t[37]!==l.color?(W=c!==1/0&&c>0&&(0,m.jsx)(`div`,{className:`toast-track`,children:(0,m.jsx)(`div`,{ref:T,className:`toast-bar`,style:{backgroundColor:l.color,width:S,transition:v?`none`:`width ${c}ms linear`}})}),t[34]=S,t[35]=c,t[36]=v,t[37]=l.color,t[38]=W):W=t[38];let G;return t[39]!==R||t[40]!==V||t[41]!==U||t[42]!==W||t[43]!==P||t[44]!==F?(G=(0,m.jsxs)(`div`,{className:P,style:F,onMouseEnter:I,onMouseLeave:L,role:`status`,children:[R,V,U,W]}),t[39]=R,t[40]=V,t[41]=U,t[42]=W,t[43]=P,t[44]=F,t[45]=G):G=t[45],G}function C(){let e=(0,p.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,m.jsx)(`style`,{children:`
      .toast-viewport{
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: min(360px, calc(100vw - 32px));
        pointer-events: none;
      }

      .toast-item{
        position: relative;
        pointer-events: auto;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        background: #ffffff;
        border: 1px solid rgba(15,23,42,0.08);
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(15,23,42,0.12), 0 2px 6px rgba(15,23,42,0.06);
        padding: 14px 40px 16px 14px;
        overflow: hidden;
        animation: toast-in 0.32s cubic-bezier(.22,.68,0,1.1) both;
      }
      .toast-item.is-leaving{
        animation: toast-out 0.2s ease-in both;
      }

      @keyframes toast-in{
        from{ opacity: 0; transform: translateX(110%); }
        to{ opacity: 1; transform: translateX(0); }
      }
      @keyframes toast-out{
        from{ opacity: 1; transform: translateX(0); }
        to{ opacity: 0; transform: translateX(60px); }
      }
      @keyframes toast-shrink{
        from{ transform: scaleX(1); }
        to{ transform: scaleX(0); }
      }
      @media (prefers-reduced-motion: reduce){
        .toast-item, .toast-item.is-leaving{ animation: none; }
      }

      .toast-overlay{
        position: fixed;
        inset: 0;
        z-index: 9998;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .toast-backdrop{
        position: absolute;
        inset: 0;
        background: #ffffff;
      }
      .toast-fullscreen-loader{
        position: relative;
        z-index: 1;
      }

      .toast-icon{
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--toast-bg);
        color: var(--toast-color);
        margin-top: 1px;
      }

      .toast-body{ flex: 1; min-width: 0; }
      .toast-title{
        font-family: -apple-system, "Inter", system-ui, sans-serif;
        font-size: 13.5px;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 2px;
      }
      .toast-message{
        font-family: -apple-system, "Inter", system-ui, sans-serif;
        font-size: 13px;
        line-height: 1.5;
        color: #475569;
      }

      .toast-close{
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background: transparent;
        color: #94a3b8;
        width: 22px;
        height: 22px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
      }
      .toast-close:hover{ background: #f1f5f9; color: #334155; }

      .toast-track{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 5px;
        background: #e2e8f0;
        border-radius: 0 0 12px 12px;
        overflow: hidden;
      }
      .toast-bar{
        height: 100%;
        width: 100%;
      }

      .toast-loading-bar{
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: min(280px, calc(100vw - 64px));
        height: 4px;
        border-radius: 999px;
        background: #e2e8f0;
        overflow: hidden;
      }
      .toast-loading-bar::after{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        transform-origin: left center;
        animation: toast-loading-shrink 1.4s ease-in-out infinite;
      }
      @keyframes toast-loading-shrink{
        0%{ transform: scaleX(1); opacity: 1; }
        50%{ transform: scaleX(0.3); opacity: 0.6; }
        100%{ transform: scaleX(1); opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce){
        .toast-loading-bar::after{ animation: none; }
      }
    `}),e[0]=t):t=e[0],t}function w(e){let t=(0,p.c)(9),{children:n,className:r,delay:i,as:a}=e,o=r===void 0?``:r,s=i===void 0?0:i,c=a===void 0?`div`:a,l=(0,f.useRef)(null),[u,d]=(0,f.useState)(!1),h,g;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=()=>{let e=l.current;if(!e)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){d(!0);return}let t=new IntersectionObserver(n=>{n.forEach(n=>{n.isIntersecting&&(d(!0),t.unobserve(e))})},{threshold:.15,rootMargin:`0px 0px -60px 0px`});return t.observe(e),()=>t.disconnect()},g=[],t[0]=h,t[1]=g):(h=t[0],g=t[1]),(0,f.useEffect)(h,g);let _=`transition-all duration-700 ease-out ${u?`opacity-100 translate-y-0`:`opacity-0 translate-y-8`} ${o}`,v=u?`${s}ms`:`0ms`,y;t[2]===v?y=t[3]:(y={transitionDelay:v},t[2]=v,t[3]=y);let b;return t[4]!==c||t[5]!==n||t[6]!==_||t[7]!==y?(b=(0,m.jsx)(c,{ref:l,className:_,style:y,children:n}),t[4]=c,t[5]=n,t[6]=_,t[7]=y,t[8]=b):b=t[8],b}function T(){let e=(0,p.c)(52),{t}=i(),n;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=[{label:`Home`,href:`/`,active:!1,i18nKey:`nav.home`},{label:`About Us`,href:`/about`,active:!1,i18nKey:`nav.aboutUs`},{label:`Programs`,href:`/program`,active:!1,i18nKey:`nav.programs`},{label:`Why Ghana`,href:`/why-ghana`,i18nKey:`nav.whyGhana`},{label:`Contact / FAQ`,href:`/contact`,active:!0,i18nKey:`nav.contactFaq`}],e[0]=n):n=e[0];let a=n,o;e[1]===t?o=e[2]:(o=t(`nav.applyNow`),e[1]=t,e[2]=o);let s=o,l;e[3]===s?l=e[4]:(l=(0,m.jsx)(r,{navLinks:a,ctaLabel:s}),e[3]=s,e[4]=l);let u,d;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,m.jsx)(`video`,{className:`absolute inset-0 w-full h-full object-cover`,src:`/hero.mp4`,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),d=(0,m.jsx)(`div`,{className:`absolute inset-0 bg-black/40`}),e[5]=u,e[6]=d):(u=e[5],d=e[6]);let f;e[7]===t?f=e[8]:(f=t(`contact.kicker`),e[7]=t,e[8]=f);let h;e[9]===f?h=e[10]:(h=(0,m.jsx)(`span`,{className:`inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6`,children:f}),e[9]=f,e[10]=h);let g;e[11]===t?g=e[12]:(g=t(`contact.title`),e[11]=t,e[12]=g);let _;e[13]===g?_=e[14]:(_=(0,m.jsx)(`h1`,{className:`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6`,children:g}),e[13]=g,e[14]=_);let v;e[15]===t?v=e[16]:(v=t(`contact.subtitle`),e[15]=t,e[16]=v);let y;e[17]===v?y=e[18]:(y=(0,m.jsx)(`p`,{className:`text-lg text-stone-100 max-w-2xl leading-relaxed`,children:v}),e[17]=v,e[18]=y);let b;e[19]!==y||e[20]!==h||e[21]!==_?(b=(0,m.jsxs)(`section`,{className:`relative overflow-hidden text-white py-24 lg:py-32`,children:[u,d,(0,m.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10`,children:(0,m.jsxs)(w,{children:[h,_,y]})})]}),e[19]=y,e[20]=h,e[21]=_,e[22]=b):b=e[22];let x;e[23]===t?x=e[24]:(x=t(`contact.faqKicker`),e[23]=t,e[24]=x);let S;e[25]===x?S=e[26]:(S=(0,m.jsx)(`span`,{className:`text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2`,children:x}),e[25]=x,e[26]=S);let C;e[27]===t?C=e[28]:(C=t(`contact.faqTitle`),e[27]=t,e[28]=C);let T;e[29]===C?T=e[30]:(T=(0,m.jsx)(`h2`,{className:`text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight`,children:C}),e[29]=C,e[30]=T);let O;e[31]!==S||e[32]!==T?(O=(0,m.jsxs)(w,{className:`text-center max-w-3xl mx-auto mb-16`,children:[S,T]}),e[31]=S,e[32]=T,e[33]=O):O=e[33];let k;e[34]===t?k=e[35]:(k=t(`contact.faqItems`).map(E),e[34]=t,e[35]=k);let A;e[36]===k?A=e[37]:(A=(0,m.jsx)(w,{className:`space-y-6`,children:k}),e[36]=k,e[37]=A);let j;e[38]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,m.jsx)(w,{delay:120,className:`rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out`,children:(0,m.jsx)(`img`,{src:`/faqs.jpg`,alt:`FAQ`,className:`w-full h-full object-cover`})}),e[38]=j):j=e[38];let M;e[39]===A?M=e[40]:(M=(0,m.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`,children:[A,j]}),e[39]=A,e[40]=M);let N;e[41]!==O||e[42]!==M?(N=(0,m.jsx)(`section`,{className:`py-24 bg-white`,children:(0,m.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[O,M]})}),e[41]=O,e[42]=M,e[43]=N):N=e[43];let P;e[44]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,m.jsx)(`style`,{children:`
          @keyframes dotDrift {
            0% { background-position: 0 0; }
            100% { background-position: 24px 24px; }
          }
        `}),e[44]=P):P=e[44];let F;e[45]===Symbol.for(`react.memo_cache_sentinel`)?(F=(0,m.jsx)(`div`,{className:`absolute inset-0 opacity-[0.35] pointer-events-none`,style:{backgroundImage:`radial-gradient(circle, #0f766e 1px, transparent 1px)`,backgroundSize:`24px 24px`,animation:`dotDrift 6s linear infinite`}}),e[45]=F):F=e[45];let I,L;e[46]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,m.jsxs)(`section`,{id:`contact`,className:`relative py-24 bg-stone-50 overflow-hidden`,children:[P,F,(0,m.jsx)(w,{className:`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10`,children:(0,m.jsx)(D,{})})]}),L=(0,m.jsx)(c,{}),e[46]=I,e[47]=L):(I=e[46],L=e[47]);let R;return e[48]!==b||e[49]!==N||e[50]!==l?(R=(0,m.jsxs)(`div`,{className:`min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200`,children:[l,b,N,I,L]}),e[48]=b,e[49]=N,e[50]=l,e[51]=R):R=e[51],R}function E(e,t){return(0,m.jsxs)(`div`,{className:`bg-stone-50 p-6 rounded-2xl`,children:[(0,m.jsx)(`h3`,{className:`text-lg font-bold text-stone-900 mb-2`,children:e.question}),(0,m.jsx)(`p`,{className:`text-stone-600 leading-relaxed`,children:e.answer})]},t)}function D(){let e=(0,p.c)(107),{t}=i(),{success:n}=b(),r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(r={name:``,email:``,phone:``,subject:``,message:``},e[0]=r):r=e[0];let[a,o]=(0,f.useState)(r),[s,c]=(0,f.useState)(!1),l;e[1]!==n||e[2]!==t?(l=e=>{e.preventDefault(),c(!0),setTimeout(()=>{c(!1),n(t(`contact.successMessage`),{title:t(`contact.successTitle`)}),o({name:``,email:``,phone:``,subject:``,message:``})},1500)},e[1]=n,e[2]=t,e[3]=l):l=e[3];let u=l,d;e[4]===t?d=e[5]:(d=t(`contact.name`),e[4]=t,e[5]=d);let h=d,g;e[6]===h?g=e[7]:(g=(0,m.jsx)(`span`,{className:`text-xs font-semibold text-stone-600`,children:h}),e[6]=h,e[7]=g);let _;e[8]===t?_=e[9]:(_=t(`contact.name`),e[8]=t,e[9]=_);let v=_,y;e[10]===a?y=e[11]:(y=e=>o({...a,name:e.target.value}),e[10]=a,e[11]=y);let x;e[12]!==a.name||e[13]!==s||e[14]!==v||e[15]!==y?(x=(0,m.jsx)(`input`,{required:!0,className:`w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/40 outline-none transition`,placeholder:v,value:a.name,onChange:y,disabled:s}),e[12]=a.name,e[13]=s,e[14]=v,e[15]=y,e[16]=x):x=e[16];let S;e[17]!==g||e[18]!==x?(S=(0,m.jsxs)(`label`,{className:`space-y-1`,children:[g,x]}),e[17]=g,e[18]=x,e[19]=S):S=e[19];let C;e[20]===t?C=e[21]:(C=t(`contact.email`),e[20]=t,e[21]=C);let w=C,T;e[22]===w?T=e[23]:(T=(0,m.jsx)(`span`,{className:`text-xs font-semibold text-stone-600`,children:w}),e[22]=w,e[23]=T);let E;e[24]===t?E=e[25]:(E=t(`contact.email`),e[24]=t,e[25]=E);let D=E,O;e[26]===a?O=e[27]:(O=e=>o({...a,email:e.target.value}),e[26]=a,e[27]=O);let k;e[28]!==a.email||e[29]!==s||e[30]!==D||e[31]!==O?(k=(0,m.jsx)(`input`,{required:!0,type:`email`,className:`w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/40 outline-none transition`,placeholder:D,value:a.email,onChange:O,disabled:s}),e[28]=a.email,e[29]=s,e[30]=D,e[31]=O,e[32]=k):k=e[32];let A;e[33]!==T||e[34]!==k?(A=(0,m.jsxs)(`label`,{className:`space-y-1`,children:[T,k]}),e[33]=T,e[34]=k,e[35]=A):A=e[35];let j;e[36]!==A||e[37]!==S?(j=(0,m.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-5`,children:[S,A]}),e[36]=A,e[37]=S,e[38]=j):j=e[38];let M;e[39]===t?M=e[40]:(M=t(`contact.phone`),e[39]=t,e[40]=M);let N=M,P;e[41]===N?P=e[42]:(P=(0,m.jsx)(`span`,{className:`text-xs font-semibold text-stone-600`,children:N}),e[41]=N,e[42]=P);let F;e[43]===t?F=e[44]:(F=t(`contact.phone`),e[43]=t,e[44]=F);let I=F,L;e[45]===a?L=e[46]:(L=e=>o({...a,phone:e.target.value}),e[45]=a,e[46]=L);let R;e[47]!==a.phone||e[48]!==s||e[49]!==I||e[50]!==L?(R=(0,m.jsx)(`input`,{className:`w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/40 outline-none transition`,placeholder:I,value:a.phone,onChange:L,disabled:s}),e[47]=a.phone,e[48]=s,e[49]=I,e[50]=L,e[51]=R):R=e[51];let z;e[52]!==P||e[53]!==R?(z=(0,m.jsxs)(`label`,{className:`space-y-1`,children:[P,R]}),e[52]=P,e[53]=R,e[54]=z):z=e[54];let B;e[55]===t?B=e[56]:(B=t(`contact.subject`),e[55]=t,e[56]=B);let V=B,H;e[57]===V?H=e[58]:(H=(0,m.jsx)(`span`,{className:`text-xs font-semibold text-stone-600`,children:V}),e[57]=V,e[58]=H);let U;e[59]===t?U=e[60]:(U=t(`contact.subject`),e[59]=t,e[60]=U);let W=U,G;e[61]===a?G=e[62]:(G=e=>o({...a,subject:e.target.value}),e[61]=a,e[62]=G);let ee;e[63]!==a.subject||e[64]!==s||e[65]!==W||e[66]!==G?(ee=(0,m.jsx)(`input`,{required:!0,className:`w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/40 outline-none transition`,placeholder:W,value:a.subject,onChange:G,disabled:s}),e[63]=a.subject,e[64]=s,e[65]=W,e[66]=G,e[67]=ee):ee=e[67];let K;e[68]!==H||e[69]!==ee?(K=(0,m.jsxs)(`label`,{className:`space-y-1`,children:[H,ee]}),e[68]=H,e[69]=ee,e[70]=K):K=e[70];let q;e[71]!==z||e[72]!==K?(q=(0,m.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-5`,children:[z,K]}),e[71]=z,e[72]=K,e[73]=q):q=e[73];let te;e[74]===t?te=e[75]:(te=t(`contact.message`),e[74]=t,e[75]=te);let ne=te,J;e[76]===ne?J=e[77]:(J=(0,m.jsx)(`span`,{className:`text-xs font-semibold text-stone-600`,children:ne}),e[76]=ne,e[77]=J);let re;e[78]===t?re=e[79]:(re=t(`contact.message`),e[78]=t,e[79]=re);let ie=re,Y;e[80]===a?Y=e[81]:(Y=e=>o({...a,message:e.target.value}),e[80]=a,e[81]=Y);let X;e[82]!==a.message||e[83]!==s||e[84]!==ie||e[85]!==Y?(X=(0,m.jsx)(`textarea`,{required:!0,rows:5,className:`w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/40 outline-none transition`,placeholder:ie,value:a.message,onChange:Y,disabled:s}),e[82]=a.message,e[83]=s,e[84]=ie,e[85]=Y,e[86]=X):X=e[86];let Z;e[87]!==J||e[88]!==X?(Z=(0,m.jsxs)(`label`,{className:`space-y-1`,children:[J,X]}),e[87]=J,e[88]=X,e[89]=Z):Z=e[89];let ae;e[90]===t?ae=e[91]:(ae=t(`contact.send`),e[90]=t,e[91]=ae);let oe=ae,Q;e[92]!==s||e[93]!==oe?(Q=(0,m.jsx)(`button`,{type:`submit`,className:`w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all`,disabled:s,children:oe}),e[92]=s,e[93]=oe,e[94]=Q):Q=e[94];let $;e[95]!==u||e[96]!==j||e[97]!==q||e[98]!==Z||e[99]!==Q?($=(0,m.jsxs)(`form`,{onSubmit:u,className:`bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out space-y-5`,children:[j,q,Z,Q]}),e[95]=u,e[96]=j,e[97]=q,e[98]=Z,e[99]=Q,e[100]=$):$=e[100];let se;e[101]===Symbol.for(`react.memo_cache_sentinel`)?(se=(0,m.jsx)(`a`,{href:`javascript:void(0)`,"aria-label":`X`,className:`inline-flex items-center justify-center rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 transition-all hover:scale-90`,children:(0,m.jsx)(`img`,{src:`/x_icon.webp`,alt:`X`,className:`w-6 h-6 object-contain`})}),e[101]=se):se=e[101];let ce;e[102]===Symbol.for(`react.memo_cache_sentinel`)?(ce=(0,m.jsx)(`a`,{href:`javascript:void(0)`,"aria-label":`Instagram`,className:`inline-flex items-center justify-center rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 transition-all hover:scale-90`,children:(0,m.jsx)(`img`,{src:`/instagram.jpg`,alt:`Instagram`,className:`w-6 h-6 object-contain`})}),e[102]=ce):ce=e[102];let le;e[103]===Symbol.for(`react.memo_cache_sentinel`)?(le=(0,m.jsx)(`a`,{href:`javascript:void(0)`,"aria-label":`Facebook`,className:`inline-flex items-center justify-center rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 transition-all hover:scale-90`,children:(0,m.jsx)(`img`,{src:`/facebook.webp`,alt:`Facebook`,className:`w-6 h-6 object-contain`})}),e[103]=le):le=e[103];let ue;e[104]===Symbol.for(`react.memo_cache_sentinel`)?(ue=(0,m.jsxs)(`div`,{className:`mt-10 flex items-center justify-center gap-6`,children:[se,ce,le,(0,m.jsx)(`a`,{href:`javascript:void(0)`,"aria-label":`TikTok`,className:`inline-flex items-center justify-center rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 transition-all hover:scale-90`,children:(0,m.jsx)(`img`,{src:`/tiktok.png`,alt:`TikTok`,className:`w-6 h-6 object-contain`})})]}),e[104]=ue):ue=e[104];let de;return e[105]===$?de=e[106]:(de=(0,m.jsxs)(m.Fragment,{children:[$,ue]}),e[105]=$,e[106]=de),de}export{T as default,y as t};
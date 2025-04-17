import{u as D,ai as f,r as u,O as x,aj as C,M as E,N as p,a3 as O,Z as B,C as M,E as b,J as V,ak as R,b as k}from"./X4syauvn.js";const z=s=>s==="defer"||s===!1;function I(...s){var v;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[t,d,e={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=D(),P=d,w=()=>f.value,q=()=>a.isHydrating?a.payload.data[t]:a.static.data[t];e.server??(e.server=!0),e.default??(e.default=w),e.getCachedData??(e.getCachedData=q),e.lazy??(e.lazy=!1),e.immediate??(e.immediate=!0),e.deep??(e.deep=f.deep),e.dedupe??(e.dedupe="cancel");const g=e.getCachedData(t,a),m=g!=null;if(!a._asyncData[t]||!e.immediate){(v=a.payload._errors)[t]??(v[t]=f.errorValue);const o=e.deep?u:x;a._asyncData[t]={data:o(m?g:e.default()),pending:u(!m),error:C(a.payload._errors,t),status:u("idle"),_default:e.default}}const n={...a._asyncData[t]};delete n._default,n.refresh=n.execute=(o={})=>{if(a._asyncDataPromises[t]){if(z(o.dedupe??e.dedupe))return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if(o._initial||a.isHydrating&&o._initial!==!1){const c=o._initial?g:e.getCachedData(t,a);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,i)=>{try{c(P(a))}catch(_){i(_)}}).then(async c=>{if(l.cancelled)return a._asyncDataPromises[t];let i=c;e.transform&&(i=await e.transform(c)),e.pick&&(i=J(i,e.pick)),a.payload.data[t]=i,n.data.value=i,n.error.value=f.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return a._asyncDataPromises[t];n.error.value=M(c),n.data.value=b(e.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=l,a._asyncDataPromises[t]},n.clear=()=>U(a,t);const y=()=>n.refresh({_initial:!0}),j=e.server!==!1&&a.payload.serverRendered;{const o=V();if(o&&j&&e.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;R(()=>{i.forEach(_=>{_()}),i.splice(0,i.length)}),k(()=>i.splice(0,i.length))}j&&a.isHydrating&&(n.error.value||g!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):o&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(y):e.immediate&&y();const l=B();if(e.watch){const i=E(e.watch,()=>n.refresh());l&&p(i)}const c=a.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await n.refresh()});l&&p(c)}const h=Promise.resolve(a._asyncDataPromises[t]).then(()=>n);return Object.assign(h,n),h}async function N(s){await new Promise(t=>O(t)),await D().hooks.callHookParallel("app:data:refresh",void 0)}function U(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=f.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=b(s._asyncData[r]._default()),s._asyncData[r].error.value=f.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function J(s,r){const t={};for(const d of r)t[d]=s[d];return t}const S={content_en:"v3.3.0--wFm8WDUcCpac6z2tzz3pvYmNwVkJle6FkI1bUhEb3X8",content_fr:"v3.3.0--bam2gv753qIEJuaCpJ21r83RVL3Pr6xR-X3efAAGQiM",articles_en:"v3.3.0--P-7DPMv5T9yEUrtzYja7Rvc4pGzvuD6s0fcyJKYlVdY",articles_fr:"v3.3.0--pSUM1QkAUD6IZAP_BwLD5Y4EYPxhRPvAE8xqECVWhLc",projects_en:"v3.3.0---DsntmTOVDxyfjvYo-TXEUf5kg126qAqquy7HdqBfbc",projects_fr:"v3.3.0--0_q-sAeotQJWtZBZMSNwxa3maLpvBYVRcrPEVTCAy_c",stack:"v3.3.0--Qmj4t2ByZyBR5ulc5-JwMa_PL_tVFcEqcS0Ety0ZRSo",faq_en:"v3.3.0--TgEwNOJM13trv2x9dkFz3-OxC1EgJ1X512r6gxbteeU",faq_fr:"v3.3.0--4W0Pfx9U0ojpvyfh7CzUW5mDq85zVyqlxt8e8Bk5i3Q"},Y={content_en:"_content_content_en",content_fr:"_content_content_fr",articles_en:"_content_articles_en",articles_fr:"_content_articles_fr",projects_en:"_content_projects_en",projects_fr:"_content_projects_fr",stack:"_content_stack",faq_en:"_content_faq_en",faq_fr:"_content_faq_fr",info:"_content_info"},Q={content_en:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string"}},content_fr:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string"}},articles_en:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string",image:"string",readingTime:"string",tags:"json"}},articles_fr:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",sitemap:"json",robots:"json",head:"json",schemaOrg:"json",ogImage:"json",date:"string",image:"string",readingTime:"string",tags:"json"}},projects_en:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",name:"string",image:"string",link:"string",release:"string",date:"string",featured:"boolean"}},projects_fr:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",name:"string",image:"string",link:"string",release:"string",date:"string",featured:"boolean"}},stack:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",items:"json"}},faq_en:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",title:"string",subtitle:"string",faqQuestions:"json"}},faq_fr:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",title:"string",subtitle:"string",faqQuestions:"json"}},info:{type:"data",fields:{}}};export{Q as a,S as c,N as r,Y as t,I as u};

(function(){var e={7765:function(e){e.exports={index:{title:"ai-智能助手",requiredParams:{}},userAgreement:{title:"用户隐私协议",requiredParams:{}}}},6738:function(e,t,n){"use strict";n(1703);var o=n(3396),a=n(7139),r=n(4870),l=n(9928);const i="Pro",u="Pro"===i,s=3e3,c=4,d=800,p=u?window.location.origin:"";var m=n(4754),f=n(3708),v=n(9545),g=n(4120),h=n(5331),w=n(360),y=n(6265),b=n.n(y),_=n(4486);const k="Q_L_R_R_ACCESS_TOKEN",x="Q_L_R_R_USER_INFO";function U(e=null){let t=window.location.href.split("?");if(t.length<2)return e?null:{};let n=t[1].split("&"),o={};return n.forEach((e=>{let t=e.split("=");o[t[0]]=t[1]})),e?o.key?o[e]:null:o}function P(e){return _.Z.set(x,e),e}function C(){return _.Z.get(k)}function V(){return _.Z.get(k,"").length>5}function j(e){return _.Z.set(k,e)}const O=b().create({baseURL:p,headers:{Accept:"*/*"},timeout:s});O.defaults.retry=c,O.defaults.retryDelay=d,O.interceptors.request.use((e=>(e.showLoading&&(0,m.di)({message:"加载中...",forbidClick:!0}),e.headers["Authorization"]=C(),e)),(e=>{(0,m.yg)(),Promise.reject(e)})),O.interceptors.response.use((e=>((0,m.yg)(),200!==e.status?((0,m.CF)("数据返回出错"),Promise.reject("响应非200！")):e.data.Status?e.data.Data:((0,m.CF)(e.data.Msg),Promise.reject(e.data.Msg)))),(e=>((0,m.CF)(e.message),Promise.reject(e))));var S=O;const T=e=>S({url:"/v1/login",method:"post",data:e}),H={style:{margin:"16px",display:"flex","flex-direction":"column"}},A=(0,o.Uk)(" 登录 "),F=(0,o.Uk)(" 已阅读并同意《"),z=(0,o._)("a",{style:{color:"#0077d6"},href:"./userAgreement.html"},"用户隐私政策",-1),D=(0,o.Uk)("》 ");var N={__name:"LoginPopup",props:{modelValue:Boolean},emits:["success"],setup(e,{emit:t}){const n=(0,r.iH)(""),a=(0,r.iH)(""),l=(0,r.iH)(!1),i=async()=>{if(!l.value)return void(0,m.CF)("请阅读并同意《用户隐私政策》");if(!n.value)return void(0,m.CF)("请填写用户名");if(!a.value)return void(0,m.CF)("请正确填写密码");const e=await T({Password:a.value,Username:n.value});P(e),j(e.Token),t("success")};return(t,u)=>((0,o.wg)(),(0,o.j4)((0,r.SU)(g.GI),{show:e.modelValue,round:"",position:"bottom",style:{height:"40%"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,r.SU)(h.TS),{inset:"",style:{"margin-top":"40px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,r.SU)(f.gN),{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=e=>n.value=e),name:"username",label:"用户名",placeholder:"请填写用户名"},null,8,["modelValue"]),(0,o.Wm)((0,r.SU)(f.gN),{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=e=>a.value=e),name:"password",type:"password",label:"验证码",placeholder:"请填写密码"},null,8,["modelValue"])])),_:1}),(0,o._)("div",H,[(0,o.Wm)((0,r.SU)(v.zx),{round:"",block:"",type:"primary",onClick:i},{default:(0,o.w5)((()=>[A])),_:1}),(0,o.Wm)((0,r.SU)(w.XZ),{"icon-size":"16px",style:{"margin-top":"26px","font-size":"13px"},modelValue:l.value,"onUpdate:modelValue":u[2]||(u[2]=e=>l.value=e)},{default:(0,o.w5)((()=>[F,z,D])),_:1},8,["modelValue"])])])),_:1},8,["show"]))}};const L=N;var W=L;const E={class:"index"},R={class:"dialog"},M=(0,o._)("br",null,null,-1),Z=["innerHTML"],q={key:1,class:"dialog-msg"},G={class:"input"},$=(0,o.Uk)("发 送");var I={__name:"App",setup(e){const t=(0,r.iH)([]),n=(0,r.iH)(""),i=(0,r.iH)(!1),u=(0,r.iH)(!V()),s=e=>l.TU.parse(e),c=async()=>{if(n.value=n.value.trim(),0!==n.value.length){i.value=!0;try{const e=await fetch(p+"/api/openai/GPT3Dot5Turbo",{method:"post",headers:{"Content-Type":"application/json",Authorization:C()},body:JSON.stringify([...t.value,{role:"user",content:n.value}])});if(!e.ok){const t=await e.text();throw new Error(t)}t.value.push({role:"user",content:n.value},{role:"assistant",content:""}),n.value="";const o=new TextDecoder("utf-8"),a=e.body.getReader();while(1){const{value:e,done:n}=await a.read();if(n)break;t.value[t.value.length-1].content+=o.decode(e)}i.value=!1}catch(e){(0,m.CF)(e.message),i.value=!1}}else(0,m.CF)("请输入你的问题！")},d=()=>{u.value=!1};return(e,l)=>((0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("div",R,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"block",key:t},[(0,o._)("span",null,(0,a.zw)(e.role.charAt(0).toUpperCase()+e.role.slice(1))+":",1),M,"assistant"==e.role?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"dialog-msg",innerHTML:s(e.content)},null,8,Z)):((0,o.wg)(),(0,o.iD)("div",q,(0,a.zw)(e.content),1))])))),128))]),(0,o._)("div",G,[(0,o.Wm)((0,r.SU)(f.gN),{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),center:"",clearable:"",placeholder:"请输入你的问题"},{button:(0,o.w5)((()=>[(0,o.Wm)((0,r.SU)(v.zx),{round:"",disabled:i.value,size:"small",type:"primary",onClick:l[0]||(l[0]=e=>c())},{default:(0,o.w5)((()=>[$])),_:1},8,["disabled"])])),_:1},8,["modelValue"])]),(0,o.Wm)(W,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e),onSuccess:d},null,8,["modelValue"])]))}};const K=I;var Q=K,B=(n(5110),n(9242)),J=n(7765),X=n.n(J);let Y=window.PAGE_PATH,ee=X()[Y]||{};function te(e={},t){let n=[];if(0===Object.keys(e).length)return n;for(let o in e)t[o]||n.push({name:o,desc:e[o]});return n}function ne(){let e=U(),t=te(ee.requiredParams,e);return new Promise(((n,o)=>{0!==t.length?(console.table(t),document.body.innerHTML=`<div style="width: 100%;height: 100vh;display: flex;flex-direction:column;justify-content: center;align-items: center">\n页面路径出错，请尝试重新打开。\n<code style="padding: 20px;margin-top:20px;background: #eee;">参数：${t.map((e=>e.desc)).join("、")}</code>\n</div>`,o(t)):n({pageName:Y,pageParams:e})}))}ne().then((({pageName:e,pageParams:t})=>{window.$pageName=e,window.$pageParams=t,(0,B.ri)(Q).mount("#app")})).catch((e=>{console.log(e)}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,r<l&&(l=r));if(i){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.j=826}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,l=o[0],i=o[1],u=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var c=u(n)}for(t&&t(o);s<l.length;s++)r=l[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkvue_multiple_pages"]=self["webpackChunkvue_multiple_pages"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6738)}));o=n.O(o)})();
//# sourceMappingURL=index.a8967e0e.js.map
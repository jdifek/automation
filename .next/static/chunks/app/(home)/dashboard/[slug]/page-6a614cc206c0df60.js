(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{7396:(e,t,s)=>{Promise.resolve().then(s.bind(s,1860)),Promise.resolve().then(s.bind(s,1186)),Promise.resolve().then(s.bind(s,6639)),Promise.resolve().then(s.bind(s,3162))},1860:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var a=s(5155),r=s(2233),n=s(8361);let o=()=>(0,a.jsx)(n.A,{platformName:"Facebook",PublishIcon:r.A})},1186:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var a=s(5155),r=s(4035),n=s(8361);let o=()=>(0,a.jsx)(n.A,{platformName:"Instagram",PublishIcon:r.A})},8361:(e,t,s)=>{"use strict";s.d(t,{A:()=>u});var a=s(5155),r=s(2115),n=s(2651);let o={"Content-Type":"application/json; charset=utf-8"},l=async function(e,t,s){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o;try{let r=await (0,n.A)({url:e,method:t,headers:a,data:s});if(r.status>=200&&r.status<300)return r.data;throw Error("Network response was not ok")}catch(e){throw console.error("Fetch error:",e),e}};var c=s(9351),i=s(5848),d=s(547);let h={sendMessage:async e=>await n.A.post("https://api.telegram.org/bot".concat("7775859274:AAEq_cZAcTYjqpcd93pY3FV7VQIzv83fO_s","/sendMessage"),{text:e,parse_mode:"MarkdownV2",chat_id:"@testbot111222333"},{headers:{"Content-Type":"application/json"}}),async getChatInfo(e){try{return(await n.A.get("https://api.telegram.org/bot".concat("7775859274:AAEq_cZAcTYjqpcd93pY3FV7VQIzv83fO_s","/getChat"),{params:{chat_id:e}})).data}catch(e){throw console.error("Error getting chat info:",e),e}}},u=e=>{let{platformName:t,PublishIcon:s}=e,[n,o]=(0,r.useState)(""),[u,m]=(0,r.useState)(""),[g,p]=(0,r.useState)(!1),[b,f]=(0,r.useState)(null),[x,w]=(0,r.useState)(.01),[v,y]=(0,r.useState)([]),{data:j}=function(e){return(0,d.I)({queryKey:["chatInfo",e],queryFn:()=>h.getChatInfo(e),enabled:!!e,refetchInterval:e=>!!e.state.data&&1e4})}("-1002453211834");(0,r.useEffect)(()=>{j&&j.posts&&y(j.posts.map(e=>e.text))},[j]);let{mutate:N}=(0,i.n)({mutationKey:["send message"],mutationFn:async e=>{let t=await h.sendMessage(e.replace(/([_[\]()~`>#+=|{}.!-])/g,"\\$1"));if(200!==t.status)throw Error(t.data)}}),A=async()=>{let e="".concat("You will be creating posts for Telegram channels. Help me with this. Here is a description of what the post should be like:{message}. Also add the confidence in how well the request is put so that it could be used to create a post in TG, in percentage terms by type [80%]"," ").concat(u);try{let t=await l("/api/get-answer","POST",{question:e});o(t.answer)}catch(e){o("Error getting answer. Please try again."),console.log(e)}},k=()=>{let e=n.match(/Confidence in request-\[(\d+)%\]/);e?parseInt(e[1],10)>=80?(N(n),console.log("Message sent successfully.")):N("Confidence is below 80%, message not sent."):N("Confidence information not found in the answer.")},C=Array.from({length:24},(e,t)=>t+1);return(0,r.useEffect)(()=>(g?f(window.setInterval(k,36e5*x)):b&&(clearInterval(b),f(null)),()=>{b&&clearInterval(b)}),[g,x]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow p-6",children:[(0,a.jsx)("button",{onClick:()=>console.log(v),children:"Вивести пости"}),(0,a.jsxs)("h2",{className:"text-xl font-semibold mb-4",children:["Create",v.length>0?v.join(", "):"Немає постів"]}),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-4",children:[(0,a.jsx)("input",{type:"text",value:u,onChange:e=>m(e.target.value),placeholder:"Trigger keyword",className:"p-2 border border-gray-300 rounded-lg md:col-span-2"}),(0,a.jsxs)("button",{onClick:A,className:"flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[(0,a.jsx)(c.A,{className:"w-5 h-5 mr-2"}),"Create"]}),(0,a.jsxs)("button",{onClick:k,className:"flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[(0,a.jsx)(s,{className:"w-5 h-5 mr-2"}),"Public on ",t]})]})})]}),n&&(0,a.jsx)("div",{className:"bg-white rounded-lg shadow p-6 mt-3",children:(0,a.jsx)("div",{className:"space-y-4 flex items-center justify-between p-4 bg-gray-50 rounded-lg",children:n})}),(0,a.jsx)("div",{className:"flex justify-between w-full bg-gray-100 mt-6",children:(0,a.jsxs)("div",{className:"w-1/2 bg-white rounded-lg shadow p-6",children:[(0,a.jsxs)("label",{className:"flex items-center space-x-3 mb-4",children:[(0,a.jsx)("input",{type:"checkbox",className:"form-checkbox h-5 w-5 text-blue-600",checked:g,onChange:e=>{p(e.target.checked)}}),(0,a.jsx)("span",{className:"text-gray-700",children:"Auto posts"})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,a.jsx)("label",{htmlFor:"time-interval",className:"text-gray-700",children:"Select Time Interval (hours):"}),(0,a.jsx)("select",{id:"time-interval",className:"form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:x,onChange:e=>{w(Number(e.target.value))},children:C.map(e=>(0,a.jsxs)("option",{value:e,children:[e," ",1===e?"hour":"hours"]},e))})]})]})})]})}},6639:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var a=s(5155),r=s(8283),n=s(8361);let o=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.A,{platformName:"Telegram",PublishIcon:r.A})})},3162:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var a=s(5155),r=s(7820),n=s(8361);let o=()=>(0,a.jsx)(n.A,{platformName:"TikTok",PublishIcon:r.A})}},e=>{var t=t=>e(e.s=t);e.O(0,[551,959,441,517,358],()=>t(7396)),_N_E=e.O()}]);
"use strict";(self["webpackJsonp_aiassistant"]=self["webpackJsonp_aiassistant"]||[]).push([[750],{74264:function(e,a,l){l.d(a,{A:function(){return c}});var u=l(26436),t=l(15167);l(90192);const i={class:"ai-mobile-search"},s=["value"];var o=(0,u.pM)({__name:"index",props:{modelValue:String,showCancel:{type:Boolean,default:!1}},emits:["update:modelValue","cancel"],setup(e,{emit:a}){const l=(0,t.KR)(null),o=e,M=a,n=e=>{null!==l.value&&clearTimeout(l.value),l.value=setTimeout((()=>{const a=e.target;a&&M("update:modelValue",a.value)}),300)},c=()=>{M("update:modelValue",""),M("cancel")};return(a,l)=>((0,u.uX)(),(0,u.CE)("div",i,[l[0]||(l[0]=(0,u.Lk)("div",{class:"ai-mobile-search-after"},[(0,u.Lk)("h-icon-search")],-1)),(0,u.Lk)("input",{class:"ai-mobile-search-input",placeholder:"搜索",value:o.modelValue,onInput:n},null,40,s),o.modelValue?((0,u.uX)(),(0,u.CE)("h-icon-close",{key:0,class:"ai-mobile-search-cancel-icon",onClick:c})):(0,u.Q3)("",!0),e.showCancel||o.modelValue?((0,u.uX)(),(0,u.CE)("div",{key:1,class:"ai-mobile-search-cancel",onClick:c}," 取消 ")):(0,u.Q3)("",!0)]))}}),M=l(55932);const n=(0,M.A)(o,[["__scopeId","data-v-10ef3d47"]]);var c=n},37180:function(e,a,l){l.r(a),l.d(a,{default:function(){return Y}});l(94490),l(98992),l(54520);var u=l(26436),t=l(87959),i=l(15167),s=l(58699),o=l.n(s),M=l(38175),n=l(45047),c=(l(65831),l(75610)),r=(0,u.pM)({__name:"HistoryHeader",setup(e){const a=(0,c.rd)(),l=()=>{a.go(-1)};return(e,a)=>{const t=(0,u.g2)("a-layout-header");return(0,u.uX)(),(0,u.Wv)(t,{class:"chat-header-mobile"},{default:(0,u.k6)((()=>[(0,u.Lk)("div",{class:"chat-back",onClick:l},a[1]||(a[1]=[(0,u.Lk)("img",{src:n,alt:"返回"},null,-1)])),a[3]||(a[3]=(0,u.Lk)("div",{class:"chat-title"},[(0,u.Lk)("span",null,"历史记录")],-1)),(0,u.Lk)("span",{class:"chat-delete",onClick:a[0]||(a[0]=a=>e.$emit("delete"))},a[2]||(a[2]=[(0,u.Lk)("h-icon-delete",null,null,-1)]))])),_:1})}}}),D=l(55932);const d=(0,D.A)(r,[["__scopeId","data-v-33368aba"]]);var g=d,I=(l(44114),l(70001)),v=l(89343);const L={class:"footer-wrap"};var k=(0,u.pM)({__name:"ClearHistoryModal",emits:["refresh"],setup(e,{expose:a,emit:l}){const t=(0,c.rd)(),s=(0,i.KR)(!1),o=l;async function M(){await(0,I.ac)(),t.push({path:"/chat/new",query:{agent:"super"}}),s.value=!1}async function n(e){await(0,v.PY)(e)}const r=async({groupCode:e})=>{e?(await n(e),o("refresh")):s.value=!0};return a({show:r}),(e,a)=>{const l=(0,u.g2)("a-modal");return(0,u.uX)(),(0,u.Wv)(l,{visible:s.value,"onUpdate:visible":a[1]||(a[1]=e=>s.value=e),closable:!1,footer:null,width:311,wrapClassName:"clear-modal-mobile"},{default:(0,u.k6)((()=>[a[2]||(a[2]=(0,u.Lk)("div",{class:"modal-content"},"删除后无法恢复，是否继续此操作？",-1)),(0,u.Lk)("div",L,[(0,u.Lk)("div",{class:"btn",onClick:a[0]||(a[0]=e=>s.value=!1)},"取消"),(0,u.Lk)("div",{class:"btn danger",onClick:M},"确认")])])),_:1},8,["visible"])}}});const N=k;var y=N,j=l(74264),p=l(96581),A=l(17126);const m={class:"chat-history-search"},C={key:0,class:"date-wrap"},x={key:1,class:"date-wrap mt20"},h={key:1,class:"chat-list-empty"},E=["src"];var w=(0,u.pM)({__name:"ChatHistory",setup(e){const a=(0,i.KR)(""),l=(0,i.KR)(),s=(0,i.KR)(!0),n=(0,u.EW)((()=>{let e=I.GF.value;a.value&&(e=I.Oo.value);const l=e.filter((e=>o()(e.lastChatTime).format("YYYY-MM-DD")===o()().format("YYYY-MM-DD")&&"feedback"!==e.agentCode));return l.reverse()})),c=(0,u.EW)((()=>{let e=I.GF.value;a.value&&(e=I.Oo.value);const l=e.filter((e=>o()(e.lastChatTime).format("YYYY-MM-DD")!==o()().format("YYYY-MM-DD")));return l.reverse()})),r=e=>{var a;null===(a=l.value)||void 0===a||a.show({groupCode:e})};return(0,u.wB)((()=>a.value),(async()=>{s.value=!0,await(0,I.gL)(a.value),s.value=!1}),{immediate:!0}),(e,o)=>{const D=(0,u.g2)("a-layout-content"),d=(0,u.g2)("a-spin"),v=(0,u.g2)("a-layout");return(0,u.uX)(),(0,u.CE)(u.FK,null,[(0,u.bF)(v,{class:"chat-history"},{default:(0,u.k6)((()=>[(0,u.bF)(g,{onDelete:r}),(0,u.Lk)("div",m,[(0,u.bF)(j.A,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e)},null,8,["modelValue"])]),(0,u.bF)(d,{spinning:s.value},{default:(0,u.k6)((()=>[n.value.length||c.value.length?((0,u.uX)(),(0,u.Wv)(D,{key:0,class:(0,t.C4)(["chat-list",{"chat-list-ios":(0,i.R1)(A.OF)()}])},{default:(0,u.k6)((()=>[n.value.length>0?((0,u.uX)(),(0,u.CE)("div",C," 今天 ")):(0,u.Q3)("",!0),((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(n.value,(e=>((0,u.uX)(),(0,u.Wv)(M.A,{key:e.groupCode,chatGroup:e,onJump:a=>(0,i.R1)(I.OP)(e.groupCode),onDelete:a=>r(e.groupCode)},null,8,["chatGroup","onJump","onDelete"])))),128)),c.value.length>0?((0,u.uX)(),(0,u.CE)("div",x," 最近7天 ")):(0,u.Q3)("",!0),((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(c.value,(e=>((0,u.uX)(),(0,u.Wv)(M.A,{key:e.groupCode,chatGroup:e,onJump:a=>(0,i.R1)(I.OP)(e.groupCode),onDelete:a=>r(e.groupCode)},null,8,["chatGroup","onJump","onDelete"])))),128))])),_:1},8,["class"])):((0,u.uX)(),(0,u.CE)("div",h,[(0,u.Lk)("img",{src:(0,i.R1)(p)},null,8,E),(0,u.Lk)("span",null,(0,t.v_)(a.value?"无搜索结果":"暂无数据"),1)]))])),_:1},8,["spinning"])])),_:1}),(0,u.bF)(y,{ref_key:"modalRef",ref:l,onRefresh:o[1]||(o[1]=()=>(0,i.R1)(I.gL)(a.value))},null,512)],64)}}});const T=(0,D.A)(w,[["__scopeId","data-v-55f227be"]]);var Y=T},45047:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAuMDAwMDAwIiBoZWlnaHQ9IjIwLjAwMDAwMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCTxkZXNjPgoJCQlDcmVhdGVkIHdpdGggUGl4c28uCgk8L2Rlc2M+Cgk8ZGVmcy8+Cgk8cGF0aCBpZD0i5ZCI5bm2IiBkPSJNMTMuNDUgMy4zMkMxMy43OCAyLjk5IDEzLjc4IDIuNjYgMTMuNDUgMi4zM0MxMy4xMiAyIDEyLjc5IDIgMTIuNDYgMi4zM0w1Ljg3IDguOTJDNS41NiA5LjIyIDUuNDEgOS41OSA1LjQxIDEwLjAyQzUuNDEgMTAuNDQgNS41NiAxMC44MSA1Ljg3IDExLjExTDEyLjQ2IDE3LjdDMTIuNiAxNy44NCAxMi43NiAxNy45MSAxMi45NiAxNy45MUMxMy4xNSAxNy45MSAxMy4zMSAxNy44NCAxMy40NSAxNy43QzEzLjU5IDE3LjU3IDEzLjY2IDE3LjQgMTMuNjYgMTcuMjFDMTMuNjYgMTcuMDIgMTMuNTkgMTYuODUgMTMuNDUgMTYuNzJMNi44NiAxMC4xMkM2LjgyIDEwLjA4IDYuOCAxMC4wNSA2LjggMTAuMDJDNi44IDkuOTggNi44MiA5Ljk1IDYuODYgOS45MUwxMy40NSAzLjMyTDEzLjQ1IDMuMzJaIiBmaWxsPSIjNEU1OTY5IiBmaWxsLW9wYWNpdHk9IjEuMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KCTxwYXRoIGlkPSLlkIjlubYiIGQ9Ik0xMy40NSAyLjMzQzEzLjEyIDIgMTIuNzkgMiAxMi40NiAyLjMzTDUuODcgOC45MkM1LjU2IDkuMjIgNS40MSA5LjU5IDUuNDEgMTAuMDJDNS40MSAxMC40NCA1LjU2IDEwLjgxIDUuODcgMTEuMTFMMTIuNDYgMTcuN0MxMi42IDE3Ljg0IDEyLjc2IDE3LjkxIDEyLjk2IDE3LjkxQzEzLjE1IDE3LjkxIDEzLjMxIDE3Ljg0IDEzLjQ1IDE3LjdDMTMuNTkgMTcuNTcgMTMuNjYgMTcuNCAxMy42NiAxNy4yMUMxMy42NiAxNy4wMiAxMy41OSAxNi44NSAxMy40NSAxNi43Mkw2Ljg2IDEwLjEyQzYuODIgMTAuMDggNi44IDEwLjA1IDYuOCAxMC4wMkM2LjggOS45OCA2LjgyIDkuOTUgNi44NiA5LjkxTDEzLjQ1IDMuMzJMMTMuNDUgMy4zMkMxMy43OCAyLjk5IDEzLjc4IDIuNjYgMTMuNDUgMi4zM1oiIHN0cm9rZT0iIzRFNTk2OSIgc3Ryb2tlLW9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMTAwMDAwIi8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=chat-history.3661eeff.js.map
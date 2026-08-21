import{d as L,A as y,c as w,a4 as R,aZ as H,e as F,k as I}from"./index-873e04aa.js";const M=["srcdoc"],N=L({__name:"EmailContent",props:{content:{type:String,required:!0}},setup(v){const k=v,m=y(null),i=y(k.content),x=w(()=>{const e=document.querySelectorAll('link[rel="stylesheet"]');for(const n of e){const t=n.getAttribute("href");if(t!=null&&t.includes("/assets/helpdesk/desk/")&&t.endsWith(".css"))return t}return"/assets/helpdesk/desk/index.css"}),s=new DOMParser().parseFromString(i.value,"text/html"),A=s.querySelectorAll("div.gmail_quote"),S=s.querySelectorAll("div#appendonsend"),_=s.querySelectorAll("p.reply-to-content");A.length?i.value=h(s,"div.gmail_quote",!0):S.length?i.value=h(s,"div#appendonsend"):_.length&&(i.value=h(s,"p.reply-to-content"));function h(e,n,t=!1){function o(l){const r=l.querySelectorAll(n);if(r.length===0)return;const c=r[0];C(c,t),o(l)}return o(e),e.body.innerHTML}function C(e,n){var c,u,f;if(!e)return;const t=Math.random().toString(36).substring(2,7),o=s.createElement("div");o.classList.add("replied-content");const l=s.createElement("label");l.classList.add("collapse"),l.setAttribute("for",t),l.innerHTML="...",o.appendChild(l);const r=s.createElement("input");if(r.setAttribute("id",t),r.setAttribute("class","replyCollapser"),r.setAttribute("type","checkbox"),o.appendChild(r),n){const a=e.previousElementSibling;a&&a.tagName==="BR"&&a.remove();const p=e.cloneNode(!0);p.classList.remove("gmail_quote"),o.appendChild(p)}else{const a=Array.from(((c=e.parentElement)==null?void 0:c.children)||[]),p=a.indexOf(e),g=a.slice(p+1);if(g.length===0)return;const E=g.map(d=>d.cloneNode(!0)),b=s.createElement("div");b.append(...E),o.append(b);for(let d=p+1;d<a.length;d++)(u=e.parentElement)==null||u.removeChild(a[d])}(f=e.parentElement)==null||f.replaceChild(o,e)}const q=w(()=>`
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="${x.value}" />
    <base target="_blank" />
    <style>
      :root {
        --bg-surface-gray-3: #ededed;
        --bg-surface-gray-4: #e2e2e2;
      }
      [data-theme='dark'] {
        --bg-surface-gray-3: #343434;
        --bg-surface-gray-4: #424242;
      }
      .replied-content .collapse {
        margin: 10px 0 10px 0;
        visibility: visible;
        cursor: pointer;
        display: flex;
        font-size: larger;
        font-weight: 700;
        height: 12px;
        line-height: 0.1;
        background: #e8eaed;
        width: 23px;
        justify-content: center;
        border-radius: 5px;
      }
      .replied-content .collapse:hover {
        background: #dadce0;
      }
      .replied-content .collapse + input {
        display: none;
      }
      .replied-content .collapse + input + div {
        display: none;
      }
      .replied-content .collapse + input:checked + div {
        display: block;
      }
      .email-content {
        word-break: break-word;
      }
      .email-content :is(:where(table):not(:where([class~='not-prose'], [class~='not-prose'] *))) {
        table-layout: auto;
      }
      .email-content :where(table):not(:where([class~='not-prose'], [class~='not-prose'] *)) {
        width: unset;
        table-layout: auto;
        text-align: unset;
        margin-top: unset;
        margin-bottom: unset;
        font-size: unset;
        line-height: unset;
      }
      .email-content :where(tbody tr):not(:where([class~='not-prose'], [class~='not-prose'] *)) {
        border-bottom-width: 0;
        border-bottom-color: transparent;
      }
      .email-content :is(:where(td):not(:where([class~='not-prose'], [class~='not-prose'] *))) {
        position: unset;
        border-width: 0;
        border-color: transparent;
        padding: 0;
      }
      .email-content :where(tbody td):not(:where([class~='not-prose'], [class~='not-prose'] *)) {
        vertical-align: revert;
      }
      .email-content :is(:where(img):not(:where([class~='not-prose'], [class~='not-prose'] *))) {
        border-width: 0;
      }
      .email-content :where(img):not(:where([class~='not-prose'], [class~='not-prose'] *)) {
        margin: 0;
      }
      .email-content :where(blockquote p:first-of-type):not(:where([class~='not-prose'], [class~='not-prose'] *))::before {
        content: none;
      }
      .email-content :where(blockquote p:last-of-type):not(:where([class~='not-prose'], [class~='not-prose'] *))::after {
        content: none;
      }
    </style>
  </head>
  <body>
    <div class="email-content prose-f">${i.value}</div>
  </body>
  </html>
  `);return R(m,e=>{e&&(e.onload=()=>{var c;const n=(c=e.contentWindow)==null?void 0:c.document.querySelector(".email-content");if(!n)return;const t=n.closest("html");if(!t)return;let o=document.documentElement.getAttribute("data-theme");t.setAttribute("data-theme",o);const l=H(i.value);l&&n.classList.add(l),e.style.height=t.offsetHeight+1+"px";const r=n.querySelectorAll(".replyCollapser");r.length&&r.forEach(u=>{u.addEventListener("change",()=>{e.style.height=t.offsetHeight+1+"px"})})})}),(e,n)=>(F(),I("iframe",{ref_key:"iframeRef",ref:m,srcdoc:q.value,class:"prose-f block h-10 max-h-[500px] w-full"},null,8,M))}});export{N as _};
//# sourceMappingURL=EmailContent.vue_vue_type_script_setup_true_lang-0a5fd252.js.map

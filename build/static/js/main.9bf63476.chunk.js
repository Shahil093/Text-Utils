(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(26),o=c.n(r),s=(c(34),c(6)),i=(c(35),c(11)),l=c(0);function d(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/about",children:e.aboutText})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/quotes",children:"Quotes"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/blogs",children:"Blog"})})]}),Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)("div",{className:"bg-primary rounded mx-2",onClick:function(){e.toggleMode("primary")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(l.jsx)("div",{className:"bg-warning rounded mx-2",onClick:function(){e.toggleMode("warning")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(l.jsx)("div",{className:"bg-danger rounded mx-2",onClick:function(){e.toggleMode("danger")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(l.jsx)("div",{className:"bg-success rounded mx-2",onClick:function(){e.toggleMode("success")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(l.jsx)("div",{className:"bg-white rounded mx-2",onClick:function(){e.toggleMode("white")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(l.jsx)("div",{className:"bg-dark rounded mx-2",onClick:function(){e.toggleMode("dark")},style:{height:"30px",width:"30px",cursor:"pointer"}})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function b(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{className:"mb-4",children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){r(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(l.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"}),Object(l.jsx)("button",{type:"submit",onClick:function(){var e=new SpeechSynthesisUtterance;e.text=n,window.speechSynthesis.speak(e)},className:"btn btn-warning mx-2 my-2",children:"Speak"})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h2",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," ",Object(l.jsx)("b",{children:"words and "})," ",n.length," ",Object(l.jsx)("b",{children:"characters"})]}),Object(l.jsxs)("p",{children:[.008*n.split(/\s+/).filter((function(e){return 0!==e.length})).length," ",Object(l.jsx)("b",{children:"Minutes read"})]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:n.length>0?n:"Nothing to preview!"})]})]})}function h(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:"About Us"}),Object(l.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(l.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(l.jsx)("strong",{children:"Analyze Your text "})})}),Object(l.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(l.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(l.jsx)("strong",{children:"Free to use "})})}),Object(l.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(l.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(l.jsx)("strong",{children:"Browser Compatible "})})}),Object(l.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."})})]})]})]})}d.defaultProps={title:"Set title here",aboutText:"About"};var j=c(24),u=c.n(j),x=c(28),m=c(48),p=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){(function(){var e=Object(x.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.quotable.io/random");case 2:t=e.sent,n(t.data.content);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=Object(a.useState)(b()),o=Object(s.a)(r,2),i=o[0],d=o[1];function b(){var e=Math.floor(360*Math.random()),t=Math.floor(50*Math.random())+50,c=Math.floor(25*Math.random())+25,a=Math.floor(50*Math.random())+50;return"linear-gradient(to right, hsl(".concat(e,", ").concat(t,"%, ").concat(c,"%), hsl(").concat(e+30,", ").concat(t,"%, ").concat(c,"%, ").concat(a,"%)")}return Object(a.useEffect)((function(){var e=setInterval((function(){d(b())}),2e3);return function(){return clearInterval(e)}}),[]),Object(l.jsx)("div",{className:"quotes-container",style:{background:i},children:Object(l.jsxs)("div",{className:"quote-wrapper",children:[Object(l.jsx)("p",{className:"quote-text",children:Object(l.jsxs)("b",{children:['" ',c,' "']})}),Object(l.jsx)("button",{className:"quote-button",onClick:function(){m.a.get("https://api.quotable.io/random").then((function(e){return n(e.data.content)})).catch((function(e){return console.log(e)}))},children:"New Quote"})]})})},g=c(29),O=function(e){var t=e.onSubmit,c=Object(a.useState)(""),n=Object(s.a)(c,2),r=n[0],o=n[1],i=Object(a.useState)(""),d=Object(s.a)(i,2),b=d[0],h=d[1],j={marginBottom:"1rem",padding:"0.5rem",borderRadius:"0.3rem",border:"none",boxShadow:"0 0.1rem 0.2rem rgba(0, 0, 0, 0.1)",width:"100%",boxSizing:"border-box"};return Object(l.jsxs)("form",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"2rem",backgroundColor:"#fff",borderRadius:"0.5rem",boxShadow:"0 0.5rem 1rem rgba(0, 0, 0, 0.15)",maxWidth:"50rem",margin:"0 auto"},onSubmit:function(e){e.preventDefault(),t({title:r,content:b}),o(""),h("")},children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("b",{children:"Title:"}),Object(l.jsx)("input",{style:j,type:"text",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:[Object(l.jsx)("b",{children:"Content:"}),Object(l.jsx)("textarea",{style:j,value:b,onChange:function(e){return h(e.target.value)}})]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{style:{backgroundColor:"#f1356d",color:"#fff",border:"none",padding:"0.5rem 1rem",borderRadius:"0.3rem",cursor:"pointer"},type:"submit",children:"Create Post"})]})},f=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)("#f1f1f1"),o=Object(s.a)(r,2),i=o[0],d=o[1];Object(a.useEffect)((function(){var e=setInterval((function(){d(b())}),3e3);return function(){return clearInterval(e)}}),[]);var b=function(){var e=["#f1f1f1","#e6e6e6","#d9d9d9","#cccccc","#bfbfbf"];return e[Math.floor(Math.random()*e.length)]},h={backgroundColor:"#fff",borderRadius:"10px",padding:"20px",margin:"10px 0",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.1)",width:"100%",maxWidth:"600px"},j={backgroundColor:"#e57373",color:"#ffd",border:"none",borderRadius:"5px",padding:"5px 10px",cursor:"pointer",marginTop:"10px",marginRight:"10px"};return Object(l.jsx)("div",{style:{background:i},children:Object(l.jsxs)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"50px"},children:[Object(l.jsx)("h1",{style:{color:"#333",fontSize:"3rem",fontWeight:"bold",marginBottom:"20px"},children:"My Blog"}),Object(l.jsx)(O,{onSubmit:function(e){n([].concat(Object(g.a)(c),[e]))}}),c.map((function(e){return Object(l.jsxs)("div",{style:h,children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)("p",{children:e.content}),Object(l.jsx)("button",{style:j,onClick:function(){return t=e.id,n(c.filter((function(e){return e.id!==t}))),void alert("Deleted!");var t},children:"Delete Post"}),Object(l.jsx)("button",{style:j,onClick:function(){return t=e.id,navigator.clipboard.writeText(t),void alert("Copied to clipboard!");var t},children:"Copy Post"})]},e.id)}))]})})},v=function(){return Object(l.jsx)("footer",{className:"footer-container",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:'&copy - "MD SHAHIL"  2023 , Try TextUtils - word counter, character counter, remove extra spaces, speech, quotes'}),"Follow for more:- ",Object(l.jsx)("b",{children:"https://github.com/Shahil093"})," "]})})};var y=function(e){return Object(l.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},w=c(4);var N=function(){var e=Object(a.useState)("light"),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),o=Object(s.a)(r,2),j=o[0],u=o[1],x=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{title:"TextUtils",mode:c,toggleMode:function(e){"light"===c?(n("dark"),document.body.style.backgroundColor="#042743",x("Dark mode has been enabled, Refresh to return","success")):(n("light"),document.body.style.backgroundColor="white",x("Light mode has been enabled, Refresh to return","success"))}},new Date),Object(l.jsx)(y,{alert:j}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsxs)(w.c,{children:[Object(l.jsx)(w.a,{exact:!0,path:"/about",children:Object(l.jsx)(h,{mode:c})}),Object(l.jsx)(w.a,{path:"/quotes",component:p}),Object(l.jsx)(w.a,{exact:!0,path:"/quotes",children:Object(l.jsx)(h,{mode:c})}),Object(l.jsx)(w.a,{path:"/blog",component:f}),Object(l.jsx)(w.a,{exact:!0,path:"/blog",children:Object(l.jsx)(h,{mode:c})}),Object(l.jsx)(w.a,{exact:!0,path:"/",children:Object(l.jsx)(b,{showAlert:x,heading:"Try TextUtils - word counter, character counter, remove extra spaces, speech",mode:c})}),Object(l.jsx)(f,{})]}),Object(l.jsx)(v,{style:{marginBottom:"50px"}})]})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),k()}},[[46,1,2]]]);
//# sourceMappingURL=main.9bf63476.chunk.js.map
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{334:function(e,t,s){},335:function(e,t,s){},336:function(e,t,s){},337:function(e,t,s){},338:function(e,t,s){},339:function(e,t,s){"use strict";s.r(t);var c=s(12),i=s.n(c),n=s(52),r=s.n(n),a=s(20),l=(s(59),s(60),s(2));function o(){return Object(l.jsxs)("ul",{className:"menu",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#about-me",children:"About me"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#portfolio",children:"Portfolio"})})]})}s(62);function j(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(l.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("a",{href:"intro",className:"logo",children:"Kucherenko."})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(l.jsx)("span",{className:"line1"}),Object(l.jsx)("span",{className:"line2"}),Object(l.jsx)("span",{className:"line3"})]})]})]})})}s(63);var d=s(53),b=s(54),h=s.n(b),u=function(){return Object(l.jsx)(h.a,{params:{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})};function m(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(d.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Front-End Developer"]})}),[]),Object(l.jsxs)("div",{className:"intro",id:"intro",children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:"assets/IMG_0762-removebg.png",alt:""})})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h1",{children:"I'm Evgeniya Kucherenko"}),Object(l.jsxs)("h3",{children:["Junior"," ",Object(l.jsx)("span",{className:"ityped-cursor",ref:e})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"icon",href:"https://github.com/ZhenyaKu",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:"assets/github.svg",alt:""})}),Object(l.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/evgenia-kuzbit-556542174/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:"assets/linkedin.svg",alt:""})})]})]})})]})}s(334);function p(e){var t=e.id,s=e.title,c=e.active,i=e.setSelected;return Object(l.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return i(t)},children:s})}s(335);var O=[{id:1,title:"Monsters rolodex app ",img:"assets/monster_rolodex.png",url:"https://github.com/ZhenyaKu/monsters-rolodex"},{id:2,title:"ToDo list",img:"assets/todo_list.png",url:"https://github.com/ZhenyaKu/todo-list-react"},{id:3,title:"E-commerce web-site",img:"assets/e-commerce.png",url:"https://github.com/ZhenyaKu/crwn-clothing"},{id:4,title:"Calculator",img:"assets/calculator.png",url:"https://github.com/ZhenyaKu/calculator-react-hooks"},{id:5,title:"Weather app ",img:"assets/weather_app.png",url:"https://github.com/ZhenyaKu/weather-app-react "},{id:6,title:"Chat app ",img:"assets/chat_app.png",url:"https://github.com/ZhenyaKu/simple-chat"},{id:7,title:"Movie app ",img:"assets/movie_app.png",url:"https://github.com/ZhenyaKu/simple-chat"}],g=[{id:1,title:"Landing page",img:"assets/moshify.png",url:"https://github.com/ZhenyaKu/landing-page-moshify"}],x=[{id:1,title:"Image gallery",img:"assets/image_gallery.png",url:"https://github.com/ZhenyaKu/image-gallery-grid"},{id:2,title:"Recipe art page",img:"assets/recipe.png",url:"https://github.com/ZhenyaKu/recipe-art-pages"}];function f(){var e=Object(c.useState)("react"),t=Object(a.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)([]),r=Object(a.a)(n,2),o=r[0],j=r[1];return Object(c.useEffect)((function(){switch(s){case"react":j(O);break;case"html":j(g);break;case"css":j(x);break;default:j(O)}}),[s]),Object(l.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(l.jsx)("h2",{children:"Portfolio"}),Object(l.jsx)("ul",{children:[{id:"react",title:"React"},{id:"html",title:"HTML"},{id:"css",title:"CSS"}].map((function(e){return Object(l.jsx)(p,{title:e.title,active:s===e.id,setSelected:i,id:e.id},e.id)}))}),Object(l.jsx)("div",{className:"container",children:o.map((function(e){return Object(l.jsxs)("a",{href:e.url,className:"item",target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)("img",{src:e.img,alt:""}),Object(l.jsx)("h3",{children:e.title})]},e.id)}))})]})}s(336);function v(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(l.jsx)("div",{className:"menu-mobile "+(t&&"active"),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#about-me",children:"About Me"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#portfolio",children:"Portfolio"})})]})})}s(337);var N=function(e){var t=e.title,s=e.percent,c=e.color;return Object(l.jsxs)("div",{className:"skill",children:[Object(l.jsxs)("div",{className:"skill-info",children:[Object(l.jsx)("div",{className:"skill-title",children:t}),Object(l.jsxs)("div",{className:"skill-percent",children:[s,"%"]})]}),Object(l.jsx)("div",{className:"skill-progress",children:Object(l.jsx)("div",{className:"skill-progress-filled",style:{width:"".concat(s,"%"),backgroundColor:c}})})]})};s(338);function k(){return Object(l.jsxs)("div",{className:"about-me",id:"about-me",children:[Object(l.jsx)("h2",{className:"title",children:"About Me"}),Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("div",{className:"foto",children:Object(l.jsx)("img",{src:"assets/IMG_1344.jpg",alt:""})}),Object(l.jsxs)("div",{className:"bio",children:[Object(l.jsx)("p",{children:"I'm just beginning my career in IT. I am looking for opportunities & new challenging goals. I like to improve myself and learn new technologies, that\u2019s why I spend my free time by reading articles, tutorials, guides, and using new knowledge in my projects."}),Object(l.jsx)("a",{href:"https://docs.google.com/document/d/1sxQQ3pvbb64NK3MwUpUSbqYaNSCl5-LXmVRhGc5qZOA/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("button",{className:"btn",children:"Resume"})})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"title-skills",children:"Skills"}),Object(l.jsxs)("div",{className:"skills-list",children:[Object(l.jsx)(N,{title:"JavaScript",percent:70,color:"#845ef7"}),Object(l.jsx)(N,{title:"TypeScript",percent:40,color:"#845ef7"}),Object(l.jsx)(N,{title:"React",percent:60,color:"#845ef7"}),Object(l.jsx)(N,{title:"Redux",percent:60,color:"#845ef7"}),Object(l.jsx)(N,{title:"HTML",percent:80,color:"#845ef7"}),Object(l.jsx)(N,{title:"CSS/SCSS",percent:70,color:"#845ef7"})]})]})]})}var y=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),s=t[0],i=t[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(j,{menuOpen:s,setMenuOpen:i}),Object(l.jsx)(v,{menuOpen:s,setMenuOpen:i}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(m,{}),Object(l.jsx)(k,{}),Object(l.jsx)(f,{})]})]})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))},59:function(e,t,s){},60:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){}},[[339,1,2]]]);
//# sourceMappingURL=main.e2a21835.chunk.js.map
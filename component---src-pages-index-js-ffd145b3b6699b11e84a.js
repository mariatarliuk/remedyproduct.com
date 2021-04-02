/*! For license information please see component---src-pages-index-js-ffd145b3b6699b11e84a.js.LICENSE.txt */
(self.webpackChunkrps_site=self.webpackChunkrps_site||[]).push([[678],{1505:function(e,t,n){var a,o;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),a=this;do{for(t=n.length;0<=--t&&n.item(t)!==a;);}while(t<0&&(a=a.parentElement));return a}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var a=(new Date).getTime(),o=Math.max(0,16-(a-e)),r=window.setTimeout((function(){t(a+o)}),o);return e=a+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),o=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,o=-1,r="",i=n.charCodeAt(0);++o<a;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+r},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n},i=function(t,n,a){0===t&&document.body.focus(),a||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},l=function(t,n,a,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:o}});document.dispatchEvent(r)}};return function(c,s){var u,m,d,f,p={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||l("scrollCancel",u)},animateScroll:function(a,c,s){p.cancelScroll();var m=n(u||t,s||{}),h="[object Number]"===Object.prototype.toString.call(a),E=h||!a.tagName?null:a;if(h||E){var g=e.pageYOffset;m.header&&!d&&(d=document.querySelector(m.header));var v,w,y,b,S,C,N,Z,A=r(d),x=h?a:function(t,n,a,r){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-a,0),r&&(i=Math.min(i,o()-e.innerHeight)),i}(E,A,parseInt("function"==typeof m.offset?m.offset(a,c):m.offset,10),m.clip),k=x-g,M=o(),O=0,I=(v=k,y=(w=m).speedAsDuration?w.speed:Math.abs(v/1e3*w.speed),w.durationMax&&y>w.durationMax?w.durationMax:w.durationMin&&y<w.durationMin?w.durationMin:parseInt(y,10)),T=function t(n){var o,r,s;b||(b=n),O+=n-b,C=g+k*(r=S=1<(S=0===I?0:O/I)?1:S,"easeInQuad"===(o=m).easing&&(s=r*r),"easeOutQuad"===o.easing&&(s=r*(2-r)),"easeInOutQuad"===o.easing&&(s=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===o.easing&&(s=r*r*r),"easeOutCubic"===o.easing&&(s=--r*r*r+1),"easeInOutCubic"===o.easing&&(s=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===o.easing&&(s=r*r*r*r),"easeOutQuart"===o.easing&&(s=1- --r*r*r*r),"easeInOutQuart"===o.easing&&(s=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===o.easing&&(s=r*r*r*r*r),"easeOutQuint"===o.easing&&(s=1+--r*r*r*r*r),"easeInOutQuint"===o.easing&&(s=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),o.customEasing&&(s=o.customEasing(r)),s||r),e.scrollTo(0,Math.floor(C)),function(t,n){var o=e.pageYOffset;if(t==n||o==n||(g<n&&e.innerHeight+o)>=M)return p.cancelScroll(!0),i(a,n,h),l("scrollStop",m,a,c),!(f=b=null)}(C,x)||(f=e.requestAnimationFrame(t),b=n)};0===e.pageYOffset&&e.scrollTo(0,0),N=a,Z=m,h||history.pushState&&Z.updateURL&&history.pushState({smoothScroll:JSON.stringify(Z),anchor:N.id},document.title,N===document.documentElement?"#top":"#"+N.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(a,Math.floor(x),!1):(l("scrollStart",m,a,c),p.cancelScroll(!0),e.requestAnimationFrame(T))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(m=t.target.closest(c))&&"a"===m.tagName.toLowerCase()&&!t.target.closest(u.ignore)&&m.hostname===e.location.hostname&&m.pathname===e.location.pathname&&/#/.test(m.href)){var n,o;try{n=a(decodeURIComponent(m.hash))}catch(t){n=a(m.hash)}if("#"===n){if(!u.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(u),p.animateScroll(o,m))}},E=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){u&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",E,!1),p.cancelScroll(),f=d=m=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),u=n(t,s||{}),d=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&e.addEventListener("popstate",E,!1)}(),p}}(o)}.apply(t,[]))||(e.exports=a)},9555:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(7294),o=n(7408),r=n(1476),i=n(8410),l=n(6187),c=n(994),s=n(9643),u=n(9188),m=n(3495),d=function(e){var t=e.title,n=e.text,l=e.image;return a.createElement(o.Z,{lg:4,md:12},a.createElement(r.Z,{className:"cardContainer pt-4 pb-4 mb-5"},a.createElement(i.Z.Link,{href:"/"},a.createElement(r.Z.Img,{variant:"top",src:l,className:"cardImage"}),a.createElement(r.Z.Body,{className:"p-2"},a.createElement(r.Z.Title,{className:"textTitle"},t.toUpperCase()),a.createElement("div",{className:"horizontalLine"}),a.createElement(r.Z.Text,null,n)))))},f=function(){return a.createElement("div",{className:"mainContainer position-relative"},a.createElement("div",{className:"heroContainer position-relative"},a.createElement("div",{className:"heroBg position-absolute"}),a.createElement("div",{className:"mainBg position-absolute"}),a.createElement("div",{className:"hero pt-5"},a.createElement(l.Z,{className:"mainTextContainer d-flex flex-column justify-content-center align-items-center "},a.createElement("div",{className:"titleContent"},a.createElement(c.Z,null,a.createElement(o.Z,{className:"mainText mb-4",lg:9,xs:12},"Remedy product studio is a product partner")),a.createElement(c.Z,{className:"linksWork"},a.createElement(o.Z,{className:"p-2 mb-3"},a.createElement(i.Z.Link,{href:"mailto:Hello@remedyproduct.com",className:"linkText"},"Work with us")))),a.createElement(c.Z,{className:"arrowLink position-absolute"},a.createElement(o.Z,null,a.createElement(i.Z.Link,{href:"#learnMore"},a.createElement(s.Z,{src:u.Ms.arrow,alt:"arrow"}))))))),a.createElement("div",{className:"mainContent position-relative"},a.createElement(l.Z,null,a.createElement(c.Z,null,a.createElement(o.Z,{className:"blueBackText mt-0",id:"learnMore"},"Supporting founders and established companies in creating the next generation of great digital products")))),a.createElement("div",{className:"cardBlock position-relative"},a.createElement(l.Z,null,a.createElement(c.Z,null,m.U7.map((function(e,t){return a.createElement(d,{title:e.title,text:e.text,image:e.image,key:t})})))),a.createElement("div",{className:"backgroundTop position-absolute"}),a.createElement("div",{className:"backgroundBottom position-absolute left-0 "})))},p=n(3052),h=n(5044),E=n(1401),g=function(e){var t=e.location;return a.createElement(a.Fragment,null,a.createElement(E.Z,{path:t.pathname}),a.createElement(p.Z,null,a.createElement(f,null)),a.createElement(h.Z,null))}},3052:function(e,t,n){"use strict";var a=n(7294),o=n(3021);"undefined"!=typeof window&&n(1505)('a[href*="#"]');t.Z=function(e){var t=e.children;return a.createElement(a.Fragment,null,t,a.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ffd145b3b6699b11e84a.js.map
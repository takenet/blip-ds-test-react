"use strict";(self.webpackChunkblip_ds_react=self.webpackChunkblip_ds_react||[]).push([[2338,4302],{2338:function(t,n,e){e.r(n),e.d(n,{bds_menu:function(){return u}});var o=e(6189),i=e(4302),r=function(t,n,e,o){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{l(o.next(t))}catch(n){r(n)}}function u(t){try{l(o.throw(t))}catch(n){r(n)}}function l(t){t.done?e(t.value):i(t.value).then(s,u)}l((o=o.apply(t,n||[])).next())}))},s=function(t,n){var e,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(t){return function(n){return l([t,n])}}function l(r){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=n.call(t,s)}catch(u){r=[6,u],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},u=function(){function t(t){var n=this;(0,o.r)(this,t),this.refElement=null,this.intoView=null,this.menupositionTop=0,this.menupositionLeft=0,this.menu=null,this.position="right",this.open=!1,this.onClickCloseButtom=function(){n.open=!1}}return t.prototype.componentWillLoad=function(){this.refElement=document.getElementById(this.menu),this.intoView=(0,i.g)(this.refElement)},t.prototype.toggle=function(){return r(this,void 0,void 0,(function(){return s(this,(function(t){return this.open=!this.open,[2]}))}))},t.prototype.openMenu=function(){var t=(0,i.p)({actionElement:this.refElement,changedElement:this.menuElement,intoView:this.intoView});this.menupositionTop=t.top,this.menupositionLeft=t.left},t.prototype.render=function(){var t,n=this,e={top:"".concat(this.menupositionTop,"px"),left:"".concat(this.menupositionLeft,"px")};return(0,o.h)(o.H,null,this.open&&(0,o.h)("div",{class:{outzone:!0},onClick:function(){return n.onClickCloseButtom()}}),(0,o.h)("div",{ref:function(t){return n.menuElement=t},class:(t={menu:!0},t["menu__".concat(this.position)]=!0,t.menu__open=this.open,t),style:e},(0,o.h)("slot",null)))},Object.defineProperty(t,"watchers",{get:function(){return{open:["openMenu"]}},enumerable:!1,configurable:!0}),t}();u.style=".menu{position:fixed;pointer-events:none;top:0;left:0;padding:16px 2px;background-color:#ffffff;border-radius:8px;-webkit-box-shadow:0px 10px 16px rgba(7, 71, 166, 0.12);box-shadow:0px 10px 16px rgba(7, 71, 166, 0.12);max-width:224px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:80000}.menu__open{pointer-events:auto;opacity:1}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh}"},4302:function(t,n,e){e.r(n),e.d(n,{g:function(){return o},p:function(){return i}});var o=function t(n){return null===n?null:n.classList.contains("element_scrolled")||"BODY"==(null===n||void 0===n?void 0:n.tagName)?n:t(n.offsetParent)};function i(t){var n=t.actionElement,e=t.changedElement,o=t.intoView,i=o.offsetParent,r=!!o.classList.contains("element_scrolled"),s=r?n.offsetTop-o.scrollTop+i.offsetTop:n.offsetTop-window.scrollY,u=r?n.offsetLeft+i.offsetLeft:n.offsetLeft,l=(null===e||void 0===e?void 0:e.offsetHeight)>window.innerHeight-s?s-(null===e||void 0===e?void 0:e.offsetHeight)-16:s+n.offsetHeight+16,f=(null===e||void 0===e?void 0:e.offsetWidth)>window.innerWidth-u?u+n.offsetWidth-(null===e||void 0===e?void 0:e.offsetWidth):u,c=window.innerHeight-e.offsetHeight,p=window.innerWidth-e.offsetWidth;return{top:l<8?8:l>c?c-8:l,left:f<0?0:f>p?p:f}}}}]);
//# sourceMappingURL=2338.7ccab61c.chunk.js.map
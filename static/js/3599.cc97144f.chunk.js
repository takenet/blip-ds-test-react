"use strict";(self.webpackChunkblip_ds_react=self.webpackChunkblip_ds_react||[]).push([[3599],{3599:function(i,e,r){r.r(e),r.d(e,{bds_radio:function(){return a}});var t=r(6189),o=0,a=function(){function i(i){var e=this;(0,t.r)(this,i),this.bdsChange=(0,t.c)(this,"bdsChange",7),this.bdsClickChange=(0,t.c)(this,"bdsClickChange",7),this.checked=!1,this.disabled=!1,this.dataTest=null,this.onClick=function(i){e.checked=!e.checked,e.bdsClickChange.emit({checked:e.checked}),i.stopPropagation()},this.refNativeInput=function(i){e.nativeInput=i}}return i.prototype.checkedChanged=function(i){this.bdsChange.emit({checked:i})},i.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},i.prototype.getValue=function(){return Promise.resolve(this.nativeInput.checked)},i.prototype.connectedCallback=function(){this.radioId=this.refer||"bds-radio-".concat(o++)},i.prototype.handleClickKey=function(i){"Enter"!==i.key&&" "!==i.key||this.disabled||(this.onClick(i),i.preventDefault(),this.bdsClickChange.emit({checked:this.checked}))},i.prototype.render=function(){return(0,t.h)(t.H,null,(0,t.h)("label",{class:"radio",htmlFor:this.radioId},(0,t.h)("input",{class:"radio__input",type:"radio",ref:this.refNativeInput,id:this.radioId,onClick:this.onClick,disabled:this.disabled,checked:this.checked,value:this.value,name:this.name,"data-test":this.dataTest}),(0,t.h)("div",{class:"radio__circle"},this.disabled?"":(0,t.h)("div",{class:"focus",tabindex:"0",onKeyDown:this.handleClickKey.bind(this)}),this.disabled?"":(0,t.h)("div",{class:"hover"}),(0,t.h)("div",{class:"radio__circle__pointer"})),this.label&&(0,t.h)("bds-typo",{class:"radio__text",variant:"fs-14",bold:this.checked?"bold":"regular",tag:"span"},this.label),(0,t.h)("slot",null)))},Object.defineProperty(i,"watchers",{get:function(){return{checked:["checkedChanged"]}},enumerable:!1,configurable:!0}),i}();a.style=":host{display:-ms-flexbox;display:flex}.radio{display:-ms-flexbox;display:flex;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.radio [type=radio]{display:none}.radio [type=radio]:focus{outline:0}.radio__circle{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px;-ms-flex-negative:0;flex-shrink:0;border:2px solid #505f79;padding:4px;border-radius:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;position:relative}.radio__circle__pointer{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;border-radius:100%;background:transparent;height:10px;width:10px}.radio__circle .hover{width:0;height:0;opacity:0}.radio__circle:hover{border-color:#6e7b91}.radio__circle:hover .hover{display:-ms-flexbox;display:flex;background-color:#202c44;position:absolute;width:40px;height:40px;opacity:0.1;border-radius:24px;-webkit-transition:width 0.65s, height 0.65s;transition:width 0.65s, height 0.65s}.radio__circle .focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid #c226fb;border-radius:4px;padding:4px;width:100%;height:100%;outline:none}.radio__text{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;padding-left:8px;color:#202c44}.radio__input[type=radio]:checked~.radio__circle{background:transparent;border-color:#202c44}.radio__input[type=radio]:checked~.radio__circle .radio__circle__pointer{background-color:#3f7de8}.radio__input[type=radio]:checked~.radio__circle:hover{border-color:#202c44}.radio__input[type=radio]:checked~.radio__circle:hover .radio__circle__pointer{background-color:#125ad5}.radio__input[type=radio]:disabled~.radio__circle{border-color:#6e7b91;background-color:#d2dfe6}.radio__input[type=radio]:disabled~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:hover~.radio__circle{border-color:#6e7b91;background-color:#d2dfe6}.radio__input[type=radio]:disabled:hover~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:checked~.radio__circle{border-color:#6e7b91;background-color:#d2dfe6}.radio__input[type=radio]:disabled:checked~.radio__circle .radio__circle__pointer{background-color:#505f79}.radio__input[type=radio]:disabled:checked:hover~.radio__circle{border-color:#6e7b91;background-color:#d2dfe6}.radio__input[type=radio]:disabled:checked:hover~.radio__circle .radio__circle__pointer{background-color:#505f79}.radio__input[type=radio]:disabled~.radio__text{color:#505f79;cursor:not-allowed}.radio__input[type=radio]:disabled~.radio__circle{cursor:not-allowed}"}}]);
//# sourceMappingURL=3599.cc97144f.chunk.js.map
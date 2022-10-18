"use strict";(self.webpackChunkblip_ds_react=self.webpackChunkblip_ds_react||[]).push([[1500],{1500:function(e,t,i){i.r(t),i.d(t,{bds_select:function(){return o}});var n=i(6189),o=function(){function e(e){var t=this;(0,n.r)(this,e),this.bdsChange=(0,n.c)(this,"bdsChange",7),this.bdsCancel=(0,n.c)(this,"bdsCancel",7),this.bdsFocus=(0,n.c)(this,"bdsFocus",7),this.bdsBlur=(0,n.c)(this,"bdsBlur",7),this.isOpen=!1,this.text="",this.validationDanger=!1,this.isPressed=!1,this.validationMesage="",this.danger=!1,this.disabled=!1,this.label="",this.icon="",this.placeholder="",this.helperMessage="",this.errorMessage="",this.optionsPosition="bottom",this.dataTest=null,this.refNativeInput=function(e){t.nativeInput=e},this.onClickWrapper=function(){t.onFocus(),t.toggle(),t.nativeInput&&t.nativeInput.focus()},this.onFocus=function(){t.bdsFocus.emit(),t.isPressed=!0},this.onBlur=function(){t.bdsBlur.emit(),t.isPressed=!1},this.toggle=function(){t.disabled||(t.isOpen=!t.isOpen)},this.getText=function(){var e,i,n=t.childOptions.find((function(e){return e.value==t.value}));if((null===n||void 0===n?void 0:n.status)||(null===n||void 0===n?void 0:n.bulkOption)){if(t.internalOptions){var o=t.internalOptions.find((function(e){return e.value==n.value}));if(o)return o.label}return n.querySelector("#bds-typo-label-".concat(t.value)).textContent}return(null===n||void 0===n?void 0:n.titleText)?n.titleText:null!==(i=null===(e=null===n||void 0===n?void 0:n.textContent)||void 0===e?void 0:e.trim())&&void 0!==i?i:""},this.handler=function(e){var i=e.detail.value;t.value=i,t.toggle()},this.keyPressWrapper=function(e){var i,n,o,r,s,a,l,p,d="bds-select"===e.target.localName,c="bds-input"===e.target.localName;switch(e.key){case"Enter":t.isOpen||!d&&!c||t.toggle();break;case"ArrowDown":if(t.childOptionSelected)return void(null===(n=null===(i=t.childOptionSelected.nextElementSibling)||void 0===i?void 0:i.firstElementChild)||void 0===n||n.focus());null===(r=null===(o=t.el.firstElementChild)||void 0===o?void 0:o.firstElementChild)||void 0===r||r.focus();break;case"ArrowUp":if(t.childOptionSelected)return void(null===(a=null===(s=t.childOptionSelected.previousElementSibling)||void 0===s?void 0:s.firstElementChild)||void 0===a||a.focus());null===(p=null===(l=t.el.previousElementSibling)||void 0===l?void 0:l.firstElementChild)||void 0===p||p.focus()}}}return e.prototype.valueChanged=function(){this.bdsChange.emit({value:this.value});for(var e=0,t=this.childOptions;e<t.length;e++){var i=t[e];i.selected=this.value===i.value}this.text=this.getText()},e.prototype.handleWindow=function(e){this.el.contains(e.target)||(this.isOpen=!1)},e.prototype.componentWillLoad=function(){this.options&&this.optionsChanged()},e.prototype.componentWillRender=function(){this.options&&this.updateOptions();for(var e=0,t=this.childOptions;e<t.length;e++){var i=t[e];i.selected=this.value===i.value,i.addEventListener("optionSelected",this.handler)}this.text=this.getText()},e.prototype.componentDidLoad=function(){for(var e=0,t=this.childOptions;e<t.length;e++){var i=t[e];i.selected=this.value===i.value,i.addEventListener("optionSelected",this.handler)}this.text=this.getText()},e.prototype.optionsChanged=function(){this.updateOptions()},e.prototype.updateOptions=function(){this.options&&("string"===typeof this.options?this.internalOptions=JSON.parse(this.options):this.internalOptions=this.options)},Object.defineProperty(e.prototype,"childOptions",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")):Array.from(this.el.querySelectorAll("bds-select-option"))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"childOptionSelected",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")).find((function(e){return e.selected})):Array.from(this.el.querySelectorAll("bds-select-option")).find((function(e){return e.selected}))},enumerable:!1,configurable:!0}),e.prototype.renderIcon=function(){return this.icon&&(0,n.h)("div",{class:{input__icon:!0,"input__icon--large":!!this.label}},(0,n.h)("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))},e.prototype.renderLabel=function(){return this.label&&(0,n.h)("label",{class:{input__container__label:!0,"input__container__label--pressed":this.isPressed&&!this.disabled}},(0,n.h)("bds-typo",{variant:"fs-12",bold:"bold"},this.label))},e.prototype.renderMessage=function(){var e=this.danger?"error":"info",t=this.danger?this.errorMessage:this.helperMessage;!t&&this.validationDanger&&(t=this.validationMesage);var i=this.danger||this.validationDanger?"input__message input__message--danger":"input__message";if(t)return(0,n.h)("div",{class:i,part:"input__message"},(0,n.h)("div",{class:"input__message__icon"},(0,n.h)("bds-icon",{size:"x-small",name:e,theme:"solid",color:"inherit"})),(0,n.h)("bds-typo",{variant:"fs-12"},t))},e.prototype.render=function(){var e=this.isPressed&&!this.disabled,t=this.isOpen?"arrow-up":"arrow-down";return(0,n.h)("div",{class:"select",tabindex:"0"},(0,n.h)("div",{class:{element_input:!0},"aria-disabled":this.disabled?"true":null},(0,n.h)("div",{class:{input:!0,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":e},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper,part:"input-container"},this.renderIcon(),(0,n.h)("div",{class:"input__container"},this.renderLabel(),(0,n.h)("div",{class:{input__container__wrapper:!0}},(0,n.h)("input",{ref:this.refNativeInput,class:{input__container__text:!0},onFocus:this.onFocus,onBlur:this.onBlur,value:this.text,disabled:this.disabled,placeholder:this.placeholder,readonly:!0,"data-test":this.dataTest}))),(0,n.h)("div",{class:"select__icon"},(0,n.h)("bds-icon",{size:"small",name:t,color:"inherit"}))),this.renderMessage()),(0,n.h)("div",{class:{select__options:!0,"select__options--position-top":"top"===this.optionsPosition,"select__options--open":this.isOpen}},this.internalOptions?this.internalOptions.map((function(e,t){return(0,n.h)("bds-select-option",{value:e.value,key:t,bulkOption:e.bulkOption,status:e.status},e.label)})):(0,n.h)("slot",null)))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"],options:["optionsChanged"]}},enumerable:!1,configurable:!0}),e}();o.style=':host{display:block}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.element_input input::-moz-placeholder{color:#b9cbd3;opacity:1}.element_input input:-ms-input-placeholder{color:#b9cbd3;opacity:1}.element_input input::-ms-input-placeholder{color:#b9cbd3;opacity:1}.element_input input::placeholder{color:#b9cbd3;opacity:1}.element_input input::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:#ffffff}.input--state-primary{border:1px solid #d2dfe6;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary:hover{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4);box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4)}.input--state-primary .input__icon{color:#3f7de8;background-color:#e8f2ff}.input--state-primary .input__container__label{color:#8ca0b3}.input--state-primary .input__container__label--pressed{color:#3f7de8}.input--state-primary .input__container__text{caret-color:#3f7de8;color:#202c44}.input--state-danger{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger:hover{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #ffa5a5;box-shadow:0 0 0 2px #ffa5a5}.input--state-danger .input__icon{color:#ff4c4c;background-color:#ffa5a5}.input--state-danger .input__container__label{color:#8ca0b3}.input--state-danger .input__container__label--pressed{color:#ff4c4c}.input--state-danger .input__container__text{caret-color:#ff4c4c;color:#202c44}.input--state-disabled{cursor:not-allowed;border:1px solid #e7edf4;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:#f3f6fa}.input--state-disabled:hover{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid #e7edf4;box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #e7edf4;box-shadow:0 0 0 2px #e7edf4}.input--state-disabled .input__icon{color:#b9cbd3;background-color:#f8fbfb}.input--state-disabled .input__container__label{color:#b9cbd3}.input--state-disabled .input__container__label--pressed{color:#b9cbd3}.input--state-disabled .input__container__text{caret-color:#b9cbd3;color:#b9cbd3}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:#8ca0b3;word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger{color:#ff4c4c}.select{position:relative;outline:none}.select__icon{color:#8ca0b3;display:-ms-flexbox;display:flex}.select__options{background:#f8fbfb;width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);visibility:hidden;opacity:0;-webkit-box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4);box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4)}.select__options::-webkit-scrollbar{width:16px;background-color:transparent}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.select__options--position-top{top:auto;bottom:100%;-webkit-transform-origin:bottom left;transform-origin:bottom left}.inside-input-left{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:8px}.input-chips__chip{margin:2px 4px 2px 0px}.input-chips__chips{-ms-flex:1;flex:1}'}}]);
//# sourceMappingURL=1500.56b211c9.chunk.js.map
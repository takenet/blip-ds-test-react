"use strict";(self.webpackChunkblip_ds_test_react=self.webpackChunkblip_ds_test_react||[]).push([[843],{843:function(s,i,t){t.r(i),t.d(i,{bds_input_password:function(){return n}});var e=t(6346),n=function(){function s(s){var i=this;(0,e.r)(this,s),this.bdsInputPasswordChange=(0,e.c)(this,"bdsInputPasswordChange",7),this.bdsInputPasswordInput=(0,e.c)(this,"bdsInputPasswordInput",7),this.bdsInputPasswordBlur=(0,e.c)(this,"bdsInputPasswordBlur",7),this.bdsInputPasswordFocus=(0,e.c)(this,"bdsInputPasswordFocus",7),this.bdsInputPasswordSubmit=(0,e.c)(this,"bdsInputPasswordSubmit",7),this.bdsKeyDownBackspace=(0,e.c)(this,"bdsKeyDownBackspace",7),this.refNativeInput=function(s){i.nativeInput=s},this.toggleEyePassword=function(){i.disabled||(i.openEyes=!i.openEyes)},this.onClickWrapper=function(){i.onFocus(),i.nativeInput&&i.nativeInput.focus()},this.onInput=function(s){var t=s.target;t&&(i.value=t.value||""),i.bdsInputPasswordInput.emit(s)},this.onBlur=function(){i.bdsInputPasswordBlur.emit(),i.isPressed=!1},this.onFocus=function(){i.bdsInputPasswordFocus.emit(),i.isPressed=!0},this.onSubmit=function(){i.bdsInputPasswordSubmit.emit()},this.keyPressWrapper=function(s){i.bdsKeyDownBackspace.emit({ev:s,value:i.value})},this.validationDanger=!1,this.isPressed=!1,this.validationMesage="",this.openEyes=!1,this.value="",this.label="",this.inputName="",this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.readonly=!1,this.helperMessage="",this.errorMessage="",this.danger=!1,this.icon="",this.disabled=!1,this.autoCapitalize="off",this.autoComplete="off",this.placeholder="",this.dataTest=null}return s.prototype.getAutoComplete=function(){return this.openEyes?this.autoComplete:"current-password"},s.prototype.onChange=function(){this.bdsInputPasswordChange.emit({value:null==this.value?this.value:this.value.toString()})},s.prototype.renderIcon=function(){return this.icon&&(0,e.h)("div",{class:{input__icon:!0,"input__icon--large":!!this.label}},(0,e.h)("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))},s.prototype.renderLabel=function(){return this.label&&(0,e.h)("label",{class:{input__container__label:!0,"input__container__label--pressed":this.isPressed&&!this.disabled}},(0,e.h)("bds-typo",{variant:"fs-12",bold:"bold"},this.label))},s.prototype.renderMessage=function(){var s=this.danger?"error":"info",i=this.danger?this.errorMessage:this.helperMessage;!i&&this.validationDanger&&(i=this.validationMesage);var t=this.danger||this.validationDanger?"input__message input__message--danger":"input__message";if(i)return(0,e.h)("div",{class:t,part:"input__message"},(0,e.h)("div",{class:"input__message__icon"},(0,e.h)("bds-icon",{size:"x-small",name:s,theme:"solid",color:"inherit"})),(0,e.h)("bds-typo",{variant:"fs-12"},i))},s.prototype.render=function(){var s=this.isPressed&&!this.disabled,i=this.openEyes?"eye-open":"eye-closed",t=this.openEyes?"text":"password",n=this.getAutoComplete();return(0,e.h)(e.H,null,(0,e.h)("div",{class:{element_input:!0},"aria-disabled":this.disabled?"true":null},(0,e.h)("div",{class:{input:!0,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":s},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper,part:"input-container"},this.renderIcon(),(0,e.h)("div",{class:"input__container"},this.renderLabel(),(0,e.h)("div",{class:{input__container__wrapper:!0}},(0,e.h)("input",{ref:this.refNativeInput,class:{input__container__text:!0},type:t,name:this.inputName,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,readOnly:this.readonly,autocomplete:n,autocapitalize:this.autoCapitalize,placeholder:this.placeholder,onInput:this.onInput,onFocus:this.onFocus,onBlur:this.onBlur,onSubmit:this.onSubmit,value:this.value,disabled:this.disabled,"data-test":this.dataTest}))),(0,e.h)("div",{class:"input__password--icon",onClick:this.toggleEyePassword},(0,e.h)("bds-icon",{size:"small",name:i,color:"inherit"}))),this.renderMessage()))},Object.defineProperty(s,"watchers",{get:function(){return{value:["onChange"]}},enumerable:!1,configurable:!0}),s}();n.style='.sc-bds-input-password-h{display:block}.element_input.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input.sc-bds-input-password input.sc-bds-input-password{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input.sc-bds-input-password input.sc-bds-input-password::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-moz-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password:-ms-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-ms-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.input.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:#ffffff}.input--state-primary.sc-bds-input-password{border:1px solid #d2dfe6;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.sc-bds-input-password:hover{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed.sc-bds-input-password{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4);box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4)}.input--state-primary.sc-bds-input-password .input__icon.sc-bds-input-password{color:#3f7de8;background-color:#e8f2ff}.input--state-primary.sc-bds-input-password .input__container__label.sc-bds-input-password{color:#8ca0b3}.input--state-primary.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password{color:#3f7de8}.input--state-primary.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:#3f7de8;color:#202c44}.input--state-danger.sc-bds-input-password{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.sc-bds-input-password:hover{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed.sc-bds-input-password{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #ffa5a5;box-shadow:0 0 0 2px #ffa5a5}.input--state-danger.sc-bds-input-password .input__icon.sc-bds-input-password{color:#ff4c4c;background-color:#ffa5a5}.input--state-danger.sc-bds-input-password .input__container__label.sc-bds-input-password{color:#8ca0b3}.input--state-danger.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password{color:#ff4c4c}.input--state-danger.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:#ff4c4c;color:#202c44}.input--state-disabled.sc-bds-input-password{cursor:not-allowed;border:1px solid #e7edf4;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:#f3f6fa}.input--state-disabled.sc-bds-input-password:hover{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid #e7edf4;box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed.sc-bds-input-password{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #e7edf4;box-shadow:0 0 0 2px #e7edf4}.input--state-disabled.sc-bds-input-password .input__icon.sc-bds-input-password{color:#b9cbd3;background-color:#f8fbfb}.input--state-disabled.sc-bds-input-password .input__container__label.sc-bds-input-password{color:#b9cbd3}.input--state-disabled.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password{color:#b9cbd3}.input--state-disabled.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:#b9cbd3;color:#b9cbd3}.input--label.sc-bds-input-password{padding:7px 4px 8px 12px}.input__icon.sc-bds-input-password{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large.sc-bds-input-password{padding:4px}.input__container.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips.sc-bds-input-password{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips.sc-bds-input-password::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips.sc-bds-input-password::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text.sc-bds-input-password{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text.sc-bds-input-password:focus{outline:0}.input__container__text.sc-bds-input-password::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text.sc-bds-input-password:focus{outline:0}.input__container__text[type=checkbox].sc-bds-input-password,.input__container__text[type=radio].sc-bds-input-password{width:13px;height:13px}.input__container__text[type=search].sc-bds-input-password{-webkit-appearance:textfield;-webkit-box-sizing:content-box}.sc-bds-input-password::-webkit-search-decoration{display:none}.input__container__text[type=reset].sc-bds-input-password,.input__container__text[type=button].sc-bds-input-password,.input__container__text[type=submit].sc-bds-input-password{overflow:visible}.input__container__text.sc-bds-input-password::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text.sc-bds-input-password::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:#8ca0b3;word-break:break-word;height:auto;min-height:20px}.input__message.sc-bds-input-password bds-typo.sc-bds-input-password{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon.sc-bds-input-password{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger.sc-bds-input-password{color:#ff4c4c}.input__password--icon.sc-bds-input-password{color:#8ca0b3;display:-ms-flexbox;display:flex}'}}]);
//# sourceMappingURL=843.76cc83f0.chunk.js.map
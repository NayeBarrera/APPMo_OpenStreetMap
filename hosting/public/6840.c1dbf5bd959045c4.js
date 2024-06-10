"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6840],{6840:(y,h,u)=>{u.r(h),u.d(h,{ion_picker:()=>p});var f=u(467),s=u(3649),b=u(4920);const p=class{constructor(o){(0,s.r)(this,o),this.ionInputModeChange=(0,s.d)(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=t=>{const{highlightEl:e}=this;if(!e)return!1;const n=e.getBoundingClientRect();return!(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)},this.onFocusOut=t=>{const{relatedTarget:e}=t;(!e||"ION-PICKER-COLUMN"!==e.tagName&&e!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=t=>{const{target:e}=t;"ION-PICKER-COLUMN"!==e.tagName||this.actionOnClick||(e.numericInput?this.enterInputMode(e,!1):this.exitInputMode())},this.onClick=()=>{const{actionOnClick:t}=this;t&&(t(),this.actionOnClick=void 0)},this.onPointerDown=t=>{const{useInputMode:e,inputModeColumn:n,el:i}=this;if(this.isInHighlightBounds(t))if(e)this.actionOnClick="ION-PICKER-COLUMN"===t.target.tagName?n&&n===t.target?()=>{this.enterInputMode()}:()=>{this.enterInputMode(t.target)}:()=>{this.exitInputMode()};else{const r=1===i.querySelectorAll("ion-picker-column.picker-column-numeric-input").length?t.target:void 0;this.actionOnClick=()=>{this.enterInputMode(r)}}else this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(t,e=!0)=>{const{inputEl:n,el:i}=this;!n||!i.querySelector("ion-picker-column.picker-column-numeric-input")||(this.useInputMode=!0,this.inputModeColumn=t,e?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),n.focus()):(i.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{i.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.onKeyPress=t=>{const{inputEl:e}=this;if(!e)return;const n=parseInt(t.key,10);Number.isNaN(n)||(e.value+=t.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl:t,inputModeColumn:e,singleColumnSearchTimeout:n}=this;if(!t||!e)return;const i=Array.from(e.querySelectorAll("ion-picker-column-option")).filter(r=>!0!==r.disabled);if(n&&clearTimeout(n),this.singleColumnSearchTimeout=setTimeout(()=>{t.value="",this.singleColumnSearchTimeout=void 0},1e3),t.value.length>=3){const l=t.value.substring(t.value.length-2);return t.value=l,void this.selectSingleColumn()}const a=i.find(({textContent:r})=>r.replace(/^0+(?=[1-9])|0+(?=0$)/,"")===t.value);if(a)e.setValue(a.value);else if(2===t.value.length){const r=t.value.substring(t.value.length-1);t.value=r,this.selectSingleColumn()}},this.searchColumn=(t,e,n="start")=>{const i="start"===n?/^0+/:/0$/,a=Array.from(t.querySelectorAll("ion-picker-column-option")).find(r=>!0!==r.disabled&&r.textContent.replace(i,"")===e);a&&t.setValue(a.value)},this.selectMultiColumn=()=>{const{inputEl:t,el:e}=this;if(!t)return;const n=Array.from(e.querySelectorAll("ion-picker-column")).filter(c=>c.numericInput),i=n[0],a=n[1];let l,r=t.value;switch(r.length){case 1:this.searchColumn(i,r);break;case 2:const c=t.value.substring(0,1);r="0"===c||"1"===c?t.value:c,this.searchColumn(i,r),1===r.length&&(l=t.value.substring(t.value.length-1),this.searchColumn(a,l,"end"));break;case 3:const g=t.value.substring(0,1);r="0"===g||"1"===g?t.value.substring(0,2):g,this.searchColumn(i,r),l=t.value.substring(1===r.length?1:2),this.searchColumn(a,l,"end");break;case 4:const d=t.value.substring(0,1);r="0"===d||"1"===d?t.value.substring(0,2):d,this.searchColumn(i,r);const v=t.value.substring(1===r.length?1:2,t.value.length);this.searchColumn(a,v,"end");break;default:const I=t.value.substring(t.value.length-4);t.value=I,this.selectMultiColumn()}},this.onInputChange=()=>{const{useInputMode:t,inputEl:e,inputModeColumn:n}=this;!t||!e||(n?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{useInputMode:t,inputModeColumn:e}=this;this.ionInputModeChange.emit({useInputMode:t,inputModeColumn:e})}}preventTouchStartPropagation(o){o.stopPropagation()}componentWillLoad(){(0,b.g)(this.el).addEventListener("focusin",this.onFocusIn),(0,b.g)(this.el).addEventListener("focusout",this.onFocusOut)}exitInputMode(){var o=this;return(0,f.A)(function*(){const{inputEl:t,useInputMode:e}=o;!e||!t||(o.useInputMode=!1,o.inputModeColumn=void 0,t.blur(),t.value="",o.destroyKeypressListener&&(o.destroyKeypressListener(),o.destroyKeypressListener=void 0),o.emitInputModeChange())})()}render(){return(0,s.h)(s.f,{key:"02b0687b1f80ba295a965dfba76dd59e2d1de5d3",onPointerDown:o=>this.onPointerDown(o),onClick:()=>this.onClick()},(0,s.h)("input",{key:"f83ed84bcf9e02539c00d8a4e63e6a0d7fc4ac71","aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",onKeyDown:o=>{var t;"Enter"===o.key&&(null===(t=this.inputEl)||void 0===t||t.blur())},ref:o=>this.inputEl=o,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),(0,s.h)("div",{key:"45b07fb0617d8e006712776bf78302288edb3ff4",class:"picker-before"}),(0,s.h)("div",{key:"73009229368e0d62b09c913aacade26f068a7aa9",class:"picker-after"}),(0,s.h)("div",{key:"b73da00e446cd1cfd511c39212e14a00d355752e",class:"picker-highlight",ref:o=>this.highlightEl=o}),(0,s.h)("slot",{key:"d969f5efc5ddb9eda6c4828702efd1ceeb69f767"}))}get el(){return(0,s.i)(this)}};p.style={ios:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--highlight-background, var(--ion-color-step-150, var(--ion-background-color-step-150, #eeeeef)))}",md:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}"}}}]);
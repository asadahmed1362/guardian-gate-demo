"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[411],{5411:(q,f,a)=>{a.r(f),a.d(f,{LoginModule:()=>N});var r=a(9808),b=a(5712),e=a(1223),_=a(8568),v=a(845),h=a(2382),p=a(5921);const k=["cb"],C=function(n,l,t){return{"p-checkbox-label":!0,"p-checkbox-label-active":n,"p-disabled":l,"p-checkbox-label-focus":t}};function x(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"label",7),e.NdJ("click",function(s){e.CHM(t);const o=e.oxw(),u=e.MAs(3);return e.KtG(o.onClick(s,u,!0))}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,C,t.checked(),t.disabled,t.focused)),e.uIk("for",t.inputId),e.xp6(1),e.Oqu(t.label)}}const T=function(n,l,t){return{"p-checkbox p-component":!0,"p-checkbox-checked":n,"p-checkbox-disabled":l,"p-checkbox-focused":t}},L=function(n,l,t){return{"p-highlight":n,"p-disabled":l,"p-focus":t}},P={provide:h.JU,useExisting:(0,e.Gpc)(()=>y),multi:!0};let y=(()=>{class n{constructor(t){this.cd=t,this.checkboxIcon="pi pi-check",this.trueValue=!0,this.falseValue=!1,this.onChange=new e.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.focused=!1}onClick(t,i,s){t.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(t),s&&i.focus())}updateModel(t){let i;this.binary?(i=this.checked()?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(i=this.checked()?this.model.filter(s=>!p.gb.equals(s,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this.onChange.emit({checked:i,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:p.gb.contains(this.value,this.model)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-checkbox"]],viewQuery:function(t,i){if(1&t&&e.Gf(k,5),2&t){let s;e.iGM(s=e.CRH())&&(i.inputViewChild=s.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([P])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[3,"class","ngClass","click",4,"ngIf"],[3,"ngClass","click"]],template:function(t,i){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(){return i.onFocus()})("blur",function(){return i.onBlur()})("change",function(u){return i.handleChange(u)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(u){e.CHM(s);const G=e.MAs(3);return e.KtG(i.onClick(u,G,!0))}),e._UZ(5,"span",5),e.qZA()(),e.YNc(6,x,2,9,"label",6)}2&t&&(e.Tol(i.styleClass),e.Q6J("ngStyle",i.style)("ngClass",e.kEZ(18,T,i.checked(),i.disabled,i.focused)),e.xp6(2),e.Q6J("readonly",i.readonly)("value",i.value)("checked",i.checked())("disabled",i.disabled),e.uIk("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-checked",i.checked())("required",i.required),e.xp6(2),e.Q6J("ngClass",e.kEZ(22,L,i.checked(),i.disabled,i.focused)),e.xp6(1),e.Q6J("ngClass",i.checked()?i.checkboxIcon:null),e.xp6(1),e.Q6J("ngIf",i.label))},dependencies:[r.mk,r.O5,r.PC],styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez]}),n})();var g=a(1424),c=a(1777),m=a(5730),d=a(9783);const S=["input"];function E(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"i",5),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.clear())}),e.qZA()}}function A(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"i",6),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onMaskToggle())}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("ngClass",t.toggleIconClass())}}function O(n,l){1&n&&e.GkF(0)}function Z(n,l){1&n&&e.GkF(0)}function D(n,l){if(1&n&&(e.ynx(0),e.YNc(1,Z,1,0,"ng-container",8),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const I=function(n){return{width:n}};function z(n,l){if(1&n&&(e.TgZ(0,"div",11),e._UZ(1,"div",0),e.qZA(),e.TgZ(2,"div",12),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngClass",t.strengthClass())("ngStyle",e.VKq(3,I,t.meter?t.meter.width:"")),e.xp6(2),e.Oqu(t.infoText)}}function H(n,l){1&n&&e.GkF(0)}const R=function(n,l){return{showTransitionParams:n,hideTransitionParams:l}},B=function(n){return{value:"visible",params:n}};function J(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",6,7),e.NdJ("click",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.onOverlayClick(s))})("@overlayAnimation.start",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.onAnimationStart(s))})("@overlayAnimation.done",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.onAnimationEnd(s))}),e.YNc(2,O,1,0,"ng-container",8),e.YNc(3,D,2,1,"ng-container",9),e.YNc(4,z,4,5,"ng-template",null,10,e.W1O),e.YNc(6,H,1,0,"ng-container",8),e.qZA()}if(2&n){const t=e.MAs(5),i=e.oxw();e.Q6J("ngClass","p-password-panel p-component")("@overlayAnimation",e.VKq(9,B,e.WLB(6,R,i.showTransitionOptions,i.hideTransitionOptions))),e.xp6(2),e.Q6J("ngTemplateOutlet",i.headerTemplate),e.xp6(1),e.Q6J("ngIf",i.contentTemplate)("ngIfElse",t),e.xp6(3),e.Q6J("ngTemplateOutlet",i.footerTemplate)}}const F={provide:h.JU,useExisting:(0,e.Gpc)(()=>w),multi:!0};let w=(()=>{class n{constructor(t,i,s,o){this.cd=t,this.config=i,this.el=s,this.overlayService=o,this.mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",this.strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",this.feedback=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.showClear=!1,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.onClear=new e.vpe,this.overlayVisible=!1,this.focused=!1,this.unmasked=!1,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}ngOnInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}onAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,p.P9.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null}}onAnimationEnd(t){"void"===t.toState&&p.P9.clear(t.element)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=m.p.getOuterWidth(this.input.nativeElement)+"px",m.p.absolutePosition(this.overlay,this.input.nativeElement)):m.p.relativePosition(this.overlay,this.input.nativeElement)}onInput(t){this.value=t.target.value,this.onModelChange(this.value),this.onModelTouched()}onInputFocus(t){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onBlur.emit(t)}onKeyDown(t){"Escape"===t.key&&(this.overlayVisible=!1)}onKeyUp(t){this.feedback&&(this.updateUI(t.target.value),this.overlayVisible||(this.overlayVisible=!0))}updateUI(t){let i=null,s=null;switch(this.testStrength(t)){case 1:i=this.weakText(),s={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),s={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),s={strength:"strong",width:"100%"};break;default:i=this.promptText(),s=null}this.meter=s,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}testStrength(t){let i=0;return this.strongCheckRegExp.test(t)?i=3:this.mediumCheckRegExp.test(t)?i=2:t.length&&(i=1),i}writeValue(t){this.value=void 0===t?null:t,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new m.V(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()}bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!m.p.isTouchDevice()&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)}containerClass(){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":this.toggleMask}}inputFieldClass(){return{"p-password-input":!0,"p-disabled":this.disabled}}toggleIconClass(){return this.unmasked?"pi pi-eye-slash":"pi pi-eye"}strengthClass(){return`p-password-strength ${this.meter?this.meter.strength:""}`}filled(){return null!=this.value&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(d.ws.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(d.ws.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(d.ws.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(d.ws.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&("body"===this.appendTo?document.body.removeChild(this.overlay):document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(){return this.unmasked?"text":"password"}getTranslation(t){return this.config.getTranslation(t)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(p.P9.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(d.b4),e.Y36(e.SBq),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-password"]],contentQueries:function(t,i,s){if(1&t&&e.Suo(s,d.jx,4),2&t){let o;e.iGM(o=e.CRH())&&(i.templates=o)}},viewQuery:function(t,i){if(1&t&&e.Gf(S,5),2&t){let s;e.iGM(s=e.CRH())&&(i.input=s.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:8,hostBindings:function(t,i){2&t&&e.ekj("p-inputwrapper-filled",i.filled())("p-inputwrapper-focus",i.focused)("p-password-clearable",i.showClear)("p-password-mask",i.toggleMask)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:"disabled",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",strongLabel:"strongLabel",inputId:"inputId",feedback:"feedback",appendTo:"appendTo",toggleMask:"toggleMask",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",placeholder:"placeholder",showClear:"showClear"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[e._Bn([F])],decls:6,vars:18,consts:[[3,"ngClass","ngStyle"],["pInputText","",3,"ngClass","ngStyle","value","input","focus","blur","keyup","keydown"],["input",""],["class","p-password-clear-icon pi pi-times",3,"click",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],[1,"p-password-clear-icon","pi","pi-times",3,"click"],[3,"ngClass","click"],["overlay",""],[4,"ngTemplateOutlet"],[4,"ngIf","ngIfElse"],["content",""],[1,"p-password-meter"],["className","p-password-info"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"input",1,2),e.NdJ("input",function(o){return i.onInput(o)})("focus",function(o){return i.onInputFocus(o)})("blur",function(o){return i.onInputBlur(o)})("keyup",function(o){return i.onKeyUp(o)})("keydown",function(o){return i.onKeyDown(o)}),e.qZA(),e.YNc(3,E,1,0,"i",3),e.YNc(4,A,1,1,"i",4),e.YNc(5,J,7,11,"div",4),e.qZA()),2&t&&(e.Tol(i.styleClass),e.Q6J("ngClass",i.containerClass())("ngStyle",i.style),e.xp6(1),e.Tol(i.inputStyleClass),e.Q6J("ngClass",i.inputFieldClass())("ngStyle",i.inputStyle)("value",i.value),e.uIk("label",i.label)("aria-label",i.ariaLabel)("aria-labelledBy",i.ariaLabelledBy)("id",i.inputId)("type",i.inputType())("placeholder",i.placeholder),e.xp6(2),e.Q6J("ngIf",i.showClear&&null!=i.value),e.xp6(1),e.Q6J("ngIf",i.toggleMask),e.xp6(1),e.Q6J("ngIf",i.overlayVisible))},dependencies:[r.mk,r.O5,r.tP,r.PC,g.o],styles:[".p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password-clearable{position:relative}\n"],encapsulation:2,data:{animation:[(0,c.X$)("overlayAnimation",[(0,c.eR)(":enter",[(0,c.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,c.jt)("{{showTransitionParams}}")]),(0,c.eR)(":leave",[(0,c.jt)("{{hideTransitionParams}}",(0,c.oB)({opacity:0}))])])]},changeDetection:0}),n})(),V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez,g.j,d.m8]}),n})(),Q=(()=>{class n{constructor(t){this.layoutService=t,this.valCheck=["remember"]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.P))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:27,vars:4,consts:[[1,"surface-0","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"grid","justify-content-center","p-2","lg:p-0",2,"min-width","80%"],[1,"col-12","mt-5","xl:mt-0","text-center"],["alt","Sakai logo",1,"mb-5",2,"width","81px","height","60px",3,"src"],[1,"col-12","xl:col-6",2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"h-full","w-full","m-0","py-7","px-4",2,"border-radius","53px","background","linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"],[1,"text-center","mb-5"],["src","assets/demo/images/login/avatar.png","alt","Image","height","50",1,"mb-3"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],[1,"w-full","md:w-10","mx-auto"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","Email address","pInputText","",1,"w-full","mb-3",2,"padding","1rem"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","placeholder","Password","styleClass","w-full mb-3",3,"ngModel","toggleMask","ngModelChange"],[1,"flex","align-items-center","justify-content-between","mb-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","pRipple","","label","Sign In",1,"w-full","p-3","text-xl"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"img",7),e.TgZ(8,"div",8),e._uU(9,"Welcome, Isabel!"),e.qZA(),e.TgZ(10,"span",9),e._uU(11,"Sign in to continue"),e.qZA()(),e.TgZ(12,"div",10)(13,"label",11),e._uU(14,"Email"),e.qZA(),e._UZ(15,"input",12),e.TgZ(16,"label",13),e._uU(17,"Password"),e.qZA(),e.TgZ(18,"p-password",14),e.NdJ("ngModelChange",function(o){return i.password=o}),e.qZA(),e.TgZ(19,"div",15)(20,"div",16),e._UZ(21,"p-checkbox",17),e.TgZ(22,"label",18),e._uU(23,"Remember me"),e.qZA()(),e.TgZ(24,"a",19),e._uU(25,"Forgot password?"),e.qZA()(),e._UZ(26,"button",20),e.qZA()()()()()),2&t&&(e.xp6(3),e.MGl("src","assets/layout/images/","light"===i.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(15),e.Q6J("ngModel",i.password)("toggleMask",!0),e.xp6(3),e.Q6J("binary",!0))},dependencies:[v.Hq,y,g.o,h.JJ,h.On,w],styles:["[_nghost-%COMP%]     .p-password input{width:100%;padding:1rem}[_nghost-%COMP%]     .pi-eye{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}[_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[b.Bz.forChild([{path:"",component:Q}]),b.Bz]}),n})(),N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez,U,v.hJ,M,g.j,h.u5,V]}),n})()}}]);
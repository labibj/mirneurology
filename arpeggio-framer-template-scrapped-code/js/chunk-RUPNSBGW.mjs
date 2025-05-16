import{B as at,D as u,G as W,H as Ft,Ha as Pt,Ia as At,K as rt,N as Rt,W as Mt,X as Et,_ as Nt,d as it,e as nt,f as Ct,t as Vt,va as Tt}from"./chunk-LWF7UWH4.mjs";import{B as v,C as et,c as _t,d as bt,g as St,j as $,p as L,r as j,s as xt,v as M,w as I,y as wt}from"./chunk-3BJZDOY4.mjs";import{b,c as w}from"./chunk-A3IIQ6X3.mjs";var S=typeof w<"u",C=(n,t,e)=>{let i=document.createElement(n),[a,o]=Array.isArray(t)?[void 0,t]:[t,e];return a&&Object.assign(i,a),o?.forEach(r=>i.appendChild(r)),i},kt=(n,t)=>{var e,i;return t==="left"?n.offsetLeft:((i=(e=n.offsetParent instanceof HTMLElement?n.offsetParent:null)===null||e===void 0?void 0:e.offsetWidth)!==null&&i!==void 0?i:0)-n.offsetWidth-n.offsetLeft},Dt=n=>n.offsetWidth>0&&n.offsetHeight>0,st=(n,t)=>{S&&customElements.get(n)!==t&&customElements.define(n,t)};function Ut(n,t,{reverse:e=!1}={}){let i=n.length;for(let a=e?i-1:0;e?a>=0:a<i;e?a--:a++)t(n[a],a)}var $t=(n,t)=>n==null?t:t==null?n:Math.max(n,t),Lt=String.raw,H=String.raw;var jt=S&&typeof CSS<"u"&&CSS.supports&&CSS.supports("animation-timing-function","linear(1,2)"),It=S&&typeof CSS<"u"&&CSS.supports&&CSS.supports("line-height","mod(1,1)"),E=S&&typeof matchMedia<"u"?matchMedia("(prefers-reduced-motion: reduce)"):null,P="--_number-flow-d-opacity",z="--_number-flow-d-width",T="--_number-flow-dx",J="--_number-flow-d",Wt=(()=>{try{return CSS.registerProperty({name:P,syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:T,syntax:"<length>",inherits:!0,initialValue:"0px"}),CSS.registerProperty({name:z,syntax:"<number>",inherits:!1,initialValue:"0"}),CSS.registerProperty({name:J,syntax:"<number>",inherits:!0,initialValue:"0"}),!0}catch{return!1}})(),Z="var(--number-flow-char-height, 1em)",x="var(--number-flow-mask-height, 0.25em)",O=`calc(${x} / 2)`,ot="var(--number-flow-mask-width, 0.5em)",F=`calc(${ot} / var(--scale-x))`,B="#000 0, transparent 71%",ee=H`
	:host {
		display: inline-block;
		direction: ltr;
		white-space: nowrap;
		isolation: isolate; /* for .number z-index */
		/* Technically this is only needed on the .number, but applying it here makes the ::selection the same height for the whole element: */
		line-height: ${Z} !important;
	}

	.number,
	.number__inner {
		display: inline-block;
		transform-origin: left top;
	}

	:host([data-will-change]) :is(.number, .number__inner, .section, .digit, .digit__num, .symbol) {
		will-change: transform;
	}

	.number {
		--scale-x: calc(1 + var(${z}) / var(--width));
		transform: translateX(var(${T})) scaleX(var(--scale-x));

		margin: 0 calc(-1 * ${ot});
		position: relative; /* for z-index */

		/* overflow: clip; /* helpful to not affect page layout, but breaks baseline alignment in Safari :/ */
		/* -webkit- prefixed properties have better support than unprefixed ones: */
		-webkit-mask-image:
			/* Horizontal: */
			linear-gradient(
				to right,
				transparent 0,
				#000 ${F},
				#000 calc(100% - ${F}),
				transparent
			),
			/* Vertical: */
				linear-gradient(
					to bottom,
					transparent 0,
					#000 ${x},
					#000 calc(100% - ${x}),
					transparent 100%
				),
			/* TL corner */ radial-gradient(at bottom right, ${B}),
			/* TR corner */ radial-gradient(at bottom left, ${B}),
			/* BR corner */ radial-gradient(at top left, ${B}),
			/* BL corner */ radial-gradient(at top right, ${B});
		-webkit-mask-size:
			100% calc(100% - ${x} * 2),
			calc(100% - ${F} * 2) 100%,
			${F} ${x},
			${F} ${x},
			${F} ${x},
			${F} ${x};
		-webkit-mask-position:
			center,
			center,
			top left,
			top right,
			bottom right,
			bottom left;
		-webkit-mask-repeat: no-repeat;
	}

	.number__inner {
		padding: ${O} ${ot};
		/* invert parent's: */
		transform: scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${T})));
	}

	/* Put number underneath other sections. Negative z-index messed up text cursor and selection, weirdly: */
	:host > :not(.number) {
		z-index: 5;
	}

	.section,
	.symbol {
		display: inline-block;
		/* for __exiting: */
		position: relative;
		isolation: isolate; /* also helpful for mix-blend-mode in symbol__value */
	}

	.section::after {
		/*
		 * We seem to need some type of character to ensure baseline alignment continues working
		 * even when empty
		 */
		content: '\200b'; /* zero-width space */
		display: inline-block;
	}

	.section--justify-left {
		transform-origin: center left;
	}

	.section--justify-right {
		transform-origin: center right;
	}

	.section__exiting,
	.symbol__exiting {
		margin: 0 !important;
		position: absolute !important;
		z-index: -1;
	}

	.digit {
		display: inline-block;
		position: relative;
		--c: var(--current) + var(${J});
	}

	.digit__num,
	.number .section::after {
		padding: ${O} 0;
	}

	.digit__num {
		display: inline-block;
		/* Claude + https://buildui.com/recipes/animated-counter */
		--offset-raw: mod(var(--length) + var(--n) - mod(var(--c), var(--length)), var(--length));
		--offset: calc(
			var(--offset-raw) - var(--length) * round(down, var(--offset-raw) / (var(--length) / 2), 1)
		);
		/* Technically we just need var(--offset)*100%, but clamping should reduce the layer size: */
		--y: clamp(-100%, var(--offset) * 100%, 100%);
		transform: translateY(var(--y));
	}

	.digit__num:not(.is-current) {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(var(--y));
	}

	.digit:not(.is-spinning) .digit__num:not(.is-current) {
		display: none;
	}

	.symbol__value {
		display: inline-block;
		mix-blend-mode: plus-lighter; /* better crossfades e.g. + <-> - */
		white-space: pre; /* some symbols are spaces or thin spaces */
	}

	.section--justify-left .symbol__exiting {
		left: 0;
	}

	.section--justify-right .symbol__exiting {
		right: 0;
	}

	.animate-presence {
		opacity: calc(1 + var(${P}));
	}
`,lt=ee;var Ht=S?HTMLElement:class{},ie=H`
	:host {
		display: inline-block;
		direction: ltr;
		white-space: nowrap;
		line-height: ${Z} !important;
	}

	span {
		display: inline-block;
	}

	:host([data-will-change]) span {
		will-change: transform;
	}

	.number,
	.digit {
		padding: ${O} 0;
	}

	.symbol {
		white-space: pre; /* some symbols are spaces or thin spaces */
	}
`,ne=n=>`<span class="${n.type==="integer"||n.type==="fraction"?"digit":"symbol"}" part="${n.type==="integer"||n.type==="fraction"?`digit ${n.type}-digit`:n.type}">${n.value}</span>`,G=(n,t)=>`<span part="${t}">${n.reduce((e,i)=>e+ne(i),"")}</span>`,dt=n=>Lt`<template shadowroot="open" shadowrootmode="open"
			><style>
				${ie}</style
			>${G(n.pre,"left")}<span part="number" class="number"
				>${G(n.integer,"integer")}${G(n.fraction,"fraction")}</span
			>${G(n.post,"right")}</template
		><span
			style="font-kerning: none; display: inline-block; line-height: ${Z} !important; padding: ${x} 0;"
			>${n.valueAsString}</span
		>`;function Bt(n,t,e,i){let a=t.formatToParts(n);e&&a.unshift({type:"prefix",value:e}),i&&a.push({type:"suffix",value:i}),console.log(e,i);let o=[],r=[],s=[],c=[],d={},y=m=>{var p;return`${m}:${d[m]=((p=d[m])!==null&&p!==void 0?p:-1)+1}`},g="",f=!1,h=!1;for(let m of a){g+=m.value;let p=m.type==="minusSign"||m.type==="plusSign"?"sign":m.type;p==="integer"?(f=!0,r.push(...m.value.split("").map(N=>({type:p,value:parseInt(N)})))):p==="group"?r.push({type:p,value:m.value}):p==="decimal"?(h=!0,s.push({type:p,value:m.value,key:y(p)})):p==="fraction"?s.push(...m.value.split("").map(N=>({type:p,value:parseInt(N),key:y(p),pos:-1-d[p]}))):(f||h?c:o).push({type:p,value:m.value,key:y(p)})}let _=[];for(let m=r.length-1;m>=0;m--){let p=r[m];_.unshift(p.type==="integer"?{...p,key:y(p.type),pos:d[p.type]}:{...p,key:y(p.type)})}return{pre:o,integer:_,fraction:s,post:c,valueAsString:g,value:typeof n=="string"?parseFloat(n):n}}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var Ot=It&&jt&&Wt,Q,A=class extends Ht{get animated(){return this._animated}set animated(t){var e;this.animated!==t&&(this._animated=t,(e=this.shadowRoot)===null||e===void 0||e.getAnimations().forEach(i=>i.finish()))}set data(t){if(t==null)return;let{pre:e,integer:i,fraction:a,post:o,value:r}=t;if(this.created){let s=this._data;if(this._data=t,this.computedTrend=typeof this.trend=="function"?this.trend(s.value,r):this.trend,this.startingPos=void 0,this.computedTrend&&this.continuous){let c=s.integer.concat(s.fraction).filter(f=>f.type==="integer"||f.type==="fraction"),d=t.integer.concat(t.fraction).filter(f=>f.type==="integer"||f.type==="fraction"),y=c.find(f=>!d.find(h=>h.pos===f.pos&&h.value===f.value)),g=d.find(f=>!c.find(h=>f.pos===h.pos&&f.value===h.value));this.startingPos=$t(y?.pos,g?.pos)}this.computedAnimated=Ot&&this._animated&&(!this.respectMotionPreference||!(!(E===null||E===void 0)&&E.matches))&&Dt(this),this.manual||this.willUpdate(),this._pre.update(e),this._num.update({integer:i,fraction:a}),this._post.update(o),this.manual||this.didUpdate()}else{if(this._data=t,this.attachShadow({mode:"open"}),typeof CSSStyleSheet<"u"&&this.shadowRoot.adoptedStyleSheets)Q||(Q=new CSSStyleSheet,Q.replaceSync(lt)),this.shadowRoot.adoptedStyleSheets=[Q];else{let s=document.createElement("style");s.textContent=lt,this.shadowRoot.appendChild(s)}this._pre=new q(this,e,{justify:"right",part:"left"}),this.shadowRoot.appendChild(this._pre.el),this._num=new ct(this,i,a),this.shadowRoot.appendChild(this._num.el),this._post=new q(this,o,{justify:"left",part:"right"}),this.shadowRoot.appendChild(this._post.el)}this.created=!0}willUpdate(){this._pre.willUpdate(),this._num.willUpdate(),this._post.willUpdate()}didUpdate(){if(!this.computedAnimated)return;this._abortAnimationsFinish?this._abortAnimationsFinish.abort():this.dispatchEvent(new Event("animationsstart")),this._pre.didUpdate(),this._num.didUpdate(),this._post.didUpdate();let t=new AbortController;Promise.all(this.shadowRoot.getAnimations().map(e=>e.finished)).then(()=>{t.signal.aborted||(this.dispatchEvent(new Event("animationsfinish")),this._abortAnimationsFinish=void 0)}),this._abortAnimationsFinish=t}constructor(){super(),l(this,"_animated",void 0),l(this,"created",!1),l(this,"_pre",void 0),l(this,"_num",void 0),l(this,"_post",void 0),l(this,"computedTrend",void 0),l(this,"startingPos",void 0),l(this,"computedAnimated",void 0),l(this,"_data",void 0),l(this,"manual",!1),l(this,"_abortAnimationsFinish",void 0);let{animated:t,...e}=this.constructor.defaultProps;this._animated=this.computedAnimated=t,Object.assign(this,e)}};l(A,"defaultProps",{transformTiming:{duration:900,easing:"linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"},spinTiming:void 0,opacityTiming:{duration:450,easing:"ease-out"},animated:!0,trend:(n,t)=>Math.sign(t-n),continuous:!1,respectMotionPreference:!0,digits:void 0});var ct=class{willUpdate(){this._prevWidth=this.el.offsetWidth,this._prevLeft=this.el.getBoundingClientRect().left,this._integer.willUpdate(),this._fraction.willUpdate()}update({integer:t,fraction:e}){this._integer.update(t),this._fraction.update(e)}didUpdate(){let t=this.el.getBoundingClientRect();this._integer.didUpdate(),this._fraction.didUpdate();let e=this._prevLeft-t.left,i=this.el.offsetWidth,a=this._prevWidth-i;this.el.style.setProperty("--width",String(i)),this.el.animate({[T]:[`${e}px`,"0px"],[z]:[a,0]},{...this.flow.transformTiming,composite:"accumulate"})}constructor(t,e,i,{className:a,...o}={}){l(this,"flow",void 0),l(this,"el",void 0),l(this,"_inner",void 0),l(this,"_integer",void 0),l(this,"_fraction",void 0),l(this,"_prevWidth",void 0),l(this,"_prevLeft",void 0),this.flow=t,this._integer=new X(t,e,{justify:"right",part:"integer"}),this._fraction=new X(t,i,{justify:"left",part:"fraction"}),this._inner=C("span",{className:"number__inner"},[this._integer.el,this._fraction.el]),this.el=C("span",{...o,part:"number",className:`number ${a??""}`},[this._inner])}},K=class{addChar(t,{startDigitsAtZero:e=!1,...i}={}){let a=t.type==="integer"||t.type==="fraction"?new tt(this,t.type,e?0:t.value,t.pos,{...i,onRemove:this.onCharRemove(t.key)}):new pt(this,t.type,t.value,{...i,onRemove:this.onCharRemove(t.key)});return this.children.set(t.key,a),a}unpop(t){t.el.classList.remove("section__exiting"),t.el.style.top="",t.el.style[this.justify]=""}pop(t){t.forEach(e=>{e.el.style.top=`${e.el.offsetTop}px`,e.el.style[this.justify]=`${kt(e.el,this.justify)}px`}),t.forEach(e=>{e.el.classList.add("section__exiting"),e.present=!1})}addNewAndUpdateExisting(t){let e=new Map,i=new Map,a=this.justify==="left",o=a?"prepend":"append";if(Ut(t,r=>{let s;this.children.has(r.key)?(s=this.children.get(r.key),i.set(r,s),this.unpop(s),s.present=!0):(s=this.addChar(r,{startDigitsAtZero:!0,animateIn:!0}),e.set(r,s)),this.el[o](s.el)},{reverse:a}),this.flow.computedAnimated){let r=this.el.getBoundingClientRect();e.forEach(s=>{s.willUpdate(r)})}e.forEach((r,s)=>{r.update(s.value)}),i.forEach((r,s)=>{r.update(s.value)})}willUpdate(){let t=this.el.getBoundingClientRect();this._prevOffset=t[this.justify],this.children.forEach(e=>e.willUpdate(t))}didUpdate(){let t=this.el.getBoundingClientRect();this.children.forEach(a=>a.didUpdate(t));let e=t[this.justify],i=this._prevOffset-e;i&&this.children.size&&this.el.animate({transform:[`translateX(${i}px)`,"none"]},{...this.flow.transformTiming,composite:"accumulate"})}constructor(t,e,{justify:i,className:a,...o},r){l(this,"flow",void 0),l(this,"el",void 0),l(this,"justify",void 0),l(this,"children",void 0),l(this,"onCharRemove",void 0),l(this,"_prevOffset",void 0),this.flow=t,this.children=new Map,this.onCharRemove=c=>()=>{this.children.delete(c)},this.justify=i;let s=e.map(c=>this.addChar(c).el);this.el=C("span",{...o,className:`section section--justify-${i} ${a??""}`},r?r(s):s)}},X=class extends K{update(t){let e=new Map;this.children.forEach((i,a)=>{t.find(o=>o.key===a)||e.set(a,i),this.unpop(i)}),this.addNewAndUpdateExisting(t),e.forEach(i=>{i instanceof tt&&i.update(0)}),this.pop(e)}},q=class extends K{update(t){let e=new Map;this.children.forEach((i,a)=>{t.find(o=>o.key===a)||e.set(a,i)}),this.pop(e),this.addNewAndUpdateExisting(t)}},k=class{get present(){return this._present}set present(t){if(this._present!==t){if(this._present=t,!this.flow.computedAnimated){t||this._remove();return}this.el.style.setProperty("--_number-flow-d-opacity",t?"0":"-.999"),this.el.animate({[P]:t?[-.9999,0]:[.999,0]},{...this.flow.opacityTiming,composite:"accumulate"}),t?this.flow.removeEventListener("animationsfinish",this._remove):this.flow.addEventListener("animationsfinish",this._remove,{once:!0})}}constructor(t,e,{onRemove:i,animateIn:a=!1}={}){l(this,"flow",void 0),l(this,"el",void 0),l(this,"_present",void 0),l(this,"_onRemove",void 0),l(this,"_remove",void 0),this.flow=t,this.el=e,this._present=!0,this._remove=()=>{var o,r;this.el.remove(),(o=(r=this)._onRemove)===null||o===void 0||o.call(r)},this.el.classList.add("animate-presence"),this.flow.computedAnimated&&a&&this.el.animate({[P]:[-.9999,0]},{...this.flow.opacityTiming,composite:"accumulate"}),this._onRemove=i}},Y=class extends k{constructor(t,e,i,a){super(t.flow,i,a),l(this,"section",void 0),l(this,"value",void 0),l(this,"el",void 0),this.section=t,this.value=e,this.el=i}},tt=class extends Y{willUpdate(t){let e=this.el.getBoundingClientRect();this._prevValue=this.value;let i=e[this.section.justify]-t[this.section.justify],a=e.width/2;this._prevCenter=this.section.justify==="left"?i+a:i-a}update(t){var e,i;(e=this._numbers[this.value])===null||e===void 0||e.classList.remove("is-current"),this.el.style.setProperty("--current",String(t)),(i=this._numbers[t])===null||i===void 0||i.classList.add("is-current"),this.value=t}didUpdate(t){let e=this.el.getBoundingClientRect(),i=e[this.section.justify]-t[this.section.justify],a=e.width/2,o=this.section.justify==="left"?i+a:i-a,r=this._prevCenter-o;r&&this.el.animate({transform:[`translateX(${r}px)`,"none"]},{...this.flow.transformTiming,composite:"accumulate"});let s=this.diff;if(s){this.el.classList.add("is-spinning");var c;this.el.animate({[J]:[-s,0]},{...(c=this.flow.spinTiming)!==null&&c!==void 0?c:this.flow.transformTiming,composite:"accumulate"}),this.flow.addEventListener("animationsfinish",this._onAnimationsFinish,{once:!0})}}get diff(){let t=this.flow.computedTrend,e=this.value-this._prevValue;return!e&&this.flow.startingPos!=null&&this.flow.startingPos>=this.pos?this._length*t:(t||(t=Math.sign(e)),t<0&&this.value>this._prevValue?this.value-this._length-this._prevValue:t>0&&this.value<this._prevValue?this._length-this._prevValue+this.value:e)}constructor(t,e,i,a,o){var r,s,c;let d=((c=(s=t.flow.digits)===null||s===void 0||(r=s[a])===null||r===void 0?void 0:r.max)!==null&&c!==void 0?c:9)+1,y=Array.from({length:d}).map((f,h)=>{let _=C("span",{className:`digit__num${h===i?" is-current":""}`},[document.createTextNode(String(h))]);return _.style.setProperty("--n",String(h)),_}),g=C("span",{part:`digit ${e}-digit`,className:"digit"},y);g.style.setProperty("--current",String(i)),g.style.setProperty("--length",String(d)),super(t,i,g,o),l(this,"pos",void 0),l(this,"_numbers",void 0),l(this,"_length",void 0),l(this,"_prevValue",void 0),l(this,"_prevCenter",void 0),l(this,"_onAnimationsFinish",void 0),this.pos=a,this._onAnimationsFinish=()=>{this.el.classList.remove("is-spinning")},this._numbers=y,this._length=d}},pt=class extends Y{willUpdate(t){if(this.type==="decimal")return;let e=this.el.getBoundingClientRect();this._prevOffset=e[this.section.justify]-t[this.section.justify]}update(t){if(this.value!==t){let e=this._children.get(this.value);if(e.present=!1,e.el.classList.add("symbol__exiting"),this._children.has(t)){let i=this._children.get(t);i.present=!0,i.el.classList.remove("symbol__exiting")}else{let i=C("span",{className:"symbol__value",textContent:t});this.el.appendChild(i),this._children.set(t,new k(this.flow,i,{animateIn:!0,onRemove:this._onChildRemove(t)}))}}this.value=t}didUpdate(t){if(this.type==="decimal")return;let i=this.el.getBoundingClientRect()[this.section.justify]-t[this.section.justify],a=this._prevOffset-i;a&&this.el.animate({transform:[`translateX(${a}px)`,"none"]},{...this.flow.transformTiming,composite:"accumulate"})}constructor(t,e,i,a){let o=C("span",{className:"symbol__value",textContent:i});super(t,i,C("span",{part:`symbol ${e}`,className:"symbol"},[o]),a),l(this,"type",void 0),l(this,"_children",void 0),l(this,"_prevOffset",void 0),l(this,"_onChildRemove",void 0),this.type=e,this._children=new Map,this._onChildRemove=r=>()=>{this._children.delete(r)},this._children.set(i,new k(this.flow,o,{onRemove:this._onChildRemove(i)}))}};function Zt(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var ut,re=parseInt((ut=wt.match(/^(\d+)\./))===null||ut===void 0?void 0:ut[1]),ft=re>=19,se=["data","digits"],D=class extends A{attributeChangedCallback(t,e,i){this[t]=JSON.parse(i)}};Zt(D,"observedAttributes",ft?[]:se);st("number-flow-react",D);var oe={},zt=ft?n=>n:JSON.stringify;function Jt(n){let{transformTiming:t,spinTiming:e,opacityTiming:i,animated:a,respectMotionPreference:o,trend:r,continuous:s,...c}=n;return[{transformTiming:t,spinTiming:e,opacityTiming:i,animated:a,respectMotionPreference:o,trend:r,continuous:s},c]}var mt=class extends _t{updateProperties(t){if(!this.el)return;this.el.manual=!this.props.isolate;let[e]=Jt(this.props);Object.entries(e).forEach(([i,a])=>{this.el[i]=a??D.defaultProps[i]}),t?.onAnimationsStart&&this.el.removeEventListener("animationsstart",t.onAnimationsStart),this.props.onAnimationsStart&&this.el.addEventListener("animationsstart",this.props.onAnimationsStart),t?.onAnimationsFinish&&this.el.removeEventListener("animationsfinish",t.onAnimationsFinish),this.props.onAnimationsFinish&&this.el.addEventListener("animationsfinish",this.props.onAnimationsFinish)}componentDidMount(){this.updateProperties(),ft&&this.el&&(this.el.digits=this.props.digits,this.el.data=this.props.data)}getSnapshotBeforeUpdate(t){if(this.updateProperties(t),t.data!==this.props.data){if(this.props.group)return this.props.group.willUpdate(),()=>{var a;return(a=this.props.group)===null||a===void 0?void 0:a.didUpdate()};if(!this.props.isolate){var e,i;return(i=this.el)===null||i===void 0||(e=i.willUpdate)===null||e===void 0||e.call(i),()=>{var a;return(a=this.el)===null||a===void 0?void 0:a.didUpdate()}}}return null}componentDidUpdate(t,e,i){i?.()}handleRef(t){this.props.innerRef&&(this.props.innerRef.current=t),this.el=t}render(){let[t,{innerRef:e,className:i,data:a,willChange:o,isolate:r,group:s,digits:c,onAnimationsStart:d,onAnimationsFinish:y,...g}]=Jt(this.props);return v("number-flow-react",{ref:this.handleRef,"data-will-change":o?"":void 0,class:i,"aria-label":a.valueAsString,...g,role:"img",dangerouslySetInnerHTML:{__html:S?"":dt(a)},suppressHydrationWarning:!0,digits:zt(c),data:zt(a)})}constructor(t){super(t),Zt(this,"el",void 0),this.handleRef=this.handleRef.bind(this)}},le=$(function({value:t,locales:e,format:i,prefix:a,suffix:o,...r},s){xt(s,()=>c.current,[]);let c=I(),d=L(de);d?.useRegister(c);let y=M(()=>e?JSON.stringify(e):"",[e]),g=M(()=>i?JSON.stringify(i):"",[i]),f=M(()=>{var h,_,m;let p=(m=(h=oe)[_=`${y}:${g}`])!==null&&m!==void 0?m:h[_]=new Intl.NumberFormat(e,i);return Bt(t,p,a,o)},[t,y,g,a,o]);return v(mt,{...r,group:d,data:f,innerRef:c})}),Gt=le,de=St(void 0);var ce={nearest:(n,t)=>Math.sign(t-n),individual:0,up:1,down:-1},pe={smooth:"linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)",linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out"};function R(n){let{value:t,format:e,gradientHeight:i}=n,a=at.current()===at.canvas,o=ue(),r={userSelect:n.userSelect?"auto":"none",fontVariantNumeric:n.monospace?"tabular-nums":void 0,margin:0,color:n.color,...n.font,...n.style},s={notation:e.style==="compact"?"compact":"standard",signDisplay:e.plusSign?"exceptZero":"auto",useGrouping:e.separators};return a?et("div",{style:{...n.style,...r,whiteSpace:"pre"},children:[n.prefix,Intl.NumberFormat(e.locale||void 0,s).format(t),n.suffix]}):et("div",{id:o,style:{...n.style,whiteSpace:"pre",marginTop:-i,marginBottom:-i},children:[v(Gt,{value:t,trend:ce[n.direction],continuous:n.continuous,format:s,locales:e.locale||void 0,prefix:n.prefix,suffix:n.suffix,transformTiming:{easing:pe[n.transition.easing],duration:n.transition.duration*1e3},opacityTiming:{easing:"ease-out",duration:n.transition.duration*1e3/2},isolate:!0,willChange:!0,style:r}),v("style",{dangerouslySetInnerHTML:{__html:`#${o} { --number-flow-mask-height: ${i}px }`}})]})}R.displayName="NumberFlow";W(R,{value:{type:u.Number,defaultValue:0},format:{type:u.Object,controls:{style:{type:u.Enum,defaultValue:"default",options:["default","compact"],optionTitles:["Default (1,000)","Compact (1K)"],displaySegmentedControl:!0,segmentedControlDirection:"vertical"},separators:{type:u.Boolean,defaultValue:!0},plusSign:{type:u.Boolean,defaultValue:!1},locale:{type:u.String,placeholder:`Auto${typeof b<"u"?` (${b.language})`:""}`}}},direction:{type:u.Enum,defaultValue:"nearest",options:["nearest","individual","up","down"],optionTitles:["Nearest (All)","Nearest (Per-Character)","Up \u2191","Down \u2193"]},continuous:{type:u.Boolean,defaultValue:!0,hidden:n=>n.direction==="individual"},gradientHeight:{type:u.Number,defaultValue:10,min:0,step:1,title:"Gradient"},font:{type:"font",controls:"extended",defaultFontType:"sans-serif",defaultValue:{fontSize:16,lineHeight:1}},color:{type:u.Color,defaultValue:"#000"},prefix:{type:u.String,placeholder:"Prefix"},suffix:{type:u.String,placeholder:"Suffix"},userSelect:{type:u.Boolean,defaultValue:!1},transition:{type:u.Object,controls:{easing:{type:u.Enum,defaultValue:"smooth",options:["smooth","linear","ease","easeIn","easeOut","easeInOut"],optionTitles:["Smooth","Linear","Ease","Ease In","Ease Out","Ease In Out"]},duration:{type:u.Number,defaultValue:.75,min:0,step:.01}},description:"More components at [Framer University](https://frameruni.link/cc)."}});var ue=()=>`frameruni-${j().replace(/:/g,"")}`;var me=At(R),Qt=Ft(R),fe=["yShZsES5F","WK2OQQ8u0","Axt23qBeF","W6Fkdsmi9","sl1h4cdJt","poGyVHWU3"],he="framer-SR1yc",ye={Axt23qBeF:"framer-v-jhp9ru",poGyVHWU3:"framer-v-1utiqi4",sl1h4cdJt:"framer-v-13o1csi",W6Fkdsmi9:"framer-v-1diwhej",WK2OQQ8u0:"framer-v-volocp",yShZsES5F:"framer-v-c7pgeg"};function Kt(n,...t){let e={};return t?.forEach(i=>i&&Object.assign(e,n[i])),e}var ge={duration:0,type:"tween"},ve=({value:n,children:t})=>{let e=L(it),i=n??e.transition,a=M(()=>({...e,transition:i}),[JSON.stringify(i)]);return v(it.Provider,{value:a,children:t})},_e=nt.create(bt),be={"Down \u2193":"down","Nearest (All)":"nearest","Nearest (Per-Character)":"individual","Up \u2191":"up"},Se={"Large - End Number":"WK2OQQ8u0","Large - Start Number":"yShZsES5F","Medium - End Number":"W6Fkdsmi9","Medium - Start Number":"Axt23qBeF","Small - Start Number":"sl1h4cdJt","Small- End Number":"poGyVHWU3"},xe=({direction:n,endValue:t,fontColor:e,height:i,id:a,prefix:o,startValue:r,suffix:s,width:c,...d})=>({...d,AlkJUvdso:e??d.AlkJUvdso??"var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))",ds4iTMbPD:s??d.ds4iTMbPD??"K",FCkEPZZBj:r??d.FCkEPZZBj,LPzu7UvXp:be[n]??n??d.LPzu7UvXp??"down",PZVzSNtmu:o??d.PZVzSNtmu,variant:Se[d.variant]??d.variant??"yShZsES5F",zjFTn8JRN:t??d.zjFTn8JRN??50}),we=(n,t)=>n.layoutDependency?t.join("-")+n.layoutDependency:t.join("-"),Ce=$(function(n,t){let e=I(null),i=t??e,a=j(),{activeLocale:o,setLocale:r}=Vt(),s=Mt(),{style:c,className:d,layoutId:y,variant:g,FCkEPZZBj:f,zjFTn8JRN:h,AlkJUvdso:_,LPzu7UvXp:m,PZVzSNtmu:p,ds4iTMbPD:N,...Xt}=xe(n),{baseVariant:ht,classNames:qt,clearLoadingGesture:Fe,gestureHandlers:Yt,gestureVariant:yt,isLoading:Re,setGestureState:Me,setVariant:Ee,variants:gt}=Tt({cycleOrder:fe,defaultVariant:"yShZsES5F",ref:i,variant:g,variantClassNames:ye}),vt=we(n,gt),te=rt(he,...[]);return v(Ct,{id:y??a,children:v(_e,{animate:gt,initial:!1,children:v(ve,{value:ge,children:v(nt.div,{...Xt,...Yt,className:rt(te,"framer-c7pgeg",d,qt),"data-framer-name":"Large - Start Number",layoutDependency:vt,layoutId:"yShZsES5F",ref:i,style:{...c},...Kt({Axt23qBeF:{"data-framer-name":"Medium - Start Number"},poGyVHWU3:{"data-framer-name":"Small- End Number"},sl1h4cdJt:{"data-framer-name":"Small - Start Number"},W6Fkdsmi9:{"data-framer-name":"Medium - End Number"},WK2OQQ8u0:{"data-framer-name":"Large - End Number"}},ht,yt),children:v(Et,{children:v(Nt,{className:"framer-166yijw-container",isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:vt,layoutId:"h4eDgjFCn-container",nodeId:"h4eDgjFCn",rendersWithMotion:!0,scopeId:"qQnPciu5G",children:v(R,{color:_,continuous:!1,direction:m,font:{fontFamily:'".SFNSDisplay-Medium", "SFProDisplay-Medium", "SFUIDisplay-Medium", ".SFUIDisplay-Medium", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',fontSize:"80px",fontWeight:499,letterSpacing:"-0.04em",lineHeight:"1em",textAlign:"right"},format:{locale:"",plusSign:!1,separators:!0,style:"compact"},gradientHeight:10,height:"100%",id:"h4eDgjFCn",layoutId:"h4eDgjFCn",prefix:p,suffix:N,transition:{duration:2,easing:"smooth"},userSelect:!1,value:f,width:"100%",...Kt({Axt23qBeF:{font:{fontFamily:'".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',fontSize:"60px",fontWeight:599,letterSpacing:"-0.04em",lineHeight:"1em",textAlign:"right"}},poGyVHWU3:{font:{fontFamily:'".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',fontSize:"42px",fontWeight:599,letterSpacing:"-0.04em",lineHeight:"1em",textAlign:"right"},value:h},sl1h4cdJt:{font:{fontFamily:'".SFNSDisplay-Semibold", "SFProDisplay-Semibold", "SFUIDisplay-Semibold", ".SFUIDisplay-Semibold", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',fontSize:"42px",fontWeight:599,letterSpacing:"-0.04em",lineHeight:"1em",textAlign:"right"}},W6Fkdsmi9:{font:{fontFamily:'".SFNSDisplay-Medium", "SFProDisplay-Medium", "SFUIDisplay-Medium", ".SFUIDisplay-Medium", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", sans-serif',fontSize:"60px",fontWeight:499,letterSpacing:"-0.04em",lineHeight:"1em",textAlign:"right"},value:h},WK2OQQ8u0:{value:h}},ht,yt)})})})})})})})}),Ve=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-SR1yc.framer-19u02s5, .framer-SR1yc .framer-19u02s5 { display: block; }",".framer-SR1yc.framer-c7pgeg { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",".framer-SR1yc .framer-166yijw-container { flex: none; height: auto; position: relative; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SR1yc.framer-c7pgeg { gap: 0px; } .framer-SR1yc.framer-c7pgeg > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-SR1yc.framer-c7pgeg > :first-child { margin-left: 0px; } .framer-SR1yc.framer-c7pgeg > :last-child { margin-right: 0px; } }"],U=Rt(Ce,Ve,"framer-SR1yc"),hi=U;U.displayName="NumberFlow";U.defaultProps={height:80,width:94};W(U,{variant:{options:["yShZsES5F","WK2OQQ8u0","Axt23qBeF","W6Fkdsmi9","sl1h4cdJt","poGyVHWU3"],optionTitles:["Large - Start Number","Large - End Number","Medium - Start Number","Medium - End Number","Small - Start Number","Small- End Number"],title:"Variant",type:u.Enum},FCkEPZZBj:{defaultValue:0,title:"Start Value",type:u.Number},zjFTn8JRN:{defaultValue:50,title:"End Value",type:u.Number},AlkJUvdso:{defaultValue:'var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)) /* {"name":"White"} */',title:"Font Color",type:u.Color},LPzu7UvXp:Qt?.direction&&{...Qt.direction,defaultValue:"down",description:void 0,hidden:void 0,title:"Direction"},PZVzSNtmu:{defaultValue:"",placeholder:"Prefix",title:"Prefix",type:u.String},ds4iTMbPD:{defaultValue:"K",placeholder:"Suffix",title:"Suffix",type:u.String}});Pt(U,[{explicitInter:!0,fonts:[]},...me],{supportsExplicitInterCodegen:!0});export{hi as a};
//# sourceMappingURL=chunk-RUPNSBGW.mjs.map

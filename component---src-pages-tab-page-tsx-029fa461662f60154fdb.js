(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{XK4p:function(e,t,a){"use strict";a.r(t);var r,n=a("mXGw"),i=a("/ZiB"),l=(a("BTfu"),a("yIlq"),a("YhIr"),a("W1QL"),a("K/PF"),a("t91x"),a("lQyR"),a("zx98"),a("Fcif")),o=a("dV/x"),c=a("mK0O"),s=(a("xVO4"),a("W0B4"),a("PDtE")),u=a("KiWR"),d=a("Utd8");function m(){if(r)return r;var e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function f(e,t){var a=e.scrollLeft;if("rtl"!==t)return a;switch(m()){case"negative":return e.scrollWidth-e.clientWidth+a;case"reverse":return e.scrollWidth-e.clientWidth-a;default:return a}}function b(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var p={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function v(e){var t=e.onChange,a=Object(o.a)(e,["onChange"]),r=n.useRef(),i=n.useRef(null),c=function(){r.current=i.current.offsetHeight-i.current.clientHeight};return n.useEffect((function(){var e=Object(u.a)((function(){var e=r.current;c(),e!==r.current&&t(r.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),n.useEffect((function(){c(),t(r.current)}),[t]),n.createElement("div",Object(l.a)({style:p,ref:i},a))}var h=a("gbh0"),g=a("mxPc"),x=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.color,c=e.orientation,u=Object(o.a)(e,["classes","className","color","orientation"]);return n.createElement("span",Object(l.a)({className:Object(s.a)(a.root,a["color".concat(Object(g.a)(i))],r,"vertical"===c&&a.vertical),ref:t},u))})),E=Object(h.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(x),w=a("VQdz");function O(e,t){var a=n.memo(n.forwardRef((function(t,a){return n.createElement(w.a,Object(l.a)({},t,{ref:a}),e)})));return a.muiName=w.a.muiName,a}var j=O(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),y=O(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"})),C=a("x+AB"),k=n.createElement(j,{fontSize:"small"}),W=n.createElement(y,{fontSize:"small"}),B=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.direction,c=e.orientation,u=e.visible,d=Object(o.a)(e,["classes","className","direction","orientation","visible"]),m=Object(s.a)(a.root,r,"vertical"===c&&a.vertical);return u?n.createElement(C.a,Object(l.a)({component:"div",className:m,ref:t,role:null,tabIndex:null},d),"left"===i?k:W):n.createElement("div",{className:m})})),N=Object(h.a)({root:{width:40,flexShrink:0},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}}},{name:"PrivateTabScrollButton"})(B),T=a("j26d"),S=a("lOOT"),L=n.forwardRef((function(e,t){var a=e.action,r=e.centered,i=void 0!==r&&r,p=e.children,h=e.classes,g=e.className,x=e.component,w=void 0===x?"div":x,O=e.indicatorColor,j=void 0===O?"secondary":O,y=e.onChange,C=e.orientation,k=void 0===C?"horizontal":C,W=e.ScrollButtonComponent,B=void 0===W?N:W,L=e.scrollButtons,M=void 0===L?"auto":L,I=e.TabIndicatorProps,P=void 0===I?{}:I,z=e.textColor,R=void 0===z?"inherit":z,q=e.value,H=e.variant,D=void 0===H?"standard":H,A=Object(o.a)(e,["action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","TabIndicatorProps","textColor","value","variant"]),G=Object(S.a)(),F="scrollable"===D,V="rtl"===G.direction,$="vertical"===k,Q=$?"scrollTop":"scrollLeft",U=$?"top":"left",K=$?"bottom":"right",X=$?"clientHeight":"clientWidth",J=$?"height":"width";var Z=n.useState(!1),Y=Z[0],_=Z[1],ee=n.useState({}),te=ee[0],ae=ee[1],re=n.useState({start:!1,end:!1}),ne=re[0],ie=re[1],le=n.useState({overflow:"hidden",marginBottom:null}),oe=le[0],ce=le[1],se=new Map,ue=n.useRef(null),de=n.useRef(null),me=function(){var e,t,a=ue.current;if(a){var r=a.getBoundingClientRect();e={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollLeftNormalized:f(a,G.direction),scrollWidth:a.scrollWidth,top:r.top,bottom:r.bottom,left:r.left,right:r.right}}if(a&&!1!==q){var n=de.current.children;if(n.length>0){var i=n[se.get(q)];0,t=i?i.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},fe=Object(T.a)((function(){var e,t=me(),a=t.tabsMeta,r=t.tabMeta,n=0;if(r&&a)if($)n=r.top-a.top+a.scrollTop;else{var i=V?a.scrollLeftNormalized+a.clientWidth-a.scrollWidth:a.scrollLeft;n=r.left-a.left+i}var l=(e={},Object(c.a)(e,U,n),Object(c.a)(e,J,r?r[J]:0),e);if(isNaN(te[U])||isNaN(te[J]))ae(l);else{var o=Math.abs(te[U]-l[U]),s=Math.abs(te[J]-l[J]);(o>=1||s>=1)&&ae(l)}})),be=function(e){!function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},i=r.ease,l=void 0===i?b:i,o=r.duration,c=void 0===o?300:o,s=null,u=t[e],d=!1,m=function(){d=!0},f=function r(i){if(d)n(new Error("Animation cancelled"));else{null===s&&(s=i);var o=Math.min(1,(i-s)/c);t[e]=l(o)*(a-u)+u,o>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(r)}};u===a?n(new Error("Element already at target position")):requestAnimationFrame(f)}(Q,ue.current,e)},pe=function(e){var t=ue.current[Q];$?t+=e:(t+=e*(V?-1:1),t*=V&&"reverse"===m()?-1:1),be(t)},ve=function(){pe(-ue.current[X])},he=function(){pe(ue.current[X])},ge=n.useCallback((function(e){ce({overflow:null,marginBottom:-e})}),[]),xe=Object(T.a)((function(){var e=me(),t=e.tabsMeta,a=e.tabMeta;if(a&&t)if(a[U]<t[U]){var r=t[Q]+(a[U]-t[U]);be(r)}else if(a[K]>t[K]){var n=t[Q]+(a[K]-t[K]);be(n)}})),Ee=Object(T.a)((function(){if(F&&"off"!==M){var e,t,a=ue.current,r=a.scrollTop,n=a.scrollHeight,i=a.clientHeight,l=a.scrollWidth,o=a.clientWidth;if($)e=r>1,t=r<n-i-1;else{var c=f(ue.current,G.direction);e=V?c<l-o-1:c>1,t=V?c>1:c<l-o-1}e===ne.start&&t===ne.end||ie({start:e,end:t})}}));n.useEffect((function(){var e=Object(u.a)((function(){fe(),Ee()})),t=Object(d.a)(ue.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[fe,Ee]);var we=n.useCallback(Object(u.a)((function(){Ee()})));n.useEffect((function(){return function(){we.clear()}}),[we]),n.useEffect((function(){_(!0)}),[]),n.useEffect((function(){fe(),Ee()})),n.useEffect((function(){xe()}),[xe,te]),n.useImperativeHandle(a,(function(){return{updateIndicator:fe,updateScrollButtons:Ee}}),[fe,Ee]);var Oe=n.createElement(E,Object(l.a)({className:h.indicator,orientation:k,color:j},P,{style:Object(l.a)({},te,{},P.style)})),je=0,ye=n.Children.map(p,(function(e){if(!n.isValidElement(e))return null;var t=void 0===e.props.value?je:e.props.value;se.set(t,je);var a=t===q;return je+=1,n.cloneElement(e,{fullWidth:"fullWidth"===D,indicator:a&&!Y&&Oe,selected:a,onChange:y,textColor:R,value:t})})),Ce=function(){var e={};e.scrollbarSizeListener=F?n.createElement(v,{className:h.scrollable,onChange:ge}):null;var t=ne.start||ne.end,a=F&&("auto"===M&&t||"desktop"===M||"on"===M);return e.scrollButtonStart=a?n.createElement(B,{orientation:k,direction:V?"right":"left",onClick:ve,visible:ne.start,className:Object(s.a)(h.scrollButtons,"on"!==M&&h.scrollButtonsDesktop)}):null,e.scrollButtonEnd=a?n.createElement(B,{orientation:k,direction:V?"left":"right",onClick:he,visible:ne.end,className:Object(s.a)(h.scrollButtons,"on"!==M&&h.scrollButtonsDesktop)}):null,e}();return n.createElement(w,Object(l.a)({className:Object(s.a)(h.root,g,$&&h.vertical),ref:t},A),Ce.scrollButtonStart,Ce.scrollbarSizeListener,n.createElement("div",{className:Object(s.a)(h.scroller,F?h.scrollable:h.fixed),style:oe,ref:ue,onScroll:we},n.createElement("div",{className:Object(s.a)(h.flexContainer,$&&h.flexContainerVertical,i&&!F&&h.centered),ref:de,role:"tablist"},ye),Y&&Oe),Ce.scrollButtonEnd)})),M=Object(h.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(c.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(L),I=n.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.disabled,c=void 0!==i&&i,u=e.disableFocusRipple,d=void 0!==u&&u,m=e.fullWidth,f=e.icon,b=e.indicator,p=e.label,v=e.onChange,h=e.onClick,x=e.selected,E=e.textColor,w=void 0===E?"inherit":E,O=e.value,j=e.wrapped,y=void 0!==j&&j,k=Object(o.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","selected","textColor","value","wrapped"]);return n.createElement(C.a,Object(l.a)({focusRipple:!d,className:Object(s.a)(a.root,a["textColor".concat(Object(g.a)(w))],r,c&&a.disabled,x&&a.selected,p&&f&&a.labelIcon,m&&a.fullWidth,y&&a.wrapped),ref:t,role:"tab","aria-selected":x,disabled:c,onClick:function(e){v&&v(e,O),h&&h(e)}},k),n.createElement("span",{className:a.wrapper},f,p),b)})),P=Object(h.a)((function(e){var t;return{root:Object(l.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(c.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(c.a)(t,"overflow","hidden"),Object(c.a)(t,"whiteSpace","normal"),Object(c.a)(t,"textAlign","center"),Object(c.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(I),z=a("/NZN"),R=(a("75LO"),a("5hJT"),a("ThN4"));var q=function(e){var t=e.children,a=e.maxWidth,r=void 0===a?"xl":a,i=e.disablePaddingTop,l=void 0===i||i,o=e.disableGutters,c=void 0===o||o,s=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["children","maxWidth","disablePaddingTop","disableGutters"]);return n.createElement(R.a,Object.assign({maxWidth:r,disablePaddingTop:l,disableGutters:c},s),t)},H=a("5UIW"),D=a("BQn0");var A=function(e){var t=e.index,a=e.value,r=e.children,i=e.maxWidth,l=void 0===i?"md":i,o=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["index","value","children","maxWidth"]);return n.createElement(H.a,Object.assign({maxWidth:l,role:"tabpanel",hidden:a!==t,id:"full-width-tabpanel-"+t,"aria-labelledby":"full-width-tab-"+t},o),n.createElement(D.a,{py:2,minHeight:"80vh"},a===t?r:null))},G=a("MU2d");t.default=function(){var e=n.useState(0),t=e[0],a=e[1],r=function(e){return function(){a(e)}};return n.createElement(q,{title:"Tab Layout",tabSticky:!0,tabs:n.createElement(M,{value:t,onChange:function(e,t){a(t)}},n.createElement(P,{label:"Tab1"}),n.createElement(P,{label:"Tab2"}),n.createElement(P,{label:"Tab3"}))},n.createElement(A,{index:0,value:t,id:"tab-1"},n.createElement(i.a,{variant:"h2",gutterBottom:!0},"Tab Layout Page"),n.createElement(i.a,{variant:"subtitle1"},"Material-UI Tab Page"),n.createElement(i.a,{paragraph:!0},"It works great with react-swipeable-views."),n.createElement(z.a,{color:"secondary",onClick:r(1)},"Go to Tab-2"),n.createElement(G.a,{to:"/"},"Back to top")),n.createElement(A,{index:1,value:t,id:"tab-2"},n.createElement(i.a,{variant:"h2",gutterBottom:!0},"Tab2 Page"),n.createElement(i.a,{paragraph:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam quis nulla dignissim finibus. Morbi aliquam quam ut efficitur feugiat. Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo, faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris, varius nec metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus ut, suscipit at arcu. Maecenas ultrices, risus ac mattis malesuada, risus risus aliquet ex, ac condimentum ex enim eget libero. Sed fermentum rutrum urna, vitae suscipit nunc tempus eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus mattis dui, quis eleifend enim convallis eget. Phasellus nec luctus leo. Proin condimentum felis nec luctus egestas. In in sagittis augue. Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus vulputate posuere vehicula."),n.createElement(z.a,{color:"secondary",onClick:r(2)},"Go to Tab-3"),n.createElement(G.a,{to:"/"},"Back to top")),n.createElement(A,{index:2,value:t},n.createElement(i.a,{variant:"h2",gutterBottom:!0},"Tab3 Page"),n.createElement(i.a,{variant:"body1",paragraph:!0},"Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。"),n.createElement(z.a,{color:"secondary",onClick:r(0)},"Go to Tab-1"),n.createElement(G.a,{to:"/"},"Back to top")))}}}]);
//# sourceMappingURL=component---src-pages-tab-page-tsx-029fa461662f60154fdb.js.map
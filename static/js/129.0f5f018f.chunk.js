"use strict";(self.webpackChunkdivergent_web_blog=self.webpackChunkdivergent_web_blog||[]).push([[129],{1129:(t,n,e)=>{e.r(n),e.d(n,{default:()=>u});var a=e(5043);const c="Main_section__Gs-SY";var o=e(3348),i=e(7419),l=e(8354),s=e(1591),r=e(579);const g=a.lazy((()=>Promise.all([e.e(927),e.e(207),e.e(808),e.e(163),e.e(759)]).then(e.bind(e,8759)))),d=a.lazy((()=>Promise.all([e.e(927),e.e(808),e.e(50),e.e(467)]).then(e.bind(e,9467)))),u=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.m,{title:"\u0421\u0442\u0430\u0442\u044c\u0438"}),(0,r.jsxs)("section",{className:c,children:[(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(i.A,{justify:"space-between",align:"middle",style:{width:"100%"},children:Array.from({length:8},(()=>Math.random())).map((t=>(0,r.jsx)(o.A,{active:!0,block:!0,style:{height:300,width:"100%",margin:"2% auto"}},t)))}),children:(0,r.jsx)(g,{})}),(0,r.jsx)(l.A,{}),(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(o.A,{active:!0,block:!0,style:{height:500,width:"100%"}}),children:(0,r.jsx)(d,{})})]})]})},3348:(t,n,e)=>{e.d(n,{A:()=>g});var a=e(5043),c=e(8139),o=e.n(c),i=e(8574),l=e(5296),s=e(4298),r=e(3272);const g=t=>{const{prefixCls:n,className:e,rootClassName:c,active:g,block:d=!1,size:u="default"}=t,{getPrefixCls:b}=a.useContext(l.QO),h=b("skeleton",n),[m,k,p]=(0,r.A)(h),j=(0,i.A)(t,["prefixCls"]),C=o()(h,"".concat(h,"-element"),{["".concat(h,"-active")]:g,["".concat(h,"-block")]:d},e,c,k,p);return m(a.createElement("div",{className:C},a.createElement(s.A,Object.assign({prefixCls:"".concat(h,"-button"),size:u},j))))}},4298:(t,n,e)=>{e.d(n,{A:()=>i});var a=e(5043),c=e(8139),o=e.n(c);const i=t=>{const{prefixCls:n,className:e,style:c,size:i,shape:l}=t,s=o()({["".concat(n,"-lg")]:"large"===i,["".concat(n,"-sm")]:"small"===i}),r=o()({["".concat(n,"-circle")]:"circle"===l,["".concat(n,"-square")]:"square"===l,["".concat(n,"-round")]:"round"===l}),g=a.useMemo((()=>"number"===typeof i?{width:i,height:i,lineHeight:"".concat(i,"px")}:{}),[i]);return a.createElement("span",{className:o()(n,s,r,e),style:Object.assign(Object.assign({},g),c)})}},3272:(t,n,e)=>{e.d(n,{A:()=>C});var a=e(6647),c=e(7060),o=e(8365);const i=new a.Mo("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),l=t=>({height:t,lineHeight:(0,a.zA)(t)}),s=t=>Object.assign({width:t},l(t)),r=t=>({background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:i,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),g=(t,n)=>Object.assign({width:n(t).mul(5).equal(),minWidth:n(t).mul(5).equal()},l(t)),d=t=>{const{skeletonAvatarCls:n,gradientFromColor:e,controlHeight:a,controlHeightLG:c,controlHeightSM:o}=t;return{["".concat(n)]:Object.assign({display:"inline-block",verticalAlign:"top",background:e},s(a)),["".concat(n).concat(n,"-circle")]:{borderRadius:"50%"},["".concat(n).concat(n,"-lg")]:Object.assign({},s(c)),["".concat(n).concat(n,"-sm")]:Object.assign({},s(o))}},u=t=>{const{controlHeight:n,borderRadiusSM:e,skeletonInputCls:a,controlHeightLG:c,controlHeightSM:o,gradientFromColor:i,calc:l}=t;return{["".concat(a)]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:e},g(n,l)),["".concat(a,"-lg")]:Object.assign({},g(c,l)),["".concat(a,"-sm")]:Object.assign({},g(o,l))}},b=t=>Object.assign({width:t},l(t)),h=t=>{const{skeletonImageCls:n,imageSizeBase:e,gradientFromColor:a,borderRadiusSM:c,calc:o}=t;return{["".concat(n)]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:c},b(o(e).mul(2).equal())),{["".concat(n,"-path")]:{fill:"#bfbfbf"},["".concat(n,"-svg")]:Object.assign(Object.assign({},b(e)),{maxWidth:o(e).mul(4).equal(),maxHeight:o(e).mul(4).equal()}),["".concat(n,"-svg").concat(n,"-svg-circle")]:{borderRadius:"50%"}}),["".concat(n).concat(n,"-circle")]:{borderRadius:"50%"}}},m=(t,n,e)=>{const{skeletonButtonCls:a}=t;return{["".concat(e).concat(a,"-circle")]:{width:n,minWidth:n,borderRadius:"50%"},["".concat(e).concat(a,"-round")]:{borderRadius:n}}},k=(t,n)=>Object.assign({width:n(t).mul(2).equal(),minWidth:n(t).mul(2).equal()},l(t)),p=t=>{const{borderRadiusSM:n,skeletonButtonCls:e,controlHeight:a,controlHeightLG:c,controlHeightSM:o,gradientFromColor:i,calc:l}=t;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({["".concat(e)]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:n,width:l(a).mul(2).equal(),minWidth:l(a).mul(2).equal()},k(a,l))},m(t,a,e)),{["".concat(e,"-lg")]:Object.assign({},k(c,l))}),m(t,c,"".concat(e,"-lg"))),{["".concat(e,"-sm")]:Object.assign({},k(o,l))}),m(t,o,"".concat(e,"-sm")))},j=t=>{const{componentCls:n,skeletonAvatarCls:e,skeletonTitleCls:a,skeletonParagraphCls:c,skeletonButtonCls:o,skeletonInputCls:i,skeletonImageCls:l,controlHeight:g,controlHeightLG:b,controlHeightSM:m,gradientFromColor:k,padding:j,marginSM:C,borderRadius:O,titleHeight:v,blockRadius:w,paragraphLiHeight:H,controlHeightXS:S,paragraphMarginTop:f}=t;return{["".concat(n)]:{display:"table",width:"100%",["".concat(n,"-header")]:{display:"table-cell",paddingInlineEnd:j,verticalAlign:"top",["".concat(e)]:Object.assign({display:"inline-block",verticalAlign:"top",background:k},s(g)),["".concat(e,"-circle")]:{borderRadius:"50%"},["".concat(e,"-lg")]:Object.assign({},s(b)),["".concat(e,"-sm")]:Object.assign({},s(m))},["".concat(n,"-content")]:{display:"table-cell",width:"100%",verticalAlign:"top",["".concat(a)]:{width:"100%",height:v,background:k,borderRadius:w,["+ ".concat(c)]:{marginBlockStart:m}},["".concat(c)]:{padding:0,"> li":{width:"100%",height:H,listStyle:"none",background:k,borderRadius:w,"+ li":{marginBlockStart:S}}},["".concat(c,"> li:last-child:not(:first-child):not(:nth-child(2))")]:{width:"61%"}},["&-round ".concat(n,"-content")]:{["".concat(a,", ").concat(c," > li")]:{borderRadius:O}}},["".concat(n,"-with-avatar ").concat(n,"-content")]:{["".concat(a)]:{marginBlockStart:C,["+ ".concat(c)]:{marginBlockStart:f}}},["".concat(n).concat(n,"-element")]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},p(t)),d(t)),u(t)),h(t)),["".concat(n).concat(n,"-block")]:{width:"100%",["".concat(o)]:{width:"100%"},["".concat(i)]:{width:"100%"}},["".concat(n).concat(n,"-active")]:{["\n        ".concat(a,",\n        ").concat(c," > li,\n        ").concat(e,",\n        ").concat(o,",\n        ").concat(i,",\n        ").concat(l,"\n      ")]:Object.assign({},r(t))}}},C=(0,c.OF)("Skeleton",(t=>{const{componentCls:n,calc:e}=t,a=(0,o.h1)(t,{skeletonAvatarCls:"".concat(n,"-avatar"),skeletonTitleCls:"".concat(n,"-title"),skeletonParagraphCls:"".concat(n,"-paragraph"),skeletonButtonCls:"".concat(n,"-button"),skeletonInputCls:"".concat(n,"-input"),skeletonImageCls:"".concat(n,"-image"),imageSizeBase:e(t.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(t.gradientFromColor," 25%, ").concat(t.gradientToColor," 37%, ").concat(t.gradientFromColor," 63%)"),skeletonLoadingMotionDuration:"1.4s"});return[j(a)]}),(t=>{const{colorFillContent:n,colorFill:e}=t;return{color:n,colorGradientEnd:e,gradientFromColor:n,gradientToColor:e,titleHeight:t.controlHeight/2,blockRadius:t.borderRadiusSM,paragraphMarginTop:t.marginLG+t.marginXXS,paragraphLiHeight:t.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]})}}]);
//# sourceMappingURL=129.0f5f018f.chunk.js.map
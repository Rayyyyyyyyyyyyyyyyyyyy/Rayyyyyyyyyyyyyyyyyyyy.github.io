(self["webpackChunkvue_trip"]=self["webpackChunkvue_trip"]||[]).push([[193],{6206:function(t,e,n){n(1703),n(2801),function(e,n){t.exports=n()}(0,(function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof n.g?n.g:"undefined"!=typeof self?self:{},e="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,f=d||l||Function("return this")(),m=Object.prototype.toString,p=Math.max,v=Math.min,b=function(){return f.Date.now()};function g(t,n,i){var o,a,r,s,c,u,d=0,l=!1,f=!1,m=!0;if("function"!=typeof t)throw new TypeError(e);function g(e){var n=o,i=a;return o=a=void 0,d=e,s=t.apply(i,n)}function h(t){var e=t-u;return void 0===u||e>=n||e<0||f&&t-d>=r}function k(){var t=b();if(h(t))return x(t);c=setTimeout(k,function(t){var e=n-(t-u);return f?v(e,r-(t-d)):e}(t))}function x(t){return c=void 0,m&&o?g(t):(o=a=void 0,s)}function _(){var t=b(),e=h(t);if(o=arguments,a=this,u=t,e){if(void 0===c)return function(t){return d=t,c=setTimeout(k,n),l?g(t):s}(u);if(f)return c=setTimeout(k,n),g(u)}return void 0===c&&(c=setTimeout(k,n)),s}return n=w(n)||0,y(i)&&(l=!!i.leading,r=(f="maxWait"in i)?p(w(i.maxWait)||0,n):r,m="trailing"in i?!!i.trailing:m),_.cancel=function(){void 0!==c&&clearTimeout(c),d=0,o=u=a=c=void 0},_.flush=function(){return void 0===c?s:x(b())},_}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&m.call(t)==o}(t))return i;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=s.test(t);return n||c.test(t)?u(t.slice(2),n?2:8):r.test(t)?i:+t}var h=function(t,n,i){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(e);return y(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),g(t,n,{leading:o,maxWait:n,trailing:a})},k="Expected a function",x=NaN,_="[object Symbol]",j=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,E="object"==typeof t&&t&&t.Object===Object&&t,D="object"==typeof self&&self&&self.Object===Object&&self,L=E||D||Function("return this")(),T=Object.prototype.toString,q=Math.max,S=Math.min,A=function(){return L.Date.now()};function H(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function M(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&T.call(t)==_}(t))return x;if(H(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=H(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(j,"");var n=C.test(t);return n||N.test(t)?z(t.slice(2),n?2:8):O.test(t)?x:+t}var U=function(t,e,n){var i,o,a,r,s,c,u=0,d=!1,l=!1,f=!0;if("function"!=typeof t)throw new TypeError(k);function m(e){var n=i,a=o;return i=o=void 0,u=e,r=t.apply(a,n)}function p(t){var n=t-c;return void 0===c||n>=e||n<0||l&&t-u>=a}function v(){var t=A();if(p(t))return b(t);s=setTimeout(v,function(t){var n=e-(t-c);return l?S(n,a-(t-u)):n}(t))}function b(t){return s=void 0,f&&i?m(t):(i=o=void 0,r)}function g(){var t=A(),n=p(t);if(i=arguments,o=this,c=t,n){if(void 0===s)return function(t){return u=t,s=setTimeout(v,e),d?m(t):r}(c);if(l)return s=setTimeout(v,e),m(c)}return void 0===s&&(s=setTimeout(v,e)),r}return e=M(e)||0,H(n)&&(d=!!n.leading,a=(l="maxWait"in n)?q(M(n.maxWait)||0,e):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),u=0,i=c=o=s=void 0},g.flush=function(){return void 0===s?r:b(A())},g},Z=function(){};function I(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes);if(function t(e){var n=void 0,i=void 0;for(n=0;n<e.length;n+=1){if((i=e[n]).dataset&&i.dataset.aos)return!0;if(i.children&&t(i.children))return!0}return!1}(e.concat(n)))return Z()}))}function W(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var $={isSupported:function(){return!!W()},ready:function(t,e){var n=window.document,i=new(W())(I);Z=e,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},P=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},B=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,F=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,G=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,X=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function J(){return navigator.userAgent||navigator.vendor||window.opera||""}var Q=new(function(){function t(){P(this,t)}return Y(t,[{key:"phone",value:function(){var t=J();return!(!B.test(t)&&!F.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=J();return!(!G.test(t)&&!X.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}()),R=function(t,e){var n=void 0;return Q.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:e}):n=new CustomEvent(t,{detail:e}),document.dispatchEvent(n)},V=function(t){return t.forEach((function(t,e){return function(t,e){var n=t.options,i=t.position,o=t.node,a=(t.data,function(){t.animated&&(function(t,e){e&&e.forEach((function(e){return t.classList.remove(e)}))}(o,n.animatedClassNames),R("aos:out",o),t.options.id&&R("aos:in:"+t.options.id,o),t.animated=!1)});n.mirror&&e>=i.out&&!n.once?a():e>=i.in?t.animated||(function(t,e){e&&e.forEach((function(e){return t.classList.add(e)}))}(o,n.animatedClassNames),R("aos:in",o),t.options.id&&R("aos:in:"+t.options.id,o),t.animated=!0):t.animated&&!n.once&&a()}(t,window.pageYOffset)}))},tt=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}},et=function(t,e,n){var i=t.getAttribute("data-aos-"+e);if(void 0!==i){if("true"===i)return!0;if("false"===i)return!1}return i||n},nt=function(t,e){return t.forEach((function(t,n){var i=et(t.node,"mirror",e.mirror),o=et(t.node,"once",e.once),a=et(t.node,"id"),r=e.useClassNames&&t.node.getAttribute("data-aos"),s=[e.animatedClassName].concat(r?r.split(" "):[]).filter((function(t){return"string"==typeof t}));e.initClassName&&t.node.classList.add(e.initClassName),t.position={in:function(t,e,n){var i=window.innerHeight,o=et(t,"anchor"),a=et(t,"anchor-placement"),r=Number(et(t,"offset",a?0:e)),s=a||n,c=t;o&&document.querySelectorAll(o)&&(c=document.querySelectorAll(o)[0]);var u=tt(c).top-i;switch(s){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=i/2;break;case"center-center":u+=i/2+c.offsetHeight/2;break;case"bottom-center":u+=i/2+c.offsetHeight;break;case"top-top":u+=i;break;case"bottom-top":u+=i+c.offsetHeight;break;case"center-top":u+=i+c.offsetHeight/2}return u+r}(t.node,e.offset,e.anchorPlacement),out:i&&function(t,e){window.innerHeight;var n=et(t,"anchor"),i=et(t,"offset",e),o=t;return n&&document.querySelectorAll(n)&&(o=document.querySelectorAll(n)[0]),tt(o).top+o.offsetHeight-i}(t.node,e.offset)},t.options={once:o,mirror:i,animatedClassNames:s,id:a}})),t},it=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,(function(t){return{node:t}}))},ot=[],at=!1,rt={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},st=function(){return document.all&&!window.atob},ct=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(at=!0),at&&(ot=nt(ot,rt),V(ot),window.addEventListener("scroll",h((function(){V(ot,rt.once)}),rt.throttleDelay)))},ut=function(){if(ot=it(),lt(rt.disable)||st())return dt();ct()},dt=function(){ot.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),rt.initClassName&&t.node.classList.remove(rt.initClassName),rt.animatedClassName&&t.node.classList.remove(rt.animatedClassName)}))},lt=function(t){return!0===t||"mobile"===t&&Q.mobile()||"phone"===t&&Q.phone()||"tablet"===t&&Q.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return rt=K(rt,t),ot=it(),rt.disableMutationObserver||$.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),rt.disableMutationObserver=!0),rt.disableMutationObserver||$.ready("[data-aos]",ut),lt(rt.disable)||st()?dt():(document.querySelector("body").setAttribute("data-aos-easing",rt.easing),document.querySelector("body").setAttribute("data-aos-duration",rt.duration),document.querySelector("body").setAttribute("data-aos-delay",rt.delay),-1===["DOMContentLoaded","load"].indexOf(rt.startEvent)?document.addEventListener(rt.startEvent,(function(){ct(!0)})):window.addEventListener("load",(function(){ct(!0)})),"DOMContentLoaded"===rt.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ct(!0),window.addEventListener("resize",U(ct,rt.debounceDelay,!0)),window.addEventListener("orientationchange",U(ct,rt.debounceDelay,!0)),ot)},refresh:ct,refreshHard:ut}}))},4271:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var i=n(1891),o=n(440);const a=t=>((0,o.dD)("data-v-7e61f1fc"),t=t(),(0,o.Cn)(),t),r={class:"header"},s=a((()=>(0,o._)("div",{class:"header_center"},null,-1))),c={class:"header_right"};function u(t,e,n,a,u,d){const l=i.Z;return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(l,{onClick:t.goHomeUrl,name:"logo",width:40,height:40},null,8,["onClick"]),s,(0,o._)("div",c,[(0,o.Wm)(l,{onClick:t.goUserUrl,name:"user",width:24,height:24,color:"#fff"},null,8,["onClick"])])])}var d=n(3289),l=n(8297),f=n(1617),m=(0,o.aZ)({name:"HeaderComponent",components:{SvgIcon:i.Z},props:{},setup(t){const e=(0,d.tv)(),n=()=>{(0,f.z8)("Coming soon")},i=()=>{e.push({name:l.Z.home})};return{goUserUrl:n,goHomeUrl:i}}}),p=n(465);const v=(0,p.Z)(m,[["render",u],["__scopeId","data-v-7e61f1fc"]]);var b=v},8193:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return U}});n(3450),n(9946),n(3044);var i=n(684),o=n(8708),a=n(5227),r=n(7520),s=n(440),c=n(8643);const u={class:"list-item-header"},d={class:"list-item-body"},l={class:"title"},f={class:"content"};function m(t,e,n,i,o,a){const m=r.F8;return(0,s.wg)(),(0,s.iD)("div",{class:"list-item","data-aos":"zoom-in","data-aos-easing":"ease-out","data-aos-duration":"900","data-aos-delay":"500","data-aos-offset":"200",onClick:e[0]||(e[0]=(...e)=>t.goTripUrl&&t.goTripUrl(...e))},[(0,s._)("div",u,[(0,s.Wm)(m,{src:t.defaultImgUrl+t.imgUrl,alt:"img",fit:"cover",lazy:""},null,8,["src"])]),(0,s._)("div",d,[(0,s._)("div",l,(0,c.zw)(t.trip_title),1),(0,s._)("div",f,(0,c.zw)(t.trip_content),1)])])}var p=n(9331),v=n(7777),b=n(8297),g=n(6206),y=n.n(g),w=(0,s.aZ)({name:"TripListItem",props:{imgUrl:{type:String},trip_title:{type:String},trip_content:{type:String},trip_id:{type:Number,require:!0}},setup(t,{emit:e}){const n=()=>{v.Z.push({name:b.Z.tripPage,params:{id:t.trip_id}})};return(0,s.bv)((async()=>{y().init()})),{defaultImgUrl:p.Xw,goTripUrl:n}}}),h=n(465);const k=(0,h.Z)(w,[["render",m],["__scopeId","data-v-3fa3ec17"]]);var x=k,_=n(1891),j=n(4271);const O=t=>((0,s.dD)("data-v-e70e08ae"),t=t(),(0,s.Cn)(),t),C={class:"trip-list"},N={class:"container"},z={class:"container-item"},E={class:"city-title"},D=O((()=>(0,s._)("div",{class:"line","data-aos":"zoom-in-right","data-aos-delay":"200","data-aos-duration":"900","data-aos-offset":"200"},null,-1))),L={"data-aos":"fade-up","data-aos-delay":"500","data-aos-duration":"900","data-aos-offset":"200"},T={key:0},q={class:"city-trip"};function S(t,e,n,r,u,d){const l=j.Z,f=_.Z,m=x,p=a.Dv,v=o.dq,b=i.GT;return(0,s.wg)(),(0,s.iD)("div",C,[(0,s.Wm)(l),(0,s._)("div",N,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.cityList,((e,n)=>((0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("div",E,[(0,s.Wm)(f,{"data-aos":"fade-up-right","data-aos-delay":"1000","data-aos-duration":"900","data-aos-offset":"200",name:"plane"}),D,(0,s._)("p",L,(0,c.zw)(e),1)]),t.renderData.length>0?((0,s.wg)(),(0,s.iD)("span",T,[(0,s._)("div",q,[(0,s.Wm)(v,{gutter:20},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.renderData[n],(t=>((0,s.wg)(),(0,s.j4)(p,{span:6},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.j4)(m,{imgUrl:t.imageUrl,trip_title:t.actName,trip_content:t.description,trip_id:t.actId,key:t.actId},null,8,["imgUrl","trip_title","trip_content","trip_id"]))])),_:2},1024)))),256))])),_:2},1024)])])):((0,s.wg)(),(0,s.j4)(b,{key:1}))])))),256))])])}var A=n(4367),H=(0,s.aZ)({name:"TripList",components:{Header:j.Z,TripListItem:x},props:{keyword:{type:String}},setup(t){const e=(0,A.qj)({activity:[],cityList:[],renderData:[]});(0,s.YP)((()=>t.keyword),(()=>{e.cityList=[t.keyword],a(e.activity)}));const i=async()=>{e.activity=await n(3527)},o=t=>{let n=[];t.map((t=>{n.push(t.cityName.split(" ")[0])})),e.cityList=n.filter(((t,e)=>n.indexOf(t)==e))},a=t=>{let n=e.cityList,i=[];for(let e=0;e<n.length;e++){let o=[];for(let i=0;i<t.length;i++)t[i].cityName.includes(n[e])&&o.push(t[i]);i.push(o)}e.renderData=i,console.log("renderData",e.renderData)};return(0,s.bv)((async()=>{await y().init(),await i(),await o(e.activity),t.keyword?(e.cityList=[t.keyword],await a(e.activity)):await a(e.activity)})),{...(0,A.BK)(e)}}});const M=(0,h.Z)(H,[["render",S],["__scopeId","data-v-e70e08ae"]]);var U=M},3044:function(t,e,n){"use strict";n(3450)},9946:function(t,e,n){"use strict";n(3450)}}]);
//# sourceMappingURL=193.04972ff4.js.map
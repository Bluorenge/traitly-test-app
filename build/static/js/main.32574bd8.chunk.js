(window.webpackJsonptraitly=window.webpackJsonptraitly||[]).push([[0],{35:function(n,t,e){n.exports=e(46)},46:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(30),c=e.n(i),u=e(2),o=e(34),l=e(5),d=e(6),b=e(10),f=e(9),p=e(11),s=e(18),j=e(17),O=e(1),x=e(22),g=e.n(x),v=e(25),m=function(){function n(){Object(l.a)(this,n),this._apiBase="http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2"}return Object(d.a)(n,[{key:"getResource",value:function(){var n=Object(v.a)(g.a.mark(function n(){var t;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(this._apiBase);case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Could not fetch ".concat(this._apiBase)+", received ".concat(t.status));case 5:return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"getProduct",value:function(){var n=Object(v.a)(g.a.mark(function n(){var t;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getResource();case 2:return t=n.sent,n.abrupt("return",t.map(this._transformJson));case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"_transformJson",value:function(n){return{index:n.index,id:n._id,about:n.about,name:n.name,picture:n.picture,company:n.company,sizes:{small:n.sizes.small,medium:n.sizes.medium,big:n.sizes.big},price:n.price,isActive:n.isActive}}}]),n}(),h=a.a.createContext(),y=h.Provider,w=h.Consumer,k=e(3);function z(){var n=Object(u.a)(['\n  position: relative;\n  border: none;\n  background: transparent;\n  font-size: 0;\n  width: 40px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 6px;\n    left: 8px;\n    width: 20px;\n    height: 20px;\n    background: url("./search-icon.png") 100% 100% no-repeat;\n  }\n']);return z=function(){return n},n}function S(){var n=Object(u.a)(["\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n"]);return S=function(){return n},n}function E(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 35px;\n  border-radius: 5px;\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.05);\n"]);return E=function(){return n},n}function P(){var n=Object(u.a)(["\n  padding: 20px;\n  padding-bottom: 0;\n"]);return P=function(){return n},n}var C=k.a.section(P()),B=k.a.div(E()),_=k.a.input(S()),A=k.a.button(z()),T=function(){return Object(O.d)(C,null,Object(O.d)(B,null,Object(O.d)(_,{type:"text",placeholder:"Search"}),Object(O.d)(A,null,"\u041f\u043e\u0438\u0441\u043a")))},J=e(14),R=e(7);function D(){var n=Object(u.a)(["\n  padding: 0;\n  margin-left: 5px;\n  border-radius: 2px;\n  border: none;\n  background-color: rgb(155, 155, 155);\n  width: 5px;\n\n  :disabled {\n    background-image: linear-gradient(\n      -62.95deg,\n      rgb(142, 162, 255) 0%,\n      rgb(85, 122, 199) 100%\n    );\n    width: 30px;\n  }\n"]);return D=function(){return n},n}function H(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  height: 5px;\n"]);return H=function(){return n},n}var I=k.a.div(H()),M=k.a.span(D()),W=function(n){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(d.a)(t,[{key:"renderToggleSlide",value:function(n){return n.map(function(n){return Object(O.d)(M,{as:R.b,key:n.index,slide:n.index})})}},{key:"render",value:function(){var n=this;return Object(O.d)(w,null,function(t){var e=Object(J.a)(t,3),r=e[0];e[1],e[2];return Object(O.d)(I,null,n.renderToggleSlide(r))})}}]),t}(r.Component);function L(){var n=Object(u.a)(["\n                  .carousel__slider-tray {\n                    display: flex;\n                  }\n                "]);return L=function(){return n},n}function Y(){var n=Object(u.a)(["\n  padding: 10px 25px;\n  background-image: linear-gradient(\n    -62.95deg,\n    rgb(142, 162, 255) 0%,\n    rgb(85, 122, 199) 100%\n  );\n  font-size: 16px;\n  border-radius: 3px;\n  border: none;\n  color: #fff;\n  font-size: 12px;\n"]);return Y=function(){return n},n}function $(){var n=Object(u.a)(["\n  display: block;\n  height: 10px;\n  margin-left: 5px;\n  font-size: 10px;\n  color: #666;\n"]);return $=function(){return n},n}function q(){var n=Object(u.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return q=function(){return n},n}function F(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]);return F=function(){return n},n}function G(){var n=Object(u.a)(["\n  font-size: 13px;\n  color: #666;\n"]);return G=function(){return n},n}function K(){var n=Object(u.a)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  font-weight: 400;\n"]);return K=function(){return n},n}function N(){var n=Object(u.a)(["\n  height: auto;\n  width: 100%;\n"]);return N=function(){return n},n}function Q(){var n=Object(u.a)(["\n  width: 100px;\n  margin-right: 20px;\n"]);return Q=function(){return n},n}function U(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  width: calc(100% - 20px);\n  height: 160px;\n  margin-right: 20px;\n  margin-bottom: 25px;\n  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.04);\n"]);return U=function(){return n},n}function V(){var n=Object(u.a)(["\n  color: #9b9b9b;\n  font-size: 14px;\n"]);return V=function(){return n},n}function X(){var n=Object(u.a)(["\n  font-size: 21px;\n  margin-right: 10px;\n"]);return X=function(){return n},n}function Z(){var n=Object(u.a)(["\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 20px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(u.a)(["\n  padding: 0 20px;\n  padding-bottom: 40px;\n"]);return nn=function(){return n},n}var tn=k.a.section(nn()),en=k.a.div(Z()),rn=k.a.h2(X()),an=k.a.span(V()),cn=k.a.div(U()),un=k.a.div(Q()),on=k.a.img(N()),ln=k.a.h3(K()),dn=k.a.span(G()),bn=k.a.div(F()),fn=k.a.span(q(),function(n){return n.gold?"gold":"#666"}),pn=k.a.span($()),sn=k.a.button(Y()),jn=function(n){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(d.a)(t,[{key:"render",value:function(){return Object(O.d)(w,null,function(n){var t=Object(J.a)(n,3),e=t[0],r=(t[1],t[2]);return Object(O.d)(tn,null,Object(O.d)(O.a,{styles:Object(O.c)(L())}),Object(O.d)(en,null,Object(O.d)(rn,null,"Todays Trending"),Object(O.d)(an,null,"20th May")),Object(O.d)(R.a,{naturalSlideWidth:0,naturalSlideHeight:0,totalSlides:6},Object(O.d)(R.d,null,e.map(function(n,t){return Object(O.d)(R.c,{index:n.index,key:n.id},Object(O.d)(cn,null,Object(O.d)(un,null,Object(O.d)(on,{src:n.picture,"aria-hidden":!0,alt:"Product picture."})),Object(O.d)("div",null,Object(O.d)(ln,null,Object(O.d)(s.b,{to:"/product/".concat(n.index),onClick:function(){return r(t)}},n.name)),Object(O.d)(dn,null,n.company),Object(O.d)(bn,null,Object(O.d)(fn,{gold:!0},"\u2605"),Object(O.d)(fn,{gold:!0},"\u2605"),Object(O.d)(fn,{gold:!0},"\u2605"),Object(O.d)(fn,{gold:!0},"\u2605"),Object(O.d)(fn,null,"\u2605"),Object(O.d)(pn,null,"(301)")),Object(O.d)(sn,null,"Add to cart"))))})),Object(O.d)(W,null)))})}}]),t}(r.Component);function On(){var n=Object(u.a)(["\n                  .carousel__slider-tray {\n                    display: flex;\n                  }\n                "]);return On=function(){return n},n}function xn(){var n=Object(u.a)(["\n  display: block;\n  margin-left: 5px;\n  color: #666;\n  font-size: 10px;\n"]);return xn=function(){return n},n}function gn(){var n=Object(u.a)(["\n  height: 24px;\n  color: ",";\n"]);return gn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return vn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  font-size: 14px;\n  font-weight: 400;\n"]);return mn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  height: auto;\n  width: 100%;\n  border-radius: 5px;\n"]);return hn=function(){return n},n}function yn(){var n=Object(u.a)(["\n  width: 95px;\n  margin-bottom: 10px;\n"]);return yn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-right: 15px;\n"]);return wn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: flex-start;\n"]);return kn=function(){return n},n}function zn(){var n=Object(u.a)(["\n  margin-left: auto;\n  color: #557ac7;\n  font-size: 14px;\n"]);return zn=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  color: #9b9b9b;\n  font-size: 14px;\n"]);return Sn=function(){return n},n}function En(){var n=Object(u.a)(["\n  font-size: 21px;\n  margin-right: 10px;\n"]);return En=function(){return n},n}function Pn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 20px;\n"]);return Pn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n  padding: 0 20px;\n  padding-bottom: 40px;\n"]);return Cn=function(){return n},n}var Bn=k.a.section(Cn()),_n=k.a.div(Pn()),An=k.a.h2(En()),Tn=k.a.span(Sn()),Jn=k.a.span(zn()),Rn=k.a.div(kn()),Dn=k.a.div(wn()),Hn=k.a.div(yn()),In=k.a.img(hn()),Mn=k.a.h3(mn()),Wn=k.a.div(vn()),Ln=k.a.span(gn(),function(n){return n.gold?"gold":"#666"}),Yn=k.a.span(xn()),$n=function(n){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(d.a)(t,[{key:"renderBestSellingProduct",value:function(n){return n.map(function(n){return Object(O.d)(R.c,{index:n.index,key:n.id},Object(O.d)(Dn,null,Object(O.d)(Hn,null,Object(O.d)(In,{src:n.picture,"aria-hidden":!0,alt:"Product picture."})),Object(O.d)("div",null,Object(O.d)(Mn,null,n.name),Object(O.d)(Wn,null,Object(O.d)(Ln,{gold:!0},"\u2605"),Object(O.d)(Ln,{gold:!0},"\u2605"),Object(O.d)(Ln,{gold:!0},"\u2605"),Object(O.d)(Ln,{gold:!0},"\u2605"),Object(O.d)(Ln,null,"\u2605"),Object(O.d)(Yn,null,"(301)")))))})}},{key:"render",value:function(){var n=this;return Object(O.d)(w,null,function(t){var e=Object(J.a)(t,3),r=e[0];e[1],e[2];return Object(O.d)(Bn,null,Object(O.d)(O.a,{styles:Object(O.c)(On())}),Object(O.d)("div",null,Object(O.d)(_n,null,Object(O.d)(An,null,"Best Selling"),Object(O.d)(Tn,null,"This week"),Object(O.d)(Jn,null,"See all")),Object(O.d)(Rn,null,Object(O.d)(R.a,{naturalSlideWidth:0,naturalSlideHeight:0,totalSlides:6,style:{width:"40%"}},Object(O.d)(R.d,null,n.renderBestSellingProduct(r))))))})}}]),t}(r.Component);function qn(){var n=Object(u.a)(["\n  font-size: 14px;\n  font-weight: 400;\n"]);return qn=function(){return n},n}function Fn(){var n=Object(u.a)(["\n  height: auto;\n  width: 100%;\n"]);return Fn=function(){return n},n}function Gn(){var n=Object(u.a)(["\n  width: 72px;\n  margin-bottom: 12px;\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  width: 70px;\n  margin-right: 15px;\n"]);return Kn=function(){return n},n}function Nn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: flex-start;\n"]);return Nn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  margin-left: auto;\n  color: #557ac7;\n  font-size: 14px;\n"]);return Qn=function(){return n},n}function Un(){var n=Object(u.a)(["\n  font-size: 21px;\n  margin-right: 10px;\n"]);return Un=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 20px;\n"]);return Vn=function(){return n},n}function Xn(){var n=Object(u.a)(["\n  padding: 0 20px;\n  padding-bottom: 40px;\n"]);return Xn=function(){return n},n}var Zn=k.a.section(Xn()),nt=k.a.div(Vn()),tt=k.a.h2(Un()),et=k.a.span(Qn()),rt=k.a.div(Nn()),at=k.a.div(Kn()),it=k.a.div(Gn()),ct=k.a.img(Fn()),ut=k.a.h3(qn()),ot=function(n){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(d.a)(t,[{key:"renderBestSellingProduct",value:function(n){return n.map(function(n){return Object(O.d)(R.c,{index:n.index,key:n.id},Object(O.d)(at,null,Object(O.d)(it,null,Object(O.d)(ct,{src:n.picture,"aria-hidden":!0,alt:"Product picture."})),Object(O.d)(ut,null,n.name)))})}},{key:"render",value:function(){var n=this;return Object(O.d)(w,null,function(t){var e=Object(J.a)(t,3),r=e[0];e[1],e[2];return Object(O.d)(Zn,null,Object(O.d)(nt,null,Object(O.d)(tt,null,"Best Selling"),Object(O.d)(et,null,"See all")),Object(O.d)(rt,null,Object(O.d)(R.a,{naturalSlideWidth:0,naturalSlideHeight:0,totalSlides:6,style:{width:"30%"}},Object(O.d)(R.d,null,n.renderBestSellingProduct(r)))))})}}]),t}(r.Component);var lt=function(){return a.a.createElement("div",null,a.a.createElement(T,null),a.a.createElement(jn,null),a.a.createElement($n,null),a.a.createElement(ot,null))};function dt(){var n=Object(u.a)(["\n  display: block;\n  margin-left: 3px;\n  border-radius: 2px;\n  ",";\n  width: ",";\n"]);return dt=function(){return n},n}function bt(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  height: 3px;\n"]);return bt=function(){return n},n}function ft(){var n=Object(u.a)([""]);return ft=function(){return n},n}function pt(){var n=Object(u.a)(["\n  color: #8da1fe;\n"]);return pt=function(){return n},n}function st(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 50px;\n  height: 20px;\n  margin-right: 15px;\n"]);return st=function(){return n},n}function jt(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);return jt=function(){return n},n}function Ot(){var n=Object(u.a)(["\n  display: block;\n  color: #9b9b9b;\n  font-size: 10px;\n"]);return Ot=function(){return n},n}function xt(){var n=Object(u.a)(["\n  display: block;\n  color: #4a4a4a;\n  font-size: 14px;\n"]);return xt=function(){return n},n}function gt(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 85px;\n  height: 46px;\n  padding-left: 10px;\n  border-radius: 2px;\n  border: 1px solid #8ea2ff;\n"]);return gt=function(){return n},n}function vt(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: flex-start;\n  max-width: 285px;\n"]);return vt=function(){return n},n}function mt(){var n=Object(u.a)(["\n  display: block;\n  color: #4a4a4a;\n  font-size: 13px;\n  margin-bottom: 15px;\n"]);return mt=function(){return n},n}function ht(){var n=Object(u.a)(["\n  margin-bottom: 35px;\n"]);return ht=function(){return n},n}function yt(){var n=Object(u.a)(["\n  padding: 10px 25px;\n  background-image: linear-gradient(\n    -62.95deg,\n    rgb(142, 162, 255) 0%,\n    rgb(85, 122, 199) 100%\n  );\n  font-size: 16px;\n  border-radius: 3px;\n  border: none;\n  color: #fff;\n  font-size: 12px;\n"]);return yt=function(){return n},n}function wt(){var n=Object(u.a)(["\n  display: block;\n  margin-left: 5px;\n  color: #666;\n"]);return wt=function(){return n},n}function kt(){var n=Object(u.a)(["\n  font-size: 18px;\n  color: ",";\n"]);return kt=function(){return n},n}function zt(){var n=Object(u.a)(["\n  display: block;\n  color: #4a4a4a;\n  font-size: 13px;\n"]);return zt=function(){return n},n}function St(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n"]);return St=function(){return n},n}function Et(){var n=Object(u.a)(["\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 20px;\n"]);return Et=function(){return n},n}function Pt(){var n=Object(u.a)(["\n  color: #9b9b9b;\n  font-size: 12px;\n  margin-bottom: 30px;\n"]);return Pt=function(){return n},n}function Ct(){var n=Object(u.a)(["\n  color: #666;\n  font-size: 14px;\n"]);return Ct=function(){return n},n}function Bt(){var n=Object(u.a)(["\n  margin-bottom: 5px;\n  font-size: 22px;\n  font-weight: 400;\n"]);return Bt=function(){return n},n}function _t(){var n=Object(u.a)(["\n  height: auto;\n  width: 100%;\n  border-radius: 5px;\n"]);return _t=function(){return n},n}function At(){var n=Object(u.a)(["\n  width: 120px;\n  margin-bottom: 10px;\n"]);return At=function(){return n},n}function Tt(){var n=Object(u.a)(["\n  width: 35%;\n"]);return Tt=function(){return n},n}function Jt(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-right: 40px;\n  width: calc(65% - 40px);\n"]);return Jt=function(){return n},n}function Rt(){var n=Object(u.a)(["\n  display: flex;\n  margin-bottom: 10px;\n"]);return Rt=function(){return n},n}function Dt(){var n=Object(u.a)(["\n  width: 100%;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]);return Dt=function(){return n},n}function Ht(){var n=Object(u.a)(["\n  padding: 40px 20px;\n"]);return Ht=function(){return n},n}var It=k.a.section(Ht()),Mt=k.a.div(Dt()),Wt=k.a.div(Rt()),Lt=k.a.div(Jt()),Yt=k.a.div(Tt()),$t=k.a.div(At()),qt=k.a.img(_t()),Ft=k.a.h1(Bt()),Gt=k.a.span(Ct()),Kt=k.a.p(Pt()),Nt=k.a.span(Et()),Qt=k.a.div(St()),Ut=k.a.span(zt()),Vt=k.a.span(kt(),function(n){return n.gold?"gold":"#666"}),Xt=k.a.span(wt()),Zt=k.a.button(yt()),ne=k.a.div(ht()),te=k.a.span(mt()),ee=k.a.div(vt()),re=k.a.div(gt()),ae=k.a.span(xt()),ie=k.a.span(Ot()),ce=k.a.div(jt()),ue=k.a.div(st()),oe=k.a.span(pt()),le=k.a.span(ft()),de=k.a.div(bt()),be=k.a.span(dt(),function(n){return n.active?"background-image: linear-gradient( -62.95deg, rgb(142,162,255) 0%, rgb(85,122,199) 100%);":"background-color: rgb(155, 155, 155);"},function(n){return n.active?"20px":"3px"}),fe=function(n){function t(){return Object(l.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,n),Object(d.a)(t,[{key:"getSizes",value:function(n,t,e){return n?Object(O.d)(re,null,Object(O.d)(ae,null,"Small"),Object(O.d)(ie,null,"10cm x 24cm")):t?Object(O.d)(re,null,Object(O.d)(ae,null,"Medium"),Object(O.d)(ie,null,"14cm x 28cm")):e?Object(O.d)(re,null,Object(O.d)(ae,null,"Large"),Object(O.d)(ie,null,"18cm x 32cm")):void 0}},{key:"render",value:function(){var n=this;return Object(O.d)(w,null,function(t){var e=Object(J.a)(t,3),r=(e[0],e[1]);e[2];return Object(O.d)(It,null,Object(O.d)(Mt,null,Object(O.d)(s.b,{to:"/"},"\u2190")),Object(O.d)(Wt,null,Object(O.d)(Lt,null,Object(O.d)(Ft,null,r.name),Object(O.d)(Gt,null,r.company),Object(O.d)(Nt,null,"$",r.price),Object(O.d)(Kt,null,r.about)),Object(O.d)(Yt,null,Object(O.d)($t,null,Object(O.d)(qt,{src:r.picture,"aria-hidden":!0,alt:"Product picture."})),Object(O.d)(de,null,Object(O.d)(be,{active:!0}),Object(O.d)(be,null),Object(O.d)(be,null)))),Object(O.d)("div",null,Object(O.d)(Ut,null,"Rating"),Object(O.d)(Qt,null,Object(O.d)(Vt,{gold:!0},"\u2605"),Object(O.d)(Vt,{gold:!0},"\u2605"),Object(O.d)(Vt,{gold:!0},"\u2605"),Object(O.d)(Vt,{gold:!0},"\u2605"),Object(O.d)(Vt,null,"\u2605"),Object(O.d)(Xt,null,"(301)"))),Object(O.d)(ne,null,Object(O.d)(te,null,"Size"),Object(O.d)(ee,null,n.getSizes(r.sizes.small,r.sizes.medium,r.sizes.big))),Object(O.d)(ce,null,Object(O.d)(ue,null,Object(O.d)(oe,null,"<"),Object(O.d)(le,null,"1"),Object(O.d)(oe,null,">")),Object(O.d)(Zt,null,"Add to cart")))})}}]),t}(r.Component);var pe=function(){return a.a.createElement("div",null,a.a.createElement(fe,null),a.a.createElement($n,null))};function se(){var n=Object(u.a)(['\n            body {\n              font-family: "Roboto", sans-serif;\n                & > div {\n                  overflow: hidden;\n                }\n              }\n\n              body,\n              h1,\n              h2,\n              h3,\n              ul,\n              li,\n              p {\n                margin: 0;\n                padding: 0;\n              }\n\n              li {\n                list-style-type: none;\n              }\n\n              * {\n                box-sizing: border-box;\n              }\n\n              a {\n                text-decoration: none;\n                color: inherit;\n              }\n            ']);return se=function(){return n},n}var je=function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(b.a)(this,(n=Object(f.a)(t)).call.apply(n,[this].concat(a)))).dataApp=new m,e.state={products:[],productObj:{}},e.getIndexProduct=function(n){e.setState(function(t){return{productObj:t.products[n]}})},e}return Object(p.a)(t,n),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.upadetData()}},{key:"upadetData",value:function(){var n=this;this.dataApp.getProduct().then(function(t){n.setState({products:Object(o.a)(t)})})}},{key:"render",value:function(){var n=this.state,t=n.products,e=n.productObj;return a.a.createElement(s.a,null,a.a.createElement(y,{value:[t,e,this.getIndexProduct]},a.a.createElement(O.a,{styles:Object(O.c)(se())}),a.a.createElement(j.a,{exact:!0,path:"/",component:lt}),a.a.createElement(j.a,{path:"/product",component:pe})))}}]),t}(r.Component);c.a.render(a.a.createElement(je,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.32574bd8.chunk.js.map
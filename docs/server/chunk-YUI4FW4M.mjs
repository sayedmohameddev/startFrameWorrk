import './polyfills.server.mjs';
import{Ca as x,Ga as p,Ia as d,Ja as r,Ka as s,La as a,Ma as y,Na as m,Oa as C,Pa as b,R as l,Ua as g,Va as M,Y as _,Z as v,na as h,qa as c,ub as k,vb as w}from"./chunk-EUJL7V4B.mjs";var L=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-star-dark"]],standalone:!0,features:[g],decls:4,vars:0,consts:[[1,"star","d-flex","align-items-center","justify-content-center","p-3","position-relative"],[1,"star-after"],[1,"fa-solid","fa-star","blue-text"],[1,"star-before"]],template:function(i,o){i&1&&(r(0,"div",0),a(1,"div",1)(2,"i",2)(3,"div",3),s())},styles:['.star-after[_ngcontent-%COMP%]{content:"";width:15%;height:4px;position:absolute;background-color:#2c3e50;left:55%;border-radius:5px}.star-before[_ngcontent-%COMP%]{content:"";width:15%;height:4px;position:absolute;background-color:#2c3e50;right:55%;border-radius:5px}']});let t=e;return t})();var S=t=>({"d-none":t});function F(t,e){if(t&1){let u=y();r(0,"div",8)(1,"div",4),a(2,"img",9),r(3,"div",10),m("click",function(){let i=_(u).index,o=C();return o.openLightBox(),v(o.currentImageIndex(i))}),a(4,"i",11),s()()()}if(t&2){let u=e.$implicit;c(2),b("src",u,h),c(),d("background-color:#1abc9ce6;")}}var D=(()=>{let e=class e{constructor(){this.imagesURL=["./assets/images/poert1.png","./assets/images/port2.png","./assets/images/port3.png","./assets/images/poert1.png","./assets/images/port2.png","./assets/images/port3.png","./assets/images/poert1.png","./assets/images/port2.png","./assets/images/port3.png","./assets/images/poert1.png","./assets/images/port2.png","./assets/images/port3.png"],this.flag=!0,this.currentImage=0}closeLightBox(n){n.stopPropagation(),this.flag=!0}openLightBox(){this.flag=!1}currentImageIndex(n){this.currentImage=n}imgLightBox(n){n.stopPropagation()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-recommended-products"]],standalone:!0,features:[g],decls:9,vars:9,consts:[[1,"p-5"],[1,"row","g-5","row-cols-1","row-cols-md-2","row-cols-lg-3"],["class","col rounded-3",4,"ngFor","ngForOf"],[1,"lightbox","position-fixed","top-0","bottom-0","start-0","end-0","d-flex","justify-content-center","align-items-center",3,"click","ngClass"],[1,"position-relative"],[1,"text-white","btn","btn-secondary","position-absolute","top-0","end-0","m-3"],[1,"fa-solid","fa-xmark"],["alt","poert1",1,"rounded-3",3,"click","src"],[1,"col","rounded-3"],["alt","poert1",1,"w-100","rounded-3",3,"src"],[1,"d-flex","justify-content-center","align-items-center","layer","rounded-3","position-absolute","top-0","bottom-0","start-0","end-0",3,"click"],["_ngcontent-dov-c19","",1,"text-white","fa-solid","fa-plus","fa-6x"]],template:function(i,o){i&1&&(r(0,"section",0),a(1,"hr"),r(2,"div",1),x(3,F,5,3,"div",2),s(),r(4,"div",3),m("click",function(f){return o.closeLightBox(f)}),r(5,"div",4)(6,"button",5),a(7,"i",6),s(),r(8,"img",7),m("click",function(f){return o.imgLightBox(f)}),s()()()()),i&2&&(c(3),p("ngForOf",o.imagesURL),c(),d("background-color:rgba(0,0,0,.25);"),p("ngClass",M(7,S,o.flag)),c(4),d("width:600px;"),p("src",o.imagesURL[o.currentImage],h))},dependencies:[k,w],styles:["h1[_ngcontent-%COMP%]{color:#2c3e50;font-weight:700}.col[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{opacity:0;cursor:pointer;transition:all .6s}.col[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]:hover{opacity:1}.lightbox[_ngcontent-%COMP%]{z-index:1050;cursor:pointer}.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:initial}"]});let t=e;return t})();export{L as a,D as b};

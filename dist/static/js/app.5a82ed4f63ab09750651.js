webpackJsonp([1],{I3RU:function(t,s){},"NH0/":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("XyMi");var i=function(t){e("Z2Nu")},o=Object(n.a)({name:"App"},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},[],!1,i,null,null).exports,r=e("/ocq"),c=e("mvHQ"),l=e.n(c);e("mtWM"),e("NYxO");var v=function(t){e("qZqE")},m=Object(n.a)({name:"Navigation",data:function(){return{showMobileMenu:!1}}},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-content",class:{active:t.showMobileMenu}},[e("div",{staticClass:"navigation"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("router-link",{attrs:{to:"/app/about"}},[t._v("About Author")])],1),t._v(" "),e("div",{staticClass:"mobile-menu",class:{active:t.showMobileMenu},on:{click:function(s){t.showMobileMenu=!t.showMobileMenu}}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])},[],!1,v,null,null).exports,d={data:function(){return{weather:[],city:"",isHidden:!0,saved:[]}},mounted:function(){console.log("App mounted!"),localStorage.getItem("saved")&&(this.saved=JSON.parse(localStorage.getItem("saved")))},watch:{saved:{handler:function(){console.log("Saved changed"),localStorage.setItem("saved",l()(this.saved))},deep:!0}},methods:{searchCity:function(){var t=this;fetch("//api.openweathermap.org/data/2.5/weather?q="+this.city+"&APPID=9750ed0121530eff6f42450c769c6222").then(function(t){return t.json()}).then(function(s){t.weather=s,t.isHidden=!1,t.saved.push(t.weather),t.weather=[],t.city=""})},remove:function(t){this.saved.splice(t,key)},clearLocalStorage:function(){this.saved=[]}},components:{Navigation:m}};var u=function(t){e("NH0/")},p=Object(n.a)(d,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("main",[e("h1",{staticClass:"title is-1"},[t._v("Weather APP")]),t._v(" "),e("Navigation"),t._v(" "),e("p",{staticClass:"subtitle is-4"},[t._v("Enter city")]),t._v(" "),e("div",{staticClass:"weather"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"input is-rounded",attrs:{type:"text",placeholder:"Search for Your city..."},domProps:{value:t.city},on:{input:function(s){s.target.composing||(t.city=s.target.value)}}})])]),t._v(" "),e("button",{staticClass:"button is-primary is-rounded",attrs:{disabled:!(t.city.length>0)},on:{click:function(s){s.preventDefault(),t.searchCity(s)}}},[t._v("Search")])]),t._v(" "),e("div",{staticClass:"places fix"},t._l(t.saved,function(s,a){return e("div",{key:a,staticClass:"single-place"},[e("router-link",{key:s.id,attrs:{to:{name:"single",params:{id:s.name}}}},[e("p",{staticClass:"title is-2"},[t._v(t._s(s.name))])]),t._v(" "),e("img",{attrs:{src:"//openweathermap.org/img/w/"+s.weather[0].icon+".png",alt:s.weather[0].icon}}),t._v(" "),e("p",{staticClass:"title is-1"},[t._v(t._s((s.main.temp-273.15).toFixed(0)+"°C"))])],1)})),t._v(" "),e("button",{staticClass:"button is-primary is-rounded",on:{click:t.clearLocalStorage}},[t._v("Clear saved data")])])],1)},[],!1,u,"data-v-6026c381",null).exports,f=e("PJh5"),_=e.n(f),h={name:"Forecast",props:["id"],data:function(){return{forecast:[],city:this.id}},mounted:function(){var t=this;fetch("//api.openweathermap.org/data/2.5/forecast?q="+this.id+"&APPID=9750ed0121530eff6f42450c769c6222").then(function(t){return t.json()}).then(function(s){t.forecast=s})},filters:{formatUnix:function(t){if(t)return _.a.unix(t).format("dddd")}},components:{SingleWeather:b}};var j=function(t){e("NLeg")},g={props:["id"],data:function(){return{weather:[],city:this.id}},mounted:function(){var t=this;fetch("//api.openweathermap.org/data/2.5/weather?q="+this.id+"&APPID=9750ed0121530eff6f42450c769c6222").then(function(t){return t.json()}).then(function(s){t.weather=s})},methods:{},beforeMount:function(){this.weather=this.weather},components:{Forecast:Object(n.a)(h,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"days"},[e("div",{staticClass:"day"},[t._v("\n        "+t._s(t._f("formatUnix")(t.forecast.list[0].dt))+"\n            "),e("p",[t._v(t._s((t.forecast.list[0].main.temp_max-273.15).toFixed(0)+"°C")+"\n              / "+t._s((t.forecast.list[0].main.temp_min-273.15).toFixed(0)+"°C")+"\n            ")]),t._v(" "),e("p",[t._v("Wind speed: "+t._s(t.forecast.list[0].wind.speed+"m/s"))]),t._v(" "),e("p",[t._v("Humidity: "+t._s(t.forecast.list[0].main.humidity+"%"))])]),t._v(" "),e("div",{staticClass:"day"},[t._v("\n            "+t._s(t._f("formatUnix")(t.forecast.list[3].dt))+"\n            "),e("p",[t._v(t._s((t.forecast.list[3].main.temp_max-273.15).toFixed(0)+"°C")+"\n                / "+t._s((t.forecast.list[3].main.temp_min-273.15).toFixed(0)+"°C")+"\n            ")]),t._v(" "),e("p",[t._v("Wind speed: "+t._s(t.forecast.list[3].wind.speed+"m/s"))]),t._v(" "),e("p",[t._v("Humidity: "+t._s(t.forecast.list[3].main.humidity+"%"))])]),t._v(" "),e("div",{staticClass:"day"},[t._v("\n              "+t._s(t._f("formatUnix")(t.forecast.list[11].dt))+"\n              "),e("p",[t._v(t._s((t.forecast.list[11].main.temp_max-273.15).toFixed(0)+"°C")+"\n                  / "+t._s((t.forecast.list[11].main.temp_min-273.15).toFixed(0)+"°C")+"\n              ")]),t._v(" "),e("p",[t._v("Wind speed: "+t._s(t.forecast.list[11].wind.speed+"m/s"))]),t._v(" "),e("p",[t._v("Humidity: "+t._s(t.forecast.list[11].main.humidity+"%"))])]),t._v(" "),e("div",{staticClass:"day"},[t._v("\n              "+t._s(t._f("formatUnix")(t.forecast.list[19].dt))+"\n              "),e("p",[t._v(t._s((t.forecast.list[19].main.temp_max-273.15).toFixed(0)+"°C")+"\n                  / "+t._s((t.forecast.list[19].main.temp_min-273.15).toFixed(0)+"°C")+"\n              ")]),t._v(" "),e("p",[t._v("Wind speed: "+t._s(t.forecast.list[19].wind.speed+"m/s"))]),t._v(" "),e("p",[t._v("Humidity: "+t._s(t.forecast.list[19].main.humidity+"%"))])]),t._v(" "),e("div",{staticClass:"day"},[t._v("\n              "+t._s(t._f("formatUnix")(t.forecast.list[28].dt))+"\n              "),e("p",[t._v(t._s((t.forecast.list[28].main.temp_max-273.15).toFixed(0)+"°C")+"\n                  / "+t._s((t.forecast.list[28].main.temp_min-273.15).toFixed(0)+"°C")+"\n              ")]),t._v(" "),e("p",[t._v("Wind speed: "+t._s(t.forecast.list[28].wind.speed+"m/s"))]),t._v(" "),e("p",[t._v("Humidity: "+t._s(t.forecast.list[28].main.humidity+"%"))])])])},[],!1,j,"data-v-3ae68a0e",null).exports,Navigation:m}};var w=function(t){e("osz0")},b=Object(n.a)(g,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-content-single"},[e("Navigation"),t._v(" "),t.weather?e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"single-place-details"},[e("div",{class:t.id.toLowerCase()+" image"}),t._v(" "),e("p",{staticClass:"title is-1"},[t._v(t._s(t.id)+", "+t._s(t.weather.sys.country))]),t._v(" "),e("p",[t._v("Max Tem: "+t._s((t.weather.main.temp_max-273.15).toFixed(0)+"°C"))]),t._v(" "),e("p",[t._v("Max Tem: "+t._s((t.weather.main.temp_min-273.15).toFixed(0)+"°C"))]),t._v(" "),e("p",[t._v("Pressure: "+t._s(t.weather.main.pressure+" mb/s"))])]),t._v(" "),e("p",{staticClass:"title"},[t._v("Next 5 days")]),t._v(" "),e("Forecast",{attrs:{id:t.city}})],1)]):t._e()],1)},[],!1,w,null,null).exports,y={name:"About",components:{appNav:m}},C=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about container"},[a("div",{staticClass:"content left"},[a("div",{staticClass:"author-img"},[a("img",{attrs:{src:e("a9a6"),alt:"Nemanja Bacic weather app author"}})]),t._v(" "),a("p",[a("strong",[t._v("From:")]),t._v(" Novi Sad")]),t._v(" "),a("p",[a("strong",[t._v("Age:")]),t._v(" 27")]),t._v(" "),a("p",[a("strong",[t._v("Title:")]),t._v(" Front-end web developer")])]),t._v(" "),a("div",{staticClass:"content right"},[a("p",[t._v("Hello, my name is Nemanja Bačić. I come from Novi Sad, where I've started my career as a front-end web developer.")]),t._v(" "),a("div",{staticClass:"social"},[a("p",[t._v("You can follow my work on: ")]),t._v(" "),a("a",{staticClass:"git",attrs:{target:"_blank",href:"https://github.com/nbacic991"}}),t._v(" "),a("a",{staticClass:"face",attrs:{target:"_blank",href:"https://www.facebook.com/nemanja.bacic"}}),t._v(" "),a("a",{staticClass:"lin",attrs:{target:"_blank",href:"https://www.linkedin.com/in/nemanja-ba%C4%8Di%C4%87-034373ba/"}}),t._v(" "),a("a",{staticClass:"insta",attrs:{target:"_blank",href:"https://www.instagram.com/nemanja.bacic/"}})])])])}];var x=function(t){e("I3RU")},k=Object(n.a)(y,function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("app-nav"),this._v(" "),s("h1",{staticClass:"title is-1"},[this._v("About Author")]),this._v(" "),s("p",{staticClass:"subtitle"},[this._v("Of this application")]),this._v(" "),this._m(0)],1)},C,!1,x,"data-v-61b236f0",null).exports;a.a.use(r.a);var z=new r.a({mode:"history",routes:[{path:"/",name:"weather",component:p,props:!0},{path:"/:id",name:"single",component:b,props:!0},{path:"/app/about",name:"About",component:k,props:!1}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:z,components:{App:o},template:"<App/>"})},NLeg:function(t,s){},Z2Nu:function(t,s){},a9a6:function(t,s,e){t.exports=e.p+"static/img/me.3eb2e12.jpg"},osz0:function(t,s){},qZqE:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(i(t))}function i(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.5a82ed4f63ab09750651.js.map
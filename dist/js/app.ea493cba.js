(function(e){function t(t){for(var s,i,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var r=a[i];0!==n[r]&&(s=!1)}s&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},i={app:0},n={app:0},o=[];function r(e){return c.p+"js/"+({actividad:"actividad",comple:"comple",glosario:"glosario",intro:"intro",referencias:"referencias"}[e]||e)+"."+{actividad:"17cf7eff",comple:"b37d378f",glosario:"24382a80",intro:"7c22e5c4",referencias:"cdab0555"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={actividad:1,glosario:1,referencias:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var s="css/"+({actividad:"actividad",comple:"comple",glosario:"glosario",intro:"intro",referencias:"referencias"}[e]||e)+"."+{actividad:"bdf3e584",comple:"31d6cfe0",glosario:"d1c89d21",intro:"31d6cfe0",referencias:"ae99284f"}[e]+".css",n=c.p+s,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===n))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===s||u===n)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var s=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete i[e],m.parentNode.removeChild(m),a(o)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,a[1](d)}n[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e66":function(e,t,a){},1727:function(e,t,a){e.exports=a.p+"img/group16263.6b81d019.svg"},1903:function(e,t,a){"use strict";a("9ded")},3065:function(e,t,a){e.exports=a.p+"img/senaLogo.885d44b7.svg"},"3b8e":function(e,t,a){"use strict";a("c351")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var s=a("2b0e"),i=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(i["a"]);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"curso-contenedor",class:e.showMenu&&["curso-contenedor--menu-abierto"]},[a("header",{staticClass:"page-header"},[a("OverHeader",{attrs:{"show-menu":e.showMenu},on:{"update:showMenu":function(t){e.showMenu=t},"update:show-menu":function(t){e.showMenu=t}}}),a("Header")],1),a("router-view")],1),a("AsideMenu",{attrs:{showMenu:e.showMenu},on:{"update:showMenu":function(t){e.showMenu=t},"update:show-menu":function(t){e.showMenu=t}}})],1)},o=[],r=(a("7db0"),a("b0c0"),a("cdd9")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"inicio"===e.$route.name?["container"]:["container-fluid","container--over-menu"]},[a("div",{staticClass:"topbar d-flex justify-content-between align-items-center",class:e.topBarClasses},[e._m(0),a("div",{staticClass:"topbar__menu",class:"inicio"===e.$route.name&&["d-md-none"]},[a("a",{staticClass:"topbar__menu__btn btn-menu-responsive",class:e.showMenu&&["active"],on:{click:function(t){return e.$emit("update:showMenu",!e.showMenu)}}},[a("span"),a("span"),a("span")]),"inicio"!=e.$route.name?a("span",{staticClass:"topbar__menu__title"},[e._v("MENÚ")]):e._e()]),"inicio"===e.$route.name?a("nav",{staticClass:"topbar__nav collapse show d-none d-md-block",attrs:{id:"topbar__nav"}},[e._m(1)]):e._e()])])},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"topbar__logo"},[s("img",{attrs:{src:a("3065")}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"topbar__list"},[a("li",{staticClass:"topbar__item"},[a("a",{staticClass:"topbar__link",attrs:{href:"#ResultadosAprendizaje"}},[a("span",{staticClass:"text-white"},[e._v("Resultados de aprendizaje")])])]),a("li",{staticClass:"topbar__item"},[a("a",{staticClass:"topbar__link",attrs:{href:"#IndiceTematico"}},[a("span",{staticClass:"text-white"},[e._v("Contenidos")])])]),a("li",{staticClass:"topbar__item"},[a("a",{staticClass:"topbar__link",attrs:{href:"#Creditos"}},[a("span",{staticClass:"text-white"},[e._v("Créditos")])])])])}],u={name:"OverHeader",props:{showMenu:{type:Boolean}},computed:{topBarClasses:function(){var e=[];return"inicio"!=this.$route.name&&e.push("topbar--fixed","flex-row-reverse"),this.showMenu&&e.push("topbar--open"),e}}},d=u,m=(a("bafc"),a("2877")),p=Object(m["a"])(d,c,l,!1,null,"e9f900da",null),f=p.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso-portada"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-12 col-lg-6"},[a("h3",{staticClass:"curso-subtitulo",attrs:{id:"curso-titulo-componente"}},[e._v(e._s(e.globalData.programaFormacion))]),a("h1",{staticClass:"curso-titulo",attrs:{id:"curso-titulo-tema"}},[e._v(e._s(e.globalData.componenteFormativo))]),a("div",{staticClass:"brand-line-primary"}),e.$route.path.includes("curso")?[a("div",{staticClass:"keywords"},e._l(e.globalData.palabrasClave,(function(t){return a("span",{ref:"tag-"+t,refInFor:!0,staticClass:"badge badge-pill badge-dark mr-2"},[e._v(e._s("#"+t))])})),0),e._m(0)]:[a("p",{staticClass:"curso-descripcion mb-4",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})],"inicio"===e.$route.name?[a("router-link",{staticClass:"curso-btn-iniciar btn btn-light",attrs:{to:{name:"curso"}}},[a("span",[e._v("Iniciar curso")])])]:e._e()],2),a("div",{staticClass:"col-12 col-lg-6 text-center"},[a("div",{staticClass:"d-none d-lg-block"},[a("img",{staticClass:"curso-imagen",attrs:{src:e.globalData.imagenPortada}})])])])])])},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"barra-dots mt-5"},[s("img",{staticClass:"img-fluid",attrs:{src:a("ed9e"),alt:"alt"}})])}],v={name:"HeaderComponent",data:function(){return{globalData:r["a"],imagen:a("1727")}}},b=v,C=(a("1903"),Object(m["a"])(b,h,_,!1,null,"3d143974",null)),g=C.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",[a("div",{class:e.showMenu&&["page-main-aside--open"],attrs:{id:"page-main-aside"}},[a("nav",{staticClass:"aside-contenidos__body"},[a("div",{staticClass:"aside-contenidos"},[a("div",{staticClass:"aside-contenidos__header d-flex justify-content-between align-items-center"},[e._m(0),a("div",{staticClass:"aside-contenidos__close d-md-none"},[a("a",{staticClass:"page-main-aside__close icon btnclose m-0",on:{click:function(t){return e.$emit("update:showMenu",!1)}}})])])]),a("ul",{staticClass:"menu-main",attrs:{id:"menuMain"}},[e._l(e.menuData,(function(t,s){return[a("li",{key:"menu-item-"+s,staticClass:"menu-main__item"},[t.hasOwnProperty("download")?a("a",{staticClass:"menu-main__link",on:{click:function(a){return a.preventDefault(),e.descargarZip(t.download)}}},[a("span",{staticClass:"menu-main__texto"},[a("strong",[e._v(e._s(t.title))])]),a("span",{staticClass:"menu-main__icono"},[a("i",{class:t.icon})])]):a("router-link",{staticClass:"menu-main__link",class:{"menu-main__link--active":e.$route.name==t.routeName},attrs:{to:{name:t.routeName}}},[a("span",{staticClass:"menu-main__texto"},[a("strong",[e._v(e._s(t.title))])]),a("span",{staticClass:"menu-main__icono"},[a("i",{class:t.icon})])])],1),t.hasOwnProperty("subMenu")&&t.subMenu.length?a("ul",{staticClass:"menu-main submenu"},e._l(t.subMenu,(function(s,i){return a("li",{key:"submenu-item-"+i,staticClass:"menu-main__item"},[a("router-link",{staticClass:"menu-main__link is-content routerAnchor",class:{"menu-main__link--active":e.$route.hash=="#"+s.hash},attrs:{to:{name:t.routeName,hash:"#"+s.hash}}},[a("span",{staticClass:"menu-main__texto"},[e._v(e._s(s.title))]),a("span",{staticClass:"menu-main__icono"},[a("i",{class:s.icon})])])],1)})),0):e._e()]}))],2),a("ul",{staticClass:"aside-extra menu-secondary",attrs:{id:"menuSecondary"}},e._l(e.subMenuData,(function(t,s){return a("li",{key:"SecMenu-item-"+s,staticClass:"menu-secondary__item"},[t.hasOwnProperty("routeName")?a("router-link",{staticClass:"menu-secondary__link",attrs:{to:{name:t.routeName}}},[a("i",{class:t.icon}),a("span",{staticClass:"menu-secondary__texto"},[e._v(e._s(t.title))])]):t.hasOwnProperty("download")?a("a",{staticClass:"menu-secondary__link",attrs:{href:t.download,target:"_blank"}},[a("i",{class:t.icon}),a("span",{staticClass:"menu-secondary__texto"},[e._v(e._s(t.title))])]):e._e()],1)})),0)])]),!e.showMenu&&e.$route.path.includes("curso")?a("div",{staticClass:"page-control",attrs:{id:"page-control"}},[a("div",{staticClass:"row justify-content-center align-items-center"},[e.controlLinks.back?a("router-link",{staticClass:"page-control-link page-control-prev col py-3 text-center",attrs:{id:"back",to:{name:e.$route.name,hash:"#"+e.controlLinks.back}}},[a("span",[a("i",{staticClass:"fa fa-chevron-left mr-3"}),e._v("Anterior")])]):e._e(),e.controlLinks.next?a("router-link",{staticClass:"page-control-link page-control-next col py-3 text-center",attrs:{id:"next",to:{name:e.$route.name,hash:"#"+e.controlLinks.next}}},[a("span",[e._v(" Siguiente"),a("i",{staticClass:"fa fa-chevron-right ml-3"})])]):e._e()],1)]):e._e()])},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-contenidos__titulo"},[a("h3",{staticClass:"mb-0"},[a("i",{staticClass:"fa fa-list-ul mr-2"}),e._v("Contenidos")])])}],w=(a("caad"),a("c975"),a("d81d"),a("ac1f"),a("2532"),a("5319"),{name:"AsideMenu",props:{showMenu:{type:Boolean}},data:function(){return{menuData:r["c"]&&r["c"].menu,subMenuData:r["c"]&&r["c"].subMenu}},computed:{controlLinks:function(){var e=this,t=this.menuData.find((function(t){return t.routeName===e.$route.name}));if(console.log(t),t.subMenu){var a=t.subMenu.map((function(e){return e.hash})).indexOf(this.$route.hash.replace("#",""));return console.log(a),-1===a?{next:t.subMenu[0].hash}:0===a?{next:t.subMenu[a+1].hash}:a===t.subMenu.length-1?{back:t.subMenu[a-1].hash}:{next:t.subMenu[a+1].hash,back:t.subMenu[a-1].hash}}return console.log("noooooo"),{}}},watch:{$route:function(e){"inicio"===e.name&&this.showMenu&&this.$emit("update:showMenu",!1)}},methods:{descargarZip:function(e){var t=window.location.href.replace(window.location.hash,"");t.includes("index.html")&&(t=t.replace("index.html","")),t+=e,window.open(t,"_blank")}}}),M=w,k=(a("3b8e"),Object(m["a"])(M,x,y,!1,null,"2b829134",null)),E=k.exports,S={name:"App",components:{Header:g,OverHeader:f,AsideMenu:E},data:function(){return{showMenu:!1,menuPrincipalData:r["c"].menu}},computed:{selectedMenuItem:function(){var e=this;return this.menuPrincipalData.find((function(t){return t.routeName===e.$route.name}))}}},A=S,j=(a("cf25"),Object(m["a"])(A,n,o,!1,null,null,null)),D=j.exports,N=(a("d3b7"),a("8c4f")),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inicio"},[a("section",{staticClass:"curso-resultados section bg-base-light",attrs:{id:"ResultadosAprendizaje"}},[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"brand-line-primary"}),a("div",{staticClass:"card resultado-item"},[a("div",{staticClass:"card-body"},[a("ul",{staticClass:"bg-color-dark mb-0"},e._l(e.globalData.resultadosAprendizaje,(function(t,s){return a("li",{key:"resultado-"+s,staticClass:"mb-0"},[a("span",[e._v(e._s(t))])])})),0)])])])]),a("section",{staticClass:"curso-indice-tematico section",attrs:{id:"IndiceTematico"}},[a("div",{staticClass:"container"},[e._m(1),a("div",{staticClass:"brand-line-primary"}),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-10"},[a("div",{staticClass:"card wow flipInX",attrs:{"data-wow-delay":".4s"}},[a("div",{staticClass:"card-body"},e._l(e.desarrolloContenidos,(function(t){return a("ul",{key:"desarrollo-"+t.routeName,staticClass:"list-group list-group-flush list my-n3 nav-temas"},[a("li",{staticClass:"list-group-item nav-tema-item"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"avatar avatar-sm"},[a("span",{staticClass:"nav-tema-item__icon avatar-title font-size-lg bg-secondary-soft rounded-circle text-primary font-weight-bold"},["number"===typeof t.desarrolloContenidos.icono?[e._v(e._s(t.desarrolloContenidos.icono))]:a("i",{class:t.icon})],2)])]),a("div",{staticClass:"col ml-n2"},[a("span",{staticClass:"nav-tema-item__titulo"},[a("router-link",{attrs:{to:{name:t.routeName}}},[e._v(e._s(t.desarrolloContenidos.titulo))])],1)]),a("div",{staticClass:"col-auto"},[a("router-link",{staticClass:"btn btn-light nav-tema-item__btn",attrs:{to:{name:t.routeName}}},[e._v("Ver más")])],1)])])])})),0)])])])])]),a("Creditos")],1)},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v("Resultados de "),a("br"),e._v("aprendizaje")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v("Desarrollo de "),a("br"),e._v("contenidos")])}],I=(a("4de4"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),$=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",[s("div",{staticClass:"footer",attrs:{id:"Creditos"}},[s("div",{staticClass:"container"},[s("h1",[e._v("Créditos ")]),s("div",{staticClass:"brand-line-primary"}),s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-12 col-md-5"},[s("h3",{staticClass:"footer-subtitulo mb-4"},[e._v("ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES")]),s("p",{staticClass:"footer-texto"},[s("strong",[e._v("Maria Camila Garcia Santamaria")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Líder del equipo")])])])]),s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-12 col-md-6"},[s("h4",{staticClass:"footer-subtitulo-2 mt-0"},[s("div",{staticClass:"fa fa-caret-right mr-2"}),e._v("Contenido Instruccional")]),s("p",{staticClass:"footer-texto mb-3"},[s("strong",[e._v("Rafael Neftalí Lizcano Reyes")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Asesor metodológico y pedagógico")]),s("br"),s("span",{staticClass:"text-small text-uppercase"},[e._v("Centro Industrial Del Diseño Y La Manufactura")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Regional Santander")])]),s("p",{staticClass:"footer-texto mb-3"},[s("strong",[e._v("Lizeth Maritza Rodríguez Beltrán")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Instructora Técnica")]),s("br"),s("strong",[e._v("Natalia Andrea Bueno Pizarro")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Diseñador Instruccional")]),s("br"),s("span",{staticClass:"text-small text-uppercase"},[e._v("Centro de Manufactura en Textil y Cuero")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Regional Distrito Capital")])]),s("p",{staticClass:"footer-texto"},[s("strong",[e._v("Adriana Lozano Zapata")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Revisora de estilo")]),s("br"),s("strong",[e._v("Martha Isabel Martínez Vargas")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Revisora de estilo")]),s("br"),s("span",{staticClass:"text-small text-uppercase"},[e._v("Centro Industrial Del Diseño Y La Manufactura")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Regional Santander")])])]),s("div",{staticClass:"col-12 col-md-6"},[s("h4",{staticClass:"footer-subtitulo-2 mt-0"},[s("div",{staticClass:"fa fa-caret-right mr-2"}),e._v("Diseño y desarrollo de recursos educativos digitales")]),s("p",{staticClass:"footer-texto"},[s("strong",[e._v("Francisco José Lizcano Reyes")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Responsable del equipo")])]),s("p",{staticClass:"footer-texto"},[s("strong",[e._v("Leyson Fabian Castaño Perez")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Soporte organizacional")])]),s("p",{staticClass:"footer-texto"},[s("strong",[e._v("Jesus Antonio Vecino Valero")]),s("br"),s("strong",[e._v("Juan Daniel Polanco Muñoz")]),s("br"),s("strong",[e._v("María Natalia Maldonado Delgado")]),s("br"),s("strong",[e._v("Wilson Andres Arenales Cáceres")]),s("br"),s("strong",[e._v("Yuly Andrea Rey Quiñonez")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Diseño web & producción audiovisual"),s("br")])]),s("p",{staticClass:"footer-texto"},[s("strong",[e._v("Andres Mauricio Santaella Ochoa")]),s("br"),s("strong",[e._v("Lizeth Karina Manchego Suarez")]),s("br"),s("strong",[e._v("Luis Gabriel Urueta Alvarez")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Desarrollo front-end")]),s("br"),s("span",{staticClass:"text-small text-uppercase"},[e._v("CENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Regional Santander")])]),s("p",{staticClass:"footer-texto"},[s("strong",[e._v("Jhon Jairo Urueta Alvarez")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Desarrollo front-end")]),s("br"),s("span",{staticClass:"text-small text-uppercase"},[e._v("CENTRO DE COMERCIO Y SERVICIOS")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Regional Tolima")])]),s("h4",{staticClass:"footer-subtitulo-2"},[s("div",{staticClass:"fa fa-caret-right mr-2"}),e._v("Gestores de repositorio")]),s("p",{staticClass:"footer-texto"},[s("strong",[e._v("Alvaro Andres Angarita Ramirez")]),s("br"),s("strong",[e._v("Daniel Felipe Varon Molina")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Validación de recursos")]),s("br"),s("span",{staticClass:"text-small text-uppercase"},[e._v("CENTRO DE COMERCIO Y SERVICIOS")]),s("br"),s("span",{staticClass:"text-small"},[e._v("Regional Tolima")])])])]),s("div",{staticClass:"row justify-content-center align-items-center"},[s("img",{staticStyle:{"max-width":"100px"},attrs:{src:a("3065")}})])])]),s("section",{attrs:{id:"cc"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex flex-column flex-sm-row"},[s("span",{staticClass:"pr-3"},[s("i",{staticClass:"icon cc"})]),s("span",[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")])])])])])}],R={name:"Creditos"},T=R,L=Object(m["a"])(T,I,$,!1,null,"4ab49be6",null),P=L.exports,q={name:"Inicio",components:{Creditos:P},data:function(){return{globalData:r["a"],menuPrincipal:r["c"]}},computed:{desarrolloContenidos:function(){return this.menuPrincipal.menu.filter((function(e){return e.desarrolloContenidos}))}},methods:{getIcon:function(e){switch(e){case"play":return"fa fa-play";case"question":return"fa fa-question";case"text":return"fa fa-file-text-o";case"folder":return"fa fa-folder-open";case"references":return"fa fa-book";case"glosary":return"fa fa-sort-alpha-asc";default:return e}}}},B=q,F=Object(m["a"])(B,O,z,!1,null,null,null),J=F.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso"},[a("router-view")],1)},H=[],U={name:"Curso"},Y=U,G=(a("6de0"),Object(m["a"])(Y,V,H,!1,null,"1121d00e",null)),K=G.exports;s["default"].use(N["a"]);var Z=new N["a"]({routes:[{path:"/",name:"inicio",component:J},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:K,redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("actividad").then(a.bind(null,"d301"))}},{path:"tema2",name:"tema2",component:function(){return a.e("actividad").then(a.bind(null,"530f"))}},{path:"tema3",name:"tema3",component:function(){return a.e("actividad").then(a.bind(null,"102e"))}}]},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"c92c"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dbb5"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"7c1e"))}}],scrollBehavior:function(e,t,a){return e.hash?{selector:e.hash,offset:{y:100},behavior:"smooth"}:{x:0,y:0}}}),Q=Z,W=a("2f62");s["default"].use(W["a"]);var X=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,new s["default"]({router:Q,store:X,render:function(e){return e(D)}}).$mount("#app")},6121:function(e,t,a){},"6de0":function(e,t,a){"use strict";a("6121")},"9ded":function(e,t,a){},ad89:function(e,t,a){e.exports=a.p+"img/img10.692210b0.svg"},bafc:function(e,t,a){"use strict";a("0e66")},c351:function(e,t,a){},cdd9:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return o}));var s={programaFormacion:"Técnico en patronaje industrial de prendas de vestir",componenteFormativo:"Características de diseño y fundamentación textil",descripcionCurso:"En este componente formativo aprenderá a identificar las características, partes, composición, categorización y detalles en el análisis y comprensión de prendas de vestir. Dentro del proceso se hace una contextualización del lenguaje técnico empleado en el diseño de modas, con el fin de apoyar una parte del proceso en la construcción de prendas de vestir.",imagenPortada:a("ad89"),resultadosAprendizaje:["Reconocer estructura corporal acorde a criterios de patronaje industrial de prendas de vestir."],palabrasClave:["Diseño","moda","textil","fichaTécnica"]},i={menu:[{routeName:"inicio",icon:"fa fa-home",title:"Volver al inicio"},{routeName:"introduccion",icon:"fa fa-file-text",title:"Introducción",desarrolloContenidos:{icono:"fa fa-file-text",titulo:"Introducción"}},{routeName:"tema1",icon:"fa fa-file-text",title:"1. Diseño y moda",desarrolloContenidos:{icono:1,titulo:"Diseño y moda"},subMenu:[{icon:"fa fa-file-text",title:"1.1. Fundamentación de moda",hash:"t_1_1"},{icon:"fa fa-file-text",title:"1.2. Universos de vestuario",hash:"t_1_2"},{icon:"fa fa-file-text",title:"1.3. Perfil y estilo de consumidor",hash:"t_1_3"},{icon:"fa fa-file-text",title:"1.4. Tendencias",hash:"t_1_4"},{icon:"fa fa-file-text",title:"1.5. Moodboard - Cuadro metamórfico",hash:"t_1_5"}]},{routeName:"tema2",icon:"fa fa-file-text",title:"2. Ficha técnica de diseño (software de diseño)",desarrolloContenidos:{icono:2,titulo:"Ficha técnica de diseño (software de diseño)"},subMenu:[{icon:"fa fa-file-text",title:"2.1 Conceptos de dibujo plano",hash:"t_2_1"},{icon:"fa fa-file-text",title:"2.2. Categorización de prendas",hash:"t_2_2"},{icon:"fa fa-file-text",title:"2.3. Técnica de achurados y acabados",hash:"t_2_3"},{icon:"fa fa-file-text",title:"2.4 Dibujo de bitácora de formas",hash:"t_2_4"},{icon:"fa fa-file-text",title:"2.5. Dibujo plano de prendas",hash:"t_2_5"},{icon:"fa fa-file-text",title:"2.6. Análisis de proporciones prendas superiores e inferiores",hash:"t_2_6"},{icon:"fa fa-file-text",title:"2.7 Interfaz programa CAD",hash:"t_2_7"},{icon:"fa fa-file-text",title:"2.8. Ficha técnica",hash:"t_2_8"}]},{routeName:"tema3",icon:"fa fa-file-text",title:"3. Fundamentación Textil",desarrolloContenidos:{icono:3,titulo:"Fundamentación Textil"},subMenu:[{icon:"fa fa-file-text",title:"3.1 Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).",hash:"t_3_1"},{icon:"fa fa-file-text",title:"3.2. Identificación fibras por combustión",hash:"t_3_2"},{icon:"fa fa-file-text",title:"3.3. Clasificación de los hilos",hash:"t_3_3"},{icon:"fa fa-file-text",title:"3.4. Clasificación de tejidos",hash:"t_3_4"},{icon:"fa fa-file-text",title:"3.5 Caracterización de los tejidos",hash:"t_3_5"},{icon:"fa fa-file-text",title:"3.6 Procesos textiles",hash:"t_3_6"}]}],subMenu:[{routeName:"glosario",icon:"fa fa-sort-alpha-asc",title:"Glosario"},{icon:"fa fa-book",title:"Referencias bibliográficas",routeName:"referencias"},{icon:"fa fa-download",title:"Descargar material",download:"downloads/material.zip"}]},n=[{referencia:"Blackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA: ",enlace:"https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L",tituloenlace:""},{referencia:"Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ",enlace:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947",tituloenlace:""},{referencia:"Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.",enlace:"https://www.harpersbazaar.mx/belleza/salud-y-bienestar/la-ropa-que-eliges-afecta-a-tu-estado-de-animo-y-cerebro-segun-expertos/",tituloenlace:""},{referencia:"Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA",enlace:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549",tituloenlace:""},{referencia:"Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. ",enlace:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000063748",tituloenlace:""},{referencia:"Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:",enlace:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241",tituloenlace:""},{referencia:"Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.",enlace:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551",tituloenlace:""},{referencia:"Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.",enlace:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728",tituloenlace:""}],o=[{termino:"Bidimensional",significado:"que se representa según su altura y su anchura y no su profundidad."},{termino:"Diseño",significado:"actividad creativa orientada a soluciones idóneas a ciertas problemáticas."},{termino:"Moda",significado:"hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer."},{termino:"MoodBoard",significado:"su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico."},{termino:"Pirognóstico",significado:"ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego."},{termino:"Software",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."},{termino:"Tipología",significado:"estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas."},{termino:"Vectores",significado:"en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijos."}]},cf25:function(e,t,a){"use strict";a("fea6")},ed9e:function(e,t,a){e.exports=a.p+"img/icon_dots.40ab1c04.svg"},fea6:function(e,t,a){}});
//# sourceMappingURL=app.ea493cba.js.map
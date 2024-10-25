(function(){"use strict";var t={6405:function(t,s,e){var r=e(6848),o=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("router-view")],1)])},n=[],i={name:"App"},u=i,a=e(1656),c=(0,a.A)(u,o,n,!1,null,null,null),l=c.exports,d=e(6178),p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home"},[s("UserList")],1)},m=[],f=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"user-list"},t._l(t.users,(function(e){return s("div",{key:e.id,staticClass:"user-list__user",on:{click:function(s){return t.openProfile(e.id)}}},[s("div",{staticClass:"user-list__name"},[t._v(t._s(e.name))])])})),0)])},h=[],_=(e(4114),{name:"UserList",props:{},mounted(){this.$store.dispatch("fetchUsers")},methods:{openProfile(t){this.$router.push({name:"UserPage",params:{id:t}})}},computed:{users(){return this.$store.state.users}}}),v=_,b=(0,a.A)(v,f,h,!1,null,"68210556",null),y=b.exports,g={name:"Home",components:{UserList:y}},C=g,A=(0,a.A)(C,p,m,!1,null,null,null),P=A.exports,U=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"user-page"},[s("button",{staticClass:"back-button",on:{click:t.backToMenu}},[t._v("Back")]),s("div",{staticClass:"user-page__card"},[s("UserCard",{attrs:{id:t.id}})],1),s("div",{staticClass:"user-page__media"},[s("div",{staticStyle:{display:"flex","flex-direction":"column",gap:"100px"}},[s("UserAlbums",{attrs:{id:t.id}})],1),s("div",{staticStyle:{display:"flex","flex-direction":"column",gap:"100px"}},[s("UserPosts",{attrs:{id:t.id}})],1)])])])},x=[],$=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"album-list"},t._l(t.albums,(function(e){return s("div",{staticClass:"album"},[s("div",[s("div",{staticClass:"album__title"},[s("span",[t._v(" "+t._s(e.title)+" ")])]),s("UserPhotos",{staticClass:"album__carousel",attrs:{albumId:e.id}})],1)])})),0)])},k=[],O=function(){var t=this,s=t._self._c;return s("div",[s("carousel",{attrs:{perPage:5}},t._l(t.photos,(function(t){return s("slide",{key:t.id},[s("img",{attrs:{src:t.url,alt:""}})])})),1)],1)},S=[],w=e(6061),j={name:"UserPhotos",components:{Carousel:w.Carousel,Slide:w.Slide},data(){return{}},props:{albumId:{type:Number,required:!0}},created(){this.$store.dispatch("fetchPhotos",this.albumId)},computed:{photos(){return this.$store.state.photos}},methods:{}},I=j,T=(0,a.A)(I,O,S,!1,null,"492fbbb1",null),M=T.exports,N={name:"UserAlbums",components:{UserPhotos:M},props:{id:{type:[String,Number],required:!0}},mounted(){this.$store.dispatch("fetchAlbums",this.id)},computed:{albums(){return this.$store.state.albums}}},q=N,L=(0,a.A)(q,$,k,!1,null,"9870bb66",null),B=L.exports,D=function(){var t=this,s=t._self._c;return s("div",{staticClass:"post-list"},t._l(t.posts,(function(e){return s("div",{key:e.id,staticClass:"user-post"},[s("div",{staticClass:"user-post__title"},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"user-post__body"},[t._v(" "+t._s(e.body)+" ")])])})),0)},E=[],F={name:"UserPosts",props:{id:{type:[String,Number],required:!0}},mounted(){this.$store.dispatch("fetchPosts",this.id)},computed:{posts(){return this.$store.state.posts}}},H=F,R=(0,a.A)(H,D,E,!1,null,"bb197286",null),z=R.exports,G=function(){var t=this,s=t._self._c;return s("div",t._l(t.users,(function(e){return e.id==t.id?s("div",{staticClass:"user-card"},[t._m(0,!0),s("div",{staticClass:"user-card__info"},[s("div",{staticClass:"user-card__info__name"},[t._v(t._s(e.name))]),s("div",{staticClass:"user-card__info__username"},[t._v(t._s(e.username))]),s("div",{staticClass:"user-card__info__email"},[t._v(t._s(e.email))])])]):t._e()})),0)},J=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"user-card__photo"},[s("img",{attrs:{alt:"",src:"https://ex-beton.ru/images/home/client-say/00.jpg"}})])}],K={name:"UserCard",props:{id:{type:[String,Number],required:!0}},computed:{users(){return this.$store.state.users}},created(){this.$store.dispatch("fetchUsers")}},Q=K,V=(0,a.A)(Q,G,J,!1,null,"2f8a17b5",null),W=V.exports,X={name:"UserPage",components:{UserCard:W,UserPosts:z,UserAlbums:B},computed:{id(){return this.$route.params.id}},methods:{backToMenu(){this.$router.push("/")}}},Y=X,Z=(0,a.A)(Y,U,x,!1,null,"2e48c4f4",null),tt=Z.exports;r.Ay.use(d.Ay);const st=[{path:"/",name:"home",component:P},{path:"/user/:id",name:"UserPage",component:tt}],et=new d.Ay({mode:"history",routes:st});var rt=et,ot=e(3518),nt=e(4373);const it=nt.A.create({baseURL:"https://jsonplaceholder.typicode.com/"});var ut=it;const at="users",ct=t=>`albums?userId=${t}`,lt=t=>`photos?albumId=${t}`,dt=t=>`posts?userId=${t}`;e(8449);r.Ay.use(ot.Ay);var pt=new ot.Ay.Store({state:{users:[],albums:[],photos:[],posts:[],userID:Number},mutations:{setUsers(t,s){t.users=s},setAlbums(t,s){t.albums=s},setPhotos(t,s){t.photos=s},setPosts(t,s){t.posts=s}},actions:{fetchUsers({commit:t}){return ut.get(at).then((s=>{t("setUsers",s.data)})).catch((t=>console.log(t)))},fetchAlbums({commit:t},s){return ut.get(ct(s)).then((s=>{t("setAlbums",s.data)})).catch((t=>console.log(t)))},fetchPhotos({commit:t},s){return ut.get(lt(s)).then((s=>{t("setPhotos",s.data)})).catch((t=>console.log(t)))},fetchPosts({commit:t},s){return ut.get(dt(s)).then((s=>{t("setPosts",s.data)})).catch((t=>console.log(t)))}}});r.Ay.config.productionTip=!1,new r.Ay({router:rt,store:pt,render:t=>t(l)}).$mount("#app")}},s={};function e(r){var o=s[r];if(void 0!==o)return o.exports;var n=s[r]={exports:{}};return t[r].call(n.exports,n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(s,r,o,n){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],n=t[l][2];for(var u=!0,a=0;a<r.length;a++)(!1&n||i>=n)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(u=!1,n<i&&(i=n));if(u){t.splice(l--,1);var c=o();void 0!==c&&(s=c)}}return s}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[r,o,n]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};e.O.j=function(s){return 0===t[s]};var s=function(s,r){var o,n,i=r[0],u=r[1],a=r[2],c=0;if(i.some((function(s){return 0!==t[s]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(a)var l=a(e)}for(s&&s(r);c<i.length;c++)n=i[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(l)},r=self["webpackChunkvue2"]=self["webpackChunkvue2"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(6405)}));r=e.O(r)})();
//# sourceMappingURL=app.57f91cde.js.map
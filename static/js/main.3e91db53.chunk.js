(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(24),r=s.n(c),i=s(29),o=s(2),j=s(1);var l=function(){return Object(j.jsx)("span",{children:"About this page: I built it because I love movies."})},m=s(12),u=s.n(m),d=s(25),v=s(26),b=s(27),h=s(32),p=s(31),x=s(28),O=s.n(x);s(57);var _=function(e){var t=e.year,s=e.title,n=e.summary,a=e.poster,c=e.genres;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:a,alt:s,title:s}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:s}),Object(j.jsx)("h5",{className:"movie__year",children:t}),Object(j.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(j.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})},f=(s(58),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(v.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(j.jsx)("div",{className:"movies",children:s.map((function(e){return Object(j.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));var g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"/",children:"Home"}),Object(j.jsx)("a",{href:"/about",children:"About"})]})};s(59);var y=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(g,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(j.jsx)(o.a,{path:"/about",component:l})]})};r.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3e91db53.chunk.js.map
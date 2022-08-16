(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(7),c=i.n(a),n=(i(14),i(6)),s=i(2),r=(i(15),i(1)),l=(i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(8),b=i.n(m);var j=function(e){var t=e.name,i=e.value,a=e.label,c=void 0===a?t:a,n=e.required,o=void 0!==n&&n,d=e.onChange,m=void 0===d?function(){}:d,j=e.count,u=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),h=Object(s.a)(u,1)[0],O=Object(r.useState)(!1),g=Object(s.a)(O,2),v=g[0],p=g[1],f=v&&o&&!i&&0!==j;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:h,children:c}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{id:h,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":f}),type:"text",placeholder:"Enter ".concat(c),value:i,onChange:function(e){return m(t,e.target.value)},onBlur:function(){p(!0)}})}),f&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")})]})},u=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),c=a[0],n=a[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),m=d[0],b=d[1],u=Object(r.useState)(""),h=Object(s.a)(u,2),O=h[0],g=h[1],v=Object(r.useState)(""),p=Object(s.a)(v,2),f=p[0],x=p[1],M=Object(r.useState)(""),w=Object(s.a)(M,2),N=w[0],U=w[1],I=Object(r.useState)(""),k=Object(s.a)(I,2),y=k[0],T=k[1],B=[m,f,N,y].length;Object(r.useEffect)((function(){var e={title:{value:m,required:!0},description:{value:O,required:!1},imgUrl:{value:f,required:!0},imdbUrl:{value:N,required:!0},imdbId:{value:y,required:!0}};n(Object.values(e).filter((function(e){return e.value&&e.required})).length)}),[m,O,f,N,y]);var S=function(e,t){switch(e){case"title":b(t);break;case"description":g(t);break;case"imgUrl":x(t);break;case"imdbUrl":U(t);break;case"imdbId":T(t)}};return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t({title:m,description:O,imgUrl:f,imdbUrl:N,imdbId:y}),n(0),b(""),g(""),x(""),U(""),T("")},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(j,{name:"title",label:"Title",value:m,onChange:S,count:c,required:!0}),Object(l.jsx)(j,{name:"description",label:"Description",value:O,onChange:S,count:c}),Object(l.jsx)(j,{name:"imgUrl",label:"Image URL",value:f,onChange:S,count:c,required:!0}),Object(l.jsx)(j,{name:"imdbUrl",label:"Imdb URL",value:N,onChange:S,count:c,required:!0}),Object(l.jsx)(j,{name:"imdbId",label:"Imdb ID",value:y,onChange:S,count:c,required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:c<B,children:"Add"})})})]})},h=i(9),O=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),i=t[0],a=t[1];Object(r.useEffect)((function(){a((function(){return Object(n.a)(h)}))}),[]);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(u,{onAdd:function(e){a((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};c.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.e4224758.chunk.js.map
(this["webpackJsonpconcert-accountant"]=this["webpackJsonpconcert-accountant"]||[]).push([[0],{39:function(e,t,a){e.exports=a(73)},44:function(e,t,a){},45:function(e,t,a){},64:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),s=a.n(l),c=(a(44),a(12)),i=a(3),o=a(4),u=a(6),m=a(5),d=(a(45),a(19)),p=a.n(d);a(46);p.a.initializeApp({apiKey:"AIzaSyBymJrYdY1TNmwZwPPOIY02q6t3EBz3WUU",authDomain:"concert-accountant-cca1f.firebaseapp.com",databaseURL:"https://concert-accountant-cca1f.firebaseio.com",projectId:"concert-accountant-cca1f",storageBucket:"concert-accountant-cca1f.appspot.com",messagingSenderId:"357158929786",appId:"1:357158929786:web:6fefa320d3defb953ec2c3"});var h=p.a,E=a(11),v=a(1),g=a(13),f=a.n(g),y=(a(64),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navBar"},r.a.createElement("ul",{className:"wrapper"},r.a.createElement("li",null,r.a.createElement(E.b,{className:"link",to:"/login/"},"Log In")),r.a.createElement("li",null,r.a.createElement(E.b,{className:"link",to:"/event/"},"Events")),r.a.createElement("li",null,r.a.createElement(E.b,{className:"link",to:"/list/"},"List"))))}}]),a}(n.Component)),b=(a(69),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleRadioChange=function(t){var a="true"===t.target.value;e.setState({userNew:a,userEmailError:!1,userCityError:!1})},e.validateInput=function(t){var a=t.name,n=a+"Error";!{userName:/^[a-z0-9]([._](?![._])|[a-z0-9])[a-z0-9]{3,8}$/,userEmail:/^([a-z0-9_ .-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,userPassword:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,userCity:/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/}[a].test(t.value)?(t.className="fieldError",e.setState(Object(c.a)({},n,!0))):(t.className="fieldSuccess",console.log(n),e.setState(Object(c.a)({},n,!1)))},e.handleInputChange=function(t){e.validateInput(t.target),e.setState(Object(c.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.userNameError||e.state.userEmailError||e.state.userPasswordError||e.state.userCityError||e.setState({isLoggedIn:!0})},e.state={isLoggedOn:!1,userNew:!0,userName:"",userEmail:"",userPassword:"",userCity:"",userNameError:!1,userEmailError:!1,userPasswordError:!1,userCityError:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userNew,a=e.userName,l=e.userEmail,s=e.userPassword,c=e.userCity,i=e.userNameError,o=e.userEmailError,u=e.userPasswordError,m=e.userCityError,d=r.a.createElement("span",{className:"login_form_space"});return r.a.createElement("div",{className:"login_form wrapper"},r.a.createElement("form",null,r.a.createElement("fieldset",{onChange:this.handleRadioChange,value:t},r.a.createElement("div",{className:t?"login_form_active login_radio":"login_radio"},r.a.createElement("label",{htmlFor:"signUp"},r.a.createElement("h4",null,"Sign Up")),r.a.createElement("input",{className:"sr-only",type:"radio",name:"userNew",id:"signUp",value:"true"})),r.a.createElement("div",{className:t?"login_radio":"login_form_active login_radio"},r.a.createElement("label",{htmlFor:"logIn"},r.a.createElement("h4",null,"Log In")),r.a.createElement("input",{className:"sr-only",type:"radio",name:"userNew",id:"logIn",value:"false"}))),r.a.createElement("div",{className:"login_form_container"},r.a.createElement("label",{htmlFor:"userName"},"Username"),r.a.createElement("input",{onChange:this.handleInputChange,type:"text",name:"userName",value:a}),i?r.a.createElement("p",null,"Username must be between 5 and 8 characters"):d,t?r.a.createElement(n.Fragment,null,r.a.createElement("label",{htmlFor:"userEmail"},"Email address"),r.a.createElement("input",{onChange:this.handleInputChange,type:"email",name:"userEmail",value:l}),o?r.a.createElement("p",null,"Please enter a valid email address"):d):null,r.a.createElement("label",{htmlFor:"userPassword"},"Password"),r.a.createElement("input",{onChange:this.handleInputChange,type:"password",name:"userPassword",value:s}),u?r.a.createElement("p",null,"Password must be between 6 and 8 characters"):d,t?r.a.createElement(n.Fragment,null,r.a.createElement("label",{htmlFor:"userCity"},"Home city"),r.a.createElement("input",{onChange:this.handleInputChange,type:"text",name:"userCity",id:c}),m?r.a.createElement("p",null,"Please remove special characters"):d):null,r.a.createElement("button",{onClick:this.handleSubmit},t?"Sign Up":"Login"))))}}]),a}(n.Component)),C=(a(70),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={modalEvent:{artist:[]}},e}return Object(o.a)(a,[{key:"dateConvert",value:function(e){var t=new Date(e);return(t=new Date(t.setTime(t.getTime()+864e5))).toDateString()}},{key:"componentDidMount",value:function(){var e=this;f()({url:"https://app.ticketmaster.com/discovery/v2/events/".concat(this.props.match.params.eventID),method:"GET",responseType:"JSON",params:{apikey:"Mh0RGGBfkgADAASrXM25WfhUueio9rgV",locale:"en-us",segment:"music"}}).then((function(t){var a=t.data;console.log(a);var n=a.dates.start.localDate,r=e.dateConvert(n),l=a.priceRanges[0].min,s=a._embedded.attractions.map((function(e){return e.name}));e.setState({modalEvent:{eventID:a.id,name:a.name,venue:a._embedded.venues[0].name,location:{city:a._embedded.venues[0].city.name,country:a._embedded.venues[0].country.name},info:a.info,minPrice:l.toFixed(2),date:r,status:a.dates.status.code.toUpperCase(),imgUrl:a.images[0].url,tickets:a.url,artist:s}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"modalContainer"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"modalContent"},r.a.createElement("div",null,r.a.createElement("h1",null,this.state.modalEvent.name),r.a.createElement("h2",null," @ ",this.state.modalEvent.venue),r.a.createElement("h3",null,this.state.modalEvent.date),r.a.createElement("div",{className:"modalImage"},r.a.createElement("img",{src:this.state.modalEvent.imgUrl,alt:this.state.modalEvent.name}))),r.a.createElement("div",{className:"modalEvent"},r.a.createElement("div",{className:"modalEventDetails"},"CANCELLED"===this.state.modalEvent.status?r.a.createElement("h3",{className:"modalStatus"},this.state.modalEvent.status):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"modalStatus"},this.state.modalEvent.status),r.a.createElement("h3",null,"Tickets start at $",this.state.modalEvent.minPrice),r.a.createElement("h3",null,"Featuring: "),r.a.createElement("ul",null,this.state.modalEvent.artist.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("p",null,e))})))),r.a.createElement("h3",null,this.state.modalEvent.info)),r.a.createElement("div",{className:"modalButtons"},"CANCELLED"===this.state.modalEvent.status?r.a.createElement("button",null,"Add to Wishlist"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",null,"Add to Wishlist"),r.a.createElement("button",null,"Add to List"),r.a.createElement("a",{href:this.state.modalEvent.tickets},r.a.createElement("button",null,"Buy Tickets"))))))))}}]),a}(n.Component)),w=(a(71),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={event:[],modalEvent:"",filteredResults:[],isFiltered:!1,filterPrice:"0"},e}return Object(o.a)(a,[{key:"dateConvert",value:function(e){var t=new Date(e);return(t=new Date(t.setTime(t.getTime()+864e5))).toDateString()}},{key:"collectPrice",value:function(e){return e.priceRanges?{type:e.priceRanges[0].type,currency:e.priceRanges[0].currency,min:"".concat(e.priceRanges[0].min.toFixed(2)),max:"".concat(e.priceRanges[0].max.toFixed(2))}:{type:!1,currency:!1,min:"N/A",max:"N/A"}}},{key:"mapToAppData",value:function(e){var t=this;return e.map((function(e){var a=e.id,n=e.name,r=e._embedded.venues[0].name,l=e._embedded.venues[0].city.name,s=e._embedded.venues[0].country.name,c="".concat(l,", ").concat(s),i=e.dates.start.localDate,o=t.dateConvert(i);return{eventID:a,name:n,venue:r,location:{city:l,country:s,cityCountry:c},date:{dateStr:i,dateNum:Date.parse(i),dateFormat:o},imgUrl:e.images[2].url,price:t.collectPrice(e)}}))}},{key:"handleChange",value:function(e){this.filterResults(e.target.value),this.setState({filterPrice:parseFloat(e.target.value)})}},{key:"renderConcertCell",value:function(e){return r.a.createElement("div",{key:e.eventID,className:"concertCell"},r.a.createElement(E.b,{to:"/event/".concat(e.eventID)},r.a.createElement("div",{className:"imageContainer"},r.a.createElement("img",{src:e.imgUrl,alt:e.name})),r.a.createElement("div",{className:"concertInfo"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.date.dateFormat),"N/A"===e.price.min?r.a.createElement("p",null,"No prices currently available."):r.a.createElement("p",null,"Prices starting as low as $",e.price.min))))}},{key:"filterResults",value:function(){var e=this.state.event,t=parseFloat(this.state.filterPrice),a=e.filter((function(e){return parseFloat(e.price.min)<=parseFloat(t)}));this.setState({filteredResults:a})}},{key:"showFiltered",value:function(){var e=!0;e="0"!=this.state.filterPrice,this.setState({isFiltered:e}),this.filterResults()}},{key:"runAxios",value:function(){var e=this,t="",a="";t=void 0===this.props.data?"Toronto":this.props.data.location[0],a=void 0===this.props.data?"":this.props.data.artist,f()({url:"https://app.ticketmaster.com/discovery/v2/events",method:"GET",responseType:"JSON",params:{apikey:"Mh0RGGBfkgADAASrXM25WfhUueio9rgV",segmentName:"music",city:t,keyword:a}}).then((function(t){t.data._embedded||(alert("No valid results"),window.location.reload(!1));var a=t.data._embedded.events,n=e.mapToAppData(a);e.setState({event:n})}))}},{key:"componentDidUpdate",value:function(){this.runAxios()}},{key:"componentDidMount",value:function(){this.runAxios()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"budgetFilter"},r.a.createElement("p",null,"Filter results for your budget: "),r.a.createElement("select",{value:this.state.filterPrice,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"0"},"All"),r.a.createElement("option",{value:"25"},"$25 or Less"),r.a.createElement("option",{value:"50"},"$50 or Less"),r.a.createElement("option",{value:"75"},"$75 or Less"),r.a.createElement("option",{value:"100"},"$100 or Less")),r.a.createElement("button",{onClick:function(t){return e.showFiltered(t)}},"Filter")),r.a.createElement("div",{className:"concertCards"},!1===this.state.isFiltered?this.state.event.map((function(t){return e.renderConcertCell(t)})):this.state.filteredResults.map((function(t){return e.renderConcertCell(t)}))))}}]),a}(n.Component)),N=(a(72),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).findCity=function(t){f()({method:"GET",url:"https://proxy.hackeryou.com",dataType:"jsonp",params:{method:"GET",reqUrl:"http://gd.geobytes.com/AutoCompleteCity?q=".concat(t,"&sort=size&"),proxyHeaders:{header_params:"value"},xmlToJSON:!1}}).then((function(t){e.setState({cityNames:t.data}),t.data.length>=1&&e.setState({displayDropdown:!0})}))},e.handleInputChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value)),"userLocation"===t.target.name&t.target.value.length>=3?e.findCity(t.target.value):e.setState({cityNames:[],displayDropdown:!1})},e.handleLocation=function(t){t.preventDefault();var a=t.target.value.split(", ");e.setState({userLocationSplit:a,userLocation:t.target.value,displayDropdown:!1})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.userArtist,n=e.state.userLocationSplit;e.setState({data:{artist:a,location:n},userLocation:"",userArtist:""})},e.state={cityNames:[],userLocationSplit:[],userLocation:"",userArtist:"",displayDropdown:!1,data:{}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.userLocation,l=t.userArtist,s=t.displayDropdown,c=t.cityNames,i=t.data;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"search wrapper"},r.a.createElement("form",{className:"wrapper"},r.a.createElement("label",{htmlFor:"userLocation"},"Location"),r.a.createElement("span",{className:"input__container"},r.a.createElement("input",{onChange:this.handleInputChange,type:"text",name:"userLocation",value:a}),s?r.a.createElement("div",{className:"city-options"},r.a.createElement("ul",null,c.map((function(t){return r.a.createElement("li",{key:t.replace(/ /g,"")},r.a.createElement("button",{value:t,onClick:e.handleLocation},t))})))):null),r.a.createElement("label",{htmlFor:"userArtist"},"Artist"),r.a.createElement("input",{onChange:this.handleInputChange,type:"text",name:"userArtist",value:l}),r.a.createElement("button",{onClick:this.handleSubmit},r.a.createElement(E.b,{to:"/event/"},"Search")))),i.location||i.artist?r.a.createElement(v.a,{exact:!0,path:"/event/"},r.a.createElement(w,{data:i})):null)}}]),a}(n.Component)),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={newName:"",newList:"",newBudget:"",published:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.newName,a=e.newList,n=e.newBudget;return r.a.createElement("div",{className:"wrapper header__wrapper"},r.a.createElement("section",{className:"header__left"},r.a.createElement("h1",null,"Concert"),r.a.createElement("h1",null,"Accountant"),r.a.createElement("h2",null,"Set your budget."),r.a.createElement("h2",null,"Browse concerts."),r.a.createElement("h2",null,"Add them to your list."),r.a.createElement("h2",null,"Let us worry about the math.")),r.a.createElement("section",{className:"header__right"},r.a.createElement("h4",null,"Start budgeting now"),r.a.createElement("hr",null),r.a.createElement("form",{className:"header__form"},r.a.createElement("label",{htmlFor:"newName"},"Your name"),r.a.createElement("input",{onChange:this.props.handleInputChange,name:"newName",type:"text",value:t}),r.a.createElement("label",{htmlFor:"newList"},"Your list"),r.a.createElement("input",{onChange:this.props.handleInputChange,name:"newList",type:"text",value:a}),r.a.createElement("label",{htmlFor:"newBudget"},"Your budget"),r.a.createElement("input",{onChange:this.props.handleInputChange,name:"newBudget",type:"text",value:n}),r.a.createElement("button",{onClick:this.props.handleSubmit},"Start now"))))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleInputChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=h.database().ref().push(e.state).getKey();console.log(a),e.setState({newList:"",newBudget:"",userSessionKey:a})},e.state={newName:"",newList:"",newBudget:"",published:!1,userSessionKey:""},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(y,null),r.a.createElement(S,{handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit,data:this.state})),r.a.createElement(N,null),r.a.createElement(v.a,{path:"/login/",component:b}),r.a.createElement(v.a,{exact:!0,path:"/event/:eventID",component:C})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.3f0342fd.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports={1:{country:1,name:"Ukraine"},2:{country:3,name:"Paris"},3:{country:4,name:"Madrid"},4:{country:6,name:"Houston"},5:{country:7,name:"Montreal"},6:{country:8,name:"\u041a\u0438\u0448\u0438\u043d\u0435\u0432"},7:{country:9,name:"Minsk"},8:{country:10,name:"Warsaw"},100:{country:1,name:"\u041b\u044c\u0432\u043e\u0432"},101:{country:1,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432"},103:{country:1,name:"\u041f\u0435\u0440\u0435\u044f\u0441\u043b\u0430\u0432-\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u043a\u0438\u0439"},104:{country:1,name:"\u041a\u0430\u043c\u0435\u043d\u0435\u0446-\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a\u0438\u0439"},105:{country:1,name:"Donetsk"},106:{country:1,name:"Kharkov"},107:{country:1,name:"\u041b\u0443\u0446\u043a"},108:{country:1,name:"Poltava"},109:{country:1,name:"\u0427\u0435\u0440\u043d\u043e\u0432\u0446\u044b"},299:{country:1,name:"\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432"}}},,,function(e){e.exports={1:"Ukraine",2:"Germany",3:"France",4:"Spain",5:"Sweden",6:"USA",7:"Canada",8:"Moldova",9:"Belarus",10:"Poland"}},function(e,t,a){},,,,,,,,,,,,function(e,t,a){e.exports=a(60)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/cat1.6a3b98f2.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog1.8a3d82c2.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat2.2e5c1ff6.jpg"},function(e,t,a){e.exports=a.p+"static/media/hamster1.55c0a805.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat3.b607ec5c.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat4.1f73c4fe.jpg"},function(e,t,a){e.exports=a.p+"static/media/raccoon1.9a227543.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog2.b0aae8b2.jpg"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),i=a(14),l=a(6),s=a(23),u=a(13),m="ADD_NAME_EMAIL",d="ADD_LOCATION_DATA",p="SOCIAL_NETWORKS",h="ADD_CAT_IMAGE",f="GO_OVER_AGAIN",k="IS_VALIDATED_FORM",y={nameEmailData:{name:"",email:""},locationData:{country:"",city:""},socialNetworks:{facebook:"",isFacebook:!1,vkontakte:"",isVkontakte:!1,twitter:"",isTwitter:!1,odnoklassniki:"",isOdnoklassniki:!1},catImage:"",forms:{1:!1,2:!1,3:!1,4:!1}},v=Object(l.combineReducers)({NameEmail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.nameEmailData,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload;default:return e}},Location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.locationData,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;default:return e}},SocialNetworks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.socialNetworks,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;default:return e}},CatImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.catImage,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;default:return e}},Forms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.forms,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(u.a)({},e,t.payload);default:return e}}}),g=function(e,t){return t.type===f&&(e=void 0),v(e,t)},b=Object(l.createStore)(g,Object(s.composeWithDevTools)()),O=(a(33),a(1)),E=a(2),C=a(4),j=a(3),w=a(5),N={addNameEmail:function(e,t){return{type:m,payload:{name:e,email:t}}},addLocation:function(e,t){return{type:d,payload:{country:e,city:t}}},addSocialNetworks:function(e){return{type:p,payload:e}},addCatImage:function(e){return{type:h,payload:e}},clearStore:function(){return{type:f}},addIsValidatedForm:function(e){return{type:k,payload:e}}},I=(a(35),function(e){function t(){return Object(O.a)(this,t),Object(C.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.kind,n=e.onClick,o=e.children;return r.a.createElement("button",{type:t,className:"orange"===a?"orange-btn":"white-btn",onClick:n},o)}}]),t}(n.Component));I.defaultProps={type:"button"};var S=I,F=(a(37),function(e){function t(){return Object(O.a)(this,t),Object(C.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.totalPages,a=e.onClick,n=e.activeStep,o=e.forms,c=[],i=function(e){var t="";n===e&&(t+="active "),o[e]&&(t+="available"),c.push(r.a.createElement("button",{className:t,onClick:function(){return a(e)},key:e},e))},l=1;l<=t;l++)i(l);return r.a.createElement("div",{className:"pagination"},c)}}]),t}(n.Component)),x=a(17),A=a(9),D=(a(39),function(e){function t(){return Object(O.a)(this,t),Object(C.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.value,n=e.name,o=e.error,c=e.placeholder,i=e.onChange,l=e.className,s=o.length>0,u=s?l?"input-error "+l:"input-error":l;return r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("input",{type:t,name:n,value:a,onChange:i,placeholder:c,className:u}),s&&r.a.createElement("span",{className:"error"},o))}}]),t}(n.Component));D.defaultProps={type:"text"};var P=D;function T(e){return/^[\u0430-\u044f\u0410-\u042f ]+$/.test(e)}a(12);var V=function(e){function t(e){var a;Object(O.a)(this,t),(a=Object(C.a)(this,Object(j.a)(t).call(this,e))).handleInputChange=function(e){var t,n=e.target,r=n.value,o=n.name;a.setState(Object(A.a)({},o,r)),"email"===o&&a.setState({validEmail:(t=r,/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t))}),"name"===o&&a.setState({validName:T(r)})};var n=a.props,r=n.name,o=n.email;return a.state={name:r,email:o},a}return Object(w.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.name,r=a.email,o=a.validName,c=a.validEmail,i=this.props,l=i.action,s=i.addIsValidatedForm;t.name===n&&t.email===r||(o&&c?(l(n,r),s({1:!0})):s({1:!1}))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.validName,o=e.validEmail;return r.a.createElement("form",null,r.a.createElement("h2",null,"1. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 e-mail"),r.a.createElement(P,{name:"name",value:t,placeholder:"\u0418\u043c\u044f",error:!1===n?"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0431\u0443\u043a\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u0430":"",onChange:this.handleInputChange}),r.a.createElement(P,{name:"email",type:"email",error:!1===o?"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email":"",value:a,placeholder:"e-mail",onChange:this.handleInputChange}))}}]),t}(n.Component),L=(a(42),function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(C.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={showDropdown:!1},a.handlerClick=function(e){a.setState({showDropdown:!0})},a.setWrapperRef=function(e){a.inputRef=e},a.handleClickOutside=function(e){a.inputRef&&!a.inputRef.contains(e.target)&&a.setState({showDropdown:!1})},a.handleChoose=function(e){a.props.onChange(e),a.setState({showDropdown:!1})},a}return Object(w.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.label,o=t.options,c=t.search,i=t.onChange,l=t.selectedKey,s=this.state.showDropdown;return r.a.createElement("div",{className:"select",ref:this.setWrapperRef},r.a.createElement("input",{type:"text",name:a,value:o[l]?o[l]:"",placeholder:n,onClick:this.handlerClick,onChange:function(){return i(l)},autoComplete:"off",readOnly:!c}),r.a.createElement("div",{className:"select-dropdown",style:{display:s?"flex":"none"}},Object.keys(o).map(function(t){return r.a.createElement("span",{onClick:function(){return e.handleChoose(t)},key:o[t]},o[t])})))}}]),t}(n.Component));L.defaultProps={options:[],search:!1};var K=L,_=a(11),R=a(8),M=function(e){function t(e){var a;Object(O.a)(this,t),(a=Object(C.a)(this,Object(j.a)(t).call(this,e))).onChangeCountry=function(e){a.setState({country:_[e],countryKey:e}),e&&(a.setState({filteredCities:a.filterCities(e)}),a.setState({city:"",cityKey:""}))},a.onChangeCity=function(e){a.setState({city:R[e].name,cityKey:e})},a.filterCities=function(e){var t={};return Object.keys(R).forEach(function(a){R[a].country==e&&(t[a]=R[a].name)}),t};var n=a.props,r=n.country,o=n.city,c=Object.keys(_).find(function(e){return _[e]===r}),i=Object.keys(R).find(function(e){return R[e].name===o});return a.state={country:r,countryKey:c,city:o,cityKey:i,filteredCities:a.filterCities(c),error:!1},a}return Object(w.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.country,r=a.city,o=a.filteredCities,c=this.props,i=c.action,l=c.addIsValidatedForm;t.country===n&&t.city===r||(n&&(r||0===Object.keys(o).length)?(i(n,r),l({2:!0}),this.setState({error:!1})):(l({2:!1}),this.setState({error:!0})))}},{key:"render",value:function(){var e=this.state,t=e.countryKey,a=e.cityKey,n=e.filteredCities,o=e.error;return r.a.createElement("form",null,r.a.createElement("h2",null,"2. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443 \u0438 \u0433\u043e\u0440\u043e\u0434"),r.a.createElement(K,{name:"country",label:"\u0421\u0442\u0440\u0430\u043d\u0430",selectedKey:t,options:_,onChange:this.onChangeCountry}),r.a.createElement(K,{name:"city",label:"\u0413\u043e\u0440\u043e\u0434",selectedKey:a,options:n,onChange:this.onChangeCity}),o&&r.a.createElement("p",{className:"error"},"\u041d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0443 \u0438 \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c - \u0433\u043e\u0440\u043e\u0434!"))}}]),t}(n.Component),W=(a(44),function(e){function t(){return Object(O.a)(this,t),Object(C.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.label,n=e.onChange,o=e.checked,c=e.className;return r.a.createElement("label",{className:c?"checkbox-wrapper "+c:"checkbox-wrapper"},a,r.a.createElement("input",{type:"checkbox",name:t,checked:o,onChange:n}),r.a.createElement("span",{className:"checkmark"}))}}]),t}(n.Component)),U=function(e){function t(e){var a;Object(O.a)(this,t),(a=Object(C.a)(this,Object(j.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(Object(A.a)({},r,n))};var n=a.props.socialNetworks;return a.state=Object(u.a)({},n,{error:!1}),a}return Object(w.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.action,r=a.addIsValidatedForm;if(JSON.stringify(this.state)!==JSON.stringify(t)){var o=this.state,c=o.facebook,i=o.isFacebook,l=o.vkontakte,s=o.isVkontakte,u=o.twitter,m=o.isTwitter,d=o.odnoklassniki,p=o.isOdnoklassniki;o.error;c&&i||l&&s||u&&m||d&&p?(n(this.state),r({3:!0}),this.setState({error:!1})):(r({3:!1}),this.setState({error:!0}))}}},{key:"render",value:function(){var e=this.state,t=e.facebook,a=e.isFacebook,n=e.vkontakte,o=e.isVkontakte,c=e.twitter,i=e.isTwitter,l=e.odnoklassniki,s=e.isOdnoklassniki,u=e.error;return r.a.createElement("form",null,r.a.createElement("h2",null,"3. \u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"),r.a.createElement("div",{className:"social-input-group"},r.a.createElement(W,{name:"isFacebook",label:"Facebook",checked:a,onChange:this.handleInputChange,className:"social-checkbox"}),r.a.createElement(P,{name:"facebook",value:t,placeholder:"Facebook",error:"",onChange:this.handleInputChange,className:a?"social-input show":"social-input"})),r.a.createElement("div",{className:"social-input-group"},r.a.createElement(W,{name:"isVkontakte",label:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",checked:o,onChange:this.handleInputChange,className:"social-checkbox"}),r.a.createElement(P,{name:"vkontakte",value:n,placeholder:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",error:"",onChange:this.handleInputChange,className:o?"social-input show":"social-input"})),r.a.createElement("div",{className:"social-input-group"},r.a.createElement(W,{name:"isTwitter",label:"Twitter",checked:i,onChange:this.handleInputChange,className:"social-checkbox"}),r.a.createElement(P,{name:"twitter",value:c,placeholder:"Twitter",error:"",onChange:this.handleInputChange,className:i?"social-input show":"social-input"})),r.a.createElement("div",{className:"social-input-group"},r.a.createElement(W,{name:"isOdnoklassniki",label:"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438",checked:s,onChange:this.handleInputChange,className:"social-checkbox"}),r.a.createElement(P,{name:"odnoklassniki",value:l,placeholder:"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438",error:"",onChange:this.handleInputChange,className:s?"social-input show":"social-input"})),u&&r.a.createElement("p",{className:"error"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438 \u0432\u043a\u0430\u0436\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0441\u043e\u0446\u0441\u0435\u0442\u044c!"))}}]),t}(n.Component),z=(a(46),function(e){function t(){return Object(O.a)(this,t),Object(C.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imageSrcList,a=e.selectedImage,n=e.onClick;return r.a.createElement("div",{className:"image-picker"},t.map(function(e,t){var o=e.imageSrc,c=e.kindOfPet;return r.a.createElement("img",{src:o,alt:c,key:o,className:o===a?"active":"",onClick:function(){return n(o,c)}})}))}}]),t}(n.Component)),G=[{imageSrc:a(48),kindOfPet:"\u043a\u043e\u0442\u0438\u043a"},{imageSrc:a(49),kindOfPet:"\u0441\u043e\u0431\u0430\u0447\u043a\u0430"},{imageSrc:a(50),kindOfPet:"\u043a\u043e\u0442\u0438\u043a"},{imageSrc:a(51),kindOfPet:"\u0445\u043e\u043c\u044f\u0447\u043e\u043a"},{imageSrc:a(52),kindOfPet:"\u043a\u043e\u0442\u0438\u043a"},{imageSrc:a(53),kindOfPet:"\u043a\u043e\u0442\u0438\u043a"},{imageSrc:a(54),kindOfPet:"\u0435\u043d\u043e\u0442"},{imageSrc:a(55),kindOfPet:"\u0441\u043e\u0431\u0430\u0447\u043a\u0430"}],J=function(e){function t(e){var a;Object(O.a)(this,t),(a=Object(C.a)(this,Object(j.a)(t).call(this,e))).handleImageClick=function(e,t){a.setState({selectedImage:e,kindOfPet:t});var n=a.props,r=n.action,o=n.addIsValidatedForm;"\u043a\u043e\u0442\u0438\u043a"===t?(r(e),o({4:!0}),a.setState({isCat:!0})):(a.setState({isCat:!1}),o({4:!1}))};var n=a.props.catImage;return a.state={selectedImage:n},a}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selectedImage,a=e.isCat,n=e.kindOfPet;return r.a.createElement("form",null,r.a.createElement("h2",null,"4. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043b\u044e\u0431\u0438\u043c\u043e\u0433\u043e \u043a\u043e\u0442\u0438\u043a\u0430"),r.a.createElement(z,{imageSrcList:G,selectedImage:t,onClick:this.handleImageClick}),!1===a&&""!==t&&r.a.createElement("p",{className:"error"},"\u042d\u0442\u043e ",n,"! \u0410 \u043d\u0443\u0436\u0435\u043d \u043a\u043e\u0442\u0438\u043a! \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u0442\u0438\u043a\u0430."))}}]),t}(n.Component),B=(a(56),function(e){function t(){return Object(O.a)(this,t),Object(C.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.email,n=e.country,o=e.city,c=e.socialNetworks,i=e.catImage,l=e.goOverAgain;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"final-card-wrapper"},r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a),r.a.createElement("p",{className:"location"},n,", ",o),r.a.createElement("div",{className:"social-networks"},c.isFacebook&&r.a.createElement("p",null,r.a.createElement("span",null,"Facebook:"),c.facebook),c.isVkontakte&&r.a.createElement("p",null,r.a.createElement("span",null,"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435:"),c.vkontakte),c.isTwitter&&r.a.createElement("p",null,r.a.createElement("span",null,"Twitter:"),c.twitter),c.isOdnoklassniki&&r.a.createElement("p",null,r.a.createElement("span",null,"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438:"),c.odnoklassniki))),r.a.createElement("img",{src:i,alt:"\u041a\u043e\u0442\u0438\u043a"})),r.a.createElement(S,{kind:"orange",onClick:l},r.a.createElement("span",null,"\u041f\u0440\u043e\u0439\u0442\u0438 \u0437\u0430\u043d\u043e\u0432\u043e")))}}]),t}(n.Component)),$=(a(58),function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(C.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(o)))).state={activeForm:1,counterClickNextForm:0},a.getActiveForm=function(){var e=a.props,t=e.name,n=e.email,o=e.country,c=e.city,i=e.socialNetworks,l=e.catImage,s=e.addNameEmail,u=e.addCatImage,m=e.addSocialNetworks,d=e.addLocation,p=e.addIsValidatedForm;switch(a.state.activeForm){case 1:return r.a.createElement(V,{name:t,email:n,action:s,addIsValidatedForm:p});case 2:return r.a.createElement(M,{country:o,city:c,action:d,addIsValidatedForm:p});case 3:return r.a.createElement(U,{socialNetworks:i,action:m,addIsValidatedForm:p});case 4:return r.a.createElement(J,{catImage:l,action:u,addIsValidatedForm:p});case 5:return r.a.createElement(B,Object.assign({},a.props,{goOverAgain:a.goOverAgain}));default:return r.a.createElement(V,{name:t,email:n,action:s,addIsValidatedForm:p})}},a.goToForm=function(e){var t=a.props.forms,n=a.state,r=n.activeForm;n.counterClickNextForm;e>=1&&e<=5&&(r>=e||t[r]&&(r+1===e||t[e]||t[e-1]))&&a.setState({activeForm:e})},a.goOverAgain=function(){a.props.clearStore(),a.setState({activeForm:1})},a}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.forms,a=this.state.activeForm;return r.a.createElement("div",{className:"app"},5!==a&&r.a.createElement(F,{totalPages:4,activeStep:a,forms:t,onClick:this.goToForm}),r.a.createElement("div",{className:"forms"},this.getActiveForm()),5!==a&&r.a.createElement("div",{className:"buttons"},r.a.createElement(S,{onClick:function(){return e.goToForm(a-1)}},r.a.createElement(x.a,{size:"16px",style:{marginRight:"5px"}}),r.a.createElement("span",null,"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439")),4!==a?r.a.createElement(S,{onClick:function(){return e.goToForm(a+1)}},r.a.createElement("span",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439"),r.a.createElement(x.b,{size:"16px",style:{marginLeft:"5px"}})):r.a.createElement(S,{kind:"orange",onClick:function(){return e.goToForm(a+1)}},r.a.createElement("span",null,"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"))))}}]),t}(n.Component));var Z=Object(i.b)(function(e){return{name:e.NameEmail.name,email:e.NameEmail.email,country:e.Location.country,city:e.Location.city,socialNetworks:e.SocialNetworks,catImage:e.CatImage,forms:e.Forms}},function(e){return Object(l.bindActionCreators)(N,e)})($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,{store:b},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[24,2,1]]]);
//# sourceMappingURL=main.6e7e62d6.chunk.js.map
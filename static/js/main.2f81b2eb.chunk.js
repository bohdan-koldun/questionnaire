(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports={1:{country:1,name:"Ukraine"},2:{country:3,name:"Paris"},3:{country:4,name:"Madrid"},4:{country:6,name:"Houston"},5:{country:7,name:"Montreal"},6:{country:8,name:"\u041a\u0438\u0448\u0438\u043d\u0435\u0432"},7:{country:9,name:"Minsk"},8:{country:10,name:"Warsaw"},100:{country:1,name:"\u041b\u044c\u0432\u043e\u0432"},101:{country:1,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432"},103:{country:1,name:"\u041f\u0435\u0440\u0435\u044f\u0441\u043b\u0430\u0432-\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u043a\u0438\u0439"},104:{country:1,name:"\u041a\u0430\u043c\u0435\u043d\u0435\u0446-\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a\u0438\u0439"},105:{country:1,name:"Donetsk"},106:{country:1,name:"Kharkov"},107:{country:1,name:"\u041b\u0443\u0446\u043a"},108:{country:1,name:"Poltava"},109:{country:1,name:"\u0427\u0435\u0440\u043d\u043e\u0432\u0446\u044b"},299:{country:1,name:"\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432"}}},,,function(e){e.exports={1:"Ukraine",2:"Germany",3:"France",4:"Spain",5:"Sweden",6:"USA",7:"Canada",8:"Moldova",9:"Belarus",10:"Poland"}},function(e,t,a){},,,,,,,,,,,,,function(e,t,a){e.exports=a(63)},,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/cat1.6a3b98f2.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog1.8a3d82c2.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat2.2e5c1ff6.jpg"},function(e,t,a){e.exports=a.p+"static/media/hamster1.55c0a805.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat3.b607ec5c.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat4.1f73c4fe.jpg"},function(e,t,a){e.exports=a.p+"static/media/raccoon1.9a227543.jpg"},function(e,t,a){e.exports=a.p+"static/media/dog2.b0aae8b2.jpg"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),i=a.n(r),c=a(14),s=a(6),l=a(23),m=a(13),u="ADD_NAME_EMAIL",d="ADD_LOCATION_DATA",p="SOCIAL_NETWORKS",h="ADD_CAT_IMAGE",k="GO_OVER_AGAIN",f="IS_VALIDATED_FORM",v="COUNT_ATTEMPT_NEXT_FORM",y=a(24),b=a.n(y),g={nameEmailData:{name:"",email:""},locationData:{country:"",city:""},socialNetworks:{facebook:"",isFacebook:!1,vkontakte:"",isVkontakte:!1,twitter:"",isTwitter:!1,odnoklassniki:"",isOdnoklassniki:!1},catImage:{src:"",kindOfPet:""},forms:{1:{valid:!1,countAttemptNext:0},2:{valid:!1,countAttemptNext:0},3:{valid:!1,countAttemptNext:0},4:{valid:!1,countAttemptNext:0}}},O=Object(s.combineReducers)({Forms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.forms,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var a=Object.keys(t.payload)[0];return e[a].valid=t.payload[a],e;case v:return e[t.payload].countAttemptNext++,e;case k:return Object.keys(g.forms).forEach(function(e){g.forms[e]={valid:!1,countAttemptNext:0}}),Object(m.a)({},g.forms);default:return e}},NameEmail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.nameEmailData,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;default:return e}},Location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.locationData,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;default:return e}},SocialNetworks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.socialNetworks,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;default:return e}},CatImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.catImage,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;default:return e}}}),C=function(e,t){return t.type===k&&(Object.keys(e).forEach(function(e){b.a.removeItem("persist:".concat(e))}),e=void 0),O(e,t)},E=Object(s.createStore)(C,Object(l.composeWithDevTools)()),j=(a(36),a(1)),w=a(2),N=a(4),S=a(3),F=a(5),I={addNameEmail:function(e,t){return{type:u,payload:{name:e,email:t}}},addLocation:function(e,t){return{type:d,payload:{country:e,city:t}}},addSocialNetworks:function(e){return{type:p,payload:e}},addCatImage:function(e){return{type:h,payload:e}},clearStore:function(){return{type:k}},addIsValidatedForm:function(e){return{type:f,payload:e}},countAttemptNextForm:function(e){return{type:v,payload:e}}},A=(a(38),function(e){function t(){return Object(j.a)(this,t),Object(N.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.kind,n=e.onClick,r=e.children;return o.a.createElement("button",{type:t,className:"orange"===a?"orange-btn":"white-btn",onClick:n},r)}}]),t}(n.Component));A.defaultProps={type:"button"};var x=A,P=(a(40),function(e){function t(){return Object(j.a)(this,t),Object(N.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.totalPages,a=e.onClick,n=e.activeStep,r=e.forms,i=[],c=function(e){var t="";n===e&&(t+="active "),r[e].valid&&(t+="available"),i.push(o.a.createElement("button",{className:t,onClick:function(){return a(e)},key:e},e))},s=1;s<=t;s++)c(s);return o.a.createElement("div",{className:"pagination"},i)}}]),t}(n.Component)),T=a(17),D=a(9),V=(a(42),function(e){function t(){return Object(j.a)(this,t),Object(N.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.value,n=e.name,r=e.error,i=e.placeholder,c=e.onChange,s=e.className,l=e.style,m=r.length>0,u=m?s?"input-error "+s:"input-error":s;return o.a.createElement("div",{className:"input-wrapper"},o.a.createElement("input",{type:t,name:n,value:a,onChange:c,placeholder:i,className:u,style:l}),m&&o.a.createElement("span",{className:"error"},r))}}]),t}(n.Component));V.defaultProps={type:"text"};var L=V;function M(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function R(e){return/^[\u0430-\u044f\u0410-\u042f ]+$/.test(e)}function _(e){return/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(e)}a(12);var K=function(e){function t(e){var a;Object(j.a)(this,t),(a=Object(N.a)(this,Object(S.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,o=t.name;a.setState(Object(D.a)({},o,n)),"email"===o&&a.setState({validEmail:M(n)}),"name"===o&&a.setState({validName:R(n)})};var n=a.props,o=n.name,r=n.email;return a.state={name:o,email:r},a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.name,o=a.email,r=a.validName,i=a.validEmail,c=this.props,s=c.action,l=c.addIsValidatedForm,m=c.formState;t.name===n&&t.email===o&&m.countAttemptNext===e.formState.countAttemptNext||(r&&i?(s(n,o),l({1:!0})):l({1:!1}))}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.formState,a=this.state,n=a.name,o=a.email;!t.valid&&t.countAttemptNext>0&&(this.setState({validEmail:M(o)}),this.setState({validName:R(n)}))}},{key:"componentDidMount",value:function(){var e=this.props.formState,t=this.state,a=t.name,n=t.email;!e.valid&&e.countAttemptNext>0&&(this.setState({validEmail:M(n)}),this.setState({validName:R(a)}))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.validName,r=e.validEmail;return o.a.createElement("form",null,o.a.createElement("h2",null,"1. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 e-mail"),o.a.createElement(L,{name:"name",value:t,placeholder:"\u0418\u043c\u044f",error:!1===n?"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0431\u0443\u043a\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u0430":"",onChange:this.handleInputChange}),o.a.createElement(L,{name:"email",type:"email",error:!1===r?"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email":"",value:a,placeholder:"e-mail",onChange:this.handleInputChange}))}}]),t}(n.Component),W=(a(45),function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(o)))).state={showDropdown:!1},a.handlerClick=function(e){a.setState({showDropdown:!0})},a.setWrapperRef=function(e){a.inputRef=e},a.handleClickOutside=function(e){a.inputRef&&!a.inputRef.contains(e.target)&&a.setState({showDropdown:!1})},a.handleChoose=function(e){a.props.onChange(e),a.setState({showDropdown:!1})},a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.label,r=t.options,i=t.search,c=t.onChange,s=t.selectedKey,l=t.error,m=t.disabled,u=this.state.showDropdown,d=l.length>0;return o.a.createElement("div",{className:"select",ref:this.setWrapperRef},o.a.createElement("input",{type:"text",name:a,value:r[s]?r[s]:"",placeholder:n,onClick:this.handlerClick,onChange:function(){return c(s)},autoComplete:"off",readOnly:!i,disabled:m,className:d?"select-error":""}),d&&o.a.createElement("p",{className:"error"},l),o.a.createElement("div",{className:"select-dropdown",style:{display:u?"flex":"none"}},Object.keys(r).map(function(t){return o.a.createElement("span",{onClick:function(){return e.handleChoose(t)},key:r[t]},r[t])})))}}]),t}(n.Component));W.defaultProps={options:[],search:!1,disabled:!1};var U=W,z=a(11),G=a(8),$=function(e){function t(e){var a;Object(j.a)(this,t),(a=Object(N.a)(this,Object(S.a)(t).call(this,e))).onChangeCountry=function(e){a.setState({country:z[e],countryKey:e}),e&&(a.setState({filteredCities:a.filterCities(e)}),a.setState({city:"",cityKey:""}))},a.onChangeCity=function(e){a.setState({city:G[e].name,cityKey:e})},a.filterCities=function(e){var t={};return Object.keys(G).forEach(function(a){G[a].country==e&&(t[a]=G[a].name)}),t},a.validateLocationForm=function(){var e=a.state,t=e.country,n=e.city,o=e.filteredCities,r=a.props,i=r.action,c=r.addIsValidatedForm;i(t,n),t&&(n||0===Object.keys(o).length)?(c({2:!0}),a.setState({errorCountry:""}),a.setState({errorCity:""})):(c({2:!1}),t?a.setState({errorCountry:""}):a.setState({errorCountry:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443"}),n||0===Object.keys(o).length?a.setState({errorCity:""}):a.setState({errorCity:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}))};var n=a.props,o=n.country,r=n.city,i=Object.keys(z).find(function(e){return z[e]===o}),c=Object.keys(G).find(function(e){return G[e].name===r});return a.state={country:o,countryKey:i,city:r,cityKey:c,filteredCities:a.filterCities(i),errorCountry:"",errorCity:""},a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.country,o=a.city;t.country===n&&t.city===o||this.validateLocationForm()}},{key:"componentWillReceiveProps",value:function(e){var t=e.formState;!t.valid&&t.countAttemptNext>0&&this.validateLocationForm()}},{key:"componentDidMount",value:function(){var e=this.props.formState;!e.valid&&e.countAttemptNext>0&&this.validateLocationForm()}},{key:"render",value:function(){var e=this.state,t=e.countryKey,a=e.cityKey,n=e.filteredCities,r=e.errorCountry,i=e.errorCity;return o.a.createElement("form",null,o.a.createElement("h2",null,"2. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443 \u0438 \u0433\u043e\u0440\u043e\u0434"),o.a.createElement(U,{name:"country",label:"\u0421\u0442\u0440\u0430\u043d\u0430",error:r,selectedKey:t,options:z,onChange:this.onChangeCountry}),o.a.createElement(U,{name:"city",label:"\u0413\u043e\u0440\u043e\u0434",error:i,selectedKey:a,options:n,onChange:this.onChangeCity,disabled:0===Object.keys(n).length}))}}]),t}(n.Component),B=(a(47),function(e){function t(){return Object(j.a)(this,t),Object(N.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.label,n=e.onChange,r=e.checked,i=e.className;return o.a.createElement("label",{className:i?"checkbox-wrapper "+i:"checkbox-wrapper"},a,o.a.createElement("input",{type:"checkbox",name:t,checked:r,onChange:n}),o.a.createElement("span",{className:"checkmark"}))}}]),t}(n.Component)),J=function(e){function t(e){var a;Object(j.a)(this,t),(a=Object(N.a)(this,Object(S.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,o=t.name;a.setState(Object(D.a)({},o,n))},a.validateSocialProfileForm=function(){var e=a.props.addIsValidatedForm,t=a.state,n=t.facebook,o=t.isFacebook,r=t.vkontakte,i=t.isVkontakte,c=t.twitter,s=t.isTwitter,l=t.odnoklassniki,m=t.isOdnoklassniki;if(o||i||s||m){a.setState({error:!1});var u=0;o&&!_(n)?(u++,a.setState({errorFacebook:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430"})):a.setState({errorFacebook:""}),i&&!_(r)?(u++,a.setState({errorVkontakte:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430"})):a.setState({errorVkontakte:""}),s&&!_(c)?(u++,a.setState({errorTwitter:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430"})):a.setState({errorTwitter:""}),m&&!_(l)?(u++,a.setState({errorOdnoklassniki:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430"})):a.setState({errorOdnoklassniki:""}),e(u>0?{3:!1}:{3:!0})}else e({3:!1}),a.setState({error:!0})};var n=a.props.socialNetworks;return a.state=Object(m.a)({},n,{errorFacebook:"",errorVkontakte:"",errorTwitter:"",errorOdnoklassniki:"",error:""}),a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.action,n=this.state,o=n.facebook,r=n.isFacebook,i=n.vkontakte,c=n.isVkontakte,s=n.twitter,l=n.isTwitter,m=n.odnoklassniki,u=n.isOdnoklassniki;t.facebook===o&&t.vkontakte===i&&t.twitter===s&&t.odnoklassniki===m||(a({facebook:o,isFacebook:r,vkontakte:i,isVkontakte:c,twitter:s,isTwitter:l,odnoklassniki:m,isOdnoklassniki:u}),this.validateSocialProfileForm()),t.isFacebook===r&&t.isVkontakte===c&&t.isTwitter===l&&t.isOdnoklassniki===u||a({facebook:o,isFacebook:r,vkontakte:i,isVkontakte:c,twitter:s,isTwitter:l,odnoklassniki:m,isOdnoklassniki:u})}},{key:"componentWillReceiveProps",value:function(e){var t=e.formState;!t.valid&&t.countAttemptNext>0&&this.validateSocialProfileForm()}},{key:"componentDidMount",value:function(){var e=this.props.formState;!e.valid&&e.countAttemptNext>0&&this.validateSocialProfileForm()}},{key:"render",value:function(){var e=this.state,t=e.facebook,a=e.isFacebook,n=e.vkontakte,r=e.isVkontakte,i=e.twitter,c=e.isTwitter,s=e.odnoklassniki,l=e.isOdnoklassniki,m=e.errorFacebook,u=e.errorVkontakte,d=e.errorTwitter,p=e.errorOdnoklassniki,h=e.error;return o.a.createElement("form",null,o.a.createElement("h2",null,"3. \u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"),o.a.createElement("div",{className:"social-input-group"},o.a.createElement(B,{name:"isFacebook",label:"Facebook",checked:a,onChange:this.handleInputChange,className:"social-checkbox"}),a&&o.a.createElement(L,{name:"facebook",value:t,placeholder:"Facebook",error:m,onChange:this.handleInputChange,className:"social-input"})),o.a.createElement("div",{className:"social-input-group"},o.a.createElement(B,{name:"isVkontakte",label:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",checked:r,onChange:this.handleInputChange,className:"social-checkbox"}),r&&o.a.createElement(L,{name:"vkontakte",value:n,placeholder:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",error:u,onChange:this.handleInputChange,className:r?"social-input show":"social-input"})),o.a.createElement("div",{className:"social-input-group"},o.a.createElement(B,{name:"isTwitter",label:"Twitter",checked:c,onChange:this.handleInputChange,className:"social-checkbox"}),c&&o.a.createElement(L,{name:"twitter",value:i,placeholder:"Twitter",error:d,onChange:this.handleInputChange,className:c?"social-input show":"social-input"})),o.a.createElement("div",{className:"social-input-group"},o.a.createElement(B,{name:"isOdnoklassniki",label:"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438",checked:l,onChange:this.handleInputChange,className:"social-checkbox"}),l&&o.a.createElement(L,{name:"odnoklassniki",value:s,placeholder:"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438",error:p,onChange:this.handleInputChange,className:l?"social-input show":"social-input"})),h&&o.a.createElement("p",{className:"error"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438 \u0432\u043a\u0430\u0436\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0441\u043e\u0446\u0441\u0435\u0442\u044c!"))}}]),t}(n.Component),Z=(a(49),function(e){function t(){return Object(j.a)(this,t),Object(N.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imageSrcList,a=e.selectedImage,n=e.onClick;return o.a.createElement("div",{className:"image-picker"},t.map(function(e,t){var r=e.imageSrc,i=e.kindOfPet;return o.a.createElement("img",{src:r,alt:i,key:r,className:r===a?"active":"",onClick:function(){return n(r,i)}})}))}}]),t}(n.Component)),H=[{imageSrc:a(51),kindOfPet:"\u043a\u043e\u0442\u0438\u043a"},{imageSrc:a(52),kindOfPet:"\u0441\u043e\u0431\u0430\u0447\u043a\u0430"},{imageSrc:a(53),kindOfPet:"\u043a\u043e\u0442\u0438\u043a"},{imageSrc:a(54),kindOfPet:"\u0445\u043e\u043c\u044f\u0447\u043e\u043a"},{imageSrc:a(55),kindOfPet:"\u043a\u043e\u0442\u0438\u043a"},{imageSrc:a(56),kindOfPet:"\u043a\u043e\u0442\u0438\u043a"},{imageSrc:a(57),kindOfPet:"\u0435\u043d\u043e\u0442"},{imageSrc:a(58),kindOfPet:"\u0441\u043e\u0431\u0430\u0447\u043a\u0430"}],X=function(e){function t(e){var a;Object(j.a)(this,t),(a=Object(N.a)(this,Object(S.a)(t).call(this,e))).handleImageClick=function(e,t){a.setState({selectedImage:e,kindOfPet:t});var n=a.props,o=n.action,r=n.addIsValidatedForm;"\u043a\u043e\u0442\u0438\u043a"===t?(o({src:e,kindOfPet:t}),r({4:!0}),a.setState({isCat:!0})):(o({src:e,kindOfPet:t}),a.setState({isCat:!1}),r({4:!1}))},a.validateCatForm=function(){var e=a.props.addIsValidatedForm;"\u043a\u043e\u0442\u0438\u043a"===a.state.kindOfPet?(e({4:!0}),a.setState({isCat:!0})):(a.setState({isCat:!1}),e({4:!1}))};var n=a.props.catImage;return a.state={selectedImage:n.src,kindOfPet:n.kindOfPet},a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.formState;!t.valid&&t.countAttemptNext>0&&this.validateCatForm()}},{key:"componentDidMount",value:function(){var e=this.props.formState;!e.valid&&e.countAttemptNext>0&&this.validateCatForm()}},{key:"render",value:function(){var e=this.state,t=e.selectedImage,a=e.isCat,n=e.kindOfPet;return o.a.createElement("form",null,o.a.createElement("h2",null,"4. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043b\u044e\u0431\u0438\u043c\u043e\u0433\u043e \u043a\u043e\u0442\u0438\u043a\u0430"),o.a.createElement(Z,{imageSrcList:H,selectedImage:t,onClick:this.handleImageClick}),!1===a&&""!==t&&o.a.createElement("p",{className:"error"},"\u042d\u0442\u043e ",n,"! \u0410 \u043d\u0443\u0436\u0435\u043d \u043a\u043e\u0442\u0438\u043a! \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u0442\u0438\u043a\u0430."))}}]),t}(n.Component),q=(a(59),function(e){function t(){return Object(j.a)(this,t),Object(N.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.email,n=e.country,r=e.city,i=e.socialNetworks,c=e.catImage,s=e.goOverAgain;return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"final-card-wrapper"},o.a.createElement("div",null,o.a.createElement("h1",null,t),o.a.createElement("p",null,a),o.a.createElement("p",{className:"location"},n,", ",r),o.a.createElement("div",{className:"social-networks"},i.isFacebook&&o.a.createElement("p",null,o.a.createElement("span",null,"Facebook:"),i.facebook),i.isVkontakte&&o.a.createElement("p",null,o.a.createElement("span",null,"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435:"),i.vkontakte),i.isTwitter&&o.a.createElement("p",null,o.a.createElement("span",null,"Twitter:"),i.twitter),i.isOdnoklassniki&&o.a.createElement("p",null,o.a.createElement("span",null,"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438:"),i.odnoklassniki))),o.a.createElement("img",{src:c.src,alt:"\u041a\u043e\u0442\u0438\u043a"})),o.a.createElement(x,{kind:"orange",onClick:s},o.a.createElement("span",null,"\u041f\u0440\u043e\u0439\u0442\u0438 \u0437\u0430\u043d\u043e\u0432\u043e")))}}]),t}(n.Component)),Q=(a(61),function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(N.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={activeForm:1,allAttemptNextFormClick:0},a.getActiveForm=function(){var e=a.props,t=e.name,n=e.email,r=e.country,i=e.city,c=e.socialNetworks,s=e.catImage,l=e.addNameEmail,m=e.addCatImage,u=e.addSocialNetworks,d=e.addLocation,p=e.addIsValidatedForm,h=e.forms,k=a.state.activeForm;switch(k){case 1:return o.a.createElement(K,{name:t,email:n,action:l,addIsValidatedForm:p,formState:h[1],activeForm:k});case 2:return o.a.createElement($,{country:r,city:i,action:d,addIsValidatedForm:p,formState:h[2],activeForm:k});case 3:return o.a.createElement(J,{socialNetworks:c,action:u,addIsValidatedForm:p,formState:h[3],activeForm:k});case 4:return o.a.createElement(X,{catImage:s,action:m,addIsValidatedForm:p,formState:h[4],activeForm:k});case 5:return o.a.createElement(q,Object.assign({},a.props,{goOverAgain:a.goOverAgain}));default:return o.a.createElement(K,{name:t,email:n,action:l,addIsValidatedForm:p,formState:h[1],activeForm:k})}},a.goToForm=function(e){var t=a.props,n=t.forms,o=t.countAttemptNextForm,r=a.state,i=r.activeForm,c=r.allAttemptNextFormClick,s=e>=1&&e<=5,l=n[i].valid,m=i+1===e||n[e].valid||!n[e-1]||n[e-1].valid;s&&(i>=e||l&&m)&&a.setState({activeForm:e}),o(i),a.setState({allAttemptNextFormClick:c+1})},a.goOverAgain=function(){a.props.clearStore(),a.setState({activeForm:1})},a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props.forms,a=this.state.activeForm;return o.a.createElement("div",{className:"app"},5!==a&&o.a.createElement(P,{totalPages:4,activeStep:a,forms:t,onClick:this.goToForm}),o.a.createElement("div",{className:"forms"},this.getActiveForm()),5!==a&&o.a.createElement("div",{className:"buttons"},o.a.createElement(x,{onClick:function(){return e.goToForm(a-1)}},o.a.createElement(T.a,{size:"16px",style:{marginRight:"5px"}}),o.a.createElement("span",null,"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439")),4!==a?o.a.createElement(x,{onClick:function(){return e.goToForm(a+1)}},o.a.createElement("span",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439"),o.a.createElement(T.b,{size:"16px",style:{marginLeft:"5px"}})):o.a.createElement(x,{kind:"orange",onClick:function(){return e.goToForm(a+1)}},o.a.createElement("span",null,"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"))))}}]),t}(n.Component));var Y=Object(c.b)(function(e){return{name:e.NameEmail.name,email:e.NameEmail.email,country:e.Location.country,city:e.Location.city,socialNetworks:e.SocialNetworks,catImage:e.CatImage,forms:e.Forms}},function(e){return Object(s.bindActionCreators)(I,e)})(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,{store:E},o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,2,1]]]);
//# sourceMappingURL=main.2f81b2eb.chunk.js.map
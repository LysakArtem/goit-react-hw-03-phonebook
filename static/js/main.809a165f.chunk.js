(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={contacts:"ContactList_contacts__3xh52",title:"ContactList_title__1NuSu",contactList:"ContactList_contactList__2g5xv",contactItem:"ContactList_contactItem__2zgjq",name:"ContactList_name__ik9Hk",number:"ContactList_number__hUrwU",button:"ContactList_button__pbmOP"}},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),o=n(10),r=n.n(o),i=(n(18),n(12)),l=n(4),u=n(5),d=n(8),h=n(7),b=n(11),m=n(6),j=n(22),f=n(3),p=n.n(f),O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handlerInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.state.name.trim().length<=2||t.state.number.trim().length<=6?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"):(t.props.onSubmit(Object(b.a)({id:Object(j.a)()},t.state)),t.setState({name:"",number:""}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook "}),Object(a.jsxs)("form",{className:p.a.formAddContact,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:p.a.addLable,children:["Name",Object(a.jsx)("input",{className:p.a.inputFild,type:"text",name:"name",value:e,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:this.handlerInputChange})]}),Object(a.jsxs)("label",{className:p.a.addLable,children:["Number",Object(a.jsx)("input",{className:p.a.inputFild,type:"phone",name:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440",value:n,onChange:this.handlerInputChange})]}),Object(a.jsx)("button",{className:"add-contact-btn",type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component);function v(t){var e=t.filter,n=t.onChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"Find contact by name"}),Object(a.jsx)("input",{placeholder:"\u0427\u0442\u043e \u0438\u0449\u0435\u043c?",onChange:n,value:e})]})}var g=n(2),x=n.n(g);function _(t){var e=t.contacts,n=t.contactsFiltered,c=t.onRemove,s=t.filter,o=t.onChange;return 0===e.length?null:Object(a.jsxs)("div",{className:x.a.contacts,children:[Object(a.jsx)("h1",{className:x.a.title,children:"Contacts"}),1===e.length?null:Object(a.jsx)(v,{filter:s,onChange:o}),0!==n.length?Object(a.jsx)("ul",{className:x.a.contactList,children:n.map((function(t){var e=t.id,n=t.name,s=t.number;return Object(a.jsxs)("li",{className:x.a.contactItem,children:[Object(a.jsxs)("span",{className:x.a.name,children:[n,": "]}),Object(a.jsx)("span",{className:x.a.number,children:s}),Object(a.jsx)("button",{type:"button",className:x.a.button,onClick:function(){return c(e)},children:"Delete"})]},e)}))}):Object(a.jsx)("p",{children:"\u0422\u0430\u043a\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043d\u0435\u0442!"})]})}n(19);var C=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.handleRemove=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&(localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),console.log("working"))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.state.filter.toLowerCase(),s=e.filter((function(t){return t.name.toLowerCase().includes(c)}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{onSubmit:this.formSubmitHandler}),Object(a.jsx)(_,{contacts:e,contactsFiltered:s,onRemove:this.handleRemove,filter:n,onChange:this.changeFilter})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={formAddContact:"AddContacts_formAddContact__2hyRE",addLable:"AddContacts_addLable__17Pxf",inputFild:"AddContacts_inputFild__2cl6q"}}},[[20,1,2]]]);
//# sourceMappingURL=main.809a165f.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={input:"Filter_input__2ZV4J",label:"Filter_label__31bVX",reactIcons:"Filter_reactIcons__2srl_"}},13:function(e,t,n){e.exports={toast:"App_toast__3HoCw",progress:"App_progress__1-aBQ"}},16:function(e,t,n){e.exports={container:"Container_container__3EyVN"}},17:function(e,t,n){e.exports={section:"Section_section__3UhMf"}},19:function(e,t,n){},20:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},28:function(e,t,n){},4:function(e,t,n){e.exports={form:"ContactsForm_form__8eq0j",label:"ContactsForm_label__OrFlj",input:"ContactsForm_input__20wXk",button:"ContactsForm_button__YlIVE",toast:"ContactsForm_toast__22Yi8",progress:"ContactsForm_progress__2n9x2"}},40:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(1),o=n.n(c),r=n(3),s=n.n(r),i=(n(27),n(28),n(21)),l=n(5),u=n(11),m=(n(29),n(15)),b=n.n(m),j=n(13),d=n.n(j),p=n(16),_=n.n(p),f=function(e){var t=e.children;return Object(a.jsx)("div",{className:_.a.container,children:t})},h=n(17),O=n.n(h),x=function(e){var t=e.children;return Object(a.jsx)("section",{className:O.a.section,children:t})},C=n(4),v=n.n(C),N=function(e){var t=e.onSubmit,n=e.onSubmitError,o=Object(c.useState)(""),r=Object(l.a)(o,2),s=r[0],i=r[1],u=Object(c.useState)(""),m=Object(l.a)(u,2),b=m[0],j=m[1],d=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":j(a);break;default:return}},p=function(){i(""),j("")};return Object(a.jsxs)("form",{className:v.a.form,onSubmit:function(e){e.preventDefault(),""!==s.trim()?""!==b.trim()?(t({name:s,number:b}),p()):n("Contact number is missing"):n("Contact name is missing")},children:[Object(a.jsx)("label",{className:v.a.label,htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:v.a.input,type:"text",name:"name",value:s,placeholder:"Enter the name",autoComplete:"off",id:"name",onChange:d}),Object(a.jsx)("label",{className:v.a.label,htmlFor:"number",children:"Number"}),Object(a.jsx)("input",{className:v.a.input,type:"tel",name:"number",value:b,placeholder:"111-11-11",autoComplete:"off",id:"number",onChange:d}),Object(a.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})},g=n(18),S=n(0),F=n(10),I=n.n(F),w=function(e){var t=e.value,n=e.onFilter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:I.a.label,htmlFor:"input",children:"Find contact by name"}),Object(a.jsx)(S.b.Provider,{value:{className:"".concat(I.a.reactIcons)},children:Object(a.jsx)(g.a,{})}),Object(a.jsx)("input",{className:I.a.input,id:"input",value:t,onChange:n,autoComplete:"off"})]})},k=n(19),y=n.n(k),E=n(7),D=n.n(E),J=function(e){var t=e.id,n=e.name,c=e.number,o=e.onDelete;return Object(a.jsxs)("li",{className:D.a.item,children:[Object(a.jsxs)("p",{className:D.a.name,children:[n,":"]}),Object(a.jsx)("p",{className:D.a.number,children:c}),Object(a.jsx)("button",{className:D.a.button,onClick:function(){o(t)},children:"Del"})]})},A=function(e){var t=e.contacts,n=e.onDelete;return Object(a.jsx)("ul",{className:y.a.list,children:t.map((function(e){var t=e.id,c=e.name,o=e.number;return Object(a.jsx)(J,{id:t,name:c,number:o,onDelete:n},t)}))})},H=n(20),P=function(){var e=Object(c.useState)((function(){var e;return JSON.parse(null!==(e=localStorage.getItem("contacts"))&&void 0!==e?e:H)})),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),m=s[0],j=s[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var p=function(e){u.b.dark(e,{className:"".concat(d.a.toast),progressClassName:"".concat(d.a.progress),position:u.b.POSITION.TOP_RIGHT})},_=m.toLowerCase(),h=n.filter((function(e){return e.name.toLowerCase().includes(_)}));return Object(a.jsxs)(f,{children:[Object(a.jsxs)(x,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(N,{onSubmit:function(e){var t=e.name,a=e.number,c={id:b.a.generate(),name:t,number:a};n.some((function(e){return e.name===c.name}))?p("".concat(c.name," is already in your contacts")):o([c].concat(Object(i.a)(n)))},onSubmitError:p}),Object(a.jsx)(u.a,{autoClose:3e3,limit:1,style:{width:"352px"}})]}),n.length>0&&Object(a.jsxs)(x,{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(w,{value:m,onFilter:function(e){j(e.target.value)}}),Object(a.jsx)(A,{contacts:h,onDelete:function(e){o(n.filter((function(t){return t.id!==e}))),j("")}})]})]})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={item:"ContactItem_item__2IRsc",name:"ContactItem_name__18Mhl",number:"ContactItem_number__1Oejg",button:"ContactItem_button__iHCuw"}}},[[40,1,2]]]);
//# sourceMappingURL=main.d208ab0c.chunk.js.map
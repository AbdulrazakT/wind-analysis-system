(this.webpackJsonpfyp=this.webpackJsonpfyp||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),s=(n(117),n(47)),o=n(8),j=(n(118),n(233)),l=n(206),d=n(203),b=n(227),h=n(208),u=n(207),O=n(67),x=n.n(O),m=n(60),p=n(198),f=n(201),g=n(1),v=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},rememberMe:{display:"flex",justifyContent:"flex-start"}}}));function y(e){var t=e.changeRoute,n=e.updateProfile,c=v(),r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],O=i[1],p=Object(a.useState)(""),y=Object(o.a)(p,2),w=y[0],S=y[1];return Object(g.jsxs)(f.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(d.a,{}),Object(g.jsxs)("div",{className:c.paper,children:[Object(g.jsx)(j.a,{className:c.avatar,children:Object(g.jsx)(x.a,{})}),Object(g.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(g.jsxs)("form",{className:c.form,onSubmit:function(e){e.preventDefault(),fetch("http://localhost:8080/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:w})}).then((function(e){return e.json()})).then((function(e){1===e.role?(n(e),t("home")):2===e.role?(n(e),t("admin")):"Incorrect form submission"===e?alert(e):alert("Invalid credentials")}))},noValidate:!0,children:[Object(g.jsx)(b.a,{variant:"outlined",margin:"normal",onChange:function(e){return O(e.target.value)},required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(g.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,onChange:function(e){return S(e.target.value)},name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(g.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,children:"Sign In"}),Object(g.jsx)(u.a,{container:!0,children:Object(g.jsx)(u.a,{item:!0,children:Object(g.jsx)(h.a,{onClick:function(){return t("register")},variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})}var w=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function S(e){var t=e.updateProfile,n=e.changeRoute,c=w(),r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],O=i[1],p=Object(a.useState)(""),v=Object(o.a)(p,2),y=v[0],S=v[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),T=N[0],k=N[1],I=Object(a.useState)(""),P=Object(o.a)(I,2),A=P[0],W=P[1],E=Object(a.useState)(""),_=Object(o.a)(E,2),R=_[0],D=_[1];return Object(g.jsxs)(f.a,{component:"main",maxWidth:"xs",children:[Object(g.jsx)(d.a,{}),Object(g.jsxs)("div",{className:c.paper,children:[Object(g.jsx)(j.a,{className:c.avatar,children:Object(g.jsx)(x.a,{})}),Object(g.jsx)(m.a,{component:"h1",variant:"h5",children:"Register"}),Object(g.jsxs)("form",{className:c.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),fetch("http://localhost:8080/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:s,lastname:T,email:y,employmentID:A,password:R})}).then((function(e){return e.json()})).then((function(e){e.id?(t(e),n("home")):"Incorrect form submission!"===e?alert(e):alert("Invalid credentials")}))},children:[Object(g.jsxs)(u.a,{container:!0,spacing:2,children:[Object(g.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(b.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return O(e.target.value)}})}),Object(g.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(g.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return k(e.target.value)}})}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return S(e.target.value)}})}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"employmenID",label:"Employment ID",id:"employmentID",autoComplete:"current-password",onChange:function(e){return W(e.target.value)}})}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return D(e.target.value)}})})]}),Object(g.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,children:"Sign Up"}),Object(g.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(g.jsx)(u.a,{item:!0,children:Object(g.jsx)(h.a,{onClick:function(){return n("signin")},variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var C=n(38),N=n(209),T=n(205),k=n(147),I=n(223),P=n(224),A=n(225),W=n(226),E=n(146),_=n(229),R=n(230),D=n(73),B=n.n(D),H=n(15),G=n(222),L=n(96),F=n.n(L),M=n(71),z=n.n(M),U=n(72),q=n.n(U),V=n(97),J=n.n(V),Y=Object(p.a)((function(e){return{container:{textAlign:"left"}}})),X=function(e){var t=e.user,n=Y();return Object(g.jsxs)("div",{className:n.container,children:[Object(g.jsx)("h3",{children:Object(g.jsx)("strong",{children:"Welcome ".concat(t.firstname," ").concat(t.lastname)})}),Object(g.jsx)(N.a,{}),Object(g.jsx)(m.a,{variant:"caption",children:"You have successfully loged into the Wind Analytics and Visulization Tool."}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{variant:"caption",children:"You can access System functionalities by following appropriate links on the menu side. Following is further information about the links :"}),Object(g.jsx)("br",{}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)(m.a,{variant:"caption",children:Object(g.jsx)("strong",{children:"Workspace:"})}),Object(g.jsx)("br",{}),Object(g.jsxs)(m.a,{variant:"caption",children:["This is the Core Part of the system. Here, you upload your climate data and get a ",Object(g.jsx)("strong",{children:"Climate Summary"})," as well as visualize"," ",Object(g.jsx)("strong",{children:"Wind Graphs."})]}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{color:"error",variant:"caption",children:"However you need to consider the following before uploading your data into the system:"}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{variant:"caption",children:Object(g.jsxs)("ol",{children:[Object(g.jsxs)("li",{children:["All data should be in ",Object(g.jsx)("strong",{children:"csv format"})]}),Object(g.jsxs)("li",{children:["Data should be clean: i.e. no missing data cells and ensure correct data type formats",Object(g.jsx)("br",{}),"NB: Replace any missing data cells with ",Object(g.jsx)("strong",{children:"NA"})]})]})})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)(m.a,{variant:"caption",children:Object(g.jsx)("strong",{children:"Results:"})}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{variant:"caption",children:"Here you'll find your generated Climate Summaries and Wind Graphs, ready for you to download"})]})]}),Object(g.jsx)(N.a,{})]})},K=n(80),Q=n(219),Z=n(220),$=n(221),ee=n(231),te=n(216),ne=n(217),ae=n(95),ce=n.n(ae),re=n(211),ie=n(215),se=n(214),oe=n(210),je=n(212),le=n(213),de=Object(p.a)({table:{minWidth:650},tableHead:{fontWeight:"bold"}});function be(e){var t=e.files,n=de(),a=t.winddirection,c=t.windspeed;return Object(g.jsx)(oe.a,{component:K.a,children:Object(g.jsxs)(re.a,{className:n.table,"aria-label":"simple table",children:[Object(g.jsx)(je.a,{children:Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{className:n.tableHead,children:"S/N "}),Object(g.jsx)(se.a,{align:"left",className:n.tableHead,children:"Wind Direction File name"}),Object(g.jsx)(se.a,{align:"left",className:n.tableHead,children:"WindSpeed File name"})]})}),Object(g.jsx)(ie.a,{children:Array.from(a,(function(e,t){return Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{children:t+1}),Object(g.jsx)(se.a,{align:"left",children:e.name}),Object(g.jsx)(se.a,{align:"left",children:c[t].name})]},t)}))})]})})}var he=Object(p.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function ue(e){var t=e.files,n=e.viewFiles,a=he();return Object(g.jsx)("div",{className:a.root,children:Object(g.jsxs)(ee.a,{children:[Object(g.jsx)(te.a,{expandIcon:Object(g.jsx)(ce.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(g.jsx)(l.a,{variant:"outlined",color:"primary",onClick:function(){return n()},children:Object(g.jsx)(m.a,{className:a.heading,children:"View Chosen Files"})})}),Object(g.jsx)(ne.a,{children:t.winddirection.length&&t.windspeed.length?Object(g.jsx)(be,{files:t}):Object(g.jsx)(m.a,{children:"No chosen files!"})})]})})}var Oe=n(218),xe=n(232),me=n(228);function pe(e){return Object(g.jsx)(me.a,Object(s.a)({elevation:6,variant:"filled"},e))}var fe=Object(p.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function ge(e){var t=e.submit,n=e.snackbar_purpose,a=e.confirm,r=e.status,i=e.files,s=fe(),j=c.a.useState(!1),d=Object(o.a)(j,2),b=d[0],h=d[1],u=function(e,t){"clickaway"!==t&&h(!1)};return Object(g.jsx)("div",{className:s.root,children:"submit"===n?Object(g.jsxs)("div",{children:[Object(g.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){t(i),h(!0)},children:"Submit"}),Object(g.jsx)(xe.a,{open:b,autoHideDuration:2e3,onClose:u,children:Object(g.jsx)(pe,{onClose:u,severity:"success",children:"Submitted successfully!"})})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){a(),h(!0)},children:"Confirm"}),r=Object(g.jsx)(xe.a,{open:b,autoHideDuration:2e3,onClose:u,children:Object(g.jsx)(pe,{onClose:u,severity:"success",children:r})})]})})}var ve=[{value:"5",label:"5 yrs"},{value:"10",label:"10 yrs"}],ye=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},gridCenter:{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}}));function we(e){var t=e.submit,n=e.files,c=ye(),r=Object(a.useState)(5),i=Object(o.a)(r,2),s=i[0],j=i[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),h=(d[0],d[1]);return Object(g.jsx)("form",{className:c.root,noValidate:!0,autoComplete:"off",children:Object(g.jsxs)(u.a,{container:!0,spacing:1,children:[Object(g.jsx)(u.a,{item:!0,xs:6,className:c.gridCenter,children:Object(g.jsx)(b.a,{id:"outlined-basic",label:"Station name",variant:"outlined",onChange:function(e){return h(e.target.value)}})}),Object(g.jsx)(u.a,{item:!0,xs:6,className:c.gridCenter,children:Object(g.jsx)(b.a,{id:"outlined-select-currency",select:!0,label:"Time Average",value:s,onChange:function(e){return j(e.target.value)},helperText:"Please select your currency",variant:"outlined",children:ve.map((function(e){return Object(g.jsx)(Oe.a,{value:e.value,children:e.label},e.value)}))})}),Object(g.jsx)(u.a,{item:!0,xs:12,className:c.gridCenter,children:Object(g.jsx)(ge,{snackbar_purpose:"submit",files:n,submit:t})})]})})}var Se=function(){for(var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(o.a)(r,2),s=i[0],j=i[1],l=Object(a.useState)({winddirection:[],windspeed:[]}),d=Object(o.a)(l,2),b=d[0],h=d[1],O=new FormData,x=0;x<12;x++)O.append("wd",n[x]),O.append("ws",s[x]);return Object(g.jsx)("div",{children:Object(g.jsxs)(u.a,{container:!0,spacing:2,children:[Object(g.jsx)(u.a,{item:!0,xs:6,children:Object(g.jsx)(K.a,{children:Object(g.jsx)(Q.a,{children:Object(g.jsxs)(Z.a,{children:[Object(g.jsx)(m.a,{align:"left",variant:"body1",children:Object(g.jsx)("strong",{children:"Wind Direction: "})}),Object(g.jsx)(N.a,{}),Object(g.jsx)($.a,{children:Object(g.jsx)("input",{type:"file",name:"windDirection",multiple:!0,onChange:function(e){return c(e.target.files)}})})]})})})}),Object(g.jsx)(u.a,{item:!0,xs:6,children:Object(g.jsx)(K.a,{children:Object(g.jsx)(Q.a,{children:Object(g.jsxs)(Z.a,{children:[Object(g.jsx)(m.a,{align:"left",variant:"body1",children:Object(g.jsx)("strong",{children:"Wind Speed: "})}),Object(g.jsx)(N.a,{}),Object(g.jsx)($.a,{children:Object(g.jsx)("input",{type:"file",name:"windDirection",multiple:!0,onChange:function(e){return j(e.target.files)}})})]})})})}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(ue,{files:b,viewFiles:function(){h({winddirection:n,windspeed:s})}})}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(K.a,{children:Object(g.jsx)(we,{submit:function(e){fetch("http://localhost:8080/upload",{method:"POST",body:O}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},files:b})})})]})})},Ce=n(204),Ne=Object(p.a)((function(e){return{typography:{padding:e.spacing(2)},divContainer:{display:"flex",flexDirection:"column",padding:"10px"},orange:{color:e.palette.getContrastText(G.a[500]),backgroundColor:G.a[500]}}}));function Te(e){var t=e.changeRoute,n=e.changeLocalRoute,a=e.name,r=Ne(),i=c.a.useState(null),s=Object(o.a)(i,2),d=s[0],b=s[1],u=Boolean(d),O=u?"simple-popover":void 0;return Object(g.jsxs)("div",{children:[Object(g.jsx)(l.a,{"aria-describedby":O,variant:"text",color:"primary",onClick:function(e){b(e.currentTarget)},children:Object(g.jsx)(j.a,{className:r.orange,children:a})}),Object(g.jsx)(Ce.a,{id:O,open:u,anchorEl:d,onClose:function(){b(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(g.jsxs)("div",{className:r.divContainer,children:[Object(g.jsx)(m.a,{children:Object(g.jsx)(h.a,{onClick:function(){return n("password")},href:"#",children:"Change Password"})}),Object(g.jsx)(m.a,{children:Object(g.jsx)(h.a,{onClick:function(){return t("signin")},href:"#",children:"Logout"})})]})})]})}var ke=n(29),Ie=n.n(ke),Pe=n(54),Ae=n(79),We=n.n(Ae),Ee=n(55),_e=n.n(Ee),Re=n(56),De=n.n(Re);function Be(){var e=function(){var e=Object(Pe.a)(Ie.a.mark((function e(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_e()({url:"http://localhost:8080/download_summary",method:"GET",responseType:"blob"}).then((function(e){"application/json"===e.data.type?alert("Nothing to download, please submit files first!"):De()(e.data,"Tabora.csv")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(Pe.a)(Ie.a.mark((function e(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_e()({url:"http://localhost:8080/download_graph",method:"GET",responseType:"blob"}).then((function(e){"application/json"===e.data.type?alert("Nothing to download, please submit files first!"):De()(e.data,"Graph.pdf")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)(u.a,{container:!0,spacing:2,children:[Object(g.jsx)(u.a,{item:!0,xs:6,children:Object(g.jsxs)(Q.a,{children:[Object(g.jsxs)(Z.a,{children:[Object(g.jsx)(m.a,{align:"left",variant:"body1",children:Object(g.jsx)("strong",{children:"Climate Summary "})}),Object(g.jsx)(N.a,{})]}),Object(g.jsx)($.a,{children:Object(g.jsx)(l.a,{onClick:e,variant:"contained",color:"primary",startIcon:Object(g.jsx)(We.a,{}),children:"Download Climate Summary"})})]})}),Object(g.jsx)(u.a,{item:!0,xs:6,children:Object(g.jsxs)(Q.a,{children:[Object(g.jsxs)(Z.a,{children:[Object(g.jsx)(m.a,{align:"left",variant:"body1",children:Object(g.jsx)("strong",{children:"Wind Graph "})}),Object(g.jsx)(N.a,{})]}),Object(g.jsx)($.a,{children:Object(g.jsx)(l.a,{onClick:t,variant:"contained",color:"primary",startIcon:Object(g.jsx)(We.a,{}),children:"Download Wind Graphs"})})]})})]})})}function He(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],j=i[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),h=d[0],O=d[1];return Object(g.jsx)("div",{children:Object(g.jsxs)(u.a,{container:!0,spacing:1,children:[Object(g.jsx)(u.a,{align:"left",item:!0,xs:12,children:Object(g.jsx)(b.a,{label:"Old Password",variant:"outlined",onChange:function(e){return c(e.target.value)}})}),Object(g.jsx)(u.a,{align:"left",item:!0,xs:12,children:Object(g.jsx)(b.a,{label:"New Password",variant:"outlined",onChange:function(e){return j(e.target.value)}})}),Object(g.jsx)(u.a,{align:"left",item:!0,xs:12,children:Object(g.jsx)(ge,{snackbar_purpose:"confirm",confirm:function(){fetch("http://localhost:8080/password",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:n,new_password:s})}).then((function(e){return e.json()})).then((function(e){O(e)}))},status:h})})]})})}var Ge=Object(p.a)((function(e){return{button_cursor:{cursor:"pointer"}}}));function Le(e){var t=e.summaries,n=e.downloadPrevReport,a=Ge();return Object(g.jsx)("div",{children:Object(g.jsx)(K.a,{children:Object(g.jsxs)(re.a,{children:[Object(g.jsx)(je.a,{children:Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"S/N"})}),Object(g.jsxs)(se.a,{children:[Object(g.jsx)("strong",{children:"Name"})," "]}),Object(g.jsxs)(se.a,{children:[Object(g.jsx)("strong",{children:"Issue Time"})," "]})]})}),Object(g.jsx)(ie.a,{children:0===t.length?Object(g.jsx)(le.a,{children:Object(g.jsx)(se.a,{children:Object(g.jsx)(m.a,{variant:"body2",color:"secondary",children:"No data!"})})}):t.map((function(e,t){return Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{component:"th",scope:"row",children:t+1}),Object(g.jsx)(se.a,{children:Object(g.jsx)(m.a,{className:a.button_cursor,onClick:function(){return n(e)},variant:"button",color:"primary",children:e.name})}),Object(g.jsx)(se.a,{children:e.issued_at})]},t)}))})]})})})}var Fe=Object(p.a)((function(e){return{button_cursor:{cursor:"pointer"}}}));function Me(e){var t=e.graphs,n=e.downloadPrevGraph,a=Fe();return Object(g.jsx)("div",{children:Object(g.jsx)(K.a,{children:Object(g.jsxs)(re.a,{children:[Object(g.jsx)(je.a,{children:Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"S/N"})}),Object(g.jsxs)(se.a,{children:[Object(g.jsx)("strong",{children:"Name"})," "]}),Object(g.jsxs)(se.a,{children:[Object(g.jsx)("strong",{children:"Issue Time"})," "]})]})}),Object(g.jsx)(ie.a,{children:0===t.length?Object(g.jsx)(le.a,{children:Object(g.jsx)(se.a,{children:Object(g.jsx)(m.a,{variant:"body2",color:"secondary",children:"No data!"})})}):t.map((function(e,t){return Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{component:"th",scope:"row",children:t+1}),Object(g.jsx)(se.a,{children:Object(g.jsx)(m.a,{className:a.button_cursor,onClick:function(){return n(e)},variant:"button",color:"primary",children:e.name})}),Object(g.jsx)(se.a,{children:e.issued_at})]},t)}))})]})})})}function ze(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(o.a)(r,2),s=i[0],j=i[1];Object(a.useEffect)((function(){return fetch("http://localhost:8080/summaries").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log(e)})),function(){}}),[]),Object(a.useEffect)((function(){return fetch("http://localhost:8080/graphs").then((function(e){return e.json()})).then((function(e){return j(e)})),function(){}}),[]);var l=function(){var e=Object(Pe.a)(Ie.a.mark((function e(t){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_e()({url:"http://localhost:8080/download",method:"POST",responseType:"blob",data:{file__path:t.report}}).then((function(e){De()(e.data,t.name)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(Pe.a)(Ie.a.mark((function e(t){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_e()({url:"http://localhost:8080/download",method:"POST",responseType:"blob",data:{file__path:t.graph}}).then((function(e){De()(e.data,t.name)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)(u.a,{container:!0,spacing:1,children:[Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(m.a,{align:"left",variant:"h5",color:"textPrimary",children:"Wind Summaries:"})}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(Le,{summaries:n,downloadPrevReport:l})}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(m.a,{align:"left",variant:"h5",color:"textPrimary",children:"Wind Graphs:"})}),Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(Me,{graphs:s,downloadPrevGraph:d})})]})})}var Ue=240,qe=Object(p.a)((function(e){return{root:{display:"flex"},drawer:Object(C.a)({},e.breakpoints.up("sm"),{width:Ue,flexShrink:0}),appBar:Object(C.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(Ue,"px)"),marginLeft:Ue}),menuButton:Object(C.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:Ue},content:{flexGrow:1,padding:e.spacing(3)},listItem:{textAlign:"center"},toolbarAlign:{display:"flex",justifyContent:"space-between"},orange:{color:e.palette.getContrastText(G.a[500]),backgroundColor:G.a[500]},toolbarMenu:{textAlign:"right"},container:{minWidth:"100%",display:"flex",alignItems:"center"}}}));var Ve=function(e){var t=e.window,n=qe(),c=Object(H.a)(),r=Object(a.useState)(!1),i=Object(o.a)(r,2),s=i[0],j=i[1],l=Object(a.useState)("home"),b=Object(o.a)(l,2),h=b[0],u=b[1],O=function(e){u(e)},x=function(){j(!s)},p=Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:n.toolbar}),Object(g.jsx)(N.a,{}),Object(g.jsxs)(T.a,{children:[Object(g.jsx)("div",{}),Object(g.jsxs)(k.a,{button:!0,onClick:function(){O("home")},children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(F.a,{})}),Object(g.jsx)(P.a,{primary:"Home"})]}),Object(g.jsxs)(k.a,{button:!0,onClick:function(){O("workspace")},children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(z.a,{})}),Object(g.jsx)(P.a,{primary:"Workspace"})]}),Object(g.jsxs)(k.a,{button:!0,onClick:function(){O("results")},children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(q.a,{})}),Object(g.jsx)(P.a,{primary:"Results"})]}),Object(g.jsxs)(k.a,{button:!0,onClick:function(){O("history")},children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(J.a,{})}),Object(g.jsx)(P.a,{primary:"History"})]})]})]}),f=void 0!==t?function(){return t().document.body}:void 0;return Object(g.jsxs)("div",{className:n.root,children:[Object(g.jsx)(d.a,{}),Object(g.jsx)(A.a,{position:"fixed",className:n.appBar,children:Object(g.jsxs)(W.a,{className:n.toolbarAlign,children:[Object(g.jsx)(E.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:x,className:n.menuButton,children:Object(g.jsx)(B.a,{})}),Object(g.jsx)(m.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,children:"Wind Data Analytics & Visualization Tool"}),Object(g.jsx)(Te,{name:e.name,changeLocalRoute:O,changeRoute:e.changeRoute})]})}),Object(g.jsxs)("nav",{className:n.drawer,"aria-label":"mailbox folders",children:[Object(g.jsx)(_.a,{smUp:!0,implementation:"css",children:Object(g.jsx)(R.a,{container:f,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:s,onClose:x,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0},children:p})}),Object(g.jsx)(_.a,{xsDown:!0,implementation:"css",children:Object(g.jsx)(R.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0,children:p})})]}),Object(g.jsxs)("main",{className:n.content,children:[Object(g.jsx)("div",{className:n.toolbar}),"home"===h?Object(g.jsx)(X,{user:e.user}):"workspace"===h?Object(g.jsx)(Se,{}):"password"===h?Object(g.jsx)(He,{}):"history"===h?Object(g.jsx)(ze,{}):Object(g.jsx)(Be,{})]})]})},Je=n(4),Ye=n(98),Xe=n.n(Ye),Ke=n(99),Qe=n.n(Ke),Ze=n(100),$e=n.n(Ze),et=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return fetch("http://localhost:8080/total_users").then((function(e){return e.json()})).then((function(e){return c(e)})),function(){}})),Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{variant:"h6",color:"initial",children:Object(g.jsx)("strong",{children:" TOTAL USERS:"})}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{variant:"h6",color:"primary",children:n})]})},tt=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return fetch("http://localhost:8080/total_summaries").then((function(e){return e.json()})).then((function(e){return c(e)})),function(){}})),Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{variant:"h6",color:"initial",children:Object(g.jsx)("strong",{children:" TOTAL WIND SUMMARIES:"})}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{variant:"h6",color:"primary",children:n})]})},nt=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return fetch("http://localhost:8080/total_graphs").then((function(e){return e.json()})).then((function(e){return c(e)})),function(){}})),Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{variant:"h6",color:"initial",children:Object(g.jsx)("strong",{children:" TOTAL GRAPHS:"})}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{variant:"h6",color:"primary",children:n})]})},at=n(49),ct=n.n(at),rt=n(50),it=n.n(rt),st=Object(p.a)((function(e){return{btn_margin:{marginLeft:"16px"}}})),ot=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){return fetch("http://localhost:8080/all_climate_analysts").then((function(e){return e.json()})).then((function(e){return c(e)})),function(){}}));var r=st();return Object(g.jsx)(u.a,{container:!0,spacing:3,children:Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(K.a,{children:Object(g.jsxs)(re.a,{children:[Object(g.jsx)(je.a,{children:Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"S/N"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"FIRST NAME"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"LAST NAME"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"EMPLOYMENT ID"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"EMAIL"})}),Object(g.jsx)(se.a,{align:"center",children:Object(g.jsx)("strong",{children:"ACTION"})})]})}),Object(g.jsx)(ie.a,{children:n.map((function(e,t){return Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{component:"th",scope:"row",children:t+1}),Object(g.jsx)(se.a,{children:e.firstname}),Object(g.jsx)(se.a,{children:e.lastname}),Object(g.jsx)(se.a,{children:e.employmentid}),Object(g.jsx)(se.a,{children:e.email}),Object(g.jsxs)(se.a,{align:"center",children:[Object(g.jsx)(l.a,{variant:"text",color:"primary",startIcon:Object(g.jsx)(ct.a,{}),children:"Edit"}),Object(g.jsx)(l.a,{variant:"text",color:"secondary",startIcon:Object(g.jsx)(it.a,{}),className:r.btn_margin,children:"Delete"})]})]},t)}))})]})})})})},jt=Object(p.a)((function(e){return{btn_margin:{marginLeft:"16px"}}})),lt=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){return fetch("http://localhost:8080/all_climate_summaries").then((function(e){return e.json()})).then((function(e){return c(e)})),function(){}}));var r=jt();return Object(g.jsx)(u.a,{container:!0,spacing:3,children:Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(K.a,{children:Object(g.jsxs)(re.a,{children:[Object(g.jsx)(je.a,{children:Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"S/N"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"REPORT NAME"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"GENERATED BY"})}),Object(g.jsx)(se.a,{align:"center",children:Object(g.jsx)("strong",{children:"PATH"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"ISSUE DATE"})}),Object(g.jsx)(se.a,{align:"center",children:Object(g.jsx)("strong",{children:"ACTION"})})]})}),Object(g.jsx)(ie.a,{children:n.map((function(e,t){return Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{component:"th",scope:"row",children:t+1}),Object(g.jsx)(se.a,{children:e.name}),Object(g.jsxs)(se.a,{children:[e.firstname," ",e.lastname]}),Object(g.jsx)(se.a,{children:e.report}),Object(g.jsx)(se.a,{children:e.issued_at}),Object(g.jsxs)(se.a,{align:"center",children:[Object(g.jsx)(l.a,{variant:"outlined",color:"primary",startIcon:Object(g.jsx)(ct.a,{}),children:"Modify"}),Object(g.jsx)(l.a,{variant:"outlined",color:"secondary",startIcon:Object(g.jsx)(it.a,{}),className:r.btn_margin,children:"Remove"})]})]},t)}))})]})})})})},dt=Object(p.a)((function(e){return{btn_margin:{marginLeft:"16px"}}})),bt=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){return fetch("http://localhost:8080/all_wind_graphs").then((function(e){return e.json()})).then((function(e){return c(e)})),function(){}}));var r=dt();return Object(g.jsx)(u.a,{container:!0,spacing:3,children:Object(g.jsx)(u.a,{item:!0,xs:12,children:Object(g.jsx)(K.a,{children:Object(g.jsxs)(re.a,{children:[Object(g.jsx)(je.a,{children:Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"S/N"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"GRAPH NAME"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"GENERATED BY"})}),Object(g.jsx)(se.a,{align:"center",children:Object(g.jsx)("strong",{children:"PATH"})}),Object(g.jsx)(se.a,{children:Object(g.jsx)("strong",{children:"ISSUE DATE"})}),Object(g.jsx)(se.a,{align:"center",children:Object(g.jsx)("strong",{children:"ACTION"})})]})}),Object(g.jsx)(ie.a,{children:n.map((function(e,t){return Object(g.jsxs)(le.a,{children:[Object(g.jsx)(se.a,{component:"th",scope:"row",children:t+1}),Object(g.jsx)(se.a,{children:e.name}),Object(g.jsxs)(se.a,{children:[e.firstname," ",e.lastname]}),Object(g.jsx)(se.a,{children:e.graph}),Object(g.jsx)(se.a,{children:e.issued_at}),Object(g.jsxs)(se.a,{align:"center",children:[Object(g.jsx)(l.a,{variant:"outlined",color:"primary",startIcon:Object(g.jsx)(ct.a,{}),children:"Modify"}),Object(g.jsx)(l.a,{variant:"outlined",color:"secondary",startIcon:Object(g.jsx)(it.a,{}),className:r.btn_margin,children:"Remove"})]})]},t)}))})]})})})})},ht=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(C.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:150,display:"flex",justifyContent:"center",alignItems:"center"}}}));function ut(){var e=ht(),t=c.a.useState(!0),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)("overview"),j=Object(o.a)(s,2),l=j[0],b=j[1],h=function(e){b(e)},O=Object(Je.a)(e.paper,e.fixedHeight);return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)(d.a,{}),Object(g.jsx)(A.a,{position:"absolute",className:Object(Je.a)(e.appBar,r&&e.appBarShift),children:Object(g.jsxs)(W.a,{className:e.toolbar,children:[Object(g.jsx)(E.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(Je.a)(e.menuButton,r&&e.menuButtonHidden),children:Object(g.jsx)(B.a,{})}),Object(g.jsx)(m.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,align:"left",className:e.title,children:"Wind Data Analytics & Visualization Tool"}),Object(g.jsx)(m.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,children:"Admin Panel"})]})}),Object(g.jsxs)(R.a,{variant:"permanent",classes:{paper:Object(Je.a)(e.drawerPaper,!r&&e.drawerPaperClose)},open:r,children:[Object(g.jsx)("div",{className:e.toolbarIcon,children:Object(g.jsx)(E.a,{onClick:function(){i(!1)},children:Object(g.jsx)(Xe.a,{})})}),Object(g.jsx)(N.a,{}),Object(g.jsxs)(T.a,{children:[Object(g.jsxs)(k.a,{button:!0,onClick:function(){return h("overview")},children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(z.a,{})}),Object(g.jsx)(P.a,{primary:"Overview"})]}),Object(g.jsxs)(k.a,{button:!0,onClick:function(){return h("users")},children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(Qe.a,{})}),Object(g.jsx)(P.a,{primary:"Users"})]}),Object(g.jsxs)(k.a,{button:!0,onClick:function(){return h("summaries")},children:[Object(g.jsx)(I.a,{children:Object(g.jsx)(q.a,{})}),Object(g.jsx)(P.a,{primary:"Climate Summaries"})]}),Object(g.jsxs)(k.a,{button:!0,onClick:function(){return h("graphs")},children:[Object(g.jsx)(I.a,{children:Object(g.jsx)($e.a,{})}),Object(g.jsx)(P.a,{primary:"Wind Graphs"})]})]})]}),Object(g.jsxs)("main",{className:e.content,children:[Object(g.jsx)("div",{className:e.appBarSpacer}),Object(g.jsx)(f.a,{maxWidth:"lg",className:e.container,children:"overview"===l?Object(g.jsxs)(u.a,{container:!0,spacing:3,children:[Object(g.jsx)(u.a,{item:!0,xs:4,children:Object(g.jsx)(K.a,{className:O,children:Object(g.jsx)(et,{})})}),Object(g.jsx)(u.a,{item:!0,xs:4,children:Object(g.jsx)(K.a,{className:O,children:Object(g.jsx)(tt,{})})}),Object(g.jsx)(u.a,{item:!0,xs:4,children:Object(g.jsx)(K.a,{className:O,children:Object(g.jsx)(nt,{})})})]}):"summaries"===l?Object(g.jsx)(lt,{}):"graphs"===l?Object(g.jsx)(bt,{}):Object(g.jsx)(ot,{})})]})]})}var Ot=function(){var e=Object(a.useState)("signin"),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({firstname:"",lastname:""}),i=Object(o.a)(r,2),j=i[0],l=i[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),h=b[0],u=b[1],O=function(e){l(Object(s.a)({},e))};Object(a.useEffect)((function(){u(j.firstname.charAt(0)+j.lastname.charAt(0))}),[j]);var x=function(e){c(e)};return Object(g.jsx)("div",{className:"App",children:"signin"===n?Object(g.jsx)(y,{changeRoute:x,updateProfile:O}):"register"===n?Object(g.jsx)(S,{changeRoute:x,updateProfile:O}):"admin"===n?Object(g.jsx)(ut,{changeRoute:x,updateProfile:O}):Object(g.jsx)(Ve,{name:h,changeRoute:x,user:j})})},xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(143);i.a.render(Object(g.jsx)(Ot,{}),document.getElementById("root")),xt()}},[[144,1,2]]]);
//# sourceMappingURL=main.8eaabc2e.chunk.js.map
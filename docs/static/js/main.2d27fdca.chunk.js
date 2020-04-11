(this["webpackJsonpcra-redux-test-app"]=this["webpackJsonpcra-redux-test-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={container:"CreateMonster_container__3qxwG",titleContainer:"CreateMonster_titleContainer__3_mOO",formRow:"CreateMonster_formRow__2RMXb",submitContainer:"CreateMonster_submitContainer__tkm6P",submitButton:"CreateMonster_submitButton___bnYs",deleteButton:"CreateMonster_deleteButton__34YqY",radioContainer:"CreateMonster_radioContainer__1MWz2",label:"CreateMonster_label__yXQHz",radio:"CreateMonster_radio__1QtY9"}},,,,function(e,t,a){e.exports={out:"App_out__2pxyq",container:"App_container__eSJ6i",overlay:"App_overlay__2FvzF",showOverlay:"App_showOverlay__2FF9B",bottomContainer:"App_bottomContainer__3BjL0"}},,function(e,t,a){e.exports={container:"Monster_container__yDHps",isDead:"Monster_isDead__2FqtI Monster_container__yDHps",infoContainer:"Monster_infoContainer__2t1Tt",nameContainer:"Monster_nameContainer__22otN",hpContainer:"Monster_hpContainer__37g23",currentHp:"Monster_currentHp__1GazO",maxHp:"Monster_maxHp__1mYfQ",buttonContainer:"Monster_buttonContainer__26ay2",hpDiff:"Monster_hpDiff__1mVHJ",show:"Monster_show__9bneQ"}},,function(e,t,a){e.exports={container:"ResetDialog_container__PIo56",textContainer:"ResetDialog_textContainer__34c4X",buttonContainer:"ResetDialog_buttonContainer__20cMi",cancelButton:"ResetDialog_cancelButton__1OdUo",resetButton:"ResetDialog_resetButton__hmcj9"}},,,function(e,t,a){e.exports={container:"Faq_container__2PUus",titleContainer:"Faq_titleContainer__1uuUa",textContainer:"Faq_textContainer__gdIH1"}},,,,function(e,t,a){e.exports={container:"Header_container__2-2DW",linkContainer:"Header_linkContainer__16eFz"}},function(e,t,a){e.exports={container:"GetStarted_container__1q1Xf",content:"GetStarted_content__1QqOl"}},,,,function(e,t,a){e.exports={button:"AddButton_button__Ac-mM"}},function(e,t,a){e.exports={container:"MonsterList_container__YLbeL"}},function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(30),a(31),a(5)),i=a(6),s=a(2),m=a(10),u=function(e,t){return e.monsters.find((function(e){return e.id===t}))},d=Object(m.b)({name:"monsters",initialState:{monsters:[]},reducers:{reset:function(e){e.monsters=[]},editMonster:function(e,t){var a=u(e,t.payload.id);Object.assign(a,{name:t.payload.name,maxHp:t.payload.maxHp,color:t.payload.color})},createMonster:function(e,t){t.payload.id=(new Date).getTime(),t.payload.currentHp=Number(t.payload.maxHp),e.monsters.push(t.payload)},deleteMonster:function(e,t){e.monsters=e.monsters.filter((function(e){return e.id!==t.payload.id}))},decrement:function(e,t){var a=u(e,t.payload.id);a.currentHp>0&&a.currentHp--},decrementByAmount:function(e,t){var a=u(e,t.payload.id);a.currentHp>9?a.currentHp=a.currentHp-10:a.currentHp=0},increment:function(e,t){u(e,t.payload.id).currentHp++},incrementByAmount:function(e,t){var a=u(e,t.payload.id);a.currentHp=a.currentHp+10}}}),f=function(e){return e.monsters.monsters},E=d.actions,p=E.reset,b=E.editMonster,v=E.createMonster,_=E.deleteMonster,h=E.decrement,C=E.decrementByAmount,y=E.increment,g=E.incrementByAmount,N=d.reducer,O=a(18),k=a.n(O),j=Object(m.b)({name:"screenVisibility",initialState:{createMonster:!1,editMonster:!1,faq:!1,resetDialog:!1},reducers:{toggleScreen:function(e,t){e[t.payload.screen]=!e[t.payload.screen]}}}),M=function(e){return e.screenVisibility},H=j.actions.toggleScreen,w=j.reducer,x=function(){var e=Object(s.b)(),t=Object(s.c)(f);return r.a.createElement("header",{className:k.a.container},r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("i",{className:"fad fa-flask-potion"}),"Hitpoint Calculator")),r.a.createElement("div",{className:k.a.linkContainer},r.a.createElement("div",{onClick:function(){return e(H({screen:"faq"}))}},r.a.createElement("i",{className:"far fa-question"})),r.a.createElement("div",{onClick:function(){return t.length&&e(H({screen:"resetDialog"}))}},r.a.createElement("i",{className:"far fa-redo-alt"}))))},D=a(23),B=a.n(D),A=function(){var e=Object(s.b)();return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e(H({screen:"createMonster"}))},className:B.a.button},r.a.createElement("i",{className:"far fa-plus"}),"Add monster"))},S=a(3),F=a.n(S),q=function(){var e=Object(s.b)(),t=Object(s.c)(f),a=["#E74C3C","#3498DB","#E67E22","#2ECC71","#9B59B6","#1ABC9C","#F1C40F"],o=a[0];if(t.length){var c=t[t.length-1].color,i=a.findIndex((function(e){return e===c}));o=i<a.length-1?a[i+1]:a[0]}var m=Object(n.useState)(""),u=Object(l.a)(m,2),d=u[0],E=u[1],p=Object(n.useState)(""),b=Object(l.a)(p,2),_=b[0],h=b[1],C=Object(n.useState)(o),y=Object(l.a)(C,2),g=y[0],N=y[1];return r.a.createElement("div",{className:F.a.container},r.a.createElement("div",{className:F.a.titleContainer},r.a.createElement("div",null,r.a.createElement("h1",null,"New monster")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e(H({screen:"createMonster"}))},className:F.a.deleteButton},r.a.createElement("i",{className:"far fa-trash-alt"})))),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),d.length&&_&&g.length&&(e(v({name:d,maxHp:_,color:g})),e(H({screen:"createMonster"})))}(t)}},r.a.createElement("div",{className:F.a.formRow},r.a.createElement("i",{className:"far fa-dragon"}),r.a.createElement("input",{placeholder:"Monster's name",type:"text",value:d,onChange:function(e){return E(e.target.value)},autoFocus:!0})),r.a.createElement("div",{className:F.a.formRow},r.a.createElement("i",{className:"far fa-flask-potion"}),r.a.createElement("input",{placeholder:"Max HP",inputMode:"numeric",pattern:"[0-9]*",type:"text",value:_,onChange:function(e){return h(e.target.value)}})),r.a.createElement("div",{className:F.a.formRow},r.a.createElement("i",{className:"far fa-palette"}),r.a.createElement("div",{className:F.a.radioContainer},a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{className:F.a.label},r.a.createElement("input",{type:"radio",checked:g===e,onChange:function(){return N(e)}}),r.a.createElement("span",{className:F.a.radio,style:{backgroundColor:e}})))})))),r.a.createElement("div",{className:F.a.submitContainer},r.a.createElement("button",{type:"submit",className:F.a.submitButton},r.a.createElement("i",{className:"far fa-check"})," Done")))))},R=function(e){var t=e.monster,a=Object(s.b)(),o=Object(n.useState)(t.name),c=Object(l.a)(o,2),i=c[0],m=c[1],u=Object(n.useState)(t.maxHp),d=Object(l.a)(u,2),f=d[0],E=d[1],p=Object(n.useState)(t.color),v=Object(l.a)(p,2),h=v[0],C=v[1];return r.a.createElement("div",{className:F.a.container},r.a.createElement("div",{className:F.a.titleContainer},r.a.createElement("div",null,r.a.createElement("h1",null,"Edit monster")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){a(_({id:t.id})),a(H({screen:"editMonster"}))},className:F.a.deleteButton},r.a.createElement("i",{className:"far fa-trash-alt"})))),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),i.length&&f&&h.length&&(a(b({id:t.id,name:i,maxHp:f,color:h})),a(H({screen:"editMonster"})))}(e)}},r.a.createElement("div",{className:F.a.formRow},r.a.createElement("i",{className:"far fa-dragon"}),r.a.createElement("input",{placeholder:"Monster's name",type:"text",value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:F.a.formRow},r.a.createElement("i",{className:"far fa-flask-potion"}),r.a.createElement("input",{placeholder:"Max HP",inputMode:"numeric",pattern:"[0-9]*",type:"text",value:f,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:F.a.formRow},r.a.createElement("i",{className:"far fa-palette"}),r.a.createElement("div",{className:F.a.radioContainer},["#E74C3C","#3498DB","#E67E22","#2ECC71","#9B59B6","#1ABC9C","#F1C40F"].map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("label",{className:F.a.label},r.a.createElement("input",{type:"radio",checked:h===e,onChange:function(){return C(e)}}),r.a.createElement("span",{className:F.a.radio,style:{backgroundColor:e}})))})))),r.a.createElement("div",{className:F.a.submitContainer},r.a.createElement("button",{type:"submit",className:F.a.submitButton},r.a.createElement("i",{className:"far fa-check"})," Done")))))},I=a(14),T=a.n(I),Y=function(){var e=Object(s.b)();return r.a.createElement("div",{className:T.a.container},r.a.createElement("div",{className:T.a.titleContainer},r.a.createElement("div",null,r.a.createElement("h1",null,"F.A.Q.")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e(H({screen:"faq"}))}},r.a.createElement("i",{className:"far fa-times"})))),r.a.createElement("div",{className:T.a.textContainer},r.a.createElement("div",null,r.a.createElement("h2",null,"What do I need the Hitpoint Calculator for?"),r.a.createElement("p",null,"This tool was created for dungeon masters that are bad at math and want to track hitpoints for multiple monsters or NPC's.")),r.a.createElement("div",null,r.a.createElement("h2",null,"Dungeon masters? Monsters? What are you talking about?"),r.a.createElement("p",null,"These are instructions for a satanistic cult\u2026 Just kidding, this is a tool for the game Dungeons and Dragons. Google it to find out more.")),r.a.createElement("div",null,r.a.createElement("h2",null,"How do I use this tool?"),r.a.createElement("p",null,"Add monsters by clicking the 'Add monster' button at the bottom. Fill in a name for your monster (E.g. Goblin), set it's hitpoints and change the color if you want. Use the buttons below each monster in your list to substract and add hitpoints during your games.")),r.a.createElement("div",null,r.a.createElement("h2",null,"How do I edit the monsters?"),r.a.createElement("p",null,"Change the name, hitpoints, color or delete a monster by tapping it\u2019s name.")),r.a.createElement("div",null,r.a.createElement("h2",null,"Can I clear the whole list?"),r.a.createElement("p",null,"Clear the list by tapping the reset button in the top right of the page.")),r.a.createElement("div",null,r.a.createElement("h2",null,"Excuse me, but who am I talking to?"),r.a.createElement("p",null,"Hi we're Koen and Aart. Nerds extraordinaire. E-mail us at ",r.a.createElement("a",{href:"mailto:dungeonmasterkoen@gmail.com"},"dungeonmasterkoen@gmail.com")," to talk about Dungeons and Dragons or if you have feedback on this tool."))))},X=a(11),G=a.n(X),P=function(){var e=Object(s.b)();return r.a.createElement("div",{className:G.a.container},r.a.createElement("div",null,r.a.createElement("div",{className:G.a.textContainer},r.a.createElement("div",null,r.a.createElement("i",{className:"far fa-dragon"})),r.a.createElement("h1",null,"Do you want to clear the list of all your monsters?"),r.a.createElement("p",null,"All your added monsters will be removed.")),r.a.createElement("div",{className:G.a.buttonContainer},r.a.createElement("div",{className:G.a.cancelButton},r.a.createElement("button",{onClick:function(){return e(H({screen:"resetDialog"}))}},r.a.createElement("i",{className:"far fa-times"})," Cancel")),r.a.createElement("div",{className:G.a.resetButton},r.a.createElement("button",{onClick:function(){e(p()),e(H({screen:"resetDialog"}))}},r.a.createElement("i",{className:"far fa-redo-alt"})," Clear list")))))},Q=a(46),W=a(9),z=a.n(W),J=function(e){var t=e.monster,a=e.monsterToEditHandler,o=Object(n.useState)(0),c=Object(l.a)(o,2),i=c[0],m=c[1],u=Object(n.useState)(0),d=Object(l.a)(u,2),f=d[0],E=d[1],p=Object(n.useState)(!1),b=Object(l.a)(p,2),v=b[0],_=b[1],N=Object(s.b)(),O=0===t.currentHp,k=Object(Q.a)((function(){_(!1),0===t.currentHp?E(0):E(i),m(0),_(!0)}),700),j=Object(l.a)(k,1)[0];return r.a.createElement("div",{className:O?z.a.isDead:z.a.container},r.a.createElement("div",{className:z.a.infoContainer,onClick:function(){a(t),N(H({screen:"editMonster"}))}},r.a.createElement("div",{className:z.a.nameContainer},r.a.createElement("span",{style:{backgroundColor:t.color}}),r.a.createElement("h2",null,t.name)),r.a.createElement("div",{className:z.a.hpContainer},0!==f&&0!==t.currentHp&&v&&r.a.createElement("span",{className:z.a.hpDiff},f>0?"+".concat(f):"".concat(f)),r.a.createElement("span",{className:z.a.currentHp},t.currentHp),r.a.createElement("span",{className:z.a.maxHp},"/",t.maxHp))),r.a.createElement("div",{className:z.a.buttonContainer},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){N(C({id:t.id})),m((function(e){return e-10})),j()}},"-10")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){N(h({id:t.id})),m((function(e){return e-1})),j()}},"-1")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){N(y({id:t.id})),m((function(e){return e+1})),j()}},"+1")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){N(g({id:t.id})),m((function(e){return e+10})),j()}},"+10"))))},L=a(24),U=a.n(L),V=function(e){var t=e.monsterToEditHandler,a=Object(s.c)(f),n=Object(i.b)(a,(function(e){return e.id}),{from:{opacity:0,transform:"translateX(-50%)"},enter:{opacity:1,transform:"translateX(0)"},leave:{opacity:0,transform:"translateX(50%)"},config:{duration:250}});return r.a.createElement("div",{className:U.a.container},n.map((function(e){var a=e.item,n=e.props,o=e.key;return r.a.createElement(i.a.div,{key:o,style:n},r.a.createElement(J,{monster:a,monsterToEditHandler:t}))})))},K=a(19),$=a.n(K),Z=function(){return r.a.createElement("div",{className:$.a.container},r.a.createElement("div",{className:$.a.content},r.a.createElement("div",null,r.a.createElement("i",{className:"far fa-dragon"})),r.a.createElement("p",null,"Add some monsters to get started")))},ee=a(7),te=a.n(ee),ae=Object(m.a)({reducer:{monsters:N,screenVisibility:w}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,{store:ae},r.a.createElement((function(){var e=Object(s.c)(f),t=Object(s.c)(M).createMonster,a=Object(s.c)(M).editMonster,o=Object(s.c)(M).faq,c=Object(s.c)(M).resetDialog,m=Object(n.useState)({}),u=Object(l.a)(m,2),d=u[0],E=u[1],p={from:{opacity:0,transform:"translateY(-50%)"},enter:{opacity:1,transform:"translateY(0px)"},leave:{opacity:0,transform:"translateY(50%)"}},b=Object(i.b)(t,null,p),v=Object(i.b)(a,null,p),_=Object(i.b)(c,null,p),h=Object(i.b)(o,null,p);return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement("div",{className:te.a.out},r.a.createElement(x,null),r.a.createElement("div",{className:te.a.container},!e.length&&r.a.createElement(Z,null),r.a.createElement("div",null,r.a.createElement(V,{monsterToEditHandler:function(e){return E(e)}})),r.a.createElement("div",{className:"".concat(te.a.overlay," ").concat(t?te.a.showOverlay:"")},b.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(i.a.div,{key:a,style:n},r.a.createElement(q,null))}))),r.a.createElement("div",{className:"".concat(te.a.overlay," ").concat(a?te.a.showOverlay:"")},v.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(i.a.div,{key:a,style:n},r.a.createElement(R,{monster:d}))}))),r.a.createElement("div",{className:"".concat(te.a.overlay," ").concat(c?te.a.showOverlay:"")},_.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(i.a.div,{key:a,style:n},r.a.createElement(P,null))}))),r.a.createElement("div",{className:"".concat(te.a.overlay," ").concat(o?te.a.showOverlay:"")},h.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(i.a.div,{key:a,style:n},r.a.createElement(Y,null))})))),r.a.createElement("div",{className:te.a.bottomContainer},r.a.createElement(A,null)))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.2d27fdca.chunk.js.map
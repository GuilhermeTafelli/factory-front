(this.webpackJsonpproductverificationreact=this.webpackJsonpproductverificationreact||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(8),o=t.n(c),l=t(174),i=t(17),u=t.n(i),s=t(13),d=t(157),p=t(152),m=t(158),E=t(163),h=t(161),f=t(155),g=t(159),b=t(160),v=t(162),O=(t(99),t(22)),y=Object(O.a)(),x=Object(p.a)({table:{minWidth:650}});function C(e){var a=x(),t=n.a.useState(0),r=Object(s.a)(t,2),c=(r[0],r[1],e.purchaseOrders),o=e.loading;return n.a.createElement(f.a,{component:d.a},n.a.createElement(m.a,{className:a.table,"aria-label":"simple table"},n.a.createElement(g.a,null,n.a.createElement(b.a,null,n.a.createElement(h.a,null,"C\xf3digo"),n.a.createElement(h.a,{align:"center"},"Cliente"))),o?n.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement(v.a,null)):n.a.createElement(j,{purchaseOrders:c})))}function j(e){var a=e.purchaseOrders;return n.a.createElement(E.a,null,a.map((function(e){return n.a.createElement(b.a,{key:e.purchaseOrderId,onClick:function(){return a=e,void y.push("/product-count/"+a.purchaseOrderId);var a}},n.a.createElement(h.a,{component:"th",scope:"row"},Number(e.purchaseOrderNumber)),n.a.createElement(h.a,{align:"center"},e.clientName))})))}var w=t(69),k=t.n(w).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL||"http://localhost:8080/api"}),I=function(){var e=Object(r.useState)({purchaseOrders:[],page:1,loading:!0}),a=Object(s.a)(e,2),t=a[0],c=a[1];Object(r.useEffect)((function(){o()}),[]);var o=function(){var e;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(k.get("/purchase-orders?page=1&size=100"));case 2:e=a.sent,c({purchaseOrders:e.data.purchaseOrders,page:e.data.page,loading:!1});case 4:case"end":return a.stop()}}))};return n.a.createElement(C,{purchaseOrders:t.purchaseOrders,page:t.page,loading:t.loading})},P=t(11),V=t(169),N=t(72),A=t.n(N),B=t(173),W=t(168),z=t(166),q=t(167),L=t(165),S=t(171),D=t(164),F=t(70),R=t.n(F);function _(e){var a={open:!1,textValue:0,textPass:""},t=n.a.useState(a),r=Object(s.a)(t,2),c=r[0],o=r[1],l=function(){o(a)};return n.a.createElement("div",null,n.a.createElement(D.a,{onClick:function(){o(Object(P.a)({},c,{open:!0}))},"aria-label":"delete"},n.a.createElement(R.a,null)),n.a.createElement(B.a,{open:c.open,onClose:l,"aria-labelledby":"form-dialog-title"},n.a.createElement(L.a,{id:"form-dialog-title"},"Editar"),n.a.createElement(z.a,null,n.a.createElement(q.a,null,"Quantidade produtos:"),n.a.createElement("div",null,n.a.createElement(S.a,{id:"outlined-number",label:"N\xfamero",type:"number",value:c.textValue,onChange:function(e){var a=e.target;o(Object(P.a)({},c,{textValue:a.value}))},InputLabelProps:{shrink:!0},variant:"outlined"}),n.a.createElement(S.a,{value:c.textPass,error:!c.textPass||"Teste"!==c.textPass,onChange:function(e){var a=e.target;o(Object(P.a)({},c,{textPass:a.value}))},id:"outlined-error-helper-text",label:"Password",type:"password",autoComplete:"current-password",helperText:"Incorrect entry.",variant:"outlined"}))),n.a.createElement(W.a,null,n.a.createElement(V.a,{onClick:l,color:"primary"},"Cancelar"),n.a.createElement(V.a,{disabled:!c.textPass||"0104"!==c.textPass,onClick:function(){var t;t=c.textValue,e.onClick&&e.onClick(t),o(a)},color:"primary"},"Finalizar"))))}var T=t(170),U=t(71),Q=t.n(U);function J(e){var a={open:!1,amountBoxes:0,grossWeight:0},t=n.a.useState(a),r=Object(s.a)(t,2),c=r[0],o=r[1],l=function(){o(a)};return n.a.createElement("div",null,n.a.createElement(V.a,{variant:"contained",color:"primary",size:"large",startIcon:n.a.createElement(Q.a,null),onClick:function(){o(Object(P.a)({},c,{open:!0}))}},"Finalizar"),n.a.createElement(B.a,{open:c.open,onClose:l,"aria-labelledby":"form-dialog-title"},n.a.createElement(L.a,{id:"form-dialog-title"},"Finalizar verifica\xe7\xe3o do pedido"),n.a.createElement(z.a,null,n.a.createElement("div",null,n.a.createElement(S.a,{id:"outlined-number",label:"Quantidade de caixas",type:"number",value:c.amountBoxes,onChange:function(e){var a=e.target;o(Object(P.a)({},c,{amountBoxes:a.value}))},InputLabelProps:{shrink:!0},variant:"outlined"}),n.a.createElement(S.a,{label:"Peso bruto",id:"outlined-start-adornment",value:c.grossWeight,onChange:function(e){var a=e.target;o(Object(P.a)({},c,{grossWeight:a.value}))},type:"number",InputProps:{startAdornment:n.a.createElement(T.a,{position:"end"},"Kg ")},variant:"outlined"}))),n.a.createElement(W.a,null,n.a.createElement(V.a,{onClick:l,color:"primary"},"Cancelar"),n.a.createElement(V.a,{disabled:0===c.amountBoxes||0===c.grossWeight||!function(){var a=0,t=0;return e.products.forEach((function(e){a+=Number(e.quantity),t+=Number(e.totalVerified)})),a===t}(),onClick:function(){var a;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a={quantityBoxes:c.amountBoxes,grossWeight:c.grossWeight},t.next=3,u.a.awrap(k.patch("/purchase-orders/"+e.purchaseOrderId+"/freight",a));case 3:return a={products:e.products},t.next=6,u.a.awrap(k.patch("/purchase-orders/"+e.purchaseOrderId+"/products",a));case 6:y.goBack();case 7:case"end":return t.stop()}}))},color:"primary"},"Finalizar"))))}var K=Object(p.a)({table:{minWidth:650}});function $(e){var a=K(),t=e.purchaseOrder,c=Object(r.useState)({products:[],inputValue:"",codeEan:"",openAlertDialog:!1}),o=Object(s.a)(c,2),l=o[0],i=o[1];function p(e,a){!function(e,a){l.products.forEach((function(t){t.code===e&&(t.totalVerified=Number(a))}))}(e.code,a),i(Object(P.a)({},l,{inputValue:""}))}function v(e){return e.quantity<e.totalVerified?"red":e.quantity==e.totalVerified?"green":e.totalVerified>0?"yellow":"default"}function O(){i(Object(P.a)({},l,{openAlertDialog:!1}))}return Object(r.useEffect)((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.awrap(i(Object(P.a)({},l,{products:t&&t.products})));case 2:case"end":return e.stop()}}))}),[]),n.a.createElement("div",null,n.a.createElement("h1",null,"N\xfamero do pedido: ",t.purchaseOrderNumber),n.a.createElement(V.a,{variant:"contained",color:"primary",size:"large",className:a.button,startIcon:n.a.createElement(A.a,null),onClick:function(){return function(e,a){var t={products:a};k.patch("/purchase-orders/"+e+"/products",t)}(t.purchaseOrderId,l.products)}},"Salvar"),n.a.createElement(B.a,{open:l.openAlertDialog,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.a.createElement(L.a,{id:"alert-dialog-title"},"ALERTA!"),n.a.createElement(z.a,null,n.a.createElement(q.a,{id:"alert-dialog-description"},"Voc\xea leu um c\xf3digo de um produto que n\xe3o esta no pedido. Certifique-se se o pedido esta correto!")),n.a.createElement(W.a,null,n.a.createElement(V.a,{onClick:O,color:"primary"},"Continuar"))),n.a.createElement(J,{purchaseOrderId:t.purchaseOrderId,products:l.products}),n.a.createElement(f.a,{component:d.a},n.a.createElement(m.a,{className:a.table,"aria-label":"simple table",size:"small"},n.a.createElement(g.a,null,n.a.createElement(b.a,null,n.a.createElement(h.a,null,"C\xf3digo de Barras"),n.a.createElement(h.a,{align:"right"},"Produto"),n.a.createElement(h.a,{align:"right"},"Quantidade"),n.a.createElement(h.a,{align:"right"},"A\xe7\xf5es"))),n.a.createElement(E.a,null,l.products.map((function(e){return n.a.createElement(b.a,{key:e.code,style:{backgroundColor:v(e)}},n.a.createElement(h.a,{component:"th",scope:"row"},e.code),n.a.createElement(h.a,{align:"right"},e.description),n.a.createElement(h.a,{align:"right"},e.quantity+"/"+e.totalVerified),n.a.createElement(h.a,{align:"center"},n.a.createElement(_,{onClick:function(a){return p(e,a)}})))}))))),n.a.createElement("input",{type:"text",value:l.inputValue,onChange:function(e){return function(e){if(i(Object(P.a)({},l,{codeEan:l.codeEan+e})),12===l.codeEan.length){var a=!1;l.products.forEach((function(t){t.code===l.codeEan+e&&(t.totalVerified+=1,a=!0)})),i(!1===a?Object(P.a)({},l,{openAlertDialog:!0,codeEan:""}):Object(P.a)({},l,{codeEan:""}))}}(e.target.value)},autoFocus:!0}))}var G=function(){var e=Object(l.d)().purchaseOrderId,a=Object(r.useState)({purchaseOrder:null}),t=Object(s.a)(a,2),c=t[0],o=t[1];Object(r.useEffect)((function(){i()}),[]);var i=function(){var a;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(k.get("/purchase-orders/"+e));case 2:a=t.sent,o({purchaseOrder:a.data});case 4:case"end":return t.stop()}}))};return e?null===c.purchaseOrder?n.a.createElement(v.a,null):n.a.createElement($,{purchaseOrder:c.purchaseOrder}):null},H=function(){return n.a.createElement(l.b,{history:y},n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:I}),n.a.createElement(l.a,{exact:!0,path:"/product-count/:purchaseOrderId",component:G})))},M={purchaseOrders:[]},X=(n.a.createContext({store:M,actions:{setPurchaseOrders:function(){}}}),function(){return n.a.createElement(H,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,a,t){e.exports=t(124)}},[[93,1,2]]]);
//# sourceMappingURL=main.6b90edb8.chunk.js.map
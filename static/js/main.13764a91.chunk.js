(this["webpackJsonpbox-maker"]=this["webpackJsonpbox-maker"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),i=n.n(a),c=n(9),r=n.n(c),h=(n(16),n(8)),s=n(3),b=n(4),d=n(2),l=n(6),u=n(5),j=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsx)("p",{className:"Box",style:{width:this.props.width,height:this.props.height,backgroundColor:this.props.backgroundColor,margin:0}},this.props.keyForBox)}}]),n}(i.a.Component));j.defaultProps={width:100,height:100,backgroundColor:"black"};var x=j,g=n(10),O=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={width:0,height:0,backgroundColor:"balck"},o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(d.a)(o)),o}return Object(b.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addNewBox(this.state)}},{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"Form-body",children:Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{htmlFor:"width",children:"Width "}),Object(o.jsx)("input",{onChange:this.handleChange,name:"width",id:"width",type:"number"}),Object(o.jsx)("label",{htmlFor:"height",children:"height "}),Object(o.jsx)("input",{onChange:this.handleChange,name:"height",id:"height",type:"number"}),Object(o.jsx)("label",{htmlFor:"backgroundColor",children:"Background Color "}),Object(o.jsx)("input",{onChange:this.handleChange,name:"backgroundColor",id:"backgroundColor",type:"text"}),Object(o.jsx)("button",{children:"Submit!"})]})})}}]),n}(i.a.Component)),m=(n(19),n(23)),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={boxes:[]},o.boxList=o.boxList.bind(Object(d.a)(o)),o.addNewBox=o.addNewBox.bind(Object(d.a)(o)),o.handleRemove=o.handleRemove.bind(Object(d.a)(o)),o}return Object(b.a)(n,[{key:"boxList",value:function(){var e=this;return this.state.boxes.map((function(t){return Object(o.jsxs)("div",{className:"BoxList-box",children:[Object(o.jsx)(x,{keyForBox:t.key,width:t.width,height:t.height,backgroundColor:t.backgroundColor}),Object(o.jsx)("button",{id:t.key,onClick:e.handleRemove,children:"Remove Box"})]})}))}},{key:"addNewBox",value:function(e){console.log(e);var t=e.width,n=e.height,o=e.backgroundColor;t=+t,n=+n;var a=Object(m.a)();""==o&&console.log("lala"),this.setState((function(e){return{boxes:[].concat(Object(h.a)(e.boxes),[{width:t,height:n,backgroundColor:o,key:a}])}}))}},{key:"handleRemove",value:function(e){this.setState((function(t){return{boxes:Object(h.a)(t.boxes).filter((function(t){return t.key!==e.target.id}))}}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"BoxList-body",children:[Object(o.jsx)("div",{children:Object(o.jsx)(O,{addNewBox:this.addNewBox})}),Object(o.jsx)("div",{children:this.boxList()})]})}}]),n}(i.a.Component);n(20);var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(k,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),i(e),c(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),f()}],[[21,1,2]]]);
//# sourceMappingURL=main.13764a91.chunk.js.map
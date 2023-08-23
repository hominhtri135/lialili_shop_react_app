"use strict";(self.webpackChunklialili_shop_react_app=self.webpackChunklialili_shop_react_app||[]).push([[426],{7426:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var n=s(9439),r=s(2791),i=s(9798),l=s(5929),a=s(6088),c=s(9999),o=s(2074),d=s(3760),u=s(184),m=function(e){var t,s,n,r,m,v=e.data;console.log("CartItem ~ data:",v);var x=(0,d.Z)();return(0,u.jsxs)("li",{className:"flex py-6 border-b",children:[(0,u.jsx)("div",{className:"relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48",children:v&&(0,u.jsx)("img",{fill:"true",src:"".concat(null===v||void 0===v||null===(t=v.product)||void 0===t?void 0:t.image),alt:"",className:"object-cover object-center"})}),(0,u.jsxs)("div",{className:"relative ml-4 flex flex-1 flex-col justify-between sm:ml-6",children:[(0,u.jsx)("div",{className:"absolute z-10 right-0 top-0",children:(0,u.jsx)(l.Z,{onClick:function(){console.log("onRemove ~ id:",v.id);try{var e=c.Z.deleteCartItem(v.id);o.Am.promise(e,{loading:"Loading",success:function(e){return x.removeItem(v.id),"Item removed from cart. ".concat(null===e||void 0===e?void 0:e.message)},error:function(e){return console.log("onRemove ~ err:",e),"Error: ".concat(null===e||void 0===e?void 0:e.message)}})}catch(t){}},icon:(0,u.jsx)(a.Z,{size:15})})}),(0,u.jsxs)("div",{className:"relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",children:[(0,u.jsx)("div",{className:"flex justify-between",children:(0,u.jsx)("p",{className:" text-lg font-semibold text-black",children:null===v||void 0===v||null===(s=v.product)||void 0===s?void 0:s.title})}),(0,u.jsx)("div",{className:"mt-1 flex justify-start sm:justify-center text-sm",children:(0,u.jsxs)("p",{className:"text-gray-500",children:[null===v||void 0===v||null===(n=v.product_attributes)||void 0===n?void 0:n.color," |"," ",null===v||void 0===v||null===(r=v.product_attributes)||void 0===r?void 0:r.size]})}),(0,u.jsx)(i.Z,{value:null===v||void 0===v||null===(m=v.product)||void 0===m?void 0:m.price})]}),(0,u.jsxs)("div",{class:"flex items-center border border-gray-200 rounded w-fit",children:[(0,u.jsx)("button",{type:"button",class:"w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75",children:"-"}),(0,u.jsx)("input",{type:"number",id:"Quantity",value:null===v||void 0===v?void 0:v.quantity,class:"h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"}),(0,u.jsx)("button",{type:"button",class:"w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75",children:"+"})]})]})]})},v=s(7387),x=s(4165),p=s(5861),h=s(460),f=s(1087),g=function(){var e=(0,f.lr)(),t=(0,n.Z)(e,1)[0],s=(0,d.Z)((function(e){return e.items})),l=(0,d.Z)((function(e){return e.removeAll}));(0,r.useEffect)((function(){t.get("success")&&(o.Am.success("Payment completed."),l()),t.get("canceled")&&o.Am.error("Something went wrong.")}),[t,l]);var a=s.reduce((function(e,t){var s;return e+Number(null===t||void 0===t||null===(s=t.product)||void 0===s?void 0:s.price)*Number(null===t||void 0===t?void 0:t.quantity)}),0),c=function(){var e=(0,p.Z)((0,x.Z)().mark((function e(){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",children:[(0,u.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Order summary"}),(0,u.jsx)("div",{className:"mt-6 space-y-4",children:(0,u.jsxs)("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[(0,u.jsx)("div",{className:"text-base font-medium text-gray-900",children:"Order total"}),(0,u.jsx)(i.Z,{value:a})]})}),(0,u.jsx)(h.Z,{onClick:c,disabled:0===s.length,className:"w-full mt-6",children:"Checkout"})]})},j=function(){var e=(0,r.useState)(!1),t=(0,n.Z)(e,2),s=t[0],i=t[1],l=(0,d.Z)();return(0,r.useEffect)((function(){i(!0)}),[]),s?(0,u.jsx)("div",{className:"bg-white",children:(0,u.jsx)(v.Z,{children:(0,u.jsxs)("div",{className:"px-4 py-16 sm:px-6 lg:px-8 min-h-[calc(100vh-146px)]",children:[(0,u.jsx)("h1",{className:"text-3xl font-bold text-black",children:"Shopping Cart"}),(0,u.jsxs)("div",{className:"mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12",children:[(0,u.jsxs)("div",{className:"lg:col-span-7",children:[0===l.items.length&&(0,u.jsx)("p",{className:"text-neutral-500",children:"No items added to cart."}),(0,u.jsx)("ul",{children:l.items.length>0&&l.items.map((function(e){return(0,u.jsx)(m,{data:e},e.id)}))})]}),(0,u.jsx)(g,{})]})]})})}):null}}}]);
//# sourceMappingURL=426.d4e91c59.chunk.js.map
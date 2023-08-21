"use strict";(self.webpackChunklialili_shop_react_app=self.webpackChunklialili_shop_react_app||[]).push([[426],{7426:function(e,s,l){l.r(s),l.d(s,{default:function(){return v}});var t=l(9439),r=l(2791),i=l(9798),a=l(5929),n=l(6088),c=l(3760),d=l(184),m=function(e){var s,l,t=e.data,r=(0,c.Z)();return(0,d.jsxs)("li",{className:"flex py-6 border-b",children:[(0,d.jsx)("div",{className:"relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48",children:t&&(0,d.jsx)("img",{fill:!0,src:"".concat(t.image),alt:"",className:"object-cover object-center"})}),(0,d.jsxs)("div",{className:"relative ml-4 flex flex-1 flex-col justify-between sm:ml-6",children:[(0,d.jsx)("div",{className:"absolute z-10 right-0 top-0",children:(0,d.jsx)(a.Z,{onClick:function(){r.removeItem(t.id)},icon:(0,d.jsx)(n.Z,{size:15})})}),(0,d.jsxs)("div",{className:"relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",children:[(0,d.jsx)("div",{className:"flex justify-between",children:(0,d.jsx)("p",{className:" text-lg font-semibold text-black",children:t.title})}),(0,d.jsxs)("div",{className:"mt-1 flex text-sm",children:[(0,d.jsx)("p",{className:"text-gray-500",children:(null===t||void 0===t||null===(s=t.color)||void 0===s?void 0:s.name)||"V\xe0ng"}),(0,d.jsx)("p",{className:"ml-4 border-l border-gray-200 pl-4 text-gray-500",children:(null===t||void 0===t||null===(l=t.size)||void 0===l?void 0:l.name)||"S"})]}),(0,d.jsx)(i.Z,{value:t.price})]})]})]})},o=l(7387),u=l(4165),x=l(5861),h=l(460),p=l(2074),f=l(1087),g=function(){var e=(0,f.lr)(),s=(0,t.Z)(e,1)[0],l=(0,c.Z)((function(e){return e.items})),a=(0,c.Z)((function(e){return e.removeAll}));(0,r.useEffect)((function(){s.get("success")&&(p.Am.success("Payment completed."),a()),s.get("canceled")&&p.Am.error("Something went wrong.")}),[s,a]);var n=l.reduce((function(e,s){return e+Number(s.price)}),0),m=function(){var e=(0,x.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",children:[(0,d.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Order summary"}),(0,d.jsx)("div",{className:"mt-6 space-y-4",children:(0,d.jsxs)("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[(0,d.jsx)("div",{className:"text-base font-medium text-gray-900",children:"Order total"}),(0,d.jsx)(i.Z,{value:n})]})}),(0,d.jsx)(h.Z,{onClick:m,disabled:0===l.length,className:"w-full mt-6",children:"Checkout"})]})},v=function(){var e=(0,r.useState)(!1),s=(0,t.Z)(e,2),l=s[0],i=s[1],a=(0,c.Z)();return(0,r.useEffect)((function(){i(!0)}),[]),l?(0,d.jsx)("div",{className:"bg-white",children:(0,d.jsx)(o.Z,{children:(0,d.jsxs)("div",{className:"px-4 py-16 sm:px-6 lg:px-8 min-h-[calc(100vh-146px)]",children:[(0,d.jsx)("h1",{className:"text-3xl font-bold text-black",children:"Shopping Cart"}),(0,d.jsxs)("div",{className:"mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12",children:[(0,d.jsxs)("div",{className:"lg:col-span-7",children:[0===a.items.length&&(0,d.jsx)("p",{className:"text-neutral-500",children:"No items added to cart."}),(0,d.jsx)("ul",{children:a.items.length>0&&a.items.map((function(e){return(0,d.jsx)(m,{data:e},e.id)}))})]}),(0,d.jsx)(g,{})]})]})})}):null}}}]);
//# sourceMappingURL=426.ae9a3606.chunk.js.map
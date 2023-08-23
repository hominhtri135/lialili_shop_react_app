"use strict";(self.webpackChunklialili_shop_react_app=self.webpackChunklialili_shop_react_app||[]).push([[553],{6791:function(e,t,l){var s=l(451),i={get:function(e){var t="/item/getItem/".concat(e);return s.Z.get(t)},getAll:function(e){return s.Z.get("/item/getAllItems",{params:e})},getSearch:function(e,t){var l="/item/getSearchItems/".concat(e);return s.Z.get(l,{params:t})}};t.Z=i},2695:function(e,t,l){l(2791);var s=l(184);t.Z=function(){return(0,s.jsx)("div",{className:"flex items-center justify-center h-full w-full text-neutral-500",children:"No found results"})}},9166:function(e,t,l){var s=l(8290),i=(l(2791),l(184));t.Z=function(){return(0,i.jsx)(s.y,{children:(0,i.jsxs)("div",{className:"bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative",children:[(0,i.jsx)("div",{className:"aspect-square rounded-xl bg-gray-100 relative",children:(0,i.jsx)(s.Z,{className:"aspect-square object-cover w-full rounded-md"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"font-semibold text-lg inline-block overflow-hidden text-ellipsis whitespace-nowrap w-full",children:(0,i.jsx)(s.Z,{height:28})}),(0,i.jsx)("p",{className:"text-sm text-gray-500",children:(0,i.jsx)(s.Z,{width:50,height:20})})]}),(0,i.jsx)("div",{className:"flex items-center justify-between ",children:(0,i.jsx)(s.Z,{width:77,height:24})})]})})}},8877:function(e,t,l){var s=l(4165),i=l(5861),a=l(3284),n=l(5012),r=l(9798),c=l(5929),o=(l(2791),l(9999)),d=l(2074),u=l(7834),m=l(3760),p=l(7689),x=l(8003),g=l(184);t.Z=function(e){var t,l=e.data,v=(0,x.Z)(),h=(0,u.Z)((function(e){return e})),f=(0,u.Z)((function(e){return e})).isUserValid,j=(0,m.Z)(),b=(0,p.s0)(),Z=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var i,a,n,r,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),f){e.next=5;break}return d.Am.error("Please login to add to cart"),h.onOpen("login"),e.abrupt("return");case 5:return i=d.Am.loading("Loading..."),e.prev=6,n={product_attribute_id:null===l||void 0===l||null===(a=l.product_attributes[0])||void 0===a?void 0:a.id,quantity:1},e.next=10,o.Z.addCart(n);case 10:r=e.sent,console.log("ProductCard ~ response:",r),j.addItem(r.item),d.Am.success("Item added to cart",{id:i}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),d.Am.error("Error: "+(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c?void 0:c.message),{id:i});case 19:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative",onClick:function(){b("/product/".concat(null===l||void 0===l?void 0:l.id)),window.scrollTo({top:0,behavior:"smooth"})},children:[(0,g.jsxs)("div",{className:"aspect-square rounded-xl bg-gray-100 relative",children:[l&&(0,g.jsx)("img",{src:"".concat(null===l||void 0===l?void 0:l.image),fill:"true",alt:"Product",className:"aspect-square object-cover w-full rounded-md"}),(0,g.jsx)("div",{className:"opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5",children:(0,g.jsxs)("div",{className:"flex gap-x-6 justify-center",children:[(0,g.jsx)(c.Z,{onClick:function(e){e.stopPropagation(),v.onOpen(l)},icon:(0,g.jsx)(a.Z,{size:20,className:"text-gray-600"})}),(0,g.jsx)(c.Z,{onClick:Z,icon:(0,g.jsx)(n.Z,{size:20,className:"text-gray-600"})})]})})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"font-semibold text-lg inline-block overflow-hidden text-ellipsis whitespace-nowrap w-full",children:l.title}),(0,g.jsx)("p",{className:"text-sm text-gray-500",children:null===l||void 0===l||null===(t=l.category)||void 0===t?void 0:t.title})]}),(0,g.jsx)("div",{className:"flex items-center justify-between ",children:(0,g.jsx)(r.Z,{value:null===l||void 0===l?void 0:l.price})})]})}},9730:function(e,t,l){l(2791);var s=l(184),i=[{imageUrl:"https://images.rawpixel.com/image_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y1NDZiYXRjaDMtbXludC0zMS1iYWRnZXdhdGVyY29sb3JfMS5qcGc.jpg",label:"Lorem ipsum dolor sit amet."},{imageUrl:"https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjcyMi1hdW0tMzFiXzFfMS5qcGc.jpg",label:"Lorem ipsum dolor sit amet."},{imageUrl:"https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNDczLWt3YW4tMDItYV8xXzEuanBn.jpg",label:"coming soon..."},{imageUrl:"https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg5Ny13YW4tMDFfMS5qcGc.jpg",label:"Lorem ipsum dolor sit amet."}];t.Z=function(){return(0,s.jsx)("div",{className:"p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden",children:(0,s.jsx)("div",{style:{backgroundImage:"url(".concat(i[2].imageUrl,")")},className:"rounded-xl relative aspect-video md:aspect-[2.4/1] overflow-hidden bg-cover",children:(0,s.jsx)("div",{className:"h-full w-full flex flex-col justify-center items-center text-center gap-y-8",children:(0,s.jsx)("div",{className:"font-bold text-3xl max-w-xs sm:text-5xl sm:max-w-xl lg:text-6xl sm:min-h-[18%] text-center block overflow-hidden text-ellipsis whitespace-nowrap",children:i[2].label})})})})}},1553:function(e,t,l){l.r(t),l.d(t,{default:function(){return Z}});var s=l(9439),i=l(9141),a=l(9881),n=l(6015),r=l(2791),c=l(9730),o=l(7387),d=l(2695),u=l(8877),m=l(184),p=function(e){var t=e.items;return t?(0,m.jsxs)(m.Fragment,{children:[0===t.length&&(0,m.jsx)(d.Z,{}),(0,m.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:t.length>0&&t.map((function(e){return(0,m.jsx)(u.Z,{data:e},e.id)}))})]}):null},x=l(9166),g=function(){return(0,m.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:new Array(8).fill(0).map((function(e,t){return(0,m.jsx)(x.Z,{},t)}))})},v=l(6048),h=l.n(v),f=l(763),j=l(6791),b=l(4887),Z=function(){var e,t,l,d=(0,r.useState)(1),u=(0,s.Z)(d,2),x=u[0],v=u[1],Z=(0,r.useState)(""),w=(0,s.Z)(Z,2),N=w[0],y=w[1],X=(0,b.ZP)(N?[N,{page:x}]:{page:x},N?function(e){var t=(0,s.Z)(e,2),l=t[0],i=t[1];return j.Z.getSearch(l,i)}:j.Z.getAll),k=X.data,z=X.isLoading,_=(null===k||void 0===k||null===(e=k.items)||void 0===e?void 0:e.data)||[],L=(null===k||void 0===k||null===(t=k.items)||void 0===t?void 0:t.last_page)>1?null===k||void 0===k||null===(l=k.items)||void 0===l?void 0:l.last_page:0;return(0,m.jsx)(o.Z,{children:(0,m.jsxs)("div",{className:"space-y-10 pb-10 min-h-[calc(100vh-146px)]",children:[(0,m.jsx)(c.Z,{}),(0,m.jsxs)("div",{className:"flex mb-10 px-4 sm:px-6 lg:px-8",children:[(0,m.jsx)("input",{type:"text",className:"w-full p-4 outline-none border border-gray-300 rounded-lg rounded-r-none",placeholder:"Type here to search...",defaultValue:N,onChange:(0,f.debounce)((function(e){y(e.target.value),v(1)}),500)}),(0,m.jsx)("button",{className:"p-4 bg-black rounded-lg text-white rounded-l-none",children:(0,m.jsx)(i.Z,{size:24})})]}),(0,m.jsx)("div",{className:"flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8",children:(0,m.jsxs)("div",{className:"space-y-4",children:[(0,m.jsx)("h3",{className:"font-bold text-3xl",children:"Featured Products"}),z&&(0,m.jsx)(g,{}),!z&&(0,m.jsx)(p,{items:_})]})}),(0,m.jsx)("div",{className:"mt-20",children:(0,m.jsx)(h(),{breakLabel:"...",nextLabel:(0,m.jsx)(a.Z,{size:24}),onPageChange:function(e){v(e.selected+1),window.scrollTo({top:0})},pageRangeDisplayed:3,pageCount:L,previousLabel:(0,m.jsx)(n.Z,{size:24}),renderOnZeroPageCount:null,className:"pagination"})})]})})}}}]);
//# sourceMappingURL=553.33ef6eb2.chunk.js.map
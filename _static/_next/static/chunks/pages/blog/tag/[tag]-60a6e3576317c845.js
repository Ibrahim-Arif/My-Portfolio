(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{1304:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tag/[tag]",function(){return t(6490)}])},7283:function(e,s,t){"use strict";var n=t(5893),r=(t(7294),t(1664)),a=t.n(r);s.Z=function(e){var s=e.title,t=e.href,r=e.content;return(0,n.jsx)(a(),{href:"/blog/post/".concat(t),children:(0,n.jsxs)("a",{className:"flex-1 block group py-4 text-gray-900 hover:bg-gray-50 transition-colors duration-300 p-6 -m-6 rounded",children:[(0,n.jsx)("h3",{className:"font-bold text-2xl",children:s}),(0,n.jsx)("p",{className:"mt-4 leading-6 text-lg",children:r}),(0,n.jsxs)("div",{className:"flex items-center mt-4 text-cyan-500 group-hover:text-cyan-600 font-semibold",children:[(0,n.jsx)("div",{className:"mr-2 group-hover:mr-4 transition-all duration-300",children:"Read More"}),"\xbb"]})]})})}},3209:function(e,s,t){"use strict";var n=t(5893);s.Z=function(){return(0,n.jsxs)("div",{className:"max-w-5xl mx-auto px-6 py-20 text-gray-600",children:[(0,n.jsx)("h1",{className:"text-2xl text-red-600 font-semibold mb-8",children:"Page not found"}),(0,n.jsx)("p",{className:"mb-6",children:"React Bricks cannot find a page for the specified slug."})]})}},7956:function(e,s,t){"use strict";t.d(s,{Z:function(){return i}});var n=t(5893),r=(t(7294),t(1664)),a=t.n(r),c=function(){return(0,n.jsx)("header",{className:"bg-white sm:h-20 py-5 border-b sm:sticky top-0",children:(0,n.jsx)("div",{className:"max-w-5xl mx-auto px-6",children:(0,n.jsxs)("div",{className:"w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center",children:[(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row items-center mb-4 sm:mb-0",children:[(0,n.jsx)("img",{src:"/react-bricks-logo.svg",className:"w-48",alt:"React Bricks"}),(0,n.jsxs)("div",{className:"sm:ml-8 flex space-x-5 text-center",children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("a",{className:"text-gray-500 hover:text-pink-700",children:"Home"})}),(0,n.jsx)(a(),{href:"/about-us",children:(0,n.jsx)("a",{className:"text-gray-500 hover:text-pink-700",children:"About us"})}),(0,n.jsx)(a(),{href:"/blog",children:(0,n.jsx)("a",{className:"text-gray-500 hover:text-pink-700",children:"Blog"})})]})]}),(0,n.jsx)(a(),{href:"/admin",prefetch:!1,children:(0,n.jsx)("a",{className:"py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200",children:"Edit content"})})]})})})},l=function(){return(0,n.jsx)("footer",{className:"bg-gray-50 border-t py-12 h-32",children:(0,n.jsxs)("div",{className:"max-w-5xl mx-auto flex justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsx)("img",{src:"/react-bricks-icon.svg",alt:"React Bricks",className:"w-8"}),(0,n.jsx)("div",{className:"uppercase text-sm tracking-wider",children:"Next.js website starter"})]}),(0,n.jsxs)("div",{className:"text-gray-500 text-sm",children:["\xa9 ",(new Date).getFullYear()," ",(0,n.jsx)("a",{href:"https://reactbricks.com",className:"hover:text-pink-600",children:"React Bricks"})]})]})})},i=function(e){var s=e.children;return(0,n.jsxs)("div",{className:"flex flex-col h-screen justify-between font-content antialiased",children:[(0,n.jsx)(c,{}),(0,n.jsx)("main",{className:"mb-auto",children:s}),(0,n.jsx)(l,{})]})}},6490:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return h}});var n=t(5893),r=t(4184),a=t.n(r),c=t(9008),l=t.n(c),i=t(1664),o=t.n(i),x=t(7283),d=t(3209),m=t(7956),h=!0;s.default=function(e){var s=e.filterTag,t=e.pagesByTag,r=e.popularPosts,c=e.allTags,i=e.error;return(0,n.jsxs)(m.Z,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{name:"description",content:s})]}),(0,n.jsx)("h1",{className:"text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-black tracking-tight text-gray-900 pb-4 mt-10 sm:mt-12 mb-4",children:"Blog"}),(0,n.jsxs)("div",{className:"max-w-6xl mx-auto px-8 py-16 flex space-x-24",children:[(0,n.jsxs)("section",{className:"flex-[2] space-y-8",children:[(0,n.jsx)("h2",{className:"text-pink-500 uppercase mb-8 tracking-widest font-bold",children:s}),null===t||void 0===t?void 0:t.map((function(e){return(0,n.jsx)(x.Z,{title:e.name,href:e.slug,content:e.meta.description},e.id)}))]}),(0,n.jsxs)("section",{className:"flex-1 space-y-16",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-pink-500 uppercase mb-8 tracking-widest font-bold",children:"Tags"}),(0,n.jsx)("div",{className:"flex flex-wrap items-center",children:null===c||void 0===c?void 0:c.filter((function(e){return"popular"!==e})).map((function(e){return(0,n.jsx)(o(),{href:e===s?"/blog":"/blog/tag/".concat(e),children:(0,n.jsxs)("a",{className:a()("inline-block text-sm font-bold mr-2 mb-2 transform duration-200  rounded-md px-2 py-1",e===s?"text-blue-800 bg-blue-100 hover:bg-blue-200 hover:text-blue-900":"text-cyan-800 bg-cyan-100 hover:bg-cyan-200 hover:text-cyan-900"),children:[(0,n.jsx)("div",{className:"",style:{zIndex:-1}}),e]})},e)}))})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-pink-500 uppercase mb-8 tracking-widest font-bold",children:"Most Popular"}),(0,n.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:"/blog/posts/".concat(e.slug),children:(0,n.jsx)("a",{className:"text-gray-900 hover:text-cyan-600 font-bold text-lg leading-10 transition-colors",children:e.name})})},e.id)}))})]})]})]}),"NOKEYS"===i&&(0,n.jsx)(d.Z,{})]})}},9008:function(e,s,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return s=1304,e(e.s=s);var s}));var s=e.O();_N_E=s}]);
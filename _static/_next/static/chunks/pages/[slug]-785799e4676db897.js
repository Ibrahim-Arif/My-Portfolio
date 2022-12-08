(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [219],
  {
    1587: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[slug]",
        function () {
          return t(4675);
        },
      ]);
    },
    3209: function (e, s, t) {
      "use strict";
      var r = t(5893);
      s.Z = function () {
        return (0, r.jsxs)("div", {
          className: "max-w-5xl mx-auto px-6 py-20 text-gray-600",
          children: [
            (0, r.jsx)("h1", {
              className: "text-2xl text-red-600 font-semibold mb-8",
              children: "Page not found",
            }),
            (0, r.jsx)("p", {
              className: "mb-6",
              children:
                "React Bricks cannot find a page for the specified slug.",
            }),
          ],
        });
      };
    },
    7956: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return l;
        },
      });
      var r = t(5893),
        n = (t(7294), t(1664)),
        c = t.n(n),
        a = function () {
          return (0, r.jsx)("header", {
            className: "bg-white sm:h-20 py-5 border-b sm:sticky top-0",
            children: (0, r.jsx)("div", {
              className: "max-w-5xl mx-auto px-6",
              children: (0, r.jsxs)("div", {
                className:
                  "w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col sm:flex-row items-center mb-4 sm:mb-0",
                    children: [
                      (0, r.jsx)("img", {
                        src: "/react-bricks-logo.svg",
                        className: "w-48",
                        alt: "React Bricks",
                      }),
                      (0, r.jsxs)("div", {
                        className: "sm:ml-8 flex space-x-5 text-center",
                        children: [
                          (0, r.jsx)(c(), {
                            href: "/",
                            children: (0, r.jsx)("a", {
                              className: "text-gray-500 hover:text-pink-700",
                              children: "Ibrahim-Arif",
                            }),
                          }),
                          (0, r.jsx)(c(), {
                            href: "/about-us",
                            children: (0, r.jsx)("a", {
                              className: "text-gray-500 hover:text-pink-700",
                              children: "About us",
                            }),
                          }),
                          (0, r.jsx)(c(), {
                            href: "/blog",
                            children: (0, r.jsx)("a", {
                              className: "text-gray-500 hover:text-pink-700",
                              children: "Blog",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(c(), {
                    href: "/admin",
                    prefetch: !1,
                    children: (0, r.jsx)("a", {
                      className:
                        "py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200",
                      children: "Edit content",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        i = function () {
          return (0, r.jsx)("footer", {
            className: "bg-gray-50 border-t py-12 h-32",
            children: (0, r.jsxs)("div", {
              className: "max-w-5xl mx-auto flex justify-between",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center space-x-4",
                  children: [
                    (0, r.jsx)("img", {
                      src: "/react-bricks-icon.svg",
                      alt: "React Bricks",
                      className: "w-8",
                    }),
                    (0, r.jsx)("div", {
                      className: "uppercase text-sm tracking-wider",
                      children: "Next.js website starter",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "text-gray-500 text-sm",
                  children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " ",
                    (0, r.jsx)("a", {
                      href: "https://reactbricks.com",
                      className: "hover:text-pink-600",
                      children: "React Bricks",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        l = function (e) {
          var s = e.children;
          return (0, r.jsxs)("div", {
            className:
              "flex flex-col h-screen justify-between font-content antialiased",
            children: [
              (0, r.jsx)(a, {}),
              (0, r.jsx)("main", { className: "mb-auto", children: s }),
              (0, r.jsx)(i, {}),
            ],
          });
        };
    },
    4675: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSG: function () {
            return o;
          },
        });
      var r = t(5893),
        n = t(7294),
        c = t(8490),
        a = t(9008),
        i = t.n(a),
        l = t(7956),
        x = t(3209),
        o = !0;
      s.default = function (e) {
        var s = e.page,
          t = e.error,
          a = (0, n.useContext)(c.TN),
          o = a.pageTypes,
          d = a.bricks,
          m = s ? (0, c.QO)(s, o, d) : null;
        return (0, r.jsxs)(l.Z, {
          children: [
            m &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(i(), {
                    children: [
                      (0, r.jsx)("title", { children: s.meta.title }),
                      (0, r.jsx)("meta", {
                        name: "description",
                        content: s.meta.description,
                      }),
                    ],
                  }),
                  (0, r.jsx)(c.rz, { page: m }),
                ],
              }),
            "NOPAGE" === t && (0, r.jsx)(x.Z, {}),
          ],
        });
      };
    },
    9008: function (e, s, t) {
      e.exports = t(5443);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (s = 1587), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);

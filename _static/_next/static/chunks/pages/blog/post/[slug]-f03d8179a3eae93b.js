(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [671],
  {
    2189: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog/post/[slug]",
        function () {
          return t(9981);
        },
      ]);
    },
    652: function (e, s, t) {
      "use strict";
      var r = t(5893);
      s.Z = function () {
        return (0, r.jsxs)("div", {
          className: "max-w-5xl mx-auto px-6 py-20 text-gray-600",
          children: [
            (0, r.jsx)("h1", {
              className: "text-2xl text-red-600 font-semibold mb-8",
              children: "Warning: missing App credentials",
            }),
            (0, r.jsxs)("p", {
              className: "mb-6",
              children: [
                (0, r.jsx)("code", {
                  className: "text-sm text-black bg-gray-100 px-1 py-1 rounded",
                  children: "NEXT_PUBLIC_APP_ID",
                }),
                " ",
                "and",
                " ",
                (0, r.jsx)("code", {
                  className: "text-sm text-black bg-gray-100 px-1 py-1 rounded",
                  children: "API_KEY",
                }),
                " ",
                "are not configured in your",
                " ",
                (0, r.jsx)("code", {
                  className: "text-sm text-black bg-gray-100 px-1 py-1 rounded",
                  children: ".env.local",
                }),
                " ",
                "file.",
              ],
            }),
            (0, r.jsxs)("p", {
              className: "mb-2",
              children: [
                "Please create a",
                " ",
                (0, r.jsx)("code", {
                  className: "text-sm text-black bg-gray-100 px-1 py-1 rounded",
                  children: ".env.local",
                }),
                " ",
                "file with:",
              ],
            }),
            (0, r.jsx)("pre", {
              className: "bg-gray-900 text-white px-4 py-3 rounded",
              children: "NEXT_PUBLIC_APP_ID=...\nAPI_KEY=...",
            }),
          ],
        });
      };
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
        a = (t(7294), t(1664)),
        n = t.n(a),
        c = function () {
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
                          (0, r.jsx)(n(), {
                            href: "/",
                            children: (0, r.jsx)("a", {
                              className: "text-gray-500 hover:text-pink-700",
                              children: "Ibrahim-Arif",
                            }),
                          }),
                          (0, r.jsx)(n(), {
                            href: "/about-us",
                            children: (0, r.jsx)("a", {
                              className: "text-gray-500 hover:text-pink-700",
                              children: "About us",
                            }),
                          }),
                          (0, r.jsx)(n(), {
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
                  (0, r.jsx)(n(), {
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
              (0, r.jsx)(c, {}),
              (0, r.jsx)("main", { className: "mb-auto", children: s }),
              (0, r.jsx)(i, {}),
            ],
          });
        };
    },
    9981: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSG: function () {
            return o;
          },
        });
      var r = t(5893),
        a = t(9008),
        n = t.n(a),
        c = t(7294),
        i = t(8490),
        l = t(652),
        x = t(3209),
        d = t(7956),
        o = !0;
      s.default = function (e) {
        var s = e.page,
          t = e.error,
          a = (0, c.useContext)(i.TN),
          o = a.pageTypes,
          m = a.bricks,
          h = s ? (0, i.QO)(s, o, m) : null;
        return (0, r.jsxs)(d.Z, {
          children: [
            h &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(n(), {
                    children: [
                      (0, r.jsx)("title", { children: s.meta.title }),
                      (0, r.jsx)("meta", {
                        name: "description",
                        content: s.meta.description,
                      }),
                    ],
                  }),
                  (0, r.jsx)(i.rz, { page: h }),
                ],
              }),
            "NOKEYS" === t && (0, r.jsx)(l.Z, {}),
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
      return (s = 2189), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!(function (e, r) {
  "function" == typeof define && define.amd
    ? define(["ScrollMagic"], r)
    : "object" == typeof exports
    ? r(require("scrollmagic"))
    : r(e.ScrollMagic || (e.jQuery && e.jQuery.ScrollMagic));
})(this, function (i) {
  "use strict";
  var o = "0.85em",
    n = "9999",
    v = i._util,
    h = 0;
  i.Scene.extend(function () {
    var t,
      i = this;
    (i.addIndicators = function (e) {
      if (!t) {
        var r = {
          name: "",
          indent: 0,
          parent: void 0,
          colorStart: "green",
          colorEnd: "red",
          colorTrigger: "blue",
        };
        (e = v.extend({}, r, e)),
          h++,
          (t = new s(i, e)),
          i.on("add.plugin_addIndicators", t.add),
          i.on("remove.plugin_addIndicators", t.remove),
          i.on("destroy.plugin_addIndicators", i.removeIndicators),
          i.controller() && t.add();
      }
      return i;
    }),
      (i.removeIndicators = function () {
        return (
          t && (t.remove(), this.off("*.plugin_addIndicators"), (t = void 0)), i
        );
      });
  }),
    i.Controller.addOption("addIndicators", !1),
    i.Controller.extend(function () {
      var c = this,
        e = c.info(),
        l = e.container,
        f = e.isDocument,
        m = e.vertical,
        h = { groups: [] };
      this._indicators = h;
      var r = function () {
          h.updateBoundsPositions();
        },
        t = function () {
          h.updateTriggerGroupPositions();
        };
      return (
        l.addEventListener("resize", t),
        f ||
          (window.addEventListener("resize", t),
          window.addEventListener("scroll", t)),
        l.addEventListener("resize", r),
        l.addEventListener("scroll", r),
        (this._indicators.updateBoundsPositions = function (e) {
          for (
            var r,
              t,
              i,
              o = e
                ? [v.extend({}, e.triggerGroup, { members: [e] })]
                : h.groups,
              n = o.length,
              s = {},
              d = m ? "left" : "top",
              a = m ? "width" : "height",
              g = m
                ? v.get.scrollLeft(l) + v.get.width(l) - 15
                : v.get.scrollTop(l) + v.get.height(l) - 15;
            n--;

          )
            for (
              r = (i = o[n]).members.length, t = v.get[a](i.element.firstChild);
              r--;

            )
              (s[d] = g - t), v.css(i.members[r].bounds, s);
        }),
        (this._indicators.updateTriggerGroupPositions = function (e) {
          for (
            var r,
              t,
              i,
              o,
              n = e ? [e] : h.groups,
              s = n.length,
              d = f ? document.body : l,
              a = f ? { top: 0, left: 0 } : v.get.offset(d, !0),
              g = m ? v.get.width(l) - 15 : v.get.height(l) - 15,
              p = m ? "width" : "height",
              u = m ? "Y" : "X";
            s--;

          )
            (t = (r = n[s]).element),
              (i = r.triggerHook * c.info("size")),
              (o =
                v.get[p](t.firstChild.firstChild) < i
                  ? "translate" + u + "(-100%)"
                  : ""),
              v.css(t, {
                top: a.top + (m ? i : g - r.members[0].options.indent),
                left: a.left + (m ? g - r.members[0].options.indent : i),
              }),
              v.css(t.firstChild.firstChild, {
                "-ms-transform": o,
                "-webkit-transform": o,
                transform: o,
              });
        }),
        (this._indicators.updateTriggerGroupLabel = function (e) {
          var r =
              "trigger" +
              (1 < e.members.length ? "" : " " + e.members[0].options.name),
            t = e.element.firstChild.firstChild;
          t.textContent !== r &&
            ((t.textContent = r), m && h.updateBoundsPositions());
        }),
        (this.addScene = function (e) {
          this._options.addIndicators &&
            e instanceof i.Scene &&
            e.controller() === c &&
            e.addIndicators(),
            this.$super.addScene.apply(this, arguments);
        }),
        (this.destroy = function () {
          l.removeEventListener("resize", t),
            f ||
              (window.removeEventListener("resize", t),
              window.removeEventListener("scroll", t)),
            l.removeEventListener("resize", r),
            l.removeEventListener("scroll", r),
            this.$super.destroy.apply(this, arguments);
        }),
        c
      );
    });
  var s = function (o, n) {
      var s,
        d,
        a = this,
        t = b.bounds(),
        i = b.start(n.colorStart),
        g = b.end(n.colorEnd),
        p = n.parent && v.get.elements(n.parent)[0];
      (n.name = n.name || h),
        (i.firstChild.textContent += " " + n.name),
        (g.textContent += " " + n.name),
        t.appendChild(i),
        t.appendChild(g),
        (a.options = n),
        (a.bounds = t),
        (a.triggerGroup = void 0),
        (this.add = function () {
          (d = o.controller()), (s = d.info("vertical"));
          var e = d.info("isDocument");
          p || (p = e ? document.body : d.info("container")),
            e ||
              "static" !== v.css(p, "position") ||
              v.css(p, { position: "relative" }),
            o.on("change.plugin_addIndicators", u),
            o.on("shift.plugin_addIndicators", r),
            m(),
            l(),
            setTimeout(function () {
              d._indicators.updateBoundsPositions(a);
            }, 0);
        }),
        (this.remove = function () {
          if (a.triggerGroup) {
            if (
              (o.off("change.plugin_addIndicators", u),
              o.off("shift.plugin_addIndicators", r),
              1 < a.triggerGroup.members.length)
            ) {
              var e = a.triggerGroup;
              e.members.splice(e.members.indexOf(a), 1),
                d._indicators.updateTriggerGroupLabel(e),
                d._indicators.updateTriggerGroupPositions(e),
                (a.triggerGroup = void 0);
            } else f();
            c();
          }
        });
      var r = function () {
          l();
        },
        u = function (e) {
          "triggerHook" === e.what && m();
        },
        c = function () {
          t.parentNode.removeChild(t);
        },
        l = function () {
          var e;
          t.parentNode !== p &&
            ((e = d.info("vertical")),
            v.css(i.firstChild, {
              "border-bottom-width": e ? 1 : 0,
              "border-right-width": e ? 0 : 1,
              bottom: e ? -1 : n.indent,
              right: e ? n.indent : -1,
              padding: e ? "0 8px" : "2px 4px",
            }),
            v.css(g, {
              "border-top-width": e ? 1 : 0,
              "border-left-width": e ? 0 : 1,
              top: e ? "100%" : "",
              right: e ? n.indent : "",
              bottom: e ? "" : n.indent,
              left: e ? "" : "100%",
              padding: e ? "0 8px" : "2px 4px",
            }),
            p.appendChild(t));
          var r = {};
          (r[s ? "top" : "left"] = o.triggerPosition()),
            (r[s ? "height" : "width"] = o.duration()),
            v.css(t, r),
            v.css(g, { display: 0 < o.duration() ? "" : "none" });
        },
        f = function () {
          d._indicators.groups.splice(
            d._indicators.groups.indexOf(a.triggerGroup),
            1
          ),
            a.triggerGroup.element.parentNode.removeChild(
              a.triggerGroup.element
            ),
            (a.triggerGroup = void 0);
        },
        m = function () {
          var e = o.triggerHook();
          if (
            !(a.triggerGroup && Math.abs(a.triggerGroup.triggerHook - e) < 1e-4)
          ) {
            for (var r, t = d._indicators.groups, i = t.length; i--; )
              if (((r = t[i]), Math.abs(r.triggerHook - e) < 1e-4))
                return (
                  a.triggerGroup &&
                    (1 === a.triggerGroup.members.length
                      ? f()
                      : (a.triggerGroup.members.splice(
                          a.triggerGroup.members.indexOf(a),
                          1
                        ),
                        d._indicators.updateTriggerGroupLabel(a.triggerGroup),
                        d._indicators.updateTriggerGroupPositions(
                          a.triggerGroup
                        ))),
                  r.members.push(a),
                  (a.triggerGroup = r),
                  void d._indicators.updateTriggerGroupLabel(r)
                );
            if (a.triggerGroup) {
              if (1 === a.triggerGroup.members.length)
                return (
                  (a.triggerGroup.triggerHook = e),
                  void d._indicators.updateTriggerGroupPositions(a.triggerGroup)
                );
              a.triggerGroup.members.splice(
                a.triggerGroup.members.indexOf(a),
                1
              ),
                d._indicators.updateTriggerGroupLabel(a.triggerGroup),
                d._indicators.updateTriggerGroupPositions(a.triggerGroup),
                (a.triggerGroup = void 0);
            }
            !(function () {
              var e = b.trigger(n.colorTrigger),
                r = {};
              (r[s ? "right" : "bottom"] = 0),
                (r[s ? "border-top-width" : "border-left-width"] = 1),
                v.css(e.firstChild, r),
                v.css(e.firstChild.firstChild, {
                  padding: s ? "0 8px 3px 8px" : "3px 4px",
                }),
                document.body.appendChild(e);
              var t = {
                triggerHook: o.triggerHook(),
                element: e,
                members: [a],
              };
              d._indicators.groups.push(t),
                (a.triggerGroup = t),
                d._indicators.updateTriggerGroupLabel(t),
                d._indicators.updateTriggerGroupPositions(t);
            })();
          }
        };
    },
    b = {
      start: function (e) {
        var r = document.createElement("div");
        (r.textContent = "start"),
          v.css(r, {
            position: "absolute",
            overflow: "visible",
            "border-width": 0,
            "border-style": "solid",
            color: e,
            "border-color": e,
          });
        var t = document.createElement("div");
        return (
          v.css(t, {
            position: "absolute",
            overflow: "visible",
            width: 0,
            height: 0,
          }),
          t.appendChild(r),
          t
        );
      },
      end: function (e) {
        var r = document.createElement("div");
        return (
          (r.textContent = "end"),
          v.css(r, {
            position: "absolute",
            overflow: "visible",
            "border-width": 0,
            "border-style": "solid",
            color: e,
            "border-color": e,
          }),
          r
        );
      },
      bounds: function () {
        var e = document.createElement("div");
        return (
          v.css(e, {
            position: "absolute",
            overflow: "visible",
            "white-space": "nowrap",
            "pointer-events": "none",
            "font-size": o,
          }),
          (e.style.zIndex = n),
          e
        );
      },
      trigger: function (e) {
        var r = document.createElement("div");
        (r.textContent = "trigger"), v.css(r, { position: "relative" });
        var t = document.createElement("div");
        v.css(t, {
          position: "absolute",
          overflow: "visible",
          "border-width": 0,
          "border-style": "solid",
          color: e,
          "border-color": e,
        }),
          t.appendChild(r);
        var i = document.createElement("div");
        return (
          v.css(i, {
            position: "fixed",
            overflow: "visible",
            "white-space": "nowrap",
            "pointer-events": "none",
            "font-size": o,
          }),
          (i.style.zIndex = n),
          i.appendChild(t),
          i
        );
      },
    };
});

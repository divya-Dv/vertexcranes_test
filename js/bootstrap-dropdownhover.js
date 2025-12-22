!(function (t) {
  "use strict";
  var o = function (o, e) {
    (this.options = e), (this.$element = t(o));
    var n = this;
    (this.dropdowns = this.$element.hasClass("dropdown-toggle")
      ? this.$element.parent().find(".dropdown-menu").parent(".dropdown")
      : this.$element.find(".dropdown")),
      e.onClick
        ? this.dropdowns.each(function () {
            t(this)
              .children("a, button")
              .on("click.bs.dropdownhover", function (o) {
                t(this).parent().hasClass("open")
                  ? n.hide(t(this))
                  : n.show(t(this));
              });
          })
        : (this.dropdowns.each(function () {
            t(this).on("mouseenter.bs.dropdownhover", function (o) {
              n.show(t(this).children("a, button"));
            });
          }),
          this.dropdowns.each(function () {
            t(this).on("mouseleave.bs.dropdownhover", function (o) {
              n.hide(t(this).children("a, button"));
            });
          }));
  };
  function e(o) {
    (o && 3 === o.which) ||
      (t(".dropdown-backdrop").remove(),
      t('[data-hover="dropdown"]').each(function () {
        var e = t(this),
          n = (function (o) {
            var e = o.attr("data-target");
            e ||
              (e =
                (e = o.attr("href")) &&
                /#[A-Za-z]/.test(e) &&
                e.replace(/.*(?=#[^\s]*$)/, ""));
            var n = e && t(document).find(e);
            return n && n.length ? n : o.parent();
          })(e),
          a = { relatedTarget: this };
        n.hasClass("open") &&
          ((o &&
            "click" == o.type &&
            /input|textarea/i.test(o.target.tagName) &&
            t.contains(n[0], o.target)) ||
            (n.trigger((o = t.Event("hide.bs.dropdownhover", a))),
            o.isDefaultPrevented() ||
              (e.attr("aria-expanded", "false"),
              n
                .removeClass("open")
                .trigger(t.Event("hidden.bs.dropdownhover", a)))));
      }));
  }
  function n(e) {
    return this.each(function () {
      var n = t(this),
        a = n.data("bs.dropdownhover"),
        r = n.data();
      void 0 !== n.data("animations") &&
        null !== n.data("animations") &&
        (r.animations = t.isArray(r.animations)
          ? r.animations
          : r.animations.split(" "));
      var i = t.extend({}, o.DEFAULTS, r, "object" == typeof e && e);
      a || n.data("bs.dropdownhover", (a = new o(this, i)));
    });
  }
  (o.TRANSITION_DURATION = 300),
    (o.DELAY = 150),
    (o.DEFAULTS = {
      onClick: !1,
      animations: ["fadeInDown", "fadeInRight", "fadeInUp", "fadeInLeft"],
    }),
    (o.prototype.show = function (n) {
      var a = t(n);
      window.clearTimeout(o.TIMEOUT),
        t(".dropdown")
          .not(a.parents())
          .each(function () {
            t(this).removeClass("open");
          });
      var r = this.options.animations[0];
      if (!a.is(".disabled, :disabled")) {
        var i = a.parent();
        if (!i.hasClass("open")) {
          "ontouchstart" in document.documentElement &&
            !i.closest(".navbar-nav").length &&
            t(document.createElement("div"))
              .addClass("dropdown-backdrop")
              .insertAfter(t(this))
              .on("click", e);
          var s = a.next(".dropdown-menu");
          switch (
            (i.addClass("open"),
            a.attr("aria-expanded", !0),
            i.siblings().each(function () {
              t(this).hasClass("open") ||
                t(this)
                  .find('[data-hover="dropdown"]')
                  .attr("aria-expanded", !1);
            }),
            this.position(s))
          ) {
            case "top":
              r = this.options.animations[2];
              break;
            case "right":
              r = this.options.animations[3];
              break;
            case "left":
              r = this.options.animations[1];
              break;
            default:
              r = this.options.animations[0];
          }
          s.addClass("animated " + r),
            t.support.transition && s.hasClass("animated")
              ? s
                  .one("bsTransitionEnd", function () {
                    s.removeClass("animated " + r);
                  })
                  .emulateTransitionEnd(o.TRANSITION_DURATION)
              : s.removeClass("animated " + r);
        }
        return !1;
      }
    }),
    (o.prototype.hide = function (e) {
      var n = t(e),
        a = n.parent(),
        r = n.data("dropdown-hover-delay");
      o.TIMEOUT = window.setTimeout(function () {
        a.removeClass("open"), n.attr("aria-expanded", !1);
      }, r || o.DELAY);
    }),
    (o.prototype.position = function (o) {
      var e = t(window);
      o.css({ bottom: "", left: "", top: "", right: "" }).removeClass(
        "dropdownhover-top"
      );
      var n = { top: e.scrollTop(), left: e.scrollLeft() };
      (n.right = n.left + e.width()), (n.bottom = n.top + e.height());
      var a = o.offset();
      (a.right = a.left + o.outerWidth()), (a.bottom = a.top + o.outerHeight());
      var r = o.position();
      (r.right = a.left + o.outerWidth()), (r.bottom = a.top + o.outerHeight());
      var i = "";
      if (o.parents(".dropdown-menu").length)
        r.left < 0
          ? ((i = "left"),
            o.removeClass("dropdownhover-right").addClass("dropdownhover-left"))
          : ((i = "right"),
            o
              .addClass("dropdownhover-right")
              .removeClass("dropdownhover-left")),
          a.left < n.left
            ? ((i = "right"),
              o
                .css({ left: "100%", right: "auto" })
                .addClass("dropdownhover-right")
                .removeClass("dropdownhover-left"))
            : a.right > n.right &&
              ((i = "left"),
              o
                .css({ left: "auto", right: "100%" })
                .removeClass("dropdownhover-right")
                .addClass("dropdownhover-left")),
          a.bottom > n.bottom
            ? o.css({ bottom: "auto", top: -(a.bottom - n.bottom) })
            : a.top < n.top && o.css({ bottom: -(n.top - a.top), top: "auto" });
      else {
        var s = o.parent(".dropdown"),
          d = s.offset();
        (d.right = d.left + s.outerWidth()),
          (d.bottom = d.top + s.outerHeight()),
          a.right > n.right &&
            o.css({ left: -(a.right - n.right), right: "auto" }),
          (a.bottom > n.bottom && d.top - n.top > n.bottom - d.bottom) ||
          o.position().top < 0
            ? ((i = "top"),
              o
                .css({ bottom: "100%", top: "auto" })
                .addClass("dropdownhover-top")
                .removeClass("dropdownhover-bottom"))
            : ((i = "bottom"), o.addClass("dropdownhover-bottom"));
      }
      return i;
    });
  var a = t.fn.dropdownhover;
  (t.fn.dropdownhover = n),
    (t.fn.dropdownhover.Constructor = o),
    (t.fn.dropdownhover.noConflict = function () {
      return (t.fn.dropdownhover = a), this;
    }),
    t(document).ready(function () {
      t('[data-hover="dropdown"]').each(function () {
        var o = t(this);
        "ontouchstart" in document.documentElement
          ? n.call(o, t.extend({}, o.data(), { onClick: !0 }))
          : n.call(o, o.data());
      });
    });
})(jQuery);

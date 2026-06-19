function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
function SiteHeader(_ref) {
  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? 'home' : _ref$active;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    scrolled = _useState2[0],
    setScrolled = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    mobileOpen = _useState4[0],
    setMobileOpen = _useState4[1];
  useEffect(function () {
    var onScroll = function onScroll() {
      return setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
  var navItems = [{
    key: 'pricing',
    label: 'Pricing',
    href: 'pricing.html'
  }, {
    key: 'about',
    label: 'About',
    href: 'about.html'
  }, {
    key: 'contact',
    label: 'Contact',
    href: 'contact.html'
  }];
  return React.createElement("header", {
    className: "site-header",
    style: {
      boxShadow: scrolled ? '0 1px 0 rgba(0,31,84,0.06)' : 'none'
    }
  }, React.createElement("div", {
    className: "container site-header-inner"
  }, React.createElement("a", {
    href: "index.html",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("img", {
    src: "assets/logo.svg",
    alt: "Lutra Health",
    style: {
      height: 38
    }
  })), React.createElement("nav", {
    className: "site-nav"
  }, navItems.map(function (n) {
    return React.createElement("a", {
      key: n.key,
      href: n.href,
      className: active === n.key ? 'active' : ''
    }, n.label);
  })), React.createElement("div", {
    className: "header-ctas"
  }, React.createElement("a", {
    className: "btn btn-ghost btn-sm",
    href: "https://www.lutraconnect.com/app/",
    style: {
      border: 'none'
    }
  }, "Log in"), React.createElement("a", {
    className: "btn btn-primary btn-sm",
    href: "https://www.lutraconnect.com/app/"
  }, "Get started", React.createElement("span", {
    style: {
      marginLeft: 2
    }
  }, "→")), React.createElement("button", {
    "aria-label": "Menu",
    onClick: function onClick() {
      return setMobileOpen(function (o) {
        return !o;
      });
    },
    style: {
      display: 'none',
      background: 'transparent',
      border: '1px solid var(--border-2)',
      borderRadius: 10,
      padding: 8,
      cursor: 'pointer'
    },
    className: "mobile-menu-btn"
  }, React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  }))))), mobileOpen && React.createElement("div", {
    className: "container",
    style: {
      paddingBottom: 16,
      display: 'none'
    }
  }), React.createElement("style", null, "\n        @media (max-width: 860px) {\n          .mobile-menu-btn { display: inline-flex !important; }\n          .site-header .header-ctas .btn-ghost { display: none; }\n        }\n      "));
}
function SiteFooter() {
  return React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "footer-grid"
  }, React.createElement("div", null, React.createElement("img", {
    src: "assets/logo-white.svg",
    alt: "Lutra Health",
    style: {
      height: 34,
      marginBottom: 18
    }
  }), React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.65)',
      fontSize: 14,
      maxWidth: 320,
      lineHeight: 1.55,
      marginBottom: 20
    }
  }, "Lutra is the connective layer between optometry and ophthalmology. Secure, structured, two-way, and auditable."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement("a", {
    href: "https://www.linkedin.com/company/lutra-health/",
    target: "_blank",
    rel: "noopener",
    "aria-label": "LinkedIn",
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'rgba(255,255,255,0.08)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.2 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V22H7.42V8z"
  }))))), React.createElement("div", null, React.createElement("h5", null, "Company"), React.createElement("a", {
    href: "about.html"
  }, "About"), React.createElement("a", {
    href: "contact.html"
  }, "Contact")), React.createElement("div", null, React.createElement("h5", null, "Resources"), React.createElement("a", {
    href: "case-studies.html"
  }, "Case studies"), React.createElement("a", {
    href: "https://lutrahealth.featurebase.app/help",
    target: "_blank",
    rel: "noopener"
  }, "Guides"), React.createElement("a", {
    href: "https://lutrahealth.featurebase.app/changelog",
    target: "_blank",
    rel: "noopener"
  }, "Changelog")), React.createElement("div", null, React.createElement("h5", null, "Legal"), React.createElement("a", {
    href: "https://26315650.fs1.hubspotusercontent-eu1.net/hubfs/26315650/Lutra%20Health%20Privacy%20Notice.pdf",
    target: "_blank",
    rel: "noopener"
  }, "Privacy"), React.createElement("a", {
    href: "https://26315650.fs1.hubspotusercontent-eu1.net/hubfs/26315650/Lutra%20Health%20Platform%20Licence%20Agreement.pdf",
    target: "_blank",
    rel: "noopener"
  }, "Terms"), React.createElement("a", {
    href: "https://26315650.fs1.hubspotusercontent-eu1.net/hubfs/26315650/Lutra%20Health%20Data%20Processing%20Agreement%20(DPA).pdf",
    target: "_blank",
    rel: "noopener"
  }, "DPA"))), React.createElement("div", {
    className: "footer-bottom"
  }, React.createElement("div", null, "\xA9 2026 Lutra Health Ltd. Registered in England & Wales."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--lutra-teal)',
      boxShadow: '0 0 12px var(--lutra-teal)'
    }
  }), "All systems operational")))));
}
function useReveal() {
  useEffect(function () {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) {
        return el.classList.add('in');
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    els.forEach(function (el) {
      return io.observe(el);
    });
    return function () {
      return io.disconnect();
    };
  }, []);
}
function EyeMark(_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 20 : _ref2$size,
    color = _ref2.color;
  var c = color || 'var(--lutra-blue)';
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    "aria-hidden": "true"
  }, React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "19",
    stroke: c,
    strokeWidth: "1.5"
  }), React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "10",
    fill: c
  }), React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "3",
    fill: "#fff"
  }));
}
function LutraConnectLockup(_ref3) {
  var _ref3$height = _ref3.height,
    height = _ref3$height === void 0 ? 32 : _ref3$height,
    _ref3$onDark = _ref3.onDark,
    onDark = _ref3$onDark === void 0 ? false : _ref3$onDark;
  var src = onDark ? 'assets/logo-connect-white.svg' : 'assets/logo-connect-navy.svg';
  return React.createElement("img", {
    src: src,
    alt: "Lutra Connect",
    style: {
      height: height,
      width: 'auto',
      display: 'block'
    }
  });
}
function PartnerRow(_ref4) {
  var _ref4$inverse = _ref4.inverse,
    inverse = _ref4$inverse === void 0 ? false : _ref4$inverse;
  var partners = [{
    name: 'Accord Eye Care',
    src: 'assets/partners/accord.svg',
    h: 56
  }, {
    name: 'Exeter Eye',
    src: 'assets/partners/exeter-eye.png',
    h: 40
  }, {
    name: 'Devon Eyes',
    src: 'assets/partners/devon-eyes.png',
    h: 36
  }, {
    name: 'Angus Optix',
    src: 'assets/partners/angus-optix.png',
    h: 42
  }, {
    name: 'PLM Optometrists',
    src: 'assets/partners/plm.png',
    h: 30
  }, {
    name: 'Brian Davidson Optician',
    src: 'assets/partners/brian-davidson.png',
    h: 64
  }, {
    name: 'David Robinson Eyecare',
    src: 'assets/partners/david-robinson.png',
    h: 48
  }, {
    name: 'Jarvis Eyecare',
    src: 'assets/partners/jarvis.png',
    h: 26
  }, {
    name: 'McConnachie Eyecare',
    src: 'assets/partners/mcconnachie.webp',
    h: 44
  }, {
    name: 'Peter Tosh Opticians',
    src: 'assets/partners/peter-tosh.png',
    h: 22
  }, {
    name: 'Shore Sight Opticians',
    src: 'assets/partners/shore-sight.png',
    h: 44
  }];
  var loop = [].concat(partners, partners);
  var dividerCol = inverse ? 'rgba(255,255,255,0.10)' : 'var(--border-1)';
  var fadeColour = inverse ? '0,31,84' : '255,255,255';
  return React.createElement("div", {
    className: "partner-carousel-wrap",
    style: {
      width: '100%',
      position: 'relative'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 120,
      pointerEvents: 'none',
      zIndex: 2,
      background: "linear-gradient(to right, rgba(".concat(fadeColour, ",1), rgba(").concat(fadeColour, ",0))")
    }
  }), React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: 120,
      pointerEvents: 'none',
      zIndex: 2,
      background: "linear-gradient(to left, rgba(".concat(fadeColour, ",1), rgba(").concat(fadeColour, ",0))")
    }
  }), React.createElement("div", {
    className: "partner-carousel",
    style: {
      display: 'flex',
      gap: 0,
      animation: 'partner-marquee 48s linear infinite',
      width: 'max-content'
    }
  }, loop.map(function (p, i) {
    return React.createElement("div", {
      key: i,
      title: p.name,
      style: {
        padding: '0 40px',
        minWidth: 200,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: i === 0 ? 'none' : "1px solid ".concat(dividerCol),
        flexShrink: 0
      }
    }, React.createElement("img", {
      src: p.src,
      alt: p.name,
      style: {
        height: p.h,
        width: 'auto',
        maxWidth: 180,
        objectFit: 'contain',
        filter: inverse ? 'brightness(0) invert(1)' : 'none',
        opacity: inverse ? 0.85 : 0.85
      }
    }));
  })), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 24,
      marginBottom: 0,
      fontSize: 12,
      color: inverse ? 'rgba(255,255,255,0.55)' : 'var(--fg-3)',
      fontStyle: 'italic',
      maxWidth: 720,
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.5
    }
  }, "Individual clinicians from these organisations use Lutra. Not institutional endorsements."), React.createElement("style", null, "\n        @keyframes partner-marquee {\n          from { transform: translateX(0); }\n          to   { transform: translateX(-50%); }\n        }\n        .partner-carousel-wrap:hover .partner-carousel { animation-play-state: paused; }\n        @media (prefers-reduced-motion: reduce) {\n          .partner-carousel { animation: none !important; }\n        }\n      "));
}
Object.assign(window, {
  SiteHeader: SiteHeader,
  SiteFooter: SiteFooter,
  useReveal: useReveal,
  EyeMark: EyeMark,
  PartnerRow: PartnerRow,
  LutraConnectLockup: LutraConnectLockup
});

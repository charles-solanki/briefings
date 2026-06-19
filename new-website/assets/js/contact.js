function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Placeholder(_ref) {
  var children = _ref.children;
  return React.createElement("mark", {
    style: {
      background: '#fff3cf',
      color: '#7a5b00',
      border: '1px dashed #d9b54a',
      borderRadius: 6,
      padding: '1px 7px',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: '0.82em',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
      whiteSpace: 'normal'
    }
  }, children);
}
var HS_PORTAL_ID = '26315650';
var HS_REGION = 'eu1';
var HS_FORM_ID = '';
function HubSpotForm() {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    mounted = _React$useState2[0],
    setMounted = _React$useState2[1];
  React.useEffect(function () {
    if (!HS_FORM_ID) return;
    var existing = document.getElementById('hs-forms-embed-script');
    var create = function create() {
      if (window.hbspt && window.hbspt.forms) {
        window.hbspt.forms.create({
          region: HS_REGION,
          portalId: HS_PORTAL_ID,
          formId: HS_FORM_ID,
          target: '#hs-form-target'
        });
        setMounted(true);
      }
    };
    if (existing) {
      create();
      return;
    }
    var s = document.createElement('script');
    s.id = 'hs-forms-embed-script';
    s.src = "https://js-".concat(HS_REGION, ".hsforms.net/forms/embed/v2.js");
    s.charset = 'utf-8';
    s.async = true;
    s.onload = create;
    document.body.appendChild(s);
  }, []);
  return React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, React.createElement("div", {
    style: {
      padding: '22px 28px',
      borderBottom: '1px solid var(--border-1)',
      background: 'var(--bg-2)'
    }
  }, React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--lutra-navy)',
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Send us a message"), React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      color: 'var(--fg-3)'
    }
  }, "We typically reply within one working day.")), React.createElement("div", {
    style: {
      padding: 28
    }
  }, React.createElement("div", {
    id: "hs-form-target"
  }), !mounted && React.createElement(HubSpotFallbackForm, null)));
}
function HubSpotFallbackForm() {
  var field = {
    width: '100%',
    padding: '12px 14px',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--fg-1)',
    background: '#fff',
    border: '1px solid var(--border-2)',
    borderRadius: 10,
    outline: 'none'
  };
  var label = {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 13,
    color: 'var(--lutra-navy)',
    marginBottom: 7,
    letterSpacing: '-0.01em'
  };
  var onSubmit = function onSubmit(e) {
    return e.preventDefault();
  };
  return React.createElement("form", {
    onSubmit: onSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: label
  }, "First name"), React.createElement("input", {
    style: field,
    type: "text",
    placeholder: "Jane",
    disabled: true
  })), React.createElement("div", null, React.createElement("label", {
    style: label
  }, "Last name"), React.createElement("input", {
    style: field,
    type: "text",
    placeholder: "Doe",
    disabled: true
  }))), React.createElement("div", null, React.createElement("label", {
    style: label
  }, "Work email"), React.createElement("input", {
    style: field,
    type: "email",
    placeholder: "jane@practice.co.uk",
    disabled: true
  })), React.createElement("div", null, React.createElement("label", {
    style: label
  }, "Organisation"), React.createElement("input", {
    style: field,
    type: "text",
    placeholder: "Practice or trust name",
    disabled: true
  })), React.createElement("div", null, React.createElement("label", {
    style: label
  }, "I am a…"), React.createElement("select", {
    style: _objectSpread(_objectSpread({}, field), {}, {
      appearance: 'none',
      cursor: 'not-allowed'
    }),
    disabled: true,
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Select an option"), React.createElement("option", null, "Optometrist / practice"), React.createElement("option", null, "Ophthalmologist / consultant"), React.createElement("option", null, "NHS trust or ICB"), React.createElement("option", null, "Other"))), React.createElement("div", null, React.createElement("label", {
    style: label
  }, "How can we help?"), React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, field), {}, {
      minHeight: 120,
      resize: 'vertical'
    }),
    placeholder: "Tell us a little about what you're looking for.",
    disabled: true
  })), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-lg",
    style: {
      alignSelf: 'flex-start',
      opacity: 0.6,
      cursor: 'not-allowed'
    },
    disabled: true
  }, "Send message", React.createElement("span", null, "→")));
}
function ContactIcon(_ref2) {
  var kind = _ref2.kind;
  var common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  if (kind === 'phone') return React.createElement("svg", common, React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
  }));
  if (kind === 'email') return React.createElement("svg", common, React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), React.createElement("path", {
    d: "m22 7-10 6L2 7"
  }));
  if (kind === 'address') return React.createElement("svg", common, React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
  return null;
}
function ContactDetail(_ref3) {
  var kind = _ref3.kind,
    title = _ref3.title,
    children = _ref3.children;
  return React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--lutra-blue-100)',
      color: 'var(--lutra-blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(ContactIcon, {
    kind: kind
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      marginBottom: 6
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--fg-1)'
    }
  }, children)));
}
function ContactPage() {
  useReveal();
  return React.createElement(React.Fragment, null, React.createElement(SiteHeader, {
    active: "contact"
  }), React.createElement("main", null, React.createElement("section", {
    style: {
      padding: '112px 0 56px',
      background: 'var(--bg-1)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(50% 60% at 82% 0%, rgba(44,72,237,0.08), transparent 70%)'
    }
  }), React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      maxWidth: 820
    }
  }, React.createElement("span", {
    className: "eyebrow no-line"
  }, "Contact"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 5.4vw, 72px)',
      letterSpacing: '-0.035em',
      lineHeight: 1.03,
      color: 'var(--lutra-navy)',
      margin: '20px 0 24px'
    }
  }, "Let's talk."), React.createElement("p", {
    style: {
      fontSize: 21,
      color: 'var(--fg-2)',
      lineHeight: 1.5,
      maxWidth: 660
    }
  }, "Whether you're an optometrist or ophthalmologist who wants to try Lutra Connect, or an organisation exploring a partnership, we'd love to hear from you."))), React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 32,
      background: 'var(--bg-1)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "contact-grid reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 56,
      alignItems: 'start'
    }
  }, React.createElement("div", null, React.createElement("span", {
    className: "eyebrow"
  }, "Reach us directly"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px, 3vw, 38px)',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.12,
      margin: '14px 0 32px',
      color: 'var(--lutra-navy)'
    }
  }, "Contact details."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, React.createElement(ContactDetail, {
    kind: "phone",
    title: "Phone"
  }, React.createElement("a", {
    href: "tel:+442038084120",
    style: {
      color: 'var(--lutra-blue)'
    }
  }, "020 3808 4120"), React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--fg-3)',
      marginTop: 4
    }
  }, "Mon–Fri, 9:00–17:30 GMT")), React.createElement(ContactDetail, {
    kind: "email",
    title: "Email"
  }, React.createElement("div", null, React.createElement("a", {
    href: "mailto:iris@lutrahealth.com"
  }, "iris@lutrahealth.com"))), React.createElement(ContactDetail, {
    kind: "address",
    title: "Registered address"
  }, React.createElement("div", {
    style: {
      color: 'var(--fg-1)'
    }
  }, "Lutra Health Ltd"), React.createElement("div", {
    style: {
      color: 'var(--fg-2)',
      marginTop: 2
    }
  }, "2 Oldfield Road, Bocam Park,", React.createElement("br", null), "Bridgend, CF35 5LJ"), React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--fg-3)',
      marginTop: 8
    }
  }, "Registered in England & Wales \xB7 Company no. 13409714"))), React.createElement("div", {
    style: {
      marginTop: 36,
      paddingTop: 28,
      borderTop: '1px solid var(--border-1)'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)',
      marginBottom: 12
    }
  }, "Follow us"), React.createElement("a", {
    href: "https://www.linkedin.com/company/lutra-health/",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost btn-sm",
    style: {
      gap: 8
    }
  }, React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.2 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V22H7.42V8z"
  })), "LinkedIn"))), React.createElement("div", null, React.createElement(HubSpotForm, null))), React.createElement("style", null, "\n              @media (max-width: 900px) {\n                .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }\n              }\n            ")))), React.createElement(SiteFooter, null));
}
window.ContactPage = ContactPage;

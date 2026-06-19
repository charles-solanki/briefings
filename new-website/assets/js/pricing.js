function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _React = React,
  useState = _React.useState;
var Icon = {
  check: React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3"
  }, React.createElement("path", {
    d: "m5 13 4 4L19 7"
  })),
  eye: React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  hospital: React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M3 21h18"
  }), React.createElement("path", {
    d: "M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"
  }), React.createElement("path", {
    d: "M9 7h2M9 11h2M13 7h2M13 11h2M10 21v-4h4v4"
  })),
  clinician: React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })),
  group: React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
  })),
  network: React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5"
  }), React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5"
  }), React.createElement("path", {
    d: "M10 6.5h4a3 3 0 0 1 3 3V14"
  })),
  chevron: React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))
};
function Term(_ref) {
  var children = _ref.children,
    label = _ref.label;
  return React.createElement("span", {
    className: "term",
    tabIndex: 0,
    role: "note",
    "aria-label": label
  }, children, React.createElement("span", {
    className: "term-pop",
    role: "tooltip"
  }, label));
}
var AG = function AG() {
  return React.createElement(Term, {
    label: "Advice and Guidance: a quick consultant opinion without a full referral."
  }, "A&G");
};
var CatPROM = function CatPROM() {
  return React.createElement(Term, {
    label: "CatPROM5: a five-item validated questionnaire on cataract surgery outcomes."
  }, "CatPROM5");
};
var PREMs = function PREMs() {
  return React.createElement(Term, {
    label: "PREMs: Patient-Reported Experience Measures, feedback on the care experience."
  }, "PREMs");
};
var REGISTER = 'https://app.lutrahealth.com/register';
var CONNECT_HREF = 'https://app.lutrahealth.com/register?plan=connect';
var AUDIENCES = [{
  key: 'optom',
  label: 'Optometrist',
  icon: Icon.eye
}, {
  key: 'hospital',
  label: 'Hospital',
  icon: Icon.hospital
}, {
  key: 'clinician',
  label: 'Individual clinician',
  icon: Icon.clinician
}];
var DATA = {
  optom: [{
    key: 'access',
    name: 'Access',
    price: '£0',
    unit: '/ mo',
    tagline: 'Always free, no usage charges.',
    free: [React.createElement(React.Fragment, null, "Submit referrals: free"), React.createElement(React.Fragment, null, "Submit post-op assessments: free")],
    cta: {
      label: 'Get started free',
      href: REGISTER
    }
  }, {
    key: 'connect',
    name: 'Connect',
    price: '£50',
    unit: '/ mo',
    featured: true,
    tagline: 'A monthly bundle, with extra usage charged above it.',
    included: [{
      label: React.createElement(React.Fragment, null, React.createElement(AG, null), " requests"),
      n: '10'
    }],
    includedNote: React.createElement(React.Fragment, null, "Referrals and post-op assessments remain free."),
    additional: [{
      label: React.createElement(React.Fragment, null, React.createElement(AG, null), ", from the 11th onward"),
      price: '£10 each'
    }],
    cta: {
      label: 'Start with Connect',
      href: CONNECT_HREF
    }
  }, {
    key: 'collab',
    name: 'Collaborate',
    price: 'Custom pricing',
    collab: 'For multi-site optometry groups with higher A&G volumes and custom workflow needs.',
    icon: Icon.group,
    cta: {
      label: 'Talk to us',
      href: '#contact'
    }
  }],
  hospital: [{
    key: 'access',
    name: 'Access',
    price: '£0',
    unit: '/ mo',
    tagline: 'Pay only for what you use.',
    intro: 'No monthly fee, you pay per action. Suited to low or unpredictable volumes.',
    perAction: [{
      label: 'Receive referral',
      price: '£10'
    }, {
      label: 'Receive A&G',
      price: '£5'
    }, {
      label: 'Receive post-op',
      price: '£5'
    }, {
      label: React.createElement(React.Fragment, null, "Create ", React.createElement(CatPROM, null)),
      price: '£8'
    }, {
      label: React.createElement(React.Fragment, null, React.createElement(CatPROM, null), " + ", React.createElement(PREMs, null)),
      price: '£10'
    }, {
      label: React.createElement(React.Fragment, null, React.createElement(PREMs, null), " only"),
      price: '£5'
    }],
    cta: {
      label: 'Get started',
      href: REGISTER
    }
  }, {
    key: 'connect',
    name: 'Connect',
    price: '£150',
    unit: '/ mo',
    featured: true,
    tagline: 'A monthly bundle, with extra usage charged above it.',
    included: [{
      label: 'Referrals',
      n: '15'
    }, {
      label: React.createElement(AG, null),
      n: '10'
    }, {
      label: 'Post-op',
      n: '10'
    }],
    additional: [{
      label: React.createElement(React.Fragment, null, "Referral, from the 16th"),
      price: '£10 each'
    }, {
      label: React.createElement(React.Fragment, null, React.createElement(AG, null), ", from the 11th"),
      price: '£5 each'
    }, {
      label: React.createElement(React.Fragment, null, "Post-op, from the 11th"),
      price: '£5 each'
    }, {
      label: React.createElement(React.Fragment, null, React.createElement(CatPROM, null), ", from the 16th"),
      price: '£8 each'
    }, {
      label: React.createElement(React.Fragment, null, React.createElement(CatPROM, null), " + ", React.createElement(PREMs, null), ", from the 16th"),
      price: '£10 each'
    }, {
      label: React.createElement(React.Fragment, null, React.createElement(PREMs, null), " only the 16th"),
      price: '£5 each'
    }],
    cta: {
      label: 'Start with Connect',
      href: CONNECT_HREF
    }
  }, {
    key: 'collab',
    name: 'Collaborate',
    price: 'Custom pricing',
    collab: 'Built for large hospital networks and high-volume teams: volume discounts, dedicated support and tailored onboarding.',
    icon: Icon.network,
    cta: {
      label: 'Talk to us',
      href: '#contact'
    }
  }],
  clinician: [{
    key: 'access',
    name: 'Access',
    price: '£0',
    unit: '/ mo',
    tagline: 'Pay only for what you use.',
    intro: 'No monthly fee, you pay per action. Good for occasional use.',
    perAction: [{
      label: 'Receive referral',
      price: '£10'
    }, {
      label: 'Receive A&G',
      price: '£5'
    }, {
      label: 'Receive post-op',
      price: '£5'
    }],
    cta: {
      label: 'Get started',
      href: REGISTER
    }
  }, {
    key: 'connect',
    name: 'Connect',
    price: '£150',
    unit: '/ mo',
    featured: true,
    tagline: 'A monthly bundle, with extra usage charged above it.',
    included: [{
      label: 'Referrals',
      n: '15'
    }, {
      label: React.createElement(AG, null),
      n: '10'
    }, {
      label: 'Post-op',
      n: '10'
    }],
    additional: [{
      label: React.createElement(React.Fragment, null, "Referral, from the 16th"),
      price: '£10 each'
    }, {
      label: React.createElement(React.Fragment, null, React.createElement(AG, null), ", from the 11th"),
      price: '£5 each'
    }, {
      label: React.createElement(React.Fragment, null, "Post-op, from the 11th"),
      price: '£5 each'
    }],
    cta: {
      label: 'Start with Connect',
      href: CONNECT_HREF
    }
  }, {
    key: 'collab',
    name: 'Collaborate',
    price: 'Custom pricing',
    collab: 'For clinicians needing higher volumes, custom reporting or deeper integrations.',
    icon: Icon.group,
    cta: {
      label: 'Talk to us',
      href: '#contact'
    }
  }]
};
function TierBadge(_ref2) {
  var tier = _ref2.tier,
    featured = _ref2.featured;
  var styles = {
    access: {
      bg: 'var(--success-soft)',
      fg: '#00735e'
    },
    connect: featured ? {
      bg: 'rgba(255,255,255,0.14)',
      fg: '#fff'
    } : {
      bg: 'var(--lutra-blue-100)',
      fg: 'var(--lutra-blue-hover)'
    },
    collab: {
      bg: 'var(--lutra-lilac)',
      fg: 'var(--lutra-navy)'
    }
  }[tier];
  return React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: 999,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.02em',
      background: styles.bg,
      color: styles.fg
    }
  }, {
    access: 'Access',
    connect: 'Connect',
    collab: 'Collaborate'
  }[tier]);
}
function Collapsible(_ref3) {
  var summary = _ref3.summary,
    items = _ref3.items,
    featured = _ref3.featured;
  var fg = featured ? 'rgba(255,255,255,0.7)' : 'var(--fg-3)';
  var priceColor = featured ? '#fff' : 'var(--lutra-navy)';
  var rule = featured ? 'rgba(255,255,255,0.12)' : 'var(--border-1)';
  return React.createElement("details", {
    className: "usage",
    style: {
      borderTop: "1px solid ".concat(rule),
      paddingTop: 12
    }
  }, React.createElement("summary", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      listStyle: 'none',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'var(--font-display)',
      color: fg
    }
  }, summary, React.createElement("span", {
    className: "usage-chev",
    style: {
      color: fg,
      display: 'inline-flex'
    }
  }, Icon.chevron)), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      marginTop: 12
    }
  }, items.map(function (it, i) {
    return React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        fontSize: 13,
        color: fg
      }
    }, React.createElement("span", null, it.label), React.createElement("span", {
      style: {
        fontWeight: 600,
        color: priceColor,
        whiteSpace: 'nowrap'
      }
    }, it.price));
  })));
}
function PriceCard(_ref4) {
  var tier = _ref4.tier;
  var f = tier.featured;
  var isCollab = tier.key === 'collab';
  var checkBg = f ? 'rgba(1,199,169,0.18)' : 'var(--lutra-blue-100)';
  var checkFg = f ? 'var(--lutra-teal)' : 'var(--lutra-blue)';
  var muted = f ? 'rgba(255,255,255,0.72)' : 'var(--fg-2)';
  var faint = f ? 'rgba(255,255,255,0.55)' : 'var(--fg-3)';
  var Check = function Check() {
    return React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 999,
        background: checkBg,
        color: checkFg,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: 1
      }
    }, Icon.check);
  };
  return React.createElement("div", {
    style: {
      background: f ? 'var(--lutra-navy)' : '#fff',
      color: f ? '#fff' : 'var(--fg-2)',
      border: f ? 'none' : '1px solid var(--border-1)',
      borderRadius: 24,
      padding: '30px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxShadow: f ? '0 30px 60px -20px rgba(0,31,84,0.42)' : 'var(--shadow-sm)',
      position: 'relative',
      transform: f ? 'translateY(-10px)' : 'none'
    },
    className: f ? 'price-card featured' : 'price-card'
  }, f && React.createElement("span", {
    style: {
      position: 'absolute',
      top: 20,
      right: 20,
      background: 'var(--lutra-blue)',
      color: '#fff',
      padding: '4px 11px',
      borderRadius: 999,
      fontSize: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "Most popular"), React.createElement("div", null, React.createElement(TierBadge, {
    tier: tier.key,
    featured: f
  }), React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display-lg)',
      fontWeight: 800,
      fontSize: isCollab ? 26 : 48,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: f ? '#fff' : 'var(--lutra-navy)'
    }
  }, tier.price), tier.unit && React.createElement("span", {
    style: {
      fontSize: 14,
      color: faint
    }
  }, tier.unit)), tier.tagline && React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: muted,
      marginTop: 10,
      lineHeight: 1.5
    }
  }, tier.tagline)), isCollab ? React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14,
      padding: '14px 0 6px',
      flex: 1,
      justifyContent: 'center'
    }
  }, React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      background: 'var(--lutra-lilac)',
      color: 'var(--lutra-navy)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, tier.icon), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      color: 'var(--fg-2)',
      lineHeight: 1.6,
      maxWidth: 260
    }
  }, tier.collab)) : React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, tier.intro && React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: muted,
      lineHeight: 1.6
    }
  }, tier.intro), tier.free && React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, tier.free.map(function (it, i) {
    return React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 14,
        color: muted,
        lineHeight: 1.5
      }
    }, React.createElement(Check, null), it);
  })), tier.included && React.createElement("div", {
    style: {
      background: f ? 'rgba(255,255,255,0.06)' : 'var(--bg-2)',
      border: "1px solid ".concat(f ? 'rgba(255,255,255,0.10)' : 'var(--border-1)'),
      borderRadius: 14,
      padding: '14px 16px'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: faint,
      marginBottom: 10
    }
  }, "Included each month"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, tier.included.map(function (it, i) {
    return React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        fontSize: 14,
        color: f ? '#fff' : 'var(--lutra-navy)',
        justifyContent: 'space-between'
      }
    }, React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9
      }
    }, React.createElement(Check, null), it.label), React.createElement("span", {
      className: "alloc-n"
    }, it.n));
  }))), tier.includedNote && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 13.5,
      color: muted,
      lineHeight: 1.5
    }
  }, React.createElement(Check, null), tier.includedNote), tier.perAction && React.createElement(Collapsible, {
    summary: "See per-action prices",
    items: tier.perAction,
    featured: f
  }), tier.additional && React.createElement(Collapsible, {
    summary: "Additional usage",
    items: tier.additional,
    featured: f
  })), React.createElement("a", {
    href: tier.cta.href,
    className: "btn btn-lg ".concat(f ? '' : isCollab ? 'btn-secondary' : 'btn-ghost'),
    style: _objectSpread({
      width: '100%',
      justifyContent: 'center',
      marginTop: 4
    }, f ? {
      background: '#fff',
      color: 'var(--lutra-navy)',
      boxShadow: 'none'
    } : {})
  }, tier.cta.label));
}
function PricingPage() {
  useReveal();
  var _useState = useState('optom'),
    _useState2 = _slicedToArray(_useState, 2),
    aud = _useState2[0],
    setAud = _useState2[1];
  return React.createElement(React.Fragment, null, React.createElement(SiteHeader, {
    active: "pricing"
  }), React.createElement("main", null, React.createElement("section", {
    style: {
      padding: '88px 0 44px',
      background: 'var(--bg-2)',
      borderBottom: '1px solid var(--border-1)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(55% 50% at 50% 0%, rgba(44,72,237,0.06), transparent 70%)'
    }
  }), React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      textAlign: 'center',
      maxWidth: 840
    }
  }, React.createElement("span", {
    className: "eyebrow no-line"
  }, "Pricing"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(38px, 5vw, 60px)',
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: 'var(--lutra-navy)',
      margin: '18px 0 18px'
    }
  }, "Pricing for optometrists, hospitals and clinicians."), React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--fg-2)',
      margin: 0
    }
  }, "Start free and pay only for what you use, or take a monthly bundle with extra usage charged above it."))), React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-1)',
      paddingTop: 56
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "aud-tabs",
    role: "tablist",
    "aria-label": "Choose who you are"
  }, AUDIENCES.map(function (a) {
    return React.createElement("button", {
      key: a.key,
      role: "tab",
      "aria-selected": aud === a.key,
      className: "aud-tab ".concat(aud === a.key ? 'active' : ''),
      onClick: function onClick() {
        return setAud(a.key);
      }
    }, React.createElement("span", {
      className: "aud-ico",
      style: {
        display: 'inline-flex'
      }
    }, a.icon), a.label);
  })), React.createElement("div", {
    className: "pricing-grid",
    key: aud
  }, DATA[aud].map(function (t) {
    return React.createElement(PriceCard, {
      key: t.key,
      tier: t
    });
  })), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 28,
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, "All prices include VAT. Connect is billed monthly with no annual lock-in."), React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '96px auto 0'
    },
    className: "reveal"
  }, React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, React.createElement("span", {
    className: "eyebrow no-line"
  }, "Questions"), React.createElement("h2", {
    style: {
      fontSize: 36,
      margin: '14px 0 0',
      color: 'var(--lutra-navy)',
      fontWeight: 800,
      letterSpacing: '-0.025em'
    }
  }, "Common questions")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      background: 'var(--border-1)',
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, [{
    q: 'How does billing work?',
    a: React.createElement(React.Fragment, null, "Connect plans are billed monthly. Any usage above your monthly bundle is added to the same invoice at the rates shown on each card. There is no annual lock-in and no setup fee.")
  }, {
    q: 'What counts as a usage unit?',
    a: React.createElement(React.Fragment, null, "One unit is one action: a referral received, an ", React.createElement(AG, null), " request, a post-op assessment, or a ", React.createElement(CatPROM, null), " or ", React.createElement(PREMs, null), " form. Submitting referrals and post-op assessments as an optometrist is always free.")
  }, {
    q: 'Can I switch tiers later?',
    a: React.createElement(React.Fragment, null, "Yes. You can move between Access, Connect and Collaborate at any time. Changes take effect from your next billing month and your bundle adjusts from that date.")
  }, {
    q: 'Do you work with NHS procurement?',
    a: React.createElement(React.Fragment, null, "Yes. We supply through NHS and private routes and can provide the documentation procurement teams ask for. Collaborate covers framework agreements, invoicing by site and tailored onboarding. Talk to us and we will walk through it.")
  }, {
    q: 'Is the free tier really free?',
    a: React.createElement(React.Fragment, null, "Yes. Access has no monthly fee. Optometrists pay nothing to submit referrals or post-op assessments. Hospitals and individual clinicians on Access pay only per action, at the rates listed above.")
  }].map(function (f, i) {
    return React.createElement("details", {
      key: i,
      style: {
        background: '#fff',
        padding: '20px 24px'
      }
    }, React.createElement("summary", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--lutra-navy)',
        cursor: 'pointer',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16
      }
    }, f.q, React.createElement("span", {
      style: {
        color: 'var(--fg-3)',
        fontSize: 20,
        flexShrink: 0
      }
    }, "+")), React.createElement("p", {
      style: {
        marginTop: 12,
        marginBottom: 0,
        color: 'var(--fg-2)',
        fontSize: 15,
        lineHeight: 1.6
      }
    }, f.a));
  }))), React.createElement("div", {
    id: "contact",
    className: "reveal contact-cta",
    style: {
      marginTop: 96,
      background: 'var(--bg-3)',
      borderRadius: 24,
      padding: '48px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("h3", {
    style: {
      fontSize: 30,
      color: 'var(--lutra-navy)',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      margin: '0 0 12px',
      lineHeight: 1.1
    }
  }, "Need a quote?"), React.createElement("p", {
    style: {
      color: 'var(--fg-2)',
      fontSize: 16,
      margin: 0
    }
  }, "Optometry groups, hospital networks and ICBs: we will scope your volumes, talk through contracting and put together a price that fits.")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start',
      justifyContent: 'center'
    }
  }, React.createElement("a", {
    href: "mailto:sales@lutrahealth.com",
    className: "btn btn-primary btn-lg"
  }, "Talk to us", React.createElement("span", null, "→")), React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, "or email ", React.createElement("a", {
    href: "mailto:sales@lutrahealth.com"
  }, "iris@lutrahealth.com"))))))), React.createElement(SiteFooter, null), React.createElement("style", null, "\n        /* Audience tabs */\n        .aud-tabs {\n          display: inline-flex; gap: 4px; padding: 5px; margin: 0 auto 36px;\n          background: var(--lutra-ink-05); border: 1px solid var(--border-1);\n          border-radius: 999px; width: max-content; max-width: 100%;\n        }\n        .aud-tabs { display: flex; justify-content: center; }\n        .aud-tab {\n          display: inline-flex; align-items: center; gap: 8px;\n          padding: 10px 22px; border: none; background: transparent; cursor: pointer;\n          font-family: var(--font-display); font-weight: 600; font-size: 14px;\n          color: var(--fg-2); border-radius: 999px; white-space: nowrap;\n          transition: all var(--dur-base) var(--ease-out);\n        }\n        .aud-tab:hover { color: var(--lutra-navy); }\n        .aud-tab.active { background: var(--lutra-navy); color: #fff; box-shadow: var(--shadow-sm); }\n        .aud-tab.active .aud-ico { color: var(--lutra-teal); }\n\n        .pricing-grid {\n          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch;\n          opacity: 1;\n        }\n        .price-card { transition: box-shadow var(--dur-base) var(--ease-out); }\n        .price-card:not(.featured):hover { box-shadow: var(--shadow-md); }\n\n        /* Allocation count pill */\n        .alloc-n {\n          margin-left: auto; min-width: 26px; text-align: center; padding: 1px 8px;\n          border-radius: 999px; font-family: var(--font-display); font-weight: 700; font-size: 12px;\n        }\n        .price-card:not(.featured) .alloc-n { background: var(--lutra-blue-100); color: var(--lutra-blue-hover); }\n        .price-card.featured .alloc-n { background: rgba(255,255,255,0.14); color: #fff; }\n        .price-card .included-row { width: 100%; }\n\n        /* Collapsible chevron */\n        .usage summary::-webkit-details-marker { display: none; }\n        .usage .usage-chev { transition: transform var(--dur-base) var(--ease-out); }\n        .usage[open] .usage-chev { transform: rotate(180deg); }\n\n        /* Glossary term */\n        .term {\n          position: relative; border-bottom: 1.5px dotted currentColor;\n          cursor: help; outline: none;\n        }\n        .term-pop {\n          position: absolute; left: 50%; bottom: calc(100% + 8px); transform: translateX(-50%) translateY(4px);\n          background: var(--lutra-navy); color: #fff; font-family: var(--font-body); font-weight: 400;\n          font-size: 12.5px; line-height: 1.45; letter-spacing: 0; text-transform: none;\n          padding: 9px 12px; border-radius: 10px; width: max-content; max-width: 230px;\n          box-shadow: var(--shadow-lg); opacity: 0; pointer-events: none; z-index: 40;\n          transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);\n        }\n        .term-pop::after {\n          content: \"\"; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);\n          border: 6px solid transparent; border-top-color: var(--lutra-navy);\n        }\n        .term:hover .term-pop, .term:focus .term-pop, .term:focus-visible .term-pop {\n          opacity: 1; transform: translateX(-50%) translateY(0);\n        }\n\n        @media (max-width: 960px) {\n          .pricing-grid { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }\n          .price-card.featured { transform: none; }\n          .contact-cta { grid-template-columns: 1fr !important; }\n        }\n        @media (max-width: 560px) {\n          .aud-tab { padding: 9px 14px; font-size: 13px; }\n        }\n      "));
}
window.PricingPage = PricingPage;

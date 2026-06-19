function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function HomeHero() {
  return React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 96,
      paddingBottom: 72
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      background: 'radial-gradient(65% 50% at 50% 0%, rgba(44,72,237,0.09), transparent 72%)'
    }
  }), React.createElement("div", {
    "aria-hidden": true,
    className: "dot-grid",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -40,
      height: 220,
      opacity: 0.35,
      zIndex: 0,
      maskImage: 'linear-gradient(to bottom, transparent, black 60%, transparent)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 60%, transparent)'
    }
  }), React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 64,
      alignItems: 'center'
    },
    className: "hero-grid"
  }, React.createElement("div", null, React.createElement("span", {
    className: "badge badge-info",
    style: {
      marginBottom: 22
    }
  }, React.createElement(EyeMark, {
    size: 14,
    color: "var(--lutra-blue-hover)"
  }), "Introducing\xA0", React.createElement("b", null, "Lutra Connect"), "\xA0\xB7 Advice & Guidance, live"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(44px, 5.6vw, 76px)',
      lineHeight: 1.02,
      letterSpacing: '-0.035em',
      color: 'var(--lutra-navy)',
      margin: '0 0 22px'
    }
  }, "Optometry and ophthalmology collaboration,", React.createElement("br", null), React.createElement("span", {
    style: {
      color: 'var(--lutra-blue)'
    }
  }, "fully auditable.")), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--fg-2)',
      maxWidth: 540,
      margin: '0 0 32px'
    }
  }, "Lutra is the connective layer between optometry and ophthalmology. Advice, referrals, outcomes and more. Secure, structured, two-way and auditable."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "https://www.lutraconnect.com/app/"
  }, "Get started for free", React.createElement("span", null, "→"))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 32,
      flexWrap: 'wrap',
      color: 'var(--fg-3)',
      fontSize: 13
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2"
  }, React.createElement("path", {
    d: "m5 13 4 4L19 7"
  })), "NHS & private"), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2"
  }, React.createElement("path", {
    d: "m5 13 4 4L19 7"
  })), "DCB0129 clinical safety"))), React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 520
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      transform: 'rotate(-1.5deg)'
    }
  }, React.createElement(MockAdviceThread, {
    compact: true
  })), React.createElement("div", {
    style: {
      position: 'absolute',
      right: -32,
      bottom: -8,
      width: '78%',
      zIndex: 1,
      transform: 'rotate(2.5deg)',
      opacity: 0.98
    }
  }, React.createElement(MockProms, null)), React.createElement("div", {
    style: {
      position: 'absolute',
      top: -18,
      right: 18,
      zIndex: 3,
      background: 'var(--lutra-navy)',
      color: '#fff',
      padding: '8px 14px',
      borderRadius: 999,
      fontSize: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      boxShadow: 'var(--shadow-lg)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--lutra-teal)',
      boxShadow: '0 0 10px var(--lutra-teal)'
    },
    className: "pulse-dot"
  }), "38 min \xB7 average A&G response")))), React.createElement("style", null, "\n        @media (max-width: 960px) {\n          .hero-grid { grid-template-columns: 1fr !important; }\n        }\n      "));
}
function LogosRow() {
  return React.createElement("section", {
    style: {
      padding: '72px 0 80px',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)',
      background: '#fff'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-3)'
    }
  }, "Used by clinicians across the UK"), React.createElement(PartnerRow, null))));
}
function InBetweenSection() {
  var blueSurface = '#eef3ff';
  var blueAccent = '#2c48ed';
  return React.createElement("section", {
    className: "section",
    style: {
      background: blueSurface,
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    className: "dot-grid",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.25,
      pointerEvents: 'none',
      maskImage: 'radial-gradient(60% 50% at 50% 30%, black, transparent 75%)',
      WebkitMaskImage: 'radial-gradient(60% 50% at 50% 30%, black, transparent 75%)'
    }
  }), React.createElement("div", {
    className: "container",
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "section-head reveal"
  }, React.createElement("span", {
    className: "eyebrow",
    style: {
      color: blueAccent
    }
  }, "The in-between layer"), React.createElement("h2", null, "There's a missing layer between", React.createElement("br", null), "optometry and ophthalmology."), React.createElement("p", null, "Most eye care collaboration still runs on WhatsApp, fax and email. Under ICO guidance, sharing patient data that way is a personal data breach and the liability sits with the clinician. Lutra replaces it with one auditable record.")), React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '32px 28px',
      background: '#fff',
      borderRadius: 24,
      border: "1px solid ".concat(blueAccent, "33"),
      boxShadow: '0 24px 48px -24px rgba(0, 31, 84, 0.16)'
    }
  }, React.createElement(ConnectionDiagram, null)), React.createElement("div", {
    className: "grid-3 reveal",
    style: {
      marginTop: 48
    }
  }, React.createElement(BeforeAfter, {
    icon: React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })),
    title: "From informal to auditable",
    before: "WhatsApp, SMS and personal email",
    after: "Secure, attributable thread on every message"
  }), React.createElement(BeforeAfter, {
    icon: React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "M12 22s-8-4.5-8-11.5A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 8 5.5C20 17.5 12 22 12 22z"
    })),
    title: "From slow to same-day",
    before: "Weeks waiting for a clinic slot",
    after: "Consultant advice back in minutes"
  }), React.createElement(BeforeAfter, {
    icon: React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "M3 3v18h18"
    }), React.createElement("path", {
      d: "m7 14 4-4 4 4 5-5"
    })),
    title: "From one-way to two-way",
    before: "Referrals disappear into a void",
    after: "Triage decisions and outcomes flow back to the referrer"
  }))));
}
function BeforeAfter(_ref) {
  var icon = _ref.icon,
    title = _ref.title,
    before = _ref.before,
    after = _ref.after;
  return React.createElement("div", {
    className: "card",
    style: {
      padding: '28px 26px'
    }
  }, React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: 'var(--lutra-blue-100)',
      color: 'var(--lutra-blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, icon), React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 16,
      color: 'var(--lutra-navy)',
      fontWeight: 700,
      letterSpacing: '-0.015em'
    }
  }, title), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '10px 12px',
      borderRadius: 10,
      background: 'var(--bg-2)',
      color: 'var(--fg-3)',
      fontSize: 13,
      textDecoration: 'line-through',
      textDecorationColor: 'var(--border-2)'
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      letterSpacing: '0.1em',
      fontSize: 10,
      color: 'var(--fg-4)',
      marginTop: 2
    }
  }, "BEFORE"), React.createElement("span", {
    style: {
      flex: 1
    }
  }, before)), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '10px 12px',
      borderRadius: 10,
      background: 'var(--lutra-blue-100)',
      color: 'var(--lutra-navy)',
      fontSize: 13,
      fontWeight: 500
    }
  }, React.createElement("span", {
    style: {
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      letterSpacing: '0.1em',
      fontSize: 10,
      color: 'var(--lutra-blue-hover)',
      marginTop: 2
    }
  }, "WITH LUTRA"), React.createElement("span", {
    style: {
      flex: 1
    }
  }, after))));
}
function ConnectSection() {
  var _React$useState = React.useState('advice'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    tab = _React$useState2[0],
    setTab = _React$useState2[1];
  var tabs = [{
    key: 'advice',
    label: 'Advice & Guidance',
    desc: 'Ask a consultant. Get an answer in minutes, not weeks.'
  }, {
    key: 'refer',
    label: 'Referrals',
    desc: 'Convert any A&G thread into a structured referral with one click.'
  }, {
    key: 'postop',
    label: 'Post-op',
    desc: 'Capture follow-up assessments, close the loop with the consultant.'
  }];
  var lilacSurface = '#dfe8fe';
  return React.createElement("section", {
    className: "section",
    style: {
      background: lilacSurface,
      color: 'var(--lutra-navy)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: -200,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 900,
      height: 900,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(44,72,237,0.16), transparent 60%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    className: "container",
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      maxWidth: 880,
      margin: '0 auto 56px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 36
    }
  }, React.createElement(LutraConnectLockup, {
    height: 44
  })), React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--lutra-blue-hover)',
      marginBottom: 22
    }
  }, "Flagship product"), React.createElement("h2", {
    style: {
      color: 'var(--lutra-navy)',
      fontSize: 'clamp(34px, 4.2vw, 56px)',
      margin: '0 0 20px',
      letterSpacing: '-0.025em',
      lineHeight: 1.05,
      fontWeight: 800
    }
  }, "A consultant in every\xA0optometry\xA0practice."), React.createElement("p", {
    style: {
      color: 'rgba(0,31,84,0.72)',
      fontSize: 19,
      lineHeight: 1.55,
      maxWidth: 680,
      margin: '0 auto'
    }
  }, "Lutra Connect is a secure Advice and Guidance platform linking community optometrists to vetted consultant ophthalmologists. Same-day answers across NHS and private routes, fully auditable.")), React.createElement("div", {
    className: "reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, tabs.map(function (t) {
    return React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setTab(t.key);
      },
      style: {
        background: tab === t.key ? 'rgba(0,31,84,0.08)' : 'transparent',
        color: tab === t.key ? 'var(--lutra-navy)' : 'rgba(0,31,84,0.55)',
        border: tab === t.key ? '1px solid rgba(0,31,84,0.15)' : '1px solid transparent',
        padding: '10px 16px',
        borderRadius: 10,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        transition: 'all 200ms var(--ease-out)'
      }
    }, t.label);
  })), React.createElement("div", {
    style: {
      minHeight: 100
    }
  }, React.createElement("p", {
    style: {
      fontSize: 22,
      color: 'var(--lutra-navy)',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      margin: '0 0 20px'
    }
  }, tabs.find(function (t) {
    return t.key === tab;
  }).desc), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, (tab === 'advice' ? ['Vetted consultant roster with sub-specialty routing', 'Attach OCT, fundus, fields, free-text clinical history', 'Compliance-grade audit log on every message', 'Suitable for NHS and private workflows'] : tab === 'refer' ? ['Convert an A&G thread into a referral, no re-typing', 'Consultant-authored cover notes where needed', 'Visibility of triage decisions, at last', 'One format works for NHS eRS and private routes'] : ['Post-op review templates for cataract, YAG, injections', 'Patient PROMs delivered via SMS or email', 'Auto-formatted for PHIN and National Ophthalmic Database', 'Close the loop back to the referring optometrist']).map(function (i) {
    return React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        color: 'rgba(0,31,84,0.78)',
        fontSize: 15
      }
    }, React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: 999,
        background: 'rgba(1,199,169,0.18)',
        color: '#00735e',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: 2
      }
    }, React.createElement("svg", {
      width: "11",
      height: "11",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3"
    }, React.createElement("path", {
      d: "m5 13 4 4L19 7"
    }))), i);
  }))), React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, React.createElement("a", {
    className: "btn btn-primary",
    href: "https://www.lutraconnect.com/app/"
  }, "Get started", React.createElement("span", null, "→")))), React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 28,
      padding: 24,
      border: '1px solid rgba(0,31,84,0.08)',
      boxShadow: '0 40px 80px -28px rgba(0,31,84,0.25)'
    }
  }, tab === 'advice' && React.createElement(MockAdviceThread, null), tab === 'refer' && React.createElement(MockInbox, null), tab === 'postop' && React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement(MockProms, null))))));
}
function CapabilitiesGrid() {
  var items = [{
    icon: React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })),
    title: 'Advice & Guidance',
    body: 'The fastest route to a consultant opinion. Secure, structured, auditable.',
    href: 'product.html#advice',
    tag: 'Primary'
  }, {
    icon: React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "m9 18 6-6-6-6"
    }), React.createElement("path", {
      d: "M3 12h12"
    })),
    title: 'Referrals',
    body: 'Structured, triaged, two-way. With visibility of what happens after the referral lands.',
    href: 'product.html#referrals'
  }, {
    icon: React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), React.createElement("path", {
      d: "m8 12 3 3 5-6"
    })),
    title: 'Post-op assessments',
    body: 'Share the follow-up burden between optometry and ophthalmology, cleanly.',
    href: 'product.html#postop'
  }, {
    icon: React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "6"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    })),
    title: 'Image sharing',
    body: 'OCT, fundus photos and visual fields attached to the clinical thread, not the email chain.',
    href: 'product.html#data'
  }, {
    icon: React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    title: 'Patient layer',
    body: 'Subjective data, PROMs, pre-op video education. Because patients are part of the clinic too.',
    href: 'product.html#data'
  }, {
    icon: React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, React.createElement("path", {
      d: "M3 3v18h18"
    }), React.createElement("path", {
      d: "M7 17V9"
    }), React.createElement("path", {
      d: "M12 17v-5"
    }), React.createElement("path", {
      d: "M17 17v-3"
    })),
    title: 'Outcomes & reporting',
    body: 'PROMs for PHIN, post-op data for the National Ophthalmic Database. End-to-end, formatted.',
    href: 'product.html#data'
  }];
  return React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-1)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-head reveal"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Shared care infrastructure"), React.createElement("h2", null, "One platform. The whole patient journey."), React.createElement("p", null, "Lutra Connect is the starting point. The platform handles every touchpoint between optometry, ophthalmology and patient in one record.")), React.createElement("div", {
    className: "grid-3 reveal",
    style: {
      gap: 20
    }
  }, items.map(function (it, i) {
    return React.createElement("a", {
      key: it.title,
      href: it.href,
      className: "card",
      style: {
        display: 'block',
        padding: '32px 30px',
        textDecoration: 'none',
        color: 'inherit',
        position: 'relative',
        overflow: 'hidden'
      }
    }, it.tag && React.createElement("span", {
      style: {
        position: 'absolute',
        top: 18,
        right: 18,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--lutra-blue)',
        background: 'var(--lutra-blue-100)',
        padding: '3px 8px',
        borderRadius: 999
      }
    }, it.tag), React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: 'var(--lutra-lilac)',
        color: 'var(--lutra-navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 22
      }
    }, it.icon), React.createElement("h3", {
      style: {
        fontSize: 22,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: 'var(--lutra-navy)',
        margin: '0 0 10px',
        letterSpacing: '-0.015em'
      }
    }, it.title), React.createElement("p", {
      style: {
        color: 'var(--fg-2)',
        fontSize: 15,
        lineHeight: 1.55,
        margin: 0
      }
    }, it.body), React.createElement("div", {
      style: {
        marginTop: 22,
        color: 'var(--lutra-blue)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, "Learn more ", React.createElement("span", null, "→")));
  }))));
}
function StatsBand() {
  var stats = [{
    v: '38',
    u: 'min',
    label: 'Median A&G response time',
    detail: 'vs 2–4 wks via traditional routes'
  }, {
    v: '94',
    u: '%',
    label: 'PROM completion rate',
    detail: 'across post-op cataract cohorts'
  }, {
    v: '3×',
    u: '',
    label: 'Faster time-to-triage',
    detail: 'compared with paper referrals'
  }, {
    v: '0',
    u: '',
    label: 'Informal channels needed',
    detail: 'replaces WhatsApp, SMS, fax'
  }];
  return React.createElement("section", {
    className: "section-sm",
    style: {
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "grid-4 reveal"
  }, stats.map(function (s) {
    return React.createElement("div", {
      key: s.label,
      style: {
        padding: '16px 8px'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
        marginBottom: 8
      }
    }, React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display-lg)',
        fontWeight: 800,
        fontSize: 56,
        lineHeight: 1,
        color: 'var(--lutra-navy)',
        letterSpacing: '-0.03em'
      }
    }, s.v), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 22,
        color: 'var(--lutra-blue)'
      }
    }, s.u)), React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        color: 'var(--lutra-navy)',
        marginBottom: 4
      }
    }, s.label), React.createElement("div", {
      style: {
        color: 'var(--fg-3)',
        fontSize: 13
      }
    }, s.detail));
  }))));
}
function PricingTeaser() {
  var plans = [{
    name: 'Starter',
    tag: 'Free',
    price: '£0',
    cadence: 'forever',
    blurb: 'Structured referrals and post-op assessments, for any optometry practice.',
    features: ['Unlimited referrals', 'Post-op assessment templates', 'Image attachments (OCT, fundus, fields)', 'Audit log on every record'],
    cta: 'Get started for free',
    href: 'https://www.lutraconnect.com/app/',
    highlight: false
  }, {
    name: 'Connect',
    tag: 'Paid',
    price: '[£TBC]',
    cadence: 'per clinician / month',
    blurb: 'Everything in Starter, plus Advice & Guidance with a vetted consultant roster.',
    features: ['Same-day consultant A&G', 'Sub-specialty routing', 'Convert A&G → referral, one click', 'NHS &amp; private workflows'],
    cta: 'Talk to sales',
    href: 'pricing.html',
    highlight: true
  }, {
    name: 'Clinic',
    tag: 'Paid',
    price: '[£TBC]',
    cadence: 'custom',
    blurb: 'For consultant clinics and hospital groups. Outcomes reporting, multi-user, SLAs.',
    features: ['Multi-clinician inbox', 'PHIN &amp; NOD export', 'SAML / SSO', 'Clinical safety pack (DCB0129)'],
    cta: 'Book a demo',
    href: 'pricing.html',
    highlight: false
  }];
  return React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-head reveal"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Pricing \xB7 Placeholder"), React.createElement("h2", null, "Free to start. Pay only for Connect."), React.createElement("p", null, "Send referrals and post-op assessments for free, forever. Advice & Guidance is the paid feature on top.")), React.createElement("div", {
    className: "grid-3 reveal",
    style: {
      gap: 20,
      alignItems: 'stretch'
    }
  }, plans.map(function (p) {
    return React.createElement("div", {
      key: p.name,
      className: "card",
      style: {
        padding: '32px 30px',
        display: 'flex',
        flexDirection: 'column',
        border: p.highlight ? '1px solid var(--lutra-blue)' : '1px solid var(--border-1)',
        boxShadow: p.highlight ? '0 24px 48px -20px rgba(44,72,237,0.25)' : 'var(--shadow-sm)',
        position: 'relative'
      }
    }, p.highlight && React.createElement("span", {
      style: {
        position: 'absolute',
        top: -12,
        left: 24,
        background: 'var(--lutra-blue)',
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '5px 10px',
        borderRadius: 999
      }
    }, "Most popular"), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10,
        marginBottom: 6
      }
    }, React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--lutra-navy)',
        margin: 0,
        letterSpacing: '-0.015em'
      }
    }, p.name), React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: p.tag === 'Free' ? '#00735e' : 'var(--lutra-blue)',
        background: p.tag === 'Free' ? 'var(--success-soft)' : 'var(--lutra-blue-100)',
        padding: '3px 8px',
        borderRadius: 999
      }
    }, p.tag)), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 6,
        marginBottom: 14
      }
    }, React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display-lg)',
        fontWeight: 800,
        fontSize: 36,
        color: 'var(--lutra-navy)',
        letterSpacing: '-0.03em',
        lineHeight: 1
      }
    }, p.price), React.createElement("span", {
      style: {
        color: 'var(--fg-3)',
        fontSize: 13
      }
    }, p.cadence)), React.createElement("p", {
      style: {
        color: 'var(--fg-2)',
        fontSize: 14,
        lineHeight: 1.55,
        margin: '0 0 22px'
      }
    }, p.blurb), React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        flex: 1
      }
    }, p.features.map(function (f) {
      return React.createElement("li", {
        key: f,
        style: {
          display: 'flex',
          gap: 10,
          alignItems: 'flex-start',
          fontSize: 14,
          color: 'var(--fg-2)'
        }
      }, React.createElement("span", {
        style: {
          width: 18,
          height: 18,
          borderRadius: 999,
          background: 'var(--lutra-blue-100)',
          color: 'var(--lutra-blue)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: 2
        }
      }, React.createElement("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3"
      }, React.createElement("path", {
        d: "m5 13 4 4L19 7"
      }))), React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: f
        }
      }));
    })), React.createElement("a", {
      className: p.highlight ? 'btn btn-primary' : 'btn btn-ghost',
      href: p.href,
      style: {
        justifyContent: 'center'
      }
    }, p.cta, React.createElement("span", null, "→")));
  })), React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 28,
      fontSize: 12,
      color: 'var(--fg-3)',
      fontStyle: 'italic'
    }
  }, "Placeholder pricing — final plans and prices to be confirmed.")));
}
function AudienceSection() {
  return React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-1)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-head reveal"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Built for both sides"), React.createElement("h2", null, "For the optometrist ", React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, "and"), React.createElement("br", null), "the consultant.")), React.createElement("div", {
    className: "grid-2 reveal",
    style: {
      gap: 28,
      alignItems: 'stretch'
    }
  }, React.createElement(AudienceCard, {
    tag: "Community optometry",
    colour: "var(--lutra-blue)",
    title: "Confidence, without the WhatsApp group.",
    points: ['Ask a vetted consultant on any case, NHS or private', 'Every message logged and attributable, so no ICO exposure sits with you', 'Replaces WhatsApp, SMS and personal email for patient data', 'Slots into your PMS workflow without a new admin layer'],
    cta: "For optometrists →"
  }), React.createElement(AudienceCard, {
    tag: "Ophthalmology",
    colour: "var(--lutra-teal)",
    title: "Choose the optometrists you work with and triage with better information.",
    points: ['A fully private patient channel, run from your desk', 'Structured information in, not scanned PDFs', 'Better-prepared referrals arrive at your clinic', 'Outcome data flows back, formatted for NOD'],
    cta: "For consultants →",
    dark: true
  }))));
}
function AudienceCard(_ref2) {
  var tag = _ref2.tag,
    colour = _ref2.colour,
    title = _ref2.title,
    points = _ref2.points,
    cta = _ref2.cta,
    dark = _ref2.dark;
  return React.createElement("div", {
    className: dark ? 'card card-dark' : 'card',
    style: {
      padding: '40px 36px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: dark ? 'var(--lutra-teal)' : colour,
      marginBottom: 20
    }
  }, React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: colour
    }
  }), tag), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: dark ? '#fff' : 'var(--lutra-navy)',
      margin: '0 0 28px',
      lineHeight: 1.1,
      textWrap: 'balance'
    }
  }, title), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, points.map(function (p) {
    return React.createElement("li", {
      key: p,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        fontSize: 15,
        color: dark ? 'rgba(255,255,255,0.8)' : 'var(--fg-2)'
      }
    }, React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 999,
        background: dark ? 'rgba(1,199,169,0.18)' : 'var(--lutra-blue-100)',
        color: dark ? 'var(--lutra-teal)' : 'var(--lutra-blue)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: 1
      }
    }, React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3"
    }, React.createElement("path", {
      d: "m5 13 4 4L19 7"
    }))), p);
  })));
}
function TestimonialBand() {
  return React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-2)'
    }
  }, React.createElement("div", {
    className: "container reveal",
    style: {
      maxWidth: 920,
      textAlign: 'center'
    }
  }, React.createElement("svg", {
    width: "44",
    height: "36",
    viewBox: "0 0 44 36",
    fill: "none",
    style: {
      margin: '0 auto 24px',
      color: 'var(--lutra-blue)'
    }
  }, React.createElement("path", {
    d: "M0 36V20C0 9 6 2 18 0l2 5c-7 2-11 6-11 12h9v19H0zm25 0V20C25 9 31 2 43 0l2 5c-7 2-11 6-11 12h9v19H25z",
    fill: "currentColor",
    opacity: "0.22"
  })), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px, 3.2vw, 38px)',
      lineHeight: 1.25,
      fontWeight: 500,
      color: 'var(--lutra-navy)',
      letterSpacing: '-0.02em',
      margin: '0 0 32px',
      textWrap: 'balance'
    }
  }, "“You have made a world class product. I cannot praise it enough. This could be a revolution for eye care collaboration.”"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement("img", {
    src: "assets/team/John_Ellis.jpg",
    alt: "John Ellis",
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--lutra-navy)'
    }
  }, "John Ellis"), React.createElement("div", {
    style: {
      color: 'var(--fg-3)',
      fontSize: 14
    }
  }, "Consultant Ophthalmologist & Founder, Accord Eye Care")))));
}
function ComplianceSection() {
  var items = [{
    title: 'NHS compliance',
    wide: true,
    body: 'DTAC and DSPT, both completed. The two assessment frameworks the NHS uses for clinical software.',
    logos: [{
      src: 'assets/compliance/nhs-dtac.webp',
      alt: 'NHS Digital Technology Assessment Criteria (DTAC)',
      h: 64
    }, {
      src: 'assets/compliance/nhs-dspt.png',
      alt: 'NHS Digital Data Security and Protection Toolkit, standards exceeded',
      h: 64
    }]
  }, {
    title: 'Secure infrastructure',
    body: 'Hosted on AWS in UK regions, with continuous monitoring, encrypted backups and platform-level controls inherited from one of the most audited cloud environments in the world.',
    logos: [{
      src: 'assets/compliance/aws.png',
      alt: 'Amazon Web Services',
      h: 44
    }]
  }, {
    title: 'End-to-end encryption',
    body: 'Every connection to Lutra is encrypted in transit. Patient data is encrypted at rest with AES-256.',
    logos: [{
      src: 'assets/compliance/aes-256.webp',
      alt: 'AES-256 encryption',
      h: 64
    }]
  }, {
    title: 'GDPR',
    body: 'Designed against UK GDPR from the first line of code, not retrofitted to it later.',
    logos: [{
      src: 'assets/compliance/gdpr.webp',
      alt: 'GDPR compliant',
      h: 58
    }]
  }, {
    title: 'Continuous improvement',
    body: 'Annual third-party penetration testing and Cyber Essentials certified. Reviewed every twelve months.',
    logos: [{
      src: 'assets/compliance/cyber-essentials.png',
      alt: 'Cyber Essentials Certified',
      h: 66
    }]
  }];
  return React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-1)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(60% 50% at 50% 0%, rgba(44,72,237,0.06), transparent 70%)'
    }
  }), React.createElement("div", {
    className: "container",
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "section-head reveal"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "Compliance"), React.createElement("h2", null, "Compliance is at the core of how we build."), React.createElement("p", null, "DSPT, DTAC, Cyber Essentials and GDPR, all covered. The standards that tell you Lutra is safe to use with patient data, whoever you are.")), React.createElement("div", {
    className: "reveal compliance-grid"
  }, items.map(function (it) {
    return React.createElement("div", {
      key: it.title,
      className: "card".concat(it.wide ? ' wide' : ''),
      style: {
        padding: '28px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        minHeight: 80,
        flexWrap: 'nowrap'
      }
    }, it.logos.map(function (l) {
      return React.createElement("img", {
        key: l.src,
        src: l.src,
        alt: l.alt,
        style: {
          height: l.h,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          flexShrink: 0
        }
      });
    })), React.createElement("div", null, React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--lutra-navy)',
        margin: '0 0 8px',
        letterSpacing: '-0.015em'
      }
    }, it.title), React.createElement("p", {
      style: {
        color: 'var(--fg-2)',
        fontSize: 14,
        lineHeight: 1.55,
        margin: 0
      }
    }, it.body)));
  })), React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 48
    }
  }, React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "https://www.lutraconnect.com/app/"
  }, "Start working with Lutra", React.createElement("span", null, "→")))), React.createElement("style", null, "\n        .compliance-grid {\n          display: grid;\n          grid-template-columns: repeat(3, 1fr);\n          gap: 20px;\n        }\n        .compliance-grid > .card.wide { grid-column: span 2; }\n        @media (max-width: 960px) {\n          .compliance-grid { grid-template-columns: repeat(2, 1fr); }\n          .compliance-grid > .card.wide { grid-column: span 2; }\n        }\n        @media (max-width: 640px) {\n          .compliance-grid { grid-template-columns: 1fr; }\n          .compliance-grid > .card.wide { grid-column: span 1; }\n        }\n      "));
}
function HomePage() {
  useReveal();
  return React.createElement(React.Fragment, null, React.createElement(SiteHeader, {
    active: "home"
  }), React.createElement("main", null, React.createElement(HomeHero, null), React.createElement(LogosRow, null), React.createElement(InBetweenSection, null), React.createElement(ConnectSection, null), React.createElement(CapabilitiesGrid, null), React.createElement(AudienceSection, null), React.createElement(TestimonialBand, null), React.createElement(ComplianceSection, null)), React.createElement(SiteFooter, null));
}
window.HomePage = HomePage;

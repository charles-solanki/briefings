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
function AboutPage() {
  useReveal();
  return React.createElement(React.Fragment, null, React.createElement(SiteHeader, {
    active: "about"
  }), React.createElement("main", null, React.createElement("section", {
    style: {
      padding: '112px 0 64px',
      background: 'var(--bg-1)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(50% 60% at 80% 0%, rgba(1,199,169,0.1), transparent 70%)'
    }
  }), React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      maxWidth: 980
    }
  }, React.createElement("span", {
    className: "eyebrow no-line"
  }, "About Lutra Health"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 5.4vw, 76px)',
      letterSpacing: '-0.035em',
      lineHeight: 1.02,
      color: 'var(--lutra-navy)',
      margin: '20px 0 28px'
    }
  }, "We started Lutra to improve collaboration in eye\xA0care."), React.createElement("p", {
    style: {
      fontSize: 22,
      color: 'var(--fg-2)',
      lineHeight: 1.5,
      maxWidth: 760
    }
  }, "Lutra Health is a UK healthtech company building the connective layer between community optometry and secondary eye care. We were founded by eye care clinicians who lived the problem and we have spent three years building the fix."))), React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    },
    className: "about-grid reveal"
  }, React.createElement("div", {
    style: {
      position: 'sticky',
      top: 120
    }
  }, React.createElement("span", {
    className: "eyebrow"
  }, "The story"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(30px, 3.4vw, 46px)',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.12,
      margin: '14px 0 24px',
      color: 'var(--lutra-navy)'
    }
  }, "Why we built Lutra."), React.createElement("div", {
    style: {
      padding: 24,
      background: '#fff',
      borderRadius: 16,
      border: '1px solid var(--border-1)'
    }
  }, React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 16 16",
    "aria-label": "Lutra Health mark"
  }, React.createElement("circle", {
    fill: "#2c48ed",
    cx: "8",
    cy: "8",
    r: "8"
  }), React.createElement("circle", {
    fill: "#001f54",
    cx: "8",
    cy: "8",
    r: "4.1"
  }), React.createElement("circle", {
    fill: "#ffffff",
    cx: "10.9",
    cy: "5.4",
    r: "2.6"
  })), React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--lutra-navy)',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      lineHeight: 1.45
    }
  }, "\"Good care depends on optometry and ophthalmology talking openly, with a proper record of every decision. For too long that conversation has happened on the wrong channels, or not at all. So we built Lutra Connect.\""), React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 13,
      color: 'var(--fg-3)',
      lineHeight: 1.5
    }
  }, "Conor Ramsden, Lutra Co-founder and Consultant Ophthalmologist"))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--fg-2)'
    }
  }, React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Lutra was built by optometrists and ophthalmologists, who spent their careers on opposite ends of the same referral and watched it fail patients."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "When an optometrist spots something that needs a specialist's view, the obvious thing to do is ask a colleague who can help. For years that has meant whatever channel is closest to hand: a photo sent over WhatsApp, a phone call between clinicians who happen to know each other, a faxed referral, a favour. None of that is the wrong instinct; the problem is where it all takes place. Patient images sit on personal phones, there is no proper record of who advised what, and the data protection and clinical liability land on the clinician rather than any system built to carry them. When something slips, it is the patient who waits."), React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--lutra-navy)',
      fontWeight: 500
    }
  }, "We did not want to remove that collaboration. We wanted to keep it and make it safe: secure, structured, auditable and open to every clinician, not only the ones with the right contacts. Better collaboration between optometry and ophthalmology means better outcomes for patients, and Lutra does the boring compliance work in the background so clinicians can get on with the part that matters."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "That is Lutra Connect: a shared-care platform covering two-way referrals, post-op assessments, secure image sharing and PROMs/PREMs, all held in one auditable record."))), React.createElement("style", null, "@media (max-width: 960px) { .about-grid { grid-template-columns: 1fr !important; } .about-grid > :first-child { position: static !important; } }"))), React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-1)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
      gap: 64,
      alignItems: 'start'
    },
    className: "about-grid reveal"
  }, React.createElement("div", null, React.createElement("span", {
    className: "eyebrow eyebrow-teal"
  }, "How we got here"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(30px, 3.4vw, 46px)',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.12,
      margin: '14px 0 0',
      color: 'var(--lutra-navy)'
    }
  }, "Three years in the making.")), React.createElement("div", null, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.7,
      color: 'var(--fg-2)'
    }
  }, "Over the past three years we have run projects across the NHS and in private practice, working closely with optometrists, ophthalmologists and patients to understand what each of them needs from the others. Everything in Lutra Connect has come out of that work, built to be useful to both sides of the referral rather than to one of them."), React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontSize: 14,
      color: 'var(--fg-3)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--lutra-teal)',
      flexShrink: 0
    }
  }), "Detailed case studies will follow."))))), React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border-1)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-head reveal"
  }, React.createElement("span", {
    className: "eyebrow"
  }, "What we are building toward"), React.createElement("h2", null, "Building the infrastructure eye care has been missing."), React.createElement("p", null, "Three principles behind every product decision we make.")), React.createElement("div", {
    className: "grid-3 reveal",
    style: {
      gap: 24
    }
  }, [{
    n: '01',
    t: 'Clinician-led',
    b: 'Every product line has consultant input from day one. We do not ship clinical UX that a clinician has not had oversight of.'
  }, {
    n: '02',
    t: 'Speed and accuracy',
    b: 'Lutra uses AI to speed up referrals and post-op assessment submissions. We also connect with your PMS, your EPR and your imaging provider.'
  }, {
    n: '03',
    t: 'Outcomes and activity',
    b: 'Generating more referrals is just the first part. It is critical to wrap that up with clinical and patient outcomes that can be submitted to PHIN and NOD.'
  }].map(function (p) {
    return React.createElement("div", {
      key: p.n,
      className: "card",
      style: {
        padding: '32px 28px'
      }
    }, React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display-lg)',
        fontWeight: 700,
        fontSize: 48,
        color: 'var(--lutra-blue)',
        opacity: 0.35,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        marginBottom: 20
      }
    }, p.n), React.createElement("h3", {
      style: {
        fontSize: 22,
        color: 'var(--lutra-navy)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        margin: '0 0 10px'
      }
    }, p.t), React.createElement("p", {
      style: {
        color: 'var(--fg-2)',
        fontSize: 15,
        lineHeight: 1.6,
        margin: 0
      }
    }, p.b));
  })))), React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--lutra-navy)',
      color: '#fff'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-head reveal",
    style: {
      textAlign: 'left',
      marginLeft: 0,
      marginRight: 0,
      maxWidth: 760
    }
  }, React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--lutra-teal)'
    }
  }, "The team"), React.createElement("h2", {
    style: {
      color: '#fff'
    }
  }, "The people behind Lutra.")), React.createElement("div", {
    className: "team-grid reveal"
  }, [{
    name: 'Sam Evans',
    role: 'Co-Founder & Consultant Ophthalmologist',
    line: 'Seasoned eye care innovator',
    photo: 'assets/team/Sam_Evans.jpeg'
  }, {
    name: 'Charles Solanki',
    role: 'Co-Founder & CEO',
    line: '10 years building startups',
    photo: 'assets/team/Charles_Solanki.png'
  }, {
    name: 'Conor Ramsden',
    role: 'Co-Founder & Consultant Ophthalmologist',
    line: 'Moorfields-trained, UCL PhD',
    photo: 'assets/team/Conor_Ramsden.jpeg'
  }, {
    name: 'Lauretta Wozniczko',
    role: 'Product & Ops Lead',
    line: '20+ yrs product management',
    photo: 'assets/team/Lauretta_Wozniczko.jpeg'
  }, {
    name: 'Yorke Rossington',
    role: 'Lead Software Engineer',
    line: '15+ yrs healthtech engineering',
    photo: 'assets/team/Yorke_Rossington.jpeg'
  }, {
    name: 'Jess Walker',
    role: 'Software Engineer',
    line: '8+ yrs software engineering',
    photo: 'assets/team/Jess_Walker.jpeg'
  }].map(function (p) {
    return React.createElement(TeamCard, _objectSpread({
      key: p.name
    }, p));
  })), React.createElement("style", null, "\n              .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }\n              @media (max-width: 1080px) { .team-grid { grid-template-columns: repeat(3, 1fr); } }\n              @media (max-width: 720px)  { .team-grid { grid-template-columns: repeat(2, 1fr); } }\n            "))), React.createElement("section", {
    className: "section",
    style: {
      background: 'var(--bg-1)'
    }
  }, React.createElement("div", {
    className: "container",
    style: {
      textAlign: 'center',
      maxWidth: 720
    }
  }, React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px, 4vw, 52px)',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      margin: '0 0 20px',
      color: 'var(--lutra-navy)'
    }
  }, "Come and build the connection with us."), React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--fg-2)',
      margin: '0 0 32px'
    }
  }, "Whether you are a clinician who wants to try Lutra or an organisation exploring a partnership, we would like to hear from you."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: "https://www.lutraconnect.com/app/"
  }, "Get started", React.createElement("span", null, "→")), React.createElement("a", {
    className: "btn btn-ghost btn-lg",
    href: "mailto:iris@lutrahealth.com"
  }, "Email the team"))))), React.createElement(SiteFooter, null));
}
function TeamCard(_ref2) {
  var name = _ref2.name,
    role = _ref2.role,
    line = _ref2.line,
    photo = _ref2.photo;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    errored = _React$useState2[0],
    setErrored = _React$useState2[1];
  var initials = name.split(' ').map(function (w) {
    return w[0];
  }).join('').slice(0, 2).toUpperCase();
  return React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.04)',
      borderRadius: 16,
      padding: 16,
      border: '1px solid rgba(255,255,255,0.10)'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4 / 5',
      borderRadius: 10,
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.06)',
      marginBottom: 16
    }
  }, !errored ? React.createElement("img", {
    src: photo,
    alt: name,
    onError: function onError() {
      return setErrored(true);
    },
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'rgba(255,255,255,0.55)'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: '-0.02em',
      color: 'rgba(255,255,255,0.7)'
    }
  }, initials), React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: 10,
      color: 'rgba(255,255,255,0.4)',
      padding: '0 12px',
      textAlign: 'center',
      wordBreak: 'break-all'
    }
  }, photo.split('/').pop()))), React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: '#fff',
      letterSpacing: '-0.01em',
      marginBottom: 5
    }
  }, name), React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--lutra-teal)',
      fontWeight: 600,
      lineHeight: 1.35,
      marginBottom: 8
    }
  }, role), React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.65)',
      lineHeight: 1.4
    }
  }, line));
}
window.AboutPage = AboutPage;

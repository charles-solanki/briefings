function MockAdviceThread(_ref) {
  var _ref$compact = _ref.compact,
    compact = _ref$compact === void 0 ? false : _ref$compact;
  return React.createElement("div", {
    className: "ui-frame",
    style: {
      width: '100%',
      maxWidth: 560
    }
  }, React.createElement("div", {
    className: "ui-frame-bar"
  }, React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("div", {
    style: {
      marginLeft: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  })), "Advice & Guidance \xB7 RE-2026-0417"), React.createElement("span", {
    style: {
      marginLeft: 'auto'
    },
    className: "badge badge-ok"
  }, React.createElement("span", {
    className: "badge-dot",
    style: {
      background: '#01c7a9'
    }
  }), "Replied \xB7 38 min")), React.createElement("div", {
    style: {
      padding: compact ? '18px 22px' : '22px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      background: 'var(--bg-2)',
      borderRadius: 12,
      border: '1px solid var(--border-1)'
    }
  }, React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: 'var(--lutra-lilac)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--lutra-navy)',
      fontWeight: 700,
      fontSize: 13,
      fontFamily: 'var(--font-display)'
    }
  }, "JM"), React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13,
      lineHeight: 1.35
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--fg-1)',
      fontFamily: 'var(--font-display)'
    }
  }, "J. Morrison \xB7 ♀ 62"), React.createElement("div", {
    style: {
      color: 'var(--fg-3)'
    }
  }, "Suspected AMD \xB7 left eye \xB7 hx of dry AMD")), React.createElement("span", {
    className: "badge badge-info"
  }, "NHS")), React.createElement(MsgBubble, {
    author: "You \xB7 Optometrist",
    role: "sender",
    time: "Today \xB7 14:02"
  }, React.createElement("p", {
    style: {
      margin: '0 0 8px'
    }
  }, "Noticed new drusen cluster on OCT, left macula. VA dropped 6/9 → 6/18 in 4 weeks. Patient reports metamorphopsia."), React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--fg-3)',
      fontSize: 13
    }
  }, "Attached: OCT \xB7 fundus photo \xB7 Amsler grid"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 10
    }
  }, React.createElement(Thumbnail, {
    label: "OCT \xB7 L"
  }), React.createElement(Thumbnail, {
    label: "Fundus \xB7 L"
  }))), React.createElement(MsgBubble, {
    author: "Mr A. Khan \xB7 Consultant",
    role: "consultant",
    time: "Today \xB7 14:40"
  }, React.createElement("p", {
    style: {
      margin: '0 0 6px'
    }
  }, "Agree, features consistent with conversion to wet AMD. Please ", React.createElement("b", null, "refer urgently"), " to the macular clinic within 2 weeks. I've marked this thread as the referral cover note."), React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--fg-3)',
      fontSize: 13
    }
  }, "Reassurance: no need for same-day A&E. Patient can be told.")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      paddingTop: 6,
      borderTop: '1px dashed var(--border-1)',
      alignItems: 'center'
    }
  }, React.createElement("button", {
    className: "btn btn-primary btn-sm",
    style: {
      fontSize: 13
    }
  }, "Convert to referral"), React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      fontSize: 13
    }
  }, "Reply"), React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, "Audit log \xB7 2 events"))));
}
function MsgBubble(_ref2) {
  var author = _ref2.author,
    role = _ref2.role,
    time = _ref2.time,
    children = _ref2.children;
  var sender = role === 'sender';
  var consultant = role === 'consultant';
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: sender ? 'row-reverse' : 'row',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      flexShrink: 0,
      background: consultant ? 'var(--lutra-navy)' : sender ? 'var(--lutra-blue)' : 'var(--lutra-lilac)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12,
      fontFamily: 'var(--font-display)'
    }
  }, consultant ? 'AK' : 'YO'), React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: '85%'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 12,
      color: 'var(--fg-3)',
      marginBottom: 4,
      justifyContent: sender ? 'flex-end' : 'flex-start'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, author), React.createElement("span", null, "\xB7 ", time)), React.createElement("div", {
    style: {
      background: consultant ? 'var(--lutra-navy)' : sender ? 'var(--lutra-blue-100)' : 'var(--bg-2)',
      color: consultant ? '#fff' : 'var(--fg-1)',
      padding: '12px 14px',
      borderRadius: 14,
      borderTopLeftRadius: sender ? 14 : 4,
      borderTopRightRadius: sender ? 4 : 14,
      fontSize: 14,
      lineHeight: 1.5
    }
  }, children)));
}
function Thumbnail(_ref3) {
  var label = _ref3.label;
  return React.createElement("div", {
    style: {
      width: 96,
      height: 64,
      borderRadius: 8,
      border: '1px solid var(--border-1)',
      position: 'relative',
      background: 'radial-gradient(circle at 55% 50%, #5a3a1b 0%, #2a1708 40%, #0d0804 80%)',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 55% 50%, rgba(255,180,100,0.4) 0%, transparent 28%)'
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      left: 6,
      bottom: 4,
      fontSize: 10,
      color: '#fff',
      textShadow: '0 1px 2px rgba(0,0,0,0.6)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600
    }
  }, label));
}
function MockInbox() {
  var rows = [{
    id: 'RE-2026-0417',
    name: 'J. Morrison',
    age: 62,
    dx: 'Suspected wet AMD',
    status: 'advice',
    time: '38m',
    pri: 'urgent'
  }, {
    id: 'RE-2026-0411',
    name: 'D. Afolabi',
    age: 71,
    dx: 'Cataract · Gr 3',
    status: 'referred',
    time: '2h',
    pri: 'routine'
  }, {
    id: 'RE-2026-0408',
    name: 'S. Patel',
    age: 56,
    dx: 'IOP 28 R · field defect',
    status: 'advice',
    time: '3h',
    pri: 'urgent'
  }, {
    id: 'RE-2026-0402',
    name: "M. O’Brien",
    age: 48,
    dx: 'Post-op follow-up',
    status: 'postop',
    time: 'yesterday',
    pri: 'routine'
  }, {
    id: 'RE-2026-0399',
    name: 'R. Singh',
    age: 67,
    dx: 'Vitreous floaters',
    status: 'closed',
    time: '2d',
    pri: 'routine'
  }];
  var statusStyle = {
    advice: {
      bg: 'var(--lutra-blue-100)',
      fg: 'var(--lutra-blue-hover)',
      label: 'Advice'
    },
    referred: {
      bg: '#fef3d9',
      fg: '#8a5a00',
      label: 'Referred'
    },
    postop: {
      bg: 'var(--success-soft)',
      fg: '#00735e',
      label: 'Post-op'
    },
    closed: {
      bg: 'var(--bg-4)',
      fg: 'var(--fg-3)',
      label: 'Closed'
    }
  };
  return React.createElement("div", {
    className: "ui-frame",
    style: {
      width: '100%'
    }
  }, React.createElement("div", {
    className: "ui-frame-bar"
  }, React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("div", {
    style: {
      marginLeft: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, "Inbox \xB7 Manchester Eye Clinic"), React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, "5 open \xB7 12 closed this week")), React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-1)',
      display: 'flex',
      gap: 8,
      fontSize: 13,
      alignItems: 'center'
    }
  }, React.createElement("span", {
    className: "badge badge-info"
  }, "All (17)"), React.createElement("span", {
    style: {
      padding: '5px 11px',
      borderRadius: 999,
      color: 'var(--fg-3)',
      fontSize: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600
    }
  }, "Advice"), React.createElement("span", {
    style: {
      padding: '5px 11px',
      borderRadius: 999,
      color: 'var(--fg-3)',
      fontSize: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600
    }
  }, "Referrals"), React.createElement("span", {
    style: {
      padding: '5px 11px',
      borderRadius: 999,
      color: 'var(--fg-3)',
      fontSize: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600
    }
  }, "Post-op"), React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--fg-3)',
      fontSize: 12
    }
  }, React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), "Search patients, DX, ID…")), React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13
    }
  }, React.createElement("thead", null, React.createElement("tr", {
    style: {
      color: 'var(--fg-3)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px 18px',
      fontWeight: 600
    }
  }, "Patient"), React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px',
      fontWeight: 600
    }
  }, "Assessment"), React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '10px',
      fontWeight: 600
    }
  }, "Status"), React.createElement("th", {
    style: {
      textAlign: 'right',
      padding: '10px 18px',
      fontWeight: 600
    }
  }, "Updated"))), React.createElement("tbody", null, rows.map(function (r, i) {
    return React.createElement("tr", {
      key: r.id,
      style: {
        borderTop: '1px solid var(--border-1)',
        background: i === 0 ? 'rgba(44,72,237,0.04)' : 'transparent'
      }
    }, React.createElement("td", {
      style: {
        padding: '12px 18px'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, r.pri === 'urgent' && React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: '#e5484d'
      }
    }), r.pri === 'routine' && React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: 'var(--border-2)'
      }
    }), React.createElement("div", null, React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--fg-1)',
        fontFamily: 'var(--font-display)'
      }
    }, r.name), React.createElement("div", {
      style: {
        color: 'var(--fg-3)',
        fontSize: 11
      }
    }, r.id, " \xB7 age ", r.age)))), React.createElement("td", {
      style: {
        padding: '12px 10px',
        color: 'var(--fg-2)'
      }
    }, r.dx), React.createElement("td", {
      style: {
        padding: '12px 10px'
      }
    }, React.createElement("span", {
      style: {
        padding: '4px 10px',
        borderRadius: 999,
        fontSize: 11,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        background: statusStyle[r.status].bg,
        color: statusStyle[r.status].fg
      }
    }, statusStyle[r.status].label)), React.createElement("td", {
      style: {
        padding: '12px 18px',
        textAlign: 'right',
        color: 'var(--fg-3)',
        fontSize: 12
      }
    }, r.time));
  }))));
}
function ConnectionDiagram() {
  var lilac = '#7c95f7';
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 0,
      fontFamily: 'var(--font-display)',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr auto 1fr',
      alignItems: 'center',
      gap: 16,
      position: 'relative',
      zIndex: 1
    },
    className: "diagram-row"
  }, React.createElement(DiagramCard, {
    eyebrow: "Community",
    title: "Optometry",
    body: "High-street eye exams, OCT, fundus imaging."
  }), React.createElement(FlowArrow, {
    colour: lilac
  }), React.createElement(DiagramCard, {
    variant: "navy",
    eyebrow: "The connective layer",
    centerLogo: true
  }), React.createElement(FlowArrow, {
    colour: lilac
  }), React.createElement(DiagramCard, {
    eyebrow: "Secondary care",
    title: "Ophthalmology",
    body: "Consultant opinion, surgery, complex medical eye care."
  })), React.createElement("div", {
    className: "diagram-tie-layer",
    style: {
      position: 'relative',
      height: 56,
      marginTop: 8,
      marginBottom: 8
    }
  }, React.createElement("svg", {
    viewBox: "0 0 100 56",
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'visible'
    },
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M 50 56 Q 50 28, 17 0",
    fill: "none",
    stroke: lilac,
    strokeWidth: "1.4",
    strokeDasharray: "3 4",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }), React.createElement("path", {
    d: "M 50 56 Q 50 28, 83 0",
    fill: "none",
    stroke: lilac,
    strokeWidth: "1.4",
    strokeDasharray: "3 4",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16,
      position: 'relative',
      zIndex: 1
    },
    className: "diagram-row"
  }, React.createElement("div", null), React.createElement("div", {
    style: {
      background: '#e6f8f3',
      border: '1px solid #b8e8db',
      borderRadius: 16,
      padding: '18px 22px',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#00735e',
      marginBottom: 6
    }
  }, "Patient layer"), React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--lutra-navy)',
      letterSpacing: '-0.01em'
    }
  }, "Patient"), React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#3a6b5e',
      marginTop: 4,
      fontFamily: 'var(--font-body)'
    }
  }, "PROMs, PREMs and pre-op education")), React.createElement("div", null)), React.createElement("style", null, "\n        @media (max-width: 720px) {\n          .diagram-row { grid-template-columns: 1fr !important; }\n          .diagram-row .flow-arrow-wrap { transform: rotate(90deg); justify-self: center; }\n          .diagram-tie-layer { display: none; }\n        }\n      "));
}
function DiagramCard(_ref4) {
  var eyebrow = _ref4.eyebrow,
    title = _ref4.title,
    body = _ref4.body,
    variant = _ref4.variant,
    centerLogo = _ref4.centerLogo;
  var isNavy = variant === 'navy';
  return React.createElement("div", {
    style: {
      background: isNavy ? 'var(--lutra-navy)' : '#fff',
      color: isNavy ? '#fff' : 'var(--lutra-navy)',
      border: isNavy ? 'none' : '1px solid var(--border-1)',
      borderRadius: 16,
      padding: centerLogo ? '26px 22px' : '22px 22px',
      textAlign: 'center',
      boxShadow: isNavy ? '0 18px 36px -16px rgba(0,31,84,0.35)' : 'var(--shadow-sm)',
      minHeight: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 6
    }
  }, eyebrow && React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: isNavy ? 'var(--lutra-blue-400)' : 'var(--fg-3)',
      marginBottom: 2
    }
  }, eyebrow), centerLogo ? React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4px 0 2px'
    }
  }, typeof window !== 'undefined' && window.LutraConnectLockup ? React.createElement(window.LutraConnectLockup, {
    height: 26,
    onDark: true
  }) : React.createElement("span", {
    style: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 20,
      color: '#fff'
    }
  }, "lutra connect")) : React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.015em'
    }
  }, title), body && React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.45,
      color: isNavy ? 'rgba(255,255,255,0.7)' : 'var(--fg-3)',
      fontFamily: 'var(--font-body)',
      maxWidth: 200,
      margin: '0 auto'
    }
  }, body)));
}
function FlowArrow(_ref5) {
  var colour = _ref5.colour;
  return React.createElement("div", {
    className: "flow-arrow-wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44
    }
  }, React.createElement("svg", {
    width: "44",
    height: "20",
    viewBox: "0 0 44 20",
    fill: "none",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M4 7 L38 7 M34 3 L38 7 L34 11",
    stroke: colour,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), React.createElement("path", {
    d: "M40 13 L6 13 M10 9 L6 13 L10 17",
    stroke: colour,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  })));
}
function MockProms() {
  var items = [{
    label: 'Visual function',
    v: 82,
    colour: 'var(--lutra-blue)'
  }, {
    label: 'Mobility / driving',
    v: 68,
    colour: 'var(--lutra-blue)'
  }, {
    label: 'Reading',
    v: 74,
    colour: 'var(--lutra-blue)'
  }, {
    label: 'Overall satisfaction',
    v: 91,
    colour: 'var(--lutra-teal)'
  }];
  return React.createElement("div", {
    className: "ui-frame",
    style: {
      width: '100%',
      maxWidth: 420
    }
  }, React.createElement("div", {
    className: "ui-frame-bar"
  }, React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("span", {
    className: "ui-dot"
  }), React.createElement("div", {
    style: {
      marginLeft: 12,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, "PROMs \xB7 Cataract \xB7 6 weeks post-op")), React.createElement("div", {
    style: {
      padding: '22px 24px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 6
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display-lg)',
      fontWeight: 800,
      fontSize: 48,
      color: 'var(--lutra-navy)',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, "+23"), React.createElement("span", {
    style: {
      color: 'var(--fg-3)',
      fontSize: 13
    }
  }, "pts vs baseline")), React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-3)',
      marginBottom: 20
    }
  }, "n = 128 completed \xB7 94% response"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(function (i) {
    return React.createElement("div", {
      key: i.label
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12,
        marginBottom: 5,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        color: 'var(--fg-2)'
      }
    }, React.createElement("span", null, i.label), React.createElement("span", {
      style: {
        color: 'var(--fg-1)'
      }
    }, i.v)), React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--bg-3)',
        borderRadius: 999,
        overflow: 'hidden'
      }
    }, React.createElement("div", {
      style: {
        width: "".concat(i.v, "%"),
        height: '100%',
        background: i.colour,
        borderRadius: 999
      }
    })));
  })), React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '10px 12px',
      background: 'var(--bg-2)',
      borderRadius: 10,
      fontSize: 12,
      color: 'var(--fg-3)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), React.createElement("path", {
    d: "M14 2v6h6"
  })), "Ready to export \xB7 PHIN & NOD formatted")));
}
Object.assign(window, {
  MockAdviceThread: MockAdviceThread,
  MockInbox: MockInbox,
  ConnectionDiagram: ConnectionDiagram,
  MockProms: MockProms,
  Thumbnail: Thumbnail,
  MsgBubble: MsgBubble
});

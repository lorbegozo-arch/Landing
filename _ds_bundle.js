/* @ds-bundle: {"format":3,"namespace":"SeguimientoMelia_a0d2b1","components":[],"sourceHashes":{"tracker/Dashboard.jsx":"76b6946ba4d1","tracker/Depto.jsx":"489b7af1d171","tracker/Gantt.jsx":"3da8841cc391","tracker/KPIs.jsx":"8b1cc89745a6","tracker/Plan.jsx":"4c955a2e5195","tracker/Tareas.jsx":"fbce83186a06","tracker/utils.jsx":"fa706c5c4d91","ui_kits/app/Icon.jsx":"a6aa49a60bfd","ui_kits/app/Primitives.jsx":"2eb7ac198b8a","ui_kits/app/Screens.jsx":"53d0ac446ec1","ui_kits/app/ios-frame.jsx":"d67eb3ffe562","ui_kits/website/Sections.jsx":"124cad1ddaf6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SeguimientoMelia_a0d2b1 = window.SeguimientoMelia_a0d2b1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// tracker/Dashboard.jsx
try { (() => {
/* Fisify tracker — Dashboard tab */

function Ring({
  pct,
  color = '#8B75EE',
  size = 72,
  strokeW = 8
}) {
  const r = size / 2 - strokeW / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(1, pct || 0));
  const off = c * (1 - clamped);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: "#EBE6F7",
    strokeWidth: strokeW,
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: color,
    strokeWidth: strokeW,
    fill: "none",
    strokeDasharray: c,
    strokeDashoffset: off,
    strokeLinecap: "round",
    transform: `rotate(-90 ${size / 2} ${size / 2})`,
    style: {
      transition: 'stroke-dashoffset 600ms cubic-bezier(0.22,1,0.36,1)'
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: size / 2,
    y: size / 2,
    className: "ring-txt"
  }, Math.round(clamped * 100), "%"));
}
function LineChart({
  data,
  width = 520,
  height = 220,
  labels = [],
  yMax
}) {
  const pad = {
    l: 36,
    r: 18,
    t: 14,
    b: 28
  };
  const W = width - pad.l - pad.r;
  const H = height - pad.t - pad.b;
  const max = yMax || Math.max(...data.map(d => d.v || 0), 1) * 1.15;
  const pts = data.map((d, i) => {
    const x = pad.l + (data.length === 1 ? W / 2 : i * W / (data.length - 1));
    const y = pad.t + H - H * (d.v || 0) / max;
    return {
      x,
      y,
      v: d.v,
      l: d.l
    };
  });
  const path = pts.map((p, i) => (i ? 'L' : 'M') + p.x + ',' + p.y).join(' ');
  const area = path + ` L ${pts[pts.length - 1].x},${pad.t + H} L ${pts[0].x},${pad.t + H} Z`;
  const ticks = 4;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "lcg",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#8B75EE",
    stopOpacity: "0.25"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#8B75EE",
    stopOpacity: "0"
  }))), Array.from({
    length: ticks + 1
  }).map((_, i) => {
    const y = pad.t + H * i / ticks;
    const val = max - max * i / ticks;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: pad.l,
      y1: y,
      x2: pad.l + W,
      y2: y,
      stroke: "#EDECF2",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: pad.l - 8,
      y: y + 4,
      textAnchor: "end",
      fontSize: "10",
      fill: "#8E8DA4",
      fontFamily: "Outfit"
    }, Math.round(val).toLocaleString('es-ES')));
  }), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#lcg)"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "#8B75EE",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: p.x,
    cy: p.y,
    r: "4",
    fill: "#fff",
    stroke: "#8B75EE",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: p.x,
    y: p.y - 12,
    textAnchor: "middle",
    fontSize: "10",
    fill: "#2A2B43",
    fontWeight: "600",
    fontFamily: "Outfit"
  }, p.v?.toLocaleString?.('es-ES') ?? ''))), pts.map((p, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: p.x,
    y: pad.t + H + 18,
    textAnchor: "middle",
    fontSize: "10",
    fill: "#8E8DA4",
    fontFamily: "Outfit"
  }, p.l)));
}
function HBar({
  items,
  maxBy = 'v',
  width = 400,
  height = 220,
  accent = '#8B75EE'
}) {
  const max = Math.max(...items.map(i => i[maxBy] || 0), 1);
  const rowH = 28;
  const gap = 8;
  const pad = {
    l: 120,
    r: 60,
    t: 4,
    b: 4
  };
  const H = items.length * (rowH + gap);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${H + pad.t + pad.b}`,
    width: "100%"
  }, items.map((it, i) => {
    const y = pad.t + i * (rowH + gap);
    const w = (it[maxBy] || 0) / max * (width - pad.l - pad.r);
    const color = it.color || accent;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("text", {
      x: pad.l - 10,
      y: y + rowH / 2 + 4,
      textAnchor: "end",
      fontSize: "12",
      fill: "#2A2B43",
      fontFamily: "Outfit",
      fontWeight: "500"
    }, it.label), /*#__PURE__*/React.createElement("rect", {
      x: pad.l,
      y: y,
      width: width - pad.l - pad.r,
      height: rowH,
      fill: "#F3F1F7",
      rx: "6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: pad.l,
      y: y,
      width: w,
      height: rowH,
      fill: color,
      rx: "6",
      style: {
        transition: 'width 500ms cubic-bezier(0.22,1,0.36,1)'
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: pad.l + w + 8,
      y: y + rowH / 2 + 4,
      fontSize: "11",
      fill: "#3F3C63",
      fontFamily: "Outfit",
      fontWeight: "600"
    }, it.valueLabel || it[maxBy]));
  }));
}
function Sparkline({
  vals,
  color = '#8B75EE',
  width = 80,
  height = 28
}) {
  const nums = vals.filter(v => typeof v === 'number' && !isNaN(v));
  if (nums.length < 2) return null;
  const max = Math.max(...nums),
    min = Math.min(...nums);
  const r = Math.max(max - min, 1);
  const pts = nums.map((v, i) => {
    const x = i * width / (nums.length - 1);
    const y = height - (v - min) / r * (height - 4) - 2;
    return [x, y];
  });
  const path = pts.map((p, i) => (i ? 'L' : 'M') + p[0] + ',' + p[1]).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    className: "spark"
  }, /*#__PURE__*/React.createElement("path", {
    d: path,
    stroke: color,
    strokeWidth: "1.75",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Dashboard({
  state
}) {
  // Extract key metrics from KPIs
  const findKpi = label => state.kpis.find(k => k.metric.toLowerCase().includes(label.toLowerCase()));
  const total = findKpi('empleados totales')?.m1?.real || 427;
  const registroPct = findKpi('% registro')?.m1?.real || 0;
  const activacionPct = findKpi('% activación')?.m1?.real || 0;
  const mauPct = findKpi('% mau')?.m1?.real || 0;
  const registroTarget = findKpi('% registro')?.m1?.target || 0.5;
  const activacionTarget = findKpi('% activación')?.m1?.target || 0.25;
  const mauTarget = findKpi('% mau')?.m1?.target || 0.1;
  const registroAbs = findKpi('empleados registrados')?.m1?.real || 0;
  const sesiones = findKpi('total sesiones')?.m1?.real || 0;
  const painAvg = findKpi('nivel dolor')?.m1?.real || 0;
  const painTgt = findKpi('nivel dolor')?.m1?.target || 3;
  const encuestas = findKpi('encuestas dolor')?.m1?.real || 0;
  const rating = findKpi('rating sesiones')?.m1?.s2 || findKpi('rating sesiones')?.m1?.s1 || null;

  // Task progress
  const byStatus = {};
  state.tasks.forEach(t => {
    const s = statusFromText(t.status);
    byStatus[s] = (byStatus[s] || 0) + 1;
  });
  const totalTasks = state.tasks.length;
  const doneTasks = byStatus.done || 0;
  const taskPct = totalTasks ? doneTasks / totalTasks : 0;

  // Line chart: weekly registrations
  const regWeek = findKpi('empleados registrados');
  const weeklyData = [{
    l: 'S1',
    v: regWeek?.m1?.s1 || null
  }, {
    l: 'S2',
    v: regWeek?.m1?.s2 || null
  }, {
    l: 'S3',
    v: regWeek?.m1?.s3 || null
  }, {
    l: 'S4',
    v: regWeek?.m1?.s4 || null
  }, {
    l: 'M2',
    v: regWeek?.m2?.real || null
  }, {
    l: 'M3',
    v: regWeek?.m3?.real || null
  }].filter(d => typeof d.v === 'number' && d.v > 0);

  // Dept bar
  const deptChart = state.depts.map(d => ({
    label: d.name.length > 22 ? d.name.slice(0, 21) + '…' : d.name,
    v: d.pctRegistro || 0,
    valueLabel: fmtPct(d.pctRegistro),
    color: d.pctRegistro >= 0.5 ? '#AFD7AE' : d.pctRegistro >= 0.35 ? 'var(--purple)' : 'var(--accent)'
  })).sort((a, b) => b.v - a.v);

  // Body zones
  const zones = state.questionnaire.bodyZones.map(z => ({
    label: z.zone,
    v: z.pct || 0,
    valueLabel: fmtPct(z.pct),
    color: 'var(--accent)'
  })).sort((a, b) => b.v - a.v);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "North Star \xB7 Piloto Meli\xE1"), /*#__PURE__*/React.createElement("h1", {
    className: "h-title"
  }, /*#__PURE__*/React.createElement("strong", null, "\u221240% absentismo MSK"), " en 3 meses."), /*#__PURE__*/React.createElement("div", {
    className: "h-sub"
  }, "Lanzamiento 8 abr 2026.")), /*#__PURE__*/React.createElement(HeroKpi, {
    label: "Registro",
    pct: registroPct,
    target: registroTarget
  }), /*#__PURE__*/React.createElement(HeroKpi, {
    label: "Activaci\xF3n",
    pct: activacionPct,
    target: activacionTarget
  }), /*#__PURE__*/React.createElement(HeroKpi, {
    label: "MAU",
    pct: mauPct,
    target: mauTarget
  }), /*#__PURE__*/React.createElement(HeroKpi, {
    label: "Tareas",
    pct: taskPct,
    target: 1,
    valueOverride: `${doneTasks}/${totalTasks}`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dash-grid"
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Empleados totales",
    value: fmtNum(total),
    sub: "Plantilla Meli\xE1 Castilla"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Registrados (acum.)",
    value: fmtNum(registroAbs),
    sub: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "delta up"
    }, fmtPct(registroPct)), " \xB7 target ", fmtPct(registroTarget)),
    spark: /*#__PURE__*/React.createElement(Sparkline, {
      vals: [regWeek?.m1?.s1, regWeek?.m1?.s2].filter(v => typeof v === 'number')
    })
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Sesiones realizadas",
    value: fmtNum(sesiones),
    sub: /*#__PURE__*/React.createElement("span", null, "Promedio ", /*#__PURE__*/React.createElement("strong", null, (sesiones / Math.max(registroAbs, 1)).toFixed(1)), " / usuario")
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Dolor promedio",
    value: painAvg ? painAvg.toFixed(2) : '—',
    valueUnit: /*#__PURE__*/React.createElement("span", {
      className: "unit"
    }, "/10"),
    sub: /*#__PURE__*/React.createElement("span", null, "Target ", /*#__PURE__*/React.createElement("strong", null, "\u2264", painTgt), " \xB7 ", encuestas, " encuestas")
  })), /*#__PURE__*/React.createElement("div", {
    className: "chart-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Progreso hacia objetivos"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Real vs target M1 \xB7 abril"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(RingRow, {
    label: "Registro",
    pct: registroPct,
    target: registroTarget,
    color: "var(--purple)"
  }), /*#__PURE__*/React.createElement(RingRow, {
    label: "Activaci\xF3n",
    pct: activacionPct,
    target: activacionTarget,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement(RingRow, {
    label: "MAU",
    pct: mauPct,
    target: mauTarget,
    color: "#AFD7AE"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "chart-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Registro por departamento"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "% empleados registrados \xB7 ", state.depts.length, " \xE1reas"))), /*#__PURE__*/React.createElement(HBar, {
    items: deptChart,
    width: 720,
    height: 260
  })), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Zonas con m\xE1s dolor"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Cuestionario baseline \xB7 % respuestas"))), /*#__PURE__*/React.createElement(HBar, {
    items: zones,
    width: 460,
    height: 220
  }))), /*#__PURE__*/React.createElement("div", {
    className: "chart-grid-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Estado de tareas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, STATUSES.filter(s => s.id !== 'mile').map(s => {
    const count = byStatus[s.id] || 0;
    const pct = totalTasks ? count / totalTasks : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: 'pill ' + s.cls
    }, s.label), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 13px/1 Outfit',
        color: '#2A2B43'
      }
    }, count)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: '#F3F1F7',
        borderRadius: 999,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: pct * 100 + '%',
        background: s.id === 'done' ? '#AFD7AE' : s.id === 'prog' ? '#BFD0FF' : s.id === 'block' ? '#F37C7C' : '#B4B3C4',
        transition: 'width 400ms cubic-bezier(0.22,1,0.36,1)'
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Equipo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, Object.keys(OWNERS).filter(k => k !== 'Todos').map(name => {
    const tasks = state.tasks.filter(t => t.owner === name);
    const done = tasks.filter(t => statusFromText(t.status) === 'done').length;
    return /*#__PURE__*/React.createElement("div", {
      key: name,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: name,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 13px/1.2 Outfit',
        color: '#2A2B43'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 11px/1.2 Outfit',
        color: '#6B6A85',
        marginTop: 2
      }
    }, done, "/", tasks.length, " completadas")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 13px/1 Outfit',
        color: '#8B75EE'
      }
    }, tasks.length ? Math.round(done / tasks.length * 100) : 0, "%"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Cuestionarios Meli\xE1")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '300 36px/1 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.03em'
    }
  }, state.questionnaire.participation.reduce((s, p) => s + (p.baseline || 0), 0), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1 Outfit',
      color: '#6B6A85',
      marginLeft: 6
    }
  }, "respuestas baseline")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, state.questionnaire.pain.filter(p => p.dept !== 'GLOBAL').map(p => /*#__PURE__*/React.createElement("div", {
    key: p.dept,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 0',
      borderBottom: '1px solid #F3F1F7'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 Outfit',
      color: '#3F3C63'
    }
  }, p.dept), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1 Outfit',
      color: p.baseline > 5 ? '#7a1f2b' : '#2A2B43'
    }
  }, p.baseline?.toFixed(2) ?? '—', " / 10")))))));
}
function HeroKpi({
  label,
  pct,
  target,
  valueOverride
}) {
  const p = target ? Math.min(1, (pct || 0) / target) : 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, valueOverride ?? fmtPct(pct), !valueOverride && target !== 1 && /*#__PURE__*/React.createElement("span", {
    className: "target"
  }, "/ ", fmtPct(target))), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: p * 100 + '%'
    }
  })));
}
function RingRow({
  label,
  pct,
  target,
  color
}) {
  const hasData = typeof pct === 'number' && pct > 0;
  const progress = hasData && target ? (pct || 0) / target : 0;
  const reached = progress >= 1;
  return /*#__PURE__*/React.createElement("div", {
    className: "ring-wrap"
  }, /*#__PURE__*/React.createElement(Ring, {
    pct: progress,
    color: reached ? '#7CB6A8' : color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.01em'
    }
  }, label), reached && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1 Outfit',
      color: '#7CB6A8',
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    }
  }, "Conseguido")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 22px/1 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.02em'
    }
  }, hasData ? fmtPct(pct) : '—'), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1 Outfit',
      color: '#8E8DA4'
    }
  }, hasData ? `de ${fmtPct(target)}` : `target ${fmtPct(target)} · pendiente`))));
}
function Metric({
  label,
  value,
  valueUnit,
  sub,
  spark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, spark, /*#__PURE__*/React.createElement("div", {
    className: "m-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "m-val"
  }, value, valueUnit), /*#__PURE__*/React.createElement("div", {
    className: "m-sub"
  }, sub));
}
Object.assign(window, {
  Dashboard,
  Ring,
  LineChart,
  HBar,
  Sparkline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tracker/Dashboard.jsx", error: String((e && e.message) || e) }); }

// tracker/Depto.jsx
try { (() => {
/* Fisify tracker — Departamento + Cuestionario Meliá tabs */

function Departamento({
  state,
  setState
}) {
  const update = (i, key, val) => {
    const copy = [...state.depts];
    copy[i] = {
      ...copy[i],
      [key]: val
    };
    // Auto-recalc pcts
    if (key === 'total' || key === 'registered') {
      copy[i].pctRegistro = copy[i].total ? copy[i].registered / copy[i].total : 0;
    }
    if (key === 'registered' || key === 'activeSessions') {
      copy[i].pctActivacion = copy[i].total ? (copy[i].activeSessions || 0) / copy[i].total : 0;
    }
    if (key === 'activeSessions' || key === 'totalSessions') {
      copy[i].perUser = copy[i].activeSessions ? (copy[i].totalSessions || 0) / copy[i].activeSessions : 0;
    }
    setState({
      ...state,
      depts: copy
    });
  };
  const totals = state.depts.reduce((a, d) => ({
    total: a.total + (d.total || 0),
    registered: a.registered + (d.registered || 0),
    activeSessions: a.activeSessions + (d.activeSessions || 0),
    totalSessions: a.totalSessions + (d.totalSessions || 0)
  }), {
    total: 0,
    registered: 0,
    activeSessions: 0,
    totalSessions: 0
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "chart-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "% Registro por departamento"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Editable \u2014 los valores se actualizan en vivo"))), /*#__PURE__*/React.createElement(HBar, {
    items: [...state.depts].sort((a, b) => (b.pctRegistro || 0) - (a.pctRegistro || 0)).map(d => ({
      label: d.name.length > 22 ? d.name.slice(0, 21) + '…' : d.name,
      v: d.pctRegistro || 0,
      valueLabel: fmtPct(d.pctRegistro),
      color: (d.pctRegistro || 0) >= 0.5 ? '#AFD7AE' : (d.pctRegistro || 0) >= 0.35 ? 'var(--purple)' : 'var(--accent)'
    })),
    width: 720,
    height: 280
  })), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Resumen global")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatRow, {
    label: "Empleados totales",
    value: fmtNum(totals.total)
  }), /*#__PURE__*/React.createElement(StatRow, {
    label: "Registrados",
    value: fmtNum(totals.registered),
    sub: fmtPct(totals.total ? totals.registered / totals.total : 0)
  }), /*#__PURE__*/React.createElement(StatRow, {
    label: "Con sesi\xF3n",
    value: fmtNum(totals.activeSessions),
    sub: fmtPct(totals.total ? totals.activeSessions / totals.total : 0)
  }), /*#__PURE__*/React.createElement(StatRow, {
    label: "Sesiones totales",
    value: fmtNum(totals.totalSessions)
  }), /*#__PURE__*/React.createElement(StatRow, {
    label: "Sesiones / usuario",
    value: totals.activeSessions ? (totals.totalSessions / totals.activeSessions).toFixed(1) : '—'
  })))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 220
    }
  }, "Departamento"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Empleados"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Registrados"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "% Registro"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Con sesi\xF3n"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "% Activaci\xF3n"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Sesiones"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "/ usuario"))), /*#__PURE__*/React.createElement("tbody", null, state.depts.map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    value: d.name,
    onChange: e => update(i, 'name', e.target.value),
    style: {
      font: '500 13px/1.3 Outfit'
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    value: d.total || '',
    onChange: e => update(i, 'total', Number(e.target.value)),
    style: {
      textAlign: 'right',
      width: 80
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    value: d.registered || '',
    onChange: e => update(i, 'registered', Number(e.target.value)),
    style: {
      textAlign: 'right',
      width: 80
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      font: '600 13px/1 Outfit',
      color: (d.pctRegistro || 0) >= 0.5 ? '#1F4A2A' : '#2A2B43'
    }
  }, fmtPct(d.pctRegistro)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    value: d.activeSessions || '',
    onChange: e => update(i, 'activeSessions', Number(e.target.value)),
    style: {
      textAlign: 'right',
      width: 80
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      color: '#6B6A85'
    }
  }, fmtPct(d.pctActivacion)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    value: d.totalSessions || '',
    onChange: e => update(i, 'totalSessions', Number(e.target.value)),
    style: {
      textAlign: 'right',
      width: 80
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      color: '#6B6A85'
    }
  }, d.perUser ? d.perUser.toFixed(1) : '—'))), /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#FBF8FE',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      font: '700 12px/1 Outfit',
      color: '#8B75EE',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "TOTAL"), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, fmtNum(totals.total)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, fmtNum(totals.registered)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, fmtPct(totals.total ? totals.registered / totals.total : 0)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, fmtNum(totals.activeSessions)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, fmtPct(totals.total ? totals.activeSessions / totals.total : 0)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, fmtNum(totals.totalSessions)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, totals.activeSessions ? (totals.totalSessions / totals.activeSessions).toFixed(1) : '—')))))));
}
function StatRow({
  label,
  value,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingBottom: 10,
      borderBottom: '1px solid #F3F1F7'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 Outfit',
      color: '#6B6A85'
    }
  }, label), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 18px/1 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.015em'
    }
  }, value), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 Outfit',
      color: '#8B75EE',
      marginLeft: 6
    }
  }, sub)));
}

/* ----- Cuestionario Meliá ----- */
function Cuestionario({
  state,
  setState
}) {
  const q = state.questionnaire;
  const updateRow = (block, i, key, val) => {
    const copy = {
      ...q,
      [block]: q[block].map((r, j) => j === i ? {
        ...r,
        [key]: val
      } : r)
    };
    setState({
      ...state,
      questionnaire: copy
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 18,
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderBottom: '1px solid #F3F1F7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 Outfit',
      letterSpacing: '-0.015em'
    }
  }, "\uD83D\uDCCA Participaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 Outfit',
      color: '#6B6A85',
      marginTop: 2
    }
  }, "Cobertura de respuestas por departamento")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Departamento"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Empleados"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Baseline"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "% Cobertura"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Follow-up"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "% Cobertura Jul"))), /*#__PURE__*/React.createElement("tbody", null, q.participation.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      font: '500 13px/1 Outfit'
    }
  }, r.dept), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, fmtNum(r.total)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    value: r.baseline || '',
    onChange: e => {
      const baseline = Number(e.target.value);
      const cov = r.total ? baseline / r.total : 0;
      const copy = {
        ...q,
        participation: q.participation.map((rr, j) => j === i ? {
          ...rr,
          baseline,
          coverage: cov
        } : rr)
      };
      setState({
        ...state,
        questionnaire: copy
      });
    },
    style: {
      textAlign: 'right',
      width: 80
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      color: '#6B6A85'
    }
  }, fmtPct(r.coverage)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    value: r.followup || '',
    onChange: e => {
      const followup = Number(e.target.value);
      const covF = r.total ? followup / r.total : 0;
      const copy = {
        ...q,
        participation: q.participation.map((rr, j) => j === i ? {
          ...rr,
          followup,
          coverageFollowup: covF
        } : rr)
      };
      setState({
        ...state,
        questionnaire: copy
      });
    },
    style: {
      textAlign: 'right',
      width: 80
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      color: '#6B6A85'
    }
  }, fmtPct(r.coverageFollowup))))))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 18,
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderBottom: '1px solid #F3F1F7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 Outfit'
    }
  }, "\uD83D\uDCAA Dolor autorreportado"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 Outfit',
      color: '#6B6A85',
      marginTop: 2
    }
  }, "Nivel 0-10 \xB7 Target Jul \u2264 4.0")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Departamento"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Dolor baseline"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Leve (0-3)"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Medio (4-6)"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Alto (7-10)"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "% con dolor"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Dolor follow-up"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "\u0394"))), /*#__PURE__*/React.createElement("tbody", null, q.pain.map((r, i) => {
    const delta = r.baseline && r.followup ? r.followup - r.baseline : null;
    const isGlobal = r.dept === 'GLOBAL';
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: isGlobal ? {
        background: '#FBF8FE',
        fontWeight: 600
      } : {}
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        font: '500 13px/1 Outfit',
        color: isGlobal ? '#8B75EE' : undefined,
        textTransform: isGlobal ? 'uppercase' : undefined,
        letterSpacing: isGlobal ? '0.06em' : undefined,
        fontSize: isGlobal ? 12 : undefined
      }
    }, r.dept), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "cell-input",
      type: "number",
      step: "0.01",
      value: r.baseline || '',
      onChange: e => updateRow('pain', i, 'baseline', Number(e.target.value)),
      style: {
        textAlign: 'right',
        width: 80,
        color: r.baseline > 5 ? '#7a1f2b' : undefined
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, fmtNum(r.leve)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, fmtNum(r.medio)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, fmtNum(r.alto)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right',
        color: '#6B6A85'
      }
    }, fmtPct(r.pctConDolor)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "cell-input",
      type: "number",
      step: "0.01",
      value: r.followup || '',
      onChange: e => updateRow('pain', i, 'followup', Number(e.target.value)),
      style: {
        textAlign: 'right',
        width: 80
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'right',
        fontWeight: 600,
        color: delta === null ? '#B4B3C4' : delta < 0 ? '#1F4A2A' : '#7a1f2b'
      }
    }, delta === null ? '—' : (delta > 0 ? '+' : '') + delta.toFixed(2)));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderBottom: '1px solid #F3F1F7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 Outfit'
    }
  }, "\uD83E\uDDB4 Zonas m\xE1s afectadas"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 Outfit',
      color: '#6B6A85',
      marginTop: 2
    }
  }, "Top 6 \xB7 baseline")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Zona"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Baseline"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "% sobre total"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Follow-up"))), /*#__PURE__*/React.createElement("tbody", null, q.bodyZones.map((z, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      font: '500 13px/1 Outfit'
    }
  }, z.zone), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    value: z.menciones || '',
    onChange: e => updateRow('bodyZones', i, 'menciones', Number(e.target.value)),
    style: {
      textAlign: 'right',
      width: 70
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      color: '#6B6A85'
    }
  }, fmtPct(z.pct, 1)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    value: z.followup || '',
    placeholder: "\u2014",
    onChange: e => updateRow('bodyZones', i, 'followup', Number(e.target.value)),
    style: {
      textAlign: 'right',
      width: 70
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderBottom: '1px solid #F3F1F7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 Outfit'
    }
  }, "\uD83E\uDDE0 H\xE1bitos y percepci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 Outfit',
      color: '#6B6A85',
      marginTop: 2
    }
  }, "Percepci\xF3n 'empresa se preocupa por m\xED' \xB7 Target Jul \u2265 4.3")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Depto"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Percepci\xF3n"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "h/sem"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "% ejercicio"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Follow-up"))), /*#__PURE__*/React.createElement("tbody", null, q.habits.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      font: '500 13px/1 Outfit'
    }
  }, r.dept), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    step: "0.01",
    value: r.percepcionBaseline || '',
    onChange: e => updateRow('habits', i, 'percepcionBaseline', Number(e.target.value)),
    style: {
      textAlign: 'right',
      width: 70
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      color: '#6B6A85'
    }
  }, r.horasEjercicio?.toFixed?.(1) ?? '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right',
      color: '#6B6A85'
    }
  }, fmtPct(r.pctEjercicio)), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "number",
    step: "0.01",
    value: r.percepcionFollowup || '',
    placeholder: "\u2014",
    onChange: e => updateRow('habits', i, 'percepcionFollowup', Number(e.target.value)),
    style: {
      textAlign: 'right',
      width: 70
    }
  })))))))));
}
Object.assign(window, {
  Departamento,
  Cuestionario
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tracker/Depto.jsx", error: String((e && e.message) || e) }); }

// tracker/Gantt.jsx
try { (() => {
/* Fisify tracker — Gantt tab (3 views: grid, bars, kanban) */

function GanttToggle({
  view,
  setView
}) {
  const opts = [{
    id: 'bars',
    label: 'Gantt',
    icon: 'bars'
  }, {
    id: 'week',
    label: 'Esta semana',
    icon: 'history'
  }, {
    id: 'grid',
    label: 'Matriz',
    icon: 'grid'
  }, {
    id: 'kanban',
    label: 'Kanban',
    icon: 'board'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs",
    style: {
      padding: 4
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    className: 'tab' + (view === o.id ? ' on' : ''),
    onClick: () => setView(o.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: o.icon,
    size: 14
  }), " ", o.label)));
}

/* ---------- View 1: Weekly grid (matches Excel) ---------- */
function GanttGrid({
  state,
  setState,
  filters
}) {
  const today = new Date().toISOString().slice(0, 10);
  const scrollRef = React.useRef(null);
  const weeks = [{
    label: 'Sem 1 · 23-27 Mar',
    month: 'Marzo',
    iso: ['2026-03-23', '2026-03-27']
  }, {
    label: 'Sem 1 · 1-5 Abr',
    month: 'Abril',
    iso: ['2026-04-01', '2026-04-05']
  }, {
    label: 'Sem 2 · 7-11 Abr',
    month: 'Abril',
    iso: ['2026-04-07', '2026-04-11']
  }, {
    label: 'Lanz. 8 Abr',
    month: 'Abril',
    iso: ['2026-04-08', '2026-04-08'],
    launch: true
  }, {
    label: 'Sem 3 · 14-18 Abr',
    month: 'Abril',
    iso: ['2026-04-14', '2026-04-18']
  }, {
    label: 'Sem 1 · 5-9 May',
    month: 'Mayo',
    iso: ['2026-05-05', '2026-05-09']
  }, {
    label: 'Sem 2 · 12-16 May',
    month: 'Mayo',
    iso: ['2026-05-12', '2026-05-16']
  }, {
    label: 'Sem 3 · 19-23 May',
    month: 'Mayo',
    iso: ['2026-05-19', '2026-05-23']
  }, {
    label: 'Sem 4 · 26-30 May',
    month: 'Mayo',
    iso: ['2026-05-26', '2026-05-30']
  }, {
    label: 'Sem 1 · 2-6 Jun',
    month: 'Junio',
    iso: ['2026-06-02', '2026-06-06']
  }, {
    label: 'Sem 2 · 9-13 Jun',
    month: 'Junio',
    iso: ['2026-06-09', '2026-06-13']
  }, {
    label: 'Sem 3 · 16-20 Jun',
    month: 'Junio',
    iso: ['2026-06-16', '2026-06-20']
  }, {
    label: 'Sem 4 · 23-30 Jun',
    month: 'Junio',
    iso: ['2026-06-23', '2026-06-30']
  }];

  // annotate weeks with past/current/future
  weeks.forEach(w => {
    w.isPast = w.iso[1] < today;
    w.isCurrent = today >= w.iso[0] && today <= w.iso[1];
  });

  // group months for spans
  const monthSpans = [];
  weeks.forEach(w => {
    const last = monthSpans[monthSpans.length - 1];
    if (last && last.month === w.month) last.span++;else monthSpans.push({
      month: w.month,
      span: 1
    });
  });

  // helper: is task active in a week?
  const inWeek = (task, w) => {
    if (!task.start || !task.end) return false;
    const ts = task.start,
      te = task.end;
    return !(te < w.iso[0] || ts > w.iso[1]);
  };

  // group by phase
  const phases = [...new Set(state.tasks.map(t => t.phase))].filter(Boolean);

  // apply filters (from parent Gantt)
  const matchFilters = t => {
    if (!filters) return true;
    if (filters.owner && t.owner !== filters.owner) return false;
    if (filters.phase && t.phase !== filters.phase) return false;
    if (filters.status && statusFromText(t.status) !== filters.status) return false;
    if (filters.week) {
      const wk = [{
        id: 'w0',
        s: '2026-03-23',
        e: '2026-03-27'
      }, {
        id: 'w1',
        s: '2026-04-01',
        e: '2026-04-05'
      }, {
        id: 'w2',
        s: '2026-04-07',
        e: '2026-04-11'
      }, {
        id: 'w3',
        s: '2026-04-14',
        e: '2026-04-18'
      }, {
        id: 'w4',
        s: '2026-04-20',
        e: '2026-04-26'
      }, {
        id: 'w5',
        s: '2026-04-27',
        e: '2026-05-03'
      }, {
        id: 'w6',
        s: '2026-05-05',
        e: '2026-05-09'
      }, {
        id: 'w7',
        s: '2026-05-12',
        e: '2026-05-16'
      }, {
        id: 'w8',
        s: '2026-05-19',
        e: '2026-05-23'
      }, {
        id: 'w9',
        s: '2026-05-26',
        e: '2026-05-30'
      }, {
        id: 'w10',
        s: '2026-06-02',
        e: '2026-06-06'
      }, {
        id: 'w11',
        s: '2026-06-09',
        e: '2026-06-13'
      }, {
        id: 'w12',
        s: '2026-06-16',
        e: '2026-06-20'
      }, {
        id: 'w13',
        s: '2026-06-23',
        e: '2026-06-30'
      }].find(x => x.id === filters.week);
      if (!wk || !t.start || !t.end) return false;
      if (t.end < wk.s || t.start > wk.e) return false;
    }
    if (filters.q && !(t.task.toLowerCase().includes(filters.q.toLowerCase()) || (t.notes || '').toLowerCase().includes(filters.q.toLowerCase()))) return false;
    return true;
  };
  const toggle = (ti, w) => {
    const task = state.tasks[ti];
    // expand or shrink task.start/end
    if (inWeek(task, w)) {
      // shrink: remove this week
      const newEnd = new Date(new Date(w.iso[0]).getTime() - 86400000).toISOString().slice(0, 10);
      if (newEnd < (task.start || '')) {
        update(ti, {
          start: null,
          end: null
        });
      } else {
        update(ti, {
          end: newEnd
        });
      }
    } else {
      // expand: extend range to include this week
      const newStart = task.start && task.start < w.iso[0] ? task.start : w.iso[0];
      const newEnd = task.end && task.end > w.iso[1] ? task.end : w.iso[1];
      update(ti, {
        start: newStart,
        end: newEnd
      });
    }
  };
  const update = (i, patch) => {
    const copy = [...state.tasks];
    copy[i] = {
      ...copy[i],
      ...patch
    };
    setState({
      ...state,
      tasks: copy
    });
  };

  // count how many tasks were active in any past week (for the collapsed summary)
  const pastCountForTask = t => weeks.filter(w => w.isPast && inWeek(t, w)).length;
  const jumpTo = key => {
    const el = scrollRef.current;
    if (!el) return;
    let idx = -1;
    if (key === 'current') idx = weeks.findIndex(w => w.isCurrent);else if (key === 'launch') idx = weeks.findIndex(w => w.launch);else if (key === 'start') idx = 0;else if (key === 'end') idx = weeks.length - 1;else idx = weeks.findIndex(w => w.iso[0] === key);
    if (idx < 0) return;
    // find the header cell for this week and scroll it into view horizontally
    const ths = el.querySelectorAll('thead tr:nth-child(2) th.wk');
    const th = ths[idx];
    if (th) {
      const left = th.offsetLeft - 420; // keep sticky columns visible
      el.scrollTo({
        left: Math.max(0, left),
        behavior: 'smooth'
      });
    }
  };

  // auto-scroll to current week on mount
  React.useEffect(() => {
    const t = setTimeout(() => jumpTo('current'), 100);
    return () => clearTimeout(t);
  }, []);
  const currentWeek = weeks.find(w => w.isCurrent);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gantt-grid",
    ref: scrollRef
  }, /*#__PURE__*/React.createElement("table", {
    className: "gantt-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 280,
      background: '#fff'
    }
  }, "Tarea / Hito"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 100,
      background: '#fff'
    }
  }, "Owner"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120,
      background: '#fff'
    }
  }, "Estado"), monthSpans.map((m, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    colSpan: m.span,
    style: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#8B75EE',
      fontWeight: 700,
      letterSpacing: '0.06em',
      fontSize: 11
    }
  }, m.month))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      background: '#fff'
    }
  }), weeks.map((w, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: 'wk' + (w.isCurrent ? ' current' : '') + (w.isPast ? ' past' : ''),
    style: {
      color: w.launch ? 'var(--pink)' : undefined,
      fontWeight: w.launch || w.isCurrent ? 700 : 600
    }
  }, w.isCurrent && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 9px/1 Outfit',
      color: 'var(--purple)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: 2
    }
  }, "Hoy"), w.label.split(' · ').map((s, j) => /*#__PURE__*/React.createElement("div", {
    key: j
  }, s)))))), /*#__PURE__*/React.createElement("tbody", null, phases.map(phase => {
    const phaseTasks = state.tasks.map((t, ti) => ({
      t,
      ti
    })).filter(x => x.t.phase === phase && matchFilters(x.t));
    if (!phaseTasks.length) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: phase
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 3 + weeks.length,
      style: {
        background: '#FBF8FE',
        padding: '10px 14px',
        font: '700 11px/1 Outfit',
        color: '#8B75EE',
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }
    }, phase)), phaseTasks.map(({
      t,
      ti
    }) => {
      const stId = statusFromText(t.status);
      return /*#__PURE__*/React.createElement("tr", {
        key: ti
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          font: '500 13px/1.3 Outfit'
        }
      }, t.task), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Avatar, {
        name: t.owner,
        size: "sm"
      })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
        className: 'pill ' + statusMeta(stId).cls
      }, statusMeta(stId).label)), weeks.map((w, wi) => {
        const on = inWeek(t, w);
        return /*#__PURE__*/React.createElement("td", {
          key: wi,
          className: 'wk' + (w.isCurrent ? ' current' : '')
        }, /*#__PURE__*/React.createElement("div", {
          className: 'gantt-cell' + (on ? stId === 'mile' ? ' mile' : ' on' : ''),
          onClick: () => toggle(ti, w),
          title: on ? 'Click para quitar' : 'Click para añadir'
        }, on && (stId === 'mile' ? '★' : '')));
      }));
    }));
  })))));
}

/* ---------- View 2: Timeline bars ---------- */
function GanttBars({
  state,
  filters
}) {
  const matchFilters = t => {
    if (!filters) return true;
    if (filters.owner && t.owner !== filters.owner) return false;
    if (filters.phase && t.phase !== filters.phase) return false;
    if (filters.status && statusFromText(t.status) !== filters.status) return false;
    if (filters.q && !(t.task.toLowerCase().includes(filters.q.toLowerCase()) || (t.notes || '').toLowerCase().includes(filters.q.toLowerCase()))) return false;
    return true;
  };
  const visibleTasks = state.tasks.filter(matchFilters);
  // Build date range from tasks
  const dates = state.tasks.flatMap(t => [t.start, t.end]).filter(Boolean);
  const min = dates.reduce((a, b) => !a || b < a ? b : a, '2026-03-23');
  const max = dates.reduce((a, b) => !a || b > a ? b : a, '2026-06-30');
  const minT = new Date(min).getTime();
  const maxT = new Date(max).getTime() + 86400000;
  const span = maxT - minT;

  // Month columns in header
  const months = [];
  let cur = new Date(min);
  cur.setDate(1);
  while (cur.getTime() <= maxT) {
    months.push({
      label: cur.toLocaleString('es-ES', {
        month: 'short'
      }).toUpperCase(),
      t0: cur.getTime(),
      t1: new Date(cur.getFullYear(), cur.getMonth() + 1, 1).getTime()
    });
    cur = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
  }
  const phases = [...new Set(state.tasks.map(t => t.phase))].filter(Boolean);

  // "Hoy" marker — vertical line on the Gantt track
  const todayISO = new Date().toISOString().slice(0, 10);
  const todayT = new Date(todayISO).getTime();
  const todayX = todayT >= minT && todayT <= maxT ? (todayT - minT) / span * 100 : null;
  const todayLabel = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Gantt del piloto"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Barras proporcionales a la duraci\xF3n real de cada tarea"))), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 Outfit',
      color: '#8E8DA4',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, "Tarea \xB7 Owner"), /*#__PURE__*/React.createElement("div", {
    className: "tl-months",
    style: {
      gridTemplateColumns: months.map(m => (m.t1 - m.t0) / span * 100 + '%').join(' '),
      position: 'relative'
    }
  }, months.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, m.label)), todayX !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${todayX}% - 1px)`,
      top: -4,
      bottom: -4,
      width: 2,
      background: '#FE93A7',
      zIndex: 2,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -18,
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#FE93A7',
      color: '#fff',
      font: '600 10px/1 Outfit',
      padding: '3px 8px',
      borderRadius: 999,
      whiteSpace: 'nowrap',
      letterSpacing: '0.02em'
    }
  }, "HOY \xB7 ", todayLabel)))), phases.map(phase => {
    const phaseTasks = visibleTasks.filter(t => t.phase === phase);
    if (!phaseTasks.length) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: phase
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 0 6px',
        font: '700 11px/1 Outfit',
        color: '#8B75EE',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }
    }, phase), phaseTasks.map((t, i) => {
      if (!t.start || !t.end) return /*#__PURE__*/React.createElement("div", {
        className: "tl-row",
        key: i
      }, /*#__PURE__*/React.createElement("div", {
        className: "lbl"
      }, t.task, /*#__PURE__*/React.createElement("span", {
        className: "own"
      }, t.owner || '—')), /*#__PURE__*/React.createElement("div", {
        className: "tl-track",
        style: {
          background: 'transparent'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: '400 11px/1 Outfit',
          color: '#B4B3C4',
          padding: '6px 8px'
        }
      }, "Sin fecha")));
      const s = new Date(t.start).getTime();
      const e = new Date(t.end).getTime() + 86400000;
      const left = (s - minT) / span * 100;
      const width = Math.max(1.5, (e - s) / span * 100);
      const stId = statusFromText(t.status);
      const colors = {
        done: '#AFD7AE',
        prog: 'var(--purple)',
        todo: '#B4B3C4',
        block: '#F37C7C',
        mile: 'var(--pink)'
      };
      const isMilestone = stId === 'mile' || width < 2;
      return /*#__PURE__*/React.createElement("div", {
        className: "tl-row",
        key: i
      }, /*#__PURE__*/React.createElement("div", {
        className: "lbl"
      }, t.task, /*#__PURE__*/React.createElement("span", {
        className: "own"
      }, t.owner || '—')), /*#__PURE__*/React.createElement("div", {
        className: "tl-track"
      }, months.slice(0, -1).map((m, mi) => {
        const x = (m.t1 - minT) / span * 100;
        return /*#__PURE__*/React.createElement("div", {
          key: mi,
          style: {
            position: 'absolute',
            left: x + '%',
            top: 0,
            bottom: 0,
            width: 1,
            background: '#EBE6F7'
          }
        });
      }), todayX !== null && /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: `calc(${todayX}% - 1px)`,
          top: 0,
          bottom: 0,
          width: 2,
          background: '#FE93A7',
          opacity: 0.55,
          zIndex: 1,
          pointerEvents: 'none'
        }
      }), isMilestone ? /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'absolute',
          left: `calc(${left}% - 8px)`,
          top: 2,
          width: 20,
          height: 20,
          background: colors[stId],
          transform: 'rotate(45deg)',
          borderRadius: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        title: `${t.task} · ${t.start}`
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          transform: 'rotate(-45deg)',
          color: '#fff',
          fontSize: 10
        }
      }, "\u2605")) : /*#__PURE__*/React.createElement("div", {
        className: "tl-bar",
        style: {
          left: left + '%',
          width: width + '%',
          background: colors[stId]
        }
      }, width > 10 ? `${fmtDate(t.start)} – ${fmtDate(t.end)}` : '')));
    }));
  })));
}
/* ---------- View 3: Kanban by phase ---------- */
function GanttKanban({
  state,
  setState,
  filters
}) {
  const [drag, setDrag] = React.useState(null);
  const matchFilters = t => {
    if (!filters) return true;
    if (filters.owner && t.owner !== filters.owner) return false;
    if (filters.phase && t.phase !== filters.phase) return false;
    if (filters.status && statusFromText(t.status) !== filters.status) return false;
    if (filters.q && !(t.task.toLowerCase().includes(filters.q.toLowerCase()) || (t.notes || '').toLowerCase().includes(filters.q.toLowerCase()))) return false;
    return true;
  };

  // move: change the task's status (not phase)
  const moveToStatus = (taskIdx, toStatusId) => {
    const copy = [...state.tasks];
    copy[taskIdx] = {
      ...copy[taskIdx],
      status: statusMeta(toStatusId).label
    };
    setState({
      ...state,
      tasks: copy
    });
    toast('Movido a ' + statusMeta(toStatusId).label);
  };

  // Column order requested by user: Pendiente → En progreso → Hecho → Bloqueado → Hito
  const cols = [{
    id: 'todo',
    label: 'Pendiente',
    accent: '#B4B3C4'
  }, {
    id: 'prog',
    label: 'En progreso',
    accent: '#8B75EE'
  }, {
    id: 'done',
    label: 'Hecho',
    accent: '#7CB6A8'
  }, {
    id: 'block',
    label: 'Bloqueado',
    accent: '#F37C7C'
  }, {
    id: 'mile',
    label: 'Hito',
    accent: 'var(--pink)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "kanban",
    style: {
      gridTemplateColumns: `repeat(${cols.length}, 1fr)`
    }
  }, cols.map(col => {
    const tasksInCol = state.tasks.map((t, i) => ({
      t,
      i,
      _st: statusFromText(t.status)
    })).filter(x => x._st === col.id && matchFilters(x.t));
    return /*#__PURE__*/React.createElement("div", {
      key: col.id,
      className: "kanban-col",
      onDragOver: e => e.preventDefault(),
      onDrop: () => {
        if (drag !== null) {
          moveToStatus(drag, col.id);
          setDrag(null);
        }
      }
    }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: col.accent
      }
    }), col.label), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 11px/1 Outfit',
        color: '#6B6A85',
        background: '#fff',
        padding: '4px 8px',
        borderRadius: 999
      }
    }, tasksInCol.length)), tasksInCol.map(({
      t,
      i
    }) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "kanban-card",
      draggable: true,
      onDragStart: () => setDrag(i),
      onDragEnd: () => setDrag(null)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 10px/1 Outfit',
        color: '#8E8DA4',
        marginBottom: 6,
        letterSpacing: '0.02em'
      }
    }, t.phase), /*#__PURE__*/React.createElement("div", {
      className: "k-t"
    }, t.task), /*#__PURE__*/React.createElement("div", {
      className: "k-b"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.owner,
      size: "sm"
    }), t.end && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 11px/1 Outfit',
        color: '#6B6A85'
      }
    }, fmtDate(t.end))), t.notes && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        paddingTop: 10,
        borderTop: '1px solid #F3F1F7',
        font: '400 11px/1.35 Outfit',
        color: '#6B6A85'
      }
    }, t.notes))), !tasksInCol.length && /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 12px/1.5 Outfit',
        color: '#B4B3C4',
        textAlign: 'center',
        padding: '12px 0'
      }
    }, "Arrastra tareas aqu\xED"));
  }));
}

/* ---------- View 4: Esta semana (checklist) ---------- */
function GanttThisWeek({
  state,
  setState,
  filters
}) {
  const today = new Date().toISOString().slice(0, 10);
  const WEEKS = [{
    id: 'w0',
    label: '23-27 Mar',
    start: '2026-03-23',
    end: '2026-03-27'
  }, {
    id: 'w1',
    label: '1-5 Abr',
    start: '2026-04-01',
    end: '2026-04-05'
  }, {
    id: 'w2',
    label: '7-11 Abr',
    start: '2026-04-07',
    end: '2026-04-11'
  }, {
    id: 'w3',
    label: '14-18 Abr',
    start: '2026-04-14',
    end: '2026-04-18'
  }, {
    id: 'w4',
    label: '20-26 Abr',
    start: '2026-04-20',
    end: '2026-04-26'
  }, {
    id: 'w5',
    label: '27 Abr-3 May',
    start: '2026-04-27',
    end: '2026-05-03'
  }, {
    id: 'w6',
    label: '5-9 May',
    start: '2026-05-05',
    end: '2026-05-09'
  }, {
    id: 'w7',
    label: '12-16 May',
    start: '2026-05-12',
    end: '2026-05-16'
  }, {
    id: 'w8',
    label: '19-23 May',
    start: '2026-05-19',
    end: '2026-05-23'
  }, {
    id: 'w9',
    label: '26-30 May',
    start: '2026-05-26',
    end: '2026-05-30'
  }, {
    id: 'w10',
    label: '2-6 Jun',
    start: '2026-06-02',
    end: '2026-06-06'
  }, {
    id: 'w11',
    label: '9-13 Jun',
    start: '2026-06-09',
    end: '2026-06-13'
  }, {
    id: 'w12',
    label: '16-20 Jun',
    start: '2026-06-16',
    end: '2026-06-20'
  }, {
    id: 'w13',
    label: '23-30 Jun',
    start: '2026-06-23',
    end: '2026-06-30'
  }];
  const currentIdx = WEEKS.findIndex(w => today >= w.start && today <= w.end);
  const [wkIdx, setWkIdx] = React.useState(currentIdx >= 0 ? currentIdx : 0);
  const week = WEEKS[wkIdx];
  const matchFilters = t => {
    if (!filters) return true;
    if (filters.owner && t.owner !== filters.owner) return false;
    if (filters.phase && t.phase !== filters.phase) return false;
    if (filters.status && statusFromText(t.status) !== filters.status) return false;
    if (filters.q && !(t.task.toLowerCase().includes(filters.q.toLowerCase()) || (t.notes || '').toLowerCase().includes(filters.q.toLowerCase()))) return false;
    return true;
  };

  // classify tasks relative to this week
  const inWeek = t => t.start && t.end && !(t.end < week.start || t.start > week.end);
  const isStartingThisWeek = t => t.start >= week.start && t.start <= week.end;
  const isContinuing = t => inWeek(t) && t.start < week.start;
  const isEndingThisWeek = t => t.end >= week.start && t.end <= week.end && t.start < week.start;
  const allTasks = state.tasks.map((t, i) => ({
    ...t,
    _i: i,
    _st: statusFromText(t.status)
  })).filter(matchFilters);
  const weekTasks = allTasks.filter(inWeek);
  const unscheduled = allTasks.filter(t => !t.start || !t.end);

  // group by owner
  const ownerGroups = {};
  weekTasks.forEach(t => {
    const o = t.owner || '—';
    if (!ownerGroups[o]) ownerGroups[o] = [];
    ownerGroups[o].push(t);
  });
  const orderedOwners = Object.keys(ownerGroups).sort((a, b) => ownerGroups[b].length - ownerGroups[a].length);
  const update = (i, patch) => {
    const copy = [...state.tasks];
    copy[i] = {
      ...copy[i],
      ...patch
    };
    setState({
      ...state,
      tasks: copy
    });
  };
  const cycleStatus = (i, currentSt) => {
    const order = ['todo', 'prog', 'done'];
    const idx = order.indexOf(currentSt);
    const next = order[(idx + 1) % order.length];
    update(i, {
      status: statusMeta(next).label
    });
  };

  // counts
  const done = weekTasks.filter(t => t._st === 'done').length;
  const prog = weekTasks.filter(t => t._st === 'prog').length;
  const todo = weekTasks.filter(t => t._st === 'todo').length;
  const block = weekTasks.filter(t => t._st === 'block').length;
  const mile = weekTasks.filter(t => t._st === 'mile').length;
  const total = weekTasks.length;
  const pct = total ? Math.round(done / total * 100) : 0;

  // day grid (Mon-Sun)
  const weekDays = [];
  const d0 = new Date(week.start);
  for (let i = 0; i < 7; i++) {
    const d = new Date(d0.getTime() + i * 86400000);
    if (d.toISOString().slice(0, 10) > week.end) break;
    weekDays.push({
      iso: d.toISOString().slice(0, 10),
      day: d.getDate(),
      name: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'][d.getDay()],
      isToday: d.toISOString().slice(0, 10) === today
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tw-header"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tw-nav",
    onClick: () => setWkIdx(Math.max(0, wkIdx - 1)),
    disabled: wkIdx === 0
  }, "\u25C0"), /*#__PURE__*/React.createElement("div", {
    className: "tw-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-kicker"
  }, wkIdx === currentIdx ? '📍 SEMANA ACTUAL' : wkIdx < currentIdx ? '← SEMANA PASADA' : 'SEMANA FUTURA →'), /*#__PURE__*/React.createElement("div", {
    className: "tw-week"
  }, week.label), /*#__PURE__*/React.createElement("div", {
    className: "tw-days"
  }, weekDays.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.iso,
    className: 'tw-day' + (d.isToday ? ' today' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, d.name), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, d.day))))), /*#__PURE__*/React.createElement("button", {
    className: "tw-nav",
    onClick: () => setWkIdx(Math.min(WEEKS.length - 1, wkIdx + 1)),
    disabled: wkIdx === WEEKS.length - 1
  }, "\u25B6"), wkIdx !== currentIdx && currentIdx >= 0 && /*#__PURE__*/React.createElement("button", {
    className: "btn soft sm",
    onClick: () => setWkIdx(currentIdx),
    style: {
      marginLeft: 8
    }
  }, "\uD83D\uDCCD Hoy")), /*#__PURE__*/React.createElement("div", {
    className: "tw-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, total)), /*#__PURE__*/React.createElement("div", {
    className: "tw-stat tw-stat-prog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Hecho"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, done, "/", total, " ", /*#__PURE__*/React.createElement("span", {
    className: "pct"
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "tw-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-bar-fill",
    style: {
      width: pct + '%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tw-stat tw-stat-split"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip-t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: '#8B75EE'
    }
  }), prog, " en progreso"), /*#__PURE__*/React.createElement("span", {
    className: "chip-t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: '#B4B3C4'
    }
  }), todo, " pendiente", todo === 1 ? '' : 's'), block > 0 && /*#__PURE__*/React.createElement("span", {
    className: "chip-t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: '#F37C7C'
    }
  }), block, " bloqueo", block === 1 ? '' : 's'), mile > 0 && /*#__PURE__*/React.createElement("span", {
    className: "chip-t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--pink)'
    }
  }), mile, " hito", mile === 1 ? '' : 's'))), total === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: 60,
      textAlign: 'center',
      background: '#fff',
      borderRadius: 16,
      border: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16px/1.4 Outfit',
      color: 'var(--ink-2)',
      marginBottom: 8
    }
  }, "Sin tareas esta semana"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 Outfit',
      color: '#8E8DA4'
    }
  }, Object.values(filters || {}).some(Boolean) ? 'Prueba a limpiar filtros, o ' : '', "cambia de semana con las flechas.")), orderedOwners.map(owner => /*#__PURE__*/React.createElement("div", {
    key: owner,
    className: "tw-owner-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-owner-head"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: owner,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tw-owner-name"
  }, owner), /*#__PURE__*/React.createElement("div", {
    className: "tw-owner-meta"
  }, ownerGroups[owner].length, " tarea", ownerGroups[owner].length === 1 ? '' : 's'))), /*#__PURE__*/React.createElement("div", {
    className: "tw-cards"
  }, ownerGroups[owner].map(t => {
    const meta = statusMeta(t._st);
    const continues = isContinuing(t);
    const ends = isEndingThisWeek(t);
    const starts = isStartingThisWeek(t);
    return /*#__PURE__*/React.createElement("div", {
      key: t._i,
      className: 'tw-card ' + t._st
    }, /*#__PURE__*/React.createElement("button", {
      className: 'tw-check ' + t._st,
      onClick: () => cycleStatus(t._i, t._st),
      title: 'Estado: ' + meta.label + ' (click para avanzar)'
    }, t._st === 'done' && '✓', t._st === 'prog' && '◐', t._st === 'mile' && '★', t._st === 'block' && '⚠'), /*#__PURE__*/React.createElement("div", {
      className: "tw-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-task"
    }, t.task), /*#__PURE__*/React.createElement("div", {
      className: "tw-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: 'pill ' + meta.cls
    }, meta.label), /*#__PURE__*/React.createElement("span", {
      className: "tw-phase"
    }, t.phase), continues && /*#__PURE__*/React.createElement("span", {
      className: "tw-tag"
    }, "\u21A9 Viene de antes"), ends && /*#__PURE__*/React.createElement("span", {
      className: "tw-tag tag-end"
    }, "\u21E5 Termina esta semana"), starts && !continues && /*#__PURE__*/React.createElement("span", {
      className: "tw-tag tag-start"
    }, "\u2192 Empieza"), t.end && /*#__PURE__*/React.createElement("span", {
      className: "tw-date"
    }, "hasta ", fmtDate(t.end))), t.notes && /*#__PURE__*/React.createElement("div", {
      className: "tw-notes"
    }, t.notes)));
  })))), unscheduled.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "tw-owner-section",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-owner-head",
    style: {
      background: '#FFF8E8',
      borderLeftColor: '#E9A53F'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: '#FFE8B8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18
    }
  }, "\uD83D\uDCCC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tw-owner-name"
  }, "Sin fecha asignada"), /*#__PURE__*/React.createElement("div", {
    className: "tw-owner-meta"
  }, unscheduled.length, " tarea", unscheduled.length === 1 ? '' : 's', " \xB7 asigna fechas en la pesta\xF1a Tareas"))), /*#__PURE__*/React.createElement("div", {
    className: "tw-cards"
  }, unscheduled.slice(0, 6).map(t => {
    const meta = statusMeta(t._st);
    return /*#__PURE__*/React.createElement("div", {
      key: t._i,
      className: 'tw-card ' + t._st
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-check",
      style: {
        opacity: 0.3
      }
    }, "\u2013"), /*#__PURE__*/React.createElement("div", {
      className: "tw-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tw-task"
    }, t.task), /*#__PURE__*/React.createElement("div", {
      className: "tw-meta"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: t.owner,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: 'pill ' + meta.cls
    }, meta.label), /*#__PURE__*/React.createElement("span", {
      className: "tw-phase"
    }, t.phase))));
  }), unscheduled.length > 6 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1 Outfit',
      color: '#8E8DA4',
      padding: '8px 12px'
    }
  }, "+ ", unscheduled.length - 6, " m\xE1s\u2026"))));
}
function Gantt({
  state,
  setState
}) {
  const [view, setView] = React.useState('bars');
  const [filters, setFilters] = React.useState({
    owner: '',
    phase: '',
    status: '',
    q: '',
    week: ''
  });
  const phases = [...new Set(state.tasks.map(t => t.phase))].filter(Boolean);

  // Week ranges — matches the weekly grid
  const WEEKS = [{
    id: 'w0',
    label: 'Sem 23-27 Mar',
    start: '2026-03-23',
    end: '2026-03-27'
  }, {
    id: 'w1',
    label: 'Sem 1-5 Abr',
    start: '2026-04-01',
    end: '2026-04-05'
  }, {
    id: 'w2',
    label: 'Sem 7-11 Abr',
    start: '2026-04-07',
    end: '2026-04-11'
  }, {
    id: 'w3',
    label: 'Sem 14-18 Abr',
    start: '2026-04-14',
    end: '2026-04-18'
  }, {
    id: 'w4',
    label: 'Sem 20-26 Abr',
    start: '2026-04-20',
    end: '2026-04-26'
  }, {
    id: 'w5',
    label: 'Sem 27A-3M',
    start: '2026-04-27',
    end: '2026-05-03'
  }, {
    id: 'w6',
    label: 'Sem 5-9 May',
    start: '2026-05-05',
    end: '2026-05-09'
  }, {
    id: 'w7',
    label: 'Sem 12-16 May',
    start: '2026-05-12',
    end: '2026-05-16'
  }, {
    id: 'w8',
    label: 'Sem 19-23 May',
    start: '2026-05-19',
    end: '2026-05-23'
  }, {
    id: 'w9',
    label: 'Sem 26-30 May',
    start: '2026-05-26',
    end: '2026-05-30'
  }, {
    id: 'w10',
    label: 'Sem 2-6 Jun',
    start: '2026-06-02',
    end: '2026-06-06'
  }, {
    id: 'w11',
    label: 'Sem 9-13 Jun',
    start: '2026-06-09',
    end: '2026-06-13'
  }, {
    id: 'w12',
    label: 'Sem 16-20 Jun',
    start: '2026-06-16',
    end: '2026-06-20'
  }, {
    id: 'w13',
    label: 'Sem 23-30 Jun',
    start: '2026-06-23',
    end: '2026-06-30'
  }];
  const today = new Date().toISOString().slice(0, 10);
  const currentWeek = WEEKS.find(w => today >= w.start && today <= w.end);
  const inWeekRange = (t, w) => {
    if (!w || !t.start || !t.end) return false;
    return !(t.end < w.start || t.start > w.end);
  };
  const matchFilters = t => {
    if (filters.owner && t.owner !== filters.owner) return false;
    if (filters.phase && t.phase !== filters.phase) return false;
    if (filters.status && statusFromText(t.status) !== filters.status) return false;
    if (filters.week) {
      const w = WEEKS.find(x => x.id === filters.week);
      if (!inWeekRange(t, w)) return false;
    }
    if (filters.q && !(t.task.toLowerCase().includes(filters.q.toLowerCase()) || (t.notes || '').toLowerCase().includes(filters.q.toLowerCase()))) return false;
    return true;
  };
  const filteredCount = state.tasks.filter(matchFilters).length;
  const hasFilters = filters.owner || filters.phase || filters.status || filters.q || filters.week;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    placeholder: "Buscar tarea o nota\u2026",
    value: filters.q,
    onChange: e => setFilters({
      ...filters,
      q: e.target.value
    })
  }), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.week,
    onChange: e => setFilters({
      ...filters,
      week: e.target.value
    }),
    style: filters.week ? {
      borderColor: 'var(--purple)',
      color: 'var(--purple)',
      fontWeight: 600
    } : {}
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas las semanas"), currentWeek && /*#__PURE__*/React.createElement("option", {
    value: currentWeek.id
  }, "\uD83D\uDCCD Esta semana \xB7 ", currentWeek.label), /*#__PURE__*/React.createElement("option", {
    disabled: true
  }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"), WEEKS.map(w => /*#__PURE__*/React.createElement("option", {
    key: w.id,
    value: w.id
  }, w.label, currentWeek?.id === w.id ? ' · hoy' : ''))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.phase,
    onChange: e => setFilters({
      ...filters,
      phase: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas las fases"), phases.map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }, p))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.owner,
    onChange: e => setFilters({
      ...filters,
      owner: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todos los owners"), Object.keys(OWNERS).map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.status,
    onChange: e => setFilters({
      ...filters,
      status: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todos los estados"), STATUSES.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.label))), /*#__PURE__*/React.createElement("button", {
    className: "btn soft sm",
    onClick: () => setFilters({
      ...filters,
      week: currentWeek?.id || ''
    }),
    disabled: !currentWeek,
    title: currentWeek ? 'Filtrar por ' + currentWeek.label : 'Fuera del rango del piloto'
  }, "\uD83D\uDCCD Esta semana"), hasFilters && /*#__PURE__*/React.createElement("button", {
    className: "btn ghost sm",
    onClick: () => setFilters({
      owner: '',
      phase: '',
      status: '',
      q: '',
      week: ''
    }),
    title: "Limpiar filtros"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }), " Limpiar"), /*#__PURE__*/React.createElement("span", {
    className: "count-badge"
  }, filteredCount, " de ", state.tasks.length), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(GanttToggle, {
    view: view,
    setView: setView
  })), /*#__PURE__*/React.createElement("div", {
    className: "toolbar",
    style: {
      padding: '0 4px',
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      font: '400 12px/1 Outfit',
      color: '#6B6A85'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: '#8B75EE'
    }
  }), " En progreso"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: '#AFD7AE'
    }
  }), " Hecho"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--pink)',
      transform: 'rotate(45deg)'
    }
  }), " Hito"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: '#F37C7C'
    }
  }), " Bloqueado"))), view === 'week' && /*#__PURE__*/React.createElement(GanttThisWeek, {
    state: state,
    setState: setState,
    filters: filters
  }), view === 'grid' && /*#__PURE__*/React.createElement(GanttGrid, {
    state: state,
    setState: setState,
    filters: filters
  }), view === 'bars' && /*#__PURE__*/React.createElement(GanttBars, {
    state: state,
    filters: filters
  }), view === 'kanban' && /*#__PURE__*/React.createElement(GanttKanban, {
    state: state,
    setState: setState,
    filters: filters
  }));
}
Object.assign(window, {
  Gantt,
  GanttBars,
  GanttKanban,
  GanttThisWeek,
  GanttGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tracker/Gantt.jsx", error: String((e && e.message) || e) }); }

// tracker/KPIs.jsx
try { (() => {
/* Fisify tracker — KPIs editable weekly table */

function editableCell(value, onChange, opts = {}) {
  const {
    type = 'number',
    pct = false
  } = opts;
  const display = pct ? value === '' || value === null || isNaN(value) ? '' : (Number(value) * 100).toFixed(1) : value === '' || value === null || isNaN(value) ? '' : value;
  return /*#__PURE__*/React.createElement("input", {
    className: "cell-input",
    type: "text",
    value: display,
    placeholder: "\u2014",
    onChange: e => {
      const raw = e.target.value.replace(',', '.');
      if (raw === '') return onChange('');
      const num = parseFloat(raw);
      if (isNaN(num)) return onChange(raw);
      onChange(pct ? num / 100 : num);
    },
    style: {
      textAlign: 'right',
      font: '500 13px/1 Outfit',
      width: 70
    }
  });
}
function KPIs({
  state,
  setState
}) {
  const update = (i, month, key, val) => {
    const copy = [...state.kpis];
    copy[i] = {
      ...copy[i],
      [month]: {
        ...copy[i][month],
        [key]: val
      }
    };
    setState({
      ...state,
      kpis: copy
    });
  };
  const sections = {};
  state.kpis.forEach((k, i) => {
    if (!sections[k.section]) sections[k.section] = [];
    sections[k.section].push({
      ...k,
      _i: i
    });
  });
  const isPct = metric => /^%|\bpct|rate/i.test(metric);
  const reachVsTarget = (target, real) => {
    if (!target || !real || isNaN(target) || isNaN(real)) return null;
    return real / target;
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 Outfit',
      color: '#6B6A85',
      marginBottom: 16
    }
  }, "Actualizar los viernes \xB7 Fuente: PostHog dashboard 609271 \xB7 Los porcentajes se escriben como ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#2A2B43'
    }
  }, "50"), " (se interpreta como 50%)."), Object.entries(sections).map(([section, kpis]) => /*#__PURE__*/React.createElement("div", {
    className: "card",
    key: section,
    style: {
      marginBottom: 18,
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderBottom: '1px solid #F3F1F7',
      font: '600 14px/1.2 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.015em'
    }
  }, section), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 280
    }
  }, "M\xE9trica"), /*#__PURE__*/React.createElement("th", {
    colSpan: 6,
    style: {
      textAlign: 'center',
      background: '#F9F7FE',
      color: '#8B75EE',
      borderLeft: '1px solid #EBE6F7'
    }
  }, "M1 \xB7 Abril"), /*#__PURE__*/React.createElement("th", {
    colSpan: 6,
    style: {
      textAlign: 'center',
      background: '#F9F7FE',
      color: 'var(--accent)',
      borderLeft: '1px solid #EBE6F7'
    }
  }, "M2 \xB7 Mayo"), /*#__PURE__*/React.createElement("th", {
    colSpan: 6,
    style: {
      textAlign: 'center',
      background: '#F9F7FE',
      color: '#8B75EE',
      borderLeft: '1px solid #EBE6F7'
    }
  }, "M3 \xB7 Junio")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right',
      borderLeft: '1px solid #EBE6F7'
    }
  }, "Target"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Real"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S1"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S2"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S3"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S4"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right',
      borderLeft: '1px solid #EBE6F7'
    }
  }, "Target"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Real"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S1"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S2"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S3"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S4"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right',
      borderLeft: '1px solid #EBE6F7'
    }
  }, "Target"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Real"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S1"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S2"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S3"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "S4"))), /*#__PURE__*/React.createElement("tbody", null, kpis.map(k => {
    const pctCol = isPct(k.metric);
    const m1reach = reachVsTarget(k.m1.target, k.m1.real);
    return /*#__PURE__*/React.createElement("tr", {
      key: k._i
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        font: '500 13px/1.4 Outfit'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", null, k.metric), m1reach !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 10px/1 Outfit',
        padding: '3px 7px',
        borderRadius: 999,
        background: m1reach >= 1 ? '#F4FFF2' : m1reach >= 0.75 ? '#FFFAEC' : '#FFE2E7',
        color: m1reach >= 1 ? '#1F4A2A' : m1reach >= 0.75 ? '#7a4a00' : '#7a1f2b'
      }
    }, m1reach >= 1 ? '✓' : Math.round(m1reach * 100) + '%'))), ['m1', 'm2', 'm3'].map(m => /*#__PURE__*/React.createElement(React.Fragment, {
      key: m
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        borderLeft: '1px solid #EBE6F7',
        background: '#FAFAFE'
      }
    }, editableCell(k[m].target, v => update(k._i, m, 'target', v), {
      pct: pctCol
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        background: '#FAFAFE'
      }
    }, editableCell(k[m].real, v => update(k._i, m, 'real', v), {
      pct: pctCol
    })), /*#__PURE__*/React.createElement("td", null, editableCell(k[m].s1, v => update(k._i, m, 's1', v), {
      pct: pctCol
    })), /*#__PURE__*/React.createElement("td", null, editableCell(k[m].s2, v => update(k._i, m, 's2', v), {
      pct: pctCol
    })), /*#__PURE__*/React.createElement("td", null, editableCell(k[m].s3, v => update(k._i, m, 's3', v), {
      pct: pctCol
    })), /*#__PURE__*/React.createElement("td", null, editableCell(k[m].s4, v => update(k._i, m, 's4', v), {
      pct: pctCol
    })))));
  })))))));
}
Object.assign(window, {
  KPIs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tracker/KPIs.jsx", error: String((e && e.message) || e) }); }

// tracker/Plan.jsx
try { (() => {
/* Fisify tracker — Plan tab (merges Tareas + Gantt + Kanban with shared filters) */

const PLAN_WEEKS = [{
  id: 'w0',
  label: 'Sem 23-27 Mar',
  month: 'Marzo',
  start: '2026-03-23',
  end: '2026-03-27'
}, {
  id: 'w1',
  label: 'Sem 1-5 Abr',
  month: 'Abril',
  start: '2026-04-01',
  end: '2026-04-05'
}, {
  id: 'w2',
  label: 'Sem 7-11 Abr',
  month: 'Abril',
  start: '2026-04-07',
  end: '2026-04-11'
}, {
  id: 'w3',
  label: 'Sem 14-18 Abr',
  month: 'Abril',
  start: '2026-04-14',
  end: '2026-04-18'
}, {
  id: 'w4',
  label: 'Sem 20-26 Abr',
  month: 'Abril',
  start: '2026-04-20',
  end: '2026-04-26'
}, {
  id: 'w5',
  label: 'Sem 27A-3M',
  month: 'Mayo',
  start: '2026-04-27',
  end: '2026-05-03'
}, {
  id: 'w6',
  label: 'Sem 5-9 May',
  month: 'Mayo',
  start: '2026-05-05',
  end: '2026-05-09'
}, {
  id: 'w7',
  label: 'Sem 12-16 May',
  month: 'Mayo',
  start: '2026-05-12',
  end: '2026-05-16'
}, {
  id: 'w8',
  label: 'Sem 19-23 May',
  month: 'Mayo',
  start: '2026-05-19',
  end: '2026-05-23'
}, {
  id: 'w9',
  label: 'Sem 26-30 May',
  month: 'Mayo',
  start: '2026-05-26',
  end: '2026-05-30'
}, {
  id: 'w10',
  label: 'Sem 2-6 Jun',
  month: 'Junio',
  start: '2026-06-02',
  end: '2026-06-06'
}, {
  id: 'w11',
  label: 'Sem 9-13 Jun',
  month: 'Junio',
  start: '2026-06-09',
  end: '2026-06-13'
}, {
  id: 'w12',
  label: 'Sem 16-20 Jun',
  month: 'Junio',
  start: '2026-06-16',
  end: '2026-06-20'
}, {
  id: 'w13',
  label: 'Sem 23-30 Jun',
  month: 'Junio',
  start: '2026-06-23',
  end: '2026-06-30'
}];
function inWeekRange(t, w) {
  if (!w || !t.start || !t.end) return false;
  return !(t.end < w.start || t.start > w.end);
}
function buildMatchFilters(filters) {
  return t => {
    if (filters.owner && t.owner !== filters.owner) return false;
    if (filters.phase && t.phase !== filters.phase) return false;
    if (filters.status && statusFromText(t.status) !== filters.status) return false;
    if (filters.week) {
      const w = PLAN_WEEKS.find(x => x.id === filters.week);
      if (!inWeekRange(t, w)) return false;
    }
    if (filters.q) {
      const q = filters.q.toLowerCase();
      if (!(t.task.toLowerCase().includes(q) || (t.notes || '').toLowerCase().includes(q))) return false;
    }
    return true;
  };
}
function Plan({
  state,
  setState
}) {
  const [view, setView] = React.useState(() => localStorage.getItem('fisify_plan_view') || 'lista');
  const [filters, setFilters] = React.useState({
    owner: '',
    phase: '',
    status: '',
    q: '',
    week: ''
  });
  React.useEffect(() => {
    localStorage.setItem('fisify_plan_view', view);
  }, [view]);
  const today = new Date().toISOString().slice(0, 10);
  const currentWeek = PLAN_WEEKS.find(w => today >= w.start && today <= w.end);
  const phases = [...new Set(state.tasks.map(t => t.phase))].filter(Boolean);
  const matchFilters = buildMatchFilters(filters);
  const filteredCount = state.tasks.filter(matchFilters).length;
  const hasFilters = filters.owner || filters.phase || filters.status || filters.q || filters.week;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    placeholder: "Buscar tarea o nota\u2026",
    value: filters.q,
    onChange: e => setFilters({
      ...filters,
      q: e.target.value
    })
  }), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.week,
    onChange: e => setFilters({
      ...filters,
      week: e.target.value
    }),
    style: filters.week ? {
      borderColor: 'var(--purple)',
      color: 'var(--purple)',
      fontWeight: 600
    } : {}
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas las semanas"), currentWeek && /*#__PURE__*/React.createElement("option", {
    value: currentWeek.id
  }, "\uD83D\uDCCD Esta semana \xB7 ", currentWeek.label), /*#__PURE__*/React.createElement("option", {
    disabled: true
  }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"), PLAN_WEEKS.map(w => /*#__PURE__*/React.createElement("option", {
    key: w.id,
    value: w.id
  }, w.label, currentWeek?.id === w.id ? ' · hoy' : ''))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.phase,
    onChange: e => setFilters({
      ...filters,
      phase: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas las fases"), phases.map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }, p))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.owner,
    onChange: e => setFilters({
      ...filters,
      owner: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todos los owners"), Object.keys(OWNERS).map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.status,
    onChange: e => setFilters({
      ...filters,
      status: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todos los estados"), STATUSES.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.label))), hasFilters && /*#__PURE__*/React.createElement("button", {
    className: "btn ghost sm",
    onClick: () => setFilters({
      owner: '',
      phase: '',
      status: '',
      q: '',
      week: ''
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }), " Limpiar"), /*#__PURE__*/React.createElement("span", {
    className: "count-badge"
  }, filteredCount, " de ", state.tasks.length), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tabs",
    style: {
      padding: 4,
      margin: 0
    }
  }, [{
    id: 'lista',
    label: 'Lista',
    icon: 'grip'
  }, {
    id: 'gantt',
    label: 'Gantt',
    icon: 'bars'
  }, {
    id: 'kanban',
    label: 'Kanban',
    icon: 'board'
  }].map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    className: 'tab' + (view === o.id ? ' on' : ''),
    onClick: () => setView(o.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: o.icon,
    size: 14
  }), " ", o.label)))), view === 'lista' && /*#__PURE__*/React.createElement(PlanLista, {
    state: state,
    setState: setState,
    filters: filters,
    setFilters: setFilters
  }), view === 'gantt' && /*#__PURE__*/React.createElement(GanttBars, {
    state: state,
    filters: filters
  }), view === 'kanban' && /*#__PURE__*/React.createElement(GanttKanban, {
    state: state,
    setState: setState,
    filters: filters
  }));
}

/* ---------- View: Lista (was Tareas) ---------- */
function PlanLista({
  state,
  setState,
  filters,
  setFilters
}) {
  const [groupBy, setGroupBy] = React.useState('phase');
  const [dragIdx, setDragIdx] = React.useState(null);
  const [overIdx, setOverIdx] = React.useState(null);
  const phases = [...new Set(state.tasks.map(t => t.phase))].filter(Boolean);
  const matchFilters = buildMatchFilters(filters);
  const tasksNormalized = React.useMemo(() => state.tasks.map((t, i) => ({
    ...t,
    _status: statusFromText(t.status),
    _i: i
  })), [state.tasks]);
  const filtered = tasksNormalized.filter(matchFilters);
  const update = (idx, patch) => {
    const copy = [...state.tasks];
    copy[idx] = {
      ...copy[idx],
      ...patch
    };
    setState({
      ...state,
      tasks: copy
    });
  };
  const setStatus = (idx, stId) => update(idx, {
    status: statusMeta(stId).label
  });
  const removeTask = idx => {
    if (!confirm('¿Eliminar esta tarea?')) return;
    const copy = state.tasks.filter((_, i) => i !== idx);
    setState({
      ...state,
      tasks: copy
    });
    toast('Tarea eliminada');
  };
  const addTask = () => {
    const activeWeek = filters.week ? PLAN_WEEKS.find(w => w.id === filters.week) : null;
    const newTask = {
      phase: filters.phase || 'M1 · ABRIL — Adquisición',
      start: activeWeek ? activeWeek.start : null,
      end: activeWeek ? activeWeek.end : null,
      task: 'Nueva tarea',
      owner: filters.owner || 'Lucía',
      status: filters.status ? statusMeta(filters.status).label : 'Pendiente',
      impact: '',
      notes: ''
    };
    setState({
      ...state,
      tasks: [...state.tasks, newTask]
    });
    toast(activeWeek ? `Tarea añadida en ${activeWeek.label}` : 'Tarea añadida');
    setTimeout(() => {
      const inputs = document.querySelectorAll('[data-task-input]');
      const last = inputs[inputs.length - 1];
      last?.focus();
      last?.select();
    }, 60);
  };
  const onDragStart = fi => setDragIdx(fi);
  const onDragOver = (e, fi) => {
    e.preventDefault();
    setOverIdx(fi);
  };
  const onDrop = () => {
    if (dragIdx === null || overIdx === null || dragIdx === overIdx) {
      setDragIdx(null);
      setOverIdx(null);
      return;
    }
    const srcGlobal = filtered[dragIdx]._i;
    const dstGlobal = filtered[overIdx]._i;
    const copy = [...state.tasks];
    const [moved] = copy.splice(srcGlobal, 1);
    const dstTask = state.tasks[dstGlobal];
    if (dstTask.phase !== moved.phase) moved.phase = dstTask.phase;
    copy.splice(dstGlobal, 0, moved);
    setState({
      ...state,
      tasks: copy
    });
    setDragIdx(null);
    setOverIdx(null);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "toolbar",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: groupBy,
    onChange: e => setGroupBy(e.target.value),
    title: "Agrupar por",
    style: {
      borderColor: 'var(--lilac-300)'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "phase"
  }, "Agrupar: Fase"), /*#__PURE__*/React.createElement("option", {
    value: "week"
  }, "Agrupar: Semana"), /*#__PURE__*/React.createElement("option", {
    value: "owner"
  }, "Agrupar: Owner"), /*#__PURE__*/React.createElement("option", {
    value: "status"
  }, "Agrupar: Estado"), /*#__PURE__*/React.createElement("option", {
    value: "none"
  }, "Sin agrupar")), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn primary",
    onClick: addTask
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), " Nueva tarea")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 32
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 180
    }
  }, "Fase"), /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 320
    }
  }, "Tarea"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 130
    }
  }, "Owner"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 140
    }
  }, "Estado"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110
    }
  }, "Inicio"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110
    }
  }, "Fin"), /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 220
    }
  }, "Notas"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, (() => {
    const groupKey = t => {
      if (groupBy === 'phase') return t.phase || '(Sin fase)';
      if (groupBy === 'owner') return t.owner || '(Sin owner)';
      if (groupBy === 'status') return statusMeta(t._status).label;
      if (groupBy === 'week') {
        const w = PLAN_WEEKS.find(x => inWeekRange(t, x));
        if (!t.start || !t.end) return 'Sin fecha';
        return w ? w.label : 'Fuera de rango';
      }
      return '__all';
    };
    const groupOrder = key => {
      if (groupBy === 'week') {
        if (key === 'Sin fecha') return 999;
        if (key === 'Fuera de rango') return 998;
        const i = PLAN_WEEKS.findIndex(w => w.label === key);
        return i >= 0 ? i : 997;
      }
      if (groupBy === 'status') {
        const order = ['En progreso', 'Pendiente', 'Bloqueado', 'Hito', 'Hecho'];
        const i = order.indexOf(key);
        return i >= 0 ? i : 99;
      }
      return 0;
    };
    const groups = {};
    filtered.forEach(t => {
      const k = groupKey(t);
      if (!groups[k]) groups[k] = [];
      groups[k].push(t);
    });
    const keys = Object.keys(groups).sort((a, b) => {
      const oa = groupOrder(a),
        ob = groupOrder(b);
      if (oa !== ob) return oa - ob;
      return a.localeCompare(b);
    });
    const renderRow = (t, fi) => /*#__PURE__*/React.createElement("tr", {
      key: t._i + '-' + fi,
      className: classNames(dragIdx === fi && 'dragging', overIdx === fi && dragIdx !== null && dragIdx !== fi && 'drop-hint'),
      draggable: true,
      onDragStart: () => onDragStart(fi),
      onDragOver: e => onDragOver(e, fi),
      onDrop: onDrop,
      onDragEnd: () => {
        setDragIdx(null);
        setOverIdx(null);
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        color: '#B4B3C4',
        cursor: 'grab'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "grip",
      size: 16
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      className: "cell-input",
      value: t.phase,
      onChange: e => update(t._i, {
        phase: e.target.value
      }),
      list: "phase-suggestions",
      style: {
        font: '500 12px/1.3 Outfit',
        color: '#6B6A85'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      className: "cell-input",
      "data-task-input": true,
      value: t.task,
      onChange: e => update(t._i, {
        task: e.target.value
      }),
      style: {
        font: '500 13px/1.4 Outfit'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(OwnerPicker, {
      value: t.owner,
      onChange: v => update(t._i, {
        owner: v
      })
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusDropdown, {
      value: t._status,
      onChange: v => setStatus(t._i, v)
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "date",
      className: "cell-input",
      value: t.start || '',
      onChange: e => update(t._i, {
        start: e.target.value || null
      }),
      style: {
        font: '400 12px/1 Outfit'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "date",
      className: "cell-input",
      value: t.end || '',
      onChange: e => update(t._i, {
        end: e.target.value || null
      }),
      style: {
        font: '400 12px/1 Outfit'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      className: "cell-input",
      value: t.notes || '',
      placeholder: "\u2014",
      onChange: e => update(t._i, {
        notes: e.target.value
      }),
      style: {
        font: '400 12px/1.4 Outfit',
        color: '#6B6A85'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      className: "btn ghost sm",
      title: "Eliminar",
      onClick: () => removeTask(t._i),
      style: {
        padding: 6,
        color: '#B4B3C4'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 16
    }))));
    if (groupBy === 'none') return filtered.map((t, fi) => renderRow(t, fi));
    let fi = -1;
    return keys.map(k => /*#__PURE__*/React.createElement(React.Fragment, {
      key: k
    }, /*#__PURE__*/React.createElement("tr", {
      className: "group-row"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: 9
    }, /*#__PURE__*/React.createElement("span", {
      className: "g-label"
    }, k), /*#__PURE__*/React.createElement("span", {
      className: "g-count"
    }, groups[k].length))), groups[k].map(t => {
      fi++;
      return renderRow(t, fi);
    })));
  })())), /*#__PURE__*/React.createElement("datalist", {
    id: "phase-suggestions"
  }, phases.map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, "Sin tareas con estos filtros. ", /*#__PURE__*/React.createElement("button", {
    className: "btn ghost sm",
    onClick: () => setFilters({
      owner: '',
      phase: '',
      status: '',
      q: '',
      week: ''
    })
  }, "Limpiar")))));
}
Object.assign(window, {
  Plan
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tracker/Plan.jsx", error: String((e && e.message) || e) }); }

// tracker/Tareas.jsx
try { (() => {
/* Fisify tracker — Tareas tab */

function StatusDropdown({
  value,
  onChange
}) {
  const meta = statusMeta(value);
  return /*#__PURE__*/React.createElement("select", {
    className: 'st-dropdown ' + meta.cls,
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233F3C63' stroke-width='2'><path d='m6 9 6 6 6-6'/></svg>")`
    }
  }, STATUSES.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.label)));
}
function OwnerPicker({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: value,
    size: "sm"
  }), /*#__PURE__*/React.createElement("select", {
    className: "cell-input",
    value: value || '',
    onChange: e => onChange(e.target.value),
    style: {
      width: 'auto',
      padding: '4px 6px',
      font: '500 12px/1 Outfit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014"), Object.keys(OWNERS).map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
function Tareas({
  state,
  setState
}) {
  const [filters, setFilters] = React.useState({
    owner: '',
    phase: '',
    status: '',
    q: '',
    week: ''
  });
  const [groupBy, setGroupBy] = React.useState('phase'); // phase | week | owner | status | none
  const [dragIdx, setDragIdx] = React.useState(null);
  const [overIdx, setOverIdx] = React.useState(null);
  const phases = [...new Set(state.tasks.map(t => t.phase))].filter(Boolean);

  // Week ranges — matches the Gantt weekly grid
  const WEEKS = [{
    id: 'w0',
    label: 'Sem 23-27 Mar',
    start: '2026-03-23',
    end: '2026-03-27'
  }, {
    id: 'w1',
    label: 'Sem 1-5 Abr',
    start: '2026-04-01',
    end: '2026-04-05'
  }, {
    id: 'w2',
    label: 'Sem 7-11 Abr',
    start: '2026-04-07',
    end: '2026-04-11'
  }, {
    id: 'w3',
    label: 'Sem 14-18 Abr',
    start: '2026-04-14',
    end: '2026-04-18'
  }, {
    id: 'w4',
    label: 'Sem 20-26 Abr',
    start: '2026-04-20',
    end: '2026-04-26'
  }, {
    id: 'w5',
    label: 'Sem 27A-3M',
    start: '2026-04-27',
    end: '2026-05-03'
  }, {
    id: 'w6',
    label: 'Sem 5-9 May',
    start: '2026-05-05',
    end: '2026-05-09'
  }, {
    id: 'w7',
    label: 'Sem 12-16 May',
    start: '2026-05-12',
    end: '2026-05-16'
  }, {
    id: 'w8',
    label: 'Sem 19-23 May',
    start: '2026-05-19',
    end: '2026-05-23'
  }, {
    id: 'w9',
    label: 'Sem 26-30 May',
    start: '2026-05-26',
    end: '2026-05-30'
  }, {
    id: 'w10',
    label: 'Sem 2-6 Jun',
    start: '2026-06-02',
    end: '2026-06-06'
  }, {
    id: 'w11',
    label: 'Sem 9-13 Jun',
    start: '2026-06-09',
    end: '2026-06-13'
  }, {
    id: 'w12',
    label: 'Sem 16-20 Jun',
    start: '2026-06-16',
    end: '2026-06-20'
  }, {
    id: 'w13',
    label: 'Sem 23-30 Jun',
    start: '2026-06-23',
    end: '2026-06-30'
  }];
  const today = new Date().toISOString().slice(0, 10);
  const currentWeek = WEEKS.find(w => today >= w.start && today <= w.end);
  const inWeek = (t, w) => {
    if (!w || !t.start || !t.end) return false;
    return !(t.end < w.start || t.start > w.end);
  };

  // Normalize status on load
  const tasksNormalized = React.useMemo(() => state.tasks.map((t, i) => ({
    ...t,
    _status: statusFromText(t.status),
    _i: i
  })), [state.tasks]);
  const filtered = tasksNormalized.filter(t => {
    if (filters.owner && t.owner !== filters.owner) return false;
    if (filters.phase && t.phase !== filters.phase) return false;
    if (filters.status && t._status !== filters.status) return false;
    if (filters.week) {
      const w = WEEKS.find(x => x.id === filters.week);
      if (!inWeek(t, w)) return false;
    }
    if (filters.q && !(t.task.toLowerCase().includes(filters.q.toLowerCase()) || (t.notes || '').toLowerCase().includes(filters.q.toLowerCase()))) return false;
    return true;
  });
  const update = (idx, patch) => {
    const copy = [...state.tasks];
    copy[idx] = {
      ...copy[idx],
      ...patch
    };
    setState({
      ...state,
      tasks: copy
    });
  };
  const setStatus = (idx, stId) => {
    const lbl = statusMeta(stId).label;
    update(idx, {
      status: lbl
    });
  };
  const removeTask = idx => {
    if (!confirm('¿Eliminar esta tarea?')) return;
    const copy = state.tasks.filter((_, i) => i !== idx);
    setState({
      ...state,
      tasks: copy
    });
    toast('Tarea eliminada');
  };
  const addTask = () => {
    // Inherit active filters so the new task doesn't disappear from view
    const activeWeek = filters.week ? WEEKS.find(w => w.id === filters.week) : null;
    const newTask = {
      phase: filters.phase || 'M1 · ABRIL — Adquisición',
      start: activeWeek ? activeWeek.start : null,
      end: activeWeek ? activeWeek.end : null,
      task: 'Nueva tarea',
      owner: filters.owner || 'Lucía',
      status: filters.status ? statusMeta(filters.status).label : 'Pendiente',
      impact: '',
      notes: ''
    };
    const copy = [...state.tasks, newTask];
    setState({
      ...state,
      tasks: copy
    });
    toast(activeWeek ? `Tarea añadida en ${activeWeek.label}` : 'Tarea añadida');
    setTimeout(() => {
      const inputs = document.querySelectorAll('[data-task-input]');
      const last = inputs[inputs.length - 1];
      last?.focus();
      last?.select();
    }, 60);
  };

  // drag & drop
  const onDragStart = filteredIdx => setDragIdx(filteredIdx);
  const onDragOver = (e, filteredIdx) => {
    e.preventDefault();
    setOverIdx(filteredIdx);
  };
  const onDrop = () => {
    if (dragIdx === null || overIdx === null || dragIdx === overIdx) {
      setDragIdx(null);
      setOverIdx(null);
      return;
    }
    const srcGlobal = filtered[dragIdx]._i;
    const dstGlobal = filtered[overIdx]._i;
    const copy = [...state.tasks];
    const [moved] = copy.splice(srcGlobal, 1);
    // If moving to a different phase, take that phase
    const dstTask = state.tasks[dstGlobal];
    if (dstTask.phase !== moved.phase) moved.phase = dstTask.phase;
    copy.splice(dstGlobal, 0, moved);
    setState({
      ...state,
      tasks: copy
    });
    setDragIdx(null);
    setOverIdx(null);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    placeholder: "Buscar tarea o nota\u2026",
    value: filters.q,
    onChange: e => setFilters({
      ...filters,
      q: e.target.value
    })
  }), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.week,
    onChange: e => setFilters({
      ...filters,
      week: e.target.value
    }),
    style: filters.week ? {
      borderColor: 'var(--purple)',
      color: 'var(--purple)',
      fontWeight: 600
    } : {}
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas las semanas"), currentWeek && /*#__PURE__*/React.createElement("option", {
    value: currentWeek.id
  }, "\uD83D\uDCCD Esta semana \xB7 ", currentWeek.label), /*#__PURE__*/React.createElement("option", {
    disabled: true
  }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"), WEEKS.map(w => /*#__PURE__*/React.createElement("option", {
    key: w.id,
    value: w.id
  }, w.label, currentWeek?.id === w.id ? ' · hoy' : ''))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.phase,
    onChange: e => setFilters({
      ...filters,
      phase: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas las fases"), phases.map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }, p))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.owner,
    onChange: e => setFilters({
      ...filters,
      owner: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todos los owners"), Object.keys(OWNERS).map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: filters.status,
    onChange: e => setFilters({
      ...filters,
      status: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todos los estados"), STATUSES.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.label))), /*#__PURE__*/React.createElement("button", {
    className: "btn soft sm",
    onClick: () => setFilters({
      ...filters,
      week: currentWeek?.id || ''
    }),
    disabled: !currentWeek,
    title: currentWeek ? 'Filtrar por ' + currentWeek.label : 'Fuera del rango del piloto'
  }, "\uD83D\uDCCD Esta semana"), /*#__PURE__*/React.createElement("select", {
    className: "sel",
    value: groupBy,
    onChange: e => setGroupBy(e.target.value),
    title: "Agrupar por",
    style: {
      borderColor: 'var(--lilac-300)'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "phase"
  }, "Agrupar: Fase"), /*#__PURE__*/React.createElement("option", {
    value: "week"
  }, "Agrupar: Semana"), /*#__PURE__*/React.createElement("option", {
    value: "owner"
  }, "Agrupar: Owner"), /*#__PURE__*/React.createElement("option", {
    value: "status"
  }, "Agrupar: Estado"), /*#__PURE__*/React.createElement("option", {
    value: "none"
  }, "Sin agrupar")), /*#__PURE__*/React.createElement("span", {
    className: "count-badge"
  }, filtered.length, " de ", state.tasks.length), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn primary",
    onClick: addTask
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), " Nueva tarea")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 32
    }
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 180
    }
  }, "Fase"), /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 320
    }
  }, "Tarea"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 130
    }
  }, "Owner"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 140
    }
  }, "Estado"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110
    }
  }, "Inicio"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110
    }
  }, "Fin"), /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 220
    }
  }, "Notas / bloqueante"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, (() => {
    // Build groups
    const groupKey = t => {
      if (groupBy === 'phase') return t.phase || '(Sin fase)';
      if (groupBy === 'owner') return t.owner || '(Sin owner)';
      if (groupBy === 'status') return statusMeta(t._status).label;
      if (groupBy === 'week') {
        const w = WEEKS.find(x => inWeek(t, x));
        if (!t.start || !t.end) return 'Sin fecha';
        return w ? w.label : 'Fuera de rango';
      }
      return '__all';
    };
    const groupOrder = key => {
      if (groupBy === 'week') {
        if (key === 'Sin fecha') return 999;
        if (key === 'Fuera de rango') return 998;
        const i = WEEKS.findIndex(w => w.label === key);
        return i >= 0 ? i : 997;
      }
      if (groupBy === 'status') {
        const order = ['En progreso', 'Pendiente', 'Bloqueado', 'Hito', 'Hecho'];
        const i = order.indexOf(key);
        return i >= 0 ? i : 99;
      }
      return 0;
    };
    const groups = {};
    filtered.forEach(t => {
      const k = groupKey(t);
      if (!groups[k]) groups[k] = [];
      groups[k].push(t);
    });
    const keys = Object.keys(groups).sort((a, b) => {
      const oa = groupOrder(a),
        ob = groupOrder(b);
      if (oa !== ob) return oa - ob;
      return a.localeCompare(b);
    });
    const renderRow = (t, fi) => /*#__PURE__*/React.createElement("tr", {
      key: t._i + '-' + fi,
      className: classNames(dragIdx === fi && 'dragging', overIdx === fi && dragIdx !== null && dragIdx !== fi && 'drop-hint'),
      draggable: true,
      onDragStart: () => onDragStart(fi),
      onDragOver: e => onDragOver(e, fi),
      onDrop: onDrop,
      onDragEnd: () => {
        setDragIdx(null);
        setOverIdx(null);
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        color: '#B4B3C4',
        cursor: 'grab'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "grip",
      size: 16
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      className: "cell-input",
      value: t.phase,
      onChange: e => update(t._i, {
        phase: e.target.value
      }),
      list: "phase-suggestions",
      style: {
        font: '500 12px/1.3 Outfit',
        color: '#6B6A85'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      className: "cell-input",
      "data-task-input": true,
      value: t.task,
      onChange: e => update(t._i, {
        task: e.target.value
      }),
      style: {
        font: '500 13px/1.4 Outfit'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(OwnerPicker, {
      value: t.owner,
      onChange: v => update(t._i, {
        owner: v
      })
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusDropdown, {
      value: t._status,
      onChange: v => setStatus(t._i, v)
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "date",
      className: "cell-input",
      value: t.start || '',
      onChange: e => update(t._i, {
        start: e.target.value || null
      }),
      style: {
        font: '400 12px/1 Outfit'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "date",
      className: "cell-input",
      value: t.end || '',
      onChange: e => update(t._i, {
        end: e.target.value || null
      }),
      style: {
        font: '400 12px/1 Outfit'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      className: "cell-input",
      value: t.notes || '',
      placeholder: "\u2014",
      onChange: e => update(t._i, {
        notes: e.target.value
      }),
      style: {
        font: '400 12px/1.4 Outfit',
        color: '#6B6A85'
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      className: "btn ghost sm",
      title: "Eliminar",
      onClick: () => removeTask(t._i),
      style: {
        padding: 6,
        color: '#B4B3C4'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 16
    }))));
    if (groupBy === 'none') {
      return filtered.map((t, fi) => renderRow(t, fi));
    }
    let fi = -1;
    return keys.map(k => /*#__PURE__*/React.createElement(React.Fragment, {
      key: k
    }, /*#__PURE__*/React.createElement("tr", {
      className: "group-row"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: 9
    }, /*#__PURE__*/React.createElement("span", {
      className: "g-label"
    }, k), /*#__PURE__*/React.createElement("span", {
      className: "g-count"
    }, groups[k].length))), groups[k].map(t => {
      fi++;
      return renderRow(t, fi);
    })));
  })())), /*#__PURE__*/React.createElement("datalist", {
    id: "phase-suggestions"
  }, phases.map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, "Sin tareas con estos filtros. ", /*#__PURE__*/React.createElement("button", {
    className: "btn ghost sm",
    onClick: () => setFilters({
      owner: '',
      phase: '',
      status: '',
      q: ''
    })
  }, "Limpiar")))));
}
Object.assign(window, {
  Tareas,
  OwnerPicker,
  StatusDropdown
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tracker/Tareas.jsx", error: String((e && e.message) || e) }); }

// tracker/utils.jsx
try { (() => {
/* Fisify tracker — shared utilities */

// Initial owner roster with colors
const OWNERS = {
  'Inhar': {
    color: '#8B75EE',
    initials: 'IN'
  },
  'Leire': {
    color: '#7561D9',
    initials: 'LE'
  },
  'Iñaki': {
    color: '#3F3C63',
    initials: 'IÑ'
  },
  'Alex': {
    color: '#AFD7AE',
    initials: 'AL'
  },
  'Lucía': {
    color: '#D6A4DB',
    initials: 'LU'
  },
  'Todos': {
    color: '#6B6A85',
    initials: '∞'
  }
};
const STATUSES = [{
  id: 'todo',
  label: 'Pendiente',
  cls: 'todo',
  match: ['pendiente', '']
}, {
  id: 'prog',
  label: 'En progreso',
  cls: 'prog',
  match: ['en progreso', 'progreso']
}, {
  id: 'done',
  label: 'Hecho',
  cls: 'done',
  match: ['hecho', 'hecho ', 'completado', 'done']
}, {
  id: 'block',
  label: 'Bloqueado',
  cls: 'block',
  match: ['bloqueado', 'bloqueado ', 'blocked']
}, {
  id: 'mile',
  label: 'Hito',
  cls: 'mile',
  match: ['hito', 'milestone']
}];
function statusFromText(s) {
  const t = String(s || '').toLowerCase().trim();
  for (const st of STATUSES) if (st.match.includes(t)) return st.id;
  return 'todo';
}
function statusMeta(id) {
  return STATUSES.find(s => s.id === id) || STATUSES[0];
}
function ownerMeta(name) {
  const n = (name || '').trim();
  if (OWNERS[n]) return {
    name: n,
    ...OWNERS[n]
  };
  if (!n) return {
    name: '',
    color: '#B4B3C4',
    initials: '—'
  };
  // auto for unknown
  const initials = n.split(/\s+/).slice(0, 2).map(s => s[0] || '').join('').toUpperCase() || '?';
  return {
    name: n,
    color: '#B4B3C4',
    initials
  };
}
function fmtPct(v, digits = 0) {
  if (v === '' || v === null || v === undefined || isNaN(v)) return '—';
  return (Number(v) * 100).toFixed(digits) + '%';
}
function fmtNum(v) {
  if (v === '' || v === null || v === undefined || isNaN(v)) return '—';
  return Number(v).toLocaleString('es-ES');
}
function fmtDate(iso) {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}`;
}
function classNames(...xs) {
  return xs.filter(Boolean).join(' ');
}
function Avatar({
  name,
  size = 'sm'
}) {
  const m = ownerMeta(name);
  return /*#__PURE__*/React.createElement("span", {
    className: 'avatar ' + size,
    style: {
      background: m.color
    },
    title: m.name || 'Sin asignar'
  }, m.initials);
}
function AvatarGroup({
  names,
  max = 3
}) {
  const u = [...new Set(names.filter(Boolean))];
  const show = u.slice(0, max);
  const extra = u.length - show.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex'
    }
  }, show.map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      marginLeft: i ? -8 : 0,
      border: '2px solid #fff',
      borderRadius: 999,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -8,
      border: '2px solid #fff',
      borderRadius: 999,
      width: 22,
      height: 22,
      background: '#EBE6F7',
      color: '#3F3C63',
      font: '600 10px/1 Outfit',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "+", extra));
}
function Icon({
  name,
  size = 18
}) {
  const paths = {
    plus: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    })),
    filter: /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18l-7 8v7l-4-2v-5z"
    }),
    search: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20 20-4-4"
    })),
    download: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m7 12 5 5 5-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21h16"
    })),
    upload: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21V7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m7 12 5-5 5 5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 3h16"
    })),
    trash: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M4 7h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 11v6M14 11v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 7v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 7V4h6v3"
    })),
    grip: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "6",
      r: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "6",
      r: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "12",
      r: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "12",
      r: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "18",
      r: "1.2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "18",
      r: "1.2"
    })),
    check: /*#__PURE__*/React.createElement("path", {
      d: "m5 12 5 5L20 7"
    }),
    star: /*#__PURE__*/React.createElement("polygon", {
      points: "12,3 14.5,9 21,9.5 16,14 17.5,21 12,17.5 6.5,21 8,14 3,9.5 9.5,9"
    }),
    chev: /*#__PURE__*/React.createElement("path", {
      d: "m9 6 6 6-6 6"
    }),
    x: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 6L6 18"
    })),
    export: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3v12M7 8l5-5 5 5"
    })),
    reset: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12a9 9 0 1 0 3-6.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 3v6h6"
    })),
    history: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    grid: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    })),
    bars: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "10",
      width: "14",
      height: "3",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "15",
      width: "10",
      height: "3",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "3",
      rx: "1"
    })),
    board: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "5",
      height: "16",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "4",
      width: "5",
      height: "10",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "4",
      width: "4",
      height: "14",
      rx: "1"
    })),
    layout: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M9 21V9"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    className: "i",
    style: {
      width: size,
      height: size
    }
  }, paths[name] || null);
}

// Toast singleton
let toastFn = null;
function ToastHost() {
  const [msg, setMsg] = React.useState('');
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    toastFn = m => {
      setMsg(m);
      setOn(true);
      clearTimeout(toastFn._t);
      toastFn._t = setTimeout(() => setOn(false), 2400);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: 'toast' + (on ? ' on' : '')
  }, msg);
}
const toast = m => toastFn && toastFn(m);

// localStorage helpers
const STORAGE_KEY = 'fisify_melia_tracker_v1';
function loadState(seed) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return {
      ...seed,
      ...JSON.parse(raw)
    };
  } catch (e) {
    console.warn(e);
  }
  return seed;
}
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn(e);
  }
}
Object.assign(window, {
  OWNERS,
  STATUSES,
  statusFromText,
  statusMeta,
  ownerMeta,
  fmtPct,
  fmtNum,
  fmtDate,
  classNames,
  Avatar,
  AvatarGroup,
  Icon,
  ToastHost,
  toast,
  loadState,
  saveState,
  STORAGE_KEY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tracker/utils.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fisify app — icon library (Lucide-style, stroked 1.75 on 24px grid) */

const Icon = ({
  name,
  size = 22,
  style = {},
  ...p
}) => {
  const base = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    width: size,
    height: size,
    ...style
  };
  const paths = {
    home: /*#__PURE__*/React.createElement("path", {
      d: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"
    }),
    grid: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    })),
    bag: /*#__PURE__*/React.createElement("path", {
      d: "M6 7h12l-1 13H7zM9 7V5a3 3 0 0 1 6 0v2"
    }),
    trend: /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 8-8M21 7v5h-5"
    }),
    chat: /*#__PURE__*/React.createElement("path", {
      d: "M21 12c0 4.5-4 8-9 8a9.7 9.7 0 0 1-3.5-.6L3 21l1.6-4.5A8 8 0 0 1 3 12c0-4.5 4-8 9-8s9 3.5 9 8z"
    }),
    clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    chevronRight: /*#__PURE__*/React.createElement("path", {
      d: "m9 6 6 6-6 6"
    }),
    chevronLeft: /*#__PURE__*/React.createElement("path", {
      d: "m15 6-6 6 6 6"
    }),
    play: /*#__PURE__*/React.createElement("polygon", {
      points: "7,4 20,12 7,20"
    }),
    user: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21a8 8 0 0 1 16 0"
    })),
    check: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8 12 3 3 5-6"
    })),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    }),
    search: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20 20-4-4"
    })),
    bell: /*#__PURE__*/React.createElement("path", {
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M10 21a2 2 0 0 0 4 0"
    }),
    plus: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    })),
    close: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 6L6 18"
    })),
    calendar: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3v4M8 3v4M4 11h16"
    })),
    filter: /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18l-7 8v7l-4-2v-5z"
    }),
    flame: /*#__PURE__*/React.createElement("path", {
      d: "M12 2c2 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 2-7 2 1 2 3 4-4z"
    }),
    arrowRight: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13 5l7 7-7 7"
    })),
    spark: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"
    })
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p, {
    style: base
  }), paths[name]);
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Primitives.jsx
try { (() => {
/* Fisify app UI primitives */

function TopBar({
  title,
  right,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "top-bar"
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    className: "fis-iconbtn",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft"
  })) : /*#__PURE__*/React.createElement("div", {
    className: "brandmark"
  }, "fisify"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      font: '600 15px/1 Outfit',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, right ?? /*#__PURE__*/React.createElement("button", {
    className: "fis-iconbtn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user"
  }))));
}
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    id: 'program',
    label: 'Mi programa',
    icon: 'home'
  }, {
    id: 'catalog',
    label: 'Catálogo',
    icon: 'grid'
  }, {
    id: 'offers',
    label: 'Ofertas',
    icon: 'bag'
  }, {
    id: 'progress',
    label: 'Progreso',
    icon: 'trend'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fisify-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: 'tab' + (active === t.id ? ' on' : ''),
    onClick: () => onChange(t.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon
  }), t.label)), /*#__PURE__*/React.createElement("button", {
    className: "chat-fab",
    onClick: () => onChange('chat'),
    style: active === 'chat' ? {
      background: '#7561D9'
    } : {}
  }, "Chat"));
}
function PhotoCard({
  kicker,
  title,
  time,
  photo,
  onClick,
  chipText,
  cornerDot
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fis-photocard",
    onClick: onClick,
    style: {
      cursor: onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      backgroundImage: `url(${photo})`
    }
  }, chipText && /*#__PURE__*/React.createElement("div", {
    className: "chip-top-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fis-chip dark"
  }, chipText)), time && /*#__PURE__*/React.createElement("div", {
    className: "chip-top-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fis-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 12
  }), time)), cornerDot && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 12,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#8B75EE',
      width: 32,
      height: 32,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, kicker), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title)));
}
function ListRow({
  title,
  subtitle,
  thumb,
  onClick,
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fis-listrow",
    onClick: onClick,
    style: {
      cursor: onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb",
    style: {
      backgroundImage: thumb ? `url(${thumb})` : undefined
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, subtitle)), badge ?? /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    style: {
      color: '#B4B3C4'
    }
  }));
}
function Chip({
  children,
  dark,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'fis-chip' + (dark ? ' dark' : ''),
    style: style
  }, children);
}
function BrandMark({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "brandmark",
    style: {
      fontSize: size
    }
  }, "fisify");
}
function HabitDots({
  days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
  values = [3, 4, 3, 5, 2, 1, 4],
  activeIndex = 6
}) {
  const pal = ['#F4FFF2', '#AFD7AE', '#FDE8B1', '#FFE2E7', '#EBE6F7'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      borderRadius: 10,
      background: pal[values[i] % pal.length],
      outline: i === activeIndex ? '2px solid #2A2B43' : 'none',
      outlineOffset: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 10px/1 Outfit',
      color: '#8E8DA4',
      marginTop: 8
    }
  }, d))));
}
Object.assign(window, {
  TopBar,
  TabBar,
  PhotoCard,
  ListRow,
  Chip,
  BrandMark,
  HabitDots
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Screens.jsx
try { (() => {
/* Fisify app — core screens */

function ProgramScreen({
  onOpenExercise
}) {
  const [goal, setGoal] = React.useState('aliviar');
  const goals = [{
    id: 'aliviar',
    label: 'Aliviar el dolor',
    caption: 'Ideal si actualmente tienes dolor',
    img: '../../assets/photos/person-1.jpg'
  }, {
    id: 'evitar',
    label: 'Evitar dolores de espalda',
    caption: 'Ideal para prevenir sobrecargas',
    img: '../../assets/photos/person-2.jpg'
  }, {
    id: 'fortalecer',
    label: 'Fortalecer la espalda',
    caption: 'Ideal para tener una espalda fuerte y sana',
    img: '../../assets/photos/person-3.jpg'
  }, {
    id: 'mejorar',
    label: 'Mejorar la postura',
    caption: 'Ideal para mejorar tu higiene corporal',
    img: '../../assets/photos/pose-tracking.png'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fisify-screen"
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '300 26px/1.2 Outfit',
      letterSpacing: '-0.02em',
      color: '#2A2B43'
    }
  }, "Programas de bienestar"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 Outfit',
      color: '#6B6A85',
      marginTop: 4
    }
  }, "\xBFQu\xE9 programa quieres realizar?")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Chip, null, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 12
  }), " 2 min")), /*#__PURE__*/React.createElement("div", {
    className: "fis-section-title"
  }, "Crea tu nuevo programa personalizado"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, goals.map(g => /*#__PURE__*/React.createElement(PhotoCard, {
    key: g.id,
    kicker: g.caption,
    title: g.label,
    photo: g.img,
    cornerDot: true,
    onClick: () => {
      setGoal(g.id);
      onOpenExercise?.(g);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: 16,
      background: 'linear-gradient(135deg,#FBF6F9 0%,#F6E8F7 100%)',
      borderRadius: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/orbs/orb-1.png",
    style: {
      width: 48,
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.2 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.01em'
    }
  }, "Tu fisioterapeuta 24/7"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 Outfit',
      color: '#6B6A85',
      marginTop: 2
    }
  }, "Pregunta lo que necesites, cuando quieras.")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 18,
    style: {
      color: '#8B75EE'
    }
  }))));
}
function CatalogScreen({
  onOpenExercise
}) {
  const sportPhotos = ['../../assets/photos/person-2.jpg', '../../assets/photos/person-3.jpg'];
  const dayPhotos = ['../../assets/photos/person-1.jpg', '../../assets/photos/pose-tracking.png'];
  return /*#__PURE__*/React.createElement("div", {
    className: "fisify-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brandmark"
  }, "fisify"), /*#__PURE__*/React.createElement("button", {
    className: "fis-iconbtn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fis-section-title",
    style: {
      marginTop: 0
    }
  }, "Para deportistas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    kicker: "Lumbar",
    title: "Estabilidad lumbar trabajando el core",
    photo: sportPhotos[0],
    time: "7 min",
    onClick: onOpenExercise
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    kicker: "Espalda",
    title: "Mejora flexibilidad columna",
    photo: sportPhotos[1],
    time: "6 min",
    onClick: onOpenExercise
  })), /*#__PURE__*/React.createElement("div", {
    className: "fis-section-title"
  }, "Un d\xEDa cualquiera"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    kicker: "Espalda completa",
    title: "Realiza estos ejercicios cuando tengas agujetas",
    photo: dayPhotos[0],
    time: "5 min",
    onClick: onOpenExercise
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    kicker: "Respiraci\xF3n",
    title: "Entrenamiento para aprender a respirar correctamente",
    photo: dayPhotos[1],
    time: "4 min",
    onClick: onOpenExercise
  })), /*#__PURE__*/React.createElement("div", {
    className: "fis-section-title"
  }, "P\xEDldoras r\xE1pidas"), /*#__PURE__*/React.createElement(ListRow, {
    title: "Ejercicios de cuello en oficina",
    subtitle: "3 min \xB7 Cervical",
    thumb: "../../assets/photos/person-1.jpg",
    onClick: onOpenExercise
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Activaci\xF3n de hombros",
    subtitle: "5 min \xB7 Tren superior",
    thumb: "../../assets/photos/person-2.jpg",
    onClick: onOpenExercise
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Movilidad articular completa",
    subtitle: "8 min \xB7 Cuerpo entero",
    thumb: "../../assets/photos/person-3.jpg",
    onClick: onOpenExercise
  })));
}
function ExerciseDetailScreen({
  onBack,
  onStart
}) {
  const exercises = [{
    t: 'Masaje sobre las órbitas del ojo',
    s: 'Agacha 8 seg',
    img: '../../assets/photos/person-1.jpg'
  }, {
    t: 'Cerrar y abrir los ojos',
    s: 'Agacha 8 seg',
    img: '../../assets/photos/person-2.jpg'
  }, {
    t: 'Ejercicio de acomodación y enfoque tres objetos',
    s: 'Agacha 8 seg',
    img: '../../assets/photos/person-3.jpg'
  }, {
    t: 'Ejercicios de movimiento ocular diagonales y círculos',
    s: 'Agacha 8 seg',
    img: '../../assets/photos/pose-tracking.png'
  }, {
    t: 'Ocho vertical y horizontal',
    s: 'Agacha 8 seg',
    img: '../../assets/photos/celebration-circle.png'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fisify-screen",
    style: {
      paddingTop: 0,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      backgroundImage: 'url(../../assets/photos/pose-tracking.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 60,
      left: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fis-iconbtn",
    onClick: onBack,
    style: {
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 120px',
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 21px/1.25 Outfit',
      letterSpacing: '-0.02em',
      color: '#2A2B43'
    }
  }, "Ejercitar los ojos y la concentraci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 Outfit',
      color: '#6B6A85',
      marginTop: 8
    }
  }, "Alivia la fatiga visual y mejora la concentraci\xF3n con ejercicios dirigidos a los m\xFAsculos oculares y la agudeza visual."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.01em'
    }
  }, "Ejercicios"), /*#__PURE__*/React.createElement(Chip, null, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 12
  }), "3 min")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, exercises.map((e, i) => /*#__PURE__*/React.createElement(ListRow, {
    key: i,
    title: e.t,
    subtitle: e.s,
    thumb: e.img
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 44,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fis-btn-primary block large",
    onClick: onStart
  }, "Empezar")));
}
function ProgressScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fisify-screen"
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fis-section-title",
    style: {
      marginTop: 8
    }
  }, "Tu progreso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: '#EBE6F7',
      borderRadius: 999,
      padding: 4,
      marginBottom: 16
    }
  }, ['Hábito', 'Educación'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: 10,
      borderRadius: 999,
      font: '600 13px/1 Outfit',
      letterSpacing: '-0.01em',
      color: i === 1 ? '#2A2B43' : '#6B6A85',
      background: i === 1 ? '#fff' : 'transparent',
      boxShadow: i === 1 ? '0 1px 2px rgba(42,43,67,0.06)' : 'none'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: 18,
      boxShadow: '0 2px 6px rgba(42,43,67,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1.2 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.01em'
    }
  }, "P\xEDldoras de salud"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 Outfit',
      color: '#6B6A85',
      marginTop: 2
    }
  }, "Cuanto m\xE1s aprendes sobre salud, mejor te cuidar\xE1s.")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px/1 Outfit',
      color: '#8B75EE',
      letterSpacing: '-0.02em'
    }
  }, "67 %")), /*#__PURE__*/React.createElement("div", {
    className: "fis-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: '67%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 6
    }
  }, ['#C6B5F4', '#FE93A7', '#BFD0FF', '#AFD7AE', '#FDE8B1'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 22,
      height: 22,
      borderRadius: 999,
      background: c,
      marginLeft: i ? -6 : 0,
      border: '2px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 Outfit',
      color: '#6B6A85',
      alignSelf: 'center',
      marginLeft: 6
    }
  }, "8 de 12 completadas"))), /*#__PURE__*/React.createElement("div", {
    className: "fis-section-title"
  }, "Dolor esta semana"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: 18,
      boxShadow: '0 2px 6px rgba(42,43,67,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.01em'
    }
  }, "Nivel reportado"), /*#__PURE__*/React.createElement(Chip, {
    style: {
      background: '#AFD7AE',
      color: '#1F4A2A'
    }
  }, "Bajo")), /*#__PURE__*/React.createElement(HabitDots, null)), /*#__PURE__*/React.createElement("div", {
    className: "fis-section-title"
  }, "Pr\xF3ximas charlas"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: 18,
      boxShadow: '0 2px 6px rgba(42,43,67,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 Outfit',
      color: '#6B6A85'
    }
  }, "Lunes, 30 de octubre"), /*#__PURE__*/React.createElement(Chip, {
    style: {
      background: '#FE93A7',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: '#fff'
    }
  }), "live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: '#DAD9E3',
      backgroundImage: 'url(../../assets/photos/person-3.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 Outfit',
      color: '#6B6A85'
    }
  }, "11:15 AM \xB7 Suelo p\xE9lvico"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 Outfit',
      color: '#2A2B43',
      letterSpacing: '-0.01em',
      marginTop: 4
    }
  }, "\xBFPor qu\xE9 los hipopresivos son tan buenos?"))), /*#__PURE__*/React.createElement("button", {
    className: "fis-btn-soft",
    style: {
      marginTop: 14,
      width: '100%',
      padding: 12
    }
  }, "Apuntarte"))));
}
function ChatScreen({
  onBack
}) {
  const [input, setInput] = React.useState('');
  const [msgs, setMsgs] = React.useState([{
    who: 'bot',
    text: '¡Hola! Soy tu fisioterapeuta 24/7. ¿En qué puedo ayudarte hoy?'
  }, {
    who: 'user',
    text: 'Me duele la parte baja de la espalda al levantarme.'
  }, {
    who: 'bot',
    text: 'Lo siento. ¿Es un dolor puntual o lo arrastras desde hace días? Te propongo una rutina suave si quieres.'
  }]);
  const send = () => {
    if (!input.trim()) return;
    setMsgs([...msgs, {
      who: 'user',
      text: input
    }]);
    setInput('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fisify-screen"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Fisio asistente",
    onBack: onBack,
    right: /*#__PURE__*/React.createElement("button", {
      className: "fis-iconbtn"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "content",
    style: {
      padding: '6px 16px 140px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.who === 'user' ? 'flex-end' : 'flex-start',
      maxWidth: '82%',
      padding: '10px 14px',
      borderRadius: m.who === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
      background: m.who === 'user' ? '#8B75EE' : '#F7F6FA',
      color: m.who === 'user' ? '#fff' : '#2A2B43',
      font: '400 14px/1.45 Outfit',
      letterSpacing: '-0.005em'
    }
  }, m.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 42,
      background: '#F7F6FA',
      borderRadius: 999,
      padding: '4px 4px 4px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: "Escribe un mensaje\u2026",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      font: '400 14px/1.2 Outfit',
      color: '#2A2B43'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      background: '#8B75EE',
      color: '#fff',
      border: 'none',
      width: 40,
      height: 40,
      borderRadius: 999,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16
  }))));
}
function OffersScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "fisify-screen"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Ofertas"
  }), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#C6B5F4 0%,#FE93A7 100%)',
      borderRadius: 24,
      padding: 22,
      color: '#fff',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 Outfit',
      opacity: 0.9
    }
  }, "CAMPA\xD1A \xB7 30 DE MAYO"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 22px/1.15 Outfit',
      letterSpacing: '-0.02em',
      marginTop: 8
    }
  }, "Bono SPA para 2 personas"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 Outfit',
      marginTop: 8,
      opacity: 0.95
    }
  }, "Completa al menos 4 sesiones en Fisify este mes y entra en el sorteo de un d\xEDa de spa para ti y alguien especial."), /*#__PURE__*/React.createElement("button", {
    className: "fis-btn-soft",
    style: {
      marginTop: 16,
      background: 'rgba(255,255,255,0.2)',
      color: '#fff'
    }
  }, "Ver detalles")), /*#__PURE__*/React.createElement("div", {
    className: "fis-section-title"
  }, "Otras ofertas para ti"), /*#__PURE__*/React.createElement(ListRow, {
    title: "Forum Sport \xB7 Tarjeta regalo 50 \u20AC",
    subtitle: "10 sesiones \xB7 2 boletos",
    thumb: "../../assets/applications/forum-sport-card.png"
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "La Escuela \xB7 Bono restaurante",
    subtitle: "20 sesiones \xB7 4 boletos",
    thumb: "../../assets/applications/restaurante-card.png"
  }), /*#__PURE__*/React.createElement(ListRow, {
    title: "Bono SPA",
    subtitle: "4 sesiones \xB7 1 boleto",
    thumb: "../../assets/applications/bono-spa-card.png"
  })));
}
Object.assign(window, {
  ProgramScreen,
  CatalogScreen,
  ExerciseDetailScreen,
  ProgressScreen,
  ChatScreen,
  OffersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Fisify website components */

function WebNav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "fw-nav"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-fisify-horizontal.png",
    className: "logo",
    alt: "fisify"
  }), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("a", null, "Para ti"), /*#__PURE__*/React.createElement("a", null, "Para empresas"), /*#__PURE__*/React.createElement("a", null, "Nuestra historia"), /*#__PURE__*/React.createElement("a", null, "Blog"), /*#__PURE__*/React.createElement("a", null, "Precios")), /*#__PURE__*/React.createElement("button", {
    className: "cta"
  }, "Probar gratis"));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "fw-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "Tu fisioterapeuta, siempre contigo"), /*#__PURE__*/React.createElement("h1", null, "Movimiento", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "que te"), " ", /*#__PURE__*/React.createElement("span", {
    className: "purple"
  }, "cuida"), " ", /*#__PURE__*/React.createElement("em", null, "y te"), " ", /*#__PURE__*/React.createElement("span", {
    className: "pink"
  }, "acompa\xF1a"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Un plan personalizado con ejercicios guiados, educaci\xF3n en salud y un fisio de chat. Todo en tu m\xF3vil, pensado para que muevas el cuerpo como debe moverse."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fw-btn-primary"
  }, "Empieza tu programa"), /*#__PURE__*/React.createElement("button", {
    className: "fw-btn-ghost"
  }, "Ver c\xF3mo funciona", /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "10,8 16,12 10,16",
    fill: "currentColor"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatars"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: 'url(../../assets/photos/person-1.jpg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: 'url(../../assets/photos/person-2.jpg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: 'url(../../assets/photos/person-3.jpg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#EBE6F7',
      color: '#8B75EE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 11px/1 Outfit'
    }
  }, "+3K")), /*#__PURE__*/React.createElement("div", null, "M\xE1s de 3.000 personas ", /*#__PURE__*/React.createElement("br", null), "ya se mueven con Fisify."))), /*#__PURE__*/React.createElement("div", {
    className: "visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "orb-bg"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/screens/app-mockup-trio.png",
    style: {
      width: '100%',
      maxWidth: 520
    }
  })));
}
function Features() {
  const items = [{
    title: 'Programa hecho a tu medida',
    body: 'Contestas un test breve y te creamos un plan según tu cuerpo, dolor y estilo de vida.',
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M4 6h16M4 12h16M4 18h10"
    })
  }, {
    title: 'Fisioterapeuta 24/7',
    body: 'Pregunta en el chat cuando surjan molestias. Respuestas de un fisio real, al momento.',
    icon: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    }))
  }, {
    title: 'Ejercicios guiados en vídeo',
    body: 'Rutinas cortas de 3 a 10 minutos con voz y animaciones. Nada de gimnasio, nada de excusas.',
    icon: /*#__PURE__*/React.createElement("polygon", {
      points: "7,4 20,12 7,20"
    })
  }, {
    title: 'Seguimiento del dolor',
    body: 'Registra cómo te sientes cada día. Visualiza tu progreso semana a semana.',
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 8-8M21 7v5h-5"
    })
  }, {
    title: 'Charlas en directo',
    body: 'Sesiones semanales con fisios especialistas. Suelo pélvico, postura, cervicales…',
    icon: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 12h8"
    }))
  }, {
    title: 'Recompensas y regalos',
    body: 'Mantén tu rutina y consigue bonos en deporte, spa o restauración con nuestros partners.',
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    })
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "fw-section tinted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fw-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "Qu\xE9 encontrar\xE1s"), /*#__PURE__*/React.createElement("h2", null, "Todo lo que necesitas ", /*#__PURE__*/React.createElement("em", null, "para moverte mejor"), "."), /*#__PURE__*/React.createElement("p", null, "Fisify combina el conocimiento de fisioterapeutas reales con una experiencia digital diaria. Pensada para ir contigo all\xE1 donde vayas.")), /*#__PURE__*/React.createElement("div", {
    className: "fw-features"
  }, items.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "fw-feature",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, f.icon)), /*#__PURE__*/React.createElement("h3", null, f.title), /*#__PURE__*/React.createElement("p", null, f.body)))));
}
function ForCompanies() {
  return /*#__PURE__*/React.createElement("section", {
    className: "fw-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fw-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "media",
    style: {
      backgroundImage: 'url(../../assets/photos/person-3.jpg)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker",
    style: {
      color: '#8B75EE',
      font: '500 13px/1 Outfit',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, "Fisify para empresas"), /*#__PURE__*/React.createElement("h2", null, "Equipos que se mueven ", /*#__PURE__*/React.createElement("em", null, "rinden m\xE1s"), "."), /*#__PURE__*/React.createElement("p", null, "Dale a tu equipo un beneficio real: menos bajas por dolor, m\xE1s energ\xEDa, mejor ambiente. Fisify se integra en la vida diaria de tus empleados sin fricciones."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Onboarding personalizado por empleado"), /*#__PURE__*/React.createElement("li", null, "Charlas en directo con fisioterapeutas"), /*#__PURE__*/React.createElement("li", null, "Informes an\xF3nimos del estado del equipo"), /*#__PURE__*/React.createElement("li", null, "Recompensas con partners locales")), /*#__PURE__*/React.createElement("button", {
    className: "fw-btn-primary"
  }, "Habla con nuestro equipo"))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "fw-section tinted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fw-testimonial"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, "\u201CLlevo ", /*#__PURE__*/React.createElement("em", null, "tres meses sin dolor lumbar"), ". El chat me saca de dudas cuando lo necesito y los ejercicios son cortos y funcionan.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "person"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    style: {
      backgroundImage: 'url(../../assets/photos/person-2.jpg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "who",
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Laura M."), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, "Usuaria desde 2024")))));
}
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "fw-cta-band"
  }, /*#__PURE__*/React.createElement("h2", null, "Empieza hoy. Tu cuerpo te lo agradecer\xE1."), /*#__PURE__*/React.createElement("p", null, "Test de 2 minutos, plan personalizado, primera semana gratis."), /*#__PURE__*/React.createElement("button", {
    className: "fw-btn-primary"
  }, "Probar Fisify gratis"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "fw-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-col"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-fisify-horizontal.png",
    className: "logo"
  }), /*#__PURE__*/React.createElement("p", null, "Fisify es movimiento consciente. Un plan diario de fisioterapia digital, hecho para que tu cuerpo se sienta como debe sentirse.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Producto"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Para ti")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Para empresas")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Precios")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "App iOS")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "App Android")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Compa\xF1\xEDa"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Nuestra historia")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Blog")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Contacto")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Prensa")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Legal"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Privacidad")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Cookies")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "T\xE9rminos"))))), /*#__PURE__*/React.createElement("div", {
    className: "legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Fisify. Movimiento que cuida."), /*#__PURE__*/React.createElement("span", null, "Hecho con \u2665 en Espa\xF1a")));
}
Object.assign(window, {
  WebNav,
  Hero,
  Features,
  ForCompanies,
  Testimonial,
  CtaBand,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

})();

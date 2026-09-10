"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  activeStep: number;
}

const nodes = [
  { x: 200, y: 250, label: "srv-01" },
  { x: 550, y: 150, label: "dns.rec" },
  { x: 950, y: 220, label: "api.gw" },
  { x: 1250, y: 300, label: "cdn.n1" },
  { x: 150, y: 550, label: "mail.x" },
  { x: 450, y: 500, label: "db.pri" },
  { x: 800, y: 480, label: "auth.0" },
  { x: 1100, y: 600, label: "log.in" },
  { x: 300, y: 800, label: "vpn.01" },
  { x: 700, y: 750, label: "stg.02" },
  { x: 1000, y: 850, label: "bkp.s1" },
  { x: 500, y: 350, label: "ci.run" },
];

const center = { x: 600, y: 540 };
const threatIdx = new Set([2, 5, 8, 11]);

const crossLinks: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [6, 7],
  [8, 9], [9, 10], [0, 4], [3, 7], [4, 8], [7, 10], 
  [1, 5], [6, 9], [11, 1], [11, 0]
];

export function MethodologyVisual({ activeStep }: Props) {
  const reduced = useReducedMotion();
  const t = (v: number) => (reduced ? 0 : v);
  const isThreat = (i: number) => threatIdx.has(i);

  const nodeColor = (i: number) => {
    if (activeStep >= 4) return "rgba(52,211,153,0.5)";
    if (activeStep >= 3) return isThreat(i) ? "rgba(239,68,68,0.55)" : "rgba(52,211,153,0.45)";
    return "rgba(52,211,153,0.25)";
  };
  const nodeStroke = (i: number) => {
    if (activeStep >= 4) return "rgba(52,211,153,0.7)";
    if (activeStep >= 3) return isThreat(i) ? "rgba(239,68,68,0.75)" : "rgba(52,211,153,0.55)";
    return "rgba(52,211,153,0.4)";
  };
  const edgeColor = (i: number) => {
    if (activeStep >= 4) return "rgba(52,211,153,0.3)";
    if (activeStep >= 3) return isThreat(i) ? "rgba(239,68,68,0.45)" : "rgba(52,211,153,0.3)";
    return "rgba(255,255,255,0.07)";
  };
  const crossColor = (a: number, b: number) => {
    if (activeStep >= 4) return "rgba(52,211,153,0.15)";
    if (activeStep >= 3) return (isThreat(a) || isThreat(b)) ? "rgba(239,68,68,0.2)" : "rgba(52,211,153,0.12)";
    return "rgba(255,255,255,0.04)";
  };

  const statusLabel = [
    "DISCOVERING ASSETS IN TARGET ENVIRONMENT…",
    "COLLECTING DATA FROM INFRASTRUCTURE…",
    "CORRELATING PATTERNS AND RELATIONSHIPS…",
    "ANALYZING THREATS AND VULNERABILITIES…",
    "REPORT GENERATED ✓",
    "TAKING ACTION — SCALING UP ↑",
  ][activeStep];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">
        <defs>
          <filter id="mv-gl">
            <feGaussianBlur stdDeviation="8" />
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ═══ STEP 1 — Collect: dashed lines → center ═══ */}
        {nodes.map((n, i) => (
          <motion.path
            key={`col-${i}`}
            d={`M${n.x} ${n.y}L${center.x} ${center.y}`}
            stroke="rgba(52,211,153,0.25)" strokeWidth={1.5} strokeDasharray="6 12"
            animate={{ opacity: activeStep >= 1 && activeStep < 3 ? 0.8 : 0 }}
            transition={{ duration: t(0.5), delay: t(i * 0.03) }}
          />
        ))}

        {/* ═══ STEP 2 — Correlate: solid edges ═══ */}
        {nodes.map((n, i) => (
          <motion.path
            key={`edge-${i}`}
            d={`M${center.x} ${center.y}L${n.x} ${n.y}`}
            strokeWidth={3}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: activeStep >= 2 ? 1 : 0,
              opacity: activeStep >= 2 ? 1 : 0,
              stroke: edgeColor(i),
            }}
            transition={{ duration: t(0.55), delay: t(i * 0.04) }}
          />
        ))}

        {/* ═══ STEP 2 — Cross-links ═══ */}
        {crossLinks.map(([a, b], i) => (
          <motion.path
            key={`xl-${i}`}
            d={`M${nodes[a].x} ${nodes[a].y}L${nodes[b].x} ${nodes[b].y}`}
            strokeWidth={1.5} strokeDasharray="8 10"
            animate={{
              opacity: activeStep >= 2 ? 0.8 : 0,
              stroke: crossColor(a, b),
            }}
            transition={{ duration: t(0.4), delay: t(0.5 + i * 0.03) }}
          />
        ))}

        {/* ═══ Central hub (step 1+) ═══ */}
        <motion.circle
          cx={center.x} cy={center.y} r={40}
          fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.45)"
          strokeWidth={3} filter="url(#mv-gl)"
          animate={{ opacity: activeStep >= 1 ? 1 : 0 }}
          transition={{ duration: t(0.5) }}
        />
        <motion.circle
          cx={center.x} cy={center.y} r={12} fill="rgba(52,211,153,0.8)"
          animate={{ opacity: activeStep >= 1 ? 1 : 0 }}
          transition={{ duration: t(0.3) }}
        />
        <motion.text
          x={center.x} y={center.y + 70} textAnchor="middle" fontSize={18}
          fontFamily="ui-monospace, monospace" fontWeight="bold"
          animate={{ opacity: activeStep >= 1 && activeStep < 4 ? 0.5 : 0, fill: "rgba(52,211,153,0.55)" }}
          transition={{ delay: t(0.3) }}
        >
          COLLECTION POINT
        </motion.text>

        {/* ═══ STEP 0 — Discover: pulsing scan rings ═══ */}
        {activeStep === 0 && !reduced && nodes.slice(0, 7).map((n, i) => (
          <motion.circle
            key={`pulse-${i}`} cx={n.x} cy={n.y}
            fill="none" stroke="rgba(52,211,153,0.15)" strokeWidth={1.5}
            animate={{ r: [10, 80], opacity: [0.35, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
          />
        ))}

        {/* ═══ STEP 1 — Collect: data packets flowing ═══ */}
        {activeStep === 1 && !reduced && nodes.slice(0, 6).map((n, i) => (
          <motion.circle
            key={`pkt-${i}`} r={5} fill="rgba(52,211,153,0.9)"
            animate={{
              cx: [n.x, center.x], cy: [n.y, center.y],
              opacity: [0, 1, 0.6, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.7, ease: "linear" }}
          />
        ))}

        {/* ═══ Data-spot nodes (all steps) ═══ */}
        {nodes.map((n, i) => (
          <motion.g key={`nd-${i}`}>
            <motion.circle
              cx={n.x} cy={n.y} strokeWidth={2}
              animate={{
                opacity: 1,
                r: activeStep >= 1 ? 12 : 16,
                fill: activeStep >= 5 ? "rgba(52,211,153,0.6)" : nodeColor(i),
                stroke: activeStep >= 5 ? "rgba(52,211,153,0.8)" : nodeStroke(i),
              }}
              initial={{ opacity: 0, r: 0 }}
              transition={{ duration: t(0.4), delay: t(i * 0.05) }}
            />
            <motion.text
              x={n.x} y={n.y - 30} textAnchor="middle" fontSize={16}
              fontFamily="ui-monospace, monospace"
              animate={{
                opacity: 0.8,
                fill: activeStep >= 3 && activeStep < 5 && isThreat(i)
                  ? "rgba(239,68,68,0.7)" : "rgba(255,255,255,0.7)",
              }}
              initial={{ opacity: 0 }}
              transition={{ duration: t(0.3), delay: t(0.2 + i * 0.05) }}
            >
              {n.label}
            </motion.text>
          </motion.g>
        ))}

        {/* ═══ STEP 3 — Analyze: threat rings ═══ */}
        {[...threatIdx].map((idx, i) => (
          <motion.g key={`tr-${i}`}>
            <motion.circle
              cx={nodes[idx].x} cy={nodes[idx].y}
              fill="none" stroke="rgba(239,68,68,0.5)" strokeWidth={2}
              animate={{
                r: activeStep === 3 ? 40 : 12,
                opacity: activeStep === 3 ? 1 : 0,
              }}
              transition={{ duration: t(0.4), delay: t(i * 0.12) }}
            />
            <motion.text
              x={nodes[idx].x} y={nodes[idx].y + 70} textAnchor="middle"
              fontSize={18} fontFamily="ui-monospace, monospace" fontWeight="bold"
              animate={{ opacity: activeStep === 3 ? 1 : 0, fill: "rgba(239,68,68,0.9)" }}
              transition={{ duration: t(0.3), delay: t(0.2 + i * 0.1) }}
            >
              THREAT
            </motion.text>
          </motion.g>
        ))}

        {/* Safe labels (step 3 only) */}
        {nodes.filter((_, i) => !isThreat(i)).slice(0, 5).map((n, k) => (
          <motion.text
            key={`ok-${k}`} x={n.x + 30} y={n.y + 10}
            fontSize={16} fontFamily="ui-monospace, monospace"
            animate={{ opacity: activeStep === 3 ? 0.9 : 0, fill: "rgba(52,211,153,0.8)" }}
            transition={{ delay: t(0.4 + k * 0.08) }}
          >
            SAFE
          </motion.text>
        ))}

        {/* Analyze: pulsing threat glow */}
        {activeStep === 3 && !reduced && [...threatIdx].map((idx, i) => (
          <motion.circle
            key={`tpulse-${i}`} cx={nodes[idx].x} cy={nodes[idx].y}
            fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth={1.5}
            animate={{ r: [40, 80], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* ═══ STEP 4 — Report: overlay panel ═══ */}
        <motion.rect
          x={350} y={250} width={500} height={380} rx={12} strokeWidth={2}
          animate={{
            opacity: activeStep === 4 ? 1 : 0,
            fill: "rgba(4,16,12,0.95)", stroke: "rgba(52,211,153,0.5)",
          }}
          transition={{ duration: t(0.5) }}
        />
        <motion.text
          x={600} y={320} textAnchor="middle" fontSize={24}
          fontFamily="ui-monospace, monospace" fontWeight="bold"
          animate={{ opacity: activeStep === 4 ? 1 : 0, fill: "rgba(52,211,153,0.85)" }}
          transition={{ delay: t(0.15) }}
        >
          ── INTELLIGENCE REPORT ──
        </motion.text>
        <motion.line
          x1={390} y1={350} x2={810} y2={350}
          stroke="rgba(52,211,153,0.3)" strokeWidth={1}
          animate={{ opacity: activeStep === 4 ? 1 : 0 }}
          transition={{ delay: t(0.2) }}
        />
        {[
          { label: "Assets Scanned", value: "12", y: 400, vc: "rgba(255,255,255,0.7)" },
          { label: "Threats Found", value: "4", y: 450, vc: "rgba(239,68,68,0.9)" },
          { label: "Verified Safe", value: "8", y: 500, vc: "rgba(52,211,153,0.9)" },
          { label: "Resolved", value: "4 / 4", y: 550, vc: "rgba(52,211,153,1)" },
          { label: "Status", value: "SECURED", y: 600, vc: "rgba(52,211,153,1)" },
        ].map((s, i) => (
          <motion.g key={`rp-${i}`}>
            <motion.text
              x={400} y={s.y} fontSize={20} fontFamily="ui-monospace, monospace"
              animate={{ opacity: activeStep === 4 ? 1 : 0, fill: "rgba(156,163,175,0.8)" }}
              transition={{ delay: t(0.3 + i * 0.08) }}
            >{s.label}</motion.text>
            <motion.text
              x={800} y={s.y} textAnchor="end" fontSize={22}
              fontFamily="ui-monospace, monospace" fontWeight="bold"
              animate={{ opacity: activeStep === 4 ? 1 : 0, fill: s.vc }}
              transition={{ delay: t(0.35 + i * 0.08) }}
            >{s.value}</motion.text>
          </motion.g>
        ))}

        {/* Resolved ✓ (step 4) */}
        {[...threatIdx].map((idx, i) => (
          <motion.g key={`res-${i}`}>
            <motion.circle
              cx={nodes[idx].x} cy={nodes[idx].y} r={28} strokeWidth={3}
              animate={{
                opacity: activeStep === 4 ? 1 : 0,
                fill: "rgba(52,211,153,0.15)", stroke: "rgba(52,211,153,0.6)",
              }}
              transition={{ delay: t(0.7 + i * 0.1) }}
            />
            <motion.text
              x={nodes[idx].x} y={nodes[idx].y + 10} textAnchor="middle"
              fontSize={28} fontFamily="ui-monospace, monospace" fontWeight="bold"
              animate={{ opacity: activeStep === 4 ? 1 : 0, fill: "rgba(52,211,153,1)" }}
              transition={{ delay: t(0.75 + i * 0.1) }}
            >✓</motion.text>
          </motion.g>
        ))}

        {/* ═══ STEP 5 — Act: growth expansion ═══ */}
        {/* Expanding rings from center showing growth */}
        {activeStep === 5 && !reduced && [0, 1.5, 3].map((delay, i) => (
          <motion.circle
            key={`grow-${i}`} cx={center.x} cy={center.y}
            fill="none" stroke="rgba(52,211,153,0.15)" strokeWidth={2}
            animate={{ r: [60, 600], opacity: [0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay }}
          />
        ))}

        {/* Growth overlay panel */}
        <motion.rect
          x={350} y={250} width={500} height={400} rx={12} strokeWidth={2}
          animate={{
            opacity: activeStep === 5 ? 1 : 0,
            fill: "rgba(4,16,12,0.95)", stroke: "rgba(52,211,153,0.5)",
          }}
          transition={{ duration: t(0.5) }}
        />
        <motion.text
          x={600} y={320} textAnchor="middle" fontSize={24}
          fontFamily="ui-monospace, monospace" fontWeight="bold"
          animate={{ opacity: activeStep === 5 ? 1 : 0, fill: "rgba(52,211,153,0.85)" }}
          transition={{ delay: t(0.15) }}
        >
          ── TAKING ACTION ──
        </motion.text>
        <motion.line
          x1={390} y1={350} x2={810} y2={350}
          stroke="rgba(52,211,153,0.3)" strokeWidth={1}
          animate={{ opacity: activeStep === 5 ? 1 : 0 }}
          transition={{ delay: t(0.2) }}
        />

        {/* Growth bar chart */}
        {[
          { x: 420, h: 80, label: "Q1" },
          { x: 490, h: 140, label: "Q2" },
          { x: 560, h: 110, label: "Q3" },
          { x: 630, h: 200, label: "Q4" },
          { x: 700, h: 250, label: "NOW" },
        ].map((bar, i) => (
          <motion.g key={`bar-${i}`}>
            <motion.rect
              x={bar.x} width={50} rx={4}
              fill={i === 4 ? "rgba(52,211,153,0.5)" : "rgba(52,211,153,0.25)"}
              animate={{
                opacity: activeStep === 5 ? 1 : 0,
                height: activeStep === 5 ? bar.h : 0,
                y: activeStep === 5 ? 580 - bar.h : 580,
              }}
              transition={{ duration: t(0.6), delay: t(0.3 + i * 0.1) }}
            />
            <motion.text
              x={bar.x + 25} y={610} textAnchor="middle" fontSize={16}
              fontFamily="ui-monospace, monospace"
              animate={{ opacity: activeStep === 5 ? 1 : 0, fill: "rgba(255,255,255,0.6)" }}
              transition={{ delay: t(0.5 + i * 0.1) }}
            >{bar.label}</motion.text>
          </motion.g>
        ))}

        {/* All nodes glow bright green in act step */}
        {activeStep === 5 && !reduced && nodes.map((n, i) => (
          <motion.circle
            key={`act-glow-${i}`} cx={n.x} cy={n.y}
            fill="none" stroke="rgba(52,211,153,0.3)" strokeWidth={1}
            animate={{ r: [15, 45], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* ═══ Bottom status ═══ */}
        <motion.text
          x={600} y={950} textAnchor="middle" fontSize={24}
          fontFamily="ui-monospace, monospace" fontWeight="bold"
          animate={{ fill: activeStep >= 4 ? "rgba(52,211,153,0.6)" : "rgba(52,211,153,0.4)" }}
          key={statusLabel}
          initial={{ opacity: 0 }}
        >
          {statusLabel}
        </motion.text>
      </svg>
    </div>
  );
}

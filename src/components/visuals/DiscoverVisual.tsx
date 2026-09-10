"use client";

import { motion, useReducedMotion } from "framer-motion";

const center = { cx: 250, cy: 170 };

const satellites = [
  { cx: 95, cy: 60, label: "mail.srv" },
  { cx: 400, cy: 50, label: "api.v2" },
  { cx: 50, cy: 200, label: "cdn.edge" },
  { cx: 440, cy: 190, label: "auth.svc" },
  { cx: 120, cy: 300, label: "db.cluster" },
  { cx: 380, cy: 295, label: "staging.env" },
  { cx: 250, cy: 32, label: "ns1.dns" },
  { cx: 170, cy: 130, label: "vpn.gateway" },
  { cx: 340, cy: 125, label: "log.ingest" },
];

export function DiscoverVisual({ isInView }: { isInView: boolean }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full aspect-[500/350]">
      <svg
        viewBox="0 0 500 350"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dg" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M25 0L0 0 0 25" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          </pattern>
          <filter id="glow-d">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="500" height="350" fill="url(#dg)" />

        {/* Radar pulses from center */}
        {isInView && !reduced && (
          <>
            <motion.circle
              cx={center.cx} cy={center.cy}
              fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth={0.5}
              animate={{ r: [10, 200], opacity: [0.4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx={center.cx} cy={center.cy}
              fill="none" stroke="rgba(52,211,153,0.08)" strokeWidth={0.5}
              animate={{ r: [10, 200], opacity: [0.3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
            />
          </>
        )}

        {/* Connection lines drawing from center to satellites */}
        {satellites.map((n, i) => (
          <motion.path
            key={`cl-${i}`}
            d={`M${center.cx} ${center.cy}L${n.cx} ${n.cy}`}
            stroke="rgba(52,211,153,0.12)"
            strokeWidth={1}
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.3 + i * 0.12 }}
          />
        ))}

        {/* Satellite nodes fading in */}
        {satellites.map((n, i) => (
          <motion.g
            key={`sn-${i}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : 0.5 + i * 0.12 }}
          >
            <circle cx={n.cx} cy={n.cy} r={5} fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.35)" strokeWidth={1} />
            <text
              x={n.cx} y={n.cy + 16}
              textAnchor="middle" fill="rgba(156,163,175,0.45)"
              fontSize={7.5} fontFamily="ui-monospace, monospace"
            >
              {n.label}
            </text>
          </motion.g>
        ))}

        {/* Central hub node */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0 : 0.5 }}
        >
          <circle
            cx={center.cx} cy={center.cy} r={16}
            fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.5)"
            strokeWidth={1.5} filter="url(#glow-d)"
          />
          <circle cx={center.cx} cy={center.cy} r={4} fill="rgba(52,211,153,0.8)" />
          <text
            x={center.cx} y={center.cy + 30}
            textAnchor="middle" fill="rgba(52,211,153,0.55)"
            fontSize={10} fontFamily="ui-monospace, monospace" fontWeight="bold"
          >
            target.com
          </text>
        </motion.g>

        {/* Data packets traveling along connections */}
        {isInView && !reduced && satellites.slice(0, 4).map((n, i) => (
          <motion.circle
            key={`dp-${i}`} r={1.5} fill="rgba(52,211,153,0.7)"
            animate={{
              cx: [center.cx, n.cx],
              cy: [center.cy, n.cy],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 2.5 + i * 1.2, ease: "linear" }}
          />
        ))}

        {/* Status line */}
        <motion.text
          x={250} y={342}
          textAnchor="middle" fill="rgba(52,211,153,0.35)"
          fontSize={8} fontFamily="ui-monospace, monospace"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: reduced ? 0 : 2 }}
        >
          SCANNING ATTACK SURFACE · 9 ASSETS DISCOVERED
        </motion.text>
      </svg>
    </div>
  );
}

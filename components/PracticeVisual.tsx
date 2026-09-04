"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { PracticeIconKind } from "@/content/site-content";

type MotionStyle = CSSProperties & {
  "--move-x"?: string;
  "--move-y"?: string;
  "--drift-x"?: string;
  "--drift-y"?: string;
};

type RelationshipNode = {
  cx: number;
  cy: number;
  r: number;
  dx: number;
  dy: number;
  accent?: boolean;
};

const barHeights = [55, 82, 46, 70, 92, 64];

const financePoints = [
  [5, 68],
  [33, 48],
  [59, 55],
  [86, 34],
  [113, 42],
  [142, 22],
  [175, 31],
] as const;

const growthPoints = [
  [5, 78],
  [33, 66],
  [59, 68],
  [86, 50],
  [113, 54],
  [142, 30],
  [175, 16],
] as const;

const relationshipNodes: RelationshipNode[] = [
  { cx: 18, cy: 58, r: 3.5, dx: -10, dy: 8 },
  { cx: 39, cy: 30, r: 6.5, dx: -7, dy: -11 },
  { cx: 61, cy: 64, r: 4, dx: 8, dy: 10 },
  { cx: 82, cy: 42, r: 10.5, dx: -8, dy: 6, accent: true },
  { cx: 109, cy: 20, r: 3.5, dx: 6, dy: -8 },
  { cx: 119, cy: 61, r: 7, dx: 12, dy: 7 },
  { cx: 145, cy: 39, r: 4.5, dx: -6, dy: -12 },
  { cx: 164, cy: 67, r: 3, dx: 9, dy: 8, accent: true },
  { cx: 166, cy: 18, r: 5.5, dx: 8, dy: -7 },
];

// stepped terraces, like a mining cross-section
const strataLayers = [
  { width: 60, y: 8 },
  { width: 88, y: 24 },
  { width: 112, y: 40 },
  { width: 140, y: 56 },
  { width: 168, y: 72 },
];

// branching decision tree, like a legislative hierarchy
const hierarchyLeaves = [
  { x: 22, y: 78 },
  { x: 68, y: 78, accent: true },
  { x: 112, y: 78 },
  { x: 156, y: 78 },
];

function EconomicsBars() {
  return (
    <div className="economics-bars">
      <span className="visual-baseline" />
      {barHeights.map((height, index) => (
        <span
          className={`economics-bar${index === 4 ? " is-accent" : ""}`}
          key={`${height}-${index}`}
          style={{
            height: `${height}%`,
            transitionDelay: `${index * 55}ms`,
            animationDelay: `${1200 + index * 210}ms`,
          }}
        />
      ))}
    </div>
  );
}

function FinanceLine() {
  return (
    <svg className="finance-line" viewBox="0 0 180 90" focusable="false">
      <path
        className="finance-path"
        d="M5 68 L33 48 L59 55 L86 34 L113 42 L142 22 L175 31"
        pathLength="1"
      />
      {financePoints.map(([cx, cy], index) => (
        <circle
          className={`finance-point${index === financePoints.length - 1 ? " is-accent" : ""}`}
          cx={cx}
          cy={cy}
          key={`${cx}-${cy}`}
          r={index === financePoints.length - 1 ? 3 : 2.1}
          style={{ transitionDelay: `${650 + index * 55}ms` }}
        />
      ))}
    </svg>
  );
}

function GrowthLine() {
  return (
    <svg className="finance-line" viewBox="0 0 180 90" focusable="false">
      <path
        className="finance-path"
        d="M5 78 L33 66 L59 68 L86 50 L113 54 L142 30 L175 16"
        pathLength="1"
      />
      {growthPoints.map(([cx, cy], index) => (
        <circle
          className={`finance-point${index === growthPoints.length - 1 ? " is-accent" : ""}`}
          cx={cx}
          cy={cy}
          key={`${cx}-${cy}`}
          r={index === growthPoints.length - 1 ? 3 : 2.1}
          style={{ transitionDelay: `${650 + index * 55}ms` }}
        />
      ))}
    </svg>
  );
}

function RegulationRelationships() {
  return (
    <svg className="regulation-relationships" viewBox="0 0 180 90" focusable="false">
      <path className="relationship-link" d="M39 30 L82 42 L119 61" pathLength="1" />
      <path className="relationship-link relationship-link-secondary" d="M109 20 L145 39 L166 18" pathLength="1" />
      {relationshipNodes.map((node, index) => {
        const style: MotionStyle = {
          "--move-x": `${node.dx}px`,
          "--move-y": `${node.dy}px`,
          "--drift-x": `${node.dx > 0 ? 1.5 : -1.5}px`,
          "--drift-y": `${node.dy > 0 ? 1.25 : -1.25}px`,
          transitionDelay: `${index * 45}ms`,
          animationDelay: `${1200 + index * 170}ms`,
        };

        return (
          <circle
            className={`relationship-node${node.accent ? " is-accent" : ""}`}
            cx={node.cx}
            cy={node.cy}
            key={`${node.cx}-${node.cy}`}
            r={node.r}
            style={style}
          />
        );
      })}
    </svg>
  );
}

function StrataLayers() {
  return (
    <svg className="strata-layers" viewBox="0 0 180 90" focusable="false">
      {strataLayers.map((layer, index) => (
        <line
          className={`strata-line${index === strataLayers.length - 2 ? " is-accent" : ""}`}
          x1="0"
          x2={layer.width}
          y1={layer.y}
          y2={layer.y}
          pathLength="1"
          key={layer.y}
          style={{ transitionDelay: `${index * 110}ms` }}
        />
      ))}
      <path className="strata-drill" d="M150 4 L94 86" pathLength="1" />
    </svg>
  );
}

function HierarchyTree() {
  return (
    <svg className="hierarchy-tree" viewBox="0 0 180 90" focusable="false">
      <path className="hierarchy-link" d="M90 12 L90 30 M90 30 L22 30 L22 78" pathLength="1" />
      <path className="hierarchy-link" d="M90 30 L68 30 L68 78" pathLength="1" style={{ transitionDelay: "90ms" }} />
      <path className="hierarchy-link" d="M90 30 L112 30 L112 78" pathLength="1" style={{ transitionDelay: "180ms" }} />
      <path className="hierarchy-link" d="M90 30 L156 30 L156 78" pathLength="1" style={{ transitionDelay: "270ms" }} />
      <rect className="hierarchy-node hierarchy-root" x="80" y="2" width="20" height="12" rx="2" />
      {hierarchyLeaves.map((leaf, index) => (
        <rect
          className={`hierarchy-node${leaf.accent ? " is-accent" : ""}`}
          x={leaf.x - 9}
          y={leaf.y}
          width="18"
          height="12"
          rx="2"
          key={leaf.x}
          style={{ transitionDelay: `${420 + index * 90}ms` }}
        />
      ))}
    </svg>
  );
}

function InflowOrbit() {
  return (
    <svg className="inflow-orbit" viewBox="0 0 180 90" focusable="false">
      <circle className="orbit-ring" cx="115" cy="45" r="16" pathLength="1" />
      <circle className="orbit-ring orbit-ring-outer" cx="115" cy="45" r="32" pathLength="1" style={{ transitionDelay: "140ms" }} />
      <circle className="orbit-core is-accent" cx="115" cy="45" r="5" />
      <path className="orbit-arrow" d="M8 12 L48 30" pathLength="1" style={{ transitionDelay: "520ms" }} />
      <path className="orbit-arrow" d="M48 30 L38 30 M48 30 L48 20" pathLength="1" style={{ transitionDelay: "680ms" }} />
    </svg>
  );
}

const visuals: Record<PracticeIconKind, () => React.ReactElement> = {
  markets: EconomicsBars,
  tax: FinanceLine,
  competition: RegulationRelationships,
  minerals: StrataLayers,
  legislation: HierarchyTree,
  fdi: InflowOrbit,
  esg: GrowthLine,
};

export function PracticeVisual({ kind }: { kind: PracticeIconKind }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.4, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Visual = visuals[kind];

  return (
    <div
      aria-hidden="true"
      className={`practice-visual practice-visual-${kind}`}
      data-visible={visible}
      ref={rootRef}
    >
      <Visual />
    </div>
  );
}

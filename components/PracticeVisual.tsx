"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { PracticeVisualKind } from "@/content/site-content";

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

export function PracticeVisual({ kind }: { kind: PracticeVisualKind }) {
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

  return (
    <div
      aria-hidden="true"
      className={`practice-visual practice-visual-${kind}`}
      data-visible={visible}
      ref={rootRef}
    >
      {kind === "economics" ? <EconomicsBars /> : null}
      {kind === "finance" ? <FinanceLine /> : null}
      {kind === "regulation" ? <RegulationRelationships /> : null}
    </div>
  );
}

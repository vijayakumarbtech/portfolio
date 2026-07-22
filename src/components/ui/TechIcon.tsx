interface IconProps {
  size?: number;
  className?: string;
}

/**
 * Small, monochrome (currentColor) technology marks — simplified geometric
 * renditions rather than exact brand logos, so they read cleanly at 18–20px
 * in both themes without needing brand-specific colors.
 */

export function PythonIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5c-1.7 0-3.1.3-3.1 1.9v2.3h6.2v.8H6.4C4.6 7.5 3 8.5 3 12s1.6 4.5 3.4 4.5h1.9v-2.4c0-2 1.7-3.7 3.7-3.7h4.3c1.5 0 2.7-1.2 2.7-2.7V4.4c0-1.5-1.3-1.9-2.7-1.9H12Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 21.5c1.7 0 3.1-.3 3.1-1.9v-2.3H8.9v-.8h8.7c1.8 0 3.4-1 3.4-4.5s-1.6-4.5-3.4-4.5h-1.9v2.4c0 2-1.7 3.7-3.7 3.7H7.7c-1.5 0-2.7 1.2-2.7 2.7v3.3c0 1.5 1.3 1.9 2.7 1.9H12Z"
        fill="currentColor"
        opacity="0.55"
      />
      <circle cx="9.2" cy="4.9" r="0.7" fill="white" />
      <circle cx="14.8" cy="19.1" r="0.7" fill="white" />
    </svg>
  );
}

export function ReactIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.4" fill="none">
        <ellipse cx="12" cy="12" rx="9.5" ry="4" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function NodeIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.3 20.5 7v10L12 21.7 3.5 17V7L12 2.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 8v8M9 9.8l6 4.4M15 9.8l-6 4.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function MongoIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5c2.6 2.8 4.2 6 4.2 9.6 0 3.9-1.9 6.9-4.2 9.4-2.3-2.5-4.2-5.5-4.2-9.4 0-3.6 1.6-6.8 4.2-9.6Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path d="M12 12.2v9" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <text x="7" y="16.5" fontSize="8.5" fontWeight="700" fontFamily="Inter, sans-serif" fill="currentColor">
        JS
      </text>
    </svg>
  );
}

export function TypeScriptIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <text x="6.3" y="16.5" fontSize="8.5" fontWeight="700" fontFamily="Inter, sans-serif" fill="currentColor">
        TS
      </text>
    </svg>
  );
}

const techIconMap = {
  python: PythonIcon,
  react: ReactIcon,
  nodejs: NodeIcon,
  mongodb: MongoIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
};

export type TechIconKey = keyof typeof techIconMap;

export function TechIcon({ name, size = 18, className }: { name: string; size?: number; className?: string }) {
  const Icon = techIconMap[name as TechIconKey];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

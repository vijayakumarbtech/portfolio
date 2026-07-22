import { useCountUp } from '../../hooks/useCountUp';
import { DynamicIcon } from './DynamicIcon';
import type { StatItem } from '../../types';

export function StatCounter({ stat }: { stat: StatItem }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div className="flex items-start gap-2">
      <DynamicIcon name={stat.icon} size={15} className="mt-1 text-ink-subtle dark:text-ink-inverse-muted shrink-0" />
      <div>
        <div className="font-display text-xl sm:text-2xl font-bold text-ink dark:text-ink-inverse leading-none">
          <span ref={ref}>{value}</span>
          {stat.suffix ?? ''}
        </div>
        <div className="mt-1 text-[11px] sm:text-xs text-ink-muted dark:text-ink-inverse-muted leading-tight">{stat.label}</div>
      </div>
    </div>
  );
}

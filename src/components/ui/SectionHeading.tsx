import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center max-w-xl mx-auto' : 'max-w-xl'}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-2 text-2xl sm:text-[28px] font-bold text-ink dark:text-ink-inverse">{title}</h2>
        {description && <p className="mt-2.5 text-sm text-ink-muted dark:text-ink-inverse-muted leading-relaxed">{description}</p>}
      </Reveal>
    </div>
  );
}

import { ExternalLink, Plug } from 'lucide-react';
import { codingProfiles, leetcodeUsername, personal } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { DynamicIcon } from '../ui/DynamicIcon';
import { useTheme } from '../../context/ThemeContext';

const githubUsername = personal.githubUsername ?? 'vijayakumarbtech';

export function CodingProfiles() {
  const { theme } = useTheme();

  return (
    <section id="coding-profiles" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Elsewhere Online"
          title="Coding Profiles"
          description="Where to find my code, activity, and progress. Cards without a linked profile yet are shown as open slots."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {codingProfiles.map((profile, i) => (
            <Reveal key={profile.id} delay={i * 0.05}>
              {profile.available ? (
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group card-surface card-hover relative overflow-hidden p-5 h-full flex flex-col"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-[3px]"
                    style={{ backgroundColor: profile.brandColor ?? 'transparent' }}
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between">
                    <div className="icon-tile">
                      <DynamicIcon name={profile.icon} size={17} />
                    </div>
                    <ExternalLink size={13} className="text-ink-subtle group-hover:text-ink dark:group-hover:text-ink-inverse transition-colors" />
                  </div>
                  <h3 className="mt-3.5 text-sm font-bold text-ink dark:text-ink-inverse">{profile.label}</h3>
                  {profile.username && <p className="text-xs font-mono text-ink-subtle mt-0.5">{profile.username}</p>}
                  <p className="mt-2 text-xs text-ink-muted dark:text-ink-inverse-muted leading-relaxed">{profile.description}</p>
                </a>
              ) : (
                <div className="card-surface border-dashed p-5 h-full flex flex-col opacity-70">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-raised dark:bg-surface-dark-elevated text-ink-subtle">
                      <DynamicIcon name={profile.icon} size={17} />
                    </div>
                    <Plug size={13} className="text-ink-subtle" />
                  </div>
                  <h3 className="mt-3.5 text-sm font-bold text-ink dark:text-ink-inverse">{profile.label}</h3>
                  <p className="mt-2 text-xs text-ink-subtle leading-relaxed">{profile.description}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Live GitHub stats */}
        <Reveal delay={0.1}>
          <div className="mt-6 card-surface p-6">
            <h3 className="text-sm font-semibold text-ink dark:text-ink-inverse mb-4">GitHub Activity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${theme === 'dark' ? 'tokyonight' : 'default'}&hide_border=true&bg_color=00000000`}
                alt="GitHub stats"
                loading="lazy"
                className="w-full rounded-xl"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${theme === 'dark' ? 'tokyonight' : 'default'}&hide_border=true&bg_color=00000000`}
                alt="Most used languages"
                loading="lazy"
                className="w-full rounded-xl"
              />
            </div>
            <p className="mt-3 text-[11px] text-ink-subtle">
              Live data pulled from GitHub via github-readme-stats — updates automatically as the repository history grows.
            </p>
          </div>
        </Reveal>

        {/* LeetCode dashboard */}
        <Reveal delay={0.15}>
          <div className="mt-5 card-surface p-6">
            <h3 className="text-sm font-semibold text-ink dark:text-ink-inverse mb-4">LeetCode Progress</h3>
            {leetcodeUsername ? (
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=${theme === 'dark' ? 'dark' : 'light'}&font=Inter&ext=heatmap`}
                alt="LeetCode stats"
                loading="lazy"
                className="w-full max-w-2xl rounded-xl"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line dark:border-line-dark py-10 text-center">
                <Plug size={18} className="text-ink-subtle" />
                <p className="text-sm text-ink-subtle">
                  Add your LeetCode username to <code className="tag">leetcodeUsername</code> in portfolio.ts to activate a live
                  progress dashboard here.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

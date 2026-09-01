import Markdown from "react-markdown";
import content from "./content.json";

type LogEntry = {
  date: string;
  text: string;
  thumbnail?: string;
};

const SOCIAL_ICONS: Record<string, string> = {
  github:
    "M37.1 47.2c-.8.2-1.1-.3-1.1-.8V42c0-1.5-.5-2.5-1.1-3 3.6-.4 7.3-1.7 7.3-7.9 0-1.7-.6-3.2-1.6-4.3.2-.4.7-2-.2-4.2 0 0-1.3-.4-4.4 1.6-1.3-.4-2.6-.5-4-.5s-2.7.2-4 .5c-3.1-2.1-4.4-1.6-4.4-1.6-.9 2.2-.3 3.8-.2 4.2-1 1.1-1.6 2.5-1.6 4.3 0 6.1 3.7 7.5 7.3 7.9-.5.4-.9 1.1-1 2.1-.9.4-3.2 1.1-4.7-1.3 0 0-.8-1.5-2.5-1.6 0 0-1.6 0-.1 1 0 0 1 .5 1.8 2.3 0 0 .9 3.1 5.4 2.1v2.7c0 .4-.3.9-1.1.8-6.3-2-10.9-8-10.9-15.1 0-8.8 7.2-16 16-16s16 7.2 16 16c0 7.1-4.6 13.1-10.9 15.2",
  x: "M16 17.537h10.125l6.992 9.242 8.084-9.242h4.908L35.39 29.79 48 46.463h-9.875l-7.734-10.111-8.85 10.11h-4.908l11.465-13.105zm5.73 2.783 17.75 23.205h2.72L24.647 20.32z",
  spotify:
    "M39 37.7c-4.2-2.6-9.4-3.2-15.5-1.8-.5.1-.9.7-.8 1.2s.7.9 1.2.7q8.4-1.95 14.1 1.5c.5.3 1.1.1 1.4-.3.2-.4.1-1-.4-1.3m1.9-4.7c-4.9-3-12.2-3.9-18-2.1-.7.2-1 .9-.8 1.6s.9 1 1.6.8c5.1-1.5 11.6-.8 15.9 1.9.6.4 1.4.2 1.7-.4.4-.7.2-1.4-.4-1.8M32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m11-20.4c-5.9-3.5-15.3-3.9-21-2.1-.8.2-1.2 1.1-1 1.9s1.1 1.2 1.9 1c4.9-1.5 13.4-1.2 18.6 1.9.7.4 1.6.2 2.1-.5.3-.8.1-1.8-.6-2.2",
};

function newestFirst(entries: LogEntry[]): LogEntry[] {
  return [...entries].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ring mb-3">
      {children}
    </h2>
  );
}

function BioMarkdown({ text }: { text: string }) {
  return (
    <Markdown
      components={{
        p: ({ children }) => <p>{children}</p>,
        a: ({ href, children }) => (
          <a
            href={href}
            target={href?.startsWith("mailto:") ? undefined : "_blank"}
            rel={href?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-accent hover:text-accent-hover transition-colors"
          >
            {children}
          </a>
        ),
      }}
    >
      {text}
    </Markdown>
  );
}

function Photo() {
  return (
    <div>
      <SectionLabel>Photo</SectionLabel>
      <img
        src={content.photo.src}
        alt={content.photo.alt}
        width={800}
        height={800}
        loading="lazy"
        decoding="async"
        className="w-full max-w-64 rounded-sm"
      />
    </div>
  );
}

function Log() {
  const entries = newestFirst(content.log);

  return (
    <section>
      <SectionLabel>Log</SectionLabel>
      {entries.length === 0 ? (
        <p className="text-md text-muted-foreground">Nothing yet.</p>
      ) : (
        <ul className="space-y-3 text-md text-foreground">
          {entries.map((entry) => (
            <li
              key={`${entry.date}-${entry.text}`}
              className="flex gap-3 items-start"
            >
              {entry.thumbnail ? (
                <img
                  src={entry.thumbnail}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 object-cover rounded-sm shrink-0 mt-0.5"
                />
              ) : null}
              <p>
                <time dateTime={entry.date} className="text-muted-foreground">
                  {entry.date}
                </time>{" "}
                {entry.text}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
      <main className="py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr] gap-10">
          <section className="xl:max-w-[550px] space-y-8">
            <a
              href="/"
              className="inline-block text-2xl hover:text-accent-hover transition-colors"
            >
              {content.name}
            </a>
            <div>
              <SectionLabel>Bio</SectionLabel>
              <div className="text-md text-foreground">
                <BioMarkdown text={content.bio} />
              </div>
            </div>
            <Photo />
          </section>

          <section className="space-y-8">
            {content.lists.map((list) => (
              <div key={list.title}>
                <SectionLabel>{list.title}</SectionLabel>
                <ul className="text-md text-foreground">
                  {list.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <SectionLabel>Social</SectionLabel>
              <div className="flex gap-5 items-center">
                {content.social.map((s) => {
                  const path = SOCIAL_ICONS[s.icon];
                  if (!path) return null;
                  return (
                    <a
                      key={s.url}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.name}
                      className="text-accent hover:text-accent-hover transition-colors"
                    >
                      <svg className="size-10" viewBox="12 12 40 40">
                        <path fill="currentColor" d={path} />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          <Log />
        </div>
      </main>
    </div>
  );
}

export default App;

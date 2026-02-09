import Markdown from "react-markdown";
import { SocialIcon } from "react-social-icons";
import content from "./content.json";

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
						className="text-accent hover:text-foreground transition-colors border-b border-current"
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

function App() {
	return (
		<div className="min-h-screen max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
			<nav className="flex items-center gap-3 py-6">
				<a
					href="/"
					className="text-2xl hover:text-accent transition-colors"
				>
					{content.name}
				</a>
			</nav>

			<main className="py-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr] gap-10">
					<section className="sm:col-span-2 xl:col-span-1 xl:max-w-[550px]">
						<div className="mb-8">
							<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ring mb-3">
								Bio
							</h2>
							<div className="space-y-4 text-md text-foreground leading-[1.8]">
								{content.bio.map((paragraph, i) => (
									<BioMarkdown key={i} text={paragraph} />
								))}
							</div>
						</div>

						<div>
							<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ring mb-3">
								Social
							</h2>
							<div className="flex gap-0">
								{content.social.map((s) => (
									<SocialIcon
										key={s.url}
										url={s.url}
										target="_blank"
										rel="noopener noreferrer"
										fgColor="currentColor"
										bgColor="transparent"
										className="text-foreground hover:text-accent transition-colors"
									/>
								))}
							</div>
						</div>
					</section>

					<section className="space-y-8">
						{content.lists.map((list) => (
							<div key={list.title}>
								<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ring mb-3">
									{list.title}
								</h2>
								<ul className="space-y-1 text-md text-foreground">
									{list.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						))}
					</section>

					<section>
						<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ring mb-3">
							Photo
						</h2>
						<img
							src={content.photo.src}
							alt={content.photo.alt}
							className="w-full rounded-sm"
						/>
					</section>
				</div>
			</main>

			<footer className="py-6 text-sm uppercase tracking-[0.2em] text-foreground">
				&copy; {new Date().getFullYear()}
			</footer>
		</div>
	);
}

export default App;

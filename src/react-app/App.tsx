import { Separator } from "@/components/ui/separator";

function App() {
	return (
		<div className="mx-auto max-w-4xl px-6">
			<nav className="flex items-center gap-3 py-6 text-sm">
				<a href="/" className="font-semibold hover:opacity-60 transition-opacity">
					Rashid Lasker
				</a>
				<Separator orientation="vertical" className="h-4" />
				<a
					href="https://www.docdroid.net/qwKrlFH/rashid-lasker-resume-colored-pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="text-muted-foreground hover:text-foreground transition-colors"
				>
					Résumé
				</a>
			</nav>

			<main className="pb-12">
				<div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
					<section>
						<div className="mb-6">
							<h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
								Bio
							</h2>
							<div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
								<p>
									Hey there, I'm Rashid, a coder with a passion for scalable
									technology, complex frontend systems, and AI interactions.
								</p>
								<p>
									I'm currently a Senior Software Engineer at{" "}
									<a
										href="https://scale.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-2 text-foreground hover:opacity-60 transition-opacity"
									>
										Scale AI
									</a>
									. In the past, I interned at{" "}
									<a
										href="https://www.uber.com/us/en/atg/"
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-2 text-foreground hover:opacity-60 transition-opacity"
									>
										Uber ATG
									</a>{" "}
									and worked on 3D high-definition maps. I also developed a
									system design course at a nonprofit called{" "}
									<a
										href="https://hackcville.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-2 text-foreground hover:opacity-60 transition-opacity"
									>
										HackCville
									</a>{" "}
									while studying Computer + Cognitive Science at the University
									of Virginia.
								</p>
								<p>
									Want to collaborate on a project?{" "}
									<a
										href="mailto:rashidlasker@gmail.com"
										className="underline underline-offset-2 text-foreground hover:opacity-60 transition-opacity"
									>
										Let's chat.
									</a>
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
								Social
							</h2>
							<div className="flex gap-3">
								<a
									href="https://github.com/rashidlasker"
									target="_blank"
									rel="noopener noreferrer"
									title="GitHub"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<svg className="size-5" viewBox="0 0 496 512">
										<path
											fill="currentColor"
											d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
										/>
									</svg>
								</a>
								<a
									href="https://linkedin.com/in/rashidlasker/"
									target="_blank"
									rel="noopener noreferrer"
									title="LinkedIn"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<svg className="size-5" viewBox="0 0 448 512">
										<path
											fill="currentColor"
											d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
										/>
									</svg>
								</a>
								<a
									href="https://codepen.io/rashidlasker/"
									target="_blank"
									rel="noopener noreferrer"
									title="CodePen"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<svg className="size-5" viewBox="0 0 512 512">
										<path
											fill="currentColor"
											d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
										/>
									</svg>
								</a>
								<a
									href="https://open.spotify.com/user/22cxvog4zrc6ynlg4p26vbdtq"
									target="_blank"
									rel="noopener noreferrer"
									title="Spotify"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									<svg className="size-5" viewBox="0 0 496 512">
										<path
											fill="currentColor"
											d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
										/>
									</svg>
								</a>
							</div>
						</div>
					</section>

					<section className="space-y-6">
						<div>
							<h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
								What I Do
							</h2>
							<ul className="space-y-1 text-sm text-muted-foreground">
								<li>Fullstack Development</li>
								<li>Product Engineering</li>
								<li>System Design</li>
							</ul>
						</div>
						<div>
							<h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
								Books I Like
							</h2>
							<ul className="space-y-1 text-sm text-muted-foreground">
								<li>The Design of Everyday Things</li>
								<li>The Three-Body Problem</li>
								<li>The Beach</li>
							</ul>
						</div>
						<div>
							<h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
								Hobbies
							</h2>
							<ul className="space-y-1 text-sm text-muted-foreground">
								<li>Backpacking</li>
								<li>Snowboarding</li>
								<li>Coastal Foraging</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
							Photo
						</h2>
						<img
							src="/dolomites.jpg"
							alt="Rashid Lasker in the Dolomites"
							className="w-full rounded-lg"
						/>
					</section>
				</div>
			</main>
		</div>
	);
}

export default App;

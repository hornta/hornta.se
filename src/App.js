import React from "react";

function App() {
	return (
		<div className="container">
			<header>
				<h3>hornta&apos;s website</h3>
			</header>
			<section>
				<h4>About me</h4>
				<p>
					I am a web developer currently working for{" "}
					<a href="https://svenskaspel.se">Svenska Spel</a> in Sweden. I have a
					passion for open source and building large dynamic websites.
				</p>
				<p>
					<a href="https://github.com/hornta">GitHub</a>
				</p>
			</section>

			<section>
				<h4>Work experience</h4>
				<ul>
					<li>
						<p>
							<strong>Svenska Spel AB</strong> Mar 2016 -<br />
							<em>Front-End developer</em>
						</p>
					</li>
					<li>
						<p>
							<strong>Karmalicious AB</strong> Aug 2015 - Jan 2016
							<br />
							<em>Front-End developer</em>
						</p>
					</li>
				</ul>
			</section>

			<section>
				<h4>Contact</h4>
				<a
					href="mailto:hello@hornta.se"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mail
				</a>
			</section>
		</div>
	);
}

export default App;

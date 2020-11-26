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
					Frontend developer currently working @{" "}
					<a href="https://svenskaspel.se">Svenska Spel</a> in Sweden. I&apos;m
					an avid user of React and the React ecosystem.
				</p>
				<p>I&apos;m always open for new possibilities and cool tech stacks.</p>
			</section>

			<section>
				<h4>Work experience</h4>
				<ul>
					<li>
						<p>
							<strong>Svenska Spel AB</strong> Mar 2016 -<br />
							<em>Frontend developer</em>
						</p>
					</li>
					<li>
						<p>
							<strong>Karmalicious AB</strong> Aug 2015 - Jan 2016
							<br />
							<em>Fullstack developer</em>
						</p>
					</li>
				</ul>
			</section>

			<section>
				<h4>Hobby projects</h4>
				<ul>
					<li>
						<p>
							<strong>OpenRider</strong>
							<br />
							<em>
								A soon to be open source project of FreeRiderHD written in
								modern JavasScript and TypeScript.
							</em>
						</p>
					</li>
				</ul>
			</section>

			<section>
				<h4>Links</h4>
				<ul>
					<li>
						<a
							href="linkedin.com/in/anthon-fredriksson-11999a18b/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>{" "}
					</li>
					<li>
						<a href="https://github.com/hornta">GitHub</a>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default App;

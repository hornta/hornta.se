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
					Frontend developer currently working at{" "}
					<a href="https://spela.svenskaspel.se">
						{" "}
						Svenska Spel Sport & Casino AB
					</a>{" "}
					in Sweden. I&apos;m an avid user of React and the React ecosystem and
					love modern Javascript.
				</p>
				<p>Currently I&apos;m open for something new so hit me up.</p>
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
				<h4>Links</h4>
				<p>
					Please contact me through LinkedIn. I am avoiding outing my email
					adress because of bots.
				</p>
				<ul>
					<li>
						<a
							href="HTTPS://linkedin.com/in/anthon-fredriksson-11999a18b/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>{" "}
					</li>
					<li>
						<a
							href="https://github.com/hornta"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</li>
				</ul>
			</section>

			<section>
				<h4>Hobby projects</h4>
				<ul>
					<li>
						<p>
							<strong>Media streams</strong>
							<br />
							<a href="https://media-streams.hornta.se">Demo</a> |{" "}
							<a href="https://github.com/hornta/media-streams">Code</a>
							<br />
							Played around with the{" "}
							<a href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API">
								Media Streams API
							</a>{" "}
							and built a wrapper around the selection of media devices in React
							using <a href="https://redux-toolkit.js.org/">redux-toolkit</a>.
						</p>
					</li>
					<li>
						<p>
							<strong>OpenRider</strong>
							<br />
							<a href="https://openrider.hornta.se">Demo</a> |{" "}
							<a href="https://github.com/hornta/openrider">Code</a>
							<br />A discontinued port of{" "}
							<a href="https://www.freeriderhd.com/">FreeRiderHD</a> to use
							modern web syntaxes and api.
						</p>
					</li>
					<li>
						<p>
							<strong>Mio Sofa-Grouper</strong>
							<br />
							<a href="https://github.com/hornta/mio-height-clearance">Code</a>
							<br />A small Node.JS script to help me find a sofa to buy based
							on height clearance below for my robot vacuum cleaner :-).
						</p>
					</li>
					<li>
						<p>
							<strong>Trollskogen, a Minecraft server</strong>
							<br />
							<a href="https://trollskogen.nu">Website</a> |{" "}
							<a href="https://github.com/TrollskogenMC">Code</a>
							<br />
							Trollskogen is a Minecraft server I run with a friend. I have
							developed a number of different plugins, all of which can be found
							in the Github organization link above. Mostly Java and some
							Node.JS.
						</p>
					</li>
				</ul>
			</section>

			<section>
				<h4>Technologies</h4>
				<p>
					A list of some of the technologies I have worked with or touched upon.
				</p>
				<ul>
					<li>
						<a href="https://reactjs.org/">React</a> - Really easy library to
						use for creating user interfaces. Used it professionally at Svenska
						Spel and in personal projects.
					</li>
					<li>
						<a href="https://testing-library.com/">testing-library</a> - Awesome
						test utility library for testing user interfaces on the web. I have
						used it professionally at Svenska Spel.
					</li>
					<li>
						<a href="https://pptr.dev/">Puppeteer</a> - An automation tool. I
						love using tools like this to automate the shit of out things.
						Scraping has finally become fun. This has a lot of potentional to be
						used as an frontend build tool to measure web performance and
						writing better GUI-tests. Our GUI-tests at Svenska Spel are based on
						Selenium but I have experienced problems with that and I like to
						think Puppeteer/Playwright does it better.
					</li>
					<li>
						<a href="https://playwright.dev/">Playwright</a> - I am using this
						to scrape websites. Basically the same as Puppeteer but more modern
						and backed by Microsoft. Used for testing Visual Studio Code. Same
						API(I think). Playwright feels like it has more momentum than
						Puppeteer. I use this in front of Puppeteer any day. Access to the
						devtool protocol is super cool!
					</li>
					<li>
						<a href="https://webdriver.io/">Webdriver.io</a> - Some kind of
						Javascript testing + assertion framework. I have used this when
						writing GUI-tests for the frontend at Svenska Spel.
					</li>
					<li>
						<a href="https://github.com/axios/axios">axios</a> - A Node.js based
						HTTP client. This is my goto library for performing HTTP requests on
						the server. On the frontend my goto is of course the Fetch API.
					</li>
					<li>
						<a href="https://expressjs.com/">express</a> - A Node.js http
						server. Svenska Spel is running the frontend on expressjs.
					</li>
					<li>
						<a href="https://www.fastify.io/">fastify</a> - A more modern and
						performant alternative to express. I have only used this in personal
						projects. It is not that hard to learn compared to express, they do
						have their differences and similarities though.
					</li>
					<li>
						<a href="https://insomnia.rest/">Insomnia</a> - Good bye Postman,
						there is a new player in town. This is my new go to when designing
						and testing HTTP based APIs.
					</li>
					<li>
						<a href="https://www.typescriptlang.org/">Typescript</a> - I am yet
						to use Typescript professionally but I have touched upon TS in open
						source projects. Linting my code can only do so much and having type
						safety through the whole code base would mean zero runtime
						errors(wishful thinking).
					</li>
					<li>
						<a href="https://sinonjs.org/">sinon</a> - I have used it in the
						frontend unit tests at Svenska Spel. A Javascript test utility
						library used for mocking, stubbing, spying and asserting.
					</li>
					<li>
						<a href="https://mochajs.org/">mocha</a> - I have used this the test
						suite in Svenska Spels frontend. Very easy to use. I prefer to use
						Jest.
					</li>
					<li>
						<a href="https://jestjs.io/">Jest</a> - A full featured testing
						framework for Javascript applications. Comes with built in
						assertions, mocking, spying, coverage and snapshot testing.
					</li>
					<li>
						<a href="https://webpack.js.org/">webpack</a> - I have used webpack
						but I am not a fan of it because of the heavy configuration
						requirements. And is bundling really that important anymore?
					</li>
					<li>
						<a href="https://www.snowpack.dev/">snowpack</a> - An alternative to
						webpack. Modern philosophies, much better DX than webpack offers. My
						goto for creating frontend websites privately.
					</li>
					<li>
						<a href="https://eslint.org/">eslint</a> - A must have when creating
						Javascript applications of any sort. I do not write Javascript
						without linting my code with eslint.
					</li>
					<li>
						<a href="https://prettier.io/">prettier</a> - I hate wasting time on
						formatting code. Prettier does it well and intergrates greatly into
						eslint and IDEs
					</li>
					<li>
						<a href="https://code.visualstudio.com/">Visual Studio Code</a> -
						Every application I write in Javascript I do it in Visual Studio
						Code. Integrates very well with eslint and Jest. Great extensions.
					</li>
					<li>
						<a href="https://www.postgresql.org/">PostgreSQL</a> - My favorite
						SQL database. I have only used it in personal projects and at
						Karmalicious AB where I used a Postgres extension called PostGIS for
						querying geographically.
					</li>
				</ul>
			</section>
		</div>
	);
}

export default App;

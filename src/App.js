import React from "react";

function App() {
  return (
    <div className="container">
      <header>
        <h3>hornta&apos;s website</h3>
      </header>
      <section>
        <p>
          Hi and welcome to my website. I work as a web developer at one of
          Swedens largest online gambling companies where I&apos;ve worked for 4
          and a half year now.
        </p>
        <p>
          A colleague and I are running a Minecraft server together just for
          fun. Go check it out here:{" "}
          <a href="https://trollskogen.nu/">https://trollskogen.nu/</a>.
        </p>
        <p>
          <a href="https://github.com/hornta">GitHub</a> |{" "}
          <a
            href="mailto:hello@hornta.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </p>
      </section>
      <hr />
      <section>
        <p>
          This website is built using{" "}
          <a href="https://github.com/facebook/create-react-app">
            create-react-app
          </a>{" "}
          and is deployed by <a href="https://www.netlify.com/">Netlify</a>.
        </p>
      </section>
    </div>
  );
}

export default App;

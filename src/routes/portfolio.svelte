<style>
  .cont {
    margin: 0 auto;
    width: 75%;
  }

  .blocks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1em;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-items: center;
  }

  img {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    transition: all 0.3s linear;
    backface-visibility: hidden;
  }

  a {
    height: 100%;
    width: 100%;
  }

  .content {
    height: 100%;
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px ridge rgb(0, 255, 255);
  }

  .content-overlay {
    background-image: linear-gradient(
      to top,
      rgb(0, 255, 255, 0.7),
      rgb(0, 0, 0, 0.7) 90%
    );
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }

  .content:hover .content-overlay {
    opacity: 1;
  }

  .content-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .content:hover .content-details {
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  .content-details h3 {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  .content-details p {
    color: #fff;
    font-size: 0.8em;
  }

  .fadeIn-bottom {
    top: 80%;
  }
</style>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div class="cont">
  <h1>Portfolio</h1>
  <div class="blocks">
    <div class="content">
      <a
        href="https://console-logs.netlify.com/"
        target="_blank"
        rel="noopener noreferrer">
        <div class="content-overlay" />
        <img src="portfolio/logs.png" alt="Console Logs" width="100%" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Console Logs</h3>
          <p class="content-text">
            A site for all of my programming notes.
            <br />
            Built with Svelte and Sapper.
          </p>
          <p>Click to view.</p>
        </div>
      </a>
    </div>
    <div class="content">
      <a
        href="https://crwn-clothing-react.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">
        <div class="content-overlay" />
        <img src="portfolio/crwn.png" alt="CRWN-CLOTHING" width="100%" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">CRWN-Clothing</h3>
          <p class="content-text">A mock e-commerce app built with React.</p>
          <p>Click to view.</p>
        </div>
      </a>
    </div>
    <div class="content">
      <a
        href="https://unsplash.com/photos/HkTMcmlMOUQ"
        target="_blank"
        rel="noopener noreferrer">
        <div class="content-overlay" />
        <img src="portfolio/zoo.png" alt="Waukazoo Check In" width="100%" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Check In System</h3>
          <p class="content-text">
            A check in system for volunteers at a school.
            <br />
            Built with Svelte and Sapper.
          </p>
          <p>Click to view.</p>
        </div>
      </a>
    </div>
    <div class="content">
      <a
        href="https://unsplash.com/photos/HkTMcmlMOUQ"
        target="_blank"
        rel="noopener noreferrer">
        <div class="content-overlay" />
        <img src="portfolio/piano.png" alt="Console Logs" width="100%" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">This is a title</h3>
          <p class="content-text">This is a short description</p>
          <p>Click to view.</p>
        </div>
      </a>
    </div>
    <div class="content">
      <a
        href="https://unsplash.com/photos/HkTMcmlMOUQ"
        target="_blank"
        rel="noopener noreferrer">
        <div class="content-overlay" />
        <img src="portfolio/drum.png" alt="Console Logs" width="100%" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">This is a title</h3>
          <p class="content-text">This is a short description</p>
          <p>Click to view.</p>
        </div>
      </a>
    </div>
    <div class="content">
      <a
        href="https://unsplash.com/photos/HkTMcmlMOUQ"
        target="_blank"
        rel="noopener noreferrer">
        <div class="content-overlay" />
        <img src="portfolio/quote.png" alt="Console Logs" width="100%" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">This is a title</h3>
          <p class="content-text">This is a short description</p>
          <p>Click to view.</p>
        </div>
      </a>
    </div>

  </div>
</div>

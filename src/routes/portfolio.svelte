<script>
  import { onMount } from "svelte";
  import { fadeIn } from "../animate";
  let mobile = false;

  onMount(() => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth <= 800) {
      mobile = !mobile;
    }
  });
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div in:fadeIn class="cont">
  <h1>Portfolio</h1>
  <div class="blocks">
    {#if mobile}
      <div class="mobile-content">
        <div class="image">
          <img src="portfolio/logs.jpg" alt="Console Logs" width="100%" />
        </div>
        <a
          href="https://console-logs.netlify.com/"
          target="_blank"
          rel="noopener noreferrer">
          <div class="mobile-links">
            <h3>Console Logs</h3>
            <p>
              A site for all of my programming notes. Built with Svelte and
              Sapper.
            </p>
            <button>View Webpage</button>
          </div>
        </a>
      </div>
    {:else}
      <div class="content">
        <a
          href="https://console-logs.netlify.com/"
          target="_blank"
          rel="noopener noreferrer">
          <div class="content-overlay" />
          <img src="portfolio/logs.jpg" alt="Console Logs" width="100%" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">Console Logs</h3>
            <p class="content-text">A site for all of my programming notes.</p>
            <p>Built with Svelte and Sapper.</p>
            <p>Click to view webpage.</p>
          </div>
        </a>
      </div>
    {/if}

    {#if mobile}
      <div class="mobile-content">
        <div class="image">
          <img src="portfolio/crwn.jpg" alt="CRWN-CLOTHING" width="100%" />
        </div>
        <a
          href="https://crwn-clothing-react.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer">
          <div class="mobile-links">
            <h3>CRWN-Clothing</h3>
            <p>A mock e-commerce app. Built with React.</p>
            <button>View Webpage</button>
          </div>
        </a>
      </div>
    {:else}
      <div class="content">
        <a
          href="https://crwn-clothing-react.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer">
          <div class="content-overlay" />
          <img src="portfolio/crwn.jpg" alt="CRWN-CLOTHING" width="100%" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">CRWN-Clothing</h3>
            <p class="content-text">A mock e-commerce app.</p>
            <p>Built with React.</p>
            <p>Click to view webpage.</p>
          </div>
        </a>
      </div>
    {/if}

    {#if mobile}
      <div class="mobile-content">
        <div class="image">
          <img src="portfolio/zoo.jpg" alt="Waukazoo Check In" width="100%" />
        </div>
        <div class="mobile-links">
          <h3>Check In System</h3>
          <p>
            A check in system for volunteers at a school. Built with Svelte and
            Sapper.
          </p>
          <p>
            Due to the private content of the site, this webpage is unable to be
            viewed.
          </p>
        </div>
      </div>
    {:else}
      <div class="content">

        <div class="content-overlay" />
        <img src="portfolio/zoo.jpg" alt="Waukazoo Check In" width="100%" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Check In System</h3>
          <p class="content-text">
            A check in system for volunteers at a school.
          </p>
          <p>Built with Svelte and Sapper.</p>
          <p>
            Due to the private content of the site, this webpage is unable to be
            viewed.
          </p>
        </div>
      </div>
    {/if}
    {#if mobile}
      <div class="mobile-content">
        <div class="image">
          <img src="portfolio/piano.jpg" alt="Console Logs" width="100%" />
        </div>
        <a
          href="https://brittneypostma.github.io/piano/"
          target="_blank"
          rel="noopener noreferrer">
          <div class="mobile-links">
            <h3>Piano Kit</h3>
            <p>
              A clickable and keyboard enabled piano kit. Built with JavaScript.
            </p>
            <button>View Webpage</button>
          </div>
        </a>
      </div>
    {:else}
      <div class="content">
        <a
          href="https://brittneypostma.github.io/piano/"
          target="_blank"
          rel="noopener noreferrer">
          <div class="content-overlay" />
          <img src="portfolio/piano.jpg" alt="Console Logs" width="100%" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">Piano Kit</h3>
            <p class="content-text">
              A clickable and keyboard enabled piano kit.
            </p>
            <p>Built with JavaScript.</p>
            <p>Click to view webpage.</p>
          </div>
        </a>
      </div>
    {/if}
    {#if mobile}
      <div class="mobile-content">
        <div class="image">
          <img src="portfolio/drum.jpg" alt="Console Logs" width="100%" />
        </div>
        <a
          href="https://red-cross-landing-page.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          <div class="mobile-links">
            <h3>Red Cross Landing Page</h3>
            <p>A landing page for the American Red Cross built with Svelte.</p>

            <button>View Webpage</button>
          </div>
        </a>
      </div>
    {:else}
      <div class="content">
        <a
          href="https://red-cross-landing-page.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          <div class="content-overlay" />
          <img
            src="portfolio/red-cross.png"
            alt="red-cross"
            width="100%"
            height="345px" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">Red Cross Landing Page</h3>
            <p class="content-text">
              A landing page for the American Red Cross.
            </p>
            <p>Built with Svelte</p>

            <p>Click to view webpage.</p>
          </div>
        </a>
      </div>
    {/if}
    {#if mobile}
      <div class="mobile-content">
        <div class="image">
          <img
            src="portfolio/quote.jpg"
            alt="red-cross"
            width="100%"
            height="345px" />
        </div>
        <a
          href="https://codepen.io/sballgirl11/pen/bPozoK"
          target="_blank"
          rel="noopener noreferrer">
          <div class="mobile-links">
            <h3>Random Quote Generator</h3>
            <p>
              A random quote generator with a color changing background. Built
              with JavaScript.
            </p>
            <button>View Webpage</button>
          </div>
        </a>
      </div>
    {:else}
      <div class="content">
        <a
          href="https://codepen.io/sballgirl11/pen/bPozoK"
          target="_blank"
          rel="noopener noreferrer">
          <div class="content-overlay" />
          <img src="portfolio/quote.jpg" alt="Console Logs" width="100%" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">Random Quote Generator</h3>
            <p class="content-text">
              A random quote generator with a color changing background.
            </p>
            <p>Built with JavaScript.</p>
            <p>Click to view webpage.</p>
          </div>
        </a>
      </div>
    {/if}
  </div>
</div>

<style>
  .cont {
    margin: 0 auto;
    width: 75%;
  }

  .blocks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
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

  .content-title {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    margin: 0 auto;
    border-bottom: 1px solid whitesmoke;
  }

  .content-details {
    font-style: italic;
    letter-spacing: 2.5px;
    color: whitesmoke;
    text-shadow: 2px 2px 2px rgba(36, 36, 36, 0.5),
      3px 3px 3px rgba(0, 0, 0, 0.8), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
    font-size: 2vh;
  }

  .content-overlay {
    background-image: linear-gradient(
      to top,
      rgb(0, 255, 255, 0.9),
      rgb(0, 0, 0, 0.9) 90%
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

  @supports (-ms-ime-align: auto) {
    .content-overlay {
      background-image: linear-gradient(
        to top,
        rgb(2, 83, 83),
        rgb(0, 0, 0) 90%
      );
    }

    .content:hover .content-overlay {
      opacity: 0.7;
    }
  }

  .content-details {
    position: absolute;
    text-align: center;
    padding: 0;
    width: 75%;
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

  .mobile-links {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    .cont {
      width: 95%;
    }

    .blocks {
      grid-template-columns: 1fr;
    }

    .mobile-content {
      display: grid;
      justify-content: flex-end;
      margin-bottom: 1em;
      grid-gap: 1em;
      text-align: center;
      height: 100%;
      grid-template-rows: 200px 200px;
    }

    .mobile-content > a {
      padding: 0;
      text-decoration: none;
      color: whitesmoke;
    }

    .image > img {
      border: 1px solid white;
    }

    .mobile-links {
      width: 100%;
      height: 100%;
      display: grid;
      align-content: space-between;
      cursor: pointer;
    }

    .mobile-links > button {
      cursor: pointer;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      color: whitesmoke;
      background-color: rgb(0, 255, 255, 0.7);
      outline: none;
      border: none;
      width: 100%;
      font-size: 24px;
      text-shadow: 2px 2px 2px rgba(36, 36, 36, 0.5),
        3px 3px 3px rgba(0, 0, 0, 0.8), 0px 0px 1px #111,
        #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
      border-radius: 0.2em;
      border: 1px solid transparent;
    }

    .mobile-links > button:hover {
      background-color: transparent;
      border: 1px solid rgb(0, 255, 255, 0.2);
    }
  }
</style>

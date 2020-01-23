<script>
  import { onMount } from "svelte";
  // let mobile = false

  // onMount (() => {
  //   let viewportWidth = window.innerWidth

  // })
</script>

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

  @media only screen and (max-width: 800px) {
    .cont {
      width: 95%;
    }

    .blocks {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
</style>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div class="cont">
  <h1>Portfolio</h1>
  <div class="blocks">
    <!-- {#if mobile}
     <div class="content">
     <img src="portfolio/logs.jpg" alt="Console Logs" width="100%" />
     </div><a
        href="https://console-logs.netlify.com/"
        target="_blank"
        rel="noopener noreferrer">
<div class="content-details fadeIn-bottom">
          <h3 class="content-title">Console Logs</h3>
          <p class="content-text">A site for all of my programming notes.</p>
          <p>Built with Svelte and Sapper.</p>
          <p>Click to view webpage.</p>
        </div></a>
    {:else} -->
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
    <!-- {/if} -->

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
          Due to the private content of the site,
          <br />
          this webpage is unable to be viewed.
        </p>
      </div>
    </div>
    <div class="content">
      <a
        href="https://sballgirl11.github.io/"
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
    <div class="content">
      <a
        href="https://codepen.io/sballgirl11/pen/PvYqmL"
        target="_blank"
        rel="noopener noreferrer">
        <div class="content-overlay" />
        <img src="portfolio/drum.jpg" alt="Console Logs" width="100%" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">Drum Kit</h3>
          <p class="content-text">
            A drum kit that can be played by pressing keys on the keyboard.
          </p>
          <p>From the JS30 course by Wes Bos.</p>
          <p>Built with JavaScript</p>

          <p>Click to view webpage.</p>
        </div>
      </a>
    </div>
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

  </div>
</div>

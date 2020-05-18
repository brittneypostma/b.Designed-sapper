<div class="container">
  <div id="envelope" class="envelope">
    <svg
      id="flap"
      class="flap"
      height="45%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none">
      <polygon points="0,0 100,0 50,100" />
    </svg>
    <div class="thank">
      Thank you!
      <br />
      I will get back to you soon!
      <a href=".">
        <span class="btnText">Go Home</span>
      </a>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    margin: 0 auto;
  }

  .envelope {
    margin-top: 0;
    position: relative;
    width: 40%;
    height: 500px;
    background: radial-gradient(#222, #111) 0 50%;

    display: grid;
    justify-items: center;
  }
  .flap {
    transition: 0.5s all linear;
    fill: whitesmoke;
  }

  .thank {
    animation: fade-in 1s ease-in;
    position: absolute;
    width: 90%;
    height: 100%;
    display: grid;
    justify-content: stretch;
    align-content: flex-end;
    text-align: center;
    letter-spacing: 5px;
    font-size: 4vh;
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5),
      3px 3px 3px rgba(0, 0, 0, 0.8), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
    font-style: italic;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }

  @keyframes fade-in {
    from {
      scale: 0.5;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  .btnText {
    color: rgb(226, 226, 226);
    text-shadow: 2px 2px 2px rgba(36, 36, 36, 0.5),
      3px 3px 3px rgba(0, 0, 0, 0.8), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
  }

  a {
    margin-bottom: 10px;
    position: relative;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    text-decoration: none;
    text-align: center;
    width: 100%;
    font-size: 4vh;
    width: 100%;
    height: 6vh;
    border-radius: 0.2em;
    background-image: linear-gradient(
      rgb(0, 255, 255, 0.6),
      rgb(0, 255, 255, 0.9),
      rgb(0, 255, 255, 0.6)
    );
    color: #bbb;
    letter-spacing: 1px;
    animation: slow-fade 2s ease-in;
  }

  @keyframes slow-fade {
    from {
      scale: 0;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  a:hover {
    background-image: linear-gradient(to top, #00ffff, transparent 10%);
  }
  @media only screen and (max-width: 600px) {
    .thank {
      font-size: 3vh;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    .thank {
      font-size: 4vh;
    }
  }

  @media only screen and (min-width: 1001px) and (max-width: 1400px) {
  }
</style>

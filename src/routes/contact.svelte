<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
  }

  .envelope {
    position: relative;
    width: 40%;
    height: 500px;
    background: radial-gradient(#222, #111) 0 50%;
    top: 10%;
  }
  .flap {
    transition: 0.5s all linear;
    fill: whitesmoke;
    animation: open-flap 3s ease-in-out forwards;
    transform-origin: 0 0 0;
  }

  @keyframes open-flap {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(120deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  @media only screen and (max-width: 600px) {
    .envelope {
      width: 100%;
      height: 95%;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    .envelope {
      width: 75%;
    }
  }

  @media only screen and (min-width: 1001px) and (max-width: 1400px) {
    .envelope {
      width: 70%;
    }
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>
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
  </div>
</div>

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
    background: linear-gradient(#333, #000) 0 50%;
    top: 10%;
  }
  .flap {
    transition: 0.5s all linear;
    fill: rgb(255, 255, 255);
    animation: open-flap 5s ease-in-out forwards;
    transform-origin: 0 0 0;
  }

  @keyframes open-flap {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(0deg);
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
      height="35%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none">
      <polygon points="0,0 100,0 50,100" />
    </svg>
  </div>
</div>

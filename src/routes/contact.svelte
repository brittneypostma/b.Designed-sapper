<script>
  import { onMount } from "svelte";

  onMount(() => {
    let flap = document.getElementById("flap");
    let envelope = document.getElementById("envelope");

    envelope.addEventListener("click", function() {
      flap.classList.toggle("open");
    });
  });
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
  }

  .envelope {
    position: relative;
    width: 500px;
    height: 300px;
    background: linear-gradient(#333, #000) 0 50%;
    top: 10%;
  }
  .flap {
    transition: 0.5s all linear;
    fill: rgb(255, 255, 255);
    animation: open-flap 2s ease-in-out forwards;
    transform-origin: 0 0 0;
  }

  @keyframes open-flap {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(180deg);
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
      height="50%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none">
      <polygon points="0,0 100,0 50,100" />
    </svg>
  </div>
</div>

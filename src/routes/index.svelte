<script>
  import { onMount } from "svelte";

  const changingTextArray = [
    "Developer",
    "Designer",
    "Marketer",
    "Freelancer",
    "Mom"
  ];

  let curIdx = 0;

  onMount(() => {
    setInterval(() => {
      curIdx++;
      if (curIdx === changingTextArray.length) {
        curIdx = 0;
      }
    }, 1000);
  });
</script>

<style>
  .cont {
    margin: 0 auto;
    width: 75%;
    height: 80%;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 2.5vh;
  }

  .ind {
    display: flex;
  }

  .bgText {
    text-align: center;
    font-style: italic;
    letter-spacing: 7px;
    background: linear-gradient(#262626, #eaeaea, #262626);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .hlText {
    font-style: italic;
    margin: 0 0.5em;
    transition: all 0.5s linear;
    background-color: rgba(0, 255, 255, 0.7);
    padding: 0 0.5em;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
  }

  .name {
    margin-left: 10px;
    font-style: italic;
    color: rgba(0, 255, 255, 0.7);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
  }

  a {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    text-decoration: none;
    text-align: center;
    width: 100%;
    font-size: 4vh;
    width: 100%;
    height: 6vh;
    border-radius: 0.4em;
    background-image: linear-gradient(#111, #333);
    color: #bbb;
    letter-spacing: 1px;
  }

  a:hover {
    background-image: linear-gradient(to top, #00ffff, transparent 10%);
  }
</style>

<svelte:head>
  <title>b.Designed</title>
</svelte:head>

<div class="cont">
  <div class="ind">
    <h1 class="bgText">Hello, I'm</h1>
    <h1>
      <span class="name">Brittney Postma</span>
    </h1>
  </div>

  <div class="ind">
    <h2 class="bgText">owner at b.Designed</h2>
  </div>

  <div class="ind">
    <h1 class="bgText">I'm a</h1>
    <h1>
      <span class="hlText">{changingTextArray[curIdx]}</span>
    </h1>
  </div>

  <div class="ind">
    <a href="portfolio">
      <span class="bgText">View My Work</span>
    </a>
  </div>
</div>

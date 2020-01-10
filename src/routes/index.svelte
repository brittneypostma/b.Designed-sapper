<script>
  import { onMount } from "svelte";

  const changingTextArray = [
    "Mom",
    "Developer",
    "Designer",
    "Marketer",
    "Freelancer"
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
  div {
    margin: 0 auto;
    width: 75%;
    height: 80%;
    display: grid;
    justify-content: center;
    justify-items: flex-start;
    align-items: center;
    align-content: center;
  }

  h1,
  h2,
  span {
    text-align: center;
    font-style: italic;
    letter-spacing: 5px;
    background: linear-gradient(#262626, #eaeaea, #262626);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
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

<div>
  <h1>Hello, I'm Brittney Postma,</h1>
  <h2>owner at b.Designed.</h2>
  <h1>
    I'm a
    <span>{changingTextArray[curIdx]}</span>
  </h1>

  <a href="portfolio">
    <span>View My Work</span>
  </a>
</div>

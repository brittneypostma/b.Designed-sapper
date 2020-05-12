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
    width: 60%;
    height: 80%;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-items: flex-start;
    font-size: 2.2vh;
    font-style: italic;
  }

  .ind {
    display: flex;
    width: 500px;
    min-width: 450px;
    line-height: 1;
  }

  h1 {
    margin: 0;
  }

  h1:last-of-type {
    margin-bottom: 10px;
  }

  .bgText {
    text-align: center;
    letter-spacing: 7px;
    background: linear-gradient(#262626, #ffffff, #262626);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .sub-text {
    font-size: 2vh;
  }

  .hlText {
    border-radius: 0.2em;
    color: rgb(226, 226, 226);
    transition: all 0.5s linear;
    padding: 0 0.5em 0.1em;
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5),
      3px 3px 3px rgba(0, 0, 0, 0.8), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
  }

  .letter {
    font-size: 100px;
    color: rgba(0, 255, 255, 0.7);
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5),
      3px 3px 3px rgba(0, 0, 0, 0.5), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
  }

  .name {
    margin-left: -10px;
    color: rgb(226, 226, 226);
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5),
      3px 3px 3px rgba(0, 0, 0, 0.8), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
  }

  .btnText {
    line-height: initial;
    color: rgb(226, 226, 226);
    text-shadow: 2px 2px 2px rgba(36, 36, 36, 0.5),
      3px 3px 3px rgba(0, 0, 0, 0.8), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
  }

  a {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    text-decoration: none;
    text-align: center;
    justify-self: center;
    font-size: 4vh;
    width: 100%;
    height: 6vh;
    border-radius: 0.2em;
    background-color: rgb(0, 255, 255, 0.7);
    color: #bbb;
    letter-spacing: 1px;
    transition: background 0.2s linear;
    border: 1px solid transparent;
  }

  @supports (-ms-ime-align: auto) {
    a {
      background-image: linear-gradient(
        rgb(2, 109, 109),
        rgb(0, 255, 255),
        rgb(2, 109, 109)
      );
    }
  }

  a:hover {
    background-color: transparent;
    border: 1px solid rgb(0, 255, 255, 0.2);
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    .cont {
      font-size: 1.8vh;
      width: 75%;
    }

    .ind {
      min-width: 400px;
      width: 400px;
    }
  }

  @media only screen and (max-width: 799px) {
    .cont {
      font-size: 1.4vh;
      width: 100%;
    }

    .ind {
      min-width: 325px;
      width: 325px;
    }

    .letter {
      font-size: 48px;
    }
  }
</style>

<svelte:head>
  <title>b.Designed</title>
</svelte:head>

<div class="cont">

  <div class="ind">
    <h1>
      <span class="bgText">Hi,</span>
      <span class="bgText">I'm</span>
      <span class="letter">B</span>
      <span class="name">rittney,</span>
    </h1>
  </div>

  <div class="ind">
    <h2 class="bgText sub-text">owner of b.Designed.</h2>
  </div>

  <div class="ind">
    <h1 class="bgText">I'm a</h1>
    <h1>
      <span class="hlText">{changingTextArray[curIdx]}</span>
    </h1>
  </div>

  <div class="ind">
    <a href="portfolio">
      <span class="btnText">View My Work</span>
    </a>
  </div>
</div>

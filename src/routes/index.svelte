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
    width: 100%;
    min-width: 500px;
  }

  .ind:nth-child(2) {
    margin-top: -25%;
  }

  .ind:nth-child(3) {
    margin-top: -14%;
  }

  .ind:last-child {
    margin-top: -4%;
  }
  .bgText {
    text-align: center;
    letter-spacing: 7px;
    background: linear-gradient(#262626, #eaeaea, #262626);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
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
  }

  a {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    text-decoration: none;
    text-align: center;
    width: 100%;
    justify-self: center;
    font-size: 4vh;
    width: 100%;
    height: 6vh;
    border-radius: 0.2em;
    background-image: linear-gradient(
      rgb(0, 255, 255, 0.9),
      rgba(8, 112, 112, 0.5)
    );
    color: #bbb;
    letter-spacing: 1px;
  }

  a:hover {
    background-image: linear-gradient(to top, #00ffff, transparent 10%);
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    .cont {
      font-size: 1.8vh;
      width: 75%;
    }

    .ind:nth-child(2) {
      margin-top: -30%;
    }

    .ind:nth-child(3) {
      margin-top: -15%;
    }

    .ind {
      min-width: 375px;
    }
  }

  @media only screen and (max-width: 799px) {
    .cont {
      font-size: 1.4vh;
      width: 95%;
    }

    .ind {
      min-width: 300px;
    }

    .ind:nth-child(2) {
      margin-top: -20%;
    }

    .ind:nth-child(3) {
      margin-top: -12%;
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
    <h1 class="bgText">Hi,</h1>
  </div>
  <div class="ind">
    <h1>
      I'm
      <span class="letter">B</span>
      <span class="name">rittney,</span>
    </h1>
  </div>

  <div class="ind">
    <h2 class="bgText">owner at b.Designed.</h2>
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

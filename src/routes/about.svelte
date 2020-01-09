<style>
  div {
    margin: 0 auto;
    width: 75%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 4em;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 3.5vh;
    text-shadow: 2px 2px 1px black;
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    div {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    img {
      width: 50%;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>about</h1>

<div>
  <img src="family.png" alt="my family" />
  <p>
    I am a mom of 3 wonderful children and I have still managed to find the time
    to teach myself to code. I love developing web sites that are beautiful,
    fluid, and responsive. I thrive on mobile-first development with an
    extensive knowledge of CSS and React with Gatsby, Svelte with Sapper, SEO,
    UX/UI design, and logo design. I love learning about all the cool new stuff
    that comes out in the tech world daily. I also 💓 coffee and beer, well
    because mom life!
  </p>
</div>

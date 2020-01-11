<style>
  h1 {
    letter-spacing: 0.2em;
  }
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
    width: 85%;
    transform: rotate(-15deg);
  }

  @media only screen and (max-width: 600px) {
    div {
      grid-template-columns: 1fr;
      justify-items: center;
      width: 100%;
      text-align: center;
    }
    img {
      width: 75%;
      transform: none;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 1400px) {
    div {
      grid-template-columns: 1fr;
      justify-items: center;
      width: 100%;
      text-align: center;
    }
    img {
      width: 50%;
      transform: none;
    }
  }

  @media only screen and (min-width: 1001px) and (max-width: 1400px) {
    div {
      grid-template-columns: 1fr;
      justify-items: center;
      width: 100%;
      text-align: center;
    }
    img {
      width: 35%;
      transform: none;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About b.Designed</h1>

<div>
  <img src="family.png" alt="my family" />
  <p>
    I am a mom of 3 wonderful children and we live in the beautiful city of
    Holland, Michigan. I love developing web sites that are beautiful, that are
    also fluid, responsive, and easy to use. I thrive on mobile-first
    development with an extensive knowledge of CSS and React with Gatsby, Svelte
    with Sapper, SEO, UX/UI design, and logo design. I love learning about all
    the cool new stuff that comes out in the tech world daily. I also 💖 coffee
    and beer 🍻, well because mom life!
  </p>
</div>
<!-- <div className="right-about">
          <h1>Skills</h1>
          <div className="skill-div">
            <div>
              <img src={WebDev} alt="web dev" className="skills dev" />
              <p>
                Web <br />
                Developer
              </p>
            </div>
            <div>
              <img
                src={Graphic}
                alt="graphic designer"
                className="skills graphic"
              />
              <p>
                Graphic
                <br /> Designer
              </p>
            </div>
            <div>
              <img
                src={Marketing}
                alt="marketer"
                className="skills marketing"
              />
              <p>
                Digital
                <br />
                Marketer
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-about">
          <div>
            <p>FAST</p>
            <img src={Fast} alt="fast" className="icons fast card-front" />
          </div>
          <div>
            <p>RESPONSIVE</p>
            <img
              src={Responsive}
              alt="responsive"
              className="icons responsive card-front"
            />
          </div>
          <div>
            <p>INTUITIVE</p>
            <img
              src={Intuitive}
              alt="intuitive"
              className="icons intuitive card-front"
            />
          </div>
          <div>
            <p>DYNAMIC</p>
            <img
              src={Dynamic}
              alt="dynamic"
              className="icons dynamic card-front"
            />
          </div>
        </div> -->

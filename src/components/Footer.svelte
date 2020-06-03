<footer>
  <div class="links">
    <a
      href="https://www.facebook.com/b.Designed11/"
      rel="noopener noreferrer"
      target="_blank">
      <img src="/icons/facebook.png" alt="facebook" />
    </a>
    <a
      href="https://twitter.com/BrittneyPostma"
      rel="noopener noreferrer"
      target="_blank">
      <img src="/icons/twitter.png" alt="twitter" />
    </a>
    <p>b.Designed</p>
    <a
      href="https://www.linkedin.com/in/brittney-postma-868928178/"
      rel="noopener noreferrer"
      target="_blank">
      <img src="/icons/linkedin.png" alt="linkedin" />
    </a>
    <a
      href="https://github.com/brittneypostma"
      rel="noopener noreferrer"
      target="_blank">
      <img src="/icons/github.png" alt="github" />
    </a>
  </div>
</footer>

<style>
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    color: #eee;
    font-size: 20px;
    line-height: 1;
  }

  .links {
    width: 30%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    padding: 0 0.5em;
    transition: transform 0.2s linear;
  }

  a:hover {
    transform: scale(1.2);
  }

  p {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    transition: translateY(-50%);
    text-align: center;
    font-style: italic;
    letter-spacing: 5px;
    background: linear-gradient(#262626, #ffffff, #262626);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    left: 12.5%;
    bottom: 0;
    top: 40px;
    width: 75%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  p:hover::before {
    background: rgb(168, 168, 168);
    transform: scaleX(0.1);
  }
</style>

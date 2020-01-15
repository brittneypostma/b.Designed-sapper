<style>
  div {
    background-color: transparent;
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    color: #eee;
    justify-items: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 1;
  }

  a {
    padding: 0 0.5em;
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

<div>
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
    href="https://github.com/sballgirl11"
    rel="noopener noreferrer"
    target="_blank">
    <img src="/icons/github.png" alt="github" />
  </a>
</div>

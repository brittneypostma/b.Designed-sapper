<script>
  export let segment;
</script>

<style>
  nav {
    padding: 2px;
  }

  /* #nav-check {
    display: none;
  }

  .nav-menu {
    display: none;
  } */
  .nav-links {
    position: fixed;
    z-index: 10;
    margin-bottom: 1em;
    width: 100%;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px 150px;
    justify-content: center;
  }

  .selected {
    background-position: 0 100%;
    background-image: linear-gradient(#ccc, #eee);
  }

  a::before {
    content: "";
    position: absolute;
    z-index: 11;
    transition: transform 0.3s ease;
    left: 12%;
    bottom: 0;
    top: 40px;
    width: 75%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  .selected::before {
    background: rgb(26, 26, 26);
    transform: scaleX(1);
  }

  .selected:hover {
    background-image: linear-gradient(#ccc, #eee);
  }

  a {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-style: italic;
    transition: all 0.1s linear;
    padding: 1em;
    display: grid;
    position: relative;
    text-decoration: none;
    background: linear-gradient(#000, #333) 0 50%;
    background-size: 100% 200%;
    background-position: 0 100%;
    color: #eee;
    text-align: center;
    letter-spacing: 1px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
    border-right: 1px;
    border-left: 1px;
  }

  a:first-child {
    border-radius: 0.7em 0 0 0.7em;
  }

  a:last-child {
    border-radius: 0 0.7em 0.7em 0;
  }

  a:hover {
    background-image: linear-gradient(to top, #00ffff, #000 7%);
  }

  a::after {
    content: "";
    position: absolute;
    top: 0px;
    z-index: 11;
    left: 2px;
    width: calc(100% - 4px);
    height: 56px;
    background-image: radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 0.2) 10%,
        transparent,
        transparent
      ),
      radial-gradient(
        ellipse at bottom right,
        rgba(250, 250, 250, 0.1) 10%,
        transparent,
        transparent
      );
    border-radius: 0;
  }

  a:first-child::after {
    border-radius: 0.7em 0 0 0.7em;
  }

  a:last-child::after {
    border-radius: 0 0.7em 0.7em 0;
  }

  /* @media (max-width: 800px) {
    .nav-menu {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: flex-end;
    }

    label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }

    label:hover,
    #nav-check:checked ~ label {
      background-color: rgba(0, 0, 0, 0.3);
    }

    .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #333;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
    }

    .nav-links > a {
      display: block;
      width: 100%;
    }

    #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }

    #nav-check:checked ~ .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  } */
</style>

<!-- <script>
  export let segment;
</script><style>
  .nav {
    width: 100%;
    background-color: #4d4d4d;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-title {
    display: flex;
    padding: 0.5em;
  }

  .nav-btn {
    display: none;
  }

  .nav-links {
    display: flex;
    font-size: 18px;
  }

  .nav-links > a {
    padding: 0 2vw;
    text-decoration: none;
    color: #efefef;
  }

  .nav-links > a:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  #nav-check {
    display: none;
  }

  @media (max-width: 800px) {
    .nav-menu {
      width: 50px;
      height: 25px;
    }
    .nav-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-btn > label {
      display: flex;
      width: 50px;
      height: 50px;
      padding: 13px;
      justify-content: center;
      align-items: center;
    }
    .nav-btn > label:hover,
    .nav #nav-check:checked ~ .nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .nav-links {
      position: absolute;
      display: grid;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #333;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      text-align: center;
      top: 76px;
      left: 0px;
    }
    .nav-links > a {
      display: block;
      width: 100%;
    }
    #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
    #nav-check:checked ~ .nav-links {
      height: 300px;
      overflow-y: auto;
    }
  }
</style><nav>
  <div class="nav">
    <input type="checkbox" id="nav-check" />
    <div class="nav-title">
      <img src="favicon.ico" alt="logo" class="logo" />
    </div>

    <div class="nav-btn">
      <label for="nav-check">
        <img src="nav-menu.png" alt="nav menu button" class="nav-menu" />
      </label>
    </div>

    <div class="nav-links">
      <a class:selected={segment === undefined} href=".">home</a>

      <a class:selected={segment === 'about'} href="about">about</a>

      <a class:selected={segment === 'portfolio'} href="portfolio">portfolio</a>

      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>

      <a class:selected={segment === 'contact'} href="contact">contact</a>
    </div>
  </div>
</nav> -->
<nav>
  <!-- <input type="checkbox" id="nav-check" /> -->
  <div class="nav-links">
    <a class:selected={segment === undefined} href=".">home</a>

    <a class:selected={segment === 'about'} href="about">about</a>

    <a class:selected={segment === 'portfolio'} href="portfolio">portfolio</a>

    <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>

    <a class:selected={segment === 'contact'} href="contact">contact</a>
  </div>
  <!-- <div class="nav-menu">
    <label id="nav-check" for="nav-check">
      <img src="nav-menu.png" alt="nav menu button" class="nav-btn" />
      <p>menu</p>
    </label>
  </div> -->
</nav>

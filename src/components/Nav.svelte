<script>
  export let segment;
</script>

<style>
  nav {
    padding: 2px;
  }

  .menu-cont {
    display: none;
  }
  .nav-cont {
    position: fixed;
    z-index: 99;
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
    font-size: 1.8vh;
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
    .menu {
      display: flex;
      justify-content: flex-end;
      justify-items: center;
      width: 100%;
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }

    .menu-cont {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
      width: 100%;
    }

    .nav-menu {
      display: grid;
      width: 75px;
      height: 40px;
      color: whitesmoke;
    }
    
    .menu-cont > p {
      margin-top: 0;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      font-style: italic;
    }

    .nav-menu {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    label {
      display: inline-block;
      width: 100%;
      height: 50px;
      padding: 13px;
    }
    label:hover,
    #nav-check:checked ~ label {
      background-color: rgba(255, 255, 255, 0.3);
    }
    label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }
    .nav-cont {
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
    .nav-cont > a {
      display: block;
      width: 100%;
    }
    #nav-check:not(:checked) ~ .nav-cont {
      height: 0px;
    }
    #nav-check:checked ~ .nav-cont {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  } */

  /* @media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
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
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
} */
</style>

<nav>
  <div class="nav-cont">
    <a class:selected={segment === undefined} href=".">home</a>

    <a class:selected={segment === 'about'} href="about">about</a>

    <a class:selected={segment === 'portfolio'} href="portfolio">portfolio</a>

    <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>

    <a class:selected={segment === 'contact'} href="contact">contact</a>
  </div>
  <!-- <div class="menu"> -->
  <div class="menu-cont">
    <!-- <img src="nav-menu.png" alt="nav menu" class="nav-menu" />
      <p>menu</p> -->
    <label id="nav-check" for="nav-check">
      <span />
      <span />
      <span />
    </label>
  </div>
  <!-- </div> -->
</nav>

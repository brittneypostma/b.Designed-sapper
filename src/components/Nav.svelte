<script>
  export let segment;

  let clicked = false;
</script>

<style>
  .nav {
    width: 100%;
    height: 57px;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(#000, #333, #000) 0 50%;
  }
  .nav-title {
    display: flex;
  }
  .logo {
    width: 55px;
    position: relative;
    top: 1px;
  }
  .nav-btn {
    display: none;
  }
  .nav-links {
    position: fixed;
    z-index: 10;
    width: 100%;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px 150px;
    justify-content: center;
  }

  a::before {
    content: "";
    position: absolute;
    z-index: 11;
    left: 12%;
    bottom: 0;
    top: 40px;
    width: 75%;
    height: 2px;
    /* background: #aaa; */
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  a {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-style: italic;
    transition: all 0.1s linear;
    padding: 1em;
    display: grid;
    position: relative;
    text-decoration: none;
    /* background: linear-gradient(#000, #333) 0 50%;
    background-size: 100% 200%;
    background-position: 0 100%; */
    color: #eee;
    text-align: center;
    letter-spacing: 1px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
    border-right: 1px;
    border-left: 1px;
  }
  /* 
  a:first-child {
    border-radius: 0.7em 0 0 0.7em;
  }

  a:last-child {
    border-radius: 0 0.7em 0.7em 0;
  } */

  a:hover {
    background-image: linear-gradient(to top, transparent, #00ffff 95%);
  }

  a::after {
    content: "";
    position: absolute;
    top: 0px;
    z-index: 11;
    left: 2px;
    width: calc(100% - 4px);
    height: 56px;
    /* background-image: radial-gradient(
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
      ); */
    border-radius: 0;
  }

  /* a:first-child::after {
    border-radius: 0.7em 0 0 0.7em;
  }

  a:last-child::after {
    border-radius: 0 0.7em 0.7em 0;
  } */

  .selected {
    background-position: 0 100%;
    background-image: linear-gradient(#ccc, whitesmoke, #ccc, transparent 90%);
  }

  .selected::before {
    background: rgb(26, 26, 26);
    transform: scaleX(1);
  }

  .selected:hover {
    background-image: linear-gradient(#ccc, whitesmoke, #ccc, transparent 90%);
  }

  #nav-check {
    display: none;
  }

  @media (max-width: 850px) {
    .nav {
      background-color: #333;
      background: linear-gradient(#000, #333) 0 50%;
      background-size: 100% 200%;
      background-position: 0 100%;
    }
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
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #333;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow: hidden;
      text-align: center;
      position: absolute;
      top: 50px;
      left: 0px;
      padding: 0;
    }

    a {
      display: block;
      width: 100%;
      border-bottom: 1px solid black;
    }
    a:first-child {
      border-radius: 0;
    }

    a:last-child {
      border-radius: 0;
    }
    a:first-child::after {
      border-radius: 0;
    }

    a:last-child::after {
      border-radius: 0 0.7em 0.7em 0;
    }

    #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
    #nav-check:checked ~ .nav-links {
      height: 300px;
      overflow-y: auto;
      animation: slide 0.5s linear;
    }

    @keyframes slide {
      from {
        opacity: 0;
        top: -200px;
      }
      to {
        opacity: 1;
        top: 50px;
      }
    }
  }
</style>

<nav>
  <div class="nav">
    <input
      type="checkbox"
      id="nav-check"
      bind:checked={clicked}
      on:click={() => (clicked = !clicked)} />
    <div class="nav-title">
      <img src="logo-192.png" alt="logo" class="logo" />
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <img src="nav-menu.png" alt="nav menu button" class="nav-menu" />
      </label>
    </div>
    <div class="nav-links">
      <a
        class:selected={segment === undefined}
        href="."
        on:click={() => (clicked = !clicked)}>
        home
      </a>
      <a
        rel="prefetch"
        class:selected={segment === 'about'}
        href="about"
        on:click={() => (clicked = !clicked)}>
        about
      </a>
      <a
        rel="prefetch"
        class:selected={segment === 'portfolio'}
        href="portfolio"
        on:click={() => (clicked = !clicked)}>
        portfolio
      </a>
      <a
        rel="prefetch"
        class:selected={segment === 'blog'}
        href="blog"
        on:click={() => (clicked = !clicked)}>
        blog
      </a>
      <a
        rel="prefetch"
        class:selected={segment === 'contact'}
        href="contact"
        on:click={() => (clicked = !clicked)}>
        contact
      </a>
    </div>
  </div>
</nav>

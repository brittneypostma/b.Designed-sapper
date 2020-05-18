<script>
  export let segment;

  let clicked = false;
</script>

<nav>
  <div class="nav">
    <input
      type="checkbox"
      id="nav-check"
      bind:checked={clicked}
      on:click={() => (clicked = !clicked)} />
    <div class="logo">
      <img src="android-chrome-192x192.png" alt="logo" width="60px" />
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

<style>
  .nav {
    background-color: rgb(0, 0, 0, 0.9);
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: grid;
    align-items: center;
    margin-left: 15px;
    position: relative;
    top: 10px;
  }
  .nav-btn {
    display: none;
  }
  .nav-links {
    position: fixed;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
  }
  a {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-style: italic;
    transition: all 0.1s linear;
    padding: 1em;
    display: grid;
    position: relative;
    text-decoration: none;
    color: #eee;
    text-align: center;
    letter-spacing: 1px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
    border-right: 1px;
    border-left: 1px;
  }
  a:hover {
    transform: scale(1.2);
  }

  a::after {
    content: "";
    position: absolute;
    top: 0px;
    z-index: 11;
    left: 2px;
    width: calc(100% - 4px);
    height: 56px;
    border-radius: 0;
  }
  .selected {
    position: relative;
    top: -1px;
    transform: scale(1.2);
    border-bottom: 2px solid #333;
  }

  a,
  .selected {
    padding-bottom: 0;
  }
  .selected {
    color: rgb(0, 255, 255);
  }

  #nav-check {
    display: none;
  }

  @media (max-width: 850px) {
    .nav-menu {
      margin-top: 10px;
      width: 25%;
      transition: all 0.3s linear;
      cursor: pointer;
    }

    .nav-menu:hover {
      transform: rotate(180deg);
    }
    .nav-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-btn > label {
      display: flex;
      width: 100%;
      padding: 10px;
      justify-content: flex-end;
      align-items: center;
    }

    .nav-links {
      background-color: rgb(0, 0, 0, 0.9);
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      width: 100%;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow: hidden;
      text-align: center;
      position: absolute;
      top: 70px;
      left: 0px;
      padding: 0;
      margin: 0;
    }

    a {
      display: block;
      width: 100%;
    }

    a:hover {
      transform: scale(1);
    }

    a:hover,
    .selected {
      transform: scale(1);
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

    .selected {
      border-bottom: 0;
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

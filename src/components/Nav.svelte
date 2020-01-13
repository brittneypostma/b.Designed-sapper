<script>
  export let segment;
</script>

<style>
  nav {
    padding: 2px;
  }

  .nav-cont {
    display: grid;
    grid-template-columns: 150px 150px 150px 150px 150px;
    justify-content: center;
  }

  .selected {
    background-color: whitesmoke;
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
    transition: all 0.1s linear;
    padding: 1em;
    display: grid;
    position: relative;
    text-decoration: none;
    background-color: #111;
    background: linear-gradient(#000, #333) 0 50%;
    background-size: 100% 200%;
    background-position: 0 100%;
    color: #eee;
    text-align: center;
    font-family: "Arial Black", Gadget, sans-serif;
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
</style>

<nav>
  <div class="nav-cont">
    <a class:selected={segment === undefined} href=".">home</a>

    <a class:selected={segment === 'about'} href="about">about</a>

    <a class:selected={segment === 'portfolio'} href="portfolio">portfolio</a>

    <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>

    <a class:selected={segment === 'contact'} href="contact">contact</a>
  </div>
</nav>

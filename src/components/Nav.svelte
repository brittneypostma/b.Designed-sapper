<script>
  export let segment;
</script>

<style>
  nav {
    position: relative;
    display: flex;
    justify-content: center;
  }

  /* clearfix */

  /* .selected {
    position: relative;
    display: inline-block;
  } */

  .selected {
    /* position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
	outline: none; */
    top: 0.15em;
    background-position: 0 100%;
    background-image: linear-gradient(#ccc, #eee);
    border-bottom: 2px solid black;
  }

  .selected:hover {
    background-image: linear-gradient(#ccc, #eee);
  }

  a {
    padding: 1em;
    display: grid;
    position: relative;
    float: left;
    text-decoration: none;
    transition: 0.1s;
    background: linear-gradient(#000, #333) 0 50%;
    background-size: 100% 200%;
    color: #eee;
    text-align: center;
    align-items: center;
    font-family: "Arial Black", Gadget, sans-serif;
    letter-spacing: 1px;
    text-shadow: -2px -2px 2px rgba(0, 0, 0, 0.5), -1px -1px 1px #000;
    top: 2px;
  }

  a:first-child {
    border-radius: 0.7em 0 0 0.7em;
  }

  a:last-child {
    border-radius: 0 0.7em 0.7em 0;
  }

  a:hover {
    top: -0.1em;
    background-image: linear-gradient(to top, #00ffff, #00ffff 25%, #000 30%);
  }

  a::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: 100%;
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

  /* a:focus,
  a:active {
    outline: none;
    top: -0.15em;
    background-position: 0 100%;
    background-image: linear-gradient(#ccc, #eee);
    border-bottom: 2px solid black;
  } */
</style>

<nav>
  <a class:selected={segment === undefined} href=".">home</a>

  <a class:selected={segment === 'about'} href="about">about</a>

  <a class:selected={segment === 'portfolio'} href="portfolio">portfolio</a>

  <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->

  <a rel="prefetch" class:selected={segment === 'blog'} href="blog">blog</a>

  <a class:selected={segment === 'contact'} href="contact">contact</a>

</nav>

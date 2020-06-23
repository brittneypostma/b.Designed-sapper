<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import { fly } from "svelte/transition";
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="wrapper">
  <h1>Blog Posts</h1>
  <div in:fly={{ x: 200, duration: 700 }} class="grid-logs">
    {#each posts as post}
      <div class="card">
        <a rel="prefetch" href="blog/{post.slug}">
          <div>
            <img src={post.image} alt={post.alt} />
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </div>
        </a>
      </div>
    {/each}
    <div class="card">
      <a rel="prefetch" href="https://console-logs.netlify.app/logs">
        <div>
          <img
            style="width: 150%; position: relative; right: 25%;"
            src="./portfolio/logs.jpg"
            alt="console-logs" />
          <h3>Console Logs</h3>
          <p>Multiple dev blog posts.</p>
        </div>
      </a>
    </div>
  </div>
</div>

<style>
  .wrapper {
    align-self: flex-start;
  }

  .grid-logs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    grid-gap: 1em;
    justify-items: center;
    margin: 0 auto;
    width: 75%;
  }

  .card {
    list-style-type: none;
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.1s linear; /* Safari */
    transition: all 0.1s linear;
    margin-bottom: 1em;
    line-height: 1.5;
    text-align: center;
    overflow: hidden;
    max-width: 225px;
  }

  img {
    width: 225px;
    position: relative;
    height: 200px;
    transform: scale(1.1);
  }

  a {
    color: #333;
    text-decoration: none;
    background: #fff;
    display: block;
  }

  a:visited {
    color: #333;
  }

  .card:hover {
    transform: scale(1.05);
  }
  .card:active {
    transform: scale(0.95);
  }
</style>

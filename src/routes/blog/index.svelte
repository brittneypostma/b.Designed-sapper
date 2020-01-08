<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .grid-logs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1em;
    justify-items: center;
    margin: 0 auto;
    width: 75%;
  }

  .card {
    list-style-type: none;
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
    width: 100%;
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

<svelte:head>
  <title>Blog Posts</title>
</svelte:head>

<h1>blog</h1>

<div class="grid-logs">
  {#each posts as post}
    <div class="card">
      <a rel="prefetch" href="blog/{post.slug}">
        <div>
          <img src={post.image} alt={post.alt} />
          <h3>{post.title}</h3>
          <p>{post.printDate}</p>
        </div>
      </a>
    </div>
  {/each}
</div>

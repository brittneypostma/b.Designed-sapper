<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .post-page {
    width: 75%;
    margin: 0 auto;
  }

  .content :global(blockquote) {
    background: #f9f9f9;
    color: #111;
    border-left: 10px solid#ccc;
    margin: 1.5em 10px;
    padding: 0.1em 10px;
  }

  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  @media only screen and (max-width: 900px) {
    .post-page {
      width: 95%;
      margin: 0 auto;
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="post-page">

  <div class="post-header">
    <a rel="prefetch" href="blog">go back</a>
    <h1>{post.title}</h1>
  </div>

  <div class="content">
    {@html post.html}
  </div>

</div>

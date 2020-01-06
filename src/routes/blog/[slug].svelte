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
  h1 {
    font-size: 7vh;
    font-weight: 500;
  }
  .post-page {
    width: 50%;
    margin: 0 auto;
  }

  .content :global(hr) {
    height: 2px;
    border: 0;
    border-top: 2px dotted rgb(155, 50, 43, 0.75);
    margin: 2em 0 1em;
    padding: 0;
  }

  .content :global(blockquote) {
    background: #f9f9f9;
    color: #777;
    border-left: 10px solid#ccc;
    margin: 1.5em 10px;
    padding: 0.1em 10px;
  }

  .content :global(img) {
    max-width: 100%;
  }

  .content :global(p) {
    font-size: 2.25vh;
    font-weight: 100;
    color: #333;
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

  @media only screen and (min-width: 901px) and (max-width: 1400px) {
    .post-page {
      width: 75%;
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

<!-- <div style="display: grid; grid-template-columns: 1fr 1fr; justify-items: center; align-items: center"></div> -->

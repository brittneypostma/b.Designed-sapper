<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  .grid {
    display: grid;
    grid-template-rows: 60px 1fr 0;
    position: absolute;
    top: 0;
    background: transparent url(/twinkling.png) repeat;
    width: 100%;
    height: 100%;
    animation: move-twink-back 500s linear infinite;
  }

  main {
    background: url("/me.png") no-repeat fixed bottom right;
    position: relative;
    padding: 2em;
    margin: 1em auto 0;
    box-sizing: border-box;
    width: 100%;
  }

  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 5000px;
    }
  }

  @media only screen and (max-width: 600px) {
    main {
      background: none;
    }
  }
</style>

<div class="grid">
  <Nav {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

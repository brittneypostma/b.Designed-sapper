<script>
  import { stores } from "@sapper/app";
  import Nav from "../components/Nav.svelte";
  import Spinner from "../components/Spinner.svelte";
  import Footer from "../components/Footer.svelte";

  const { preloading } = stores();
  export let segment;
</script>

<div class="grid">

  <Nav {segment} />
  {#if !$preloading}
    <main>
      <slot />
    </main>
  {:else}
    <Spinner />
  {/if}
  <Footer />
</div>

<style>
  .grid {
    display: grid;
    grid-template-rows: 70px 1fr 0;
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
    padding-bottom: 60px;
    box-sizing: border-box;
    width: 100%;
    display: grid;
    align-items: center;
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

    .grid {
      -webkit-animation: none !important;
      -moz-animation: none !important;
      -o-animation: none !important;
      -ms-animation: none !important;
      animation: none !important;
    }
  }
</style>

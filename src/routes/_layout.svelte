<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  div {
    display: grid;
    grid-template-rows: 60px 1fr 50px;
    position: absolute;
    top: 0;
    width: 100%;
  }
  main {
    position: relative;
    padding: 2em;
    margin: 1em auto 0;
    box-sizing: border-box;
    width: 100%;
  }

  .me {
    background: url("/me.png") no-repeat fixed bottom right;
    width: 100%;
    height: 100%;
    position: -webkit-sticky;
    position: sticky;
  }

  .twinkling {
    background: transparent url(/twinkling.png) repeat;
    width: 100%;
    height: 100%;
    animation: move-twink-back 500s linear infinite;
  }

  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 5000px;
    }
  }
</style>

<div class="twinkling" />
<div class="me" />

<div>
  <Nav {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

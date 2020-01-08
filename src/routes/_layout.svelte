<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  div {
    height: 100%;
    display: grid;
    grid-template-rows: 60px 1fr 50px;
  }

  main {
    position: relative;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    background: url("/me.png") no-repeat fixed bottom right;
  }

  .stars,
  .twinkling {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .stars {
    background: #000 url(/stars.png) repeat;
    z-index: -2;
    position: fixed;
    -moz-animation: move-twink-back 200s linear infinite;
    -ms-animation: move-twink-back 200s linear infinite;
    -o-animation: move-twink-back 200s linear infinite;
    -webkit-animation: move-twink-back 200s linear infinite;
    animation: move-twink-back 200s linear infinite;
  }

  .twinkling {
    background: transparent url(/twinkling.png) repeat;
    z-index: -1;
    position: fixed;
    -moz-animation: move-twink-back 400s linear infinite;
    -ms-animation: move-twink-back 400s linear infinite;
    -o-animation: move-twink-back 400s linear infinite;
    -webkit-animation: move-twink-back 400s linear infinite;
    animation: move-twink-back 400s linear infinite;
  }

  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 5000px;
    }
  }
  @-webkit-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 5000px;
    }
  }
  @-moz-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 5000px;
    }
  }
  @-ms-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 5000px;
    }
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(-2000px);
    }
  }
</style>

<div>
  <div class="stars" />
  <div class="twinkling" />
  <Nav {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .spinner {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: transparent;
  }

  .ring {
    width: 375px;
    height: 375px;
    margin-top: 7%;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: radial-gradient(
      transparent 2%,
      transparent,
      rgba(0, 255, 255, 0.9)
    );
    animation: spin3D 2.2s linear 0s infinite;
  }

  .ring-center {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 50%;
  }

  @keyframes spin3D {
    from {
      transform: rotate3d(1, 1, 1, 360deg);
    }
    to {
      transform: rotate3d(0deg);
    }
  }

  .planet {
    width: 300px;
    height: 300px;
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 60px -20px rgba(106, 185, 190, 0.72),
      -14px -15px 40px -10px rgba(97, 97, 97, 0.23);
    left: 50%;
    top: 50%;
    margin: -150px;
  }
  .planet .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: inset -10px -10px 40px #032325,
      inset 10px 10px 30px -10px rgba(159, 255, 226, 0.6);
    border-radius: 50%;
  }
  .planet .clouds {
    background: url(../clouds.png) repeat-x;
    width: 300px;
    height: 300px;
    position: absolute;
    border-radius: 50%;
    animation: translateBackground 30s infinite linear;
    opacity: 0.4;
  }
  .planet .background {
    animation: translateBackground 40s infinite linear;
    background-image: url(../planet.png),
      radial-gradient(rgb(2, 231, 231), rgb(0, 66, 66));
    background-repeat: repeat-x;
    background-color: rgb(0, 255, 255);
    width: 300px;
    height: 300px;
    position: absolute;
    border-radius: 50%;
  }
  .planet .wrap {
    width: 300px;
    height: 300px;
    position: absolute;
    border-radius: 50%;
    animation: rotatePlanet 150s infinite linear;
  }
  @keyframes translateBackground {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1000px;
    }
  }
  @keyframes rotatePlanet {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(-360deg);
    }
  }

  /* Spinner inspiration from https://codepen.io/artyom-ivanov/pen/QjOYbO*/
</style>

<div class="spinner">
  <div class="ring" />
  <div class="ring-center" />
  <div class="planet">
    <div class="wrap">
      <div class="background" />
      <div class="clouds" />
    </div>
    <div class="mask" />
  </div>
</div>

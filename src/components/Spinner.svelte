<style>
  .spinner-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: transparent;
  }

  .leo-border-1 {
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: linear-gradient(
      0deg,
      rgba(63, 249, 220, 0.1) 33%,
      rgba(63, 249, 220, 1) 100%
    );
    animation: spin3D 1.8s linear 0s infinite;
  }

  .leo-core-1 {
    width: 100%;
    height: 100%;
    background-color: #37474faa;
    border-radius: 50%;
  }

  .leo-border-2 {
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: linear-gradient(
      0deg,
      rgba(255, 171, 145, 0.1) 33%,
      rgba(255, 171, 145, 1) 100%
    );
    animation: spin3D 2.2s linear 0s infinite;
  }

  .leo-core-2 {
    width: 100%;
    height: 100%;
    background-color: #ffab91aa;
    border-radius: 50%;
  }

  @keyframes spin3D {
    from {
      transform: rotate3d(0.5, 0.5, 0.5, 360deg);
    }
    to {
      transform: rotate3d(0deg);
    }
  }
</style>

<div class="spinner-box">
  <div class="leo-border-1">
    <div class="leo-core-1" />
  </div>
  <div class="leo-border-2">
    <div class="leo-core-2" />
  </div>
</div>

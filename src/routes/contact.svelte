<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    margin: 0 auto;
  }

  .envelope {
    margin-top: 0;
    position: relative;
    width: 40%;
    height: 500px;
    background: radial-gradient(#222, #111) 0 50%;
  }
  .flap {
    transition: 0.5s all linear;
    fill: whitesmoke;
    animation: open-flap 3s ease-in-out forwards;
    transform-origin: 0 0 0;
  }

  .form {
    position: absolute;
    top: 0;
    max-width: 420px;
  }

  input[type="text"],
  input[type="email"] {
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #cc6666;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
  }

  input[type="textarea"] {
    height: 150px;
    width: 100%;
    line-height: 150%;
    resize: vertical;
  }

  input[type="submit"] {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    width: 100%;
    background: #cc6666;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
  }

  input[type="submit"]:hover {
    background: #cc4949;
  }

  @keyframes open-flap {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(120deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  @media only screen and (max-width: 600px) {
    .envelope {
      width: 100%;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    .envelope {
      width: 75%;
    }
  }

  @media only screen and (min-width: 1001px) and (max-width: 1400px) {
    .envelope {
      width: 70%;
    }
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<h1>Contact Me</h1>
<div class="container">
  <div id="envelope" class="envelope">
    <svg
      id="flap"
      class="flap"
      height="45%"
      width="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none">
      <polygon points="0,0 100,0 50,100" />
    </svg>
    <form class="form" name="contact" method="POST" data-netlify="true">
      <input type="text" name="first-name" placeholder="First Name" />
      <input type="text" name="last-name" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <input type="textarea" name="message" placeholder="Message" />
      <input type="submit" value="Send" />
    </form>
  </div>

</div>

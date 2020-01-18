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

    display: grid;
    justify-items: center;
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
    width: 90%;
    height: 100%;
    display: grid;
    justify-content: stretch;
    align-content: center;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    font-size: 18px;
  }

  input[type="text"],
  input[type="email"] {
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #00cece;
    transition: all 0.3s;
    padding: 13px;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
  }

  input[type="email"] {
    grid-column: 1/-1;
  }

  .subject {
    grid-column: 1/-1;
  }

  textarea {
    border-radius: 5px;
    grid-column: 1/-1;
    height: 100px;
    line-height: 150%;
    resize: vertical;
    margin: 0;
    vertical-align: top;
  }

  input[type="submit"] {
    grid-column: 1/-1;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    letter-spacing: 3px;
    font-size: 3vh;
    font-style: italic;
    color: rgb(226, 226, 226);
    text-shadow: 2px 2px 2px rgba(36, 36, 36, 0.5),
      3px 3px 3px rgba(0, 0, 0, 0.8), 0px 0px 1px #111,
      #333 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px;
    width: 100%;
    background: #00cece;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    padding: 10px 0;
    transition: all 0.3s ease-in;
  }

  input[type="submit"]:hover {
    background-color: #025f5f;
    background-image: linear-gradient(to top, #00ffff, #000 7%);
  }

  @keyframes open-flap {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(120deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg);
      opacity: 0.2;
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
    <form
      class="form"
      name="contact"
      method="POST"
      Content-Type="application/x-www-form-urlencoded"
      netlify
      data-netlify-honeypot="bot-field"
      action="/contact">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="first-name" placeholder="First Name" required />
      <input type="text" name="last-name" placeholder="Last Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="subject" placeholder="Subject" class="subject" />
      <textarea name="message" placeholder="Message" required />
      <input type="submit" name="submit" value="Send" />
    </form>
  </div>

</div>

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bulma/css/bulma.css';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <div>
    <article class="message is-success">
  <div class="message-header">
    <p>CutiePie 💖</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
     <strong>CutiePie ❤️</strong> as I gaze into your eyes, my heart skips a beat, and I am overcome with a feeling of pure joy and admiration, for you are the most beautiful and intelligent person I have ever met, and I cannot imagine my life without you in it, so with every fiber of my being, I humbly ask, will you do me the great honor of sharing life's joys and challenges together, and building a future filled with love, trust, and mutual respect 💞 

  </div>
</article>
    <App/>
</div>

)


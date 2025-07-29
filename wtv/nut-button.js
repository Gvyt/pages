class NutButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    
    shadowRoot.innerHTML = `
      <style>
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #4CAF50; /* Green */
          color: white;
          border: none;
          border-radius: 5px;
        }
        button:hover {
          background-color: #45a049;
        }
      </style>
      <button id="myButton">
        <slot></slot> </button>
      <audio id="nut" src="/wtv/nut.wav"></audio> `;
  }

  connectedCallback() {
    const button = this.shadowRoot.getElementById('myButton');
    const audio = this.shadowRoot.getElementById('myAudio');

    button.addEventListener('click', () => {
      audio.play();
    });
  }


customElements.define('nut', NutButton);

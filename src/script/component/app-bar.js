class AppBar extends HTMLElement {

    // constructor untuk shadow dom
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    // method connectedCallback
    connectedCallback (){
        //langsung render
        this.render();
    }

    //fungsi render
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: cornflowerblue;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2 {
            padding: 16px;
        }
    </style>
    <h2>Club Finder</h2>`;

    }
}

customElements.define("app-bar", AppBar);
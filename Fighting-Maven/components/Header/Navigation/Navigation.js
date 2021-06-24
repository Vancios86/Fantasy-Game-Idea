//will create the initial navigation for a non signed-in user

class Navigation extends HTMLElement {
    constructor() {
    super();
    this.innerHTML = `
        <div class="navigation">
            <ul>
                <li id="events">Events</li>
                <li>Sign-In</li>
            </ul>
        </div>    
    `
    }
}

window.customElements.define('nav-area', Navigation)
export default Navigation
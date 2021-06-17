//will create the initial navigation for a non signed-in user

class Navigation extends HTMLElement {
    constructor() {
    super();
    this.innerHTML = `
        <div class="navigation">
            <ul>
                <li>About Us</li>
                <li>Events</li>
                <li>Sign-In<li>
            </ul>
        </div>    
    `
    }
}

window.customElements.define('navigation', Navigation)
export default Navigation
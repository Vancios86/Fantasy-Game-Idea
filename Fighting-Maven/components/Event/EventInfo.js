class EventInfo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="eventInfo">
            <h1 class="eventName">${this.getAttribute('name')}</h1> 
            <h2 class="mainEvent">${this.getAttribute('mainEvent')}</h2>
            <h2 class="date">${this.getAttribute('date')}</h2>
        </div>
        `
    }
}

window.customElements.define('event-info', EventInfo)
export default EventInfo
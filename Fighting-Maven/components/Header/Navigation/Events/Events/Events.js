class Events extends HTMLElement {
    constructor() {
        super();
        this._eventsList = [];
    }
    get data() {
        return this._eventsList;
    }
    set data(data) {
        this._eventsList = data;
        console.log(this._eventsList);
        this.innerHTML = `
            <div class="eventsPage">
                ${this._eventsList.length ? this._eventsList.map(eventInfo => 
                    `<event-info
                        name="${eventInfo.name}"
                        mainEvent="${eventInfo.mainEvent}"
                        date="${eventInfo.date}"
                    >
                     </event-info>`
                ).join('') : `<p>events not found</p>`}
            </div>
            `
    }
}




customElements.define('events-page', Events)
export default Events
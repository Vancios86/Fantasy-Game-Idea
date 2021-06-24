//here I will import all the components

import Navigation from "./components/Header/Navigation/Navigation.js";
import Events from "./components/Events/Events.js";
import EventInfo from "./components/Event/EventInfo.js";


const events = document.getElementById('events');
events.addEventListener("click", (e) => {
    fetch('./data/events.json')
    .then(response => response.json())
    .then(data => {
         const eventsPage = document.createElement('events-page');
         eventsPage.data = data;
         const container = document.querySelector('main');
         container.innerHTML = `<></>`
         container.appendChild(eventsPage)
    });

})
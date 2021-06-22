//here I will import all the components

import Navigation from "./components/Header/Navigation/Navigation.js";
import About from "./components/Header/Navigation/About/About.js";
import Events from "./components/Header/Navigation/Events/Events/Events.js";
import EventInfo from "./components/Header/Navigation/Events/EventInfo.js";


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
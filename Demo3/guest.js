console.log("Guest JS Connected!");

// Event Data

let events = [
    {
        id: 1,
        title: "Tech Seminar",
        date: "2026-11-12",
        venue: "Main Auditorium",
        category: "Seminar",
        description: "Join our campus technology seminar.",
        seats: 100,
        registered: 25,
        status: "approved"
    },
    {
        id: 2,
        title: "Football Cup",
        date: "2026-11-15",
        venue: "Ground",
        category: "Sports",
        description: "Join our campus sports seminar.",
        registered: 40,
        seats: 50,
        status: "approved"
    },
    {
        id: 3,
        title: "Cultural Night",
        date: "2026-11-20",
        venue: "Hall",
        category: "Cultural",
        description: "Join our campus cultural seminar.",
        seats: 100,
        registered: 60,
        status: "approved"
    }
]; 

// Selected Category

let selectedCategory = "All";

// Display Events

function showEvents() {

    let eventList = document.getElementById("eventList");

    if (eventList == null) {
        return;
    }

    let searchInput = document.getElementById("searchInput");

    let searchText = "";

    if (searchInput != null) {
        searchText = searchInput.value.toLowerCase();
    }

    let approvedEvents = [];

    // Filter Events

    for (let i = 0; i < events.length; i++) {

        if (events[i].status == "approved") {

            if (selectedCategory == "All" ||
                events[i].category == selectedCategory) {

                if (events[i].title.toLowerCase().includes(searchText)) {

                    approvedEvents.push(events[i]);

                }
            }
        }
    }

    // Sort Events

    let sortEvents = document.getElementById("sortEvents");

    if (sortEvents != null) {

        if (sortEvents.value == "ascending") {

            approvedEvents.sort(function(a, b) {
                return new Date(a.date) - new Date(b.date);
            });

        }

        else if (sortEvents.value == "descending") {

            approvedEvents.sort(function(a, b) {
                return new Date(b.date) - new Date(a.date);
            });

        }
    }

    // Clear Old Events

    eventList.innerHTML = "";

    // No Events Message

    if (approvedEvents.length == 0) {

        eventList.innerHTML = "<p>No events found.</p>";

        return;
    }

    // Create Event Cards

    for (let i = 0; i < approvedEvents.length; i++) {

        let event = approvedEvents[i];

        let card = document.createElement("div");

        card.className = "event-card";

        card.innerHTML =

            '<div class="event-image">image</div>' +

            '<div class="event-content">' +

            '<h3>' + event.title + '</h3>' +

            '<p>' + event.date + ' | ' + event.venue + '</p>' +

            '<a href="event.html?id=' + event.id + '">' +
            '<button type="button" class="detailsButton">Details</button>' +
            '</a>'

            '</div>';

        eventList.appendChild(card);

    }
}

// Search Event

function searchEvent(event) {

    event.preventDefault();

    showEvents();

}

// Filter All Events

function filterAll() {

    selectedCategory = "All";

    showEvents();

}

// Filter Seminar

function filterSeminar() {

    selectedCategory = "Seminar";

    showEvents();

}

// Filter Sports

function filterSports() {

    selectedCategory = "Sports";

    showEvents();

}

// Filter Cultural

function filterCultural() {

    selectedCategory = "Cultural";

    showEvents();

}


// Home Page Button Connections

if (document.getElementById("eventList") != null) {

    let searchForm = document.getElementById("searchForm");

    if (searchForm != null) {
        searchForm.addEventListener("submit", searchEvent);
    }

    let allBtn = document.getElementById("allBtn");

    if (allBtn != null) {
        allBtn.addEventListener("click", filterAll);
    }

    let seminarBtn = document.getElementById("seminarBtn");

    if (seminarBtn != null) {
        seminarBtn.addEventListener("click", filterSeminar);
    }

    let sportsBtn = document.getElementById("sportsBtn");

    if (sportsBtn != null) {
        sportsBtn.addEventListener("click", filterSports);
    }

    let culturalBtn = document.getElementById("culturalBtn");

    if (culturalBtn != null) {
        culturalBtn.addEventListener("click", filterCultural);
    }

    let sortEvents = document.getElementById("sortEvents");

    if (sortEvents != null) {
        sortEvents.addEventListener("change", showEvents);
    }

    showEvents();

}

let params = new URLSearchParams(window.location.search);

let eventId = params.get("id");

if (eventId == "1") {
    document.getElementById("techBanner").style.display = "block";
}

else if (eventId == "2") {
    document.getElementById("sportsBanner").style.display = "block";
}

else if (eventId == "3") {
    document.getElementById("culturalBanner").style.display = "block";
}
// JS за случайно място
const places = [
    "Sticky Fingers music club",
    "Gothenburg Concert Hall",
    "Local underground metal venues"
];

function showPlace() {
    const index = Math.floor(Math.random() * places.length);
    document.getElementById('place').textContent = places[index];
}

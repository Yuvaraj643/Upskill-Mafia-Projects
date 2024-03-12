function changeColor(box, color) {
    box.classList.add(color);
}
function submitName() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("name").innerText = name;
}
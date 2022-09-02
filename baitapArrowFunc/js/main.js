const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"]

dom("#colorContainer").addEventListener("click", (evt) => {
    const elColor = evt.target.getAttribute("color");
    const activeColor = document.querySelectorAll(".color-button")
    const house = dom("#house")
    const result = (elColor) => {
        return colorList.find((color) => color === elColor)
    }

    if (result) {
        house.className = `house ${elColor}`;
    }
    const checkIndex = colorList.findIndex((color) => color === elColor)
    let element = dom(".active")
    if (element !== null) {
        element.classList.remove("active");
    }
    activeColor[checkIndex].classList.add("active");

})
function dom(selector) {
    return document.querySelector(selector);
}
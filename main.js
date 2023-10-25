const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBoxes)

// checkBoxes()

function checkBoxes() {
    const triggerBottom =window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // getBoundingClientRect() Return the size of an element and its position relative to the viewport
        // by adding top we getting the top value


        if(boxTop < triggerBottom) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}
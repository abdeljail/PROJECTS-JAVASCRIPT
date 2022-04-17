/// create Elements
const header_questions = document.querySelectorAll(".header")
let check = false

// create function add class in element 
const add_class_element = (element, name_class) => {
    element.classList.add(name_class)
}
// create function add class in element 
const remove_class_element = (element, name_class) => {
    element.classList.remove(name_class)
}
// create function toggle class in element 
const toggle_class_element = (element, name_class) => {
    element.classList.toggle(name_class)
}

header_questions.forEach((el, idx) => {
    el.addEventListener("click", () => {
        if (el.parentElement.classList.contains("avtive-height")) {
            remove_class_element(el.parentElement, "avtive-height")
            return;
        }
        abdo = document.querySelector(".avtive-height")
        if (abdo != null)
            remove_class_element(abdo, "avtive-height")
        add_class_element(el.parentElement, "avtive-height")
    })
})
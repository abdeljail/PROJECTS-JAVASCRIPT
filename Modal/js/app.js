/// create Elements
const close_model = document.getElementById("close-model")
const open_model = document.getElementById("open-model")
const overly = document.getElementById("overly")
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

close_model.addEventListener("click",()=>{
    remove_class_element(overly,"overly")
    remove_class_element(overly.firstElementChild,"show")
})
open_model.addEventListener("click",()=>{
    add_class_element(overly,"overly")
    add_class_element(overly.firstElementChild,"show")
})
// create element 

const btn_left = document.getElementById("btn_left")
const btn_right = document.getElementById("btn_right")

const image_src = document.getElementById("img")
const full_name = document.getElementById("full_name");
const specialty = document.getElementById("specialty");
const descreption = document.getElementById("descreption");


// data users 

const data_users = [{
    id: 1,
    image_src: "./images/men.PNG",
    full_name: "abdeljalil khalal",
    specialty: "developer font end",
    descreption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum reiciendis dicta sed non magnam recusandae nulla libero assumenda eum. Aliquid facilis sint consequatur eum quos ?"
  },
  {
    id: 2,
    image_src: "./images/woman.PNG",
    full_name: "ranya djak",
    specialty: "developer design",
    descreption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum reiciendis dicta sed non magnam recusandae nulla libero assumenda eum. "
  },
  {
    id: 3,
    image_src: "./images/men1.PNG",
    full_name: "abdeljalil hosin",
    specialty: "developer back end",
    descreption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum reiciendis dicta sed non magnam recusandae nulla"
  },
]

// creatte counter

let counter = 0;

// create function in change info

let change_info_user = (position) => {
  console.log(position)
  image_src.src = data_users[position].image_src
  full_name.textContent = data_users[position].full_name
  specialty.textContent = data_users[position].specialty
  descreption.textContent = data_users[position].descreption
}

// create funtion add class in elment
let add_class_element = (element) => element.classList.add("not_click")



// create funtion remove class in elment
let remove_class_element = (element) => element.classList.remove("not_click")

// create function change check and add class add in element
let check_add_element = (element) => {
  add_class_element(element)
  element.dataset.check = "off"
}

// create function change check and remove class add in element
let check_remove_element = (element) => {
  remove_class_element(element)
  element.dataset.check = "on"
}


change_info_user(counter)

btn_left.addEventListener("click", () => {
  if (counter <= 0) return;

  if (btn_right.dataset.check === "off") check_remove_element(btn_right)

  counter--

  change_info_user(counter);

  if (counter <= 0) check_add_element(btn_left)
})
btn_right.addEventListener("click", () => {

  if (counter >= data_users.length - 1) return;

  if (btn_left.dataset.check === "off")  check_remove_element(btn_left)

  counter++

  change_info_user(counter);

  if (counter >= data_users.length - 1) check_add_element(btn_right)

})
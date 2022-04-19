// create elements buttons filter food
const boxBtns = [...document.getElementById("box-btns").children];
let box_packs_foods = document.getElementById("box-packs-foods")


// arrary data foods 

const arrary_foods = [{
    /* 
         img: ""  =>  add src for images
    */
    cat: "beackfast",
    img: "",
    heading: "Buttermilk Pancakes",
    prix: "20$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  },
  {
    cat: "shakes",
    img: "",
    heading: "Quarantine Buddy",
    prix: "20$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "dinner",
    img: "",
    heading: "Diner Double",
    prix: "15$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "shakes",
    img: "",
    heading: "Godzilla Milkshake",
    prix: "14$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "beackfast",
    img: "",
    heading: "Country Delight",
    prix: "20$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "beackfast",
    img: "",
    heading: "Bacon Overflow",
    prix: "19$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "dinner",
    img: "",
    heading: "Steak Dinner",
    prix: "32$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "lunch",
    img: "",
    heading: "Egg Attack",
    prix: "30$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "dinner",
    img: "",
    heading: "Lorem ipsum dolor",
    prix: "54$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "lunch",
    img: "",
    heading: "American Classic",
    prix: "45$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  }, {
    cat: "shakes",
    img: "",
    heading: "Oreo Dream",
    prix: "45$",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio impedit labore quidem voluptatibus itaque omnis explicabo, nemo voluptate laboriosam, exercitationem et corporis dolore ratione. Necessitatibus, ullam magni. Optio, placeat!"
  },
]


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
// create function contains class in element 
const contains_class_element = (element) => {
  return element.classList.contains("active-btn") ? true : false
}


// create function filter food 
let filter_food = (cat_food) => cat_food === "all" ? arrary_foods : arrary_foods.filter((food) => food.cat === cat_food)


// create function print food

let print_food = (arrary) => {

  /*
          replace in cat.img and add tag img 
  */

  add_class_element(box_packs_foods, "loading")
  box_packs_foods.innerHTML = "";
  setTimeout(() => {
    arrary.forEach(ele => {
      remove_class_element(box_packs_foods, "loading")
      box_packs_foods.innerHTML += `
                                  <div class="pack-food">
                                    <div>
                                     images ${ele.heading}
                                    </div>
                                    <h2>${ele.heading}</h2>
                                    <span>${ele.prix}</span>
                                    <p>${ele.p}</p>
                                  </div>
      `
    })
  }, 1000)


}



print_food(filter_food("all"));

// for for button filter food in menu 

boxBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (contains_class_element(btn)) return;
    remove_class_element(document.querySelector(".active-btn"), "active-btn")
    add_class_element(btn, "active-btn")
    print_food(filter_food(btn.dataset.food));
  })
});
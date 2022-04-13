window.addEventListener("DOMContentLoaded", (event) => {
  // create elements
  const navigation = document.getElementById("navigation");
  const btn_show = document.getElementById("btn-show");

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


  if (window.innerWidth <= 500) {
    add_class_element(navigation, "not-show");
    remove_class_element(btn_show, "not-show")
  }

  btn_show.addEventListener("click", () => {
    toggle_class_element(navigation, "not-show")
    toggle_class_element(navigation, "col")
  })

  btn_show.addEventListener("blur", () => {
    toggle_class_element(navigation, "not-show")
    toggle_class_element(navigation, "col")
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 500) {
      add_class_element(navigation, "not-show");
      remove_class_element(btn_show, "not-show")
    } else {
      remove_class_element(navigation, "not-show");
      add_class_element(btn_show, "not-show");
      // if (navigation.classList.contains("col")) {

      //   toggle_class_element(navigation, "col")
      // }
    }
  });
});
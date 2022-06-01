// create elements
const topHeader = document.getElementById("top-header")
const boxBtnsScroll = document.querySelectorAll("[data-scroll]");

// create function add class in element 
const add_class_element = (element, name_class) => {
  element.classList.add(name_class)
}
// create function add class in element  
const remove_class_element = (element, name_class) => {
  element.classList.remove(name_class)
}



// create funtion add  scroll window in in section 
let scroll_window = (element) => {

  if (element.offsetTop === window.scrollY)
    return
  window.scrollTo({
    top: element.offsetTop - topHeader.clientHeight,
    behavior: 'smooth'
  });

}

boxBtnsScroll.forEach(btn => {
  btn.addEventListener("click", (e) => {
    scroll_window(document.getElementById(e.currentTarget.dataset.scroll))
  })
})

window.addEventListener("scroll", (e) => {
  if (e.currentTarget.scrollY >= topHeader.parentElement.clientHeight / 2) {
    add_class_element(topHeader, "scroll-top-header")
  } else {
    remove_class_element(topHeader, "scroll-top-header")
  }
})



// var rect = div.getBoundingClientRect();
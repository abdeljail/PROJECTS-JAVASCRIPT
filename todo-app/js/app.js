
// select element parent of children task 
const box_tasks = selectElement("boxTasks")

// select element for show number tasks in DOM
const count_task = selectElement("countTask")

// select element button for add task
const btn_add_task = selectElement("addTask")

// select element input for add event click for add task
const input_task = selectElement("task")

// select element button for save task
const btn_save_task = selectElement("saveTask")

// select element button for delete task
const btn_delete_task = selectElement("deleteTask")


//  show daynamic message 
const message = selectElement("message")


// show overly 

const overly = selectElement("model")

// box content mwssage to delete task
const remove_item = selectElement("removeItem")


// input [type="checkbox"] for check  in remove tack detele
const detele = selectElement("detele")

// button for delete task 

const remove_tack = selectElement("removeTack")

const [btn_show_message] = message.getElementsByTagName("span")

// arrary for stock the tasks
let tasks = []

// create function for return element 
function selectElement(name) {
    return document.getElementById(name)
}

// create function add class in element 
const add_class_element = (element, name_class) => {
    element.classList.add(name_class)
}

// create function add class in element  
const remove_class_element = (element, name_class) => {
    element.classList.remove(name_class)
}

// create function add class in element  
const has_class_element = (element, name_class) => {
    return element.classList.contains(name_class)
}

// set number tasks in element DOM 
const set_count_tasks = () =>
    count_task.lastElementChild.innerHTML = tasks.length

/** this function  find element 
  *    if it exsist return Object
  *    else return undefined 
*/
const check_task_in_array = () =>
    tasks.findIndex(({ task }, idx) => task === input_task.value);
// tasks.find(({ task }, idx) => task === input_task.value);

/**
 * function  check input value is empty and length <=> 6   or not
 *  if  input value not empty and length > 6  return true
 *  else return false
 * 
 */
const checkInput = () => {

    if (input_task.value === "" || input_task.value.length <= 6)
        return false;

    return true
}

/** this function  return 
 *    true is add in task
 *    false is not add in task 
*/
const add_to_task = () => {

    /** this function check_task_in_array find element 
     *   if it exsist return Object
     *   else return undefined 
    */

    if (check_task_in_array() !== -1)
        return false

    let task_object = {
        id: tasks.length + 1,
        task: input_task.value,
        date: new Date().toISOString().split('T')[0]
    }

    tasks.push(task_object)

    // loop in tasks
    print_task(task_object, false)

    // set numbre array tasks in element box_tasks DOM
    set_count_tasks()

    task_object = {}

    input_task.value = ""

    return true
}

/** this function  return 
 *    true is add in task  of localStorage using function setItem
 *    false is not add in task 
 *    and select all elements in has class ".mo-save"
 *    and loop for each elements
*/
const save_to_task = () => {

    const number_tasks_no_save = [...box_tasks.querySelectorAll(".no-save")]

    try {

        number_tasks_no_save.forEach(el => {
            let task = tasks.find(({ id }, idx) => id === +el.dataset.id);
            localStorage.setItem(`task${el.dataset.id}`, JSON.stringify(task))
            el.classList.replace("no-save", "save")
            el.removeAttribute("data-id")
        })

        return true

    } catch (e) {

        console.log(e)

        return false
    }

}

/** this function  return 
 *    true is add in task  of localStorage using function setItem
 *    false is not add in task 
 *    and select all elements in has class ".mo-save"
 *    and loop for each elements
*/
const delete_to_task = () => {

    try {

        const number_tasks_no_delete = [...box_tasks.querySelectorAll(".no-save")]

        if (Boolean(number_tasks_no_delete.length)) {

            for (const item of number_tasks_no_delete) {

                let idx = tasks.findIndex(({ id }, idx) => id === +item.dataset.id);

                if (idx !== -1) {

                    tasks.splice(idx, 1)
                    item.remove()
                    break

                }

            }

        } else {

            for (const [key, value] of Object.entries(localStorage)) {

                let { id } = JSON.parse(value)

                let idx = tasks.findIndex(({ id }, idx) => id === +remove_item.dataset.id);

                if (idx !== -1) {

                    tasks.splice(idx, 1)
                    localStorage.removeItem(`task${id}`)
                    box_tasks.children[idx].remove()
                    break

                }

            }

        }

        return true

    } catch (e) {

        console.log(e)

        return false
    }

}


/** this function rerun in Promise 
 *     add task return true
 *     not add return false
 */
const send_task = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (add_to_task())
                return resolve(true)

            return reject(false)

        }, 2000)

    })

}

/** this function retun in Promise 
 *     save task return true
 *     not save return false
 */
const save_task = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (save_to_task())
                return resolve(true)

            return reject(false)

        }, 2000)

    })

}


/** this function retun in Promise 
 *     delete task return true
 *     not delete return false
 */
function delete_task() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (delete_to_task())
                return resolve(true)

            return reject(false)

        }, 2000)

    })

}


function show_box_delete() {

    add_class_element(overly, "show")
    add_class_element(remove_item, "show")
    remove_item.setAttribute("data-id", this.dataset.id)

}


/**
 * function print  all tasks
 *  in elenent box_tasks of DOM
 */

const print_task = ({ id, task, date }, isSave = true) => {

    /**
    *  and items task  in DOM
    **/
    let check = isSave
        ? ` class="item-task save" `
        : `   data-id=${id} class="item-task no-save"`;
    box_tasks.innerHTML += `
      <div ${check}>
          <div class="content-task">
              <p>${task}</p>
              <span>
                  <time>${date}</time>
              </span>
          </div>
          <div data-id=${id}>
              <button class="add" type="button" data-id=${id}  data-name="delete task" id="deleteTask${id}"></button>
          </div>
      </div>
  `

    setTimeout(() => {
        box_tasks.querySelector(`[id="deleteTask${id}"]`).onclick = show_box_delete
    }, 1000)
}

/**
 * this function check element has classes  seccess or seccess
 * and remove classes seccess or seccess
 */

const hiden_message = () => has_class_element(message, "seccess")
    ? remove_class_element(message, "seccess")
    : remove_class_element(message, "error")

function clcik_btn_add_task() {

    /**  check this element for has class click
     *      the function has_class_element return true or false
     *          if element has class true
     *           else return false
     */
    if (has_class_element(this, "click"))
        return

    /**  check input task value empty and lenght <= 6 or not empty
     *          if input task value empty add function focus
     */
    if (!checkInput())
        return input_task.focus({ preventScroll: false });

    // this function to add class in element btn_add_task
    add_class_element(this, "click")

    send_task()
        .then(
            (res) => {

                remove_class_element(this, "click")
                add_class_element(message, "seccess")

                if (!btn_save_task.getAttribute("disabled"))
                    return
                btn_save_task.removeAttribute("disabled")

                add_class_element(btn_save_task, "save")

                // this function to add class in element btn_add_task
            },
            function (error) {
                // this function to add class in element btn_add_task
                remove_class_element(btn_add_task, "click")
                add_class_element(message, "error")
            }
        )
}

function clcik_btn_save_tasks() {

    /**  check this element for has class click
     *      the function has_class_element return true  or false
     *          if element has class  true
     *           else return false
     */


    if (has_class_element(this, "click"))
        return

    add_class_element(this, "click")

    save_task().then(
        (res) => {
            btn_save_task.setAttribute("disabled", "disabled")
            remove_class_element(btn_save_task, "click")
            remove_class_element(btn_save_task, "save")
            console.log(res)
        },
        function (error) {
            console.log(error)
        }
    )


}



function click_in_remove_task() {

    detele.setAttribute("disabled", "disabled")
    add_class_element(this, "click-delete")

    delete_task().then(
        (res) => {
            detele.removeAttribute("disabled")
            remove_class_element(this, "click-delete")
            remove_class_element(overly, "show")
            remove_class_element(remove_item, "show")
            remove_item.removeAttribute("data-id")
            console.log(res)
        },
        function (error) {
            console.log(error)
        }
    )

}

// event click for add task 
btn_add_task.addEventListener("click", clcik_btn_add_task)

btn_save_task.addEventListener("click", clcik_btn_save_tasks)

remove_tack.addEventListener("click", click_in_remove_task)


// event click for remove  classes in 
// element overly 
// element remove_item

overly.addEventListener("click", function () {

    if (has_class_element(remove_tack, "show"))
        return

    remove_class_element(this, "show")

    remove_class_element(remove_item, "show")

})

detele.addEventListener("change", function () {
    if (!this.checked) {
        remove_class_element(this.parentElement, "active")
        return remove_class_element(remove_tack, "show")
    }
    add_class_element(remove_tack, "show")
    add_class_element(this.parentElement, "active")
})


// event click for remove class for elemwnt message 
btn_show_message.addEventListener("click", hiden_message)

{

    Object.keys(localStorage).forEach(function (key, idx) {
        let obj = JSON.parse(localStorage[key])
        tasks.push(obj)
        print_task(obj)
        if (idx === localStorage.length - 1)
            set_count_tasks()
    });
}







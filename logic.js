window.addEventListener('load', () => {
    const form = document.querySelector("#input-area");
    const input = document.querySelector("#input");
    const list_el = document.querySelector("#task");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const tasks = input.value;

        if(!tasks) {
            alert("Please enter the task");
            return;
        }
        const tasks_el = document.createElement("div");
        tasks_el.classList.add("tasks");
        
        const tasks_area_el = document.createElement("div");
        tasks_area_el.classList.add("area");

        tasks_el.appendChild(tasks_area_el);

        const tasks_input_el = document.createElement("input");
        tasks_input_el.classList.add("text"); 
        tasks_input_el.type = "text";
        tasks_input_el.value = tasks ;
        tasks_input_el.setAttribute("readonly","readonly");

        tasks_area_el.appendChild(tasks_input_el)

        const tasks_action_el = document.createElement("div");
        tasks_action_el.classList.add("action");

        const tasks_delete_el = document.createElement("button");
        tasks_delete_el.classList.add("delete");
        tasks_delete_el.innerHTML = "Delete"

        tasks_action_el.appendChild(tasks_delete_el);

        tasks_el.appendChild(tasks_action_el);

        list_el.appendChild(tasks_el);

        input.value = "" ;

        tasks_delete_el.addEventListener('click' , (e) => {
            list_el.removeChild(tasks_el);
        });   
    })
})
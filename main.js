window.addEventListener('load', () =>{
    const form = document.getElementById('new-task-form');
    const input = document.getElementById('new-task-input');
    const list_el = document.getElementById('tasks');
    const header = document.querySelector('header');    
    const main = document.querySelector('main');
    const submit = document.getElementById('new-task-submit');
    const clear_all = document.querySelector('.clear-all');
    const clear_done_tasks = document.querySelector('.delete-done-task');
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;
        
        if(!task){
            alert('please input a title!');
            return;
        }
        
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);
        
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        // Start of Actions part 
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_btn = document.createElement('button');
        task_edit_btn.classList.add('edit');
        task_edit_btn.innerHTML = 'Edit';
        
        const task_delete_btn = document.createElement('button');
        task_delete_btn.classList.add('delete');
        task_delete_btn.innerHTML = 'Delete';
        
        const task_check_btn = document.createElement('input');
        task_check_btn.classList.add('checkbox');
        task_check_btn.type = 'checkbox';
                
        task_actions_el.appendChild(task_edit_btn);
        task_actions_el.appendChild(task_delete_btn);
        task_actions_el.appendChild(task_check_btn);
        
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);
        
        input.value = '';

        // Start of Edit button.
        task_edit_btn.addEventListener('click', () => {
            if(task_edit_btn.innerText.toLowerCase() == 'edit'){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_btn.innerText = 'Save';    
            }else{
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_btn.innerText = 'Edit';
            }
        });


        // start of delete Button
        task_delete_btn.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
        
        task_check_btn.addEventListener('click', () => {
            task_check_btn.setAttribute('checked', true);
        });
        
        // start of delete more Buttons
        clear_all.addEventListener('click', () => {
            list_el.remove();
            document.location.reload(true);
        });
    
        clear_done_tasks.addEventListener('click', () => {
                const checked_value = task_check_btn.getAttribute('checked');
                    if(checked_value){
                        task_el.remove();
                    }            
        });      
    });

    let themeButtons = document.querySelectorAll('.theme-buttons');
        themeButtons.forEach(color => {
            color.addEventListener('click', () => {
                let dataColor = color.getAttribute('data-color');
                document.querySelector('body').style.setProperty('background', dataColor);

                
                    header.querySelector('h1').style.setProperty('color', 'white');
                    main.querySelector('h2').style.setProperty('color', 'white');
                    submit.style.setProperty('color', 'white');
                    input.style.setProperty('background', '#ccc');
                    clear_all.style.setProperty('background', '#ccc');
                    clear_all.style.setProperty('color', dataColor);
                    clear_done_tasks.style.setProperty('background', '#ccc');
                    clear_done_tasks.style.setProperty('color', dataColor);
                    task_el.style.setProperty('background', '#eee');
                    task_input_el.style.setProperty('color', dataColor);

                
            });
    });




});
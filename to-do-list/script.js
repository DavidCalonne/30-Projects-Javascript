document.addEventListener('DOMContentLoaded', function() {
    const root = document.querySelector('.root');
    // Création de la section
    const section = document.createElement('section');
    root.appendChild(section);

    // Titre de la section
    const title = document.createElement('h2');
    title.innerHTML = 'Tâches à faire';
    section.appendChild(title);

    // Ajout du formulaire pour ajouter une tâche
    const form = document.createElement('form');
    form.classList.add('form');
    form.addEventListener('submit', addTask);
    section.appendChild(form);

        // Création du champ
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Ajouter une tâche';
        form.appendChild(input);

        // Création du bouton pour ajouter une tâche
        const submit = document.createElement('button');
        submit.innerHTML = 'Ajouter';
        form.appendChild(submit);
    
    // Ajout de la div pour les tâches
    const tasks = document.createElement('div');
    tasks.classList.add('tasks');
    section.appendChild(tasks);


    function addTask(e){
        e.preventDefault();
        const task = document.createElement('div');
        const text = document.createElement('p');
        const checkbox = document.createElement('input');
        const deleteButton = document.createElement('button');

        deleteButton.innerHTML = 'X';
        deleteButton.addEventListener('click', deleteTask);

        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        text.classList.add('task');
        text.innerHTML = input.value;
            
        tasks.appendChild(task);
        task.appendChild(checkbox);
        task.appendChild(text);
        task.appendChild(deleteButton);
        
        input.value = '';
    }
    
    function deleteTask(e){
        e.preventDefault();
        const task = e.target.parentElement;
        task.remove();
    }


});
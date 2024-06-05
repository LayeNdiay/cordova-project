function ajouterTache() {
    const taskField = document.getElementById('taskField');
    const taskList = document.getElementById("taskList");
    const taskListDone = document.getElementById("taskListDone");

    if (taskField.value){
        let newItem = document.createElement('li');
        newItem.innerHTML = taskField.value;
        
        taskList.appendChild(newItem);
        taskField.value=''

        $(newItem).on('swiperight', function(e){
                if($(newItem).parent().attr('id') === 'taskList'){
                    $(newItem).addClass('termine');
                    $('#taskListDone').append($(newItem));
                } else if($(newItem).parent().attr('id') === 'taskListDone'){
                    $(newItem).removeClass('termine');
                    $('#taskList').append($(newItem));
                }
            
        })

        $(newItem).on('swipeleft', function(e){
            e.preventDefault();
            $(this).remove();
        })

        $(taskList).listview('refresh');
        $(taskListDone).listview('refresh');
        taskField.select();
    }

}



function reinitialiserListe(params) {
    const taskField = document.getElementById('taskField');
    const taskList = document.getElementById("taskList");
    const taskListDone = document.getElementById("taskListDone");
    taskField.value='';
    taskList.innerHTML = '';
    taskListDone.innerHTML = '';
    taskField.focus();
}
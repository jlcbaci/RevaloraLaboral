
function ShowSearchFilter(number) {
    let search_form = document.getElementById('search-form');
    let search_icons = document.getElementById('search-icons');
    let button_active_container = document.getElementById('type-search-button').querySelectorAll("button");
    if(number===1){
        search_form.classList.add('show');
        search_icons.classList.remove('show');
        button_active_container[0].classList.remove('active')
        button_active_container[1].classList.add('active')
    }else{
        search_icons.classList.add('show');
        search_form.classList.remove('show');
        button_active_container[0].classList.add('active');
        button_active_container[1].classList.remove('active');
    }
}

function ShowData(e){
    let search_icons = document.getElementById('search-icons').getElementsByClassName('button-container');
    for (let i = 0; i < search_icons.length; i++) {
        if(e.target.dataset.id === search_icons[i].getElementsByTagName('button')[0].dataset.id){
            if(search_icons[i].getElementsByClassName('button-info')[0].classList.contains('show')){
                search_icons[i].getElementsByClassName('button-info')[0].classList.remove('show')
            }else{
                search_icons[i].getElementsByClassName('button-info')[0].classList.add('show')
            }
        }else{
            search_icons[i].getElementsByClassName('button-info')[0].classList.remove('show')
        }
    }
}

function ShowModal(id){
    let Modal = document.getElementById(id);
    console.log(Modal)
    Modal.classList.add('show');
}
function check_id() {
    // On veut vérifier les champs du formulaire
    const id = document.querySelector('#ticketId');
    // .value récupère la valeur d'un input
    console.log("id : ", id.value);

    const ticket_id_error_void = document.querySelector('#ticket-id-error-void');
    const ticket_id_error_number = document.querySelector('#ticket-id-error-number');
    if(id.value == "") {
        ticket_id_error_void.classList.remove('hidden');
        return 1;
    } else {
        ticket_id_error_void.classList.add('hidden');
        // ^ = debut de chaine d = digit $ = fin de chaine
        if (!(/^\d+$/.test(id.value))) {
            console.log("Il y a pas que des chiffres");
            ticket_id_error_number.classList.remove('hidden');
            return 1;
        } else {
            console.log("il y a que des chiffres");
            ticket_id_error_number.classList.add('hidden');
            return 0;
        }
    }
}


function check_name() {
    console.log('on fait le check name');

    const name = document.querySelector('#ticketName');
    // .value récupère la valeur d'un input
    console.log("name : ", name.value);

    const ticket_name_error_void = document.querySelector('#ticket-name-error-void');
    if(name.value == "") {
        ticket_name_error_void.classList.remove('hidden');
        return 1;
    } else {
        ticket_name_error_void.classList.add('hidden');
        return 0;
    }
}





// sélection du form #submitform
const Ticketform = document.querySelector('#tickets_create_form');


// je crée un écouteur d'événement pour gérer la soumission du form
Ticketform.addEventListener("submit", function(event) {
    // on empeche la soumission du formulaire
    // pour éviter le rechargement de page
    event.preventDefault();
    console.log('j\'ai soumis mon formulaire');

    
    let nb_errors = 0;
    nb_errors += check_id();

    console.log('chck id fait');
    nb_errors += check_name();

    /*nb_errors += check_detail();

    nb_errors += check_collaborators();


    
    console.log("nb_errors : ", nb_errors);

    
    if(nb_errors == 0) {
        // Je vais ajouter la ligne dans mon tableau
        const a = document.querySelector('#projectId');
        const b = document.querySelector('#projectName');
        const c = document.querySelector('#projectDetail');
        const d = document.querySelector('#projectCollaborators');

    
        // Je vide le formulaire
        a.value = "";
        b.value = "";
        c.value = "";
        d.value = "";

        // J'affiche le "toast"
        const toast = document.querySelector("#success");
        console.log("fichier crer");
        toast.classList.remove('hidden');
        // J'attends 3 secondes, puis je l'enlève : 
        setTimeout(() => {
            toast.classList.add('hidden');
            console.log("fichier crer hidden");
        }, 5000);
    }*/
});
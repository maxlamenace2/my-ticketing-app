function check_name() {
    console.log('on fait le check name');

    const name = document.querySelector('#InscriptionName');
    
    const inscription_name_error_void = document.querySelector('#inscription-name-error-void');
    const inscription_name_error_letter = document.querySelector('#inscription-name-error-letter');
    if(name.value == "") {
        inscription_name_error_void.classList.remove('hidden');
        return 1;
    } else {
        inscription_name_error_void.classList.add('hidden');
        
        if (name.value.length <= 2) {
            inscription_name_error_letter.classList.remove('hidden');
            return 1;
        }
        else {
            inscription_name_error_letter.classList.add('hidden');
            return 0;
        }
    }
}

function check_surname() {
        console.log('on fait le check surname');

    const surname = document.querySelector('#InscriptionSurname');
    
    const inscription_surname_error_void = document.querySelector('#inscription-surname-error-void');
    const inscription_surname_error_letter = document.querySelector('#inscription-surname-error-letter');
    if(surname.value == "") {
        inscription_surname_error_void.classList.remove('hidden');
        return 1;
    } else {
        inscription_surname_error_void.classList.add('hidden');
        
        if (surname.value.length <= 2) {
            inscription_surname_error_letter.classList.remove('hidden');
            return 1;
        }
        else {
            inscription_surname_error_letter.classList.add('hidden');
            return 0;
        }
    }
}




// sélection du form #submitform
const inscription = document.querySelector('#projects-form');


// je crée un écouteur d'événement pour gérer la soumission du form
inscription.addEventListener("submit", function(event) {
    // on empeche la soumission du formulaire
    // pour éviter le rechargement de page
    event.preventDefault();
    console.log('j\'ai soumis mon formulaire');

    
    let nb_errors = 0;
    nb_errors = check_name();

    nb_errors = check_surname();

    /*console.log('chck id fait');
    nb_errors += check_name();

    nb_errors += check_detail();

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
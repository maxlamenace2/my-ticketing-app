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

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function check_email() {
            
    
    const email = document.querySelector('#InscriptionEmail');
    
    const inscription_email_error_void = document.querySelector('#inscription-email-error-void');
    const inscription_email_error_letter = document.querySelector('#inscription-email-error-letter');
    const inscription_email_error_ars = document.querySelector('#inscription-email-error-ars');
    if(email.value == "") {
        inscription_email_error_void.classList.remove('hidden');
        return 1;
    } else {
        inscription_email_error_void.classList.add('hidden');
        
        if (email.value.length <= 2) {
            inscription_email_error_letter.classList.remove('hidden');
            return 1;
        }
        else {
            inscription_email_error_letter.classList.add('hidden');
            if (!validateEmail(email.value)) {
                inscription_email_error_ars.classList.remove('hidden');
                return 1;
            } else {
                inscription_email_error_ars.classList.add('hidden');
                return 0;
            }
        }
    }
}


function check_date() {

    const date = document.querySelector('#InscriptionDate');
    
    const inscription_date_error_void = document.querySelector('#inscription-date-error-void');
    const inscription_date_error_old = document.querySelector('#inscription-date-error-old');
    if(date.value == "") {
        inscription_date_error_void.classList.remove('hidden');
        return 1;
    } else {
        inscription_date_error_void.classList.add('hidden');
        
        // On convertit la valeur de l'input en objet Date
        const birthDate = new Date(date.value);
        const today = new Date();

        // Calcul de l'âge brut (Année actuelle - Année de naissance)
        let age = today.getFullYear() - birthDate.getFullYear();

        // Ajustement : Est-ce que son anniversaire est déjà passé cette année ?
        // m = différence de mois
        const m = today.getMonth() - birthDate.getMonth();

        // Si on est avant le mois de l'anniv (m < 0) 
        // OU si on est le mois de l'anniv mais avant le jour (m === 0 && jour < jour)
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--; // On retire 1 an car l'anniversaire n'est pas encore passé
        }

        if (age<15) {
            inscription_date_error_old.classList.remove('hidden');
            return 1;
        }
        else {
            inscription_date_error_old.classList.add('hidden'); 
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

    nb_errors = check_email();

    nb_errors = check_date();

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
function check_id() {
    // On veut vérifier les champs du formulaire
    const id = document.querySelector('#projectId');
    // .value récupère la valeur d'un input
    console.log("id : ", id.value);

    const project_id_error_void = document.querySelector('#project-id-error-void');
    const project_id_error_number = document.querySelector('#project-id-error-number');
    if(id.value == "") {
        project_id_error_void.classList.remove('hidden');
        return 1;
    } else {
        project_id_error_void.classList.add('hidden');
        // ^ = debut de chaine d = digit $ = fin de chaine
        if (!(/^\d+$/.test(id.value))) {
            console.log("Il y a pas que des chiffres");
            project_id_error_number.classList.remove('hidden');
            return 1;
        } else {
            console.log("il y a que des chiffres");
            project_id_error_number.classList.add('hidden');
        }
    }
}

function check_name() {
    console.log('on fait le check name');

    const name = document.querySelector('#projectName');
    // .value récupère la valeur d'un input
    console.log("name : ", name.value);

    const project_name_error_void = document.querySelector('#project-name-error-void');
    if(name.value == "") {
        project_name_error_void.classList.remove('hidden');
        return 1;
    } else {
        project_name_error_void.classList.add('hidden');
        return 0;
    }
}

function check_detail() {
    console.log('on fait le check detail');

    const detail = document.querySelector('#projectDetail');
    // .value récupère la valeur d'un input
    console.log("name : ", detail.value);

    const project_detail_error_void = document.querySelector('#project-detail-error-void');
    if(detail.value == "") {
        project_detail_error_void.classList.remove('hidden');
        return 1;
    } else {
        project_detail_error_void.classList.add('hidden');
        return 0;
    }
}

function check_collaborators() {
    console.log('on fait le check collaborator');

    const collaborators = document.querySelector('#projectCollaborators');
    // .value récupère la valeur d'un input
    console.log("name : ", collaborators.value);

    const project_collaborator_error_void = document.querySelector('#project-collaborators-error-void');
    if(collaborators.value == "") {
        project_collaborator_error_void.classList.remove('hidden');
        return 1;
    } else {
        project_collaborator_error_void.classList.add('hidden');
        return 0;
    }
}





// sélection du form #submitform
const f = document.querySelector('#projects-create-form');


// je crée un écouteur d'événement pour gérer la soumission du form
f.addEventListener("submit", function(event) {
    // on empeche la soumission du formulaire
    // pour éviter le rechargement de page
    event.preventDefault();
    console.log('j\'ai soumis mon formulaire');

    
    let nb_errors = 0;
    nb_errors += check_id();

    console.log('chck id fait');
    nb_errors += check_name();

    nb_errors += check_detail();

    nb_errors += check_collaborators();


    
    console.log("nb_errors : ", nb_errors);

    
    if(nb_errors == 0) {
        // Je vais ajouter la ligne dans mon tableau
        const a = document.querySelector('#titre');
        const b = document.querySelector('#annee');
        const c = document.querySelector('#genre');
        console.log(a.value, b.value, c.value);

        // Je veux maintenant ajoute les valeurs dans le tableau
        const t = document.querySelector("#content tbody");

        const row = `
            <tr>
                <td>${a.value}</td>
                <td class="genre">${c.value}</td>
                <td>${b.value}</td>
            </tr>
        `;
        console.log(row);

        // J'ajoute le row à la fin du tableau
        t.insertAdjacentHTML('beforeend', row);

        // Je vide le formulaire
        a.value = "";
        b.value = "";
        c.value = "";

        // J'affiche le "toast"
        const toast = document.querySelector("#success");
        console.log(toast);
        toast.classList.remove('titanic');
        // J'attends 3 secondes, puis je l'enlève : 
        setTimeout(() => {
            toast.classList.add('titanic');
        }, 5000);
    }*/
});
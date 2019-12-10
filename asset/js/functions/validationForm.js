function validationForm() {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let msg = "";

    if (nom === "") msg += 'Mets ton nom bordel ! \r';
    if (prenom === "") msg += 'Mets ton prenom bordel ! \r';
    if (email === "") msg += 'Mets ton email bordel ! \r';

    alert(msg);
}
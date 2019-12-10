let valeur = prompt('Veuillez saisir un entier');
let msg = '';
if (!isNaN(valeur)) {
    if (valeur > 0) {
        msg = 'Positif';
    } else if (valeur < 0) {
        msg = 'Negatif';
    } else {
        msg = 'Nul';
    }
}
else msg = 'Un nombre, j\'ai dit';
document.write(msg);

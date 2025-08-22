function ajouter(valeur) {
  document.getElementById("resultat").value += valeur;
}

function calculer() {
  try {
    let res = eval(document.getElementById("resultat").value);
    document.getElementById("resultat").value = res;
  } catch {
    document.getElementById("resultat").value = "Erreur";
  }
}

function reset() {
  document.getElementById("resultat").value = "";
}

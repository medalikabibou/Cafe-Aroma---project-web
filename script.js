// =============================================
//  script.js — Café Aroma
//  Projet Web 1 — Interactivité JavaScript
// =============================================


// ===== 1. NAVBAR HAMBURGER (MENU MOBILE) =====
// On récupère les éléments du DOM
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

// Quand on clique sur le bouton hamburger, on ouvre/ferme le menu
if (hamburger) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});


// ===== 2. NAVBAR CHANGE DE COULEUR AU SCROLL =====
// La navbar devient légèrement colorée quand on fait défiler la page
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(107, 63, 31, 0.2)';
    } else {
      navbar.style.boxShadow = '0 4px 16px rgba(107, 63, 31, 0.1)';
    }
  }
});


// ===== 3. FILTRE DU MENU =====
// Sur la page menu.html, les boutons filtrent les produits par catégorie
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems  = document.querySelectorAll('.menu-item');

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {

    // On retire la classe "active" de tous les boutons
    filterBtns.forEach(function (b) { b.classList.remove('active'); });

    // On ajoute "active" au bouton cliqué
    btn.classList.add('active');

    // On récupère la catégorie du bouton
    var categorie = btn.getAttribute('data-cat');

    // On affiche ou cache chaque produit selon la catégorie
    menuItems.forEach(function (item) {
      if (categorie === 'all') {
        // "Tout" → on montre tout
        item.style.display = 'block';
      } else if (item.getAttribute('data-cat') === categorie) {
        // La catégorie correspond → on affiche
        item.style.display = 'block';
      } else {
        // Ne correspond pas → on cache
        item.style.display = 'none';
      }
    });

  });
});


// ===== 4. VALIDATION DU FORMULAIRE DE CONTACT =====
// On vérifie que les champs sont bien remplis avant d'envoyer
function envoyerMessage() {
  // On récupère les valeurs des champs
  var nom     = document.getElementById('nom');
  var email   = document.getElementById('email');
  var message = document.getElementById('message');
  var confirm = document.getElementById('confirmation');

  // Vérification simple : aucun champ ne doit être vide
  if (!nom || !email || !message) return; // On est peut-être pas sur la page contact

  if (nom.value.trim() === '') {
    alert('⚠️ Veuillez entrer votre nom.');
    nom.focus();
    return;
  }

  if (email.value.trim() === '') {
    alert('⚠️ Veuillez entrer votre email.');
    email.focus();
    return;
  }

  // Vérification basique du format email (contient @ et .)
  if (!email.value.includes('@') || !email.value.includes('.')) {
    alert('⚠️ Veuillez entrer un email valide.');
    email.focus();
    return;
  }

  if (message.value.trim() === '') {
    alert('⚠️ Veuillez écrire un message.');
    message.focus();
    return;
  }

  // Tout est bon : on affiche le message de confirmation
  if (confirm) {
    confirm.style.display = 'block';
  }

  // On vide les champs du formulaire
  nom.value     = '';
  email.value   = '';
  message.value = '';

  // On récupère aussi le champ sujet s'il existe
  var sujet = document.getElementById('sujet');
  if (sujet) sujet.value = '';
}


// ===== 5. ANIMATION D'APPARITION DES CARTES =====
// Les cartes apparaissent progressivement au chargement de la page
window.addEventListener('load', function () {
  var cartes = document.querySelectorAll('.card, .menu-item, .galerie-card, .team-card');

  cartes.forEach(function (carte, index) {
    // On définit une opacité de départ à 0
    carte.style.opacity    = '0';
    carte.style.transform  = 'translateY(20px)';
    carte.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    // Chaque carte apparaît avec un petit délai (effet en cascade)
    setTimeout(function () {
      carte.style.opacity   = '1';
      carte.style.transform = 'translateY(0)';
    }, 100 + index * 100); // 100ms de délai entre chaque carte
  });
});
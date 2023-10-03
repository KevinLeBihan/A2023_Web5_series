// ///<reference types="cypress"/>

// it('aller sur contact quand le bouton contact est cliquer',()=>{
//     cy.visit('/');
//     // cy.contains('Contact').click();
//     cy.get('[data-cy="lnk-/contact"] li').click();
// })
it('devrait aller sur la page profil quand on est pas connecter', () => {
    cy.visit('/Profil');
})
it('devrait aller sur la page SeriesTendances quand on est pas connecter', () => {
    cy.visit('/SeriesTendances');
})
it('devrait aller sur la page Series-fav quand on est pas connecter', () => {
    cy.visit('/Series-fav');
})

it('devrait arriver sur le login par defaut', () => {
    cy.visit('/jnjwsndsjd');
    cy.get('[data-cy="username-input"]').type('Cole Caufield');
    cy.get('[data-cy="password"]').type("aimsamsma");
    cy.get('[data-cy="login"]').click();
    cy.get('[data-cy="login"]').click();
    cy.get('[data-cy="lnk-/SeriesTendances"]').click();
    cy.get('[data-cy="lnk-/Series-fav"]').click();
    cy.get('[data-cy="lnk-/Profil"]').click();
    cy.visit('/Series-fav');
})



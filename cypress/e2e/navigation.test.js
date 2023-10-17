
// beforeEach(() => {
//     cy.intercept(Cypress.env('apiUrl'),{fixture:'series.json'})
// })
it('ne devrait pas aller sur la page profil quand on est pas connecter', () => {
    cy.visit('/profil');
})
it('ne devrait pas aller sur la page SeriesTendances quand on est pas connecter', () => {
    cy.visit('/series-tendances');
})
it('ne devrait pas aller sur la page Series-fav quand on est pas connecter', () => {
    cy.visit('/series-fav');
})
it('ne devrait pas aller sur la page recherche quand on est pas connecter', () => {
    cy.visit('/recherche');
})

describe('Navigation', () => {

    it('devrait se connecter et débloquer les autres routes lorsque l\'utilisateur est connecter', () => {
        cy.visit('/jnjwsndsjd');
        cy.get('[data-cy="username-input"]').type('Cole Caufield');
        cy.get('[data-cy="password"]').type("aimsamsma");
        cy.get('[data-cy="login"]').click();
        cy.url().should('include', '/series-tendances');
        cy.get('[data-cy="lnk-/series-tendances"]').click();
        cy.get('[data-cy="lnk-/series-fav"]').click();
        cy.url().should('include', '/series-fav');
        cy.get('[data-cy="lnk-/profil"]').click();
        cy.url().should('include', '/profil');
        cy.get('[data-cy="lnk-/series-tendances"]').click();
        cy.get('[data-cy="liste-serie"]').first().click();
        cy.url().should('include', '/series-tendances/170559');
        cy.get('[data-cy="bouton-fav"]').first({ force: true }).click({ force: true });
        cy.get('[data-cy="btn-retour"]').first().click({ force: true });
        cy.get('[data-cy="lnk-/series-fav"]').click();
        cy.get('[data-cy="liste-serie"]').first().click();
        cy.url().should('include', '/series-fav/170559');
        cy.get('[data-cy="btn-retour"]').first().click({ force: true });
        cy.get('[data-cy="lnk-/recherche"]').click();
        cy.get('[data-cy="recherche"]').click();
        cy.url().should('include', '/recherche');
        cy.get('[data-cy="recherche"]').type('ra');
        cy.get('[data-cy="liste-serie"]').first().click();
        cy.url().should('include', '/recherche/614');
        cy.get('[data-cy="btn-retour"]').first().click({ force: true });
        cy.get('[data-cy="lnk-/profil"]').click();
        cy.url().should('include', '/profil');
        cy.get('[data-cy="btn-deco"]').click();
        cy.url().should('include', '/login');
        cy.get('[data-cy="username-input"]').type('Babouche');
        cy.get('[data-cy="password"]').type("Dora");
        cy.get('[data-cy="login"]').click();
        cy.get('[data-cy="lnk-/profil"]').click();
        cy.get('[data-cy="nom-utilisateur"]').contains('h1', 'Babouche');
        cy.get('[data-cy="btn-deco"]').click();
        cy.get('[data-cy="username-input"]').type('coucou');
        cy.get('[data-cy="password"]').type("allo");
        cy.get('[data-cy="login"]').click();
        cy.get('[data-cy="lnk-/profil"]').click();
        cy.get('[data-cy="nom-utilisateur"]').contains('h1', 'coucou');
        cy.get('[data-cy="btn-deco"]').click();

    })

})



it('devrait se déconnecter et bloquer les autres routes lorsque l\'utilisateur est déconnecter', () => {

})



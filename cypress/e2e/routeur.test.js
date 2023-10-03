// ///<reference types="cypress"/>
// describe('Test des différentes routes', ()=>{
//     it('devrait atteindre la page about par défault',()=>{
//         cy.visit('/');
//         cy.get('[data-cy="page_about"]').contains('À propos');
//         // cy.visit
//         // cy.visit('/contact');
    
//     });
//     it('url erroner redirige vers about',()=>{
//         cy.visit('/LMAMS');
//         cy.get('[data-cy="page_about"]').should('exist');
//     });
    
//     it('devrait atteindre la page de galerie et galerieView',()=>{
//         cy.visit('/galerie');
//         cy.get('h2').contains('Galerie');
//         cy.visit('/galerie/1');
//     });
// });
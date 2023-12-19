describe('Smartphones PLP', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/smartphones');
    });

    it('should display products', () => {
        cy.get('[href="/smartphones/ZmGrkLRPXOTpxsU4jjAcv"]').should('exist');
        cy.get(
            '[href="/smartphones/ZmGrkLRPXOTpxsU4jjAcv"] > .item-card > img'
        ).should('exist');
        cy.get(
            '[href="/smartphones/ZmGrkLRPXOTpxsU4jjAcv"] > .item-card > :nth-child(2)'
        ).should('exist');
        cy.get(
            '[href="/smartphones/ZmGrkLRPXOTpxsU4jjAcv"] > .item-card > :nth-child(3)'
        ).should('exist');
        cy.get(
            '[href="/smartphones/ZmGrkLRPXOTpxsU4jjAcv"] > .item-card > .item-price'
        ).should('exist');
    });

    it('should filter products by brand', () => {
        cy.get('.search-input').type('alcatel');
        cy.get('.item-card > :nth-child(2)').contains('alcatel');
    });

    it('should filter products by model', () => {
        cy.get('.search-input').type('Iconia');
        cy.get('[href="/smartphones/ZmGrkLRPXOTpxsU4jjAcv"]').should('exist');
    });

    it('should show breadcrumb', () => {
        cy.get('.header__row-breadcrumb').should('exist');
        cy.get('.header__row-breadcrumb').should('contain', 'Smartphones');
    });

    it('navigate to PDP on product click', () => {
        cy.get('[href="/smartphones/ZmGrkLRPXOTpxsU4jjAcv"]').click();
        cy.url().should('include', '/smartphones/ZmGrkLRPXOTpxsU4jjAcv');
    });
});

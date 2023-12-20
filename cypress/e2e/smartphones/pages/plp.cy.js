describe('Smartphones PLP', () => {
    beforeEach(async () => {
        await cy.intercept(
            'GET',
            'https://itx-frontend-test.onrender.com/api/product',
            {
                fixture: 'smartphones.json',
            }
        );
        cy.visit('http://localhost:5173/#/smartphones');
    });

    it('should display products', () => {
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv"]').should('exist');
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv-img"]').should('exist');
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv-brand"]').should('exist');
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv-model"]').should('exist');
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv-price"]').should('exist');
    });

    it('should filter products by brand', () => {
        cy.get('[data-cy-id="search-input"]').type('alcatel');
        cy.get('[data-cy-id="AasKFs5EGbyAEIKkcHQcF-brand"]').contains(
            'alcatel'
        );
    });

    it('should filter products by model', () => {
        cy.get('.search-input').type('Iconia');
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv"]').should('exist');
    });

    it('should show breadcrumb', () => {
        cy.get('[data-cy-id="breadcrumb"]')
            .should('exist')
            .should('contain', 'Smartphones');
    });

    it('navigate to PDP on product click', () => {
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv"]').click();
        cy.url().should('include', '/smartphones/ZmGrkLRPXOTpxsU4jjAcv');
    });
});

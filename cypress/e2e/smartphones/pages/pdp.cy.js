describe('Smartphones PDP', () => {
    beforeEach(async () => {
        await cy.intercept(
            'GET',
            'https://itx-frontend-test.onrender.com/api/product/ZmGrkLRPXOTpxsU4jjAcv',
            {
                fixture: 'smartphone-details.json',
            }
        );
        cy.visit('http://localhost:5173/#/smartphones/ZmGrkLRPXOTpxsU4jjAcv');
    });

    it('should display product details', () => {
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv-img').should('exist');
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv-brand-model"]').should(
            'exist'
        );
        cy.get('[data-cy-id="cpu"]').should('exist');
        cy.get('[data-cy-id="ram"]').should('exist');
        cy.get('[data-cy-id="os"]').should('exist');
        cy.get('[data-cy-id="displayResolution"]').should('exist');
        cy.get('[data-cy-id="battery"]').should('exist');
        cy.get('[data-cy-id="primaryCamera"]').should('exist');
        cy.get('[data-cy-id="dimentions"]').should('exist');
        cy.get('[data-cy-id="weight"]').should('exist');
        cy.get('[data-cy-id="ZmGrkLRPXOTpxsU4jjAcv-price"]').should('exist');
        cy.get('[data-cy-id="product-options__container"]')
            .should('exist')
            .should('be.visible');
    });

    it('should select product storage', () => {
        cy.get('[data-cy-id="storage"]').select('32 GB');
    });

    it('should select product color', () => {
        cy.get('[data-cy-id="color"]').select('Black');
    });

    it('should show breadcrumb', () => {
        cy.get('[data-cy-id="breadcrumb"]').should('exist');
        cy.get('[data-cy-id="breadcrumb"]').should('contain', 'Smartphones');
        cy.get('[data-cy-id="breadcrumb"]').should('contain', 'Iconia Talk S');
    });

    it('navigate to PLP on breadcrumb click', () => {
        cy.get('[data-cy-id="header__row-link"]').click();
        cy.url().should('include', '/smartphones');
    });

    it('navigate to PLP on title click', () => {
        cy.get('[data-cy-id="header-title"]').click();
        cy.url().should('include', '/smartphones');
    });

    it('should add product to cart', async () => {
        await cy.intercept(
            'POST',
            'https://itx-frontend-test.onrender.com/api/cart',
            {
                fixture: 'cart.json',
            }
        );
        cy.get('[data-cy-id="cart-button"]').click();
        cy.get('[data-cy-id="cart-badge"]').should('contain', '1');
    });
});

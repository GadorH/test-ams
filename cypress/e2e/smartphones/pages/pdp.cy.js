describe('Smartphones PDP', () => {
    it('sholud display product details', () => {
        cy.visit('http://localhost:5173/smartphones/ZmGrkLRPXOTpxsU4jjAcv');

        cy.get('[href="/smartphones/ZmGrkLRPXOTpxsU4jjAcv"]').should('exist');
        cy.get('img').should('exist');
        cy.get('.description-container__product-title').should('exist');
        cy.get('.product-details__list > :nth-child(1)').should('exist');
        cy.get('.product-details__list > :nth-child(2)').should('exist');
        cy.get('.product-details__list > :nth-child(3)').should('exist');
        cy.get('.product-details__list > :nth-child(4)').should('exist');
        cy.get('.product-details__list > :nth-child(5)').should('exist');
        cy.get('.product-details__list > :nth-child(6)').should('exist');
        cy.get('.product-details__list > :nth-child(7)').should('exist');
        cy.get('.product-details__list > :nth-child(8)').should('exist');
        cy.get('.price-text').should('exist');
        cy.get('.product-options__container')
            .should('exist')
            .should('be.visible');
    });

    it('should select product storage', () => {
        cy.visit('http://localhost:5173/smartphones/ZmGrkLRPXOTpxsU4jjAcv');

        cy.get(':nth-child(1) > .product-actions__selector-input').select(
            '32 GB'
        );
    });

    it('should select product color', () => {
        cy.visit('http://localhost:5173/smartphones/ke-gsQbO8qH9PQ-zcdiAJ');

        cy.get(':nth-child(2) > .product-actions__selector-input').select(
            'White'
        );
    });

    it('should add product to cart', () => {
        cy.visit('http://localhost:5173/smartphones/ke-gsQbO8qH9PQ-zcdiAJ');

        cy.get('.product-actions__add-to-cart-button').click();
        cy.get('.badge').should('contain', '1');
    });
    it('should show breadcrumb', () => {
        cy.visit('http://localhost:5173/smartphones/ke-gsQbO8qH9PQ-zcdiAJ');

        cy.get('.header__row-breadcrumb').should('exist');
        cy.get('.header__row-breadcrumb').should('contain', 'Smartphones');
        cy.get('.header__row-breadcrumb').should('contain', 'Liquid Zest Plus');
    });

    it('navigate to PLP on breadcrumb click', () => {
        cy.visit('http://localhost:5173/smartphones/ke-gsQbO8qH9PQ-zcdiAJ');

        cy.get('ol > :nth-child(1) > a').click();
        cy.url().should('include', '/smartphones');
    });

    it('navigate to PLP on title click', () => {
        cy.visit('http://localhost:5173/smartphones/ke-gsQbO8qH9PQ-zcdiAJ');

        cy.get('h2 > a').click();
        cy.url().should('include', '/smartphones');
    });
});

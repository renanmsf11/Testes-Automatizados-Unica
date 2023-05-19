describe('Fluxo de alterar quantidade de item no carrinho', () =>  {

    it('Valida se é possível alterar a quantidade do item no carrinho', () => {
        cy.fixture('elements').then((el) => {
            cy.AlterarQuantidadeCarrinho(el.produto)
            
        })

    })
})
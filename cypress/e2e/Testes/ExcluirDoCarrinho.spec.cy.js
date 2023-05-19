describe('Fluxo de exclusão de item do carrinho', () =>  {

    it('Valida se é possível excluir o produto do carrinho', () => {
        cy.fixture('elements').then((el) => {
            cy.ExcluirDoCarrinho(el.produto)
            
        })
    })
})
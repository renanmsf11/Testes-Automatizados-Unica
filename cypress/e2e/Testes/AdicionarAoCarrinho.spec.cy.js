describe('Fluxo de adicionar item ao carrinho', () =>  {

    it('se é possível alterar a quantidade do item através do botão de dropdown no carrinho', () => {
        cy.fixture('elements').then((el) => {
            cy.AdicionarProdutoAoCarrinho(el.produto)
            
        })

    })
})
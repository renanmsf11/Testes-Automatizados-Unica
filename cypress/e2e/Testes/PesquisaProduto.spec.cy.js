describe('Fluxo de digitar e buscar por produtos na caixa de pesquisa', () =>  {

    it('Valida se é possível buscar e pesquisar um produto através da barra de pesquisa', () => {
        cy.fixture('elements').then((el) => {
            cy.PesquisaProduto(el.produto)
            
        })
    })

})
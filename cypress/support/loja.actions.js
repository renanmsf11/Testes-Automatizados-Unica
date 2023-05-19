Cypress.Commands.add('PesquisaProduto', (produto) => {
    cy.fixture('elements').then((el) => {
        cy.get(el.campoBarraPesquisa).should('be.visible').type(produto)
        cy.wait(3000)
        cy.get(el.botaoPesquisa).should('be.visible').click();
        cy.wait(6000)
    })

})

Cypress.Commands.add('AdicionarProdutoAoCarrinho', (produto) => {
    cy.fixture('elements').then((el) => {
        cy.PesquisaProduto(el.produto)
        cy.get(el.produtoId).should('be.visible').click();
        cy.wait(3000)
        cy.get(el.botaoAdicionarAoCarrinho).should('be.visible').click();
        cy.wait(3000)
        cy.get(el.botaoIrParaCarrinho).should('be.visible').click();
        cy.wait(3000)
        cy.get(".BasketItemProduct").should('be.visible')
    })

})

Cypress.Commands.add('ExcluirDoCarrinho', (produto) => {
    cy.fixture('elements').then((el) => {
        cy.AdicionarProdutoAoCarrinho(el.produto)
        cy.wait(4000)
        cy.get(el.ExcluirItemCarrinho).should('be.visible').click();

    })
    

})


Cypress.Commands.add('AlterarQuantidadeCarrinho', (produto) => {
    cy.fixture('elements').then((el) => {
        cy.AdicionarProdutoAoCarrinho(el.produto)
        cy.wait(4000)
        cy.get(el.AlterarQuantidadeCarrinho).should('be.visible').select('5').should('have.value', '5')

    })
    

})
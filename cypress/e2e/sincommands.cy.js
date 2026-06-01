/// sinComandos.cy.js -> Pueden modificar el nombre al que prefieran

describe('SauceDemo - Sin comandos personalizados', () => {

  beforeEach(()=>{
    cy.login('standard_user','secret_sauce')
  })

  it('Compra completa con un producto', () => {

    // Agregar producto al carrito
    cy.agregarAlCarrito('sauce-labs-bike-light')
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // Ir al carrito
    cy.irAlCarrito()
    cy.get('.cart_item').should('have.length', 1)
    

    // Iniciar checkout
    cy.completarCheckout('Juan','Dudoso','5000')
    
    // Confirmar pedido
    cy.confirmarPedido()
  })

    it('Compra completa con dos productos', () => {
            
        // Agregar dos productos
        cy.agregarAlCarrito('sauce-labs-backpack', 'sauce-labs-bike-light')
        cy.get('.shopping_cart_badge').should('have.text', '2')
        
        // Ir al carrito
        cy.irAlCarrito()
        cy.get('.cart_item').should('have.length', 2)

        // Iniciar checkout       
        cy.completarCheckout('Juan', 'Dudoso', '5000')
        
        // Confirmar pedido
        cy.confirmarPedido()
    })

    it('Logout exitoso después de una compra', () => {
        
        
        // 1. Agregar producto
        cy.agregarAlCarrito('sauce-labs-backpack')
        
        // 2. Navegar y proceder al pago
        cy.irAlCarrito()
        
        // 3. Completar y confirmar
        cy.completarCheckout('Juan', 'Dudoso', '5000')
        
        cy.confirmarPedido()

        // 4. Logout exitoso
        cy.logout()
    })

})
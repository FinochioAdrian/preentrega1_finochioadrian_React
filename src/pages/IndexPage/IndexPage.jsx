import React from 'react'
import ContenedorHeader from '../../components/ContenedorHeader/ContenedorHeader'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const IndexPage = () => {
  return (
    <div>
      <section>
      <ContenedorHeader />
      </section>
      
    <section className='min-vh-75'>
      <ItemListContainer greeting={"Nuestros Productos: "} />

    </section>
    </div>
  )
}

export default IndexPage
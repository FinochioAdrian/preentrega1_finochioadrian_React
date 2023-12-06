import React from 'react'
import { Button } from 'react-bootstrap'
import { addDoc, collection } from 'firebase/firestore'
import {db} from '../../services/Firebase/FirebaseConfig'
import {productList} from './data';
import ItemList from '../ItemList/ItemList';

const UpLoaderAllProducts = () => {

    const uploadDataToFirestone =async ()=>{
        const ordersCollection = collection(db,'products')
        const promises = productList.map(({name,
            price,
            category,
            img,
            stock,
            description})=>{
            const newProduct = {
                name,price,category,img,stock,description
            }
            return addDoc(ordersCollection, newProduct)
        })
        try {
            await Promise.all(promises);
            console.log('Todos los datos subidos');
        }catch(error){
            console.log('Problemas al subir los datos');
        }
    }
  return (
    <div>
        <h1>Subir todos los siguientes productos</h1>
        <ItemList products={productList} />
         <Button variant="primary" onClick={uploadDataToFirestone} >
           Presionarme para subir tus datos
        </Button>
    </div>
  )
}

export default UpLoaderAllProducts
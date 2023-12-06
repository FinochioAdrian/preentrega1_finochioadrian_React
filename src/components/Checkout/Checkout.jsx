import { useState,useContext, useEffect } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import {CartContext} from '../../context/CartContext'


import {db} from '../../services/Firebase/FirebaseConfig'
import { Timestamp, collection, documentId, getDocs, query, where, writeBatch,addDoc } from "@firebase/firestore";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";








const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId , setOrderId] = useState('')
    const {cart,total,clearCart} = useContext(CartContext)
    console.log(cart);
const createOrder = async ({name,phone,email}) => {
    setLoading(true)
    try {
        const objOrder = {
            buyer: {
                name,phone, email
            },
            items:cart.map(({id,name,price,quantity}) => {return {id ,name,price,quantity}}),
            total,
            date: Timestamp.fromDate(new Date())
        }

        const batch =writeBatch(db)
        const outOfStock = []
        const ids = cart.map(prod=>prod.id)
        const productsRef = collection(db, 'products')
        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in',ids)))
        console.log("productsAddedFromFirestore",productsAddedFromFirestore);
        const {docs} =productsAddedFromFirestore
        docs.forEach(doc => {
            const dataDoc = doc.data()
            console.log(dataDoc);
            const stockDb =dataDoc.stock
            const productAddedToCart = cart.find(prod=> prod.id ===doc.id)
            const prodQuantity = productAddedToCart?.quantity
            console.log('stockDb',typeof stockDb);
            console.log('prodQuantity',typeof prodQuantity);
            if(stockDb >=prodQuantity) {
                batch.update(doc.ref, {stock: stockDb-prodQuantity})
            }else {
                outOfStock.push({id:doc.id, ...dataDoc})
            }
        })
        if (outOfStock.length === 0) {
            await batch.commit()
            const orderRef = collection(db,'orders')
            const orderAdded = await addDoc(orderRef,objOrder)
            setOrderId(orderAdded.id)
            clearCart()

        }else {
            console.error('hay productos que están Fuera de Stock');
            console.table(outOfStock);
            Swal.fire('Hay productos que están Fuera de Stock')
        }

    }catch(error){
        console.error(error);
    } finally {
    setLoading(false)


    }
       
}
const handleSubmitCheck = (data) => {
  console.log("datosDelFormulario",data);
  console.log("Intentando enviar el formulario");
  
   createOrder(data) 
}

useEffect(() => {
   if(orderId){
    Swal.fire(`Orden registrada correctamente. \n El id de su orden es: ${orderId}`)
   }

  
}, [orderId])


  return (
    <>
{!cart.length>0 && !orderId && <div className="d-flex justify-content-center align-items-center" style={{height:'75vh'}}><h1>El carrito está Vacío</h1> </div>}

    {loading&& !orderId &&  <div>
        <h1>Se está generando su orden</h1>
        <Spinner animation="border" variant="primary" />
    </div> }
    {orderId && 
    <div className="vh-75 d-flex justify-content-center align-items-center " >
    <h1>El id de su orden es: {orderId}</h1>
    </div>
    }
    {
       !loading && !orderId && cart.length>0 &&

        
            <CheckoutForm onConfirm={createOrder} handleSubmitCheck={handleSubmitCheck} />    

        
    }
    
    
    </>
  )
}

export default Checkout
import { useContext } from 'react'
import { Link  } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'


export function Cart(){
   const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);

      return(
            <div className="w-full max-w-7x1 px-4 mx-auto">
                  <h1 className="font-medium text-2x1 text-center my-6">My Shopping</h1>
           
           {cart.length === 0 && (
            <div className='flex flex-col items-center justify-center'>
                  <p className='font-medium'>Ops seu carrinho esta vazio...</p>
                  
            </div>
           )}
           
            {cart.map( (item) => (
                  <section key={item.id} className="flex items-center justify-between border-b-2">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-28"
                 />
                 <strong>Price: {item.price}</strong>

                  <div className="flex item-center justify-center gap-3">
                        <button  onClick={ () => removeItemCart(item)} className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
                              -
                        </button>
                        {item.amount}
                        <button onClick={ () => addItemCart(item)} className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
                              +
                        </button>
                  </div>
      
                  <strong className="float-right">
                        SubTotal:{item.total.toLocaleString("pt-BR",{
                               style:"currency",
                               currency:"BRL"  
                        })}
                  </strong>
                  </section>
            ) )}
            

          {cart.length !== 0 &&   <p className="font-bold mt-4">Total: {total}</p>}

        <div className='flex flex-col items-center justify-center'>
                      <Link to="/" className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded">
                            Acessar Produtos
                     </Link>
                 </div>      
            </div>
      )
      
}
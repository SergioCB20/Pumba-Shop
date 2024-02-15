import React from 'react';
import { useUserContext } from '../../context/UserContext';
import CartDisplay from './CartDisplay';
import MainBoton from '../../components/Reusables/MainBoton';

export default function Cart() {
  const { user,cart, setCart } = useUserContext();
  return (
    <main>
      {cart.length > 0 && <CartDisplay cart={cart} nombre={user.name} setCart={setCart}/>}
      {cart.length === 0 && (
      <div className='flex flex-col gap-3 justify-center items-center h-screen'>
        <h1 className='font-bold text-3xl'>Tu carrito está vacío</h1>
        <p className='text-base mb-10'>Una vez que añadas algo a tu carrito, aparecerá aquí.<br/>
        ¿Listo para empezar?</p>
        <MainBoton linkBoton="/" textoBoton="COMENZAR"/>
      </div>)}
    </main>
  );
}

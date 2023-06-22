import React, { useContext } from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  import { getTodos, postTodo } from '../my-api'
import { AuthContxt } from './AuthProviders/AuthContext';

  
  const NewCustomHook = () => {
  const {user }  = useContext(AuthContxt)   
  const {refetch, data: cart=[]} = useQuery({
    queryKey:[cart,user?.email],
    queryFn:async()=>{
        const res =await fetch(`https://cute-cars-server-1m0nsr3p0.vercel.app/cart?email=${user.email}`)        
    }
  })
    return (
        <div>
            
        </div>
    );
  };
  
  export default NewCustomHook;
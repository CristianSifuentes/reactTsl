import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id.action';
import type { Product } from '@/interfaces/product.interface';
import { createUpdateProductAction } from '../actions/create-update-product.action';

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['product', { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
    // enabled: !!id
  });

  const mutation = useMutation({
    // function is call when you call mutate or mutateAsync (mutation function)
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      // this function is called when you all is success
      // return result of promise
      console.log({ product });
      // Invalidar caché
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({
        queryKey: ['product', { id: product.id }],
      });

      // Actualizar queryData
      queryClient.setQueryData(['products', { id: product.id }], product);
    },
    onError: (error) => {
      console.log({ error });
    },
    onSettled: () => {
      console.log('Mutation finalizada' );
    },
    onMutate: (newProduct) => {
      console.log({ newProduct });
      // return { previousProduct: queryClient.getQueryData(['product', { id: newProduct.id }]) }
    }
  });


  // mutation.mutate
  // const handleSubmitForm = async (productLike: Partial<Product>) => {
  //   console.log({ productLike });
  // };

  return {
    ...query,
    mutation,
  };
};

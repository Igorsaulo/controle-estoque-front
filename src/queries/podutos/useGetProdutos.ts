import { getProdutos } from "../../libs/api/produto/getProdutos";
import { useQuery } from 'react-query';


type queryParams = {
    page?: number;
    search?: string;
}

export const useGetProdutos = (queryParams?: queryParams) => {
    const { isLoading, isError, isSuccess, data, refetch } = useQuery(
        'getProdutos',
        () => getProdutos(queryParams),
        {
            retry: false,
        }
    );

    return {
        isLoading,
        isError,
        isSuccess,
        refetch,
        data: data?.data,
    };
};
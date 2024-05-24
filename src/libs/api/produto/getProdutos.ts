import { api } from '..';

type queryParams = {
    page?: number;
    search?: string;
}

export const getProdutos = async (params?: queryParams) => {
    const token = window.sessionStorage.getItem('accessToken');
    return await api.get('/products/', {
        params,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
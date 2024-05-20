'use-client';
import { create } from 'zustand';

export interface IProfile {
    id: string | null;
    user: string | null;
}

export type Acess_token = {
    access: string;
    refresh: string;
};

type UseAuthProps = {
    access_token: Acess_token
    profile: IProfile;
    login: (access: string, refresh: string) => void;
    logout: () => void;
    setProfile: (dataProfile: IProfile) => void;
};

const getInitialToken = () => {
    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('accessToken');
        if (token)
        return token;
    }
    return '';
};

const profile: IProfile = {
    user: null,
    id: null,
};

export const useAuth = create<UseAuthProps>(set => ({
    profile,
    access_token: {
        access: getInitialToken(),
        refresh: '',
    },
    login: (access, refresh) => {
        set(state => ({
            ...state,
            access_token: {
                access,
                refresh,
            },
        }));
        sessionStorage.setItem('accessToken', access);
        sessionStorage.setItem('refreshToken', refresh);
    },
    logout: () => {
        set(state => ({
            ...state,
            access_token: {
                access: '',
                refresh: '',
            },
            profile: {
                user: null,
                id: null,
            },
        }));
        sessionStorage.removeItem('accessToken');
    },
    setProfile: dataProfile => {
        set(state => ({
            ...state,
            profile: dataProfile,
        }));
    },
}));
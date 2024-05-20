import { useState, useEffect } from 'react';
import { useAuth } from '../libs/zustand/useAuth';
import { useProfile } from '../queries/auth/pofile';

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { access_token, setProfile } = useAuth();
  const { data } = useProfile();
  const [isClient, setIsClient] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (data) setProfile(data);
    else localStorage.removeItem('accessToken');
  }, [data, setProfile]);

  useEffect(() => {
    if (!access_token.access || access_token.access === '') {
      window.location.href = '/entrar';
    } else {
      setShowContent(true);
    }
  }, [access_token]);

  return isClient && showContent ? children : null;
}
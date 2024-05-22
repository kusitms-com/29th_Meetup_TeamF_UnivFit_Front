'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { fetchSocialLogin } from '@/api/auth';
import { setTokenCookie } from '@/app/actions/cookies';

const AuthKakaoCallback = () => {
  const router = useRouter();

  const code = new URL(window.location.href).searchParams.get('code');

  const [onlyOnce, setOnlyOnce] = useState(true);

  useEffect(() => {
    if (!onlyOnce) return;
    const fetchLogin = async () => {
      try {
        console.log(code);
        const res2 = await fetch(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&code=${code}&client_secret=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const data = await res2.json();
        const res = await fetchSocialLogin(data.access_token, 'kakao');
        setTokenCookie(res.data.accessToken);
        if (!res.data.isOnboarding) {
          router.push('/onboarding');
        } else {
          window.location.href = '/';
        }
        setOnlyOnce(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLogin();
  }, []);

  return <></>;
};

export default AuthKakaoCallback;

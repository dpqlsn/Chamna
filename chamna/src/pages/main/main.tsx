import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as _ from './style';
import Chamna from '@_assets/Chamna.svg';

export default function Main() {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);
    const [isFirstVisit] = useState(true);

    useEffect(() => {
        const first = localStorage.getItem('first');
        if (first) navigate('/home');
        else { localStorage.setItem('hasVisited', 'true');

            const timer = setTimeout(() => {
                setFadeOut(true);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [navigate]);

    useEffect(() => {
        if (fadeOut) {
            const navTimer = setTimeout(() => {
                navigate('/home');
            }, 1000);
            return () => clearTimeout(navTimer);
        }
    }, [fadeOut, navigate]);

    if (!isFirstVisit) return null;

    return (
        <_.Container onClick={() => navigate('/home')} fadeOut={fadeOut}>
            <_.Wrapper>
                <_.Logo src={Chamna} alt="logo" />
                <_.Title>참된 나를 추억하다</_.Title>
            </_.Wrapper>
        </_.Container>
    );
}
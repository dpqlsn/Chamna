import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@_styles';
import * as _ from './style';

export default function Home() {
    const [fadeIn, setFadeIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (fadeIn) {
            const navTimer = setTimeout(() => {
                navigate('/home');
            }, 1500);
            return () => clearTimeout(navTimer);
        }
    }, [fadeIn, navigate]);

    return (
        <_.Container fadeIn={fadeIn}>
            <p>안녕하세용</p>
        </_.Container>
    );
}
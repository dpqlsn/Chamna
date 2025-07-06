import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@_styles';
import * as _ from './style';
import chamna from '@_assets/Chamna.svg';
import Clock from '@_assets/clock.svg';
import Pic from '@_assets/pic.svg';
import Camera from '@_assets/camera.svg';

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
            <_.Top>
                <_.Logo src={chamna} alt="logo" />
            </_.Top>
            <_.Bottom>
                <_.Pic src={Pic} alt="Pic" />
                <_.Camera src={Camera} alt="Camera" />
                <_.Clock src={Clock} alt="Clock" />
            </_.Bottom>
        </_.Container>
    );
}
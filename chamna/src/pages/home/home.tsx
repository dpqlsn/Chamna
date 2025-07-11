import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '@_styles';
import * as _ from './style';
import chamna from '@_assets/Chamna.svg';
import Clock from '@_assets/clock.svg';
import Pic from '@_assets/pic.svg';
import Camera from '@_assets/camera.svg';

export default function Home() {
    const [fadeIn, setFadeIn] = useState(false);
    const videoRef1 = useRef<HTMLVideoElement | null>(null);
    const videoRef2 = useRef<HTMLVideoElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (fadeIn) {
            const navTimer = setTimeout(() => navigate('/home'), 1500);
            return () => clearTimeout(navTimer);
        }
    }, [fadeIn, navigate]);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if (videoRef1.current) videoRef1.current.srcObject = stream;
                if (videoRef2.current) videoRef2.current.srcObject = stream;
            })
            .catch((err) => {
                console.error("웹캠 접근 실패", err);
            });
    }, []);

    const captureAndNavigate = () => {
        if (!videoRef1.current) return;

        const video = videoRef1.current;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const capturedImage = canvas.toDataURL('image/png');

        navigate('/image', { state: { capturedImage } });
    };

    return (
        <_.Container fadeIn={fadeIn}>
            <_.Top>
                <_.Logo src={chamna} alt="logo" onClick={() => navigate('/')} />
            </_.Top>

            <_.VideoWrapper>
                <_.Video ref={videoRef1} autoPlay playsInline muted />
                <_.VideoRight ref={videoRef2} autoPlay playsInline muted />
            </_.VideoWrapper>

            <_.Bottom>
                <_.Clock src={Clock} alt="Clock" />
                <_.Camera src={Camera} alt="Camera" onClick={captureAndNavigate} />
                <_.Pic src={Pic} alt="Pic" />
            </_.Bottom>
        </_.Container>
    );
}
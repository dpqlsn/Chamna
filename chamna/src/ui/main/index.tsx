import * as _ from './style';
import Image from 'next/image';
import Webcam from 'react-webcam';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Main() {
    const webcamRef = useRef<Webcam>(null);
    const [capture, setCapture] = useState<string | null>(null);
    const [showTimerOptions, setShowTimerOptions] = useState(false);
    const [countdown, setCountdown] = useState<number | null>(null);
    const router = useRouter();

    // 가장 최근 이미지 저장
    const persistCapture = (src: string | null) => {
        if (src) sessionStorage.setItem('chamna_capture', src);
        else sessionStorage.removeItem('chamna_capture');
    };

    const handleCapture = () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setCapture(imageSrc);
            persistCapture(imageSrc);
        }
        setCountdown(null);
    };

    const handleTimerClick = () => {
        setShowTimerOptions(prev => !prev);
    };

    const startTimer = (seconds: number) => {
        setShowTimerOptions(false);
        setCountdown(seconds);

        const timerInterval = setInterval(() => {
            setCountdown(prev => {
                if (prev && prev > 1) {
                    return prev - 1;
                } else {
                    clearInterval(timerInterval);
                    handleCapture();
                    return null;
                }
            });
        }, 1000);
    };

    return (
        <_.Container>
            <_.Wrapper>
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    mirrored={true}
                    screenshotFormat="image/jpeg"
                    style={{ width: '100%', height: '80vh', borderRadius: '4px', objectFit: 'cover' }}
                />
                {countdown !== null && <_.Count>{countdown}</_.Count>}
            </_.Wrapper>
            <_.LightWrapper>
                <_.Frame>
                    {capture ? (
                        <img src={capture} alt="preview" />
                    ) : (
                        <Webcam audio={false} mirrored={true} style={{ width: '100%', height: '100%', borderRadius: '2px', objectFit: 'cover' }} />
                    )}
                    preview
                </_.Frame>
                <Image src="/assets/heartflower.svg" alt="flower" width={360} height={360} />
            </_.LightWrapper>
            <_.Group>
                <_.Icon src="/assets/arrow.svg" alt="arrow" width={50} height={50} onClick={() => { persistCapture(capture); router.push('/deco'); }} />
                <_.Icon src="/assets/camera.svg" alt="camera" width={50} height={50} onClick={handleCapture} />
                <_.Icon src="/assets/timer.svg" alt="timer" width={50} height={50} onClick={handleTimerClick} />

                {showTimerOptions && (
                    <_.TimerOption>
                        {[3, 5, 10].map(sec => (
                            <_.Timer key={sec} onClick={() => startTimer(sec)}>
                                {sec}초
                            </_.Timer>
                        ))}
                    </_.TimerOption>
                )}
            </_.Group>
        </_.Container>
    );
}
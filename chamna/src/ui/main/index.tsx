import * as _ from './style';
import Image from 'next/image';
import Webcam from 'react-webcam';
import { useRef, useState } from 'react';

export default function Main() {
    const webcamRef = useRef<Webcam>(null);
    const [capture, setCapture] = useState<string | null>(null);

    const handleCapture = () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setCapture(imageSrc);
        }
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
                <_.Group>
                    <Image src="/assets/timer.svg" alt="timer" width={50} height={50} style={{ cursor: 'pointer' }} />
                    <Image src="/assets/camera.svg" alt="camera" width={50} height={50} style={{ cursor: 'pointer' }} onClick={handleCapture} />
                </_.Group>
            </_.Wrapper>

            <_.LightWrapper>
                <_.Frame>
                    {capture ? (
                        <img src={capture} alt="preview" style={{ width: '80%', height: '25vh', borderRadius: '2px', objectFit: 'cover' }} />
                    ) : (
                        <Webcam audio={false} mirrored={true} style={{ width: '80%', height: '25vh', borderRadius: '2px', objectFit: 'cover' }} />
                    )}
                    preview
                </_.Frame>
                <Image src="/assets/heartflower.svg" alt="flower" width={344} height={320} />
            </_.LightWrapper>
        </_.Container>
    );
}
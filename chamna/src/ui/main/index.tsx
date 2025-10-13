import * as _ from './style';
import Image from 'next/image';
import Webcam from 'react-webcam';

export default function Main() {
    return (
        <_.Container>

            <_.Wrapper>
                <Webcam
                    audio={false}
                    mirrored={true}
                    style={{ width: '100%', height: '80vh', borderRadius: '4px', objectFit: 'cover' }}
                />
                <_.Group>
                    <Image src="/assets/timer.svg" alt="timer" width={50} height={50} style={{ cursor: 'pointer' }} />
                    <Image src="/assets/camera.svg" alt="camera" width={50} height={50} style={{ cursor: 'pointer' }} />
                </_.Group>
            </_.Wrapper>
            <_.LightWrapper>
                <_.Frame>
                    <Webcam
                        audio={false}
                        mirrored={true}
                        style={{ width: '80%', height: '25vh', borderRadius: '2px', objectFit: 'cover' }}
                    />
                    preview
                </_.Frame>
                <Image src="/assets/heartflower.svg" alt="flower" width={344} height={320} />
            </_.LightWrapper>
        </_.Container>
    );
}
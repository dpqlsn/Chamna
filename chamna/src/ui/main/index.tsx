import * as _ from './style';
import Image from 'next/image';

export default function Main() {
    return (
        <_.Container>
            <_.Wrapper>
                <_.Flower>
                    <Image src="/assets/flower.svg" alt="flower" width={390} height={390} style={{ backgroundColor: 'transparent' }} />
                </_.Flower>
                <_.Box />
                <_.Group>
                    <Image src="/assets/timer.svg" alt="timer" width={50} height={50} style={{ cursor: 'pointer' }} />
                    <Image src="/assets/camera.svg" alt="camera" width={50} height={50} style={{ cursor: 'pointer' }} />
                </_.Group>
            </_.Wrapper>
            <_.Wrapper>
                <Image src="/assets/heartflower.svg" alt="flower" width={344} height={338} />
                <_.Frame />
            </_.Wrapper>
        </_.Container>
    );
}
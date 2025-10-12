import * as _ from './style';
import Image from 'next/image';

export default function Landing() {
    return (
        <_.Container>
            <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
            <_.Title>참된 나를 추억하다</_.Title>
        </_.Container>
    );
}
import * as _ from './style';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Landing() {
    const router = useRouter();

    return (
        <_.Container onClick={() => router.push('/main')}>
            <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
            <_.Title>참된 나를 추억하다</_.Title>
        </_.Container>
    );
}
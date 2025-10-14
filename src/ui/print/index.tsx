import * as _ from './style';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Landing() {
    const router = useRouter();

    return (
        <_.Container onClick={() => router.push('/main')}>
            <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
            <_.Title>사진을 출력하였습니다</_.Title>
            <_.Subtitle>다시 사진 찍으러 가기</_.Subtitle>
        </_.Container>
    );
}
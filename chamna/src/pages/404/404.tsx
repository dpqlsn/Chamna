import * as _ from './style';
import Logo from '@_assets/Chamna.svg';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
    const navigate = useNavigate();

    return(
        <_.Container>
            <_.Logo src={Logo} alt="logo" />
            <_.Title>잘못된 경로 요청입니다</_.Title>
            <_.SubTitle onClick={() => navigate(-1)}>이전 페이지로 돌아가기</_.SubTitle>
        </_.Container>
    )
}
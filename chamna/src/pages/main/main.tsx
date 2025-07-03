import * as _ from './style';
import '@_styles';
import Chamna from '@_assets/Chamna.svg';

export default function Main(){
    return(
        <_.Container>
            <_.Wrapper>
                <img src={Chamna} alt='logo' />
                <_.Title>참된 나를 추억하다</_.Title>
            </_.Wrapper>
        </_.Container>
    )
}
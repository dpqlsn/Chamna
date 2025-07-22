import { useLocation, useNavigate } from 'react-router-dom';
import chamna from '@_assets/Chamna.svg';
import * as _ from './style';

export default function Image() {
    const navigate = useNavigate();
    const location = useLocation();
    const capturedImage = location.state?.capturedImage;

    return (
        <_.Container>
            <_.Top>
                <_.Logo src={chamna} alt="logo" onClick={() => navigate('/')} />
            </_.Top>
                {capturedImage ? (
                    <_.Pic src={capturedImage} alt="image" />
                ) : (
                    <p>이미지가 없습니다.</p>
                )}
        </_.Container>
    );
}
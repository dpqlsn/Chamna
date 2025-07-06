import { useLocation } from 'react-router-dom';

export default function Image() {
    const location = useLocation();
    const capturedImage = location.state?.capturedImage;

    return (
        <>
            {capturedImage ? (
                <img src={capturedImage} alt="캡쳐 이미지" style={{transform: 'scaleX(-1)'}} />
            ) : (
                <p>이미지가 없습니다.</p>
            )}
        </>
    );
}
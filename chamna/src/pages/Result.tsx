import { useLocation } from 'react-router-dom';

const Result: React.FC = () => {
    const location = useLocation();
    const imageSrc = location.state?.image;

    return (
        <div>
            {imageSrc ? (
                <img src={imageSrc} alt="captured" style={{ transform: 'scaleX(-1)' }} />
            ) : (
                <p>이미지가 없습니다.</p>
            )}
        </div>
    );
};

export default Result;
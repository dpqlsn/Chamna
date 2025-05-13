import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Final: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const imageSrc = location.state?.image;
    const frameColor = location.state?.frameColor;

    const handleDownload = () => {
        if (!imageSrc) return;
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'my-photo.jpg'; // 저장될 파일명
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="final-page">
            <div className="final-box">
                <div className={`final-frame ${frameColor}`}>
                    <img src={imageSrc} alt="final" className="final-image" />
                </div>
            </div>
            <div className="final-button left" onClick={() => navigate('/')}>
                <div className="btn-label">처음으로</div>
            </div>
            <div className="final-button right" onClick={handleDownload}>
                <div className="btn-label">저장하기</div>
            </div>
        </div>
    );
};

export default Final;

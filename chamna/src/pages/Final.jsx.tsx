import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import saveIcon from '../pic/save.png';
import backIcon from '../pic/back.png';

const FinalResult: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const imageSrc = location.state?.image;
    const frameColor = location.state?.frameColor;

    return (
        <div className="final-page">
            <div className="final-box">
                <div className={`final-frame ${frameColor}`}>
                    <img src={imageSrc} alt="final" className="final-image" />
                </div>
            </div>
            <div className="final-button left" onClick={() => navigate('/')}>
                <div className="btn-label">처음으로</div>
                <img src={backIcon} alt="back" className="btn-icon" />
            </div>
            <div className="final-button right" onClick={() => alert('저장되었습니다.')}>
                <div className="btn-label">저장하기</div>
                <img src={saveIcon} alt="save" className="btn-icon" />
            </div>
        </div>
    );
};

export default FinalResult;

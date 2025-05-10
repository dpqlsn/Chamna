import { useLocation } from 'react-router-dom';
import '../App.css';
import logo from '../pic/chamna.jpg';
import Bframe from '../pic/Bframe.png';
import Sframe from '../pic/Sframe.png';

const Result: React.FC = () => {
    const location = useLocation();
    const imageSrc = location.state?.image;

    return (
        <>
        <img src={logo} width="67px" alt="logo" />
                <div className="content-area">
                    <div className="container">
                        <div className="white-background" />
                        <img src={imageSrc} alt="captured" className="photo" />
                    </div>
                    <div className = "frame-area">
                        <div className = "text">프레임 크기 선택</div>
                        <img src={Bframe} width="67px" alt="B" style={{ marginRight: "16px" }} />
                        <img src = {Sframe} width = "51px" alt="S" />
                    </div>
                <div className="footer" />
            </div>
        </>
    );
};

export default Result;

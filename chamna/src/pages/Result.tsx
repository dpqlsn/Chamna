import { useLocation } from 'react-router-dom';
import '../App.css';
import '../pic/Bframe.png';
import '../pic/Sframe.png';
import '../pic/chamna.jpg';
import logo from '../pic/chamna.jpg';

const Result: React.FC = () => {
    const location = useLocation();
    const imageSrc = location.state?.image;

    return (
        <div className="result-wrapper">
            <img src={logo} width='67px' />
            <div className="content-area">
                <div className="polaroid-frame">
                        <img
                            src={imageSrc}
                            alt="captured"
                            className="photo"
                        />
                </div>
            </div>
            <div className="footer">
        </div>
        </div>
    );
};

export default Result;

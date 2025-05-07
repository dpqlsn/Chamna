import { useLocation } from 'react-router-dom';
import '../App.css';
import logo from '../pic/chamna.jpg';

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
                <div className="footer" />
            </div>
        </>
    );
};

export default Result;

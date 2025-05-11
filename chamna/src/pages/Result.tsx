import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import logo from '../pic/chamna.jpg';
import Bframe from '../pic/Bframe.png';
import Sframe from '../pic/Sframe.png';
import arrow from '../pic/arrow.png';

const Result: React.FC = () => {
    const location = useLocation();
    const imageSrc = location.state?.image;
    const [selectedColor, setSelectedColor] = useState<'pink' | 'white' | null>(null);

    const whiteBackgroundStyle = selectedColor === 'pink' ? { backgroundColor: '#F9B4BB' } : { backgroundColor: 'white' };

    return (
        <>
            <img src={logo} width="67px" alt="logo" />
            <div className="content-area">
                <div className="container">
                    <div className="white-background" style={whiteBackgroundStyle} />
                    <img src={imageSrc} alt="captured" className="photo" />
                </div>
                <div className="parent">
                    <div className="item-area">
                        <div className="text">프레임 크기 선택</div>
                        <img src={Bframe} width="67px" alt="B" style={{ marginRight: "16px" }} />
                        <img src={Sframe} width="51px" alt="S" />
                    </div>
                    <div className="item-area">
                        <div className="text" style={{ marginTop: "44px" }}>프레임 선택</div>
                        <div
                            className={`Pcolor-box ${selectedColor === 'pink' ? 'selected' : ''}`}
                            onClick={() => setSelectedColor('pink')}
                        />
                        <div
                            className={`Wcolor-box ${selectedColor === 'white' ? 'selected' : ''}`}
                            onClick={() => setSelectedColor('white')}
                        />
                    </div>
                </div>
                <div className="result">
                    <div className="r-text">결과보기</div>
                    <img src={arrow} width="27px" alt="arrow" style={{ justifyContent: "center" }} />
                </div>
                <div className="footer" />
            </div>
        </>
    );
};

export default Result;

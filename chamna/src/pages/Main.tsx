import { useState, useRef, useEffect } from 'react';
import '../index.css';
import '../App.css';
import logo from '../pic/chamna.jpg';
import camera from '../pic/camera.png';
import img from '../pic/img.png';
import alarm from '../pic/alarm.png';
import Webcam from 'react-webcam';

const Main: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [Time, setSelectedTime] = useState<number | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const webcamRef = useRef<Webcam>(null);

    useEffect(() => {
        if (Time !== null) {
            const timer = setTimeout(() => {
                capture();
            }, Time * 1000);
            return () => clearTimeout(timer);
        }
    }, [Time]);

    const handleAlarmClick = () => {
        setIsModalOpen(true);
    };

    const handleTimeSelect = (time: number) => {
        setSelectedTime(time);
        setIsModalOpen(false);
    };

    const capture = () => {
        if (webcamRef.current) {
            const image = webcamRef.current.getScreenshot();
            if (image) {
                setImageSrc(image);
            }
        }
    };

    return (
        <>
            <div className="logo">
                <img src={logo} width='67px'/>
                    <div className="wrapper">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            style={{ transform: 'scaleX(-1)' }}
                        />
                    {imageSrc && (
                        <div>
                            <img src={imageSrc} alt="captured" style={{ transform: 'scaleX(-1)' }} />
                        </div>
                    )}
                </div>
            </div>

            <div className='wrap'>
                <img src={alarm} width='60px' onClick={handleAlarmClick} />
                <img src={camera} width='62px' />
                <img src={img} width='60px' />
            </div>

            {isModalOpen && (
                <div className="modal-content">
                    <p onClick={() => handleTimeSelect(3)}>3s</p>
                    <p onClick={() => handleTimeSelect(5)}>5s</p>
                    <p onClick={() => handleTimeSelect(10)}>10s</p>
                </div>
            )}

            {Time !== null && (
                <div className="time">
                    {Time}
                </div>
            )}
        </>
    );
};

export default Main;

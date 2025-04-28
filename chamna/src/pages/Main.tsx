import { useState } from 'react';
import '../index.css';
import '../App.css';
import logo from '../pic/chamna.jpg';
import camera from '../pic/camera.png';
import img from '../pic/img.png';
import alarm from '../pic/alarm.png';

const Main: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [Time, setSelectedTime] = useState<number | null>(null);

    const handleAlarmClick = () => {
        setIsModalOpen(true);
    };

    const handleTimeSelect = (time: number) => {
        setSelectedTime(time);
        setIsModalOpen(false);
    };

    return (
        <>
            <img src={logo} width='67px' />
            <div className='wrap'>
                <img src={alarm} width='60px' onClick={handleAlarmClick} />
                <img src={camera} width='62px' />
                <img src={img} width='60px' />
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p onClick={() => handleTimeSelect(3)}>3s</p>
                        <p onClick={() => handleTimeSelect(5)}>5s</p>
                        <p onClick={() => handleTimeSelect(10)}>10s</p>
                    </div>
                </div>
            )}

            {Time !== null && (
                <div className="time">
                    {Time}s
                </div>
            )}
        </>
    );
}

export default Main;

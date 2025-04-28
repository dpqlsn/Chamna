import { useState } from 'react';
import '../index.css';
import '../App.css';
import logo from '../pic/chamna.jpg';
import camera from '../pic/camera.png';
import img from '../pic/img.png';
import alarm from '../pic/alarm.png';

function Main() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAlarmClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
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
                        <p>모달 내용</p>
                        <button onClick={handleCloseModal}>닫기</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Main;

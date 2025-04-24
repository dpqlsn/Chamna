import '../index.css';
import'../App.css';
import logo from '../pic/chamna.jpg';
import camera from '../pic/camera.png';
import img from '../pic/img.png';
import alarm from '../pic/alarm.png';

function Main() {
    return(
        <>
        <img src ={logo} width='67px' />
        <div className='wrap'>
            <img src ={alarm} width='60px' />
            <img src ={camera} width='62px' />
            <img src ={img} width='60px' />
        </div>
        </>
    )
}

export default Main;
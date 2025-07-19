import { useState } from 'react';
import * as _ from './style';

interface props {
    onModal: () => void;
}

export const Timer = ({ onModal }: props) => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (value: number) => {
        setSelected(value);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onModal();
        }
    };

    return(
        <_.Overlay onClick={handleOverlayClick}>
            <_.Container>
                <_.ButtonWrapper>
                    <_.TimeButton selected={selected === 3} onClick={() => handleSelect(3)}>3s</_.TimeButton>
                    <_.TimeButton selected={selected === 5} onClick={() => handleSelect(5)}>5s</_.TimeButton>
                    <_.TimeButton selected={selected === 10} onClick={() => handleSelect(10)}>10s</_.TimeButton>
                </_.ButtonWrapper>
            </_.Container>
        </_.Overlay>
    )
}
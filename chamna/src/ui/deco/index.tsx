import * as _ from "./style";
import { useEffect, useState } from "react";

export default function Deco() {
    const [capture, setCapture] = useState<string | null>(null);

    useEffect(() => {
        const stored = sessionStorage.getItem('capture');
        if (stored) setCapture(stored);
    }, []);

    return (
        <_.Container>
            <_.Frame>
                {capture ? (
                    <_.Img src={capture} alt="captured" />
                ) : (
                    <div>촬영된 사진이 없습니다</div>
                )}
            </_.Frame>
        </_.Container>
    );
}
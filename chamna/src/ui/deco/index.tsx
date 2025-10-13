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
      {capture ? (
        <img src={capture} alt="captured" style={{ width: '100%', height: '100vh', objectFit: 'contain' }} />
      ) : (
        <div>촬영된 사진이 없습니다</div>
      )}
    </_.Container>
  );
}
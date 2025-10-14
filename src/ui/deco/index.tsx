import * as _ from "./style";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCaptureStore } from "@/lib/useCaptureStore";
import { saveCapturedImage } from "@/lib/saveImage";

export default function Deco() {
    const [capture, setCapture] = useState<string | null>(null);
    const [filter, setFilter] = useState<string>("none");
    const globalCapture = useCaptureStore((state) => state.capture);
    const router = useRouter();

    useEffect(() => {
        if (globalCapture) setCapture(globalCapture);
    }, [globalCapture]);

    const Filter = [
        { name: "기본", comp: _.FilterNone, value: "none" },
        { name: "흑백", comp: _.FilterGray, value: "grayscale(100%)" },
        { name: "세피아", comp: _.FilterSepia, value: "sepia(100%)" },
        { name: "대비", comp: _.FilterContrast, value: "contrast(150%)" },
        { name: "밝기", comp: _.FilterBright, value: "brightness(130%)" },
    ];

    return (
        <_.Container>
            <_.TopGroup onClick={() => router.push("/main")}>
                <Image src="/assets/arrow.svg" alt="arrow" width={24} height={24} style={{ transform: "rotate(180deg)" }} />
                <_.Text>다시 찍기</_.Text>
            </_.TopGroup>
            <_.Wrapper>
                <_.Frame>
                    {capture ? (
                        <_.Img src={capture} alt="captured" style={{ filter }} />
                    ) : (
                        <_.Err>촬영된 사진이 없습니다</_.Err>
                    )}
                </_.Frame>
                <_.Color>
                    <_.Text>필터</_.Text>
                    <_.FilterList>
                        {Filter.map(({ name, comp: Comp, value }, i) => (
                            <Comp
                                key={i}
                                onClick={() => setFilter(value)}
                                title={name}
                                style={{
                                    border: filter === value ? "2px solid #65A1C0" : "none",
                                }}
                            />
                        ))}
                    </_.FilterList>
                </_.Color>
            </_.Wrapper>
            <_.Group
                onClick={async () => {
                    if (!capture) return;
                    await saveCapturedImage(capture, filter);
                    router.push("/print");
                }}
            >
                <Image src="/assets/arrow.svg" alt="arrow" width={24} height={24} />
                <_.Text>출력하기</_.Text>
            </_.Group>
        </_.Container>
    );
}
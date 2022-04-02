import { MarqueeData } from '../interface';
export declare class MarqueeScreen {
    marqueeDataList: MarqueeData[];
    cvs: HTMLCanvasElement;
    private ctx;
    private marqueeInstances;
    private marqueeHeights;
    private triggeredIndex;
    constructor(marqueeDataList: MarqueeData[]);
    private init;
    private canvasShaper;
    private initMarqueeInstances;
    changeMarqueeAtSpecificIndex(marqueeIndex: number, data: MarqueeData): void;
    getPointerAtIndex(x: number, y: number): number;
    pointerAt(x: number, y: number, isClick?: boolean): void;
    triggerCancelPointerEvent(): void;
}

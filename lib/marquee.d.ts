import { MarqueeData } from '../interface';
export declare class Marquee {
    width: number;
    x: number;
    y: number;
    marqueeData: MarqueeData;
    private ctx;
    private dist;
    private actualWidth;
    private actualHeight;
    private stringTemplate;
    private cvs;
    private cacheOpacity;
    constructor(width: number, x: number, y: number, marqueeData: MarqueeData, ctx: CanvasRenderingContext2D);
    static setStyle(marqueeData: MarqueeData, ctx: CanvasRenderingContext2D): void;
    static getMetricData(marqueeData: MarqueeData, width: number): {
        actualWidth: number;
        actualHeight: number;
        stringTemplate: string;
    };
    private init;
    refresh(): void;
    private syncMetricData;
    private animate;
    triggerPointerOutEvent(): void;
    triggerPointerInEvent(): void;
    modify(width: number, x: number, y: number, data: MarqueeData): void;
}

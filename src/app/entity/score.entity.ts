export class Score {
    name: string;
    gameplay: number;
    presentation: number;
    narrative: number;
    quality: number;
    sound: number;
    content: number;
    pacing: number;
    balance: number;
    uiux: number;
    impression: number;
    total: number;

    constructor(name: string) {
        this.name = name;
        this.gameplay = 0;
        this.presentation = 0;
        this.narrative = 0;
        this.quality = 0;
        this.sound = 0;
        this.content = 0;
        this.pacing = 0;
        this.balance = 0;
        this.uiux = 0;
        this.impression = 0;
        this.total = 0;
    }
}
import { SerialPrefix } from "../enum/serial-prefix.enum";

export class SerialBuilder {
    prefix: SerialPrefix;
    date: Date;

    constructor(prefix: SerialPrefix, date: Date) {
        this.prefix = prefix;
        this.date = date;
    }

    generate(): string {
        const serial: string = this.prefix + this.serializeDate(this.date);
        return serial;
    }

    serializeDate(date: Date): string {
        const result: string = `${this.prefix}-${date.getMonth().toLocaleString()}-${date.getFullYear().toLocaleString()}`;
        return result;
    }
}
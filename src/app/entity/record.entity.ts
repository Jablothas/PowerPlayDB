import { RecordStatus } from "../enum/record-status.enum";
import { Replay } from "../enum/replay.enum";
import { Score } from "./score.entity";

export class Record {
    private name: string;
    private location: string;
    private replay: Replay;
    private status: RecordStatus;
    private dateStart: Date | undefined;
    private dateEnd: Date | undefined;
    private difficulty: string | undefined;
    private playtimeSteam: number | undefined;
    private note: string | undefined;
    private imagePath: string | undefined;
    private score: Score | undefined;

    constructor(name: string, location: string, replay: Replay, status: RecordStatus) {
        this.name = name;
        this.location = location;
        this.replay = replay;
        this.status = status;
    }
}

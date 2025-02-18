import { MistakeType } from "./MistakeType";
import { Subject } from "./Subject";

interface MistakeProps{
    subject: Subject;
    topic: string;
    exercise: string;
    problem: number;
    problemText: string;
    mistake: MistakeType;
    notes: string;
}
export default MistakeProps;


enum Status {
    start = 'start',
    inProgress = 'inProgress',
    finished = 'finished'
}

export class Task {

    public id: number;
    public taskName: string;
    public description: string;
    public owner: string;
    public duration: number;
    public status: string;

    constructor( taskName: string, description:string, owner: string, duration:number, status:string){
        this.id = Math.random();
        this.taskName = taskName;
        this.description = description;
        this.owner = owner;
        this.duration = duration;
        this.status = status;
    }
}
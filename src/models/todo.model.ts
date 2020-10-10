export class Todo{
    
    /**
     *
     */
    constructor(
        public id: Number,
        public todo: String,
        public done: Boolean,
    ) {
        
    }

    toString(){
        return this.id + ". To DO: " + this.todo + ", To do is done? " + this.done;
    }
}
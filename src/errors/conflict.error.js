import { BaseError } from "./Base.error.js";

export class ConflictError extends BaseError{
    constructor(message){
        super()
        this.message = message
        this.name = "Conflict Error"
        this.status = 409
    }
}
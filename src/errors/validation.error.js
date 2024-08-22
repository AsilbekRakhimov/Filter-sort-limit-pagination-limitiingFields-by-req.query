import { BaseError } from "./Base.error.js";

export class ValidationError extends BaseError{
    constructor(message){
        super()
        this.name = "Validation error"
        this.message = message
        this.status = 403
    }
}
export class ProblemDetails {
    private type: string;
    private title: string;
    private status: number;
    private detail: string;
    private errors: {name: string, reason: string}[];

    public constructor(status: number, errors: {name: string, reason: string}[], type: string = "about:blank", title: string = "Invalid request", detail: string = "See the errors field for more detail.") {
        this.status = status;
        this.errors = errors;
        this.type = type;
        this.title = title;
        this.detail = detail;
    }
}
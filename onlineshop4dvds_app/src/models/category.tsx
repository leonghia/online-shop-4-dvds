export interface Category {
    id: number;
    name: string;
}

export class CategoryCreate {
    public type: number;
    public name: string;

    public constructor(type: number, name: string) {
        this.type = type;
        this.name = name;
    }
}

export class CategoryUpdate {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }
}
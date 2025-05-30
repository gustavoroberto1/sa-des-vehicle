type Product = {
    id: string;
    name: string;
    description: string;
    category: string;
    mark: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
}

type Mark = {
    id: string;
    name: string;
}

type Model = {
    id: string;
    name: string;
    numberOfPorts: number;
    fuelType: string;
    createdAt: Date;
    updatedAt: Date;
}

type Production = {
    id: string;
    model: string;
    color: string;
    amount: number;
    optional: string[];
    createdAt: Date;
    updatedAt: Date;
}

type Review = {
    id: string;
    production: {
        model: string;
        color: string;
        amount: number;
        optional: string[]
    }
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
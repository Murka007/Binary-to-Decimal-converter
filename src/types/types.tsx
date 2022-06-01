export enum SelectOptions {
    binary,
    octal,
    decimal,
    hexadecimal,
    string
}

export type ReadonlyNumber = { readonly [key: string]: number };
export type ReadonlyString = { readonly [key: string]: string };
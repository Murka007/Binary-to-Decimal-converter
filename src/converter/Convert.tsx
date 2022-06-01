import { ReadonlyNumber, ReadonlyString, SelectOptions } from "../types/types";

const NumberSystem: ReadonlyNumber = {
    binary: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16
}

const Chars: ReadonlyString = {
    binary: "01 ",
    octal: "01234567 ",
    decimal: "0123456789 ",
    hexadecimal: "0123456789ABCDEF "
};

export function formatInput(input: string, from: number, trim: boolean = true): string {
    const AllowedChars = Chars[SelectOptions[from]];
    if (!AllowedChars) return input;

    // Remove extra characters
    let filtered = input.replace(new RegExp(`[^${AllowedChars}]`, "gi"), "");
    if (trim) filtered = filtered.trim();
    return filtered.replace(/\s\s*/g, " ");
}

export function convert(input: string, from: number, to: number): string {
    const str = SelectOptions.string;
    const NumberToNumber = from !== str && to !== str;
    const NumberToString = from !== str && to === str;
    const StringToNumber = from === str && to !== str;
    const StringToString = from === str && to === str;
    if (StringToString) return input;

    const Decoding = NumberSystem[SelectOptions[from]];
    const Encoding = NumberSystem[SelectOptions[to]];

    const chars = formatInput(input, from).split(StringToNumber ? "" : " ");
    return chars.map(char => {
        const decoded = parseInt(char, Decoding) || 0;
        if (NumberToNumber) return decoded.toString(Encoding);
        if (NumberToString) return String.fromCharCode(decoded);
        if (StringToNumber) return char.charCodeAt(0).toString(Encoding);
        return char;
    }).join(NumberToString ? "" : " ");
}
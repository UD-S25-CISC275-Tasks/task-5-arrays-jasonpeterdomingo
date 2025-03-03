/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length < 1) {
        return [];
    }
    const firstLastNum: number[] =
        numbers.length > 1 ?
            [numbers[0], numbers[numbers.length - 1]]
        :   [...numbers, ...numbers];
    return firstLastNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map(
        (numbers: number): number => numbers * 3,
    );
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const strNum: number[] = numbers.map(
        (numbers: string): number =>
            parseInt(numbers) ? parseInt(numbers) : Number(0), // ternary operator to check if string can be parsed as an int
    );
    return strNum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars: string[] = amounts.map((amount: string): string =>
        amount.startsWith("$") ? amount.slice(1) : amount,
    );
    const toInt: number[] = noDollars.map((amount: string): number =>
        parseInt(amount) ? parseInt(amount) : 0,
    );
    return toInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestion: string[] = messages.filter(
        (message: string): boolean =>
            message[message.length - 1] === "!" ||
            message[message.length - 1] !== "?",
    );
    const shouting: string[] = noQuestion.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
    return shouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThan4: number = words.reduce(
        (currentTotal: number, word: string) =>
            word.length < 4 ? currentTotal + 1 : currentTotal,
        0,
    );
    return lessThan4;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const correctColor: boolean = colors.every(
        (color: string): boolean =>
            color.toLowerCase() === "red" ||
            color.toLowerCase() === "green" ||
            color.toLowerCase() === "blue",
    );
    return correctColor;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (!addends.length) return "0=0";

    const sum: number = addends.reduce(
        (currentTotal: number, addend: number): number =>
            (currentTotal += addend),
        0,
    );

    const strAddition: string = addends
        .map(
            (addend: number, i: number): string =>
                i === 0 ? String(addend) : `+${addend}`, // string formatting
        )
        .join("");
    return `${sum}=${strAddition}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negativeInd: number = values.findIndex(
        (value: number): boolean => value < 0,
    );

    if (negativeInd < 0) {
        const noNegSum: number = values.reduce(
            (curr: number, num: number): number => (curr += num),
            0,
        );
        return [...values, noNegSum];
    }

    const sum: number = values.reduce(
        (curr: number, num: number, i: number): number =>
            i < negativeInd ? curr + num : curr,
        0,
    );
    const answer: number[] = [...values];
    answer.splice(negativeInd + 1, 0, sum);
    return answer;
}

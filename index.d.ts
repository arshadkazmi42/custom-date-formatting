declare const _default: {
    getNextOrPrevDateCustomFormat(format: string, daysToAdd: number): string;
    getNextOrPrevMinuteDateCustomFormat(format: string, minutesToAdd: number): string;
    getNextOrPrevSecondDateCustomFormat(format: string, secondsToAdd: number): string;
    customSourceDateFormatToCustomNewDateFormat(date: Date, currentFormat: string, newFormat: string): string;
    getTimeStampFromCurrentDateFormat(date: Date, currentFormat: string): number;
};
export = _default;

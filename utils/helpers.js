
export function objectsToArray(object) {
    let result = [];

    Object.values(object).forEach((value) => {
        if (typeof value === "string") {
            result = [...result, value];
        } else if (typeof value === "object" && !Array.isArray(value) && value !== null) {
            result = [...result, ...objectsToArray(value)];
        }

        return undefined;
    });

    return result;
}
export function objectsToString(object) {
    return objectsToArray(object).join(" ");
}

export function findMatch(data, find, defaultValue) {
    const founded = data.findIndex((el) => el === find);

    return founded >= 0 ? find : defaultValue;
}


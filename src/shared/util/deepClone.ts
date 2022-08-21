

export default function deepClone<T>(data: T) {
    return JSON.parse(JSON.stringify(data))
}
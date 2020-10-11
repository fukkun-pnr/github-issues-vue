export const factory = (data: any, override: any) => {
    return { ...data, ...override };
}
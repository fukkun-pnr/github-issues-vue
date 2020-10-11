import camelcase from "lodash.camelcase";
import mapvalues from "lodash.mapvalues";
import mapkeys from "lodash.mapkeys";

export const mapKeysDeep = (data: any, callback: (val: any, key: string) => string): any => {
    if (data instanceof Array) {
        return data.map((d) => mapKeysDeep(d, callback));
    } else if (data instanceof Object) {
        return mapvalues(mapkeys(data, callback), val => mapKeysDeep(val, callback));
    }
    return data;
};

export const mapKeysCamelCase = (data: any) => mapKeysDeep(data, (_, key) => camelcase(key));

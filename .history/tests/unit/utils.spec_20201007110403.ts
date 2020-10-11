import { mapKeysDeep, mapKeysCamelCase } from "@/utils";

describe("utils", () => {
    it("mapKeysDeep", () => {
        const data = [
            {
                key1: ["arr1", "arr2"],
                key2: {
                    key3: "hoge"
                },
            },
        ];
        const result = mapKeysDeep(data, (val, key) => key.toUpperCase());
        expect(result).toContain("Key1");
    });
});


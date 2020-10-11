import { mapKeysDeep, mapKeysCamelCase } from "@/utils";

describe("utils", () => {
    it("mapKeysDeep", () => {
        const data = [
            {
                data_key1: ["arr1", "arr2"],
                data_key2: {
                    data_key3: "hoge"
                },
            },
        ];
        const result = mapKeysDeep(data, (val, key) => key.toUpperCase());
        expect(result[0]).toHaveProperty("DATA_KEY1");
        expect(result[0]).toHaveProperty("DATA_KEY2");
        expect(result[0]["DATA_KEY1"]).toEqual(["arr1", "arr2"]);
        expect(result[0]["DATA_KEY2"]).toHaveProperty("DATA_KEY3");
        expect(result[0]["DATA_KEY2"]["DATA_KEY3"]).toBe("hoge");
    });
});


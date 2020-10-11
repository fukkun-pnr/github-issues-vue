import { mapKeysDeep, mapKeysCamelCase } from "@/utils";

describe("utils", () => {
    const data = [
        {
            data_key1: ["arr1", "arr2"],
            data_key2: {
                data_key3: "hoge"
            },
        },
    ];

    it("mapKeysDeep -> Keyが大文字に変換される事", () => {
        const result = mapKeysDeep(data, (val, key) => key.toUpperCase());
        expect(result[0]).toHaveProperty("DATA_KEY1");
        expect(result[0]).toHaveProperty("DATA_KEY2");
        expect(result[0]["DATA_KEY2"]).toHaveProperty("DATA_KEY3");
    });

    it("mapKeysDeep -> valueが変換されない事", () => {
        const result = mapKeysDeep(data, (val, key) => key.toUpperCase());
        expect(result[0]["DATA_KEY1"]).toEqual(["arr1", "arr2"]);
        expect(result[0]["DATA_KEY2"]["DATA_KEY3"]).toBe("hoge");
    });

    it("mapKeysCamelCase -> キャメルケースに変換される事", () => {
        const result = mapKeysCamelCase(data);
        expect(result[0]).toHaveProperty("dataKey1");
        expect(result[0]).toHaveProperty("dataKey2");
        expect(result[0]["dataKey2"]).toHaveProperty("dataKey3");
    });
});


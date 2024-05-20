import {MeshPlugin} from "@graphql-mesh/types";
import { APQStore, useAPQ } from "@graphql-yoga/plugin-apq";
import {PromiseOrValue} from "graphql/jsutils/PromiseOrValue";
import {LRU, lru} from "tiny-lru";

class MyAPQStore implements APQStore {
    private cache: LRU<string>;

    constructor() {
        this.cache = lru(1000);
    }
    get(key: string): PromiseOrValue<string | null | undefined> {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        return null;
    }
    set(key: string, query: string) {
        this.cache.set(key, query);
    }
}

export default [
    useAPQ({
        store: new MyAPQStore()
    })
] as MeshPlugin<any>[];
import { computed, ComputedRef, reactive, ref } from '@vue/composition-api';
import { mapKeysCamelCase } from '@/utils';

export default function useApi() {
    const _loading = ref(false);
    const loading = computed(() => _loading.value);

    const onCancel = (abortController: AbortController) => {
        abortController && abortController.abort();
    };

    const call = async <Req, Res>(method: string, url: string, params?: Req): Promise<{ headers: Headers; contents: Res }> => {
        const abortController = new AbortController();
        _loading.value = true;
        const options = {
            method: method,
            body: method === 'POST' ? JSON.stringify(params ?? {}) : null,
            headers: {
                'content-type': 'application/json'
            }
        };
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Fetch error: ${response.statusText}`);
        }
        _loading.value = false;
        const headers = response.headers;
        const contents = mapKeysCamelCase(await response.json());

        return {
            headers,
            contents
        };
    };

    const get = <Res>(url: string) => {
        return call<void, Res>('GET', url);
    };

    const post = <Req, Res>(url: string, params: Req) => {
        return call<Req, Res>('POST', url, params);
    };

    return {
        get,
        post,
        loading,
    };
}
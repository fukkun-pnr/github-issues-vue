import fetchMock from "jest-fetch-mock";
import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);


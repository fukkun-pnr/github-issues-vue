import fetchMock from "jest-fetch-mock";
import { createLocalVue, mount, shallowMount } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);
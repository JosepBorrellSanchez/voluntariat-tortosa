import { mount } from '@vue/test-utils';
import Example from '../../resources/assets/js/components/ExampleComponent.vue';

describe ('Example', () => {
    it('contains example title', () => {
        let wrapper = mount(Example);

        expect(wrapper.html()).toContain('Example Component');
    });
});
import { mount } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('HeaderComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(HeaderComponent);
    });

    it('renders the logo with the correct alt text', () => {
        expect(wrapper.find('#logo').attributes('alt')).toBe('TruckMe Logo');
    });

    it('renders the navigation links', () => {
        expect(wrapper.find('nav').exists()).toBe(true);

        const navItems = wrapper.findAll('nav ul li');
        expect(navItems.length).toBe(4);

        expect(navItems.at(0).text()).toBe('Home');
        expect(navItems.at(1).text()).toBe('Sobre Nós');
        expect(navItems.at(2).text()).toBe('Serviços');
        expect(navItems.at(3).text()).toBe('Contatos');
    });
});

import { mount } from '@vue/test-utils';
import '@testing-library/jest-dom';
import ContactFormComponent from '@/components/ContactFormComponent.vue';

describe('ContactFormComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ContactFormComponent);
    });

    it('exibe uma mensagem confirmando o envio de mensagem', async () => {
        await wrapper.setData({ email: 'teste@teste.com', message: 'Mensagem de teste' });
        await wrapper.find('form').trigger('submit.prevent');

        expect(wrapper.text()).toContain('Formulario enviado com sucesso');
    });

    it('verifica se ocorre um erro ao enviar a mensagem', async () => {
        // Simulando um erro no envio (você deve ajustar conforme sua lógica de erro)
        await wrapper.setData({ email: 'teste@teste.com', message: 'Mensagem de teste' });
        // Suponha que você tenha um método para simular o erro
        await wrapper.vm.simulateError();
        await wrapper.find('form').trigger('submit.prevent');

        expect(wrapper.text()).toContain('Erro ao Enviar o formulario. Tente novamente');
    });

    it('verifica se exibe um alerta "Todos os campos são obrigatórios"', async () => {
        await wrapper.setData({ email: '', message: '' });
        await wrapper.find('form').trigger('submit.prevent');

        expect(wrapper.text()).toContain('Todos os campos são obrigatórios');
    });

    it('verifica se o e-mail foi preenchido e é válido', async () => {
        await wrapper.setData({ email: 'emailinvalido', message: 'Mensagem de teste' });
        await wrapper.find('form').trigger('submit.prevent');

        expect(wrapper.text()).toContain('Por favor, insira um endereço de e-mail válido');
    });
});

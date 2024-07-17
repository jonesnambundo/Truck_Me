<template>
    <section id="contatos">
        <div class="container">
            <div class="contact-container">
                <form @submit.prevent="handleSubmit" class="contact-left" id="contact-form">
                    <div class="contact-left-title">
                        <h2>Contactos</h2>
                        <hr />
                    </div>
                    <input type="hidden" name="access_key" value="4b419ad7-41aa-4f73-9f43-cb8dedc0b2f4" />
                    <input type="text" v-model="name" placeholder="Your name" class="contact-inputs" required />
                    <input type="email" v-model="email" placeholder="Your email" class="contact-inputs" required />
                    <textarea v-model="message" placeholder="Your Message" class="contact-inputs" required></textarea>
                    <button type="submit">Submit <img src="../../src/assets/arrow_icon.png" alt="" /></button>
                </form>
                <div class="contact-right">
                    <img src="../../src/assets/right_img.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactFormComponent',
    data() {
        return {
            name: '',
            email: '',
            message: '',
        };
    },
    methods: {
        handleSubmit() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!this.name || !this.email || !this.message) {
                alert("Todos os campos são obrigatórios.");
                return;
            }

            if (!emailPattern.test(this.email)) {
                alert("Por favor, insira um endereço de e-mail válido.");
                return;
            }

            // If all validations pass, submit the form
            const formData = new FormData();
            formData.append("access_key", "4b419ad7-41aa-4f73-9f43-cb8dedc0b2f4");
            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("message", this.message);

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })
                .then(response => {
                    if (response.ok) {
                        alert("Formulário enviado com sucesso!");
                        this.resetForm();
                    } else {
                        alert("Erro ao enviar o formulário. Tente novamente.");
                    }
                })
                .catch(() => {
                    alert("Erro ao enviar o formulário. Tente novamente.");
                });
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.message = '';
        },
    },
};
</script>

<style scoped>
#contatos {
    background: linear-gradient(#ffdad5, #fff7f9);
}

.contact-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.contact-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.contact-left-title h2 {
    font-weight: 600;
    color: #a363aa;
    font-size: 40px;
    margin-bottom: 5px;
}

.contact-left-title hr {
    border: none;
    width: 120px;
    height: 5px;
    background-color: #a363aa;
    border-radius: 10px;
    margin-bottom: 20px;
}

.contact-inputs {
    width: 400px;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 25px;
    font-weight: 500;
    color: #666;
    border-radius: 50px;
}

.contact-left textarea {
    height: 140px;
    padding-top: 15px;
    border-radius: 20px;
    resize: none;
}

.contact-inputs:focus {
    border: 2px solid #ff994f;
}

.contact-inputs::placeholder {
    color: #a9a9a9;
}

.contact-left button {
    display: flex;
    align-items: center;
    padding: 15px 30px;
    font-size: 16px;
    color: #fff;
    gap: 10px;
    border: none;
    border-radius: 50px;
    background: linear-gradient(270deg, #ff994f, #fa6d86);
    cursor: pointer;
}

.contact-left button img {
    height: 15px;
}

.contact-right img {
    width: 500px;
}
</style>
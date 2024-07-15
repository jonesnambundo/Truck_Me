<template>
    <section id="servicos">
        <div class="container">
            <h2 class="servicos__title">Nossos Serviços </h2>
            <table>
                <thead>
                    <tr>
                        <th>Serviço</th>
                        <th>Imagem</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="index">
                        <td>{{ product.service }}</td>
                        <td><img :src="product.image" :alt="product.service" class="product-image" /></td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import rastreioImage from '@/assets/rastreio.jpg';
import logisticaImage from '@/assets/logistica.jpg';
import transporteImage from '@/assets/transporte.jpg';

export default {
    name: 'ServicesTableComponent',
    data() {
        return {
            products: [
                {
                    service: 'Gestão de Transporte',
                    image: rastreioImage,
                    description: 'Monitoramento e controle de operações logísticas.',
                    price: 'R$ 10,00'
                },
                {
                    service: 'Tecnologias para Logística',
                    image: logisticaImage,
                    description: 'Ferramentas tecnológicas para otimização de processos de transporte.',
                    price: 'R$ 20,00'
                },
                {
                    service: 'Transporte de Cargas',
                    image: transporteImage,
                    description: 'Soluções de frete para diversos tipos de carga',
                    price: 'R$ 30,00'
                }
            ]
        }
    }
}
</script>

<style scoped>
#servicos {
    background: #FBF7F7;
    padding-top: 30px;
}

.container {
    padding: 0 20px; /* Add padding to container for spacing */
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #4CAF50;
    text-align: left;
}

.product-image {
    max-width: 100%;
    height: 90px;
    border-radius: 8px;
    object-fit: cover;
}

@media (max-width: 1022px) {
    .container {
        max-width: 1200px; 
        margin: 0 auto; 
    }

    table {
        margin: 0 auto; 
        width: auto; 
    }
}

@media (max-width: 768px) {
    table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }
}
</style>

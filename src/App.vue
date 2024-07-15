<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent />
    <main>
      <header>
      </header>
      <main>
        <AboutComponent :imageSrc="require('@/assets/app_truck_me.png')" 
        imageAlt="Aplicativo da TruckMe"
          title="Sobre Nós" 
          caption="Quem Somos" 
          description="A Truckme é uma empresa inovadora no setor de transporte e logística,
                    dedicada a proporcionar soluções eficientes e personalizadas para nossos clientes. Nossa solução
                    inteligente surgiu devido à necessidade de inovação e agilidade no modelo tradicional dos processos
                    de frete, objetivando dinamizar o dia a dia dos nossos clientes e trazer muito mais economia."
          moreCaption="Nossa Missão" 
          moreDescription="Nossa missão é transformar o transporte de cargas em uma experiência simples,
                        prática e eficiente. Estamos comprometidos em oferecer um serviço
                        confiável, seguro e acessível para todos os nossos clientes." />
      </main>
    </main>
    <ServicesTableComponent />
    <GalleryComponent />
    <ContactFormComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import BannerComponent from './components/BannerComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ServicesTableComponent from './components/ServicesTableComponent.vue'
import GalleryComponent from './components/GalleryComponent .vue';
import ContactFormComponent from './components/ContactFormComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ServicesTableComponent,
    GalleryComponent,
    ContactFormComponent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'F29LT Riwaya Italic', sans-serif;
  overflow-x: hidden;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

@font-face {
  font-family: "F29LT Riwaya Italic";
  src: url("https://db.onlinewebfonts.com/t/a831675c355af267d4dade89bf89e1f2.eot");
  src: url("https://db.onlinewebfonts.com/t/a831675c355af267d4dade89bf89e1f2.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/a831675c355af267d4dade89bf89e1f2.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/a831675c355af267d4dade89bf89e1f2.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/a831675c355af267d4dade89bf89e1f2.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/a831675c355af267d4dade89bf89e1f2.svg#F29LT Riwaya Italic")format("svg");
}

.servicos__title,
.servicos__gallery {
  font-size: 24px;
  color: #a363aa;
  padding: 20px 0;
  text-align: center;
}
</style>

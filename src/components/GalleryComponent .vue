<template>
  <section id="gallery__section">
    <div class="container">
      <h2 class="servicos__gallery">Galeria de Fotos</h2>
      <div class="gallery-wrap">
        <img :src="backBtn" id="backBtn" @click="scrollLeft(-1)" alt="Back" />
        <div class="gallery" ref="gallery">
          <div class="gallery-row">
            <span v-for="(image, index) in visibleImages" :key="index" class="gallery-item">
              <img :src="image" alt="Gallery Image" @click="handleImageClick(image)" />
            </span>
          </div>
        </div>
        <img :src="nextBtn" id="nextBtn" @click="scrollLeft(1)" alt="Next" />
      </div>
    </div>
  </section>
</template>

<script>
import backBtn from '@/assets/back.png';
import nextBtn from '@/assets/next.png';
import image1 from '@/assets/1.jpg';
import image2 from '@/assets/2.jpg';
import image3 from '@/assets/3.jpg';
import image4 from '@/assets/4.jpg';
import image5 from '@/assets/5.jpg';
import image6 from '@/assets/6.jpg';

export default {
  name: 'GalleryComponent',
  data() {
    return {
      images: [image1, image2, image3, image4, image5, image6],
      scrollAmount: 1, // Ajustado para rolar uma imagem por vez
      currentIndex: 0,
      backBtn,
      nextBtn,
    };
  },
  computed: {
    visibleImages() {
      return this.images.slice(this.currentIndex, this.currentIndex + 3);
    },
  },
  methods: {
    scrollLeft(direction) {
      this.currentIndex += direction;
      this.currentIndex = Math.max(0, Math.min(this.currentIndex, this.images.length - 3));
    },
    handleImageClick(image) {
      console.log('Clicked image:', image);
      // Implementar lógica para visualização ampliada se necessário
    },
  },
};
</script>

<style scoped>
#gallery__section {
  background-color: #FBF7F7;
  padding-bottom: 90px;
}

.gallery {
  width: 100%;
  max-width: 900px;
  display: flex;
  overflow: hidden;
}

.gallery-row {
  display: flex;
  gap: 20px;
}

.gallery-item {
  flex: 1;
  max-width: 300px;
  position: relative;
}

.gallery img {
  width: 100%;
  height: auto;
  filter: grayscale(100%);
  transition: transform 0.5s;
}

.gallery-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}

#backBtn,
#nextBtn {
  width: 50px;
  cursor: pointer;
  margin: 40px;
}

.gallery img:hover {
  filter: grayscale(0);
  cursor: pointer;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .gallery {
    max-width: 100%;
  }
  #backBtn,
  #nextBtn {
    width: 40px;
    margin: 20px;
  }
}

@media (max-width: 500px) {
  .gallery-item {
    max-width: 150px; /* Adjust to fit two images */
  }
  
  .gallery {
    gap: 10px; /* Reduce gap for smaller screens */
  }
  
  #backBtn,
  #nextBtn {
    margin: 10px; /* Adjust margins for buttons */
  }
}
</style>


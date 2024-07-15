<template>
    <div id="sobre" class="about-component">
        <div class="container">
            <a href="#banner" class="logo-link">
                <img class="app_truckme" :src="imageSrc" :alt="imageAlt" />
            </a>
            <div class="content">
                <h1 class="sobre__title">{{ title }}</h1>
                <h2 class="sobre__caption">{{ caption }}</h2>
                <p class="sobre__title__description">{{ description }}</p>
                <button @click="toggleShowMore" class="btn-read-more">
                    {{ showMore ? 'Leia Menos' : 'Leia Mais' }}
                </button>
                <div v-if="showMore" class="more-content">
                    <h3 class="sobre__caption">{{ moreCaption }}</h3>
                    <p class="sobre__title__description">{{ moreDescription }}</p>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    name: 'AboutComponent',
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        moreCaption: {
            type: String,
            default: ''
        },
        moreDescription: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            showMore: false
        };
    },
    methods: {
        toggleShowMore() {
            this.showMore = !this.showMore;
        }
    }
};
</script>
<style scoped>
#sobre {
    padding: 40px 20px; 
    background-color: #F0663E;
    height: 100vh;
}

#sobre .container {
    display: flex;
    flex-direction: column; 
    align-items: center;
}

.logo-link {
    cursor: pointer;
}

.app_truckme {
    max-width: 280px; 
    margin: 20px 0; 
}

.content {
    text-align: center; 
    max-width: 600px; 
    margin: 0 auto;
}

.sobre__title {
    font-size: 20px; 
    font-weight: bold;
    margin-bottom: 30px; 
    color: #fff;
}

.sobre__caption {
    font-size: 18px; 
    font-weight: 600;
    color: #fff;
    margin-top: 30px; 
}

.sobre__title__description {
    font-size: 16px; 
    font-weight: bold;
    text-align: justify;
    color: #fff;
}

.btn-read-more {
    margin: 20px 0; 
    padding: 10px 20px;
    background: #FBF7F7;
    color: black;
    text-decoration: none;
    border-radius: 50px;
    cursor: pointer;
}

.btn-read-more:hover {
    background: #f18b6d;
}

.more-content {
    margin-top: 20px; 
}

@media screen and (min-width: 720px) {
    #sobre .container {
        flex-direction: row; 
    }
    
    .app_truckme {
        max-width: 280px; 
        margin: 0 50px; 
    }

    .content {
        text-align: left; 
        padding: 0 20px;
    }

    .sobre__title {
        font-size: 22px; 
    }

    .sobre__caption {
        font-size: 20px; 
    }

    .sobre__title__description {
        font-size: 18px; 
    }
}
</style>



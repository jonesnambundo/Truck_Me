<template>
    <section id="banner">
        <div class="container">
            <h1 class="welcome">{{ welcomeText }}</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BannerComponent',
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        welcomeText: {
            type: String,
            default: 'Bem-vindo à TruckMe'
        }
    }
}
</script>

<style scoped>
#banner {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('/src/assets/background.avif') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

#banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);
    z-index: 1;
}

.container {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
}

#banner .welcome {
    font-size: 42px;
    margin: 0 0 20px;
}

/* Responsividade */
@media screen and (max-width: 760px) {
    #banner .welcome {
        font-size: 28px; 
        margin: 0 10px; 
        padding: 0 20px; 
    }
}
</style>

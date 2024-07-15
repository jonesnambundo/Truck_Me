<template>
    <header class="no-scroll">
        <div class="container">
            <img src="../../src/assets/logo.jpg" alt="TruckMe Logo" id="logo" loading="lazy">
            <button class="hamburger" @click="toggleMenu" aria-label="Menu">
                &#9776; 
            </button>
            <nav :class="{ 'active': menuActive }">
                <ul>
                    <li><a href="#banner" aria-label="Home">Home</a></li>
                    <li><a href="#sobre" aria-label="Sobre Nós">Sobre Nós</a></li>
                    <li><a href="#servicos" aria-label="Serviços">Serviços</a></li>
                    <li><a href="#contatos" aria-label="Contatos">Contatos</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            menuActive: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
        }
    }
}
</script>

<style scoped>
header {
    padding: 10px 0;
    background-color: #fff;
    color: black;
    position: fixed;
    top: 0; 
    width: 100%; 
    z-index: 1000; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;
}

#logo {
    height: 40px;
    display: block;
    margin: 0 auto;
}

.hamburger {
    display: none; 
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
}

nav {
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav li {
    display: inline;
    margin: 0 16px;
}

nav a {
    text-decoration: none;
    font-size: 18px;
    color: #F0663E;
}

nav a:hover {
    color: black;
    transition: color 0.3s;
}

.container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.no-scroll {
    overflow-x: hidden;
}

/* Responsividade */
@media screen and (max-width: 720px) {
    .hamburger {
        display: block;
    }

    nav {
        display: none; 
        width: 100%;
        text-align: center;
    }

    nav.active {
        display: block; 
    }

    nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }

    nav li {
        margin: 5px 0;
    }
}

@media screen and (min-width: 720px) {
    .container {
        flex-direction: row; 
        justify-content: space-between; 
    }

    #logo {
        margin: 0;
    }

    nav {
        display: block; 
    }

    nav ul {
        display: flex;
        flex-direction: row; 
        justify-content: flex-start; 
    }

    nav li {
        margin: 0 16px; 
    }
}
</style>

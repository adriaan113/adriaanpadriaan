<template>
    <div class="info">
        <div class="about-me">
            <h1>Adriaan van der Ploeg...</h1>
            <p>is fotograaf en beeldredacteur bij de Volkskrant</p>
            <p>maar ook enthousiast tekenaar van hoofden</p>
            <p>en front-end enthousiasteling</p>
            <img :src="portret" alt="portret van adriaan">
            <!-- <a>
                <svg width="70" height="74" viewBox="0 40 146 74" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3l70 68 70-68" stroke="#fff" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linejoin="bevel"/>
                </svg>
            </a> -->
        </div>

        <div class="contact">
            <h1>contact</h1>
            <div class="contact-details">
                <div>
                    <a href="mailto:adriaanvanderploeg@gmail.com"><p>adriaanvanderploeg@gmail.com</p></a>
                    <a href="tel: 0620966933"><p>0620966933</p></a>
                    <a href="https://www.linkedin.com/in/adriaanvanderploeg" target="_blank"><p>LinkedIn</p></a>
                </div>
                <div>
                    <!-- <p>
                        <span>Based in Rotterdam,</span> 
                        <span>the Netherlands</span>
                    </p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            portret: require('../assets/adriaan-van-der-ploeg.jpg')
        }
    }
    
}
</script>

<style lang="scss" scoped>

.info{
    background-color: wheat;

    .about-me{
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        
        img{
            width: 80%;
        }
    }
}
</style>
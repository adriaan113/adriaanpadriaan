<template>
    <footer>
        <div class="footer-container">
            <small>Copyright &copy; 2019</small>
            <small>Adriaan van der Ploeg</small>
            <small><span>Designed & coded by </span>Adriaan himself!</small>
        </div>
    </footer>
</template>

<script>

    
</script>

<style lang="scss" scoped>

$text-color: #1212d4;
$breakpoint-medium: 624px;

footer{
    background-color: $text-color;
    // margin-top: 10vh;
    // margin-bottom: -4rem;
    margin-bottom: -1rem;
    width: 110%;
    padding: 1.5rem 0;
    @media(min-width: $breakpoint-medium){
        margin-bottom: -3.2rem;
    }
    small{
        display: block;
        color: white;
    }
}
</style>
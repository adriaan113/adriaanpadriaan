<template>
    <aside class="intro-text">
        <kinesis-container class="name" tag="div">
            <kinesis-element :strength="10" tag="span" type="rotate" axis="x">
                <h1>A</h1>
            </kinesis-element>
            <kinesis-element :strength="20" tag="span" axis="y">
                <h1>d</h1>
            </kinesis-element>
            <kinesis-element :strength="5" tag="span" axis="x">
                <h1>r</h1>
            </kinesis-element> 
            <kinesis-element :strength="20" tag="span" type="rotate">
                <h1>i</h1>
            </kinesis-element>  
            <kinesis-element :strength="2" tag="span" type="scaleY" :maxY="15">
                <h2>aa</h2>
            </kinesis-element>  
            <kinesis-element :strength="15" tag="span" type="rotate">
                <h1>n</h1>
            </kinesis-element>        
        </kinesis-container>
        <h3>fotograaf(dit kan dan mooi de hele tijd verspringen</h3>
        <div class="arrow">   
            <a href="#intro-gal">
                <kinesis-container>
                    <kinesis-element :strength="3" type="scaleY" :maxY="5"> 
                        <svg width="80" height="74" viewBox="0 0 146 74" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3l70 68 70-68" stroke="#000" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linejoin="bevel"/>
                        </svg>
                    </kinesis-element> 
                </kinesis-container>  
            </a>    
        </div>
    </aside>
</template>

<script>

export default {
    
}
</script>

<style lang="scss" scoped>
aside{
   background-color: aquamarine; 
   height: 100vh;
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   justify-content: start;
   width: 100%;
   .name{
       margin: 0 auto;
       font-size: 15vw;
       display: flex;
   }
   h3{
       margin: 2rem;
   }
   
}
</style>
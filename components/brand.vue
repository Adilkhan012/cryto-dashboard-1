<template>
    <div class="logos">
        <div class="logos-slide">
            <img src="assets/img/brand/1.png" alt>
            <!-- <img src="assets/img/brand/1.png" alt>
            <img src="assets/img/brand/1.png" alt>
            <img src="assets/img/brand/1.png" alt>
            <img src="assets/img/brand/1.png" alt> -->
        </div>

    </div>
</template>

<script>
var copy= document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copy);
</script>


<style scoped>
.logos{
    overflow: hidden;
    padding: 60px 0px;
    background: white;
    white-space: nowrap;
    position: relative;
}
.logos:before,
.logos:after{
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    z-index: 2;
    content: "";
}
@keyframes slide {
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
}
.logos:before{
    left: 0;
    background: linear-gradient(to left, rgba(255,255,255,0), white) ;
}
.logos:after{
    right: 0;
    background: linear-gradient(to right, rgba(255,255,255,0), white) ;
}
.logos:hover .logos-slide {
    animation-play-state: paused;
}
.logos-slide{
    display: inline-block;
    animation: 30s slide infinite linear;
}
.logos-slide img{
    height: 50px;
    margin: 0 40px;
}
</style>
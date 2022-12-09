<template>
    <div class="flex justify-between mb-30 toto">
        <div class="flex flex-col justify-evenly">
            <p class="w-96 ml-6">
                Nous touchons notamment le bien-être psychologique au travail des salariés, caractérisé par une ambiance de travail agréable 🤗
            </p>
            <div class="max-w-sm rounded-md overflow-hidden shadow-2xl">
            <div class="px-6 py-4">
              <p class="text-gray-700 text-base">
                En effet, le mal-être au travail n’est pas anodin et présente de nombreux risques pour le salarié comme pour l’entreprise : mauvais résultats, retards, maladies et parfois même de l’absentéisme.
              </p>
            </div>
          </div>
        </div>
        <div class="img">
            <img src="../assets/ellipse4.png" class=" svg w-6/12 mb-20"/>
            <img src="../assets/vector2.png" class=" svg w-6/12 mr-36"/>
            <img src="../assets/vector3.png" class=" svg w-6/12 mt-10"/>
            <img src="../assets/iphone1.png" class="w-7/12 iphone"/>   
        </div>
    </div>
</template>
<style scoped>
.toto {
    margin-top: 160px;
}
.svg {
    position: absolute;
    transform: rotate(180deg);
    top: 0;
    z-index: -1;
    filter: blur(8px);
  -webkit-filter: blur(8px);
}
.img {
    left: 35%;
}
</style>
<template>
    <div>
        <p class="font-bold ml-12 text-xl">En quoi cela vous concerne ? </p>
    <div class="flex justify-between mb-30">
        <div>
            <img src="../assets/landing1.png" class="w-6/12 iphone"/>
            <img src="../assets/ellipse4.png" class="ml-auto svg w-6/12 mb-20"/>
            <img src="../assets/vector2.png" class="ml-auto svg w-6/12 mr-36"/>
            <img src="../assets/vector3.png" class="ml-auto svg w-6/12 mt-10"/>
        </div>
        <div class="flex flex-col justify-evenly">
            <p class="w-96 mr-6">
                En réduisant le temps de trajet travail-domicile, le télétravail a un effet positif sur l'environnement 🌱
            </p>
            <div class="max-w-sm rounded-md overflow-hidden shadow-2xl">
            <div class="px-6 py-4">
              <p class="text-gray-700 text-base">
                L’an dernier, l'ADEME a alors estimé le bénéfice environnemental de 271 kg eCO2 ainsi qu'une réduction de 3300 tonnes de CO2.
              </p>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.svg {
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(8px);
  -webkit-filter: blur(8px);
}
</style>
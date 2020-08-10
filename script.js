var img = document.querySelector('img');
var marca = document.querySelector('#marca');
var carbo = document.querySelector('#carbo');
var proteinas = document.querySelector('#proteinas')
var energia = document.querySelector('#energia')
var sal = document.querySelector('#sal')
var gordtrans = document.querySelector('#gordtrans')
var fat = document.querySelector('#fat')
var sugars = document.querySelector('#sugars')
var vitaminaa = document.querySelector('#vitaminaa')
var vitb1 = document.querySelector('#vitb1')
var vitc = document.querySelector('#vitc')
var vitd = document.querySelector('#vitd')
var formulario = document.querySelector('form');
var codeP = document.querySelector('#codeP');


function buscarProduto(code) {
fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
.then(function(response) {
  return response.json();
})
.then(function(dadosProd) {
  console.log(dadosProd); 

  img.src = dadosProd.product.image_front_small_url;
  marca.innerHTML = "Marca:   " + dadosProd.product.brands;
  carbo.innerHTML = "Carboidratos:   " + dadosProd.product.nutriments.carbohydrates;
  proteinas.innerHTML = "Proteinas:  " + dadosProd.product.nutriments.proteins; 
  energia.innerHTML = " Energia:   " + dadosProd.product.nutriments["energy-Kcal"];
  sal.innerHTML = " Sal:  " + dadosProd.product.nutriments.salt_prepared;
  gordtrans.innerHTML = " Gordura Trans:   " + dadosProd.product.nutriments["trans-fat"];
  fat.innerHTML = " Gordura:   " + dadosProd.product.nutriments.fat_prepared;
  sugars.innerHTML = " Açúcar:   " + dadosProd.product.nutriments.sugars;
  vitaminaa.innerHTML = " Vitamina A:  " + dadosProd.product.nutriments["vitamin-a"];
  vitb1.innerHTML = " Vitamina B1:  " + dadosProd.product.nutriments["vitamin-b1_value"];
  vitc.innerHTML = " Vitamina C:   " + dadosProd.product.nutriments["vitamin-c"];
  vitd.innerHTML = " Vitamina D:   " + dadosProd.product.nutriments["vitamin-d"];
}); 
}
formulario.addEventListener('submit', function(evento) { 
    evento.preventDefault();
     buscarProduto(codeP.value);
});


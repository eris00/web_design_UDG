const prvoDugme = document.querySelector('.submitDugme');
const forma = document.getElementById('forma');
const iznosRacuna = document.getElementById('iznosRacuna').value;

a = '5'
b = '4'
console.log(a+b);

function provjeraDatumaPlacanja(e) {
  e.preventDefault(); 
  var datumPlacanja = document.querySelector('.datumPlacanja').value;
  var date = new Date(datumPlacanja);

  var date2 = new Date().setDate(5);
  console.log(date);
  if (date < date2) {
    console.log('Placeno na vrijeme');
    const noviIznosRacuna = iznosRacuna.value * 0.9;
    console.log(noviIznosRacuna);
  } else {
    console.log('Nije placeno na vrijeme');
    const vrijednostIznosaRacuna = iznosRacuna.value;
    const noviIznosRacuna = vrijednostIznosaRacuna;
    console.log('Iznos Vaseg racuna je ' + noviIznosRacuna);
  }
}

forma.addEventListener('submit', provjeraDatumaPlacanja);

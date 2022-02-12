const billElement = document.getElementById('bill');
const divideElement = document.getElementById('divide');
const serviceElement = document.getElementById('service');
const out = document.getElementById('out');

function calc() {
  let bill = Number(billElement.value);
  let divide = Number(divideElement.value);
  let percent = Number(serviceElement.value);

  let tip = (bill * (percent / 100));
  let fullPrice = (bill + tip);
  let singlePrice = (fullPrice / divide);

  out.innerHTML = `
    <p>Das Trinkgeld ist: <b>${tip.toFixed(2)}€</b><p>
    <p>Die Gesamtsumme beträgt: <b>${fullPrice.toFixed(2)}€</b><p>
    <p>Der Preis pro Person ist: <b>${singlePrice.toFixed(2)}€</b><p>
  `

  if(percent === 0) {
    out.innerHTML = `
      <p>Du musst angeben wie dein Service war!</p>
    `
  }
}
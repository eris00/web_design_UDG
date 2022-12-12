

function countElectricityBill(e) {
    e.preventDefault();
    
    let date = document.getElementById("date").value
    let price = Number(document.getElementById("price").value);

    let fullDate = (date)
    let dateArray = fullDate.split("-")
    let day = dateArray[2];
    if (day <= 5) {
        // ima popusta
        var discount = Number(10) / 100;
        var totalValue = price - (price * discount)
        document.getElementById("result").innerText = totalValue.toFixed(2);
    } else {
        // nema popusta
        document.getElementById("result").innerText = price;
    }


}


const form = document.getElementById("form");

form.addEventListener('submit', countElectricityBill)





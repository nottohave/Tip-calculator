
// create button event, 5% take bill amount divide number of people, 
// display result bill per person
// take 5 percent time the result bill person then display it on tip amount

const bill_value = document.getElementById("bill-amount");
const five_percentbtn = document.querySelector('.five-percent');
const number_of_people = document.getElementById('number-of-people');
const total_bill_per_person = document.querySelector(".result-bill-per-person");
const tip_amount_per_person = document.querySelector(".result-tip-amount");

const ten_percentbtn = document.querySelector(".ten-percent");
const fifteen_percentbtn = document.querySelector(".fifteen-percent");
const twenty_five_percentbtn = document.querySelector(".twenty-five-percent");
const fifty_percentbtn = document.querySelector(".fifty-percent")

five_percentbtn.addEventListener("click" , (event) => {
    
    const bill_amount = Number.isFinite(parseInt(bill_value.value));
    const number_people = Number.isFinite(parseInt(number_of_people.value));

    five_percentbtn.style.background = "var(--green-400-)";
    ten_percentbtn.style.background = "";
    fifteen_percentbtn.style.background = "";
    twenty_five_percentbtn.style.background = "";
    fifty_percentbtn.style.background = "";

    const result_1 = bill_value.value / number_of_people.value
    total_bill_per_person.innerHTML = "$" + result_1.toFixed(2);

    const result_2 = result_1 * 0.05
    tip_amount_per_person.innerHTML = "$" + result_2.toFixed(2);

    
    
})


ten_percentbtn.addEventListener("click" , (event) => {
    
    const bill_amount = Number.isFinite(parseInt(bill_value.value));
    const number_people = Number.isFinite(parseInt(number_of_people.value));

    five_percentbtn.style.background = "";
    ten_percentbtn.style.background = "var(--green-400-)";
    fifteen_percentbtn.style.background = "";
    twenty_five_percentbtn.style.background = "";
    fifty_percentbtn.style.background = "";

    const result_1 = bill_value.value / number_of_people.value
    total_bill_per_person.innerHTML = "$" + result_1.toFixed(2);

    const result_2 = result_1 * 0.10
    tip_amount_per_person.innerHTML = "$" + result_2.toFixed(2);

    
})

fifteen_percentbtn.addEventListener("click" , (event) => {
    
    const bill_amount = Number.isFinite(parseInt(bill_value.value));
    const number_people = Number.isFinite(parseInt(number_of_people.value));

    five_percentbtn.style.background = "";
    ten_percentbtn.style.background = "";
    fifteen_percentbtn.style.background = "var(--green-400-)";
    twenty_five_percentbtn.style.background = "";
    fifty_percentbtn.style.background = "";


    const result_1 = bill_value.value / number_of_people.value
    total_bill_per_person.innerHTML = "$" + result_1.toFixed(2);

    const result_2 = result_1 * 0.15
    tip_amount_per_person.innerHTML = "$" + result_2.toFixed(2);

    
})

twenty_five_percentbtn.addEventListener("click" , (event) => {
    
    const bill_amount = Number.isFinite(parseInt(bill_value.value));
    const number_people = Number.isFinite(parseInt(number_of_people.value));

    five_percentbtn.style.background = "";
    ten_percentbtn.style.background = "";
    fifteen_percentbtn.style.background = "";
    twenty_five_percentbtn.style.background = "var(--green-400-)";
    fifty_percentbtn.style.background = "";

    const result_1 = bill_value.value / number_of_people.value
    total_bill_per_person.innerHTML = "$" + result_1.toFixed(2);

    const result_2 = result_1 * 0.25
    tip_amount_per_person.innerHTML = "$" + result_2.toFixed(2);

    
})

fifty_percentbtn.addEventListener("click" , (event) => {
    
    const bill_amount = Number.isFinite(parseInt(bill_value.value));
    const number_people = Number.isFinite(parseInt(number_of_people.value));

    five_percentbtn.style.background = "";
    ten_percentbtn.style.background = "";
    fifteen_percentbtn.style.background = "";
    twenty_five_percentbtn.style.background = "";
    fifty_percentbtn.style.background = "var(--green-400-)";

    const result_1 = bill_value.value / number_of_people.value
    total_bill_per_person.innerHTML = "$" + result_1.toFixed(2);

    const result_2 = result_1 * 0.5
    tip_amount_per_person.innerHTML = "$" + result_2.toFixed(2);

    
})

const custom_tip = document.querySelector(".custom-percent")

custom_tip.addEventListener('submit', function(event) {
    event.preventDefault();

    const custom_tipData = new FormData(event.target);

    // obtain the custom tip amount
    const customTip = custom_tipData.get('custom-tip');
    // console.log(customTip);

    five_percentbtn.style.background = "";
    ten_percentbtn.style.background = "";
    fifteen_percentbtn.style.background = "";
    twenty_five_percentbtn.style.background = "";
    fifty_percentbtn.style.background = "";


    const result_1 = bill_value.value / number_of_people.value
    total_bill_per_person.innerHTML = "$" + result_1.toFixed(2);

    const result_2 = result_1 * (customTip / 100)
    tip_amount_per_person.innerHTML = "$" + result_2.toFixed(2);

})

// create a reset button, reset all values and return 0.00 and $0.00
const resetBtn = document.querySelector(".reset-btn");
const custom_tip_amount = document.querySelector("#custom-tip-amount");

resetBtn.addEventListener("click", (event) => {
    bill_value.value = "0";
    console.log(bill_value.value);
    number_of_people.value = "0";
    console.log(number_of_people.value);
    custom_tip_amount.value = "";
    console.log(custom_tip_amount.value);
    total_bill_per_person.innerHTML = "$" + "0.00";
    tip_amount_per_person.innerHTML = "$" + "0.00";
    five_percentbtn.style.background = "";
    ten_percentbtn.style.background = "";
    fifteen_percentbtn.style.background = "";
    twenty_five_percentbtn.style.background = "";
    fifty_percentbtn.style.background = "";


})
/*const dec=document.getElementById("dec");
const reset=document.getElementById("reset");
const inc=document.getElementById("inc");
const countlabel=document.getElementById("countlabel");


let count=0;

dec.onclick = function(){

    count--;
    countlabel.textContent=count;
}
inc.onclick = function(){

    count++;
    countlabel.textContent=count;
}
reset.onclick = function(){

    count=0;
    countlabel.textContent=count;
}*/


const cb=document.getElementById("cb");
const visa=document.getElementById("visa");
const master=document.getElementById("master");
const paypal=document.getElementById("paypal");
const submit=document.getElementById("submit");
const payment=document.getElementById("payment");


submit.onclick = function() {
    if (cb.checked) {
        submit.textContent = "You are Subscribed";
    } else {
        submit.textContent = "You are not subscribed";
    }

    if (visa.checked) {
        payment.textContent = "You are paying with Visa!";
    } else if (master.checked) {
        payment.textContent = "You are paying with Mastercard!";
    } else if (paypal.checked) {
        payemnt.textContent = "You are paying with PayPal!";
    }
    else{
         payemnt.textContent="Please select a payment method";
    }
}

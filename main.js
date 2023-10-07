
// GET DOCUMENT //
document.addEventListener("DOMContentLoaded",function() {
    const rate = document.querySelectorAll(".rate");
    const body = document.querySelector("#body");
    const btn = body.querySelector("button");

//Add click event listener to the five rates
    rate.forEach(function(div){ 
        div.addEventListener("click",function(){
            //set style of the selected rate
            this.style.backgroundColor = "hsl(25, 97%, 53%)";
            this.style.color = "white";

            //Set style for the other rate
            rate.forEach(function(otherDiv){
                if (otherDiv != div) {
                    otherDiv.style.backgroundColor = "hsl(214, 13%, 25%)";
                }
            });

            //listen when submit is clicked
            btn.addEventListener("click",function(){
                const rating = div.textContent;

                //change the body
                body.innerHTML = `<img src="images/illustration-thank-you.svg" alt="illustration-thank-you">

                <div>You selected ${rating} out of 5</div>
                
                <h1>Thank You!</h1>
                
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`;
                body.classList.add("center");
            });
        });
    });
});
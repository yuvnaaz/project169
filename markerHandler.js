AFRAME.registerComponent("handler",{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found");
            this.markerFound();
        });

        this.el.addEventListener("markerLost", ()=>{
            console.log("marker is lost");
            this.markerLost();
        });
    },
    markerFound: function(){
        var ButtonDiv = document.getElementById("button-div")
        ButtonDiv.style.display = "flex"

        var orderButton = document.getElementById("order-button")
        var OrderSummary = document.getElementById("order-summary-button")

        orderButton.addEventListener("click",()=>{
            swal({
                icon: "https://i.imgur.com/4NZ6uLT.jpg",
                title: "order now",
                text: "confirm"
            });
        });

        orderSummaryButton.addEventListener("click", ()=>{
            swal({
                icon: "warning",
                title: "order summary",
                text: "work in progress"
            })
        })

    }



})
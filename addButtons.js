AFRAME.registerComponent("createbuttons", {
    init: function() {
        // 1. Create the Order button
        AFRAME.registerComponent("createbuttons", {
            init: function() {
              // 1. Create the button
              var button1 = document.createElement("button");    
              button1.innerHTML = "order now";
              button1.setAttribute("id", "order-button");
              button1.setAttribute("class", "btn btn-warning mr-3");
          
              var button3 = document.createElement("button");
              button3.innerHTML = "ORDER SUMMARY";
              button3.setAttribute("id", "order-summary-button");
              button3.setAttribute("class", "btn btn-warning mr-4");
          
          
              // 2. Append somewhere
              var buttonDiv = document.getElementById("button-div");
              buttonDiv.appendChild(button1);
              buttonDiv.appendChild(button2);  
            }
          });
    }
});


  
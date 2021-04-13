$(document).ready(function (){
    $("button").on("click", greetPerson);
});


function greetPerson(event)
{
    // total of ordered soaps
    //let total = 0;
    let title = "";

    let checkedBoxes = $("input[name=rank]:checked");

    checkedBoxes.each(function() {
        title = $(this).data("display");
    });

    // shipping cost (also works for pizza crust size!)
    let firstName = $("#firstname-box").val();
    let lastName = $("#lastname-box").val(); // "red" or "green"

    $("#type-output").text(`Hello ${title} ${firstName} ${lastName}`);
   // $("p#shipping").css("background-color", shippingColor);
}
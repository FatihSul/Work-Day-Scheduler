const currentTime = moment()
const jumboTime = moment().format("dddd, MMMM Do");
document.getElementById("currentDay").innerHTML = jumboTime;
//sets the time shown on the jumbotron



//gives the colored backgrounds according to time of day 
$(".time-block").each(function(){
    const blockTime = parseInt($(this).attr("id"));

    if (currentTime < blockTime){
        $(this).addclass("future");
    } else if (currentTime === blockTime){

        $(this).addClass("present");
    } else {

        $(this).addClass("past")
    }

})


//for the save button to save the text within the blocks
$(".saveBtn").on("click", function(){
    var blockNo = $(this).parent().attr("id");
    var blockText = $(this).siblings(".col-10").val();
    localStorage.setItem(blockNo, blockText);
    console.log("test")
})



// loads the localstorage for the text within the blocks on page load
window.onload = function(){
    $("#No9Txt").val(localStorage.getItem("9"));
    $("#No10Txt").val(localStorage.getItem("10"));
    $("#No11Txt").val(localStorage.getItem("11"));
    $("#No12Txt").val(localStorage.getItem("12"));
    $("#No1Txt").val(localStorage.getItem("1"));
    $("#No2Txt").val(localStorage.getItem("2"));
    $("#No3Txt").val(localStorage.getItem("3"));
    $("#No4Txt").val(localStorage.getItem("4"));
    $("#No5Txt").val(localStorage.getItem("5"));
}
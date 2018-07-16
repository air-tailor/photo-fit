// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require turbolinks
//= require activestorage
//= require_tree .

$(function() {
    setTimeout(function(){
      $('.flash-notice').slideUp(500);
    }, 4000);
  });

$(document).on("click", "#new-garment-next", function(){
  if($("#new-garment-title").val() == ""){
    alert("Title cannot be blank. Please give your garment a title.")
  } else {
    $("#new_garment_form_part_one").toggleClass('hidden');
    $("#new_garment_form_part_two").toggleClass('hidden');
    $("#new-garment-back").toggleClass('hidden');
    $("#new-garment-back-two").toggleClass('hidden');
    console.log($("select#garment_garment_type :selected").text())
    if ($("select#garment_garment_type :selected").text() == "Pants"){
      $("#how-to-popup img").attr('src','/assets/example_jeans.jpg');
    } else if ($("select#garment_garment_type :selected").text() == "Dress Shirt"){
      $("#how-to-popup img").attr('src','/assets/example_dress_shirt.jpg');
    } else {
      $("#how-to-popup img").attr('src','/assets/example_tshirt.jpg');
    }
  }
})

var focus;
var specificFocus;
var needFirstPoint = true;
var firstPointX;
var firstPointY;
var secondPointX;
var secondPointY;

 $(document).on("click", "#get-started", function(){
  createLine();
 });

 $(document).on("click", "#conversion-button", function(){
  focus = "conversion"
 });

$(document).on("click", ".measurement-button", function(){
  focus = "measurement"
  specificFocus = $(this).attr('data-id')
 });



// BEGIN code to create line
function createLine(){
    var canvas = $('#canvas').get(0);
    if (!canvas.getContext) { return; }
    var ctx = canvas.getContext('2d');

    $(document).on("click", "#canvas", function(e){
        var offset = $(this).offset();
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;
        if(focus === "conversion"){
          findConversion(ctx, x, y)
        } else if(focus === "measurement"){
          drawLine(ctx, x, y);
        }
    });
};
// END code to create line
//
//
// BEGIN code to actually draw a line and get an outcome


function findConversion(ctx, x, y) {
    if (needFirstPoint) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        firstPointX = x
        firstPointY = y
        needFirstPoint = false;
    }
    else {
        ctx.lineTo(x, y);
        secondPointX = x
        secondPointY = y
        height = Math.abs(secondPointY-firstPointY)
        width = Math.abs(secondPointX-firstPointX)
        distance = Math.sqrt((height*height)+(width*width))
        conversion = distance/11
        ctx.stroke();
        $("#conversion-field").val(conversion)
        needFirstPoint = true;
    }
}
// END code to actually draw a line and get an outcome
//
//
// BEGIN draw line for measurement
function drawLine(ctx, x, y) {
    if($("#conversion_field").val() > 0)
      conversion = $("#conversion-field").val()
    else {
      conversion = conversion
    }
    if (needFirstPoint) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        firstPointX = x
        firstPointY = y
        needFirstPoint = false;
    }
    else {
        ctx.lineTo(x, y);
        secondPointX = x
        secondPointY = y
        height = Math.abs(secondPointY-firstPointY)
        width = Math.abs(secondPointX-firstPointX)
        distance = Math.sqrt((height*height)+(width*width))
        measurement = (distance/conversion)
        console.log("distance " + distance)
        console.log("measurement " + measurement)
        if (specificFocus === "hips"){
          $("#hips-field").val(measurement * 2)
        }
        else {
          $("#" + specificFocus + "-field").val(measurement)
        }

        ctx.stroke();
        needFirstPoint = true;
    }
}

$(document).on("click", "#new-garment-create", function(e){
  if($("input#garment_image").val() == ""){
    e.preventDefault()
    alert("Please select or take a photograph of the garment you're adding.")
  }
});

   // how-to popup

  $(document).on("click", "#new-garment-example-button", function(e){
    if ($("#how-to-popup").hasClass('hidden')){
      $("#overlay, #how-to-popup").fadeToggle();
    }
  });


  $(document).on("click", "#how-to-exit", function(){
    $("#overlay, #how-to-popup").fadeToggle();
  })


  // check fit popup

    $(document).on("click", ".check-fit-button", function(e){
    if ($("#check-fit-popup").hasClass('hidden')){
      $("#overlay, #check-fit-popup").fadeToggle();
      var totalMatchPercent = 0
      var specific_garment = $(this).attr("data")
      var purchaseDiv;
      $(".purchase-measurements").each(function(){
        console.log($(this).attr("data"))
        if ($(this).attr("data") == specific_garment) {
          $(this).toggleClass('hidden');
          $(this).addClass('special')
        }
      })



      // individual measurement comparisons
      $("#user-measurements span").each(function(i){
        var userMeasurement = parseFloat($(this).html())
        var purchaseMeasurement = parseFloat($(".special span").eq(i).html())
        var diff = Math.abs(userMeasurement - purchaseMeasurement)
        if (diff > .5){
          $(".special p").eq(i).css('color', 'red');
          $("#user-measurements p").eq(i).css('color', 'red');
        } else {
          $(".special p").eq(i).css('color', 'green');
          $("#user-measurements p").eq(i).css('color', 'green');
        }
        var matchPercent = ((userMeasurement - diff) / userMeasurement)*100

        totalMatchPercent = totalMatchPercent + matchPercent
        if (i==0 && diff > .5){
          $("#suggested-alterations").append("<p> - Take in Waist</p>")
        }
        if ( i==1 && diff > .5 || i==2 && diff > .5) {
          if ($("#suggested-alterations:contains('Hem Pants')").length == 0){
            $("#suggested-alterations").append("<p> - Hem Pants</p>")
          }
        }
        if (i>2 && diff > .5){
          if ($("#suggested-alterations:contains('Taper Pants')").length == 0){
            $("#suggested-alterations").append("<p> - Taper Pants</p>")
          }
        }
      })

      // overall measurement comparisons
      var aveMatchPercent = (totalMatchPercent/7).toFixed(2).toString()
      $("#match-percentage").html(aveMatchPercent + "%")
    }
  });


  $(document).on("click", "#check-fit-exit", function(){
    $("#overlay, #check-fit-popup").fadeToggle();
    $(".purchase-measurements").each(function(){
      if(!$(this).hasClass('hidden')){
        $(this).toggleClass('hidden');
      }
      if($(this).hasClass('special')){
        $(this).removeClass('special');
      }
    })
    $("#suggested-alterations").html("")
  })





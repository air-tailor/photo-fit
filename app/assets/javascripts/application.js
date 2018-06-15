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
//= require jquery.ui.widget
//= require z.jquery.fileupload
//= require_tree .

$(function() {
    setTimeout(function(){
      $('.flash-notice').slideUp(500);
    }, 4000);
  });

$(document).on("click", "#new-garment-next", function(){
  $("#new_garment_form_part_one").toggleClass('hidden');
  $("#new_garment_form_part_two").toggleClass('hidden');
  $("#new-garment-back").toggleClass('hidden');
  $("#new-garment-back-two").toggleClass('hidden');
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
  console.log("click1")
 });

 $(document).on("click", "#conversion-button", function(){
  focus = "conversion"
  console.log("click2")
 });

$(document).on("click", "#hips-button", function(){
  focus = "measurement"
  specificFocus = "hips"
 });

$(document).on("click", "#outseam-button", function(){
  focus = "measurement"
  specificFocus = "outseam"
 });

$(document).on("click", "#thigh-button", function(){
  focus = "measurement"
  specificFocus = "thigh"
 });

$(document).on("click", "#knee-button", function(){
  focus = "measurement"
  specificFocus = "knee"
 });

$(document).on("click", "#calf-button", function(){
  focus = "measurement"
  specificFocus = "calf"
 });

$(document).on("click", "#ankle-button", function(){
  focus = "measurement"
  specificFocus = "ankle"
 });

$(document).on("click", "#inseam-button", function(){
  focus = "measurement"
  specificFocus = "inseam"
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
        else if (specificFocus === "outseam"){
          $("#outseam-field").val(measurement)
        }
        else if (specificFocus === "thigh"){
          $("#thigh-field").val(measurement)
        }
        else if (specificFocus === "knee"){
          $("#knee-field").val(measurement)
        }
        else if (specificFocus === "calf"){
          $("#calf-field").val(measurement)
        }
        else if (specificFocus === "ankle"){
          $("#ankle-field").val(measurement)
        }
        else if (specificFocus === "inseam"){
          $("#inseam-field").val(measurement)
        }
        ctx.stroke();
        needFirstPoint = true;
    }
}






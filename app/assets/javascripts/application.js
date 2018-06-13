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
//= require_tree .

$(function() {
    setTimeout(function(){
      $('.flash-notice').slideUp(500);
    }, 4000);
  });


// var focus;
// var specificFocus;
// var needFirstPoint = true;
// var firstPointX;
// var firstPointY;
// var secondPointX;
// var secondPointY;










//  $(document).on("click", "#get_started", function(){
//   createLine();
//  });

//  $(document).on("click", "#conversion_button", function(){
//   focus = "conversion"
//  });

// $(document).on("click", "#hips_button", function(){
//   focus = "measurement"
//   specificFocus = "hips"
//  });

// $(document).on("click", "#outseam_button", function(){
//   focus = "measurement"
//   specificFocus = "outseam"
//  });

// $(document).on("click", "#thigh_button", function(){
//   focus = "measurement"
//   specificFocus = "thigh"
//  });

// $(document).on("click", "#knee_button", function(){
//   focus = "measurement"
//   specificFocus = "knee"
//  });

// $(document).on("click", "#calf_button", function(){
//   focus = "measurement"
//   specificFocus = "calf"
//  });

// $(document).on("click", "#ankle_button", function(){
//   focus = "measurement"
//   specificFocus = "ankle"
//  });

// $(document).on("click", "#inseam_button", function(){
//   focus = "measurement"
//   specificFocus = "inseam"
//  });


// // BEGIN code to create line
// function createLine(){
//     var canvas = $('#canvas').get(0);
//     if (!canvas.getContext) { return; }
//     var ctx = canvas.getContext('2d');

//     $(document).on("click", "#canvas", function(e){
//         var offset = $(this).offset();
//         var x = e.pageX - offset.left;
//         var y = e.pageY - offset.top;
//         if(focus === "conversion"){
//           findConversion(ctx, x, y)
//         } else if(focus === "measurement"){
//           drawLine(ctx, x, y);
//         }
//     });
// };
// // END code to create line
// //
// //
// // BEGIN code to actually draw a line and get an outcome


// function findConversion(ctx, x, y) {
//     if (needFirstPoint) {
//         ctx.lineWidth = 1;
//         ctx.beginPath();
//         ctx.moveTo(x, y);
//         firstPointX = x
//         firstPointY = y
//         needFirstPoint = false;
//     }
//     else {
//         ctx.lineTo(x, y);
//         secondPointX = x
//         secondPointY = y
//         height = Math.abs(secondPointY-firstPointY)
//         width = Math.abs(secondPointX-firstPointX)
//         distance = Math.sqrt((height*height)+(width*width))
//         conversion = distance/11
//         ctx.stroke();
//         $("#conversion_field").val(conversion)
//         needFirstPoint = true;
//     }
// }
// // END code to actually draw a line and get an outcome
// //
// //
// // BEGIN draw line for measurement
// function drawLine(ctx, x, y) {
//     if($("#conversion_field").val() > 0)
//       conversion = $("#conversion_field").val()
//     else {
//       conversion = conversion
//     }
//     if (needFirstPoint) {
//         ctx.lineWidth = 1;
//         ctx.beginPath();
//         ctx.moveTo(x, y);
//         firstPointX = x
//         firstPointY = y
//         needFirstPoint = false;
//     }
//     else {
//         ctx.lineTo(x, y);
//         secondPointX = x
//         secondPointY = y
//         height = Math.abs(secondPointY-firstPointY)
//         width = Math.abs(secondPointX-firstPointX)
//         distance = Math.sqrt((height*height)+(width*width))
//         measurement = (distance/conversion)
//         console.log("distance " + distance)
//         console.log("measurement " + measurement)
//         if (specificFocus === "hips"){
//           $("#hips_field").val(measurement * 2)
//         }
//         else if (specificFocus === "outseam"){
//           $("#outseam_field").val(measurement)
//         }
//         else if (specificFocus === "thigh"){
//           $("#thigh_field").val(measurement)
//         }
//         else if (specificFocus === "knee"){
//           $("#knee_field").val(measurement)
//         }
//         else if (specificFocus === "calf"){
//           $("#calf_field").val(measurement)
//         }
//         else if (specificFocus === "ankle"){
//           $("#ankle_field").val(measurement)
//         }
//         else if (specificFocus === "inseam"){
//           $("#inseam_field").val(measurement)
//         }
//         ctx.stroke();
//         needFirstPoint = true;
//     }
// }


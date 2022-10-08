$(document).ready(function () {

     "use strict";
     // toat popup js
     //ct-visits
  //   new Chartist.Line('#ct-visits', {
  //       labels: ['11th<br/> Nov', '12th<br/> Nov', '13th<br/> Nov', '14th<br/> Nov', '15th<br/> Nov', '16th<br/> Nov', '17th<br/> Nov', '18th<br/> Nov'],
  //       series: [
  //  [250, 230, 330, 400, 325, 735, 267, 400]
  //  , [250, 230, 330, 400, 325, 735, 267, 400]
  //]
  //   }, {
  //       top: 0,
  //       low: 1,
  //       showPoint: true,
  //       fullWidth: true,
  //       plugins: [
  //  Chartist.plugins.tooltip()
  //],
  //       axisY: {
  //           labelInterpolationFnc: function (value) {
  //               return value;
  //           }
  //       },
  //       showArea: true
  //   });
     // counter
     $(".counter").counterUp({
         delay: 100,
         time: 1200
     });

     var sparklineLogin = function () {
         $('#sparklinedash').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#7ace4c'
         });
         $('#sparklinedash2').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#7460ee'
         });
         $('#sparklinedash3').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#11a0f8'
         });
         $('#sparklinedash4').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#f33155'
         });
     }
     var sparkResize;
     $(window).on("resize", function (e) {
         clearTimeout(sparkResize);
         sparkResize = setTimeout(sparklineLogin, 500);
     });
     sparklineLogin();
 });

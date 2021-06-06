

// for slider 
// 
// 
// 
// 
// Range-Health
var slider = document.getElementById("Range-Health");
var output = document.getElementById("demo-Health");
output.innerHTML = slider.value;
console.log(slider);
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Range-development
var slider1 = document.getElementById("Range-development");
var output1 = document.getElementById("demo-development");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  output1.innerHTML = this.value;
}
// Range-recreation
var slider2 = document.getElementById("Range-recreation");
var output2 = document.getElementById("demo-recreation");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  output2.innerHTML = this.value;
}
// Range-family
var slider3 = document.getElementById("Range-family");
var output3 = document.getElementById("demo-family");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
  output3.innerHTML = this.value;
}
// Range-Business
var slider4 = document.getElementById("Range-Business");
var output4 = document.getElementById("demo-Business");
output4.innerHTML = slider4.value;
slider4.oninput = function() {
  output4.innerHTML = this.value;
}
// Range-religion
var slider5 = document.getElementById("Range-religion");
var output5 = document.getElementById("demo-religion");
output5.innerHTML = slider5.value;
slider5.oninput = function() {
  output5.innerHTML = this.value;
}
// Range-contribution
var slider6 = document.getElementById("Range-contribution");
var output6 = document.getElementById("demo-contribution");
output6.innerHTML = slider6.value;
slider6.oninput = function() {
  output6.innerHTML = this.value;
}
// Range-finance
var slider7 = document.getElementById("Range-finance");
var output7 = document.getElementById("demo-finance");
output7.innerHTML = slider7.value;
slider7.oninput = function() {
  output7.innerHTML = this.value;
}

// navigation buttons

$(".test-two").hide();
$("#next-bnt").click(function(){
  $(".test-one").hide();
  $(".test-two").show();
});


$("#finsh-bnt").click(function(){

var slider = document.getElementById("Range-Health");
var s =slider.value;

var slider1 = document.getElementById("Range-development");
var s1 =slider1.value;

var slider2 = document.getElementById("Range-recreation");
var s2=slider2.value;

var slider3 = document.getElementById("Range-family");
var s3=slider3.value;

var slider4 = document.getElementById("Range-Business");
var s4=slider4.value;

var slider5 = document.getElementById("Range-religion");
var s5=slider5.value;

var slider6 = document.getElementById("Range-contribution");
var s6=slider6.value;

var slider7 = document.getElementById("Range-finance");
var s7=slider7.value;




  new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels: ["Health", "Development", "Recreation", "Family", "Business","Religion","Contribution","Finance"],
      datasets: [
        {
          label:  "wheel life",
          backgroundColor: ["rgba(151,39,106,0.5)", "rgba(142,94,162,0.5)","rgba(60,186,159,0.5)","rgba(232,195,185,0.5)","rgba(196,88,80,0.5)","rgba(205,119,62,0.5)","rgba(62,149,205,0.5)","rgb(205,190,62,0.5)"],
          data: [s,s1,s2,s3,s4,s5,s6,s7]
        }
      ]
    },
    options: {
      
      title: {
        display: true,
        text: 'YORE WHEEL LIFE ^_^'
      }
  
    }
  });
  $(".test-two").hide();
  $("#polar-chart").show();
  $("section").css("margin", "0px");
  $("section").css("height","0");

}); 
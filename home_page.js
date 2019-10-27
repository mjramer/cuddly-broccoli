  $(document).ready(function(){ready();})
  function ready(){
      create_images_in_slideshow();
      slideshow_loop();
  }

  function slideshow_loop(){

    $("#slideshow").children("div").hide(); // hide all images in slideshow
    $("#slideshow").children("div").first().fadeIn(1000); // show the first one

    setInterval(function(){change_slide()}, 3000); //every 3 sec. execute change_slide
  }

  function change_slide(){
    $("#slideshow").children("div").first() // take first element
    .fadeOut(0) // make it disappear
    .next() // go to next div
    .fadeIn(1000) // fade it in
    $("#slideshow").children("div").first().appendTo('#slideshow');
      // add the first image to the end of the slideshow
  }

  function create_images_in_slideshow(){
    var src_arr = ["inkjetPrinter.JPG", "m10.JPG", "macbook_charger.JPG",
                   "laptop_charger.jpg", "a7.JPG", "a6000.JPG", "airpods.jpg"
                  ,"angle.jpg", "bang.jpg", "beatsx.jpg", "bose_700.jpg"
                  ,"dell_monitor.jpg", "power.JPG", "screen_protector.jpg"
                  ,"sd_card.JPG", "skwitch.JPG", "solo3.jpg", "xpro2.JPG"];


    while(src_arr.length > 0 ){ // generates images in random order
      var rand_index = Math.floor(Math.random() * src_arr.length);
      var newdiv = document.createElement("div");
      var newimg = document.createElement("img");
      $(newdiv).addClass("pic" + rand_index);
      $(newimg).attr("src", src_arr[rand_index]);
      $(newimg).attr("width", $("#slideshow").width() * 4/5);
      $(newimg).attr("height", newimg.width * 2/3);
      $(newdiv).append(newimg);
      $("#slideshow").append(newdiv);
      src_arr.splice(rand_index, 1);
    }
  }

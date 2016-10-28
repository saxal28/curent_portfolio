navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  console.log(lat + " " + lon);
  
  var url = "https://api.wunderground.com/api/e9f795d54303e612/conditions/q/38.5201,-89.9840.json";
  
   $.getJSON(url, function(json) {
      console.log(json);
      //sets up variables
      var city = json.current_observation.display_location.full;
      var fTemp = Math.floor(json.current_observation.temp_f);
      var cTemp =  Math.floor(json.current_observation.temp_c);
      var currentWeather = json.current_observation.weather;
      
      
      $("#city").html(city);
      $("#weather").html(currentWeather);
      $("#temp").html(fTemp + "°");
      
      //convert Fahrenheit to Celsius
      $("#toC").click(function() {
        $("#temp").html(cTemp + "°");
      });
      $("#toF").click(function() {
        $("#temp").html(fTemp + "°");
      });
    
      // gets current date and time
      var Time = new Date();
      var hours = Time.getHours();
      var stdHours;
        if (hours > 12 ) {
          stdHours = hours - 12;
        }
      var minutes = Time.getMinutes();
      var month = Time.getMonth();
      var day = Time.getDay();
      var year = Time.getFullYear();
    
    //swaps backgrounds for different time of day 
    console.log(hours)
    console.log(currentWeather)
    if (hours > 18 && currentWeather === "Clear") {
      $("body").css("background-image", "url(https://hd.unsplash.com/reserve/oY3ayprWQlewtG7N4OXl_DSC_5225-2.jpg)")
      $(".icon").css("background-image", "url(https://cdn3.iconfinder.com/data/icons/halloween-flar/2048/909_-_Half_Moon-128.png)")
    }
    if (hours < 18 && currentWeather === "Clear" ) {
      $("body").css("background-image", "url(http://stock-wallpapers.com/wp-content/uploads/2014/12/25-Awosome-Nature-Wallpapers-25.jpg)")
      $(".icon").css("background-image", "url(https://cdn3.iconfinder.com/data/icons/picons-weather/57/06_sunny-128.png)")
    }
    if (currentWeather === "Rain" ) {
     $("body").css("background-image", "url(https://hd.unsplash.com/13/unsplash_523bf67db73f1_1.JPG)")
     $(".icon").css("background-image", "url(http://www.freeiconspng.com/uploads/rain-cloud-icon-5.png)")
    }
    if (currentWeather === "Mostly Cloudy" || currentWeather === "Partly Cloudy"|| currentWeather === "Scattered Clouds" ) {
     $("body").css("background-image", "url(https://hd.unsplash.com/photo-1469155669032-d47a7c1914d4)")
     $(".icon").css("background-image", "url(http://simpleicon.com/wp-content/uploads/cloud.png)")
    }
    if (currentWeather === "Extreme" ) {
     $("body").css("background-image", "url(http://wallpapercave.com/wp/5gXMS70.jpg)")
     $(".icon").css("background-image", "url(https://cdn4.iconfinder.com/data/icons/proglyphs-weather/512/Storm-512.png)")
    }
    // fallback day
    if (hours < 18) {
      $("body").css("background-image", "url(https://images.unsplash.com/photo-1465588042420-47a53c2d0320?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f749ec7b26a6c1f61cb84a35f90614da)")
      $(".icon").css("background-image", "url(https://cdn3.iconfinder.com/data/icons/halloween-flar/2048/909_-_Half_Moon-128.png)")
    }
    // fallback night
    if (hours > 18) {
      $("body").css("background-image", "url(https://images.unsplash.com/photo-1465588042420-47a53c2d0320?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=f749ec7b26a6c1f61cb84a35f90614da)")
      $(".icon").css("background-image", "url(https://cdn3.iconfinder.com/data/icons/halloween-flar/2048/909_-_Half_Moon-128.png)")
    }
    
   });
  
});


$("#flip").click(function () {

  let panelWidth = $("#panel").outerWidth();
  console.log(panelWidth)
  let leftpanel = $('aside').css('left')
 if (leftpanel == '0px'){
  $("aside").animate({left: `-${panelWidth}px`},500);
 }
 else{
  $("aside").animate({left: `0px`},500);
 }
 

});


$.ajax({
  url: "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3pnA43nITef-tRPTQg7nd15CVcBj5BSv59r5_2EYFngmzxR8KU5r9Lw2w",
  type: "GET",
  success: function (data) {
    $.each(data.results, function (key, value) {
      var html = `   <div class="col-md-6 col-lg-4  shadow p-2  ">
  <div class="parent-card item card  border-0 text-center position-relative overflow-hidden">

      
  <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${value.poster_path}">

  <div class="layer  layer d-flex justify-content-center  flex-column align-items-center position-absolute w-100 h-100">
     <h4>${value.title}</h4>
     <h4>${value.original_name}</h4>
     <p>${value.overview}</p>
     <p>${value.release_date}</p>
  </div>
 </div>
</div>
   `;
      $("#movis").append(html);
    });
  },
});

$("#myinput").keypress(function (e) {
  var key = e.which;

  if (key == 13) {
    // the enter key code
    var search = $("#myinput").val();

    $.ajax({
      url:
        "https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3pnA43nITef-tRPTQg7nd15CVcBj5BSv59r5_2EYFngmzxR8KU5r9Lw2w&query=" +
        search,
      type: "GET",
      success: function (data) {
        $("#movis").empty()
        $.each(data.results, function (key, value) {
          console.log(value.title);
          var html = `   <div class="col-md-6 col-lg-4  shadow p-2  ">
  <div class="parent-card item card  border-0 text-center position-relative overflow-hidden">
  <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${value.poster_path}">

  <h4>${value.original_name}</h4>
  <p>${value.overview}</p>
  <p>${value.release_date}</p>
  
  <div class="layer  layer d-flex justify-content-center  flex-column align-items-center position-absolute w-100 h-100">
     <h4>${value.title}</h4>
    
  </div>
 </div>
</div>
   `;
          $("#movis").append(html);
        });
      },
    });

  }
});

// 
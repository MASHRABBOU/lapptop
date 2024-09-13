document.getElementById("addAdvertisementButton").addEventListener("click", function() {
    document.getElementById("advertisementModal").style.display = "block";
  });
  
  document.getElementById("deleteVideosButton").addEventListener("click", function() {
    // Videolarni o'chirish funksiyasi
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("advertisementModal").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("advertisementModal")) {
      document.getElementById("advertisementModal").style.display = "none";
    }
  });
  
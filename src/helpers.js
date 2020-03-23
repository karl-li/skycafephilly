window.openNav = function() {
    document.getElementById("myNav").style.width = "100%";
}

window.closeNav = function() {
    document.getElementById("myNav").style.width = "0%";
}

// Initialize and add the Google map
window.initMap = function() {
    // The location of Sky Cafe
    var skyCafe = {lat: 39.937037, lng: -75.162849};
    // The map, centered at Sky Cafe
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: skyCafe});
    // The marker, positioned at Sky Cafe
    var marker = new google.maps.Marker({position: skyCafe, map: map});
  }

export default 'yo'
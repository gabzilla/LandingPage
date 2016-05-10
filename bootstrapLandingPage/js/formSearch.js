// var button = document.getElementById("btnSearch");
//
// button.onclick = function () {
//     var text = document.getElementById("textBoxEl").value;
//     window.open("http://www.w3schools.com");
// }
//
// function open_url(){
//    var url = document.getElementById('url');
//    url = encodeURIComponent(url); // This escapes special characters
//
//    window.location = 'http://yourdomain.com/?path=' + url; // Change the current url of the page
// }
//
//
//
// $("#WFF").click(function() {
//     window.location="www.yourwebsite.com/url/here/"+$("#text").val();
// })
    function goTo() {
      var url = document.forms[0].url.value;
      myWindow = window.open(url, "", "width=800,height=800");
      myWindow.document.write("<div src='url'></div>");
      myWindow.focus(); // sends window to front
      return false;
    }
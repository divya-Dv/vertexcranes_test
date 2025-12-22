<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vertex</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <link rel="shortcut icon" href="img/favicon.png">
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/animate.css" />
  <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/animate.min.css">
  <link href="css/style.css" rel="stylesheet">

    <style>
      .bg-image1 {height: 100vh;}
      .thanks, .ty{color: #fff;letter-spacing: 2px;}
      .intro-title{letter-spacing: 2px;}
    </style>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JKBHJC4');</script>
<!-- End Google Tag Manager -->
</head>

<body id="page-top">

  <!--/ Nav Star /-->
 <?php include_once("header.php"); ?>
  <!--/ Nav End /-->
<div id="home" class="intro route bg-image1">
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          <div>
            <img src="img/msent.gif" alt="" class="img-fluid">
          </div>
      <h1 class="ty mb-4">Thank You!!</h1>
    <h3 class="thanks">Click Below Button to download the brochure</h3>
    <button type="button" class="button button-a button-big button-rouded" onclick="downloadBrochure()">Download Brochure</button>
        </div>
      </div>
    </div>
  </div>

    <div id="preloader"></div>
<script>
function downloadBrochure() {
    const link = document.createElement('a');
    link.href = 'vertex.pdf'; // Replace with the correct file path
    link.download = 'Vertex Brochure';
    link.click();
}
</script>
      
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="lib/counterup/jquery.counterup.js"></script>
  <script src="js/main.js"></script>
  
 <script>
        // Trigger download automatically on page load
        window.onload = function() {
            const link = document.createElement("a");
            link.href = "vertex.pdf"; // Replace with actual path to your brochure
            link.download = "Vertex Brochure"; // Optional: specify the name for the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    </script>


</body>
</html>

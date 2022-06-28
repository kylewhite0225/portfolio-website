$( "#ncrpbutton" ).attr('data-buttonlink', 'https://ncrp.app')


$( "#ncrpbutton" ).click(function() {
  const buttonlink = $("#ncrpbutton").data('buttonlink')

  window.open(buttonlink)
});

$( "#ncrpgithubbutton" ).attr('data-buttonlink', 'https://github.com/Negative-Carbon-Reforestation-Project/openlayers-springboot-react-demo')


$( "#ncrpgithubbutton" ).click(function() {
  const buttonlink = $("#ncrpgithubbutton").data('buttonlink')

  window.open(buttonlink)
});
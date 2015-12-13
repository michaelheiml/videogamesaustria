//var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdE5OcDE1SENpT1g2R2JEX2tnZ3ZIWHc&output=html';
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/10MQ8nnYTIxSW7HM2VuV6sdCsX-XMYYlo-kxFz8b7DuI/pubhtml';

$(document).ready( function() {
	Tabletop.init( { key: public_spreadsheet_url,
		callback: showInfo,
		parseNumbers: true } );
	});

	function showInfo(data, tabletop) {
	var source   = $("#template").html();
	var template = Handlebars.compile(source);

	//$.each( tabletop.sheets("Cats").all(), function(i, cat) {
	$.each(tabletop.sheets("Game Companies").all(), function(i, cat) {
		var html = template(cat);
		$("#content").append(html);
	});
}
//var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdE5OcDE1SENpT1g2R2JEX2tnZ3ZIWHc&output=html';
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/10MQ8nnYTIxSW7HM2VuV6sdCsX-XMYYlo-kxFz8b7DuI/pubhtml';

var SHEETS = {
	GameCompanies: "Game Companies",
	CGAndVFXCompanies: "CG & VFX Companies",
	GameEducation: "Game Education",
	GameIndex: 'Game Index',
	Funding: 'Funding',
	NewsEventsOrganisations: 'News, Events, Organisations'
}

var source, template, $content;

$(document).ready( function() {
	Tabletop.init( { key: public_spreadsheet_url,
		callback: showInfo,
		parseNumbers: true,
		wanted: [SHEETS.GameCompanies, SHEETS.CGAndVFXCompanies]
	});
	
	$content = $('#content');
	source   = $("#template").html();
	template = Handlebars.compile(source);
	
	$content.masonry({
		itemSelector: '.entry'
	});
});

function showInfo(data, tabletop) {
	$.each(tabletop.sheets(SHEETS.GameCompanies).all(), handleGameCompany);
	$.each(tabletop.sheets(SHEETS.CGAndVFXCompanies).all(), handleCGVFXCompany);
}

function handleGameCompany(i, cat) {
	if(!~cat.Contact.indexOf('@')) {
		cat.Contact = '';
	}
	var html = $(template(cat));
	
	html.find('img').on('load', function() {
		$content.masonry();
	});
	
	$content.masonry()
		.append( html )
		.masonry( 'appended', html )
		.masonry();
}

function handleCGVFXCompany(i, cat) {
	if(!~cat['Contact Person'].indexOf('@')) {
		cat.Contact = '';
	} else {
		cat.Contact = cat['Contact Person'];
	}
	var html = $(template(cat));
	
	html.find('img').on('load', function() {
		$content.masonry();
	});
	
	$content.masonry()
		.append( html )
		.masonry( 'appended', html )
		.masonry();
}
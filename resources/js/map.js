mapStyles = {
	'cities':{
		   'displayInKey':true,
		   'displayAs':"city", //point,solid or line
		   'keyname':'City (large)',
		   'cityTypeField':'FEATURECLA',
		   'countryCapitalKeyword':'Admin-0 capital',
		   'stateCapitalKeyword':'Admin-1 capital',
		   'rankField':'SCALERANK',
		   'nameField':'NAME',
		   'font':'Arial',
		   'fontSize':12,
		   'margin':5,
		   'rankToZoom':{ //rank on left and corresponding "starting" zoom level on right (could be population, income, etc as well- any number
			   0:2,
			   1:4,
			   2:5,
			   3:6,
			   4:6,
			   5:7,
			   6:8,
			   7:9,
			   8:10,
			   9:11,
			   10:12
		   }
     },
	 'countrylabels':{
		   'displayInKey':false,
		   'displayAs':"country-label", //point,solid or line
		   'keyname':'',
		   'rankField':'labelrank',
		   'nameField':'name',
		   'font':'Arial',
		   'fontSize':12,
		   'margin':5,
		   'rankToZoom':{ //rank on left and corresponding "starting" zoom level on right (could be population, income, etc as well- any number
			   0:0,
			   1:2,
			   2:3,
			   3:4,
			   4:6,
			   5:8,
			   6:8,
			   7:9,
			   8:10,
			   9:11,
			   10:12
		   }
     },
     'countryPrimary':{
           'fillStyle':'rgba(255,255,255,1)', //rgba(240,240,240,1)
           'strokeStyle':'rgba(93,146,180,1)',
           'lineWidth':1,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':true,
		   'displayAs':"solid", //solid or line
		   'keyname':'Primary Country'
     },
     'countrySecondary':{
           'fillStyle':'rgba(244,238,228,1)',
           'strokeStyle':'rgba(93,146,180,1)',
           'lineWidth':1,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':true,
		   'displayAs':"solid", //solid or line
		   'keyname':'Secondary Country'
     },
	 'countries':{
           'fillStyle':'rgba(229,225,219,1)',
           'strokeStyle':'rgba(93,146,180,1)',
           'lineWidth':0,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':true,
		   'displayAs':"solid", //solid or line
		   'keyname':'Country'
     },
	 'boundaries':{
           'fillStyle':'rgba(0,0,0,1)',
           'strokeStyle':'rgba(130,130,130,1)',
           'lineWidth':3,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':true,
		   'displayAs':"line", //solid or line
		   'keyname':'International Boundary'
     },
	 'coastline':{
           'fillStyle':'rgba(0,0,0,1)',
           'strokeStyle':'rgba(93,146,180,1)',
           'lineWidth':0.5,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':true,
		   'displayAs':"line", //solid or line
		   'keyname':'Coastline'
     },
	 'states':{
           'fillStyle':'rgba(244,238,228,1)',
           'strokeStyle':'rgba(93,146,180,1)',
           'lineWidth':1,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':false,
		   'displayAs':"solid", //solid or line
		   'keyname':'State'
     },
     'water':{
           'fillStyle':'rgba(220,241,252,1)',
           'strokeStyle':'rgba(93,146,180,0.7)',
           'lineWidth':0,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':true,
		   'displayAs':"solid", //solid or line
		   'keyname':'Water'
     },
	 'roads':{
           'fillStyle':'rgba(150,150,150,1)',
           'strokeStyle':'rgba(150,150,150,.7)',
           'lineWidth':.5,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':true,
		   'displayAs':"line", //solid or line
		   'keyname':'Major Roads'
     },
	 'urban':{
           'fillStyle':'rgba(200,200,200,0.5)',
           'strokeStyle':'rgba(200,200,200,1)',
           'lineWidth':0.25,
		   'lineDash':[0,0],
		   'lineDashOffset':0,
		   'displayInKey':true,
		   'displayAs':"solid", //solid or line
		   'keyname':'Urban Areas'
     }
}

mapObjectsArray = [
	
	{'dataObject':'countries',
	'style':mapStyles.countries,
	'maxZoom':18,
	'minZoom':0,
	'displayLayer':true
	},
	{'dataObject':'boundaries',
	'style':mapStyles.boundaries,
	'maxZoom':18,
	'minZoom':0,
	'displayLayer':true
	},
	{'dataObject':'coastline',
	'style':mapStyles.coastline,
	'maxZoom':18,
	'minZoom':0,
	'displayLayer':true
	},
	{'dataObject':'rivers',
	'style':mapStyles.water,
	'maxZoom':18,
	'minZoom':5,
	'displayLayer':true
	},
	{'dataObject':'lakes',
	'style':mapStyles.water,
	'maxZoom':18,
	'minZoom':3,
	'displayLayer':true
	},
	{'dataObject':'cities',
	'style':mapStyles.cities,
	'maxZoom':18,
	'minZoom':0,
	'displayLayer':true
	},
	{'dataObject':'countrylabels',
	'style':mapStyles.countries,
	'maxZoom':18,
	'minZoom':0,
	'displayLayer':true
	}
];
	
lastmap.setMapOptions({
	title:{
		country:'LastMap',
		text:"Example map"
	},
	classification:{
		classification:'UNCLASS',
		classifiedBy:'classifiedBy',
		derivedFrom:'derivedFrom',
		declassifyOn:'declassifyOn',
		disclaimer:'disclaimer.'
	},
	attachmentText:'attachmentText &nbsp; | &nbsp;',
	publishDate:'publishDate &nbsp; | &nbsp;',
	productNumber:'123456',
	mapStyles:mapStyles,
	maxZoom:16,
	minZoom:2,
	defaultZoom:3,
	centerLat:40, 
	centerLon:-70,
	insetMapOptions:{
		displayInsetMap:true,
		insetMapWidth:150,
		insetMapHeight:150
	},
	mapBounds: {
		southWest:[-90,-180],
		northEast:[90,180]
	},
	displayMapKey:true,
	fieldInDataForCountryName:'sovereignt',
	fieldInDataForType:'type',
	identifierForTypeCountry:'Country',
	displayCountryLabels:true,
	primaryCountries:["Mexico","Cuba"], //Enter primary country/countries
	secondaryCountries:["Canada"], //Enter secondary country/countries
	topojsonFile:"./resources/data/world_ver29.json",
	mapDivId:"map",
	footerHeight:160
});  

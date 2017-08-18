var express = require('express');
var router = express.Router();

var Carsinfo = require('../models/usedCars.js');

var newcarsinfo=[
  {make: "Chevy",
  imagelink: "https://dxsdcl7y7vn9x.cloudfront.net/464152/7FA82EBF-D8D7-433B-A175-CB6F55D10AEA_1.jpg",
  model: "Nova",
  trim: "",
  year: 1965,
  color: "#1F3260",
  price: 29000,
  previousOwnerCount: 1},

  {make: "Chevy",
  imagelink: "http://images1.americanlisted.com/nlarge/1972-chevrolet-nova-americanlisted_66331191.jpg",
  model: "Nova",
  trim: "",
  year: 1972,
  color: "#F2841F",
  price: 25000,
  previousOwnerCount: 2},

  {make: "Ford",
  imagelink: "https://dxsdcl7y7vn9x.cloudfront.net/315296/8BEAC626-28A7-4856-9135-8843B901BF5D_1.jpg",
  model: "Mustang",
  trim: "Boss 302",
  year: 1970,
  color: "#E24B32",
  price: 37000,
  previousOwnerCount: 2},

  {make: "Ford",
  imagelink: "https://cdn04.carsforsale.com/3/1005159/8610003/852132224.jpg",
  model: "Mustang",
  trim: "Mach 1",
  year: 1970,
  color: "#FFFFFF",
  price: 17000,
  previousOwnerCount: 1},

  {make: "Chevy",
  imagelink: "https://ccpublic.blob.core.windows.net/cc-temp/listing/84/9230/1394441-1969-chevrolet-corvette-stingray-std-c.jpg",
  model: "Corvette",
  trim: "Stingray",
  year: 1969,
  color: "#FDF57E",
  price: 29000,
  previousOwnerCount: 3},

  {make: "AMC",
  imagelink: "https://dy98q4zwk7hnp.cloudfront.net/1972-AMC-Gremlin-American%20Classics--Car-100826253-d032138c8433cdb2ca1f77f2e5dcdc6a.jpg",
  model: "Gremlin",
  trim: "custom monster truck",
  year: 1972,
  color: "#6D8465",
  price: 6000,
  previousOwnerCount: 4},

  {make: "Shelby",
  imagelink: "https://ccpublic.blob.core.windows.net/cc-temp/listing/100/380/8738864-1965-ford-shelby-cobra-std-c.jpg",
  model: "Cobra",
  trim: "",
  year: 1965,
  color: "#1F42B0",
  price: 36000,
  previousOwnerCount: 1},

  {make: "Ford",
  imagelink: "https://d3dxp4akn1otfb.cloudfront.net/1974-Ford-Maverick-American%20Classics--Car-100796778-70493b00cd011e35bb150ea6f44245cb.jpg",
  model: "Maverick",
  trim: "Grabber",
  year: 1974,
  color: "#1D83EC",
  price: 18000,
  previousOwnerCount: 2},

  {make: "Chevrolet",
  imagelink: "http://s3.amazonaws.com/s3.hotrodhotline.com/ui/4/18/aIoN9OzOAL.jpg",
  model: "Roadster",
  trim: "",
  year: 1932,
  color: "#000000",
  price: 42000,
  previousOwnerCount: 4},

  {make: "Buick",
  imagelink: "https://dy98q4zwk7hnp.cloudfront.net/1964-Buick-Skylark-American%20Classics--Car-100859496-07fad1f99ccfe19b1ed9aed999e7925c.jpg",
  model: "Skylark",
  trim: "",
  year: 1964,
  color: "#C8272E",
  price: 17000,
  previousOwnerCount: 5},

  {make: "Chevrolet",
  imagelink: "https://ccpublic.blob.core.windows.net/cc-temp/listing/93/9610/8723304-1955-chevrolet-bel-air-sport-coupe-std-c.jpg",
  model: "Bel Air",
  trim: "Sport Coupe",
  year: 1955,
  color: "#A4E1D6",
  price: 61000,
  previousOwnerCount: 1},

  {make: "Chevy",
  imagelink: "https://dy98q4zwk7hnp.cloudfront.net/1968-Chevrolet-Camaro-Muscle%20&%20Pony%20Cars--Car-100852614-8e822d6fc17098864d090e6bb5a3b7ef.jpg",
  model: "Camero",
  trim: "",
  year: 1968,
  color: "#F4C841",
  price: 33500,
  previousOwnerCount: 3},

  {make: "Pontiac",
  imagelink: "https://cdn04.carsforsale.com/3/1007576/11429662/906542538.jpg",
  model: "Firebird",
  trim: "",
  year: 1967,
  color: "#57B659",
  price: 17000,
  previousOwnerCount: 7},

  {make: "Studebaker",
  imagelink: "https://dy98q4zwk7hnp.cloudfront.net/1940-Studebaker-Champion-Antiques--Car-100761322-67d026893a6d0905c9d038cac9f98654.jpg",
  model: "Champion",
  trim: "",
  year: 1940,
  color: "#C9A886",
  price: 14000,
  previousOwnerCount: 2},
];

router.get('/', ( req, res) => {
	Carsinfo.create(newcarsinfo, function(err) {
		if (err) {
			console.log(err);
			res.send('Error seeding database');
		} else {
			console.log('SEED EXECUTED');
			res.redirect('/usedCars');
		}
	});
});

router.get( '/dropdatabase' , (req , res ) => {
 Carsinfo.collection.drop();
 res.send ('You did it! You dropped the database!');
});

module.exports = router;

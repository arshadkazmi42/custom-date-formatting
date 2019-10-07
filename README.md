# Custom Date Formatting
[![Build Badge](https://api.travis-ci.org/arshadkazmi42/custom-date-formatting.svg?branch=master)](https://travis-ci.org/arshadkazmi42/custom-date-formatting)
[![npm Downloads](https://img.shields.io/npm/dt/customdateformating.svg)](https://www.npmjs.com/package/customdateformating)
[![Package Size](https://img.shields.io/bundlephobia/min/customdateformating.svg)](https://www.npmjs.com/package/customdateformating)
[![NPM Version](https://img.shields.io/npm/v/customdateformating.svg)](https://www.npmjs.com/package/customdateformating)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/custom-date-formatting.svg)](https://github.com/arshadkazmi42/custom-date-formatting/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/custom-date-formatting.svg)](https://github.com/arshadkazmi42/custom-date-formatting/commits/master)

## How to install?
[![NPM](https://nodei.co/npm/customdateformating.png)](https://www.npmjs.com/package/customdateformating/)

## Usage

### Custom Format date with Days (+/-)
Pass the <b>format</b> of  the date required and <b>numberOfDays</b> to add from current day to the Function.<br>
For previous days <b>numberOfDays</b> should be passed as negative value.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');

// This will return a string with new date
DateFormatting.getNextOrPrevDateCustomFormat("YYYY-MM-DD", 0);

// Output: "2018-10-06"

```

### Custom Format date with Minutes (+/-)
Pass the <b>format</b> of date required and <b>minutesToAdd</b> to add/subtract minutes from current time to the Function.<br> For passed minute of time, <b>minutesToAdd</b> should be passed as negative value.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');

// This will return a string with new date and time
DateFormatting.getNextOrPrevMinuteDateCustomFormat("YYYY-MM-DD HH:mm", 1);

// Output: "2018-10-06 00:39"
```

### Custom Format date with Seconds (+/-)
Pass the <b>format</b> of date required and <b>secondsToAdd</b> to add/subtract seconds from current time.<br>For passed minute of time, <b>secondsToAdd</b> should be passed as negative value.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
// This will return a string with new date and time
DateFormatting.getNextOrPrevSecondDateCustomFormat("YYYY-MM-DD HH:mm:ss", 10);

// Output: "2018-10-06 00:40:02"
```

### Custom Source Format date custom new format
Pass the <b>date</b> (input date), <b>currentFormat</b> (input date format), <b>newformat</b>. (required date format)to the Function.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');

// This will return a string with date in new format
DateFormatting.customSourceDateFormatToCustomNewDateFormat("2017-08-28 23:22:00", "YYYY-MM-DD HH:mm:ss", "dddd DD MMM YYYY");

// Output: "Monday 28 Aug 2017"
```

### Timestamp from custom date format
Pass the <b>date</b> (input date), <b>currentFormat</b> (input date format)to the function.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('customdateformatting');

// This will return input date value as timestamp in milliseconds.
DateFormatting.getTimeStampFromCurrentDateFormat("28 Aug 2017", "DD MMM YYYY");

// Output: 1503858600000
```

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a><a href="https://github.com/rogers9798"><img src="https://github.com/rogers9798.png" width="30" /></a><a href="https://github.com/msarfrazanwar"><img src="https://github.com/msarfrazanwar.png" width="30" /></a><a href="https://github.com/alexdresko"><img src="https://github.com/alexdresko.png" width="30" /></a><a href="https://github.com/alvintan05"><img src="https://github.com/alvintan05.png" width="30" /></a><a href="https://github.com/mayankDhiman"><img src="https://github.com/mayankDhiman.png" width="30" /></a><a href="https://github.com/albanmahmut"><img src="https://github.com/albanmahmut.png" width="30" /></a><a href="https://github.com/momomen"><img src="https://github.com/momomen.png" width="30" /></a><a href="https://github.com/adrianteri"><img src="https://github.com/adrianteri.png" width="30" /></a><a href="https://github.com/Apoorva-13"><img src="https://github.com/Apoorva-13.png" width="30" /></a><a href="https://github.com/nine-tails9"><img src="https://github.com/nine-tails9.png" width="30" /></a><a href="https://github.com/piyushchauhan"><img src="https://github.com/piyushchauhan.png" width="30" /></a><a href="https://github.com/roshanadh"><img src="https://github.com/roshanadh.png" width="30" /></a><a href="https://github.com/sauravjaiswalsj"><img src="https://github.com/sauravjaiswalsj.png" width="30" /></a><a href="https://github.com/chong601"><img src="https://github.com/chong601.png" width="30" /></a><a href="https://github.com/dependabot[bot]"><img src="https://github.com/dependabot[bot].png" width="30" /></a><a href="https://github.com/hyp3rflux"><img src="https://github.com/hyp3rflux.png" width="30" /></a><a href="https://github.com/shubhankarb180"><img src="https://github.com/shubhankarb180.png" width="30" /></a><a href="https://github.com/siddhartthecoder"><img src="https://github.com/siddhartthecoder.png" width="30" /></a><a href="https://github.com/kindacoder"><img src="https://github.com/kindacoder.png" width="30" /></a><a href="https://github.com/ael-mas"><img src="https://github.com/ael-mas.png" width="30" /></a><a href="https://github.com/agarwal-akash"><img src="https://github.com/agarwal-akash.png" width="30" /></a><a href="https://github.com/AlphaLazer"><img src="https://github.com/AlphaLazer.png" width="30" /></a><a href="https://github.com/anniann"><img src="https://github.com/anniann.png" width="30" /></a><a href="https://github.com/arkwrn"><img src="https://github.com/arkwrn.png" width="30" /></a><a href="https://github.com/dillbala"><img src="https://github.com/dillbala.png" width="30" /></a><a href="https://github.com/bibekluitel"><img src="https://github.com/bibekluitel.png" width="30" /></a><a href="https://github.com/BolajiAyodeji"><img src="https://github.com/BolajiAyodeji.png" width="30" /></a><a href="https://github.com/chrisgalvan"><img src="https://github.com/chrisgalvan.png" width="30" /></a><a href="https://github.com/StudentDawid"><img src="https://github.com/StudentDawid.png" width="30" /></a>

## Contributing Guidelines
Read the contributing guidelines [here](CONTRIBUTING.md)

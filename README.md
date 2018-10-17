# Custom Date Formatting
[![npm version](https://badge.fury.io/js/customdateformating.svg)](https://badge.fury.io/js/customdateformating)
[![Dependencies](https://david-dm.org/arshadkazmi42/customd-ate-formating.svg)](https://david-dm.org/arshadkazmi42/custom-date-formating)
[![npm Downloads](https://img.shields.io/npm/dm/customdateformating.svg)](https://www.npmjs.com/package/customdateformating)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a47235834dff4a88ae37bdc7460a5c7d)](https://www.codacy.com/app/arshadkazmi42/custom-date-formatting?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=arshadkazmi42/custom-date-formatting&amp;utm_campaign=Badge_Grade)

## How to install?
[![NPM](https://nodei.co/npm/customdateformating.png)](https://www.npmjs.com/package/customdateformating/)

## Small package which provides some basic functions for custom date formatting
### `Custom Format date with Days (+/-)`
Pass the <b>format</b> of  the date required and <b>numberOfDays</b> to add from current day to the Function.<br>
For previous days <b>numberOfDays</b> should be passed as negative value.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
// This will return a string with new date
DateFormatting.getNextOrPrevDateCustomFormat("YYYY-MM-DD", 0);
<br/>
Output: "2018-10-06"

```

### `Custom Format date with Minutes (+/-)`
Pass the <b>format</b> of date required and <b>minutesToAdd</b> to add/subtract minutes from current time to the Function.<br> For passed minute of time, <b>minutesToAdd</b> should be passed as negative value.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
// This will return a string with new date and time
DateFormatting.getNextOrPrevMinuteDateCustomFormat("YYYY-MM-DD HH:mm", 1);
<br/>
Output: "2018-10-06 00:39"
```

### `Custom Format date with Seconds (+/-)`
Pass the <b>format</b> of date required and <b>secondsToAdd</b> to add/subtract seconds from current time.<br>For passed minute of time, <b>secondsToAdd</b> should be passed as negative value.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
// This will return a string with new date and time
DateFormatting.getNextOrPrevSecondDateCustomFormat("YYYY-MM-DD HH:mm:ss", 10);
<br/>
Output: "2018-10-06 00:40:02"
```

### `Custom Source Format date custom new format`
Pass the <b>date</b> (input date), <b>currentFormat</b> (input date format), <b>newformat</b>. (required date format)to the Function.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
// This will return a string with date in new format
DateFormatting.customSourceDateFormatToCustomNewDateFormat("2017-08-28 23:22:00", "YYYY-MM-DD HH:mm:ss", "dddd DD MMM YYYY");
<br/>
Output: "Monday 28 Aug 2017"
```

### `Timestamp from custom date format`
Pass the <b>date</b> (input date), <b>currentFormat</b> (input date format)to the function.<br>
```javascript
// Create Instance of the DateValidator
const DateFormatting = require('customdateformatting');
// This will return input date value as timestamp in milliseconds.
DateFormatting.getTimeStampFromCurrentDateFormat("28 Aug 2017", "DD MMM YYYY");

```

# Contributors
[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/7)<br>

# Contributing Guidelines
Read the contributing guidelines [here](https://github.com/arshadkazmi42/ak-logger/blob/master/CONTRIBUTING.md)

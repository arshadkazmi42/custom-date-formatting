# Custom Date Formatting
[![npm version](https://badge.fury.io/js/customdateformating.svg)](https://badge.fury.io/js/customdateformating)
[![Dependencies](https://david-dm.org/arshadkazmi42/customd-ate-formating.svg)](https://david-dm.org/arshadkazmi42/custom-date-formating)
[![npm Downloads](https://img.shields.io/npm/dm/customdateformating.svg)](https://www.npmjs.com/package/customdateformating)

## How to install?
[![NPM](https://nodei.co/npm/customdateformating.png)](https://www.npmjs.com/package/customdateformating/)

## Small package which provides some basic functions for custom date formatting
### `getNextOrPrevDateCustomFormat`
Pass the <b>format</b> of  the date required and <b>numberOfDays</b> to add from current day to the Function.<br>
For previous days <b>numberOfDays</b> should be passed as negative value.<br>
```
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
//This will return a string with new date
DateFormatting.getNextOrPrevDateCustomFormat("YYYY-MM-DD", 0);

```

### `getNextOrPrevMinuteDateCustomFormat`
Pass the <b>format</b> of date required and <b>minutesToAdd</b> to add/subtract minutes from current time to the Function.<br> For passed minute of time, <b>minutesToAdd</b> should be passed as negative value.<br>
```
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
//This will return a string with new date and time
DateFormatting.getNextOrPrevMinuteDateCustomFormat("YYYY-MM-DD HH:mm", 1);

```

### `getNextOrPrevSecondDateCustomFormat`
Pass the <b>format</b> of date required and <b>secondsToAdd</b> to add/subtract seconds from current time.<br>For passed minute of time, <b>secondsToAdd</b> should be passed as negative value.<br>
```
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
//This will return a string with new date and time
DateFormatting.getNextOrPrevSecondDateCustomFormat("YYYY-MM-DD HH:mm:ss", 10);

```

### `customSourceDateFormatToCustomNewDateFormat`
Pass the <b>date</b> (input date), <b>currentFormat</b> (input date format), <b>newformat</b>. (required date format)to the Function.<br>
```
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
//This will return a string with date in new format
DateFormatting.customSourceDateFormatToCustomNewDateFormat("2017-08-28 23:22:00", "YYYY-MM-DD HH:mm:ss", "dddd DD MMM YYYY");

```

### `getTimeStampFromCurrentDateFormat`
Pass the <b>date</b> (input date), <b>currentFormat</b> (input date format)to the function.<br>
```
// Create Instance of the DateValidator
const DateFormatting = require('custom-date-formatting');
//This will return input date value as timestamp in milliseconds.
DateFormatting.getTimeStampFromCurrentDateFormat("28 Aug 2017", "DD MMM YYYY");

```

# Contributors
[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/custom-date-formatting/links/7)<br>

# Contributing Guidelines
Read the contributing guidelines [here](https://github.com/arshadkazmi42/ak-logger/blob/master/CONTRIBUTING.md)



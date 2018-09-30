var moment = require("moment");
var should = require('chai').should(),
    customDateFormatting = require('../index'),
    nextOrPrevDateCustomFormat = customDateFormatting.getNextOrPrevDateCustomFormat,
    nextOrPrevMinuteDateCustomFormat = customDateFormatting.getNextOrPrevMinuteDateCustomFormat;
    nextOrPrevSecondDateCustomFormat = customDateFormatting.getNextOrPrevSecondDateCustomFormat;
    customSourceDateFormatToCustomNewDateFormat = customDateFormatting.customSourceDateFormatToCustomNewDateFormat;
    timeStampFromCurrentDateFormat = customDateFormatting.getTimeStampFromCurrentDateFormat;

describe('#nextOrPrevDateCustomFormat', function() {
    it('converts input date to next date', function() {
        nextOrPrevDateCustomFormat("YYYY-MM-DD", 0).should.equal(moment().format("YYYY-MM-DD"));
    });
});

describe('#nextOrPrevMinuteDateCustomFormat', function () {
  it('converts input date, adding some minute', function () {
         nextOrPrevMinuteDateCustomFormat("YYYY-MM-DD HH:mm", 0).should.equal(moment().format("YYYY-MM-DD HH:mm"));
      
});
});

 describe('#nextOrPrevSecondDateCustomFormat', function () {
     it('converts input date, adding some second', function () {
         nextOrPrevSecondDateCustomFormat("YYYY-MM-DD HH:mm:ss", 0).should.equal(moment().format("YYYY-MM-DD HH:mm:ss"));
     });
 });

describe('#customSourceDateFormatToCustomNewDateFormat', function () {
    it('converts custom input date to source format to required format', function () {
        customSourceDateFormatToCustomNewDateFormat(moment().format("YYYY-MM-DD HH:mm:ss"), "YYYY-MM-DD HH:mm:ss", "dddd DD MMM YYYY").should.equal(moment().format("dddd DD MMM YYYY"));
    });
});

describe('#timeStampFromCurrentDateFormat', function () {
   it('converts custom input date and its format to timestamp', function () {
       timeStampFromCurrentDateFormat(moment().format("DD MMM YYYY"), "DD MMM YYYY").should.equal(Date.parse(moment().format("DD MMM YYYY")));
   });
});


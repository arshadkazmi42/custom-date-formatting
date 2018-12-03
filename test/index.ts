import moment = require('moment');
import customDateFormatting = require('../index');

var nextOrPrevDateCustomFormat = customDateFormatting.getNextOrPrevDateCustomFormat,
    nextOrPrevMinuteDateCustomFormat = customDateFormatting.getNextOrPrevMinuteDateCustomFormat,
    nextOrPrevSecondDateCustomFormat = customDateFormatting.getNextOrPrevSecondDateCustomFormat,
    customSourceDateFormatToCustomNewDateFormat = customDateFormatting.customSourceDateFormatToCustomNewDateFormat,
    timeStampFromCurrentDateFormat = customDateFormatting.getTimeStampFromCurrentDateFormat;

describe('#nextOrPrevDateCustomFormat', function() {
    it('converts input date to next date', function() {
        nextOrPrevDateCustomFormat("YYYY-MM-DD", 1).should.equal(moment().add(1,"days").format("YYYY-MM-DD"));
    });
});

describe('#nextOrPrevMinuteDateCustomFormat', function () {
  it('converts input date, adding some minute', function () {
         nextOrPrevMinuteDateCustomFormat("YYYY-MM-DD HH:mm", 1).should.equal(moment().add(1,"minutes").format("YYYY-MM-DD HH:mm"));

  });
});

 describe('#nextOrPrevSecondDateCustomFormat', function () {
     it('converts input date, adding some second', function () {
         nextOrPrevSecondDateCustomFormat("YYYY-MM-DD HH:mm:ss", 10).should.equal(moment().add(10,"seconds").format("YYYY-MM-DD HH:mm:ss"));
     });
 });

describe('#customSourceDateFormatToCustomNewDateFormat', function () {
    it('Should convert input date to input format', function () {
        customSourceDateFormatToCustomNewDateFormat(moment().format("YYYY-MM-DD HH:mm:ss"), "YYYY-MM-DD HH:mm:ss", "dddd DD MMM YYYY").should.equal(moment().format("dddd DD MMM YYYY"));
    });
});

describe('#timeStampFromCurrentDateFormat', function () {
   it('converts custom input date and its format to timestamp', function () {
       timeStampFromCurrentDateFormat(moment().format("DD MMM YYYY"), "DD MMM YYYY").should.equal(Date.parse(moment().format("DD MMM YYYY")));
   });
});

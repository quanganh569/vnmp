(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-themes-demo1-theme-module"],{

/***/ "./node_modules/ngx-daterangepicker-material/esm5/ngx-daterangepicker-material.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/ngx-daterangepicker-material/esm5/ngx-daterangepicker-material.js ***!
  \****************************************************************************************/
/*! exports provided: NgxDaterangepickerMd, DaterangepickerComponent, DaterangepickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDaterangepickerMd", function() { return NgxDaterangepickerMd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaterangepickerComponent", function() { return DaterangepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaterangepickerDirective", function() { return DaterangepickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var moment = moment__WEBPACK_IMPORTED_MODULE_2__;
var SideEnum = {
    left: 'left',
    right: 'right',
};
var DaterangepickerComponent = (function () {
    function DaterangepickerComponent(el, _ref) {
        this.el = el;
        this._ref = _ref;
        this._old = { start: null, end: null };
        this.calendarVariables = { left: {}, right: {} };
        this.timepickerVariables = { left: {}, right: {} };
        this.daterangepicker = { start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](), end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]() };
        this.applyBtn = { disabled: false };
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.dateLimit = null;
        this.sideEnum = SideEnum;
        this.minDate = null;
        this.maxDate = null;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.linkedCalendars = false;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.maxSpan = false;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.showClearButton = false;
        this.firstMonthDayClass = null;
        this.lastMonthDayClass = null;
        this.emptyWeekRowClass = null;
        this.firstDayOfNextMonthClass = null;
        this.lastDayOfPreviousMonthClass = null;
        this.locale = {
            direction: 'ltr',
            separator: ' - ',
            weekLabel: 'W',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            customRangeLabel: 'Custom range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };
        this.ranges = {};
        this.showCancel = false;
        this.keepCalendarOpeningWithRange = false;
        this.showRangeLabelOnInput = false;
        this.rangesArray = [];
        this.isShown = false;
        this.inline = true;
        this.leftCalendar = {};
        this.rightCalendar = {};
        this.showCalInRanges = false;
        this.options = {};
        this.choosedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rangeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.datesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateMonthsInView();
    }
    DaterangepickerComponent.prototype.ngOnInit = function () {
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }
        if (this.inline) {
            this._old.start = this.startDate.clone();
            this._old.end = this.endDate.clone();
        }
        if (!this.locale.format) {
            if (this.timePicker) {
                this.locale.format = moment.localeData().longDateFormat('lll');
            }
            else {
                this.locale.format = moment.localeData().longDateFormat('L');
            }
        }
        this.renderCalendar(SideEnum.left);
        this.renderCalendar(SideEnum.right);
        this.renderRanges();
    };
    DaterangepickerComponent.prototype.renderRanges = function () {
        var start, end;
        if (typeof this.ranges === 'object') {
            for (var range in this.ranges) {
                if (typeof this.ranges[range][0] === 'string') {
                    start = moment(this.ranges[range][0], this.locale.format);
                }
                else {
                    start = moment(this.ranges[range][0]);
                }
                if (typeof this.ranges[range][1] === 'string') {
                    end = moment(this.ranges[range][1], this.locale.format);
                }
                else {
                    end = moment(this.ranges[range][1]);
                }
                if (this.minDate && start.isBefore(this.minDate)) {
                    start = this.minDate.clone();
                }
                var maxDate = this.maxDate;
                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) {
                    maxDate = start.clone().add(this.maxSpan);
                }
                if (maxDate && end.isAfter(maxDate)) {
                    end = maxDate.clone();
                }
                if ((this.minDate && end.isBefore(this.minDate, this.timePicker ? 'minute' : 'day'))
                    || (maxDate && start.isAfter(maxDate, this.timePicker ? 'minute' : 'day'))) {
                    continue;
                }
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;
                this.ranges[rangeHtml] = [start, end];
            }
            for (var range in this.ranges) {
                this.rangesArray.push(range);
            }
            if (this.showCustomRangeLabel) {
                this.rangesArray.push(this.locale.customRangeLabel);
            }
            this.showCalInRanges = (!this.rangesArray.length) || this.alwaysShowCalendars;
            if (!this.timePicker) {
                this.startDate = this.startDate.startOf('day');
                this.endDate = this.endDate.endOf('day');
            }
            if (this.timePicker && this.autoApply) {
                this.autoApply = false;
            }
        }
    };
    DaterangepickerComponent.prototype.renderTimePicker = function (side) {
        if (side == SideEnum.right && !this.endDate) {
            return;
        }
        var selected, minDate;
        var maxDate = this.maxDate;
        if (side === SideEnum.left) {
            selected = this.startDate.clone(), minDate = this.minDate;
        }
        else if (side === SideEnum.right) {
            selected = this.endDate.clone(), minDate = this.startDate;
        }
        var start = this.timePicker24Hour ? 0 : 1;
        var end = this.timePicker24Hour ? 23 : 12;
        this.timepickerVariables[side] = {
            hours: [],
            minutes: [],
            minutesLabel: [],
            seconds: [],
            secondsLabel: [],
            disabledHours: [],
            disabledMinutes: [],
            disabledSeconds: [],
            selectedHour: 0,
            selectedMinute: 0,
            selectedSecond: 0,
        };
        for (var i_1 = start; i_1 <= end; i_1++) {
            var i_in_24 = i_1;
            if (!this.timePicker24Hour) {
                i_in_24 = selected.hour() >= 12 ? (i_1 == 12 ? 12 : i_1 + 12) : (i_1 == 12 ? 0 : i_1);
            }
            var time_1 = selected.clone().hour(i_in_24);
            var disabled_1 = false;
            if (minDate && time_1.minute(59).isBefore(minDate)) {
                disabled_1 = true;
            }
            if (maxDate && time_1.minute(0).isAfter(maxDate)) {
                disabled_1 = true;
            }
            this.timepickerVariables[side].hours.push(i_1);
            if (i_in_24 == selected.hour() && !disabled_1) {
                this.timepickerVariables[side].selectedHour = i_1;
            }
            else if (disabled_1) {
                this.timepickerVariables[side].disabledHours.push(i_1);
            }
        }
        for (var i = 0; i < 60; i += this.timePickerIncrement) {
            var padded = i < 10 ? '0' + i : i;
            var time = selected.clone().minute(i);
            var disabled = false;
            if (minDate && time.second(59).isBefore(minDate)) {
                disabled = true;
            }
            if (maxDate && time.second(0).isAfter(maxDate)) {
                disabled = true;
            }
            this.timepickerVariables[side].minutes.push(i);
            this.timepickerVariables[side].minutesLabel.push(padded);
            if (selected.minute() == i && !disabled) {
                this.timepickerVariables[side].selectedMinute = i;
            }
            else if (disabled) {
                this.timepickerVariables[side].disabledMinutes.push(i);
            }
        }
        if (this.timePickerSeconds) {
            for (var i = 0; i < 60; i++) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().second(i);
                var disabled = false;
                if (minDate && time.isBefore(minDate)) {
                    disabled = true;
                }
                if (maxDate && time.isAfter(maxDate)) {
                    disabled = true;
                }
                this.timepickerVariables[side].seconds.push(i);
                this.timepickerVariables[side].secondsLabel.push(padded);
                if (selected.second() == i && !disabled) {
                    this.timepickerVariables[side].selectedSecond = i;
                }
                else if (disabled) {
                    this.timepickerVariables[side].disabledSeconds.push(i);
                }
            }
        }
        if (!this.timePicker24Hour) {
            if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) {
                this.timepickerVariables[side].amDisabled = true;
            }
            if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) {
                this.timepickerVariables[side].pmDisabled = true;
            }
            if (selected.hour() >= 12) {
                this.timepickerVariables[side].ampmModel = 'PM';
            }
            else {
                this.timepickerVariables[side].ampmModel = 'AM';
            }
        }
        this.timepickerVariables[side].selected = selected;
    };
    DaterangepickerComponent.prototype.renderCalendar = function (side) {
        var mainCalendar = (side === SideEnum.left) ? this.leftCalendar : this.rightCalendar;
        var month = mainCalendar.month.month();
        var year = mainCalendar.month.year();
        var hour = mainCalendar.month.hour();
        var minute = mainCalendar.month.minute();
        var second = mainCalendar.month.second();
        var daysInMonth = moment([year, month]).daysInMonth();
        var firstDay = moment([year, month, 1]);
        var lastDay = moment([year, month, daysInMonth]);
        var lastMonth = moment(firstDay).subtract(1, 'month').month();
        var lastYear = moment(firstDay).subtract(1, 'month').year();
        var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
        var dayOfWeek = firstDay.day();
        var calendar = [];
        calendar.firstDay = firstDay;
        calendar.lastDay = lastDay;
        for (var i = 0; i < 6; i++) {
            calendar[i] = [];
        }
        var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
        if (startDay > daysInLastMonth) {
            startDay -= 7;
        }
        if (dayOfWeek === this.locale.firstDay) {
            startDay = daysInLastMonth - 6;
        }
        var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);
        for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
            if (i > 0 && col % 7 === 0) {
                col = 0;
                row++;
            }
            calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
            curDate.hour(12);
            if (this.minDate && calendar[row][col].format('YYYY-MM-DD') === this.minDate.format('YYYY-MM-DD') &&
                calendar[row][col].isBefore(this.minDate) && side === 'left') {
                calendar[row][col] = this.minDate.clone();
            }
            if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') === this.maxDate.format('YYYY-MM-DD') &&
                calendar[row][col].isAfter(this.maxDate) && side === 'right') {
                calendar[row][col] = this.maxDate.clone();
            }
        }
        if (side === SideEnum.left) {
            this.leftCalendar.calendar = calendar;
        }
        else {
            this.rightCalendar.calendar = calendar;
        }
        var minDate = side === 'left' ? this.minDate : this.startDate;
        var maxDate = this.maxDate;
        var selected = side === 'left' ? this.startDate : this.endDate;
        this.calendarVariables[side] = {
            month: month,
            year: year,
            hour: hour,
            minute: minute,
            second: second,
            daysInMonth: daysInMonth,
            firstDay: firstDay,
            lastDay: lastDay,
            lastMonth: lastMonth,
            lastYear: lastYear,
            daysInLastMonth: daysInLastMonth,
            dayOfWeek: dayOfWeek,
            calRows: Array.from(Array(6).keys()),
            calCols: Array.from(Array(7).keys()),
            classes: {},
            minDate: minDate,
            maxDate: maxDate,
            calendar: calendar
        };
        if (this.showDropdowns) {
            var currentMonth = calendar[1][1].month();
            var currentYear = calendar[1][1].year();
            var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
            var minYear = (minDate && minDate.year()) || (currentYear - 50);
            var inMinYear = currentYear === minYear;
            var inMaxYear = currentYear === maxYear;
            var years = [];
            for (var y = minYear; y <= maxYear; y++) {
                years.push(y);
            }
            this.calendarVariables[side].dropdowns = {
                currentMonth: currentMonth,
                currentYear: currentYear,
                maxYear: maxYear,
                minYear: minYear,
                inMinYear: inMinYear,
                inMaxYear: inMaxYear,
                monthArrays: Array.from(Array(12).keys()),
                yearArrays: years
            };
        }
        if (this.endDate === null && this.dateLimit) {
            var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
            if (!maxDate || maxLimit.isBefore(maxDate)) {
                maxDate = maxLimit;
            }
        }
        for (var row = 0; row < 6; row++) {
            this.calendarVariables[side].classes[row] = {};
            var rowClasses = [];
            if (this.emptyWeekRowClass && !this.hasCurrentMonthDays(month, calendar[row])) {
                rowClasses.push(this.emptyWeekRowClass);
            }
            for (var col = 0; col < 7; col++) {
                var classes = [];
                if (calendar[row][col].isSame(new Date(), 'day')) {
                    classes.push('today');
                }
                if (calendar[row][col].isoWeekday() > 5) {
                    classes.push('weekend');
                }
                if (calendar[row][col].month() !== calendar[1][1].month()) {
                    classes.push('off');
                    if (this.lastDayOfPreviousMonthClass && (calendar[row][col].month() < calendar[1][1].month() || calendar[1][1].month() === 0) && calendar[row][col].date() === daysInLastMonth) {
                        classes.push(this.lastDayOfPreviousMonthClass);
                    }
                    if (this.firstDayOfNextMonthClass && (calendar[row][col].month() > calendar[1][1].month() || calendar[row][col].month() === 0) && calendar[row][col].date() === 1) {
                        classes.push(this.firstDayOfNextMonthClass);
                    }
                }
                if (this.firstMonthDayClass && calendar[row][col].month() === calendar[1][1].month() && calendar[row][col].date() === calendar.firstDay.date()) {
                    classes.push(this.firstMonthDayClass);
                }
                if (this.lastMonthDayClass && calendar[row][col].month() === calendar[1][1].month() && calendar[row][col].date() === calendar.lastDay.date()) {
                    classes.push(this.lastMonthDayClass);
                }
                if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day')) {
                    classes.push('off', 'disabled');
                }
                if (maxDate && calendar[row][col].isAfter(maxDate, 'day')) {
                    classes.push('off', 'disabled');
                }
                if (this.isInvalidDate(calendar[row][col])) {
                    classes.push('off', 'disabled');
                }
                if (this.startDate && calendar[row][col].format('YYYY-MM-DD') === this.startDate.format('YYYY-MM-DD')) {
                    classes.push('active', 'start-date');
                }
                if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') === this.endDate.format('YYYY-MM-DD')) {
                    classes.push('active', 'end-date');
                }
                if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) {
                    classes.push('in-range');
                }
                var isCustom = this.isCustomDate(calendar[row][col]);
                if (isCustom !== false) {
                    if (typeof isCustom === 'string') {
                        classes.push(isCustom);
                    }
                    else {
                        Array.prototype.push.apply(classes, isCustom);
                    }
                }
                var cname = '', disabled = false;
                for (var i = 0; i < classes.length; i++) {
                    cname += classes[i] + ' ';
                    if (classes[i] === 'disabled') {
                        disabled = true;
                    }
                }
                if (!disabled) {
                    cname += 'available';
                }
                this.calendarVariables[side].classes[row][col] = cname.replace(/^\s+|\s+$/g, '');
            }
            this.calendarVariables[side].classes[row].classList = rowClasses.join(' ');
        }
    };
    DaterangepickerComponent.prototype.setStartDate = function (startDate) {
        if (typeof startDate === 'string') {
            this.startDate = moment(startDate, this.locale.format);
        }
        if (typeof startDate === 'object') {
            this.startDate = moment(startDate);
        }
        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
        }
        if (this.timePicker && this.timePickerIncrement) {
            this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }
        if (this.minDate && this.startDate.isBefore(this.minDate)) {
            this.startDate = this.minDate.clone();
            if (this.timePicker && this.timePickerIncrement) {
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
        }
        if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
            this.startDate = this.maxDate.clone();
            if (this.timePicker && this.timePickerIncrement) {
                this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
        }
        if (!this.isShown) {
            this.updateElement();
        }
        this.updateMonthsInView();
    };
    DaterangepickerComponent.prototype.setEndDate = function (endDate) {
        if (typeof endDate === 'string') {
            this.endDate = moment(endDate, this.locale.format);
        }
        if (typeof endDate === 'object') {
            this.endDate = moment(endDate);
        }
        if (!this.timePicker) {
            this.endDate = this.endDate.add(1, 'd').startOf('day').subtract(1, 'second');
        }
        if (this.timePicker && this.timePickerIncrement) {
            this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }
        if (this.endDate.isBefore(this.startDate)) {
            this.endDate = this.startDate.clone();
        }
        if (this.maxDate && this.endDate.isAfter(this.maxDate)) {
            this.endDate = this.maxDate.clone();
        }
        if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)) {
            this.endDate = this.startDate.clone().add(this.dateLimit);
        }
        if (!this.isShown) {
        }
        this.updateMonthsInView();
        if (this.autoApply) {
            this.datesUpdated.emit({ startDate: this.startDate, endDate: this.endDate });
        }
    };
    DaterangepickerComponent.prototype.isInvalidDate = function (date) {
        return false;
    };
    DaterangepickerComponent.prototype.isCustomDate = function (date) {
        return false;
    };
    DaterangepickerComponent.prototype.updateView = function () {
        if (this.timePicker) {
            this.renderTimePicker(SideEnum.left);
            this.renderTimePicker(SideEnum.right);
        }
        this.updateMonthsInView();
        this.updateCalendars();
    };
    DaterangepickerComponent.prototype.updateMonthsInView = function () {
        if (this.endDate) {
            if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                ((this.startDate && this.leftCalendar && this.startDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM')) ||
                    (this.startDate && this.rightCalendar && this.startDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM')))
                &&
                    (this.endDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM') ||
                        this.endDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM'))) {
                return;
            }
            if (this.startDate) {
                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() !== this.startDate.month() ||
                    this.endDate.year() !== this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                }
                else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
        }
        else {
            if (this.leftCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM') &&
                this.rightCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM')) {
                this.leftCalendar.month = this.startDate.clone().date(2);
                this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
            }
        }
        if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
            this.rightCalendar.month = this.maxDate.clone().date(2);
            this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
        }
    };
    DaterangepickerComponent.prototype.updateCalendars = function () {
        this.renderCalendar(SideEnum.left);
        this.renderCalendar(SideEnum.right);
        if (this.endDate === null) {
            return;
        }
        this.calculateChosenLabel();
    };
    DaterangepickerComponent.prototype.updateElement = function () {
        if (!this.singleDatePicker && this.autoUpdateInput) {
            if (this.startDate && this.endDate) {
                if (this.rangesArray.length && this.showRangeLabelOnInput === true && this.chosenRange &&
                    this.locale.customRangeLabel !== this.chosenRange) {
                    this.chosenLabel = this.chosenRange;
                }
                else {
                    this.chosenLabel = this.startDate.format(this.locale.format) +
                        this.locale.separator + this.endDate.format(this.locale.format);
                }
            }
        }
        else if (this.autoUpdateInput) {
            this.chosenLabel = this.startDate.format(this.locale.format);
        }
    };
    DaterangepickerComponent.prototype.remove = function () {
        this.isShown = false;
    };
    DaterangepickerComponent.prototype.calculateChosenLabel = function () {
        var customRange = true;
        var i = 0;
        if (this.rangesArray.length > 0) {
            for (var range in this.ranges) {
                if (this.timePicker) {
                    var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
                        customRange = false;
                        this.chosenRange = this.rangesArray[i];
                        break;
                    }
                }
                else {
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenRange = this.rangesArray[i];
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenRange = this.locale.customRangeLabel;
                }
                else {
                    this.chosenRange = null;
                }
                this.showCalInRanges = true;
            }
        }
        this.updateElement();
    };
    DaterangepickerComponent.prototype.clickApply = function (e) {
        if (!this.singleDatePicker && this.startDate && !this.endDate) {
            this.endDate = this.startDate.clone();
            this.calculateChosenLabel();
        }
        if (this.isInvalidDate && this.startDate && this.endDate) {
            var d = this.startDate.clone();
            while (d.isBefore(this.endDate)) {
                if (this.isInvalidDate(d)) {
                    this.endDate = d.subtract(1, 'days');
                    this.calculateChosenLabel();
                    break;
                }
                d.add(1, 'days');
            }
        }
        if (this.chosenLabel) {
            this.choosedDate.emit({ chosenLabel: this.chosenLabel, startDate: this.startDate, endDate: this.endDate });
        }
        this.datesUpdated.emit({ startDate: this.startDate, endDate: this.endDate });
        this.hide();
    };
    DaterangepickerComponent.prototype.clickCancel = function (e) {
        this.startDate = this._old.start;
        this.endDate = this._old.end;
        if (this.inline) {
            this.updateView();
        }
        this.hide();
    };
    DaterangepickerComponent.prototype.monthChanged = function (monthEvent, side) {
        var year = this.calendarVariables[side].dropdowns.currentYear;
        var month = parseInt(monthEvent.target.value, 10);
        this.monthOrYearChanged(month, year, side);
    };
    DaterangepickerComponent.prototype.yearChanged = function (yearEvent, side) {
        var month = this.calendarVariables[side].dropdowns.currentMonth;
        var year = parseInt(yearEvent.target.value, 10);
        this.monthOrYearChanged(month, year, side);
    };
    DaterangepickerComponent.prototype.timeChanged = function (timeEvent, side) {
        var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
        var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
        var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
        if (!this.timePicker24Hour) {
            var ampm = this.timepickerVariables[side].ampmModel;
            if (ampm === 'PM' && hour < 12)
                hour += 12;
            if (ampm === 'AM' && hour === 12)
                hour = 0;
        }
        if (side === SideEnum.left) {
            var start = this.startDate.clone();
            start.hour(hour);
            start.minute(minute);
            start.second(second);
            this.setStartDate(start);
            if (this.singleDatePicker) {
                this.endDate = this.startDate.clone();
            }
            else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                this.setEndDate(start.clone());
            }
        }
        else if (this.endDate) {
            var end = this.endDate.clone();
            end.hour(hour);
            end.minute(minute);
            end.second(second);
            this.setEndDate(end);
        }
        this.updateCalendars();
        this.renderTimePicker(SideEnum.left);
        this.renderTimePicker(SideEnum.right);
    };
    DaterangepickerComponent.prototype.monthOrYearChanged = function (month, year, side) {
        var isLeft = side === SideEnum.left;
        if (!isLeft) {
            if (year < this.startDate.year() || (year === this.startDate.year() && month < this.startDate.month())) {
                month = this.startDate.month();
                year = this.startDate.year();
            }
        }
        if (this.minDate) {
            if (year < this.minDate.year() || (year === this.minDate.year() && month < this.minDate.month())) {
                month = this.minDate.month();
                year = this.minDate.year();
            }
        }
        if (this.maxDate) {
            if (year > this.maxDate.year() || (year === this.maxDate.year() && month > this.maxDate.month())) {
                month = this.maxDate.month();
                year = this.maxDate.year();
            }
        }
        this.calendarVariables[side].dropdowns.currentYear = year;
        this.calendarVariables[side].dropdowns.currentMonth = month;
        if (isLeft) {
            this.leftCalendar.month.month(month).year(year);
            if (this.linkedCalendars) {
                this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            }
        }
        else {
            this.rightCalendar.month.month(month).year(year);
            if (this.linkedCalendars) {
                this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
        }
        this.updateCalendars();
    };
    DaterangepickerComponent.prototype.clickPrev = function (side) {
        if (side === SideEnum.left) {
            this.leftCalendar.month.subtract(1, 'month');
            if (this.linkedCalendars) {
                this.rightCalendar.month.subtract(1, 'month');
            }
        }
        else {
            this.rightCalendar.month.subtract(1, 'month');
        }
        this.updateCalendars();
    };
    DaterangepickerComponent.prototype.clickNext = function (side) {
        if (side === SideEnum.left) {
            this.leftCalendar.month.add(1, 'month');
        }
        else {
            this.rightCalendar.month.add(1, 'month');
            if (this.linkedCalendars) {
                this.leftCalendar.month.add(1, 'month');
            }
        }
        this.updateCalendars();
    };
    DaterangepickerComponent.prototype.clickDate = function (e, side, row, col) {
        if (e.target.tagName === 'TD') {
            if (!e.target.classList.contains('available')) {
                return;
            }
        }
        else if (e.target.tagName === 'SPAN') {
            if (!e.target.parentElement.classList.contains('available')) {
                return;
            }
        }
        if (this.rangesArray.length) {
            this.chosenRange = this.locale.customRangeLabel;
        }
        var date = side === SideEnum.left ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
        if (this.endDate || date.isBefore(this.startDate, 'day')) {
            if (this.timePicker) {
                var hour_1 = parseInt(this.timepickerVariables['left'].selectedHour, 10);
                if (!this.timePicker24Hour) {
                    var ampm = this.timepickerVariables['left'].ampmModel;
                    if (ampm === 'PM' && hour_1 < 12)
                        hour_1 += 12;
                    if (ampm === 'AM' && hour_1 === 12)
                        hour_1 = 0;
                }
                var minute = parseInt(this.timepickerVariables['left'].selectedMinute, 10);
                var second = this.timePickerSeconds ? parseInt(this.timepickerVariables['left'].selectedSecond, 10) : 0;
                date = date.clone().hour(hour_1).minute(minute).second(second);
            }
            this.endDate = null;
            this.setStartDate(date.clone());
        }
        else if (!this.endDate && date.isBefore(this.startDate)) {
            this.setEndDate(this.startDate.clone());
        }
        else {
            if (this.timePicker) {
                var hour = parseInt(this.timepickerVariables['right'].selectedHour, 10);
                if (!this.timePicker24Hour) {
                    var ampm = this.timepickerVariables['right'].ampmModel;
                    if (ampm === 'PM' && hour < 12)
                        hour += 12;
                    if (ampm === 'AM' && hour === 12)
                        hour = 0;
                }
                var minute = parseInt(this.timepickerVariables['right'].selectedMinute, 10);
                var second = this.timePickerSeconds ? parseInt(this.timepickerVariables['right'].selectedSecond, 10) : 0;
                date = date.clone().hour(hour).minute(minute).second(second);
            }
            this.setEndDate(date.clone());
            if (this.autoApply) {
                this.calculateChosenLabel();
                this.clickApply();
            }
        }
        if (this.singleDatePicker) {
            this.setEndDate(this.startDate);
            this.updateElement();
            if (this.autoApply) {
                this.clickApply();
            }
        }
        this.updateView();
        e.stopPropagation();
    };
    DaterangepickerComponent.prototype.clickRange = function (e, label) {
        this.chosenRange = label;
        if (label == this.locale.customRangeLabel) {
            this.isShown = true;
            this.showCalInRanges = true;
        }
        else {
            var dates = this.ranges[label];
            this.startDate = dates[0].clone();
            this.endDate = dates[1].clone();
            if (this.showRangeLabelOnInput && label !== this.locale.customRangeLabel) {
                this.chosenLabel = label;
            }
            else {
                this.calculateChosenLabel();
            }
            this.showCalInRanges = (!this.rangesArray.length) || this.alwaysShowCalendars;
            if (!this.timePicker) {
                this.startDate.startOf('day');
                this.endDate.endOf('day');
            }
            if (!this.alwaysShowCalendars) {
                this.isShown = false;
            }
            this.rangeClicked.emit({ label: label, dates: dates });
            if (!this.keepCalendarOpeningWithRange) {
                this.clickApply();
            }
            else {
                this.renderCalendar(SideEnum.left);
                this.renderCalendar(SideEnum.right);
            }
        }
    };
    
    DaterangepickerComponent.prototype.show = function (e) {
        if (this.isShown) {
            return;
        }
        this._old.start = this.startDate.clone();
        this._old.end = this.endDate.clone();
        this.isShown = true;
        this.updateView();
    };
    DaterangepickerComponent.prototype.hide = function (e) {
        if (!this.isShown) {
            return;
        }
        if (!this.endDate) {
            if (this._old.start) {
                this.startDate = this._old.start.clone();
            }
            if (this._old.end) {
                this.endDate = this._old.end.clone();
            }
        }
        if (!this.startDate.isSame(this._old.start) || !this.endDate.isSame(this._old.end)) {
        }
        this.updateElement();
        this.isShown = false;
        this._ref.detectChanges();
    };
    DaterangepickerComponent.prototype.handleInternalClick = function (e) {
        e.stopPropagation();
    };
    DaterangepickerComponent.prototype.updateLocale = function (locale) {
        for (var key in locale) {
            if (locale.hasOwnProperty(key)) {
                this.locale[key] = locale[key];
            }
        }
    };
    DaterangepickerComponent.prototype.clear = function () {
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.choosedDate.emit({ chosenLabel: '', startDate: null, endDate: null });
        this.datesUpdated.emit({ startDate: null, endDate: null });
        this.hide();
    };
    DaterangepickerComponent.prototype.disableRange = function (range) {
        var _this = this;
        if (range === this.locale.customRangeLabel) {
            return false;
        }
        var rangeMarkers = this.ranges[range];
        var areBothBefore = rangeMarkers.every(function (date) {
            if (!_this.minDate) {
                return false;
            }
            return date.isBefore(_this.minDate);
        });
        var areBothAfter = rangeMarkers.every(function (date) {
            if (!_this.maxDate) {
                return false;
            }
            return date.isAfter(_this.maxDate);
        });
        return (areBothBefore || areBothAfter);
    };
    DaterangepickerComponent.prototype.hasCurrentMonthDays = function (currentMonth, row) {
        for (var day = 0; day < 7; day++) {
            if (row[day].month() === currentMonth) {
                return true;
            }
        }
        return false;
    };
    return DaterangepickerComponent;
}());
DaterangepickerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-daterangepicker-material',
                styles: [".md-drppicker{position:absolute;font-family:Roboto,sans-serif;color:inherit;border-radius:4px;width:278px;padding:4px;margin-top:-10px;overflow:hidden;z-index:1000;font-size:14px;background-color:#fff;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 8px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 8px 0 rgba(0,0,0,.12)}.md-drppicker.double{width:auto}.md-drppicker.inline{position:relative;display:inline-block}.md-drppicker:after,.md-drppicker:before{position:absolute;display:inline-block;border-bottom-color:rgba(0,0,0,.2);content:''}.md-drppicker.openscenter:after,.md-drppicker.openscenter:before{left:0;right:0;width:0;margin-left:auto;margin-right:auto}.md-drppicker.single .calendar,.md-drppicker.single .ranges{float:none}.md-drppicker.shown{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:.1s ease-in-out;transition:.1s ease-in-out;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.shown.drops-up-left{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.md-drppicker.shown.drops-up-right{-webkit-transform-origin:0 100%;transform-origin:0 100%}.md-drppicker.shown.drops-down-left{-webkit-transform-origin:100% 0;transform-origin:100% 0}.md-drppicker.shown.drops-down-right{-webkit-transform-origin:0 0;transform-origin:0 0}.md-drppicker.shown.drops-down-center{-webkit-transform-origin:NaN;transform-origin:NaN}.md-drppicker.shown.drops-up-center{-webkit-transform-origin:50%;transform-origin:50%}.md-drppicker.shown .calendar{display:block}.md-drppicker.hidden{-webkit-transition:.1s;transition:.1s;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.hidden.drops-up-left{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.md-drppicker.hidden.drops-up-right{-webkit-transform-origin:0 100%;transform-origin:0 100%}.md-drppicker.hidden.drops-down-left{-webkit-transform-origin:100% 0;transform-origin:100% 0}.md-drppicker.hidden.drops-down-right{-webkit-transform-origin:0 0;transform-origin:0 0}.md-drppicker.hidden.drops-down-center{-webkit-transform-origin:NaN;transform-origin:NaN}.md-drppicker.hidden.drops-up-center{-webkit-transform-origin:50%;transform-origin:50%}.md-drppicker.hidden .calendar{display:none}.md-drppicker .calendar{max-width:270px;margin:4px}.md-drppicker .calendar.single .calendar-table{border:none}.md-drppicker .calendar td,.md-drppicker .calendar th{padding:0;white-space:nowrap;text-align:center;min-width:32px}.md-drppicker .calendar td span,.md-drppicker .calendar th span{pointer-events:none}.md-drppicker .calendar-table{border:1px solid #fff;padding:4px;border-radius:4px;background-color:#fff}.md-drppicker table{width:100%;margin:0}.md-drppicker th{color:#988c8c}.md-drppicker td,.md-drppicker th{text-align:center;border-radius:4px;border:1px solid transparent;white-space:nowrap;cursor:pointer;height:2em;width:2em}.md-drppicker td.available.prev,.md-drppicker th.available.prev{display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;-webkit-transition:background-color .2s;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.prev:hover,.md-drppicker th.available.prev:hover{margin:0}.md-drppicker td.available.next,.md-drppicker th.available.next{-webkit-transform:rotate(180deg);transform:rotate(180deg);display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;-webkit-transition:background-color .2s;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.next:hover,.md-drppicker th.available.next:hover{margin:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.md-drppicker td.available:hover,.md-drppicker th.available:hover{background-color:#eee;border-color:transparent;color:inherit;background-repeat:no-repeat;background-size:.5em;background-position:center;margin:.25em 0;opacity:.8;border-radius:2em;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:450ms cubic-bezier(.23,1,.32,1);transition:450ms cubic-bezier(.23,1,.32,1)}.md-drppicker td.week,.md-drppicker th.week{font-size:80%;color:#ccc}.md-drppicker td{margin:.25em 0;opacity:.8;-webkit-transition:450ms cubic-bezier(.23,1,.32,1);transition:450ms cubic-bezier(.23,1,.32,1);border-radius:2em;-webkit-transform:scale(1);transform:scale(1)}.md-drppicker td.off,.md-drppicker td.off.end-date,.md-drppicker td.off.in-range,.md-drppicker td.off.start-date{background-color:#fff;border-color:transparent;color:#999}.md-drppicker td.in-range{background-color:#dde2e4;border-color:transparent;color:#000;border-radius:0}.md-drppicker td.start-date{border-radius:2em 0 0 2em}.md-drppicker td.end-date{border-radius:0 2em 2em 0}.md-drppicker td.start-date.end-date{border-radius:4px}.md-drppicker td.active{-webkit-transition:background .3s ease-out;transition:background .3s ease-out;background:rgba(0,0,0,.1)}.md-drppicker td.active,.md-drppicker td.active:hover{background-color:#3f51b5;border-color:transparent;color:#fff}.md-drppicker th.month{width:auto}.md-drppicker option.disabled,.md-drppicker td.disabled{color:#999;cursor:not-allowed;text-decoration:line-through}.md-drppicker select{display:inline-block;background-color:rgba(255,255,255,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.md-drppicker select.ampmselect,.md-drppicker select.hourselect,.md-drppicker select.minuteselect,.md-drppicker select.secondselect{width:50px;margin:0 auto;background:#eee;border:1px solid #eee;padding:2px;outline:0;font-size:12px}.md-drppicker select.monthselect,.md-drppicker select.yearselect{font-size:12px;height:auto;cursor:pointer;opacity:0;position:absolute;top:0;left:0;margin:0;padding:0}.md-drppicker th.month>div{position:relative;display:inline-block}.md-drppicker .calendar-time{text-align:center;margin:4px auto 0;line-height:30px;position:relative}.md-drppicker .calendar-time select.disabled{color:#ccc;cursor:not-allowed}.md-drppicker .label-input{border:1px solid #ccc;border-radius:4px;color:#555;height:30px;line-height:30px;display:block;vertical-align:middle;margin:0 auto 5px;padding:0 0 0 28px;width:100%}.md-drppicker .label-input.active{border:1px solid #08c;border-radius:4px}.md-drppicker .md-drppicker_input{position:relative;padding:0 30px 0 0}.md-drppicker .md-drppicker_input i,.md-drppicker .md-drppicker_input svg{position:absolute;left:8px;top:8px}.md-drppicker.rtl .label-input{padding-right:28px;padding-left:6px}.md-drppicker.rtl .md-drppicker_input i,.md-drppicker.rtl .md-drppicker_input svg{left:auto;right:8px}.md-drppicker .show-ranges .drp-calendar.left{border-left:1px solid #ddd}.md-drppicker .ranges{float:none;text-align:left;margin:0}.md-drppicker .ranges ul{list-style:none;margin:0 auto;padding:0;width:100%}.md-drppicker .ranges ul li{font-size:12px}.md-drppicker .ranges ul li button{padding:8px 12px;width:100%;background:0 0;border:none;text-align:left;cursor:pointer}.md-drppicker .ranges ul li button.active{background-color:#3f51b5;color:#fff}.md-drppicker .ranges ul li button[disabled]{opacity:.3}.md-drppicker .ranges ul li button:active{background:0 0}.md-drppicker .ranges ul li:hover{background-color:#eee}.md-drppicker .show-calendar .ranges{margin-top:8px}.md-drppicker [hidden]{display:none}.md-drppicker .buttons{text-align:right;margin:0 5px 5px 0}.md-drppicker .btn{position:relative;overflow:hidden;border-width:0;outline:0;padding:0 6px;cursor:pointer;border-radius:2px;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.6);box-shadow:0 1px 4px rgba(0,0,0,.6);background-color:#3f51b5;color:#ecf0f1;-webkit-transition:background-color .4s;transition:background-color .4s;height:auto;text-transform:uppercase;line-height:36px;border:none}.md-drppicker .btn:focus,.md-drppicker .btn:hover{background-color:#3f51b5}.md-drppicker .btn>*{position:relative}.md-drppicker .btn span{display:block;padding:12px 24px}.md-drppicker .btn:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.md-drppicker .btn:active:before{width:120%;padding-top:120%;-webkit-transition:width .2s ease-out,padding-top .2s ease-out;transition:width .2s ease-out,padding-top .2s ease-out}.md-drppicker .btn:disabled{opacity:.5}.md-drppicker .btn.btn-default{color:#000;background-color:#dcdcdc}.md-drppicker .clear{-webkit-box-shadow:none;box-shadow:none;background-color:#fff!important}.md-drppicker .clear svg{color:#eb3232;fill:currentColor}@media (min-width:564px){.md-drppicker{width:auto}.md-drppicker.single .calendar.left{clear:none}.md-drppicker.ltr{direction:ltr;text-align:left}.md-drppicker.ltr .calendar.left{clear:left}.md-drppicker.ltr .calendar.left .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;padding-right:12px}.md-drppicker.ltr .calendar.right{margin-left:0}.md-drppicker.ltr .calendar.right .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.ltr .left .md-drppicker_input,.md-drppicker.ltr .right .md-drppicker_input{padding-right:35px}.md-drppicker.ltr .calendar,.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl{direction:rtl;text-align:right}.md-drppicker.rtl .calendar.left{clear:right;margin-left:0}.md-drppicker.rtl .calendar.left .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.rtl .calendar.right{margin-right:0}.md-drppicker.rtl .calendar.right .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.md-drppicker.rtl .calendar.left .calendar-table,.md-drppicker.rtl .left .md-drppicker_input{padding-left:12px}.md-drppicker.rtl .calendar,.md-drppicker.rtl .ranges{text-align:right;float:right}.drp-animate{-webkit-transform:translate(0);transform:translate(0);-webkit-transition:opacity .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s,-webkit-transform .2s}.drp-animate.drp-picker-site-this{-webkit-transition-timing-function:linear;transition-timing-function:linear}.drp-animate.drp-animate-right{-webkit-transform:translateX(10%);transform:translateX(10%);opacity:0}.drp-animate.drp-animate-left{-webkit-transform:translateX(-10%);transform:translateX(-10%);opacity:0}}@media (min-width:730px){.md-drppicker .ranges{width:auto}.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl .ranges{float:right}.md-drppicker .calendar.left{clear:none!important}}"],
                template: "<div class=\"md-drppicker\" #pickerContainer\n[ngClass]=\"{\n    ltr: locale.direction === 'ltr',\n    rtl: this.locale.direction === 'rtl',\n    'shown': isShown || inline,\n    'hidden': !isShown && !inline,\n    'inline': inline,\n    'double': !singleDatePicker && showCalInRanges,\n    'show-ranges': rangesArray.length\n}\" [class]=\"'drops-' + drops + '-' + opens\">\n    <div class=\"ranges\">\n        <ul>\n          <li *ngFor=\"let range of rangesArray\">\n            <button type=\"button\"\n                    (click)=\"clickRange($event, range)\"\n                    [disabled]=\"disableRange(range)\"\n                    [ngClass]=\"{'active': range === chosenRange}\">{{range}}</button>\n          </li>\n        </ul>\n    </div>\n    <div class=\"calendar\" [ngClass]=\"{right: singleDatePicker, left: !singleDatePicker}\"\n        *ngIf=\"showCalInRanges\">\n        <div class=\"calendar-table\">\n            <table class=\"table-condensed\" *ngIf=\"calendarVariables\">\n                <thead>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\"></th>\n                        <ng-container *ngIf=\"!calendarVariables.left.minDate || calendarVariables.left.minDate.isBefore(calendarVariables.left.calendar.firstDay) && (!this.linkedCalendars || true)\">\n                            <th (click)=\"clickPrev(sideEnum.left)\" class=\"prev available\" >\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!(!calendarVariables.left.minDate || calendarVariables.left.minDate.isBefore(calendarVariables.left.calendar.firstDay) && (!this.linkedCalendars || true))\">\n                            <th></th>\n                        </ng-container>\n                        <th colspan=\"5\" class=\"month drp-animate\">\n                            <ng-container *ngIf=\"showDropdowns && calendarVariables.left.dropdowns\">\n                                <div>\n                                        {{this.locale.monthNames[calendarVariables?.left?.calendar[1][1].month()]}}\n                                        <select class=\"monthselect\" (change)=\"monthChanged($event, sideEnum.left)\">\n                                                <option\n                                                [disabled]=\"(calendarVariables.left.dropdowns.inMinYear && m < calendarVariables.left.minDate.month()) || (calendarVariables.left.dropdowns.inMaxYear && m > calendarVariables.left.maxDate.month())\"\n                                                *ngFor=\"let m of calendarVariables.left.dropdowns.monthArrays\" [value]=\"m\" [selected]=\"calendarVariables.left.dropdowns.currentMonth == m\">\n                                                    {{locale.monthNames[m]}}\n                                                </option>\n                                        </select>\n                                </div>\n                                <div>\n                                    {{ calendarVariables?.left?.calendar[1][1].format(\" YYYY\")}}\n                                    <select class=\"yearselect\"  (change)=\"yearChanged($event, sideEnum.left)\">\n                                        <option *ngFor=\"let y of calendarVariables.left.dropdowns.yearArrays\" [selected]=\"y === calendarVariables.left.dropdowns.currentYear\">\n                                            {{y}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!showDropdowns || !calendarVariables.left.dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.left?.calendar[1][1].month()]}}  {{ calendarVariables?.left?.calendar[1][1].format(\" YYYY\")}}\n                            </ng-container>\n                        </th>\n                        <ng-container *ngIf=\"(!calendarVariables.left.maxDate || calendarVariables.left.maxDate.isAfter(calendarVariables.left.calendar.lastDay)) && (!linkedCalendars || singleDatePicker )\">\n                            <th class=\"next available\" (click)=\"clickNext(sideEnum.left)\">\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!((!calendarVariables.left.maxDate || calendarVariables.left.maxDate.isAfter(calendarVariables.left.calendar.lastDay)) && (!linkedCalendars || singleDatePicker ))\">\n                            <th></th>\n                        </ng-container>\n                    </tr>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\" class=\"week\"><span>{{this.locale.weekLabel}}</span></th>\n                        <th *ngFor=\"let dayofweek of locale.daysOfWeek\"><span>{{dayofweek}}</span></th>\n                    </tr>\n                </thead>\n                <tbody class=\"drp-animate\">\n                    <tr *ngFor=\"let row of calendarVariables.left.calRows\" [class]=\"calendarVariables.left.classes[row].classList\">\n                        <!-- add week number -->\n                        <td  class=\"week\" *ngIf=\"showWeekNumbers\">\n                            <span>{{calendarVariables.left.calendar[row][0].week()}}</span>\n                        </td>\n                        <td class=\"week\" *ngIf=\"showISOWeekNumbers\">\n                            <span>{{calendarVariables.left.calendar[row][0].isoWeek()}}</span>\n                        </td>\n                        <!-- cal -->\n                        <td *ngFor=\"let col of calendarVariables.left.calCols\" [class]=\"calendarVariables.left.classes[row][col]\" (click)=\"clickDate($event, sideEnum.left, row, col)\">\n                            <span>{{calendarVariables.left.calendar[row][col].date()}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"calendar-time\" *ngIf=\"timePicker\">\n            <select class=\"hourselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedHour\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                <option *ngFor=\"let i of timepickerVariables.left.hours\"\n                [value]=\"i\"\n                [disabled]=\"timepickerVariables.left.disabledHours.indexOf(i) > -1\">{{i}}</option>\n            </select>\n            <select class=\"minuteselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedMinute\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                <option *ngFor=\"let i of timepickerVariables.left.minutes; let index = index;\"\n                [value]=\"i\"\n                [disabled]=\"timepickerVariables.left.disabledMinutes.indexOf(i) > -1\">{{timepickerVariables.left.minutesLabel[index]}}</option>\n            </select>\n            <select  *ngIf=\"timePickerSeconds\" class=\"secondselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedSecond\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                <option *ngFor=\"let i of timepickerVariables.left.seconds; let index = index;\"\n                [value]=\"i\"\n                [disabled]=\"timepickerVariables.left.disabledSeconds.indexOf(i) > -1\">{{timepickerVariables.left.secondsLabel[index]}}</option>\n            </select>\n            <select *ngIf=\"!timePicker24Hour\" class=\"ampmselect\" [(ngModel)]=\"timepickerVariables.left.ampmModel\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                <option value=\"AM\" [disabled]=\"timepickerVariables.left.amDisabled\">AM</option>\n                <option value=\"PM\"  [disabled]=\"timepickerVariables.left.pmDisabled\">PM</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"calendar right\"\n        *ngIf=\"showCalInRanges && !singleDatePicker\"\n        >\n        <div class=\"calendar-table\">\n            <table class=\"table-condensed\" *ngIf=\"calendarVariables\">\n                <thead>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\"></th>\n                        <ng-container *ngIf=\"(!calendarVariables.right.minDate || calendarVariables.right.minDate.isBefore(calendarVariables.right.calendar.firstDay)) && (!this.linkedCalendars)\">\n                            <th (click)=\"clickPrev(sideEnum.right)\" class=\"prev available\" >\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!((!calendarVariables.right.minDate || calendarVariables.right.minDate.isBefore(calendarVariables.right.calendar.firstDay)) && (!this.linkedCalendars))\">\n                            <th></th>\n                        </ng-container>\n                        <th colspan=\"5\" class=\"month\">\n                            <ng-container *ngIf=\"showDropdowns && calendarVariables.right.dropdowns\">\n                                <div>\n                                    {{this.locale.monthNames[calendarVariables?.right?.calendar[1][1].month()]}}\n                                    <select class=\"monthselect\" (change)=\"monthChanged($event, sideEnum.right)\">\n                                            <option\n                                            [disabled]=\"(calendarVariables.right.dropdowns.inMinYear && m < calendarVariables.right.minDate.month()) || (calendarVariables.right.dropdowns.inMaxYear && m > calendarVariables.right.maxDate.month())\"\n                                            *ngFor=\"let m of calendarVariables.right.dropdowns.monthArrays\" [value]=\"m\" [selected]=\"calendarVariables.right.dropdowns.currentMonth == m\">\n                                                {{locale.monthNames[m]}}\n                                            </option>\n                                    </select>\n                                </div>\n                                <div>\n                                        {{ calendarVariables?.right?.calendar[1][1].format(\" YYYY\")}}\n                                        <select class=\"yearselect\" (change)=\"yearChanged($event, sideEnum.right)\">\n                                        <option *ngFor=\"let y of calendarVariables.right.dropdowns.yearArrays\" [selected]=\"y === calendarVariables.right.dropdowns.currentYear\">\n                                            {{y}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!showDropdowns || !calendarVariables.right.dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.right?.calendar[1][1].month()]}}  {{ calendarVariables?.right?.calendar[1][1].format(\" YYYY\")}}\n                            </ng-container>\n                        </th>\n                            <ng-container *ngIf=\"!calendarVariables.right.maxDate || calendarVariables.right.maxDate.isAfter(calendarVariables.right.calendar.lastDay) && (!linkedCalendars || singleDatePicker || true)\">\n                                <th class=\"next available\" (click)=\"clickNext(sideEnum.right)\">\n                                </th>\n                            </ng-container>\n                            <ng-container *ngIf=\"!(!calendarVariables.right.maxDate || calendarVariables.right.maxDate.isAfter(calendarVariables.right.calendar.lastDay) && (!linkedCalendars || singleDatePicker || true))\">\n                                <th></th>\n                            </ng-container>\n                    </tr>\n\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\" class=\"week\"><span>{{this.locale.weekLabel}}</span></th>\n                        <th *ngFor=\"let dayofweek of locale.daysOfWeek\"><span>{{dayofweek}}</span></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let row of calendarVariables.right.calRows\" [class]=\"calendarVariables.right.classes[row].classList\">\n                        <td class=\"week\" *ngIf=\"showWeekNumbers\">\n                            <span>{{calendarVariables.right.calendar[row][0].week()}}</span>\n                        </td>\n                        <td class=\"week\" *ngIf=\"showISOWeekNumbers\">\n                            <span>{{calendarVariables.right.calendar[row][0].isoWeek()}}</span>\n                        </td>\n                        <td *ngFor=\"let col of calendarVariables.right.calCols\" [class]=\"calendarVariables.right.classes[row][col]\" (click)=\"clickDate($event, sideEnum.right, row, col)\">\n                            <span>{{calendarVariables.right.calendar[row][col].date()}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"calendar-time\" *ngIf=\"timePicker\">\n            <select class=\"hourselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedHour\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                <option *ngFor=\"let i of timepickerVariables.right.hours\"\n                [value]=\"i\"\n                [disabled]=\"timepickerVariables.right.disabledHours.indexOf(i) > -1\">{{i}}</option>\n            </select>\n            <select class=\"minuteselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedMinute\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                <option *ngFor=\"let i of timepickerVariables.right.minutes; let index = index;\"\n                [value]=\"i\"\n                [disabled]=\"timepickerVariables.right.disabledMinutes.indexOf(i) > -1\">{{timepickerVariables.right.minutesLabel[index]}}</option>\n            </select>\n            <select *ngIf=\"timePickerSeconds\" class=\"secondselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedSecond\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                <option *ngFor=\"let i of timepickerVariables.right.seconds; let index = index;\"\n                [value]=\"i\"\n                [disabled]=\"timepickerVariables.right.disabledSeconds.indexOf(i) > -1\">{{timepickerVariables.right.secondsLabel[index]}}</option>\n            </select>\n            <select *ngIf=\"!timePicker24Hour\" class=\"ampmselect\" [(ngModel)]=\"timepickerVariables.right.ampmModel\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                <option value=\"AM\" [disabled]=\"timepickerVariables.right.amDisabled\">AM</option>\n                <option value=\"PM\"  [disabled]=\"timepickerVariables.right.pmDisabled\">PM</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"buttons\" *ngIf=\"!autoApply && ( !rangesArray.length || (showCalInRanges && !singleDatePicker))\">\n        <div class=\"buttons_input\">\n            <button  *ngIf=\"showClearButton\" class=\"btn btn-default clear\" type=\"button\" (click)=\"clear()\" title=\"clear the date\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 -5 24 24\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/></svg>\n            </button>\n            <button class=\"btn btn-default\" *ngIf=\"showCancel\" type=\"button\" (click)=\"clickCancel($event)\">{{locale.cancelLabel}}</button>\n            <button class=\"btn\"  [disabled]=\"applyBtn.disabled\" type=\"button\" (click)=\"clickApply($event)\">{{locale.applyLabel}}</button>\n        </div>\n    </div>\n</div>\n",
                host: {
                    '(click)': 'handleInternalClick($event)',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DaterangepickerComponent; }),
                        multi: true
                    }]
            },] },
];
DaterangepickerComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
]; };
DaterangepickerComponent.propDecorators = {
    "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "autoApply": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "singleDatePicker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showDropdowns": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showISOWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "linkedCalendars": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "autoUpdateInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "alwaysShowCalendars": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "maxSpan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "timePicker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "timePicker24Hour": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "timePickerIncrement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "timePickerSeconds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showClearButton": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "firstMonthDayClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "lastMonthDayClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "emptyWeekRowClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "firstDayOfNextMonthClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "lastDayOfPreviousMonthClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "ranges": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showCustomRangeLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showCancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "keepCalendarOpeningWithRange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showRangeLabelOnInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "drops": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "opens": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "choosedDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['choosedDate',] },],
    "rangeClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['rangeClicked',] },],
    "datesUpdated": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['datesUpdated',] },],
    "pickerContainer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['pickerContainer',] },],
    "isInvalidDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var DaterangepickerDirective = (function () {
    function DaterangepickerDirective(viewContainerRef, _changeDetectorRef, _componentFactoryResolver, _el, _renderer, differs) {
        this.viewContainerRef = viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._el = _el;
        this._renderer = _renderer;
        this.differs = differs;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        this.showCancel = false;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this._locale = {};
        this._endKey = 'endDate';
        this._startKey = 'startDate';
        this.notForChangesProperty = [
            'locale',
            'endKey',
            'startKey'
        ];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rangeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.datesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drops = 'down';
        this.opens = 'right';
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(DaterangepickerComponent);
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        this.picker = ((componentRef.instance));
        this.picker.inline = false;
    }
    Object.defineProperty(DaterangepickerDirective.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (value) {
            if (value !== null) {
                this._locale = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "startKey", {
        set: function (value) {
            if (value !== null) {
                this._startKey = value;
            }
            else {
                this._startKey = 'startDate';
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(DaterangepickerDirective.prototype, "endKey", {
        set: function (value) {
            if (value !== null) {
                this._endKey = value;
            }
            else {
                this._endKey = 'endDate';
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(DaterangepickerDirective.prototype, "value", {
        get: function () {
            return this._value || null;
        },
        set: function (val) {
            this._value = val;
            this._onChange(val);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    DaterangepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.picker.rangeClicked.asObservable().subscribe(function (range) {
            _this.rangeClicked.emit(range);
        });
        this.picker.datesUpdated.asObservable().subscribe(function (range) {
            _this.datesUpdated.emit(range);
        });
        this.picker.choosedDate.asObservable().subscribe(function (change) {
            if (change) {
                var value = {};
                value[_this._startKey] = change.startDate;
                value[_this._endKey] = change.endDate;
                _this.value = value;
                _this.onChange.emit(value);
                if (typeof change.chosenLabel === 'string') {
                    _this._el.nativeElement.value = change.chosenLabel;
                }
            }
        });
        this.picker.firstMonthDayClass = this.firstMonthDayClass;
        this.picker.lastMonthDayClass = this.lastMonthDayClass;
        this.picker.emptyWeekRowClass = this.emptyWeekRowClass;
        this.picker.firstDayOfNextMonthClass = this.firstDayOfNextMonthClass;
        this.picker.lastDayOfPreviousMonthClass = this.lastDayOfPreviousMonthClass;
        this.picker.drops = this.drops;
        this.picker.opens = this.opens;
        this.localeDiffer = this.differs.find(this.locale).create();
    };
    DaterangepickerDirective.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                if (this.notForChangesProperty.indexOf(change) === -1) {
                    this.picker[change] = changes[change].currentValue;
                }
            }
        }
    };
    DaterangepickerDirective.prototype.ngDoCheck = function () {
        if (this.localeDiffer) {
            var changes = this.localeDiffer.diff(this.locale);
            if (changes) {
                this.picker.updateLocale(this.locale);
            }
        }
    };
    DaterangepickerDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    DaterangepickerDirective.prototype.open = function (event) {
        var _this = this;
        this.picker.show(event);
        setTimeout(function () {
            _this.setPosition();
        });
    };
    DaterangepickerDirective.prototype.hide = function (e) {
        this.picker.hide(e);
    };
    DaterangepickerDirective.prototype.toggle = function (e) {
        if (this.picker.isShown) {
            this.hide(e);
        }
        else {
            this.open(e);
        }
    };
    DaterangepickerDirective.prototype.clear = function () {
        this.picker.clear();
    };
    DaterangepickerDirective.prototype.writeValue = function (value) {
        this.value = value;
        this.setValue(value);
    };
    DaterangepickerDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DaterangepickerDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    DaterangepickerDirective.prototype.setValue = function (val) {
        if (val) {
            if (val[this._startKey]) {
                this.picker.setStartDate(val[this._startKey]);
            }
            if (val[this._endKey]) {
                this.picker.setEndDate(val[this._endKey]);
            }
            this.picker.calculateChosenLabel();
            if (this.picker.chosenLabel) {
                this._el.nativeElement.value = this.picker.chosenLabel;
            }
        }
        else {
            this.picker.clear();
        }
    };
    DaterangepickerDirective.prototype.setPosition = function () {
        var style;
        var containerTop;
        var container = this.picker.pickerContainer.nativeElement;
        var element = this._el.nativeElement;
        if (this.drops && this.drops == 'up') {
            containerTop = (element.offsetTop - container.clientHeight) + 'px';
        }
        else {
            containerTop = 'auto';
        }
        if (this.opens == 'left') {
            style = {
                top: containerTop,
                left: (element.offsetLeft - container.clientWidth + element.clientWidth) + 'px',
                right: 'auto'
            };
        }
        else if (this.opens == 'center') {
            style = {
                top: containerTop,
                left: (element.offsetLeft + element.clientWidth / 2
                    - container.clientWidth / 2) + 'px',
                right: 'auto'
            };
        }
        else {
            style = {
                top: containerTop,
                left: element.offsetLeft + 'px',
                right: 'auto'
            };
        }
        if (style) {
            this._renderer.setStyle(container, 'top', style.top);
            this._renderer.setStyle(container, 'left', style.left);
            this._renderer.setStyle(container, 'right', style.right);
        }
    };
    DaterangepickerDirective.prototype.outsideClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        if (targetElement.classList.contains('ngx-daterangepicker-action')) {
            return;
        }
        var clickedInside = this._el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.hide();
        }
    };
    return DaterangepickerDirective;
}());
DaterangepickerDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[ngxDaterangepickerMd]',
                host: {
                    '(keyup.esc)': 'hide()',
                    '(blur)': 'onBlur()',
                    '(click)': 'open()'
                },
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DaterangepickerDirective; }), multi: true
                    }
                ]
            },] },
];
DaterangepickerDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], },
]; };
DaterangepickerDirective.propDecorators = {
    "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "autoApply": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "alwaysShowCalendars": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showCustomRangeLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "linkedCalendars": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "singleDatePicker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showISOWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showDropdowns": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isInvalidDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isCustomDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showClearButton": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "ranges": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "opens": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "drops": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "lastMonthDayClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "emptyWeekRowClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "firstDayOfNextMonthClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "lastDayOfPreviousMonthClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "keepCalendarOpeningWithRange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showRangeLabelOnInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "showCancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "timePicker": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "timePicker24Hour": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "timePickerIncrement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "timePickerSeconds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "_endKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "startKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "endKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['change',] },],
    "rangeClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['rangeClicked',] },],
    "datesUpdated": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['datesUpdated',] },],
    "outsideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event', '$event.target'],] },],
};
var NgxDaterangepickerMd = (function () {
    function NgxDaterangepickerMd() {
    }
    return NgxDaterangepickerMd;
}());
NgxDaterangepickerMd.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    DaterangepickerComponent,
                    DaterangepickerDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                providers: [],
                exports: [
                    DaterangepickerComponent,
                    DaterangepickerDirective
                ],
                entryComponents: [
                    DaterangepickerComponent
                ]
            },] },
];
NgxDaterangepickerMd.ctorParameters = function () { return []; };


//# sourceMappingURL=ngx-daterangepicker-material.js.map


/***/ }),

/***/ "./src/app/core/_config/demo1/menu.config.ts":
/*!***************************************************!*\
  !*** ./src/app/core/_config/demo1/menu.config.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MenuConfig = /** @class */ (function () {
    function MenuConfig() {
        this.defaults = {
            header: {
                self: {},
            },
            aside: {
                self: {},
                items: [
                    {
                        title: 'Dashboard',
                        root: true,
                        icon: 'flaticon-buildings',
                        page: '/dashboard',
                        translate: 'MENU.DASHBOARD',
                    },
                    {
                        title: 'News',
                        root: true,
                        icon: 'flaticon-list',
                        page: '/news/cb-tuan',
                        translate: 'News',
                    },
                ]
            },
        };
    }
    Object.defineProperty(MenuConfig.prototype, "configs", {
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return MenuConfig;
}());
exports.MenuConfig = MenuConfig;


/***/ }),

/***/ "./src/app/core/_config/demo1/page.config.ts":
/*!***************************************************!*\
  !*** ./src/app/core/_config/demo1/page.config.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PageConfig = /** @class */ (function () {
    function PageConfig() {
        this.defaults = {
            dashboard: {
                page: [
                    {
                        'title': 'News',
                    },
                    {
                        'title': 'Dashboard',
                        'desc': 'Latest updates and statistic charts'
                    },
                ]
            },
            ngbootstrap: {
                accordion: {
                    page: { title: 'Accordion', desc: '' }
                },
                alert: {
                    page: { title: 'Alert', desc: '' }
                },
                buttons: {
                    page: { title: 'Buttons', desc: '' }
                },
                carousel: {
                    page: { title: 'Carousel', desc: '' }
                },
                collapse: {
                    page: { title: 'Collapse', desc: '' }
                },
                datepicker: {
                    page: { title: 'Datepicker', desc: '' }
                },
                dropdown: {
                    page: { title: 'Dropdown', desc: '' }
                },
                modal: {
                    page: { title: 'Modal', desc: '' }
                },
                pagination: {
                    page: { title: 'Pagination', desc: '' }
                },
                popover: {
                    page: { title: 'Popover', desc: '' }
                },
                progressbar: {
                    page: { title: 'Progressbar', desc: '' }
                },
                rating: {
                    page: { title: 'Rating', desc: '' }
                },
                tabs: {
                    page: { title: 'Tabs', desc: '' }
                },
                timepicker: {
                    page: { title: 'Timepicker', desc: '' }
                },
                tooltip: {
                    page: { title: 'Tooltip', desc: '' }
                },
                typehead: {
                    page: { title: 'Typehead', desc: '' }
                }
            },
            material: {
                // form controls
                'form-controls': {
                    autocomplete: {
                        page: { title: 'Auto Complete', desc: '' }
                    },
                    checkbox: {
                        page: { title: 'Checkbox', desc: '' }
                    },
                    datepicker: {
                        page: { title: 'Datepicker', desc: '' }
                    },
                    radiobutton: {
                        page: { title: 'Radio Button', desc: '' }
                    },
                    formfield: {
                        page: { title: 'Form field', desc: '' }
                    },
                    input: {
                        page: { title: 'Input', desc: '' }
                    },
                    select: {
                        page: { title: 'Select', desc: '' }
                    },
                    slider: {
                        page: { title: 'Slider', desc: '' }
                    },
                    slidertoggle: {
                        page: { title: 'Slider Toggle', desc: '' }
                    }
                },
                // navigation
                navigation: {
                    menu: {
                        page: { title: 'Menu', desc: '' }
                    },
                    sidenav: {
                        page: { title: 'Sidenav', desc: '' }
                    },
                    toolbar: {
                        page: { title: 'Toolbar', desc: '' }
                    }
                },
                // layout
                layout: {
                    card: {
                        page: { title: 'Card', desc: '' }
                    },
                    divider: {
                        page: { title: 'Divider', desc: '' }
                    },
                    'expansion-panel': {
                        page: { title: 'Expansion panel', desc: '' }
                    },
                    'grid-list': {
                        page: { title: 'Grid list', desc: '' }
                    },
                    list: {
                        page: { title: 'List', desc: '' }
                    },
                    tabs: {
                        page: { title: 'Tabs', desc: '' }
                    },
                    stepper: {
                        page: { title: 'Stepper', desc: '' }
                    },
                    'default-forms': {
                        page: { title: 'Default Forms', desc: '' }
                    },
                    tree: {
                        page: { title: 'Tree', desc: '' }
                    },
                },
                // buttons & indicators
                'buttons-and-indicators': {
                    button: {
                        page: { title: 'Button', desc: '' }
                    },
                    'button-toggle': {
                        page: { title: 'Button toggle', desc: '' }
                    },
                    chips: {
                        page: { title: 'Chips', desc: '' }
                    },
                    icon: {
                        page: { title: 'Icon', desc: '' }
                    },
                    'progress-bar': {
                        page: { title: 'Progress bar', desc: '' }
                    },
                    'progress-spinner': {
                        page: { title: 'Progress spinner', desc: '' }
                    }
                },
                // popups & models
                'popups-and-modals': {
                    'bottom-sheet': {
                        page: { title: 'Bottom sheet', desc: '' }
                    },
                    dialog: {
                        page: { title: 'Dialog', desc: '' }
                    },
                    snackbar: {
                        page: { title: 'Snackbar', desc: '' }
                    },
                    tooltip: {
                        page: { title: 'Tooltip', desc: '' }
                    }
                },
                // Data tables
                'data-table': {
                    paginator: {
                        page: { title: 'Paginator', desc: '' }
                    },
                    'sort-header': {
                        page: { title: 'Sort header', desc: '' }
                    },
                    table: {
                        page: { title: 'Table', desc: '' }
                    }
                }
            },
            forms: {
                page: { title: 'Forms', desc: '' }
            },
            mail: {
                page: { title: 'Mail', desc: 'Mail' }
            },
            ecommerce: {
                customers: {
                    page: { title: 'Customers', desc: '' }
                },
                products: {
                    edit: {
                        page: { title: 'Edit product', desc: '' }
                    },
                    add: {
                        page: { title: 'Create product', desc: '' }
                    }
                },
                orders: {
                    page: { title: 'Orders', desc: '' }
                }
            },
            'user-management': {
                users: {
                    page: { title: 'Users', desc: '' }
                },
                roles: {
                    page: { title: 'Roles', desc: '' }
                }
            },
            builder: {
                page: { title: 'Layout Builder', desc: '' }
            },
            header: {
                actions: {
                    page: { title: 'Actions', desc: 'Actions example page' }
                }
            },
            profile: {
                page: { title: 'User Profile', desc: '' }
            },
            error: {
                404: {
                    page: { title: '404 Not Found', desc: '', subheader: false }
                },
                403: {
                    page: { title: '403 Access Forbidden', desc: '', subheader: false }
                }
            }
        };
    }
    Object.defineProperty(PageConfig.prototype, "configs", {
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return PageConfig;
}());
exports.PageConfig = PageConfig;


/***/ }),

/***/ "./src/app/views/pages/pages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/pages/pages.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Partials
var partials_module_1 = __webpack_require__(/*! ../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
// Pages
var core_module_1 = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [],
            exports: [],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                core_module_1.CoreModule,
                partials_module_1.PartialsModule,
            ],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;


/***/ }),

/***/ "./src/app/views/themes/demo1/aside/aside-left.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/themes/demo1/aside/aside-left.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\r\n<div ktOffcanvas [options]=\"menuCanvasOptions\" class=\"kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop\" id=\"kt_aside\">\r\n\t<kt-brand></kt-brand>\r\n\t<!-- BEGIN: Aside Menu -->\r\n\t<div class=\"kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid\" id=\"kt_aside_menu_wrapper\">\r\n\t\t<div #asideMenu ktMenu [options]=\"menuOptions\" [perfectScrollbar]=\"{wheelPropagation: false}\" [ngStyle]=\"{'max-height': '90vh', 'position': 'relative'}\" id=\"kt_aside_menu\" class=\"kt-aside-menu\"\r\n\t\t\t[attr.data-ktmenu-vertical]=\"1\" (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\"\r\n\t\t\t[ngClass]=\"htmlClassService.getClasses('aside_menu', true)\">\r\n\t\t\t<ul class=\"kt-menu__nav\" [ngClass]=\"htmlClassService.getClasses('aside_menu_nav', true)\">\r\n\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuListTemplate\"></ng-container>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- END: Aside Menu -->\r\n</div>\r\n<!-- END: Left Aside -->\r\n\r\n<ng-template #menuListTemplate>\r\n\t<ng-container *ngFor=\"let child of menuAsideService.menuList$ | async\">\r\n\t\t<ng-container *ngIf=\"child.section\" [ngTemplateOutlet]=\"menuItemSectionTemplate\"\r\n\t\t\t[ngTemplateOutletContext]=\"{ item: child }\"></ng-container>\r\n\t\t<ng-container *ngIf=\"child.separator\" [ngTemplateOutlet]=\"menuItemSeparatorTemplate\"\r\n\t\t\t[ngTemplateOutletContext]=\"{ item: child }\"></ng-container>\r\n\t\t<ng-container *ngIf=\"child.title\" [ngTemplateOutlet]=\"menuItemTemplate\"\r\n\t\t\t[ngTemplateOutletContext]=\"{ item: child }\"></ng-container>\r\n\t</ng-container>\r\n</ng-template>\r\n\r\n<ng-template #menuItemTemplate let-item=\"item\" let-parentItem=\"parentItem\">\r\n\t<ng-container *ngIf=\"!item.permission\" [ngTemplateOutlet]=\"menuItemInnerTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem  }\"></ng-container>\r\n\t<ng-template *ngIf=\"item.permission\" ngxPermissionsOnly=\"{{ item.permission }}\">\r\n\t\t<ng-container [ngTemplateOutlet]=\"menuItemInnerTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem  }\"></ng-container>\r\n\t</ng-template>\r\n</ng-template>\r\n\r\n<ng-template #menuItemInnerTemplate let-item=\"item\" let-parentItem=\"parentItem\">\r\n\t<li [attr.aria-haspopup]=\"true\"\r\n\t\t[attr.data-ktmenu-submenu-toggle]=\"getItemAttrSubmenuToggle(item)\"\r\n\t\t[attr.data-ktmenu-submenu-mode]=\"item.mode\"\r\n\t\t[attr.data-ktmenu-dropdown-toggle-class]=\"item['dropdown-toggle-class']\" [ngClass]=\"getItemCssClasses(item)\"\r\n\t\t[ngbTooltip]=\"item.tooltip\" data-placement=\"right\">\r\n\r\n\t\t<!-- if menu item hasn't submenu -->\r\n\t\t<a *ngIf=\"!item.submenu\" [routerLink]=\"item.page\" class=\"kt-menu__link kt-menu__toggle\">\r\n\t\t\t<ng-container [ngTemplateOutlet]=\"menuItemTextTemplate\"\r\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\r\n\t\t</a>\r\n\t\t<!-- if menu item has sumnenu child  -->\r\n\t\t<a *ngIf=\"item.submenu\" class=\"kt-menu__link kt-menu__toggle\">\r\n\t\t\t<ng-container [ngTemplateOutlet]=\"menuItemTextTemplate\"\r\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\r\n\t\t</a>\r\n\r\n\t\t<!-- if menu item has submenu child then recursively call new menu item component -->\r\n\t\t<div *ngIf=\"item.submenu\" class=\"kt-menu__submenu\">\r\n\t\t\t<span class=\"kt-menu__arrow\"></span>\r\n\t\t\t<div *ngIf=\"item['custom-class'] === 'kt-menu__item--submenu-fullheight'\" class=\"kt-menu__wrapper\">\r\n\t\t\t\t<!-- wrap submenu to full height -->\r\n\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuSubmenuTemplate\"\r\n\t\t\t\t\t[ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- normal submenu -->\r\n\t\t\t<ng-container *ngIf=\"item['custom-class'] !== 'kt-menu__item--submenu-fullheight'\"\r\n\t\t\t\t[ngTemplateOutlet]=\"menuSubmenuTemplate\"\r\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\">\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</li>\r\n\r\n</ng-template>\r\n\r\n<ng-template #menuSubmenuTemplate let-item=\"item\" let-parentItem=\"parentItem\">\r\n\t<ul class=\"kt-menu__subnav\">\r\n\t\t<ng-container *ngFor=\"let child of item.submenu\">\r\n\t\t\t<ng-container *ngIf=\"child.section\" [ngTemplateOutlet]=\"menuItemSectionTemplate\"\r\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: child, parentItem: item }\"></ng-container>\r\n\t\t\t<ng-container *ngIf=\"child.separator\" [ngTemplateOutlet]=\"menuItemSeparatorTemplate\"\r\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: child, parentItem: item }\"></ng-container>\r\n\t\t\t<ng-container *ngIf=\"child.title\" [ngTemplateOutlet]=\"menuItemTemplate\"\r\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: child, parentItem: item }\"></ng-container>\r\n\t\t</ng-container>\r\n\t</ul>\r\n</ng-template>\r\n\r\n<ng-template #menuItemTextTemplate let-item=\"item\" let-parentItem=\"parentItem\">\r\n\t<!-- if menu item has icon -->\r\n\t<i *ngIf=\"item.icon\" class=\"kt-menu__link-icon\" [ngClass]=\"item.icon\"></i>\r\n\r\n\t<!-- if menu item using bullet -->\r\n\t<i *ngIf=\"parentItem && parentItem.bullet === 'dot'\" class=\"kt-menu__link-bullet kt-menu__link-bullet--dot\">\r\n\t\t<span></span>\r\n\t</i>\r\n\t<i *ngIf=\"parentItem && parentItem.bullet === 'line'\" class=\"kt-menu__link-bullet kt-menu__link-bullet--line\">\r\n\t\t<span></span>\r\n\t</i>\r\n\r\n\t<!-- menu item title text -->\r\n\t<span class=\"kt-menu__link-text\" [translate]=\"item.translate\">{{item.title}}</span>\r\n\t<!-- menu item with badge -->\r\n\t<span *ngIf=\"item.badge\" class=\"kt-menu__link-badge\">\r\n\t\t<span class=\"kt-badge\" [ngClass]=\"item.badge.type\">{{item.badge.value}}</span>\r\n\t</span>\r\n\r\n\t<!-- if menu item has submenu child then put arrow icon -->\r\n\t<i *ngIf=\"item.submenu\" class=\"kt-menu__ver-arrow la la-angle-right\"></i>\r\n</ng-template>\r\n\r\n<ng-template #menuItemSeparatorTemplate let-item=\"item\" let-parentItem=\"parentItem\">\r\n\t<li class=\"kt-menu__separator\"><span></span></li>\r\n</ng-template>\r\n\r\n<ng-template #menuItemSectionTemplate let-item=\"item\" let-parentItem=\"parentItem\">\r\n\t<li class=\"kt-menu__section\">\r\n\t\t<h4 class=\"kt-menu__section-text\">{{item.section}}</h4>\r\n\t\t<i class=\"kt-menu__section-icon flaticon-more-v2\"></i>\r\n\t</li>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/aside/aside-left.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/themes/demo1/aside/aside-left.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .kt-aside {\n  height: 100%; }\n\n:host .kt-menu__link-text {\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGhlbWVzL2RlbW8xL2FzaWRlL0Y6XFx2aWV0bmFtbmV0d29ya21vdGl0b3Jpbmdwb3J0YWwvc3JjXFxhcHBcXHZpZXdzXFx0aGVtZXNcXGRlbW8xXFxhc2lkZVxcYXNpZGUtbGVmdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVksRUFBQTs7QUFGZDtFQU9FLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGhlbWVzL2RlbW8xL2FzaWRlL2FzaWRlLWxlZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0Lmt0LWFzaWRlIHtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC8vIGZpeGVkIHRleHQgbGluZSBicmVhayBpc3N1ZSBvbiBtaW5pbWl6ZWQgYXNpZGUgaG92ZXJcclxuXHQua3QtbWVudV9fbGluay10ZXh0IHtcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/themes/demo1/aside/aside-left.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/themes/demo1/aside/aside-left.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var objectPath = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
var layout_1 = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var html_class_service_1 = __webpack_require__(/*! ../html-class.service */ "./src/app/views/themes/demo1/html-class.service.ts");
var AsideLeftComponent = /** @class */ (function () {
    function AsideLeftComponent(htmlClassService, menuAsideService, layoutConfigService, router, render) {
        this.htmlClassService = htmlClassService;
        this.menuAsideService = menuAsideService;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.render = render;
        this.currentRouteUrl = '';
        this.menuCanvasOptions = {
            baseClass: 'kt-aside',
            overlay: true,
            closeBy: 'kt_aside_close_btn',
            toggleBy: {
                target: 'kt_aside_mobile_toggler',
                state: 'kt-header-mobile__toolbar-toggler--active'
            }
        };
        this.menuOptions = {
            // vertical scroll
            scroll: null,
            // submenu setup
            submenu: {
                desktop: {
                    // by default the menu mode set to accordion in desktop mode
                    default: 'dropdown',
                },
                tablet: 'accordion',
                mobile: 'accordion' // menu set to accordion in mobile mode
            },
            // accordion setup
            accordion: {
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        };
    }
    AsideLeftComponent.prototype.ngAfterViewInit = function () {
    };
    AsideLeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRouteUrl = this.router.url.split(/[?#]/)[0];
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this.currentRouteUrl = _this.router.url.split(/[?#]/)[0]; });
        var config = this.layoutConfigService.getConfig();
        if (objectPath.get(config, 'aside.menu.dropdown') !== true && objectPath.get(config, 'aside.self.fixed')) {
            this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-scroll', '1');
        }
        if (objectPath.get(config, 'aside.menu.dropdown')) {
            this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-dropdown', '1');
            // tslint:disable-next-line:max-line-length
            this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-dropdown-timeout', objectPath.get(config, 'aside.menu.submenu.dropdown.hover-timeout'));
        }
    };
    AsideLeftComponent.prototype.isMenuItemIsActive = function (item) {
        if (item.submenu) {
            return this.isMenuRootItemIsActive(item);
        }
        if (!item.page) {
            return false;
        }
        return this.currentRouteUrl.indexOf(item.page) !== -1;
    };
    AsideLeftComponent.prototype.isMenuRootItemIsActive = function (item) {
        var result = false;
        for (var _i = 0, _a = item.submenu; _i < _a.length; _i++) {
            var subItem = _a[_i];
            result = this.isMenuItemIsActive(subItem);
            if (result) {
                return true;
            }
        }
        return false;
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    AsideLeftComponent.prototype.mouseEnter = function (e) {
        var _this = this;
        // check if the left aside menu is fixed
        if (document.body.classList.contains('kt-aside--fixed')) {
            if (this.outsideTm) {
                clearTimeout(this.outsideTm);
                this.outsideTm = null;
            }
            this.insideTm = setTimeout(function () {
                // if the left aside menu is minimized
                if (document.body.classList.contains('kt-aside--minimize') && KTUtil.isInResponsiveRange('desktop')) {
                    // show the left aside menu
                    _this.render.removeClass(document.body, 'kt-aside--minimize');
                    _this.render.addClass(document.body, 'kt-aside--minimize-hover');
                }
            }, 50);
        }
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    AsideLeftComponent.prototype.mouseLeave = function (e) {
        var _this = this;
        if (document.body.classList.contains('kt-aside--fixed')) {
            if (this.insideTm) {
                clearTimeout(this.insideTm);
                this.insideTm = null;
            }
            this.outsideTm = setTimeout(function () {
                // if the left aside menu is expand
                if (document.body.classList.contains('kt-aside--minimize-hover') && KTUtil.isInResponsiveRange('desktop')) {
                    // hide back the left aside menu
                    _this.render.removeClass(document.body, 'kt-aside--minimize-hover');
                    _this.render.addClass(document.body, 'kt-aside--minimize');
                }
            }, 100);
        }
    };
    AsideLeftComponent.prototype.getItemCssClasses = function (item) {
        var classes = 'kt-menu__item';
        if (objectPath.get(item, 'submenu')) {
            classes += ' kt-menu__item--submenu';
        }
        if (!item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--active kt-menu__item--here';
        }
        if (item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--open kt-menu__item--here';
        }
        // custom class for menu item
        if (objectPath.has(item, 'custom-class')) {
            classes += ' ' + item['custom-class'];
        }
        if (objectPath.get(item, 'icon-only')) {
            classes += ' kt-menu__item--icon-only';
        }
        return classes;
    };
    AsideLeftComponent.prototype.getItemAttrSubmenuToggle = function (item) {
        var toggle = 'hover';
        if (objectPath.get(item, 'toggle') === 'click') {
            toggle = 'click';
        }
        else if (objectPath.get(item, 'submenu.type') === 'tabs') {
            toggle = 'tabs';
        }
        else {
            // submenu toggle default to 'hover'
        }
        return toggle;
    };
    __decorate([
        core_1.ViewChild('asideMenu'),
        __metadata("design:type", core_1.ElementRef)
    ], AsideLeftComponent.prototype, "asideMenu", void 0);
    AsideLeftComponent = __decorate([
        core_1.Component({
            selector: 'kt-aside-left',
            template: __webpack_require__(/*! ./aside-left.component.html */ "./src/app/views/themes/demo1/aside/aside-left.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: [__webpack_require__(/*! ./aside-left.component.scss */ "./src/app/views/themes/demo1/aside/aside-left.component.scss")]
        }),
        __metadata("design:paramtypes", [html_class_service_1.HtmlClassService,
            layout_1.MenuAsideService,
            layout_1.LayoutConfigService,
            router_1.Router,
            core_1.Renderer2])
    ], AsideLeftComponent);
    return AsideLeftComponent;
}());
exports.AsideLeftComponent = AsideLeftComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/base/base.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/themes/demo1/base/base.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Page -->\r\n<ng-container *ngIf=\"selfLayout !== 'blank'; else blankLayout\">\r\n\t<div class=\"kt-grid kt-grid--hor kt-grid--root\">\r\n\t\t<!-- begin:: Header Mobile -->\r\n\t\t<kt-header-mobile></kt-header-mobile>\r\n\t\t<!-- end:: Header Mobile -->\r\n\r\n\t\t<!-- begin::Body -->\r\n\t\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page\">\r\n\t\t\t<!-- begin:: Aside Left -->\r\n\t\t\t<ng-container *ngIf=\"asideDisplay\">\r\n\t\t\t\t<button class=\"kt-aside-close\" id=\"kt_aside_close_btn\"><i class=\"la la-close\"></i></button>\r\n\t\t\t\t<kt-aside-left></kt-aside-left>\r\n\t\t\t</ng-container>\r\n\t\t\t<!-- end:: Aside Left -->\r\n\r\n\t\t\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper\" id=\"kt_wrapper\">\r\n\t\t\t\t<!-- begin:: Header -->\r\n\t\t\t\t<kt-header></kt-header>\r\n\t\t\t\t<!-- end:: Header -->\r\n\r\n\t\t\t\t<!-- begin:: Content -->\r\n\t\t\t\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor\">\r\n\t\t\t\t\t<!-- begin:: Content Head -->\r\n\t\t\t\t\t<kt-subheader *ngIf=\"subheaderDisplay\"></kt-subheader>\r\n\t\t\t\t\t<!-- end:: Content Head -->\r\n\r\n\t\t\t\t\t<!-- begin:: Content Body -->\r\n\t\t\t\t\t<div ktContentAnimate class=\"kt-content kt-grid__item kt-grid__item--fluid\" id=\"kt_content\">\r\n\t\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- end:: Content Body -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end:: Content -->\r\n\r\n\t\t\t\t<kt-footer></kt-footer>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end:: Body -->\r\n\r\n\t\t<kt-quick-panel></kt-quick-panel>\r\n\t\t<kt-scroll-top></kt-scroll-top>\r\n\t</div>\r\n</ng-container>\r\n<!-- end:: Page -->\r\n\r\n<ng-template #blankLayout>\r\n\t<router-outlet></router-outlet>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/base/base.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/themes/demo1/base/base.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/views/themes/demo1/base/base.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/themes/demo1/base/base.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Object-Path
var objectPath = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var html_class_service_1 = __webpack_require__(/*! ../html-class.service */ "./src/app/views/themes/demo1/html-class.service.ts");
var layout_config_1 = __webpack_require__(/*! ../../../../core/_config/demo1/layout.config */ "./src/app/core/_config/demo1/layout.config.ts");
var menu_config_1 = __webpack_require__(/*! ../../../../core/_config/demo1/menu.config */ "./src/app/core/_config/demo1/menu.config.ts");
var page_config_1 = __webpack_require__(/*! ../../../../core/_config/demo1/page.config */ "./src/app/core/_config/demo1/page.config.ts");
// User permissions
var ngx_permissions_1 = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
var auth_1 = __webpack_require__(/*! ../../../../core/auth */ "./src/app/core/auth/index.ts");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var BaseComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param menuConfigService: MenuConfifService
     * @param pageConfigService: PageConfigService
     * @param htmlClassService: HtmlClassService
     */
    function BaseComponent(layoutConfigService, menuConfigService, pageConfigService, htmlClassService, store, permissionsService) {
        var _this = this;
        this.layoutConfigService = layoutConfigService;
        this.menuConfigService = menuConfigService;
        this.pageConfigService = pageConfigService;
        this.htmlClassService = htmlClassService;
        this.store = store;
        this.permissionsService = permissionsService;
        // Private properties
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.loadRolesWithPermissions();
        // register configs by demos
        this.layoutConfigService.loadConfigs(new layout_config_1.LayoutConfig().configs);
        this.menuConfigService.loadConfigs(new menu_config_1.MenuConfig().configs);
        this.pageConfigService.loadConfigs(new page_config_1.PageConfig().configs);
        // setup element classes
        this.htmlClassService.setConfig(this.layoutConfigService.getConfig());
        var layoutSubdscription = this.layoutConfigService.onConfigUpdated$.subscribe(function (layoutConfig) {
            // reset body class based on global and page level layout config, refer to html-class.service.ts
            document.body.className = '';
            _this.htmlClassService.setConfig(layoutConfig);
        });
        this.unsubscribe.push(layoutSubdscription);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.layoutConfigService.getConfig();
        this.selfLayout = objectPath.get(config, 'self.layout');
        this.asideDisplay = objectPath.get(config, 'aside.self.display');
        this.subheaderDisplay = objectPath.get(config, 'subheader.display');
        // let the layout type change
        var layoutConfigSubscription = this.layoutConfigService.onConfigUpdated$.subscribe(function (cfg) {
            setTimeout(function () {
                _this.selfLayout = objectPath.get(cfg, 'self.layout');
            });
        });
        this.unsubscribe.push(layoutConfigSubscription);
    };
    /**
     * On destroy
     */
    BaseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * NGX Permissions, init roles
     */
    BaseComponent.prototype.loadRolesWithPermissions = function () {
        var _this = this;
        this.currentUserPermissions$ = this.store.pipe(store_1.select(auth_1.currentUserPermissions));
        var subscr = this.currentUserPermissions$.subscribe(function (res) {
            if (!res || res.length === 0) {
                return;
            }
            _this.permissionsService.flushPermissions();
            res.forEach(function (pm) { return _this.permissionsService.addPermission(pm.name); });
        });
        this.unsubscribe.push(subscr);
    };
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'kt-base',
            template: __webpack_require__(/*! ./base.component.html */ "./src/app/views/themes/demo1/base/base.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./base.component.scss */ "./src/app/views/themes/demo1/base/base.component.scss")]
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService,
            layout_1.MenuConfigService,
            layout_1.PageConfigService,
            html_class_service_1.HtmlClassService,
            store_1.Store,
            ngx_permissions_1.NgxPermissionsService])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/content/error-page/error-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/themes/demo1/content/error-page/error-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-error\r\n\t[type]=\"type\"\r\n\t[image]=\"image\"\r\n\t[code]=\"code\"\r\n\t[title]=\"title\"\r\n\t[subtitle]=\"subtitle\"\r\n\t[desc]=\"desc\"\r\n\t[return]=\"return\"></kt-error>\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/content/error-page/error-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/themes/demo1/content/error-page/error-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kt-error-v1{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.kt-error-v1 .kt-error-v1__container .kt-error-v1__number{font-size:150px;margin-left:80px;margin-top:9rem;font-weight:700;color:#6c7293}.kt-error-v1 .kt-error-v1__container .kt-error-v1__desc{font-size:1.5rem;margin-left:80px;color:#a7abc3}@media (max-width:768px){.kt-error-v1 .kt-error-v1__container .kt-error-v1__number{margin:120px 0 0 3rem;font-size:8rem}.kt-error-v1 .kt-error-v1__container .kt-error-v1__desc{margin-left:3rem;padding-right:.5rem}}.kt-error-v2{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.kt-error-v2 .kt-error_container .kt-error_title2>h1{font-size:6rem;text-align:center;margin-top:45rem;font-weight:500}.kt-error-v2 .kt-error_container .kt-error_desc{font-size:2.5rem;text-align:center;display:block;font-weight:700}@media (max-width:768px){.kt-error-v2 .kt-error_container .kt-error_desc{padding-left:.6rem;padding-right:.6rem}}.kt-error-v3{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.kt-error-v3 .kt-error_container .kt-error_number>h1{font-size:15.7rem;margin-left:7.85rem;margin-top:11.4rem;font-weight:500;-webkit-text-stroke-width:.35rem;-moz-text-stroke-width:.35rem;text-stroke-width:.35rem;color:#a3dcf0;-webkit-text-stroke-color:#fff;-moz-text-stroke-color:#fff;text-stroke-color:#fff}@media screen\\0{.kt-error-v3 .kt-error_container .kt-error_number>h1{color:#fff}}.kt-error-v3 .kt-error_container .kt-error_title{margin-left:7.85rem;font-size:2.5rem;font-weight:700;color:#464457}.kt-error-v3 .kt-error_container .kt-error_subtitle{margin-left:7.85rem;margin-top:3.57rem;font-size:1.8rem;font-weight:700;color:#6c7293}.kt-error-v3 .kt-error_container .kt-error_description{margin-left:7.85rem;font-size:1.4rem;font-weight:500;color:#a7abc3}@media (max-width:768px){.kt-error-v3 .kt-error_container .kt-error_number>h1{font-size:8rem;margin-left:4rem;margin-top:3.5rem}.kt-error-v3 .kt-error_container .kt-error_title{margin-left:4rem}.kt-error-v3 .kt-error_container .kt-error_subtitle{margin-left:4rem;padding-right:.5rem}.kt-error-v3 .kt-error_container .kt-error_description{margin-left:4rem;padding-right:.5rem}}.kt-error-v4{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.kt-error-v4 .kt-error_container .kt-error_number{font-size:15.7rem;margin-left:14.3rem;margin-top:11.4rem;font-weight:700;color:#84d49e}.kt-error-v4 .kt-error_container .kt-error_title{margin:-70px 0 2% 14.3rem;font-size:10rem;font-weight:700;color:#84d49e}.kt-error-v4 .kt-error_container .kt-error_description{margin-left:15rem;font-size:2.5rem;margin:-70px 0 2% 14.8rem;font-weight:700;color:#c62}@media (min-width:769px) and (max-width:1024px){.kt-error-v4 .kt-error_container .kt-error_number{font-size:12rem;margin-left:7rem;margin-top:8rem;font-weight:700}.kt-error-v4 .kt-error_container .kt-error_title{margin:-40px 0 2% 7rem;font-size:7rem;font-weight:700}.kt-error-v4 .kt-error_container .kt-error_description{margin-left:15rem;font-size:2rem;margin:-40px 0 2% 7.3rem;font-weight:700}}@media (max-width:768px){.kt-error-v4 .kt-error_container{text-align:center}.kt-error-v4 .kt-error_container .kt-error_number{font-size:9rem;margin:4rem auto 0 auto}.kt-error-v4 .kt-error_container .kt-error_title{margin:.3rem auto;text-align:center;font-size:5rem}.kt-error-v4 .kt-error_container .kt-error_description{text-align:center;font-size:2rem;margin:.3rem auto;padding:0 .5rem 0 .5rem}}.kt-error-v5{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.kt-error-v5 .kt-error_container .kt-error_title>h1{font-size:14rem;margin-left:25rem;margin-top:18rem;font-weight:700;color:#314da7;-webkit-text-stroke-color:#fff}.kt-error-v5 .kt-error_container .kt-error_subtitle{margin-left:26rem;margin-top:3.57rem;font-size:2.3rem;font-weight:700;color:#6c7293}.kt-error-v5 .kt-error_container .kt-error_description{margin-left:26rem;font-size:1.8rem;font-weight:500;line-height:130%;color:#a7abc3}@media (min-width:1025px) and (max-width:1399px){.kt-error-v5{background-position:bottom -80px left 1300px}.kt-error-v5 .kt-error_container .kt-error_title>h1{font-weight:700;font-size:12rem;margin-left:7rem}.kt-error-v5 .kt-error_container .kt-error_subtitle{margin-left:7rem;font-size:2.3rem;font-weight:700}.kt-error-v5 .kt-error_container .kt-error_description{margin-left:7rem;font-size:1.8rem;font-weight:500;line-height:130%}}@media (min-width:769px) and (max-width:1024px){.kt-error-v5 .kt-error_container .kt-error_title>h1{font-weight:700;font-size:12rem;margin-left:7rem}.kt-error-v5 .kt-error_container .kt-error_subtitle{margin-left:7rem;font-size:2.3rem;font-weight:700}.kt-error-v5 .kt-error_container .kt-error_description{margin-left:7rem;font-size:1.8rem;font-weight:500;line-height:130%}}@media (max-width:768px){.kt-error-v5 .kt-error_container .kt-error_title>h1{font-size:6rem;margin-top:5rem;margin-left:4rem}.kt-error-v5 .kt-error_container .kt-error_subtitle{margin-top:2rem;margin-left:4rem;font-size:2rem;line-height:2rem}.kt-error-v5 .kt-error_container .kt-error_description{font-size:1.4rem;margin-left:4rem}}.kt-error-v6{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.kt-error-v6 .kt-error_container{text-align:center}.kt-error-v6 .kt-error_container .kt-error_subtitle>h1{font-size:10rem;margin-top:12rem;font-weight:700}.kt-error-v6 .kt-error_container .kt-error_description{margin-top:3rem;font-size:2.3rem;font-weight:500;line-height:3rem}@media (max-width:768px){.kt-error-v6 .kt-error_container .kt-error_subtitle>h1{font-size:5rem}.kt-error-v6 .kt-error_container .kt-error_description{font-size:1.7rem;padding-left:1.5rem;padding-right:1.5rem}}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2RlbW8xL3BhZ2VzL2dlbmVyYWwvZXJyb3IvZXJyb3ItMS5jc3MiLCJzcmMvYXNzZXRzL2Nzcy9kZW1vMS9wYWdlcy9nZW5lcmFsL2Vycm9yL2Vycm9yLTIuY3NzIiwic3JjL2Fzc2V0cy9jc3MvZGVtbzEvcGFnZXMvZ2VuZXJhbC9lcnJvci9lcnJvci0zLmNzcyIsInNyYy9hc3NldHMvY3NzL2RlbW8xL3BhZ2VzL2dlbmVyYWwvZXJyb3IvZXJyb3ItNC5jc3MiLCJzcmMvYXNzZXRzL2Nzcy9kZW1vMS9wYWdlcy9nZW5lcmFsL2Vycm9yL2Vycm9yLTUuY3NzIiwic3JjL2Fzc2V0cy9jc3MvZGVtbzEvcGFnZXMvZ2VuZXJhbC9lcnJvci9lcnJvci02LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDLDBEQUEwRCxlQUFlLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsd0RBQXdELGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsMERBQTBELHFCQUFxQixDQUFDLGNBQWMsQ0FBQyx3REFBd0QsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0NBNWpCLGFBQWEsMEJBQTBCLENBQUMsMkJBQTJCLENBQUMsMkJBQTJCLENBQUMscUJBQXFCLENBQUMscURBQXFELGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0RBQWdELGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMseUJBQXlCLGdEQUFnRCxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQ0E5YyxhQUFhLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDLHFEQUFxRCxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLENBQUMsNkJBQTZCLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDLDJCQUEyQixDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixxREFBcUQsVUFBVSxDQUFDLENBQUMsaURBQWlELG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsb0RBQW9ELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsdURBQXVELG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMseUJBQXlCLHFEQUFxRCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsaURBQWlELGdCQUFnQixDQUFDLG9EQUFvRCxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyx1REFBdUQsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0NBNXVDLGFBQWEsMEJBQTBCLENBQUMsMkJBQTJCLENBQUMsMkJBQTJCLENBQUMscUJBQXFCLENBQUMsa0RBQWtELGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsaURBQWlELHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHVEQUF1RCxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGdEQUFnRCxrREFBa0QsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsaURBQWlELHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsdURBQXVELGlCQUFpQixDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyx5QkFBeUIsaUNBQWlDLGlCQUFpQixDQUFDLGtEQUFrRCxjQUFjLENBQUMsdUJBQXVCLENBQUMsaURBQWlELGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyx1REFBdUQsaUJBQWlCLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLENDQTl4QyxhQUFhLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDLG9EQUFvRCxlQUFlLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxvREFBb0QsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyx1REFBdUQsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxpREFBaUQsYUFBYSw0Q0FBNEMsQ0FBQyxvREFBb0QsZUFBZSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxvREFBb0QsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLHVEQUF1RCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxnREFBZ0Qsb0RBQW9ELGVBQWUsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsb0RBQW9ELGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyx1REFBdUQsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUMseUJBQXlCLG9EQUFvRCxjQUFjLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLG9EQUFvRCxlQUFlLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLHVEQUF1RCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQ0E3cEQsYUFBYSwwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQywyQkFBMkIsQ0FBQyxxQkFBcUIsQ0FBQyxpQ0FBaUMsaUJBQWlCLENBQUMsdURBQXVELGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsdURBQXVELGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLHVEQUF1RCxjQUFjLENBQUMsdURBQXVELGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGhlbWVzL2RlbW8xL2NvbnRlbnQvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmt0LWVycm9yLXYxe2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5rdC1lcnJvci12MSAua3QtZXJyb3ItdjFfX2NvbnRhaW5lciAua3QtZXJyb3ItdjFfX251bWJlcntmb250LXNpemU6MTUwcHg7bWFyZ2luLWxlZnQ6ODBweDttYXJnaW4tdG9wOjlyZW07Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM2YzcyOTN9Lmt0LWVycm9yLXYxIC5rdC1lcnJvci12MV9fY29udGFpbmVyIC5rdC1lcnJvci12MV9fZGVzY3tmb250LXNpemU6MS41cmVtO21hcmdpbi1sZWZ0OjgwcHg7Y29sb3I6I2E3YWJjM31AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7Lmt0LWVycm9yLXYxIC5rdC1lcnJvci12MV9fY29udGFpbmVyIC5rdC1lcnJvci12MV9fbnVtYmVye21hcmdpbjoxMjBweCAwIDAgM3JlbTtmb250LXNpemU6OHJlbX0ua3QtZXJyb3ItdjEgLmt0LWVycm9yLXYxX19jb250YWluZXIgLmt0LWVycm9yLXYxX19kZXNje21hcmdpbi1sZWZ0OjNyZW07cGFkZGluZy1yaWdodDouNXJlbX19IiwiLmt0LWVycm9yLXYye2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5rdC1lcnJvci12MiAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl90aXRsZTI+aDF7Zm9udC1zaXplOjZyZW07dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDo0NXJlbTtmb250LXdlaWdodDo1MDB9Lmt0LWVycm9yLXYyIC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX2Rlc2N7Zm9udC1zaXplOjIuNXJlbTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrO2ZvbnQtd2VpZ2h0OjcwMH1AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7Lmt0LWVycm9yLXYyIC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX2Rlc2N7cGFkZGluZy1sZWZ0Oi42cmVtO3BhZGRpbmctcmlnaHQ6LjZyZW19fSIsIi5rdC1lcnJvci12M3tiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO2JhY2tncm91bmQtc2l6ZTpjb3Zlcn0ua3QtZXJyb3ItdjMgLmt0LWVycm9yX2NvbnRhaW5lciAua3QtZXJyb3JfbnVtYmVyPmgxe2ZvbnQtc2l6ZToxNS43cmVtO21hcmdpbi1sZWZ0OjcuODVyZW07bWFyZ2luLXRvcDoxMS40cmVtO2ZvbnQtd2VpZ2h0OjUwMDstd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOi4zNXJlbTstbW96LXRleHQtc3Ryb2tlLXdpZHRoOi4zNXJlbTt0ZXh0LXN0cm9rZS13aWR0aDouMzVyZW07Y29sb3I6I2EzZGNmMDstd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiNmZmY7LW1vei10ZXh0LXN0cm9rZS1jb2xvcjojZmZmO3RleHQtc3Ryb2tlLWNvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlblxcMHsua3QtZXJyb3ItdjMgLmt0LWVycm9yX2NvbnRhaW5lciAua3QtZXJyb3JfbnVtYmVyPmgxe2NvbG9yOiNmZmZ9fS5rdC1lcnJvci12MyAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl90aXRsZXttYXJnaW4tbGVmdDo3Ljg1cmVtO2ZvbnQtc2l6ZToyLjVyZW07Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM0NjQ0NTd9Lmt0LWVycm9yLXYzIC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX3N1YnRpdGxle21hcmdpbi1sZWZ0OjcuODVyZW07bWFyZ2luLXRvcDozLjU3cmVtO2ZvbnQtc2l6ZToxLjhyZW07Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM2YzcyOTN9Lmt0LWVycm9yLXYzIC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX2Rlc2NyaXB0aW9ue21hcmdpbi1sZWZ0OjcuODVyZW07Zm9udC1zaXplOjEuNHJlbTtmb250LXdlaWdodDo1MDA7Y29sb3I6I2E3YWJjM31AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7Lmt0LWVycm9yLXYzIC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX251bWJlcj5oMXtmb250LXNpemU6OHJlbTttYXJnaW4tbGVmdDo0cmVtO21hcmdpbi10b3A6My41cmVtfS5rdC1lcnJvci12MyAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl90aXRsZXttYXJnaW4tbGVmdDo0cmVtfS5rdC1lcnJvci12MyAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9zdWJ0aXRsZXttYXJnaW4tbGVmdDo0cmVtO3BhZGRpbmctcmlnaHQ6LjVyZW19Lmt0LWVycm9yLXYzIC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX2Rlc2NyaXB0aW9ue21hcmdpbi1sZWZ0OjRyZW07cGFkZGluZy1yaWdodDouNXJlbX19IiwiLmt0LWVycm9yLXY0e2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5rdC1lcnJvci12NCAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9udW1iZXJ7Zm9udC1zaXplOjE1LjdyZW07bWFyZ2luLWxlZnQ6MTQuM3JlbTttYXJnaW4tdG9wOjExLjRyZW07Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM4NGQ0OWV9Lmt0LWVycm9yLXY0IC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX3RpdGxle21hcmdpbjotNzBweCAwIDIlIDE0LjNyZW07Zm9udC1zaXplOjEwcmVtO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojODRkNDllfS5rdC1lcnJvci12NCAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9kZXNjcmlwdGlvbnttYXJnaW4tbGVmdDoxNXJlbTtmb250LXNpemU6Mi41cmVtO21hcmdpbjotNzBweCAwIDIlIDE0LjhyZW07Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiNjNjJ9QG1lZGlhIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7Lmt0LWVycm9yLXY0IC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX251bWJlcntmb250LXNpemU6MTJyZW07bWFyZ2luLWxlZnQ6N3JlbTttYXJnaW4tdG9wOjhyZW07Zm9udC13ZWlnaHQ6NzAwfS5rdC1lcnJvci12NCAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl90aXRsZXttYXJnaW46LTQwcHggMCAyJSA3cmVtO2ZvbnQtc2l6ZTo3cmVtO2ZvbnQtd2VpZ2h0OjcwMH0ua3QtZXJyb3ItdjQgLmt0LWVycm9yX2NvbnRhaW5lciAua3QtZXJyb3JfZGVzY3JpcHRpb257bWFyZ2luLWxlZnQ6MTVyZW07Zm9udC1zaXplOjJyZW07bWFyZ2luOi00MHB4IDAgMiUgNy4zcmVtO2ZvbnQtd2VpZ2h0OjcwMH19QG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpey5rdC1lcnJvci12NCAua3QtZXJyb3JfY29udGFpbmVye3RleHQtYWxpZ246Y2VudGVyfS5rdC1lcnJvci12NCAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9udW1iZXJ7Zm9udC1zaXplOjlyZW07bWFyZ2luOjRyZW0gYXV0byAwIGF1dG99Lmt0LWVycm9yLXY0IC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX3RpdGxle21hcmdpbjouM3JlbSBhdXRvO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTo1cmVtfS5rdC1lcnJvci12NCAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9kZXNjcmlwdGlvbnt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MnJlbTttYXJnaW46LjNyZW0gYXV0bztwYWRkaW5nOjAgLjVyZW0gMCAuNXJlbX19IiwiLmt0LWVycm9yLXY1e2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7YmFja2dyb3VuZC1zaXplOmNvdmVyfS5rdC1lcnJvci12NSAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl90aXRsZT5oMXtmb250LXNpemU6MTRyZW07bWFyZ2luLWxlZnQ6MjVyZW07bWFyZ2luLXRvcDoxOHJlbTtmb250LXdlaWdodDo3MDA7Y29sb3I6IzMxNGRhNzstd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiNmZmZ9Lmt0LWVycm9yLXY1IC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX3N1YnRpdGxle21hcmdpbi1sZWZ0OjI2cmVtO21hcmdpbi10b3A6My41N3JlbTtmb250LXNpemU6Mi4zcmVtO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojNmM3MjkzfS5rdC1lcnJvci12NSAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9kZXNjcmlwdGlvbnttYXJnaW4tbGVmdDoyNnJlbTtmb250LXNpemU6MS44cmVtO2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoxMzAlO2NvbG9yOiNhN2FiYzN9QG1lZGlhIChtaW4td2lkdGg6MTAyNXB4KSBhbmQgKG1heC13aWR0aDoxMzk5cHgpey5rdC1lcnJvci12NXtiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbSAtODBweCBsZWZ0IDEzMDBweH0ua3QtZXJyb3ItdjUgLmt0LWVycm9yX2NvbnRhaW5lciAua3QtZXJyb3JfdGl0bGU+aDF7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxMnJlbTttYXJnaW4tbGVmdDo3cmVtfS5rdC1lcnJvci12NSAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9zdWJ0aXRsZXttYXJnaW4tbGVmdDo3cmVtO2ZvbnQtc2l6ZToyLjNyZW07Zm9udC13ZWlnaHQ6NzAwfS5rdC1lcnJvci12NSAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9kZXNjcmlwdGlvbnttYXJnaW4tbGVmdDo3cmVtO2ZvbnQtc2l6ZToxLjhyZW07Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEzMCV9fUBtZWRpYSAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDI0cHgpey5rdC1lcnJvci12NSAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl90aXRsZT5oMXtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEycmVtO21hcmdpbi1sZWZ0OjdyZW19Lmt0LWVycm9yLXY1IC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX3N1YnRpdGxle21hcmdpbi1sZWZ0OjdyZW07Zm9udC1zaXplOjIuM3JlbTtmb250LXdlaWdodDo3MDB9Lmt0LWVycm9yLXY1IC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX2Rlc2NyaXB0aW9ue21hcmdpbi1sZWZ0OjdyZW07Zm9udC1zaXplOjEuOHJlbTtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MTMwJX19QG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpey5rdC1lcnJvci12NSAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl90aXRsZT5oMXtmb250LXNpemU6NnJlbTttYXJnaW4tdG9wOjVyZW07bWFyZ2luLWxlZnQ6NHJlbX0ua3QtZXJyb3ItdjUgLmt0LWVycm9yX2NvbnRhaW5lciAua3QtZXJyb3Jfc3VidGl0bGV7bWFyZ2luLXRvcDoycmVtO21hcmdpbi1sZWZ0OjRyZW07Zm9udC1zaXplOjJyZW07bGluZS1oZWlnaHQ6MnJlbX0ua3QtZXJyb3ItdjUgLmt0LWVycm9yX2NvbnRhaW5lciAua3QtZXJyb3JfZGVzY3JpcHRpb257Zm9udC1zaXplOjEuNHJlbTttYXJnaW4tbGVmdDo0cmVtfX0iLCIua3QtZXJyb3ItdjZ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJ9Lmt0LWVycm9yLXY2IC5rdC1lcnJvcl9jb250YWluZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmt0LWVycm9yLXY2IC5rdC1lcnJvcl9jb250YWluZXIgLmt0LWVycm9yX3N1YnRpdGxlPmgxe2ZvbnQtc2l6ZToxMHJlbTttYXJnaW4tdG9wOjEycmVtO2ZvbnQtd2VpZ2h0OjcwMH0ua3QtZXJyb3ItdjYgLmt0LWVycm9yX2NvbnRhaW5lciAua3QtZXJyb3JfZGVzY3JpcHRpb257bWFyZ2luLXRvcDozcmVtO2ZvbnQtc2l6ZToyLjNyZW07Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjNyZW19QG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpey5rdC1lcnJvci12NiAua3QtZXJyb3JfY29udGFpbmVyIC5rdC1lcnJvcl9zdWJ0aXRsZT5oMXtmb250LXNpemU6NXJlbX0ua3QtZXJyb3ItdjYgLmt0LWVycm9yX2NvbnRhaW5lciAua3QtZXJyb3JfZGVzY3JpcHRpb257Zm9udC1zaXplOjEuN3JlbTtwYWRkaW5nLWxlZnQ6MS41cmVtO3BhZGRpbmctcmlnaHQ6MS41cmVtfX0iXX0= */"

/***/ }),

/***/ "./src/app/views/themes/demo1/content/error-page/error-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/themes/demo1/content/error-page/error-page.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var ErrorPageComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param route: ActivatedRoute
     * @param layoutConfigService: LayoutConfigService
     */
    function ErrorPageComponent(route, layoutConfigService) {
        this.route = route;
        this.layoutConfigService = layoutConfigService;
        // Public properties
        // type of error template to be used, accepted values; error-v1 | error-v2 | error-v3 | error-v4 | error-v5 | error-v6
        this.type = 'error-v1';
        // error code, some error types template has it
        this.code = '404';
        // error descriptions
        this.desc = 'Oops! Something went wrong!';
        // return back button title
        this.return = 'Return back';
        // set temporary values to the layout config on this page
        this.layoutConfigService.setConfig({ self: { layout: 'blank' } });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.route.snapshot.paramMap.get('type');
        this.sub = this.route.data.subscribe(function (param) {
            if (!_this.type) {
                _this.type = param.type;
            }
            if (!_this.image) {
                _this.image = param.image;
            }
            if (!_this.code) {
                _this.code = param.code;
            }
            if (!_this.title) {
                _this.title = param.title;
            }
            if (!_this.subtitle) {
                _this.subtitle = param.subtitle;
            }
            if (!_this.desc) {
                _this.desc = param.desc;
            }
            if (!_this.return) {
                _this.return = param.return;
            }
        });
        switch (this.type) {
            case 'error-v1':
                if (!this.image) {
                    this.image = './assets/media/error/bg1.jpg';
                }
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.desc) {
                    this.desc = 'OOPS! Something went wrong here';
                }
                break;
            case 'error-v2':
                if (!this.image) {
                    this.image = './assets/media/error/bg2.jpg';
                }
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'OOPS!';
                }
                if (!this.desc) {
                    this.desc = 'Something went wrong here';
                }
                break;
            case 'error-v3':
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'How did you get here';
                }
                if (!this.subtitle) {
                    this.subtitle = 'Sorry we can\'t seem to find the page you\'re looking for.';
                }
                if (!this.desc) {
                    this.desc = 'There may be amisspelling in the URL entered,<br>' + 'or the page you are looking for may no longer exist.';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg3.jpg';
                }
                break;
            case 'error-v4':
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'ERROR';
                }
                if (!this.desc) {
                    this.desc = 'Nothing left to do here';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg4.jpg';
                }
                break;
            case 'error-v5':
                if (!this.title) {
                    this.title = 'Oops!';
                }
                if (!this.subtitle) {
                    this.subtitle = 'Something went wrong here';
                }
                if (!this.desc) {
                    this.desc = 'We\'re working on it and we\'ll get it fixed<br>' + 'as soon possible.<br>' + 'You can back or use our Help Center.';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg5.jpg';
                }
                break;
            case 'error-v6':
                if (!this.title) {
                    this.title = 'Oops...';
                }
                if (!this.desc) {
                    this.desc = 'Looks like something went wrong.<br>' + 'We\'re working on it';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg6.jpg';
                }
                break;
            default:
                if (!this.image) {
                    this.image = './assets/media/error/bg1.jpg';
                }
        }
    };
    /**
     * On destroy
     */
    ErrorPageComponent.prototype.ngOnDestroy = function () {
        // reset config from any temporary values
        this.layoutConfigService.reloadConfigs();
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "code", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "subtitle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "desc", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "return", void 0);
    ErrorPageComponent = __decorate([
        core_1.Component({
            selector: 'kt-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/views/themes/demo1/content/error-page/error-page.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/views/themes/demo1/content/error-page/error-page.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, layout_1.LayoutConfigService])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());
exports.ErrorPageComponent = ErrorPageComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/footer/footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/themes/demo1/footer/footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Footer -->\r\n<div class=\"kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop\" id=\"kt_footer\">\r\n\t<div class=\"kt-footer__copyright\">\r\n\t\t{{today | date:'yyyy'}}&nbsp;&copy;&nbsp;<a href=\"http://keenthemes.com/metronic\" target=\"_blank\" class=\"kt-link\">Handcrafted by National Cyber Security Center.</a>\r\n\t</div>\r\n\t<!-- <div class=\"kt-footer__menu\">\r\n\t\t<a href=\"http://keenthemes.com/metronic\" target=\"_blank\" class=\"kt-footer__menu-link kt-link\">About</a>\r\n\t\t<a href=\"http://keenthemes.com/metronic\" target=\"_blank\" class=\"kt-footer__menu-link kt-link\">Team</a>\r\n\t\t<a href=\"http://keenthemes.com/metronic\" target=\"_blank\" class=\"kt-footer__menu-link kt-link\">Contact</a>\r\n\t</div> -->\r\n</div>\r\n<!-- end:: Footer -->\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/footer/footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/themes/demo1/footer/footer.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var layout_1 = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var FooterComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayouConfigService
     */
    function FooterComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        // Public properties
        this.today = Date.now();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    FooterComponent.prototype.ngOnInit = function () {
        var config = this.layoutConfigService.getConfig();
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'kt-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/views/themes/demo1/footer/footer.component.html"),
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/header/brand/brand.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/brand/brand.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Brand -->\r\n<div class=\"kt-aside__brand kt-grid__item\" [ngClass]=\"htmlClassService.getClasses('brand', true)\" id=\"kt_aside_brand\">\r\n\t<div class=\"kt-aside__brand-logo\">\r\n\t\t<a href=\"javascript:;\" routerLink=\"/\">\r\n\t\t\t<img alt=\"logo\" [attr.src]=\"headerLogo\"/>\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"kt-aside__brand-tools\">\r\n\t\t<button ktToggle [options]=\"toggleOptions\" class=\"kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left\" id=\"kt_aside_toggler\">\r\n\t\t\t<span [inlineSVG]=\"'./assets/media/icons/svg/Navigation/Angle-double-left.svg'\"></span>\r\n\t\t\t<span [inlineSVG]=\"'./assets/media/icons/svg/Navigation/Angle-double-right.svg'\"></span>\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n<!-- end:: Brand -->\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/brand/brand.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/brand/brand.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var html_class_service_1 = __webpack_require__(/*! ../../html-class.service */ "./src/app/views/themes/demo1/html-class.service.ts");
var BrandComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param htmlClassService: HtmlClassService
     */
    function BrandComponent(layoutConfigService, htmlClassService) {
        this.layoutConfigService = layoutConfigService;
        this.htmlClassService = htmlClassService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-aside--minimize',
            togglerState: 'kt-aside__brand-aside-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BrandComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getLogo();
        this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
    };
    /**
     * On destroy
     */
    BrandComponent.prototype.ngAfterViewInit = function () {
    };
    BrandComponent = __decorate([
        core_1.Component({
            selector: 'kt-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/views/themes/demo1/header/brand/brand.component.html"),
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService, html_class_service_1.HtmlClassService])
    ], BrandComponent);
    return BrandComponent;
}());
exports.BrandComponent = BrandComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Header Mobile -->\r\n<div id=\"kt_header_mobile\" class=\"kt-header-mobile kt-header-mobile--fixed\">\r\n\t<div class=\"kt-header-mobile__logo\">\r\n\t\t<a routerLink=\"/\">\r\n\t\t\t<img alt=\"logo\" [attr.src]=\"headerLogo\"/>\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"kt-header-mobile__toolbar\">\r\n\t\t<button [hidden]=\"!asideDisplay\" class=\"kt-header-mobile__toggler kt-header-mobile__toggler--left\" id=\"kt_aside_mobile_toggler\"><span></span></button>\r\n\t\t<button class=\"kt-header-mobile__toggler\" id=\"kt_header_mobile_toggler\"><span></span></button>\r\n\t\t<button ktToggle [options]=\"toggleOptions\" class=\"kt-header-mobile__topbar-toggler\" id=\"kt_header_mobile_topbar_toggler\"><i class=\"flaticon-more\"></i></button>\r\n\t</div>\r\n</div>\r\n<!-- end:: Header Mobile -->\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lcy9kZW1vMS9oZWFkZXIvaGVhZGVyLW1vYmlsZS9oZWFkZXItbW9iaWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var HeaderMobileComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function HeaderMobileComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-header__topbar--mobile-on',
            togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderMobileComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getLogo();
        this.asideDisplay = this.layoutConfigService.getConfig('aside.self.display');
    };
    HeaderMobileComponent = __decorate([
        core_1.Component({
            selector: 'kt-header-mobile',
            template: __webpack_require__(/*! ./header-mobile.component.html */ "./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.html"),
            styles: [__webpack_require__(/*! ./header-mobile.component.scss */ "./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.scss")]
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService])
    ], HeaderMobileComponent);
    return HeaderMobileComponent;
}());
exports.HeaderMobileComponent = HeaderMobileComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/header/header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin: Header -->\r\n<div ktHeader #ktHeader class=\"kt-header kt-grid__item\" [ngClass]=\"htmlClassService.getClasses('header', true)\" id=\"kt_header\">\r\n\t<ngb-progressbar class=\"kt-loading-bar\" *ngIf=\"(loader.progress$|async) > 0\" [value]=\"loader.progress$|async\" height=\"3px\"></ngb-progressbar>\r\n\r\n\t<!-- begin: Header Menu -->\r\n\t<kt-menu-horizontal *ngIf=\"menuHeaderDisplay\"></kt-menu-horizontal>\r\n\t<!-- end: Header Menu -->\r\n\r\n\t<!-- begin:: Header Topbar -->\r\n\t<!-- empty div to fix topbar to stay on the right when menu-horizontal is hidden -->\r\n\t<div *ngIf=\"!menuHeaderDisplay\"></div>\r\n\t<kt-topbar></kt-topbar>\r\n\t<!-- end:: Header Topbar -->\r\n</div>\r\n<!-- end: Header -->\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .kt-loading-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%; }\n  :host ::ng-deep .kt-loading-bar .progress-bar {\n    background-color: #5d78ff; }\n  :host ::ng-deep .kt-header__topbar-item {\n  height: 100%; }\n  @media (min-width: 1025px) {\n  :host ::ng-deep .kt-header__topbar, :host ::ng-deep .kt-header__topbar-item-wrapper {\n    height: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGhlbWVzL2RlbW8xL2hlYWRlci9GOlxcdmlldG5hbW5ldHdvcmttb3RpdG9yaW5ncG9ydGFsL3NyY1xcYXBwXFx2aWV3c1xcdGhlbWVzXFxkZW1vMVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVyxFQUFBO0VBUGQ7SUFXSSx5QkFBeUIsRUFBQTtFQVg3QjtFQWdCRyxZQUFZLEVBQUE7RUFHYjtFQW5CRjtJQXFCSSxZQUFZLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lcy9kZW1vMS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdDo6bmctZGVlcCB7XHJcblx0XHQua3QtbG9hZGluZy1iYXIge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0LnByb2dyZXNzLWJhciB7XHJcblx0XHRcdFx0Ly8gYnJhbmQgY29sb3JcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ3OGZmO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Lmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0ge1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG5cdFx0XHQua3QtaGVhZGVyX190b3BiYXIsIC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtLXdyYXBwZXIge1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/header.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Object-Path
var objectPath = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
// Loading bar
var core_2 = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
// HTML Class Service
var html_class_service_1 = __webpack_require__(/*! ../html-class.service */ "./src/app/views/themes/demo1/html-class.service.ts");
var HeaderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param router: Router
     * @param layoutRefService: LayoutRefService
     * @param layoutConfigService: LayoutConfigService
     * @param loader: LoadingBarService
     * @param htmlClassService: HtmlClassService
     */
    function HeaderComponent(router, layoutRefService, layoutConfigService, loader, htmlClassService) {
        var _this = this;
        this.router = router;
        this.layoutRefService = layoutRefService;
        this.layoutConfigService = layoutConfigService;
        this.loader = loader;
        this.htmlClassService = htmlClassService;
        // page progress bar percentage
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                // set page progress bar loading to start on NavigationStart event router
                _this.loader.start();
            }
            if (event instanceof router_1.RouteConfigLoadStart) {
                _this.loader.increment(35);
            }
            if (event instanceof router_1.RouteConfigLoadEnd) {
                _this.loader.increment(75);
            }
            if (event instanceof router_1.NavigationEnd || event instanceof router_1.NavigationCancel) {
                // set page progress bar loading to end on NavigationEnd event router
                _this.loader.complete();
            }
        });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderComponent.prototype.ngOnInit = function () {
        var config = this.layoutConfigService.getConfig();
        // get menu header display option
        this.menuHeaderDisplay = objectPath.get(config, 'header.menu.self.display');
        // animate the header minimize the height on scroll down. to be removed, not applicable for default demo
        /*if (objectPath.get(config, 'header.self.fixed.desktop.enabled') || objectPath.get(config, 'header.self.fixed.desktop')) {
            // header minimize on scroll down
            this.ktHeader.nativeElement.setAttribute('data-ktheader-minimize', '1');
        }*/
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        // keep header element in the service
        this.layoutRefService.addElement('header', this.ktHeader.nativeElement);
    };
    __decorate([
        core_1.ViewChild('ktHeader'),
        __metadata("design:type", core_1.ElementRef)
    ], HeaderComponent.prototype, "ktHeader", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/themes/demo1/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/views/themes/demo1/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            layout_1.LayoutRefService,
            layout_1.LayoutConfigService,
            core_2.LoadingBarService,
            html_class_service_1.HtmlClassService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Horizontal Menu -->\r\n<button class=\"kt-header-menu-wrapper-close\" id=\"kt_header_menu_mobile_close_btn\"><i class=\"la la-close\"></i></button>\r\n<div ktOffcanvas [options]=\"offcanvasOptions\" class=\"kt-header-menu-wrapper\" id=\"kt_header_menu_wrapper\">\r\n\t<div ktMenu [options]=\"menuOptions\" id=\"kt_header_menu\" class=\"kt-header-menu kt-header-menu-mobile\" [ngClass]=\"htmlClassService.getClasses('header_menu', true)\">\r\n\t\t<ul class=\"kt-menu__nav\" [ngClass]=\"htmlClassService.getClasses('header_menu_nav', true)\">\r\n\t\t\t<ng-container *ngFor=\"let item of menuHorService.menuList$ | async\">\r\n\t\t\t\t<ng-container *ngIf=\"item.title\" [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-container>\r\n\t\t\t</ng-container>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n<!-- END: Horizontal Menu -->\r\n\r\n\r\n<ng-template #menuTemplate let-item=\"item\" let-parentItem=\"parentItem\">\r\n\t<li [attr.aria-haspopup]=\"true\"\r\n\t\t[attr.data-ktmenu-submenu-toggle]=\"getItemAttrSubmenuToggle(item)\"\r\n\t\t(mouseleave)=\"mouseLeave($event)\"\r\n\t\t(mouseenter)=\"mouseEnter($event)\"\r\n\t\t[ngClass]=\"getItemCssClasses(item)\">\r\n\r\n\t\t<!-- if item has submenu -->\r\n\t\t<ng-container *ngIf=\"item.submenu\">\r\n\t\t\t<a href=\"javascript:;\" [ngClass]=\"{ 'kt-menu__toggle': item.root }\" class=\"kt-menu__link\">\r\n\r\n\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuItemInnerTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\r\n\r\n\t\t\t\t<ng-container *ngIf=\"rootArrowEnabled\">\r\n\t\t\t\t\t<!-- arrow icons -->\r\n\t\t\t\t\t<i *ngIf=\"item.submenu && item.root\" class=\"kt-menu__hor-arrow la la-angle-down\"></i>\r\n\t\t\t\t\t<i *ngIf=\"item.submenu && item.root\" class=\"kt-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- else arrow icons -->\r\n\t\t\t\t<i *ngIf=\"item.submenu && !item.root\" class=\"kt-menu__hor-arrow la la-angle-right\"></i>\r\n\t\t\t\t<i *ngIf=\"item.submenu && !item.root\" class=\"kt-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t</a>\r\n\t\t</ng-container>\r\n\r\n\t\t<!-- if item hasn't sumbenu -->\r\n\t\t<ng-container *ngIf=\"!item.submenu\">\r\n\t\t\t<a [routerLink]=\"item.page\" [ngClass]=\"{ 'kt-menu__toggle': item.root }\" class=\"kt-menu__link\">\r\n\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuItemInnerTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\r\n\t\t\t</a>\r\n\t\t</ng-container>\r\n\r\n\t\t<!-- if menu item has submenu child then recursively call new menu item component -->\r\n\t\t<ng-container *ngIf=\"item.submenu\">\r\n\t\t\t<div class=\"kt-menu__submenu\" [ngClass]=\"getItemMenuSubmenuClass(item)\" [ngStyle]=\"{ 'width': item.submenu.width }\">\r\n\t\t\t\t<span class=\"kt-menu__arrow\" [ngClass]=\"{ 'kt-menu__arrow--adjust': item.root }\"></span>\r\n\r\n\t\t\t\t<ul *ngIf=\"item.submenu?.length\" class=\"kt-menu__subnav\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let child of item.submenu\">\r\n\t\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ item: child, parentItem: item }\">\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul *ngIf=\"item.submenu.items?.length\" class=\"kt-menu__subnav\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let child of item.submenu.items\">\r\n\t\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ item: child, parentItem: item }\">\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<div *ngIf=\"item.submenu.type === 'mega' && item.submenu.columns?.length\" class=\"kt-menu__subnav\">\r\n\t\t\t\t\t<ul class=\"kt-menu__content\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let child of item.submenu.columns\">\r\n\t\t\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuColumnTemplate\" [ngTemplateOutletContext]=\"{ item: child }\"></ng-container>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</li>\r\n</ng-template>\r\n\r\n<!-- item inner -->\r\n<ng-template #menuItemInnerTemplate let-item=\"item\" let-parentItem=\"parentItem\">\r\n\t<!-- if menu item has icon -->\r\n\t<i *ngIf=\"item.icon\" class=\"kt-menu__link-icon\" [ngClass]=\"item.icon\"></i>\r\n\r\n\t<ng-container *ngIf=\"!item.icon\">\r\n\t\t<!-- if menu item using bullet -->\r\n\t\t<i *ngIf=\"parentItem && parentItem.bullet === 'dot' || item.bullet === 'dot'\" class=\"kt-menu__link-bullet kt-menu__link-bullet--dot\">\r\n\t\t\t<span></span>\r\n\t\t</i>\r\n\t\t<i *ngIf=\"parentItem && parentItem.bullet === 'line' || item.bullet === 'line'\" class=\"kt-menu__link-bullet kt-menu__link-bullet--line\">\r\n\t\t\t<span></span>\r\n\t\t</i>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"!item.badge; else m_menu_link_badge\">\r\n\t\t<span class=\"kt-menu__item-here\"></span>\r\n\t\t<!-- menu item title text -->\r\n\t\t<span class=\"kt-menu__link-text\" [translate]=\"item.translate\">\r\n\t\t\t{{item.title}}\r\n\t\t</span>\r\n\t</ng-container>\r\n\r\n\t<ng-template #m_menu_link_badge>\r\n\t\t<!-- menu item with badge -->\r\n\t\t<span class=\"kt-menu__link-text\" [translate]=\"item.translate\">{{item.title}}</span>\r\n\t\t<span class=\"kt-menu__link-badge\">\r\n\t\t\t<span class=\"kt-badge kt-badge--brand kt-badge--inline kt-badge--pill\" [ngClass]=\"item.badge.type\" [translate]=\"item.badge.translate\">{{item.badge.value}}</span>\r\n\t\t</span>\r\n\t</ng-template>\r\n</ng-template>\r\n\r\n<!-- item column -->\r\n<ng-template #menuColumnTemplate let-item=\"item\">\r\n\t<li class=\"kt-menu__item\">\r\n\t\t<h3 class=\"kt-menu__heading kt-menu__toggle\">\r\n\t\t\t<span class=\"kt-menu__link-text\" [translate]=\"item.heading.translate\">\r\n\t\t\t\t{{item.heading.title}}\r\n\t\t\t</span>\r\n\t\t\t<i class=\"kt-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t</h3>\r\n\t\t<ng-container *ngIf=\"item.items?.length\">\r\n\t\t\t<ul class=\"kt-menu__inner\">\r\n\t\t\t\t<ng-container *ngFor=\"let child of item.items\">\r\n\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ item: child, parentItem: item }\">\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ul>\r\n\t\t</ng-container>\r\n\t</li>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n  :host .kt-header-menu-wrapper {\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGhlbWVzL2RlbW8xL2hlYWRlci9tZW51LWhvcml6b250YWwvRjpcXHZpZXRuYW1uZXR3b3JrbW90aXRvcmluZ3BvcnRhbC9zcmNcXGFwcFxcdmlld3NcXHRoZW1lc1xcZGVtbzFcXGhlYWRlclxcbWVudS1ob3Jpem9udGFsXFxtZW51LWhvcml6b250YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXLEVBQUE7RUFEWjtJQUlFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lcy9kZW1vMS9oZWFkZXIvbWVudS1ob3Jpem9udGFsL21lbnUtaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHJcblx0Lmt0LWhlYWRlci1tZW51LXdyYXBwZXIge1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// RxJS
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// Object-Path
var objectPath = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
// HTML Class
var html_class_service_1 = __webpack_require__(/*! ../../html-class.service */ "./src/app/views/themes/demo1/html-class.service.ts");
var MenuHorizontalComponent = /** @class */ (function () {
    /**
     * Component Conctructor
     *
     * @param el: ElementRef
     * @param htmlClassService: HtmlClassService
     * @param menuHorService: MenuHorService
     * @param menuConfigService: MenuConfigService
     * @param layoutConfigService: LayouConfigService
     * @param router: Router
     * @param render: Renderer2
     */
    function MenuHorizontalComponent(el, htmlClassService, menuHorService, menuConfigService, layoutConfigService, router, render) {
        this.el = el;
        this.htmlClassService = htmlClassService;
        this.menuHorService = menuHorService;
        this.menuConfigService = menuConfigService;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.render = render;
        // Public properties
        this.currentRouteUrl = '';
        this.menuOptions = {
            submenu: {
                desktop: 'dropdown',
                tablet: 'accordion',
                mobile: 'accordion'
            },
            accordion: {
                slideSpeed: 200,
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        };
        this.offcanvasOptions = {
            overlay: true,
            baseClass: 'kt-header-menu-wrapper',
            closeBy: 'kt_header_menu_mobile_close_btn',
            toggleBy: {
                target: 'kt_header_mobile_toggler',
                state: 'kt-header-mobile__toolbar-toggler--active'
            }
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    MenuHorizontalComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * On init
     */
    MenuHorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rootArrowEnabled = this.layoutConfigService.getConfig('header.menu.self.root-arrow');
        this.currentRouteUrl = this.router.url;
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) {
            _this.currentRouteUrl = _this.router.url;
        });
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    MenuHorizontalComponent.prototype.mouseEnter = function (e) {
        // check if the left aside menu is fixed
        if (!document.body.classList.contains('kt-menu__item--hover')) {
            this.render.addClass(document.body, 'kt-menu__item--hover');
        }
    };
    /**
     * Mouse Leave event
     * @param event: MouseEvent
     */
    MenuHorizontalComponent.prototype.mouseLeave = function (event) {
        this.render.removeClass(event.target, 'kt-menu__item--hover');
    };
    /**
     * Return Css Class Name
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemCssClasses = function (item) {
        var classes = 'kt-menu__item';
        if (objectPath.get(item, 'submenu')) {
            classes += ' kt-menu__item--submenu';
        }
        if (objectPath.get(item, 'resizer')) {
            classes += ' kt-menu__item--resize';
        }
        var menuType = objectPath.get(item, 'submenu.type') || 'classic';
        if ((objectPath.get(item, 'root') && menuType === 'classic')
            || parseInt(objectPath.get(item, 'submenu.width'), 10) > 0) {
            classes += ' kt-menu__item--rel';
        }
        var customClass = objectPath.get(item, 'custom-class');
        if (customClass) {
            classes += ' ' + customClass;
        }
        if (objectPath.get(item, 'icon-only')) {
            classes += ' kt-menu__item--icon-only';
        }
        if (this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--active kt-menu__item--here';
        }
        return classes;
    };
    /**
     * Returns Attribute SubMenu Toggle
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemAttrSubmenuToggle = function (item) {
        var toggle = 'hover';
        if (objectPath.get(item, 'toggle') === 'click') {
            toggle = 'click';
        }
        else if (objectPath.get(item, 'submenu.type') === 'tabs') {
            toggle = 'tabs';
        }
        else {
            // submenu toggle default to 'hover'
        }
        return toggle;
    };
    /**
     * Returns Submenu CSS Class Name
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemMenuSubmenuClass = function (item) {
        var classes = '';
        var alignment = objectPath.get(item, 'alignment') || 'right';
        if (alignment) {
            classes += ' kt-menu__submenu--' + alignment;
        }
        var type = objectPath.get(item, 'type') || 'classic';
        if (type === 'classic') {
            classes += ' kt-menu__submenu--classic';
        }
        if (type === 'tabs') {
            classes += ' kt-menu__submenu--tabs';
        }
        if (type === 'mega') {
            if (objectPath.get(item, 'width')) {
                classes += ' kt-menu__submenu--fixed';
            }
        }
        if (objectPath.get(item, 'pull')) {
            classes += ' kt-menu__submenu--pull';
        }
        return classes;
    };
    /**
     * Check Menu is active
     * @param item: any
     */
    MenuHorizontalComponent.prototype.isMenuItemIsActive = function (item) {
        if (item.submenu) {
            return this.isMenuRootItemIsActive(item);
        }
        if (!item.page) {
            return false;
        }
        return this.currentRouteUrl.indexOf(item.page) !== -1;
    };
    /**
     * Check Menu Root Item is active
     * @param item: any
     */
    MenuHorizontalComponent.prototype.isMenuRootItemIsActive = function (item) {
        if (item.submenu.items) {
            for (var _i = 0, _a = item.submenu.items; _i < _a.length; _i++) {
                var subItem = _a[_i];
                if (this.isMenuItemIsActive(subItem)) {
                    return true;
                }
            }
        }
        if (item.submenu) {
            for (var _b = 0, _c = item.submenu; _b < _c.length; _b++) {
                var subItem = _c[_b];
                if (this.isMenuItemIsActive(subItem)) {
                    return true;
                }
            }
        }
        return false;
    };
    MenuHorizontalComponent = __decorate([
        core_1.Component({
            selector: 'kt-menu-horizontal',
            template: __webpack_require__(/*! ./menu-horizontal.component.html */ "./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: [__webpack_require__(/*! ./menu-horizontal.component.scss */ "./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            html_class_service_1.HtmlClassService,
            layout_1.MenuHorizontalService,
            layout_1.MenuConfigService,
            layout_1.LayoutConfigService,
            router_1.Router,
            core_1.Renderer2])
    ], MenuHorizontalComponent);
    return MenuHorizontalComponent;
}());
exports.MenuHorizontalComponent = MenuHorizontalComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/header/topbar/topbar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/topbar/topbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Header Topbar -->\r\n<div class=\"kt-header__topbar\">\r\n\t<!--begin: Search -->\r\n\t<kt-search-dropdown [icon]=\"'./assets/media/icons/svg/General/Search.svg'\" [useSVG]=\"true\"></kt-search-dropdown>\r\n\t<!--end: Search -->\r\n\t<!--begin: Notifications -->\r\n\t<!-- <kt-notification [bgImage]=\"'./assets/media/misc/bg-1.jpg'\" [pulse]=\"true\" [skin]=\"'dark'\" [icon]=\"'./assets/media/icons/svg/Code/Compiling.svg'\" [useSVG]=\"true\"></kt-notification> -->\r\n\t<!--end: Notifications -->\r\n\t<!--begin: Quick actions -->\r\n\t<!-- <kt-quick-action [bgImage]=\"'./assets/media/misc/bg-2.jpg'\" [skin]=\"'dark'\" [icon]=\"'./assets/media/icons/svg/Media/Equalizer.svg'\" [useSVG]=\"true\"></kt-quick-action> -->\r\n\t<!--end: Quick actions -->\r\n\t<!--begin: My Cart -->\r\n\t<!-- <kt-cart [bgImage]=\"'./assets/media/misc/bg-1.jpg'\" [icon]=\"'./assets/media/icons/svg/Shopping/Cart%233.svg'\" [useSVG]=\"true\"></kt-cart> -->\r\n\t<!--end: My Cart -->\r\n\t<!--begin: Quick panel toggler -->\r\n\t<!-- <div class=\"kt-header__topbar-item kt-header__topbar-item--quick-panel\" data-placement=\"bottom\" ngbTooltip=\"Quick panel\">\r\n\t\t<span class=\"kt-header__topbar-icon\" id=\"kt_quick_panel_toggler_btn\">\r\n\t\t\t<span class=\"kt-svg-icon\" [inlineSVG]=\"'./assets/media/icons/svg/Layout/Layout-4-blocks.svg'\"></span>\r\n\t\t</span>\r\n\t</div> -->\r\n\t<!--end: Quick panel toggler -->\r\n\t<!--begin: Language bar -->\r\n\t<!-- <kt-language-selector></kt-language-selector> -->\r\n\t<!--end: Language bar -->\r\n\t<!--begin: User bar -->\r\n\t<kt-user-profile></kt-user-profile>\r\n\t<!--end: User bar -->\r\n</div>\r\n<!-- end:: Header Topbar -->\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/topbar/topbar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/topbar/topbar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .kt-header__topbar > :last-child:not([role=\"tooltip\"]) .kt-header__topbar-item {\n  margin-right: 0 !important; }\n\n:host ::ng-deep .kt-header__topbar .kt-header__topbar-item {\n  margin-right: 0.36rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGhlbWVzL2RlbW8xL2hlYWRlci90b3BiYXIvRjpcXHZpZXRuYW1uZXR3b3JrbW90aXRvcmluZ3BvcnRhbC9zcmNcXGFwcFxcdmlld3NcXHRoZW1lc1xcZGVtbzFcXGhlYWRlclxcdG9wYmFyXFx0b3BiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNSywwQkFBMEIsRUFBQTs7QUFOL0I7RUFVSSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lcy9kZW1vMS9oZWFkZXIvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQ6Om5nLWRlZXAge1xyXG5cdFx0Ly8gb3ZlcnJpZGUgZGVmYXVsdCB2ZXJzaW9uIHN0eWxlXHJcblx0XHQua3QtaGVhZGVyX190b3BiYXIge1xyXG5cdFx0XHQ+IDpsYXN0LWNoaWxkOm5vdChbcm9sZT1cInRvb2x0aXBcIl0pIHtcclxuXHRcdFx0XHQua3QtaGVhZGVyX190b3BiYXItaXRlbSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Lmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0ge1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMC4zNnJlbSAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/themes/demo1/header/topbar/topbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/themes/demo1/header/topbar/topbar.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var TopbarComponent = /** @class */ (function () {
    function TopbarComponent() {
    }
    TopbarComponent = __decorate([
        core_1.Component({
            selector: 'kt-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/views/themes/demo1/header/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/views/themes/demo1/header/topbar/topbar.component.scss")]
        })
    ], TopbarComponent);
    return TopbarComponent;
}());
exports.TopbarComponent = TopbarComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/html-class.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/themes/demo1/html-class.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Object-Path
var objectPath = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var HtmlClassService = /** @class */ (function () {
    /**
     * Component constructor
     */
    function HtmlClassService() {
        // Private properties
        this.loaded = [];
        this.onClassesUpdated$ = new rxjs_1.BehaviorSubject(this.classes);
    }
    /**
     * Build html element classes from layout config
     * @param layoutConfig
     */
    HtmlClassService.prototype.setConfig = function (layoutConfig) {
        this.config = layoutConfig;
        // scope list of classes
        this.classes = {
            header: [],
            header_mobile: [],
            header_menu: [],
            aside_menu: [],
        };
        // init base layout
        this.initLayout();
        this.initLoader();
        // not yet implemented
        // this.initAsideSecondary();
        // init header and subheader menu
        this.initHeader();
        this.initSubheader();
        // init aside and aside menu
        this.initAside();
        // init footer
        this.initFooter();
        this.onClassesUpdated$.next(this.classes);
    };
    /**
     * Returns Classes
     *
     * @param path: string
     * @param toString boolean
     */
    HtmlClassService.prototype.getClasses = function (path, toString) {
        if (path) {
            var classes = objectPath.get(this.classes, path) || '';
            if (toString && Array.isArray(classes)) {
                return classes.join(' ');
            }
            return classes.toString();
        }
        return this.classes;
    };
    /**
     * Init Layout
     */
    HtmlClassService.prototype.initLayout = function () {
        if (objectPath.has(this.config, 'self.body.class')) {
            var _selfBodyClass = (objectPath.get(this.config, 'self.body.class')).toString();
            if (_selfBodyClass) {
                var bodyClasses = _selfBodyClass.split(' ');
                bodyClasses.forEach(function (cssClass) { return document.body.classList.add(cssClass); });
            }
        }
        if (objectPath.get(this.config, 'self.layout') === 'boxed' && objectPath.has(this.config, 'self.body.background-image')) {
            document.body.style.backgroundImage = 'url("' + objectPath.get(this.config, 'self.body.background-image') + '")';
        }
        // Offcanvas directions
        document.body.classList.add('kt-quick-panel--right');
        document.body.classList.add('kt-demo-panel--right');
        document.body.classList.add('kt-offcanvas-panel--right');
    };
    /**
     * Init Loader
     */
    HtmlClassService.prototype.initLoader = function () {
    };
    /**
     * Init Header
     */
    HtmlClassService.prototype.initHeader = function () {
        // Fixed header
        if (objectPath.get(this.config, 'header.self.fixed.desktop')) {
            document.body.classList.add('kt-header--fixed');
            objectPath.push(this.classes, 'header', 'kt-header--fixed');
        }
        else {
            document.body.classList.add('kt-header--static');
        }
        if (objectPath.get(this.config, 'header.self.fixed.mobile')) {
            document.body.classList.add('kt-header-mobile--fixed');
            objectPath.push(this.classes, 'header_mobile', 'kt-header-mobile--fixed');
        }
        if (objectPath.get(this.config, 'header.menu.self.layout')) {
            objectPath.push(this.classes, 'header_menu', 'kt-header-menu--layout-' + objectPath.get(this.config, 'header.menu.self.layout'));
        }
    };
    /**
     * Inin Subheader
     */
    HtmlClassService.prototype.initSubheader = function () {
        // Fixed content head
        if (objectPath.get(this.config, 'subheader.fixed')) {
            document.body.classList.add('kt-subheader--fixed');
        }
        if (objectPath.get(this.config, 'subheader.display')) {
            document.body.classList.add('kt-subheader--enabled');
        }
        if (objectPath.has(this.config, 'subheader.style')) {
            document.body.classList.add('kt-subheader--' + objectPath.get(this.config, 'subheader.style'));
        }
    };
    /**
     * Init Aside
     */
    HtmlClassService.prototype.initAside = function () {
        if (objectPath.get(this.config, 'aside.self.display') !== true) {
            return;
        }
        document.body.classList.add('kt-aside--enabled');
        // Fixed Aside
        if (objectPath.get(this.config, 'aside.self.fixed')) {
            document.body.classList.add('kt-aside--fixed');
            objectPath.push(this.classes, 'aside', 'kt-aside--fixed');
        }
        else {
            document.body.classList.add('kt-aside--static');
        }
        // Default fixed
        if (objectPath.get(this.config, 'aside.self.minimize.default')) {
            document.body.classList.add('kt-aside--minimize');
        }
        // Menu
        // Dropdown Submenu
        if (objectPath.get(this.config, 'aside.self.fixed') !== true && objectPath.get(this.config, 'aside.menu.dropdown')) {
            objectPath.push(this.classes, 'aside_menu', 'kt-aside-menu--dropdown');
            // enable menu dropdown
        }
    };
    /**
     * Note yet implementd
     * Init Aside Secondary
     */
    HtmlClassService.prototype.initAsideSecondary = function () {
        if (objectPath.get(this.config, 'aside-secondary.self.display')) {
            document.body.classList.add('kt-aside-secondary--enabled');
        }
        // tslint:disable-next-line:max-line-length
        if (objectPath.get(this.config, 'aside-secondary.self.expanded') === true && objectPath.get(this.config, 'aside-secondary.self.layout') !== 'layout-2') {
            document.body.classList.add('kt-aside-secondary--expanded');
        }
        if (objectPath.get(this.config, 'aside-secondary.self.layout') === 'layout-3') {
            document.body.classList.add('kt-aside-secondary--static');
        }
    };
    /**
     * Init Content
     */
    HtmlClassService.prototype.initContent = function () {
    };
    /**
     * Init Footer
     */
    HtmlClassService.prototype.initFooter = function () {
        // Fixed header
        if (objectPath.get(this.config, 'footer.self.fixed')) {
            document.body.classList.add('kt-footer--fixed');
        }
    };
    HtmlClassService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], HtmlClassService);
    return HtmlClassService;
}());
exports.HtmlClassService = HtmlClassService;


/***/ }),

/***/ "./src/app/views/themes/demo1/pages-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/views/themes/demo1/pages-routing.module.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Components
var base_component_1 = __webpack_require__(/*! ./base/base.component */ "./src/app/views/themes/demo1/base/base.component.ts");
var error_page_component_1 = __webpack_require__(/*! ./content/error-page/error-page.component */ "./src/app/views/themes/demo1/content/error-page/error-page.component.ts");
// Auth
var auth_1 = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
var routes = [
    {
        path: '',
        component: base_component_1.BaseComponent,
        canActivate: [auth_1.AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/views/pages/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'news',
                loadChildren: 'app/views/pages/news/news.module#NewsModule'
            },
            { path: 'error/:type', component: error_page_component_1.ErrorPageComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;


/***/ }),

/***/ "./src/app/views/themes/demo1/subheader/subheader.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/themes/demo1/subheader/subheader.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <kt-subheader1 *ngIf=\"!layout || layout === 'subheader-v1'\"></kt-subheader1>\r\n<kt-subheader2 *ngIf=\"layout === 'subheader-v2'\"></kt-subheader2>\r\n<kt-subheader3 *ngIf=\"layout === 'subheader-v3'\"></kt-subheader3> -->\r\n"

/***/ }),

/***/ "./src/app/views/themes/demo1/subheader/subheader.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/themes/demo1/subheader/subheader.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var SubheaderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function SubheaderComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SubheaderComponent.prototype.ngOnInit = function () {
        this.layout = this.layoutConfigService.getConfig('subheader.layout');
    };
    SubheaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-subheader',
            template: __webpack_require__(/*! ./subheader.component.html */ "./src/app/views/themes/demo1/subheader/subheader.component.html"),
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService])
    ], SubheaderComponent);
    return SubheaderComponent;
}());
exports.SubheaderComponent = SubheaderComponent;


/***/ }),

/***/ "./src/app/views/themes/demo1/theme.module.ts":
/*!****************************************************!*\
  !*** ./src/app/views/themes/demo1/theme.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ngx_permissions_1 = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Translation
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
// Loading bar
var core_3 = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var effects_1 = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
// Ngx DatePicker
var ngx_daterangepicker_material_1 = __webpack_require__(/*! ngx-daterangepicker-material */ "./node_modules/ngx-daterangepicker-material/esm5/ngx-daterangepicker-material.js");
// Perfect Scrollbar
var ngx_perfect_scrollbar_1 = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
// SVG inline
var ng_inline_svg_1 = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib/index.js");
// Core Module
var core_module_1 = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
var header_component_1 = __webpack_require__(/*! ./header/header.component */ "./src/app/views/themes/demo1/header/header.component.ts");
var aside_left_component_1 = __webpack_require__(/*! ./aside/aside-left.component */ "./src/app/views/themes/demo1/aside/aside-left.component.ts");
var footer_component_1 = __webpack_require__(/*! ./footer/footer.component */ "./src/app/views/themes/demo1/footer/footer.component.ts");
var subheader_component_1 = __webpack_require__(/*! ./subheader/subheader.component */ "./src/app/views/themes/demo1/subheader/subheader.component.ts");
var brand_component_1 = __webpack_require__(/*! ./header/brand/brand.component */ "./src/app/views/themes/demo1/header/brand/brand.component.ts");
var topbar_component_1 = __webpack_require__(/*! ./header/topbar/topbar.component */ "./src/app/views/themes/demo1/header/topbar/topbar.component.ts");
var menu_horizontal_component_1 = __webpack_require__(/*! ./header/menu-horizontal/menu-horizontal.component */ "./src/app/views/themes/demo1/header/menu-horizontal/menu-horizontal.component.ts");
var partials_module_1 = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
var base_component_1 = __webpack_require__(/*! ./base/base.component */ "./src/app/views/themes/demo1/base/base.component.ts");
var pages_routing_module_1 = __webpack_require__(/*! ./pages-routing.module */ "./src/app/views/themes/demo1/pages-routing.module.ts");
var pages_module_1 = __webpack_require__(/*! ../../pages/pages.module */ "./src/app/views/pages/pages.module.ts");
var html_class_service_1 = __webpack_require__(/*! ./html-class.service */ "./src/app/views/themes/demo1/html-class.service.ts");
var header_mobile_component_1 = __webpack_require__(/*! ./header/header-mobile/header-mobile.component */ "./src/app/views/themes/demo1/header/header-mobile/header-mobile.component.ts");
var error_page_component_1 = __webpack_require__(/*! ./content/error-page/error-page.component */ "./src/app/views/themes/demo1/content/error-page/error-page.component.ts");
var auth_1 = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        core_1.NgModule({
            declarations: [
                base_component_1.BaseComponent,
                footer_component_1.FooterComponent,
                // headers
                header_component_1.HeaderComponent,
                brand_component_1.BrandComponent,
                header_mobile_component_1.HeaderMobileComponent,
                // subheader
                subheader_component_1.SubheaderComponent,
                // topbar components
                topbar_component_1.TopbarComponent,
                // aside left menu components
                aside_left_component_1.AsideLeftComponent,
                // horizontal menu components
                menu_horizontal_component_1.MenuHorizontalComponent,
                error_page_component_1.ErrorPageComponent,
            ],
            exports: [
                base_component_1.BaseComponent,
                footer_component_1.FooterComponent,
                // headers
                header_component_1.HeaderComponent,
                brand_component_1.BrandComponent,
                header_mobile_component_1.HeaderMobileComponent,
                // subheader
                subheader_component_1.SubheaderComponent,
                // topbar components
                topbar_component_1.TopbarComponent,
                // aside left menu components
                aside_left_component_1.AsideLeftComponent,
                // horizontal menu components
                menu_horizontal_component_1.MenuHorizontalComponent,
                error_page_component_1.ErrorPageComponent,
            ],
            providers: [
                html_class_service_1.HtmlClassService,
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ngx_permissions_1.NgxPermissionsModule.forChild(),
                store_1.StoreModule.forFeature('roles', auth_1.rolesReducer),
                store_1.StoreModule.forFeature('permissions', auth_1.permissionsReducer),
                effects_1.EffectsModule.forFeature([auth_1.PermissionEffects, auth_1.RoleEffects]),
                pages_routing_module_1.PagesRoutingModule,
                pages_module_1.PagesModule,
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                material_1.MatProgressBarModule,
                material_1.MatTabsModule,
                material_1.MatButtonModule,
                material_1.MatTooltipModule,
                core_2.TranslateModule.forChild(),
                core_3.LoadingBarModule,
                ngx_daterangepicker_material_1.NgxDaterangepickerMd,
                ng_inline_svg_1.InlineSVGModule
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());
exports.ThemeModule = ThemeModule;


/***/ })

}]);
//# sourceMappingURL=app-views-themes-demo1-theme-module.js.map
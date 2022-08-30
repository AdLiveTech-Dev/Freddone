var dateToday = new Date();

$("#datepicker, #mobiledatepicker").datepicker({
    numberOfMonths: 2,
  showButtonPanel: true,
  minDate: dateToday, // disable previous dates
				beforeShowDay: function(date) {
					var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#eviivo-start-date").val());
					var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#eviivo-end-date").val());
					return [true, startDate && ((date.getTime() == startDate.getTime()) || (endDate && date >= startDate && date <= endDate)) ? "dp-highlight" : ""];
				},
				onSelect: function(dateText, inst) {
					var startDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#eviivo-start-date").val());
					var endDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#eviivo-end-date").val());
					if (!startDate || endDate) {
						$("#eviivo-start-date").val(dateText);
						$("#eviivo-end-date").val("");
						$(this).datepicker("option", "minDate", dateText);
					} else {
						$("#eviivo-end-date").val(dateText);
						$(this).datepicker("option", "minDate", dateToday); // reset selection to todays date as minimum
					}
				}
			});
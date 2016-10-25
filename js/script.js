

$(function(){
    $("body").css("min-height", $(window).height());

    $('#loginModal').on('shown.bs.modal', function () {
        $('#myInput').focus();
    });

    $("#startDate").datetimepicker();
    $("#endDate").datetimepicker({
        useCurrent: false
    });
    $("#startDate").on("dp.change", function (e) {
        $('#endDate').data("DateTimePicker").minDate(e.date);
    });
    $("#endDate").on("dp.change", function (e) {
        $('#startDate').data("DateTimePicker").maxDate(e.date);
    });  
});
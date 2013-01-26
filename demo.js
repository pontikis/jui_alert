$(function () {
    $("#user_message1").jui_alert({
        containerClass: "container1 ui-widget",
        message: "<img src='megaphone.png' style='float: left; width: 30px; margin-right: 10px;'>This is a sample message. It will disappear after 6 sec (except you press the pin button)",
        timeout: 6000,
        messageIconClass: ""
    });

    $("#user_message2").jui_alert({
        containerClass: "container2 ui-widget",
        message: "This is a sample message. It will not disappear automatically. More information <a href='http://www.google.com' target='_blank'>here</a>.",
        messageBodyClass: "message2",
        timeout: 0,
        use_effect: {effect_name: "slide", effect_options: {"direction": "left"}, effect_duration: "500"}
    });

    $("#user_message3").jui_alert({
        containerClass: "container3 ui-widget",
        message: "This is a <strong>sample error message</strong>. It will disappear after 3 sec (except you press the pin button)",
        timeout: 3000,
        messageAreaClass: "jui_alert_message_area ui-state-error ui-corner-all",
        messageIconClass: "jui_alert_icon ui-icon ui-icon-alert"
    });

});
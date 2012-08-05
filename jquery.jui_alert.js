/**
 * jquery plugin which displays a user message with timeout and close button
 * Requires jquery, jquery-ui
 * Copyright 2012 Christos Pontikis (http://www.pontikis.gr)
 * https://github.com/pontikis/jui_alert
 * License GPLv3
 */
(function ($) {
    $.fn.jui_alert = function (options) {

        var defaults = {
            timeout: 2500
        };

        var options = $.extend(defaults, options);

        var message_tm;

        var instance = $("[id*=jui_alert_btn_close_]").length;
        var btn_close_id = 'jui_alert_btn_close_' + instance;
        var btn_cancel_timer_id = 'jui_alert_btn_cancel_timer_' + instance;

        var html_btn_close = '<a id="' + btn_close_id + '"href="javascript:void(0);" class="ui-icon ui-icon-closethick" style="float: right;">close</a>';
        var html_btn_clear_timer = '<a id="' + btn_cancel_timer_id + '" href="javascript:void(0);" class="ui-icon ui-icon-pin-s" style="float: right;">clear timer</a>';
        if (options.timeout == 0) {
            html_btn_clear_timer = '';
        }
        return this.each(function () {
            obj = $(this);
            var current_obj_id = $(this).attr("id");

            obj.html(html_btn_close + html_btn_clear_timer + options.message);
            obj.addClass("ui-state-highlight ui-corner-all");
            if (options.timeout > 0) {
                message_tm = setTimeout(function () {
                    $("#" + btn_close_id).click();
                }, options.timeout);
            }

            $("#" + btn_close_id).click(function () {
                $("#" + current_obj_id).removeClass("ui-state-highlight ui-corner-all");
                $("#" + current_obj_id).html('');
            });

            $("#" + btn_cancel_timer_id).click(function () {
                $("#" + btn_cancel_timer_id).removeClass("ui-icon-pin-s").addClass("ui-icon-pin-w");
                clearTimeout(message_tm);
            });

        });

    };
})(jQuery);

/**
 * jquery plugin which displays a user message with timeout and close button
 * Requires jquery, jquery-ui Themes CSS
 * Copyright 2012 Christos Pontikis (http://www.pontikis.gr)
 * Project page https://github.com/pontikis/jui_alert
 * License GPLv3
 */
(function ($) {
    $.fn.jui_alert = function (options) {

        var defaults = {
            timeout: 2500,
            class_btn_close: 'ui-icon ui-icon-closethick',
            class_btn_cancel_timer: 'ui-icon ui-icon-pin-s',
            class_btn_cancel_timer_remove: 'ui-icon-pin-s',
            class_btn_cancel_timer_add: 'ui-icon-pin-w',
            class_icon: 'ui-icon ui-icon-alert',
            class_widget: 'ui-widget',
            class_alert: 'ui-state-error ui-corner-all',
            style_message: 'text-align: left; margin-top: 10px; margin-bottom: 10px;',
            style_icon: 'float: left; margin-top: 3px; margin-right: 5px;',
            style_alert: 'padding: 0 .7em;',
            style_btn_close: 'float: right;',
            style_btn_cancel_timer: 'float: right;'
        };

        var options = $.extend(defaults, options);

        var message_tm;

        var instance = $("[id*=jui_alert_btn_close_]").length;
        var btn_close_id = 'jui_alert_btn_close_' + instance;
        var btn_cancel_timer_id = 'jui_alert_btn_cancel_timer_' + instance;

        var html1 = '<div class="' + options.class_alert + '" style="' + options.style_alert + '">';
        var html2 = '<p style="' + options.style_message + '"><span class="' + options.class_icon + '" style="' + options.style_icon + '"></span>';
        var html3 = '</p>';
        var html4 = '</div>';

        var html_btn_close = '<a id="' + btn_close_id + '" href="javascript:void(0);" class="' + options.class_btn_close + '" style="' + options.style_btn_close + '">close</a>';
        var html_btn_clear_timer = '<a id="' + btn_cancel_timer_id + '" href="javascript:void(0);" class="' + options.class_btn_cancel_timer + '" style="' + options.style_btn_cancel_timer + '">clear timer</a>';
        if (options.timeout == 0) {
            html_btn_clear_timer = '';
        }

        return this.each(function () {
            obj = $(this);
            var current_obj_id = $(this).attr("id");

            obj.addClass(options.class_widget);
            obj.html(html1 + html_btn_close + html_btn_clear_timer + html2 + options.message + html3 +html4);

            if (options.timeout > 0) {
                message_tm = setTimeout(function () {
                    $("#" + btn_close_id).click();
                }, options.timeout);
            }

            $("#" + btn_close_id).click(function () {
                $("#" + current_obj_id).removeClass(options.class_alert);
                $("#" + current_obj_id).html('');
            });

            $("#" + btn_cancel_timer_id).click(function () {
                $("#" + btn_cancel_timer_id).removeClass(options.class_btn_cancel_timer_remove).addClass(options.class_btn_cancel_timer_add);
                clearTimeout(message_tm);
            });

        });

    };
})(jQuery);
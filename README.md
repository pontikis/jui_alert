jui_alert
=========

jui_alert is a jquery plugin which displays a user message (with timeout and close button)

Copyright Christos Pontikis http://www.pontikis.gr License GPLv3

Usage:
---

<p>HTML (head section)</p>

    <link rel="stylesheet" href="/path/to/jqueryui_theme/jquery-ui.css">
    <script type="text/javascript" src="/path/to/jquery.js"></script>
    <script type="text/javascript" src="/path/to/jquery.jui_alert.js"></script>


<p>JS code</p>

    $("#element_id").jui_alert({
        message: 'your message'
    })

Detailed syntax:

    $("#element_id").jui_alert({
        message: 'your message',
        timeout: 3000,  // 0 cancels timer
        class_btn_close: 'ui-icon ui-icon-closethick', // default
        class_btn_cancel_timer: 'ui-icon ui-icon-pin-s', // default
        class_btn_cancel_timer_remove: 'ui-icon-pin-s', // default
        class_btn_cancel_timer_add: 'ui-icon-pin-w', // default
        class_icon: 'ui-icon ui-icon-alert', // default
        class_widget: 'ui-widget', // default
        class_alert: 'ui-state-error ui-corner-all', // default
        style_message: 'text-align: left; margin-top: 10px; margin-bottom: 10px;', // default
        style_icon: 'float: left; margin-top: 3px; margin-right: 5px;', // default
        style_alert: 'padding: 0 .7em;', // default
        style_btn_close: 'float: right;', // default
        style_btn_cancel_timer: 'float: right;' // default
    })


Default styling needs jquery-ui Themes CSS: http://jqueryui.com/docs/Theming

Demo
---

JSFIDDLE demo http://jsfiddle.net/pontikis/YXT3r/  (not working with Internet Explorer)
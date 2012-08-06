jui_alert
=========

<p>jui_alert is a jquery plugin which displays a user message (with timeout and close button)</p>

Usage:

<pre>
$("#element_id").jui_alert({
    message: 'your message',
    timeout: 3000,  // 0 cancels timer
    class_btn_close: 'ui-icon ui-icon-closethick',  // default
    class_btn_cancel_timer: 'ui-icon ui-icon-pin-s', // default
    class_btn_cancel_timer_remove: 'ui-icon ui-icon-pin-s', // default
    class_btn_cancel_timer_add: 'ui-icon ui-icon-pin-w', // default
    class_alert: 'ui-state-highlight ui-corner-all'  // default
})
</pre>

Default css class need jquery-ui Themes CSS.

JSFIDDLE http://jsfiddle.net/pontikis/YXT3r/
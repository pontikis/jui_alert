/**
 * @fileOverview jquery plugin, provides simple notification (with timeout and close button). jQuery UI themes compatible.
 *               <p>License MIT
 *               <br />Copyright 2012 Christos Pontikis <a href="http://pontikis.net">http://pontikis.net</a>
 *               <br />Project page <a href="http:///pontikis.net/labs/jui_alert">http://pontikis.net/labs/jui_alert</a>
 * @version 2.0.0 (26 Jan 2013)
 * @author Christos Pontikis http://pontikis.net
 * @requires jquery (>=1.6), jquery-ui (>=1.8)
 */

/**
 * See <a href="http://jquery.com">http://jquery.com</a>.
 * @name $
 * @class
 * See the jQuery Library  (<a href="http://jquery.com">http://jquery.com</a>) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See <a href="http://jquery.com">http://jquery.com</a>
 * @name fn
 * @class
 * See the jQuery Library  (<a href="http://jquery.com">http://jquery.com</a>) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */

/** the foolowing is OPTIONAL in case private methods will be documented  */
/**
 * Pseudo-Namespace containing private methods (for documentation purposes)
 * @name _private_methods
 * @namespace
 */
"use strict";
(function($) {

    var pluginName = 'jui_alert';

    /* public methods ------------------------------------------------------- */
    var methods = {

        /**
         * @lends $.fn.jui_alert
         */
        init: function(options) {

            var elem = this;

            return this.each(function() {

                /**
                 * settings and defaults
                 * using $.extend, settings modification will affect elem.data() and vice versa
                 */
                var settings = elem.data(pluginName);
                if(typeof(settings) == 'undefined') {
                    var defaults = elem.jui_alert('getDefaults');
                    settings = $.extend({}, defaults, options);
                } else {
                    settings = $.extend({}, settings, options);
                }
                elem.data(pluginName, settings);

                var container_id = elem.attr("id");

                var timer;
                var btn_close_id = create_id(settings.close_btn_id_prefix, container_id);
                var btn_cancel_timer_id = create_id(settings.timer_btn_id_prefix, container_id);

                var html = '';

                elem.removeClass().addClass(settings.containerClass);


                html += '<div class="' + settings.messageAreaClass + '">';

                html += '<p class="' + settings.buttonsAreaClass + '">';
                html += '<a id="' + btn_close_id + '" href="javascript:void(0);" class="' + settings.btnCloseClass + '" title="' + rsc_jui_alert.close + '">' + rsc_jui_alert.close + '</a>';
                if(settings.timeout > 0) {
                    html += '<a id="' + btn_cancel_timer_id + '" href="javascript:void(0);" class="' + settings.btnTimerOnClass + '" title="' + rsc_jui_alert.freeze_message + '">' + rsc_jui_alert.freeze_message + '</a>';
                }
                html += '</p>';

                html += '<p class="' + settings.messageBodyClass + '">';
                if(settings.messageIconClass) {
                    html += '<span class="' + settings.messageIconClass + '"></span>';
                }
                html += settings.message;
                html += '</p>';

                html += '</div>';

                elem.html(html);

                var elem_btn_close = $("#" + btn_close_id);
                var elem_btn_cancel_timer = $("#" + btn_cancel_timer_id);

                if(settings.timeout > 0) {
                    timer = setTimeout(function() {
                        elem_btn_close.click();
                    }, settings.timeout);
                }

                elem_btn_close.click(function() {
                    elem.html('');
                });

                elem_btn_cancel_timer.click(function() {
                    $(this).removeClass(settings.btnTimerOnClass).addClass(settings.btnTimerOffClass);
                    $(this).prop("title", "");
                    clearTimeout(timer);
                });

                var effects = ["slide", "bounce", "shake", "pulsate"];
                if($.inArray(settings.use_effect.effect_name, effects) > -1) {
                    elem.effect(settings.use_effect.effect_name, settings.use_effect.effect_options, settings.use_effect.effect_duration);
                }

            });

        },

        /**
         * Get default values
         * @example $(element).jui_alert('getDefaults');
         * @return {Object}
         */
        getDefaults: function() {
            return {
                timeout: 2500,

                containerClass: "ui-widget",
                buttonsAreaClass: "jui_alert_buttons_p",
                btnCloseClass: "jui_alert_btn_close ui-icon ui-icon-closethick",
                btnTimerOnClass: "jui_alert_btn_timer ui-icon ui-icon-pin-w",
                btnTimerOffClass: "jui_alert_btn_timer ui-icon ui-icon-pin-s",
                messageAreaClass: "jui_alert_message_area ui-state-highlight ui-corner-all",
                messageBodyClass: "jui_alert_message_body",
                messageIconClass: "jui_alert_icon ui-icon ui-icon-info",

                close_btn_id_prefix: "close_",
                timer_btn_id_prefix: "cancel_timer_",

                use_effect: ""  // one of "slide", "bounce", "shake", "pulsate" (http://jqueryui.com/effect)
            };
        },

        /**
         * Get any option set to plugin using its name (as string)
         * @example $(element).jui_alert('getOption', some_option);
         * @param {String} opt
         * @return {*}
         */
        getOption: function(opt) {
            var elem = this;
            return elem.data(pluginName)[opt];
        },

        /**
         * Get all options
         * @example $(element).jui_alert('getAllOptions');
         * @return {*}
         */
        getAllOptions: function() {
            var elem = this;
            return elem.data(pluginName);
        },

        /**
         * Set option
         * @example $(element).jui_alert('setOption', 'option_name',  'option_value',  reinit);
         * @param {String} opt option names
         * @param val
         * @param {Boolean} reinit
         */
        setOption: function(opt, val, reinit) {
            var elem = this;
            elem.data(pluginName)[opt] = val;
            if(reinit) {
                elem.jui_alert('init');
            }
        },

        /**
         * Refresh plugin
         * @example $(element).jui_alert('refresh');
         * @return {*|jQuery}
         */
        refresh: function() {
            var elem = this;
            elem.jui_alert();
        },

        /**
         * Destroy plugin
         * @example $(element).jui_alert('destroy');
         * @return {*|jQuery}
         */
        destroy: function() {
            return $(this).each(function() {
                var $this = $(this);

                $this.removeData(pluginName);
            });
        }
    };

    /* private methods ------------------------------------------------------ */
    /** the foolowing is OPTIONAL in case private methods will be documented  */

    /**
     * @lends _private_methods
     */

    /**
     * Create element id
     * @param prefix
     * @param plugin_container_id
     * @return {*}
     */
    var create_id = function(prefix, plugin_container_id) {
        return prefix + plugin_container_id;
    };


    /**
     * jui_alert: jquery plugin provides simple notification (with timeout and close button). jQuery UI themes compatible.
     *
     * @class jui_alert
     * @memberOf $.fn
     */
    $.fn.jui_alert = function(method) {

        // OPTIONAL
        if(this.size() != 1) {
            var err_msg = 'You must use this plugin (' + pluginName + ') with a unique element (at once)';
            this.html('<span style="color: red;">' + 'ERROR: ' + err_msg + '</span>');
            $.error(err_msg);
        }

        // Method calling logic
        if(methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if(typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.' + pluginName);
        }

    };

})(jQuery);
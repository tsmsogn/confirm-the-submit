'use strict';

(function ($) {

    $.fn.confirmTheSubmit = function (options) {
        var defaults = {
            message_attr: 'message',
            target_attr: 'target'
        };
        var settings = $.extend({}, defaults, options);

        return this.each(function (index, element) {

            var message = $(element).data(settings.message_attr);
            var target = '#' + $(element).data(settings.target_attr);

            $(element).on('click', function (e) {
                e.preventDefault();

                if (confirm(message)) {
                    $(target).submit();
                }
            })
        });
    };

}(jQuery));
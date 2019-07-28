$.fn.customResponsiveTabs = function(list, content, accordion, changeURL) {
    var $this = $(this);
    var $list = $(list);
    var $content = $(content);
    var $accordion = $(accordion);
    $content.each(function(index, el) {
        $(el).attr('data-ind', index);
        $(el).prev('h2').attr('data-ind', index);
        $list.eq(index).attr('data-ind', index);
    });
    $list.click(function(event) {
        event.preventDefault();
        var attr = $(this).attr('data-ind');
        var title = $(this).attr('data-title');
        var level = $(this).attr('data-level');
//        console.log(title);
        var fadeOutContent = $content.not($content.filter('[data-ind="' + attr + '"]'));
        var fadeInContent = $content.filter('[data-ind="' + attr + '"]');
        if ($this.hasClass('banner-tab')) {
            if (attr == "0") {
                fadeInContent = fadeInContent.add($(".home-banner-sec .overview-banner-content.desk-tab-content"));
            } else {
                fadeOutContent = fadeOutContent.add($(".home-banner-sec .overview-banner-content.desk-tab-content"));
            }
        }
        $list.not($(this)).removeClass('active-list');
        $accordion.not($accordion.filter('[data-ind="' + attr + '"]')).removeClass('active-acc');
        if ($(this).is(':visible')) {
            fadeOutContent.stop().hide().removeClass('active-content');
            fadeInContent.stop().fadeIn().addClass('active-content');
            $(this).addClass('active-list');
            $accordion.filter('[data-ind="' + attr + '"]').addClass('active-acc');
        } else {
            fadeOutContent.stop().slideUp().removeClass('active-content');
            fadeInContent.stop().slideToggle().addClass('active-content');
            $(this).toggleClass('active-list');
            $accordion.filter('[data-ind="' + attr + '"]').toggleClass('active-acc');
        }
        // addAnimation();
        /* history api integration */
        var historyApi = !!(window.history && history.replaceState);
        if (historyApi) {
            var currentHash = window.location.search;
            var newHash = title;
            if (currentHash.indexOf("?tab=") > -1) {
                if (level == 0) {
                    newHash = "?tab=" + newHash;
                } else if (level == 1) {
                    currentHash = currentHash.split("|")[0];
                    newHash = currentHash + "|" + newHash
                } else if (level == 2) {
                    currentHash = currentHash.split("|")[0] + "|" + currentHash.split("|")[1];
                    newHash = currentHash + "|" + newHash
                }
            } else {
                newHash = "?tab=" + newHash;
            }
            if (changeURL) {
                history.replaceState(null, null, newHash);
            }
        }
    });
    $accordion.click(function(event) {
        event.preventDefault();
        var attr = $(this).attr('data-ind');
        $list.filter('[data-ind="' + attr + '"]').trigger('click');
    });
    $list.filter('[data-ind="0"]').trigger('click');
    /* attach resize event for checking if banner element is active or not */
    if ($this.hasClass('banner-tab')) {
        $(window).resize(function(event) {
            if ($list.is(':visible') && $list.filter('.active-list').attr("data-ind") != 0) {
                $(".home-banner-sec .overview-banner-content.desk-tab-content").hide();
            }
        });
    }
};
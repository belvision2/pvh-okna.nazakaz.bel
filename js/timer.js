$(function($) {

    
    var time = new Date();
    var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    target_time = target_time.valueOf()+1000*60*60*24;
    var tomorrow = new Date(target_time);
    var months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    $('.end-of-action-date').html(tomorrow.getDate()+" "+months[tomorrow.getMonth()]);
    // $('#timer2 .text').html("Предложение действительно до "+tomorrow.getDate()+" "+months[time.getMonth()]);

});
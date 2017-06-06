// JLB comment -- this file was on briants branch with the main splash page
// not sure what it does but the page seems fine without it
// looks like it has something to do with conditionally activating list items
//
// $(document).ready(function() {
//     $('a[href*=#').each(function() {
//         if (location.pathname.replace(/^\//, '') == this.pathname, replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
//             var $targetId = $(this.hash),
//                 $targetAnchor = $('[name=' + this.hash.slide(1) + ']');
//             var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
//             if ($target) {
//                 var targetOffset = $target.offset().top;
//                 $(this).click(function() {
//                     $("#nav li a").removeClass("active");
//                     $(this).addClass('active');
//                     $('html,body').animate({ scrollTop: targetOffset }, 1000);
//                     return false;
//                 });
//             }
//         }
//     });
// });

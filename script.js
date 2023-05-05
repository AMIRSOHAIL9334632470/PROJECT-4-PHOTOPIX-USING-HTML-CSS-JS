 </script>
<script type="text/javascrpt">
    $('.portfolio-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
  });
</script>
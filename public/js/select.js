$(function() {
    var $findBox = $('#findBox');
    // var $registerBox = $('#registerBox');
    

     $findBox.find('button').on('click',function(){
        $.ajax({
            type:'post',
            url:'/api/user/find',
            data:{
                name:$findBox.find('[name="query_content"]').val(),
            }, 
            dataType: 'json',
            success: function(result){
                console.log(result);
                $findBox.find('.name_first').html(result.name);
                $findBox.find('.name_second').html('0');
                $findBox.find('.name_third').html('否');
            }
        })
    }) 
})
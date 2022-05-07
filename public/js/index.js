




$(function() {
    var $loginBox = $('#loginBox');
    var $registerBox = $('#registerBox');
    

     $registerBox.find('button').on('click',function(){
        $.ajax({
            type:'post',
            url:'/api/user/register',
            data:{
                username:$registerBox.find('[name="username"]').val(),
                password:$registerBox.find('[name="password"]').val(),
                repassword:$registerBox.find('[name="repassword"]').val()
            }, 
            dataType: 'json',
            success: function(result){
                $registerBox.find('.colWarning').html(result.message);

                if(!result.code){
                    //注册成功
                    setTimeout(function(){
                        window.location.reload(true); 
                    },1000);
                   
                }
            }
        })
    })
    $loginBox.find('button').on('click',function(){
        //通过ajax提交请求
        $.ajax({
            type:'post',
            url:'/api/user/login',
            data:{
                username:$loginBox.find('[name="username"]').val(),
                password:$loginBox.find('[name="password"]').val(),
            }, 
            dataType: 'json',
            success: function(result){
                
                $loginBox.find('.ssp').html(result.message);
            
                if(!result.code){
                    //注册成功
                    window.location.href = 'http://localhost:8888/admin';
                   
                }
            }
        })
    })
    //退出
    $('#logout').on('click',function(){
        $.ajax({
            url:'/api/user/logout',
            success:function(result){
                if(!result.code){
                    window.location.reload();
                }
            }
        })
    })
})

$(document).ready(function () {
            $('#darkmode_button').click(function () {

                let theme = localStorage.getItem('theme');
                if(!theme || theme == 'light'){
                    theme = 'dark';
                    localStorage.setItem('theme', 'dark');
                } 
                else
                {
                    theme = 'light';
                    localStorage.setItem('theme', 'light');
                }          

                document.body.classList.toggle('darkmode');

                if(theme == 'light')
                {
                    $(".separator").removeClass("separator_darkmode");
                    $(".block").removeClass("block_darkmode");
                }
                else
                {
                    $(".block").addClass("block_darkmode");  
                    $(".separator").addClass("separator_darkmode");   
                }
            });
        });
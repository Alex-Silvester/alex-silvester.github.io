window.onload = function() {
            let theme = localStorage.getItem('theme');

            if(!theme)
            {
                theme = 'light';
                localStorage.setItem('theme', theme);
            }

            
            if(theme == 'light')
            {
                if(document.body.classList.contains('darkmode'))
                {
                    document.body.classList.toggle('darkmode');
                }
                $(".separator").removeClass("separator_darkmode");
                $(".block").removeClass("block_darkmode");
            }
            else
            {
                if(!document.body.classList.contains('darkmode'))
                {
                    document.body.classList.toggle('darkmode');
                }
                $(".block").addClass("block_darkmode");  
                $(".separator").addClass("separator_darkmode");   
            }
        };
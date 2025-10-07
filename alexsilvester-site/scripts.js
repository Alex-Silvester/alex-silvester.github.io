

$(document).ready(function ()
    {

        $.get("intro_text.txt", function (data)
        {
            $( "#intro" ).html( data );
        });

    }
);

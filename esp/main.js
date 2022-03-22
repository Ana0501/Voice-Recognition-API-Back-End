let v = document.getElementById('valor');
setInterval(() => {

    $.ajax
        ({
            type: "GET",
            url: "../bakend/https://ihcanlth.000webhostapp.com//getStatusSlider.php",
            success: function (res) {
    
                console.log(res);
                v.textContent = res;
            }
        });
    }, 2000);
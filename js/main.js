$(document).ready(function(){
    
  if(window.location.href.indexOf('index') > -1){
      //  Slider
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true,
        randomStart: true
      });
  }
    

  if(window.location.href.indexOf('index') > -1){
    //momentjs cdn
    //https://cdnjs.com/libraries/moment.js/
    // Posts
    var posts = [
        {
          title: 'Prueba de titulo 1',
          //date: new Date(),
          //date: moment().format("MMMM Do YYYY"),
          //date: moment().format("MMMM dddd YYYY"),

          date: 'Publicado el ' + moment().format("dddd")+' del '+moment().date() + " de " + moment().format("MMMM")+ ' del ' + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor nunc, consectetur efficitur felis ut, porta molestie lacus. Morbi est nisl, rutrum sit amet enim in, suscipit congue arcu. In vel orci quis lorem fringilla finibus. Proin vitae vulputate sem. Duis eleifend urna finibus malesuada dapibus. Nullam ut nisl nibh. Praesent molestie at ante in semper.'
        },
        {
          title: 'Prueba de titulo 2',
          date: 'Publicado el ' + moment().format("dddd")+' del '+moment().date() + " de " + moment().format("MMMM")+ ' del ' + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor nunc, consectetur efficitur felis ut, porta molestie lacus. Morbi est nisl, rutrum sit amet enim in, suscipit congue arcu. In vel orci quis lorem fringilla finibus. Proin vitae vulputate sem. Duis eleifend urna finibus malesuada dapibus. Nullam ut nisl nibh. Praesent molestie at ante in semper.'
        },
        {
          title: 'Prueba de titulo 3',
          date: 'Publicado el ' + moment().format("dddd")+' del '+moment().date() + " de " + moment().format("MMMM")+ ' del ' + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor nunc, consectetur efficitur felis ut, porta molestie lacus. Morbi est nisl, rutrum sit amet enim in, suscipit congue arcu. In vel orci quis lorem fringilla finibus. Proin vitae vulputate sem. Duis eleifend urna finibus malesuada dapibus. Nullam ut nisl nibh. Praesent molestie at ante in semper.'
        },
        {
          title: 'Prueba de titulo 4',
          date: 'Publicado el ' + moment().format("dddd")+' del '+moment().date() + " de " + moment().format("MMMM")+ ' del ' + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor nunc, consectetur efficitur felis ut, porta molestie lacus. Morbi est nisl, rutrum sit amet enim in, suscipit congue arcu. In vel orci quis lorem fringilla finibus. Proin vitae vulputate sem. Duis eleifend urna finibus malesuada dapibus. Nullam ut nisl nibh. Praesent molestie at ante in semper.'
        },
        {
          title: 'Prueba de titulo 5',
          date: 'Publicado el ' + moment().format("dddd")+' del '+moment().date() + " de " + moment().format("MMMM")+ ' del ' + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor nunc, consectetur efficitur felis ut, porta molestie lacus. Morbi est nisl, rutrum sit amet enim in, suscipit congue arcu. In vel orci quis lorem fringilla finibus. Proin vitae vulputate sem. Duis eleifend urna finibus malesuada dapibus. Nullam ut nisl nibh. Praesent molestie at ante in semper.'
        },
        {
          title: 'Prueba de titulo 6',
          date: 'Publicado el ' + moment().format("dddd")+' del '+moment().date() + " de " + moment().format("MMMM")+ ' del ' + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor nunc, consectetur efficitur felis ut, porta molestie lacus. Morbi est nisl, rutrum sit amet enim in, suscipit congue arcu. In vel orci quis lorem fringilla finibus. Proin vitae vulputate sem. Duis eleifend urna finibus malesuada dapibus. Nullam ut nisl nibh. Praesent molestie at ante in semper.'
        },
                ];
      
              posts.forEach((item , index) => {
                var post = `
                    <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p> ${item.content}</p>
                    <a href="#" class="buttom-more">Leer más</a>
                    </article>
                `;
                    $("#posts").append(post);
              });
  }

    // Selector de tema
    var theme = $("#theme");       
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
    });
    $("#to-red").click(function(){
      theme.attr("href", "css/red.css");
    });


    // Scroll arriba de la web
    $(".subir").click(function(e){
      e.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // Login falso
    $("#login").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
      });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
      var about_parrafo = $("#about p")
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
          $("#login").hide();
          $("#logout").click(function(){
              localStorage.clear();
              location.reload();
      });
  }
    // Acordeon
    
  if(window.location.href.indexOf('about') > -1){
      $("#acordeon").accordion();
  }
    // Reloj
  if(window.location.href.indexOf('reloj') > -1){

    setInterval(function(){
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
      console.log(reloj);
    }, 1000);
  }
  // validación jQ
  if(window.location.href.indexOf('contact') > -1){
      
    $("form input[name='date']").datepicker({
      dateFormat: 'dd-mm-yy'
    });
    
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
      });
    }

});
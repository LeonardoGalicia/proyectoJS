$(document).ready(function(){

	//slider
	if(window.location.href.indexOf('index') > -1){
		$('.bxslider').bxSlider({
		mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
       });
	}
	

	//posts
	if(window.location.href.indexOf('index') > -1){
	   var posts =[
	  {
	  	title: 'prueba de tiulo',
	  	date:'Publicado el ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	  	cotent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  },
	  {
	  	title: 'prueba de tiulo 2',
	  	date: 'Publicado el ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	  	cotent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  },
	  {
	  	title: 'prueba de tiulo 3',
	  	date: 'Publicado el ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),	  	cotent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  },
	  {
	  	title: 'prueba de tiulo 4',
	  	date: 'Publicado el ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	  	cotent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  },
	  {
	  	title: 'prueba de tiulo 5',
	  	date: 'Publicado el ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
	  	cotent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  }
	];
	   posts.forEach((item, index) =>{
		var post = `
		        <article class="post">
		            <h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>${item.cotent}</p>
					<a href="#" class="button-more">Leer mas</a>
				</article> `;
		$("#posts").append(post);
	   });


	}

	


	
	//selector tema
	var theme = $("#theme");
	$("#to-green").click(function(){
		theme.attr("href","css/green.css");

	});

	$("#to-red").click(function(){
		theme.attr("href","css/red.css");

	});

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");

	});

	//scroll arriba
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//login falso

	$('#login form').submit(function(){
		var formName = $('#form-name').val();
		localStorage.setItem("form-name", formName);
	});

	var formName = localStorage.getItem("form-name");
	if(formName != null && formName != "undefined"){
		var abaut = $('#abaut p');
		abaut.html("<br><strong> Bienvenido, "+ formName +"</strong>");
		abaut.append("<a href='#'' id='logout'>Cerrar sesion</a>");
		$('#login').hide();

		$('#logout').click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	//acordeon

	if(window.location.href.indexOf('sobremi') > -1){
		$('#acordeon').accordion();
	}

	//reloj

	if(window.location.href.indexOf('reloj') > -1){
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
			$('#reloj').html(reloj);
		},1000);
	}

	//validacion
	if (window.location.href.indexOf('contacto') > -1) {
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});
		$.validate({
			lang:'es',
			/*errorMessagePosition: 'top',
			scrollToTopOnError: true*/
		});
	}


	



});
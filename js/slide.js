var index = 1;
		window.onload = function(){
			muestraFoto(index);
		}
		function mueve(n){
			muestraFoto(index += n);
		}
		function foto(n){
			muestraFoto(index = n);
		}
		function muestraFoto(n){
			var i;
			var fotos = document.getElementsByClassName("foto");
			var bolitas = document.getElementsByClassName("bolita");
			console.log(bolitas.length);
			if( n > fotos.length) index = 1;
			if( n < 1) index = fotos.length;
			for (var i = 0; i < fotos.length; i++) {
				fotos[i].style.display = "none";
			}
			for (var i = 0; i < bolitas.length; i++) {
				bolitas[i].className = bolitas[i].className.replace("activo","");
			}
			fotos[index-1].style.display = "block";
			bolitas[index-1].className += " activo";
		}
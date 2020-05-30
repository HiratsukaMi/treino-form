/*Nome: Michelly Hiratsuka Zorzi
Curso: Ciência da Computação
Semestre: 7º
Faculdade: Faculdade Anhanguera de Bauru */


	function validation(){
  
		if(document.formulario.pnome.value=="") {
			alert( "Preencha campo NOME corretamente!" );
			document.formulario.pnome.focus();
			return false;
		}
		
		if(document.formulario.unome.value=="") {
			alert( "Preencha campo NOME corretamente!" );
			document.formulario.unome.focus();
			return false;
		}
  
		if( document.formulario.email.value=="" || 
			document.formulario.email.value.indexOf('@')==-1 || 
			document.formulario.email.value.indexOf('.')==-1 )
		{
			alert( "Preencha campo E-MAIL corretamente!" );
			document.formulario.email.focus();
			return false;
		}
  
		if( document.formulario.anonasc.value == "" ||
			document.formulario.anonasc.value <= 0 ||
			document.formulario.anonasc.value >= 2020) {
			alert( "Preencha campo DATA DE NASCIMENTO corretamente!" );
			document.formulario.anonasc.focus();
			return false;
		}
  
		return clique();
	}
	
	function clique() {
		var np = document.getElementById("pnome").value;
		var nu = document.getElementById("unome").value;
		var ano = document.getElementById("anonasc").value;
		var e = document.getElementById("email").value;
		var vd = 2020 - ano;
		document.getElementById("titlef").innerHTML = "<h1>Dados Cadastrados: </h1>";
		document.getElementById("nomep").innerHTML = "<h3>Primeiro Nome: " + np + "</h3>";
		document.getElementById("nomeu").innerHTML = "<h3>Último Nome: " + nu + "</h3>";
		document.getElementById("nascano").innerHTML = "<h3>Ano de Nascimento: " + ano + "</h3>";
		document.getElementById("email2").innerHTML = "<h3>E-mail: " + e + "</h3>";
		document.getElementById("frase").innerHTML = "<h2>Olá " + np + " " + nu + ", hoje tem aproximadamente " + vd +  " anos.</h2>";
	}
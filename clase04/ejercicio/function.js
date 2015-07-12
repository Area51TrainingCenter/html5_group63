function verificarEmail(email)
{
	var mensaje;
	var arroba=email.indexOf("@");
	var punto=email.indexOf(".");


	};


	// si los valores ingresado en el indexOf son encontrados
	// me devulve el indice en donde se encuentran ubicados
	// en caso contrario el valor es = -1 


	if(arroba==-1)
	{
		mensaje="correo no valido";
	}
	else if (punto==-1)
	{
		mensaje="correo no valido";

	}
	else
	{
		if(arroba<punto)
		{
		mensaje="el correo es valido";	
		}
		else
		{
			mensaje="correo no valido";
		}

	}


	return mensaje;


}
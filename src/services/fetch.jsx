import React from 'react';
import { useState, useEffect } from 'react';

const fetch = () => {

const [lat, setLat] = useState();
const [lon, setLon] = useState();


//TIP: cuando hagas una petición, copies la respuesta que te da en un objeto en tus componentes 
//y uses dicho objeto en lugar de hacer más peticiones mientras desarrollas. 

//para geolocalizar al usuario:
navigator.geolocation.getCurrentPosition((position) => {
    console.log('Posición actual');
    console.log(position); // probar y activar permisos. Ver documentación
})

//tiempo actual en grados Celsius: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// campo icon para los principales datos del tiempo, úsalo para ver un icono con esta URL:
//const iconUrl = `http://openweathermap.org/img/w/${iconcode}.png`

//inicio es localización actual y link para ver tiempo en otras ciudades y otro para 5 días vista
//ruta select el tiempo por ciudad (al menos 5): array de objetos con nombre de ciudad, lat, lon...
//ruta tiempo a 5 días vista: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//ruta ver previsión 5 días vista en ciudad seleccionada

//indicador de carga (loader) 
//Si no doy permisos de geolocación en mi navegador, mensaje activarlos para poder utilizar la aplicación.

  return (
    <div>


    </div>
  )
}

export default fetch



# API MERCADO PAGO


<h2> Introducción</h2>
Integracion de pago mediante la utilizacion de API de mercado pago con node.js

</br>

- [API MERCADO PAGO](#API-MERCADO-PAGO)
- [Instalación](#instalación)
  - [.env:](#.env)
  - [Dependencias:](#dependencias)
  - [Interfaz:](#interfaz)
- [Documentacion importante:](#documentacion-importante)



# Instalación


## .env
Deberás crear en tu carpeta raíz un archivo de conexion a tu base de datos con nombre **".env"** donde incluirás las siguientes variables con tu informacion local:
```javascript
NGROK_PUERTO = "https:dengrok.ngrok.io/webhook"
MERCADOPAGO_API_KEY = TEST-API4564654

```
Modifica las variables y declara el puerto 3000 en el archivo **config** 


## Dependencias:
Asumiendo que tiene node.js preinstalado, asegurese de que su terminal este posicionada en la carpeta raiz del proyecto y ejecute  el siguiente comando para instalar todas las dependencias necesarias:
```
npm install
```

Ahora ya puedes comenzar a ejecutar el programa con el siguiente comando:
```
npm start
```
Esto abrira el puerto 3000, permitiendo ver todo de manera local.


<br>

## Interfaz: 
Una vez iniciado el proyecto podras visualizar la interfaz de esta forma:


https://github.com/Psiquee/MercadoPago_API/assets/84688354/4b52198b-cb29-4860-be91-84185783d51a


<br>

# Documentacion importante:
- https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
- https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integration-test/test-accounts
- https://ngrok.com/

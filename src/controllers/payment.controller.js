import mercadopago from "mercadopago";
import { HOST , MERCADOPAGO_API_KEY , NGROK_PUERTO} from "../config.js";




export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: `${MERCADOPAGO_API_KEY}`,
    });

    
    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Zapatillas nike",
                unit_price: 30000,
                currency_id: "ARS",
                quantity: 1
            }
        ],
        back_urls: {
            success: `${HOST}/success`,
            failure: `${HOST}/failure`,
            pending: `${HOST}/pending`,
        },
        notification_url: NGROK_PUERTO, // puerto creado con ./ngrok.exe http PORT
    })
    console.log(result)
    res.send(result.body)
    
}

export const receiveWebhook = async (req, res) => {
    const payment = req.query;  //recibo los datos

    try {
        console.log("receivend webhook", payment)
        if (payment.type === "payment") {  // **si el payment tiene la propiedad type y esa prop**r**iedad es igual a payment**
            //devolver id de transaccion
            const data = await mercadopago.payment.findById(req.query['data.id'])
            console.log(data) //muestramelo en consola //store in database
        }
        res.sendStatus(204);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ error: error.message });
    }
};

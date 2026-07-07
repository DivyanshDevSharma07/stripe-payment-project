const express= require('express');
const router= express.Router();

const stripe= require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session',async(req,res)=>{
    try{
        const session= await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            line_items:[{
                price_data:{
                    currency:'usd',
                    product_data:{
                        name:'premium template',
                    },
                    unit_amount:2000,
                },
                quantity:1,
            }],
            mode:'payment',
            success_url: 'http://localhost:3000/success.html',
            cancel_url: 'http://localhost:3000/cancel.html',
        });
        res.json({
            url:session.url
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            error:err.message
        });
    }
});
module.exports=router;


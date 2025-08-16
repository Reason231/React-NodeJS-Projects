const paypal=require("paypal-rest-sdk")

paypal.configure({
    mode:"sandbox",
    client_id:"AUSYXF22YK10P9V0TM41I2Oho0I0gNDYyqTM7BfAdWFAE_-eBm23KEZ2_iw2or-DDO98XloADKUhn39T",
    client_secret:"EPn28ePKKvTqAY5Cy5Unp1hwbwn7Uo0wcaJAZYzXGDTPrP915UYuDmrq8fkS05PbaGVYikzWPXpO0eU9"
})

module.exports = paypal
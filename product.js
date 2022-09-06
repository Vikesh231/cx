// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Shopify = require('shopify-api-node')

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); //why use this

// console.log(Shopify,"shopify");


var proData = [];
async function shopify_prduct(){
    const shopify = new Shopify({
        shopName: 'rajput-vikesh-shop.myshopify.com',
        accessToken: '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'
    });

    console.log(shopify,"hsfh");
    let params = { limit: 10 };
    const proData = await shopify.product.list(params);
    // console.log(proData,'pro');
 
}

// console.log(proData,'dfghjk');

app.get("/", (req, res) => {
  console.log("get request");
  shopify_prduct()
// console.log(proData,'get');

  res.send("get request product");
});

app.post("/product", async(req, res) => {
  // console.log(req);
  // console.log("products");

// *******************shopify**************
const shopify = new Shopify({
    shopName: 'rajput-vikesh-shop.myshopify.com',
    accessToken: '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'
});

// let params = { limit: 10 };
const productsss = await shopify.product.list();
// console.log("productsss: ", productsss.length);
// console.log(productsss[1]);
// ********json format for Assit************


let arr = [];
for(i=0;i<productsss.length;i++){
    let obj1 = [
        {
          "type": "image",
          "rawUrl": productsss[i].image.src,
          "accessibilityText": "Dialogflow across platforms"
        },
        {
          "type": "info",
          "title": productsss[i].title,
          "subtitle": productsss[i].product_type,
          "actionLink": "https://cloud.google.com/dialogflow/docs"
        },
        {
          "type": "description",
          "title": 'price:'+productsss[i].variants[0].price,
          "text": [
              "stock:"+productsss[i].published_scope,
             'description:'+ productsss[i].vendor
          ]
        },
        {
          "type": "chips",
          "options": [
            {
              "text": productsss[i].handle,
              "link": "https://cloud.google.com/dialogflow/case-studies"
            }
          ]
        },
        
      ];
  
      arr.push(obj1);
}


console.log(arr.length,'arrr');

  let tag = req.body.fulfillmentInfo.tag;
  let jsonResponse = {};

  if (tag == "product") {
    jsonResponse = {
      fulfillment_response: {
        messages: [
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: ["product response here"],
            },
          },
          {
            payload: {
                richContent: arr,
            }
          }
        ],
      },
    };
  }
  res.json(jsonResponse);
});
app.listen(5001, () => {
  console.log("server run on 5001");
});

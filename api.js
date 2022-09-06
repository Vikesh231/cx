const express = require("express");
const app = express();
const axios = require("axios").default;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var a = [];
call();
async function call() {
  try {
    response = await axios({
      url: "https://dummyjson.com/products/",
      method: "get",
    });
    a = response.data;
    // console.log(a , 'a');
    // console.log(response.data);
    // res.status(200).json(response.data);
  } catch (err) {
    // res.status(500).json({ message: err });
    console.log(err);
  }
}

app.get("/",   async (req, res) => {
  console.log("get method");
  console.log(a.products[1].title);
  res.send("get  ");
});

app.post("/webhook", (request, response) => {
  console.log("post req");
  //   console.log(a[0].title, "data");
//   console.log(a.products); 
  console.log("post req end");
  console.log("webhook");
  // console.log(request);
  var arr = [];
  for (i = 0; i < a.products.length; i++) {
    //    let obj  = {
    //         "type": "info",
    //         "title": a.products[i].title,
    //         "subtitle": a.products[i].brand,
    //         "image": {
    //           "src": {
    //             "rawUrl": a.products[i].thumbnail
    //           }
    //         },
    //         "actionLink": "https://www.apple.com/"
    //       }

    // **********************
/*
    [
      0{
         {
          img
         },
         {
          info
         },
         {
          chips
         },
         {
          des
         }
      },
      1{

      }
    ]
*/


    let obj1 = [
      {
        "type": "image",
        "rawUrl": a.products[i].thumbnail,
        "accessibilityText": "Dialogflow across platforms"
      },
      {
        "type": "info",
        "title": a.products[i].title,
        "subtitle": a.products[i].category,
        "actionLink": "https://cloud.google.com/dialogflow/docs"
      },
      {
        "type": "description",
        "title": 'price:'+a.products[i].price,
        "text": [
            "stock:"+a.products[i].stock,
           'description:'+ a.products[i].description
        ]
      },
      {
        "type": "chips",
        "options": [
          {
            "text": a.products[i].brand,
            "link": "https://cloud.google.com/dialogflow/case-studies"
          }
        ]
      },
      
    ];

    arr.push(obj1);
  }
  // console.log(arr[0], "arr");
//   var oldArray = (arr);
                            //   var newArray = Array.prototype.concat.apply([], arr);
                            //   console.log(newArray,"new array"); ho jayega


  

  let tag = request.body.fulfillmentInfo.tag;
  let jsonResponse = {};

  if (tag == "welcome tag") {
    jsonResponse = {
      target_page:
        "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/b816845c-8a63-49ef-a804-976799d06a69",

      fulfillment_response: {
        messages: [
          //   {
          //     text: {
          //       //fulfillment text response to be sent to the agent
          //       text: ["api response here"],
          //     },
          //   },
          {
            payload: {
              richContent: arr,
              // [
                /* [
                      {
                        "type": "description",
                        "title": a.products[0].title,
                        "text": [
                            a.products[0].brand,
                            a.products[0].category
                        ]
                      },
                      {
                        "type": "description",
                        "title": a.products[1].title,
                        "text": [
                            a.products[1].brand,
                            a.products[1].category
                        ]
                      },
                      {
                        "type": "description",
                        "title": a.products[2].title,
                        "text": [
                            a.products[2].brand,
                            a.products[2].category
                        ]
                      }
                    ]*/
                /*
                    [
                        {
                          "type": "info",
                          "title": a.products[0].title,
                          "subtitle": a.products[0].brand,
                          "image": {
                            "src": {
                              "rawUrl": a.products[0].thumbnail
                            }
                          },
                          "actionLink": "https://www.apple.com/"
                        },
                        {
                            "type": "info",
                            "title": a.products[1].title,
                            "subtitle": a.products[1].brand,
                            "image": {
                              "src": {
                                "rawUrl": a.products[1].thumbnail
                              }
                            },
                            "actionLink": "https://www.apple.com/"
                          },
                          {
                            "type": "info",
                            "title": a.products[2].title,
                            "subtitle": a.products[2].brand,
                            "image": {
                              "src": {
                                "rawUrl": a.products[2].thumbnail
                              }
                            },
                            "actionLink": "https://www.apple.com/"
                          },
                      ]
                      */
                // [arr[0]],
                // newArray newArray.length tk chl sakta hai
                          // [
                          //     {
                          //       "type": "image",
                          //       "rawUrl": a.products[0].thumbnail,
                          //       "accessibilityText": "Dialogflow across platforms"
                          //     },
                          //     {
                          //       "type": "info",
                          //       "title": a.products[0].title,
                          //       "subtitle": a.products[0].category,
                          //       "actionLink": "https://cloud.google.com/dialogflow/docs"
                          //     },
                          //     {
                          //       "type": "chips",
                          //       "options": [
                          //         {
                          //           "text": a.products[0].brand,
                          //           "link": "https://cloud.google.com/dialogflow/case-studies"
                          //         }
                          //       ]
                          //     },
                          //     {
                          //         "type": "description",
                          //         "title": 'price:'+a.products[0].price,
                          //         "text": [
                          //             "stock:"+a.products[0].stock,
                          //           'description:'+ a.products[0].description
                          //         ]
                          //       },
                          //   ],
                          //   [
                          //     {
                          //       "type": "image",
                          //       "rawUrl": a.products[1].thumbnail,
                          //       "accessibilityText": "Dialogflow across platforms"
                          //     },
                          //     {
                          //       "type": "info",
                          //       "title": a.products[1].title,
                          //       "subtitle": a.products[1].category,
                          //       "actionLink": "https://cloud.google.com/dialogflow/docs"
                          //     },
                          //     {
                          //       "type": "chips",
                          //       "options": [
                          //         {
                          //           "text": a.products[1].brand,
                          //           "link": "https://www.apple.com/"
                          //         }
                          //       ]
                          //     },
                          //     {
                          //         "type": "description",
                          //         "title": 'price:'+a.products[1].price,
                          //         "text": [
                          //             "stock:"+a.products[1].stock,
                          //           'description:'+ a.products[1].description
                          //         ]
                          //       },
                          //   ]
              // ],
            },
          },
        ],
      },
    };
  }
  response.json(jsonResponse);
});

app.listen(8081, () => {
  console.log("live on port 8081");
});

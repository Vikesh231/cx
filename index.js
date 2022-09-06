/*const express = require('express');
const app = express();
const port = 5000;

app.use('/',(req,res)=>{
    console.log("webhook.........   ");
    res.send("webhook.. ")
})
app.listen(port,()=>{
    console.log(`server run on port ${port}`);
})
*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("getrequest.....");
  res.send("get req");
});

app.post("/webhook", (request, response) => {
  console.log("webhook");
  let tag = request.body.fulfillmentInfo.tag;
  let jsonResponse = {};
  // *******
  // let targetPage = 'projects/first-f6737/locations/us-central1/agents/6de3bb68-6a10-4353-9b2f-5c5d99c43ef8/flows/00000000-0000-0000-0000-000000000000/pages/20faa8f2-59ce-4681-bf99-464eadd5333b'
  // ***************

  if (tag == "welcome tag") {
    //fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
    jsonResponse = {
      target_page:
        "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/b816845c-8a63-49ef-a804-976799d06a69",

      /*
      fulfillment_response: {
        messages: [
          /*
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: ["Hi! This is a webhook response"]
            }
          },
          {
            payload: {
              "richContent": [
                [
                  {
                    "image": {
                      "src": {
                        "rawUrl": "https://picsum.photos/200/300"
                      }
                    },
                    "type": "accordion",
                    "text": "Accordion text",
                    "title": "Accordion title",
                    "subtitle": "Accordion subtitle here"
                  },
                  {
                    "type": "accordion",
                    "subtitle": "Accordion subtitle here",
                    "image": {
                      "src": {
                        "rawUrl": "https://picsum.photos/200/300"
                      }
                    },
                    "text": "Accordion text",
                    "title": "Accordion title"
                  }
                ]
              ]
            }
          }
        ]
      }*/

      fulfillment_response: {
        messages: [
          {
            payload: {
              richContent: [
                [
                  {
                    image: {
                      src: {
                        rawUrl: "https://picsum.photos/200/300",
                      },
                    },
                    type: "accordion",
                    text: "Accordion text",
                    title: "Accordion title",
                    subtitle: "Accordion subtitle here",
                  },
                  {
                    type: "accordion",
                    subtitle: "Accordion subtitle here",
                    image: {
                      src: {
                        rawUrl: "https://picsum.photos/200/300",
                      },
                    },
                    text: "Accordion text",
                    title: "Accordion title",
                  },
                ],
              ],
            },
          },
        ],
      },

      //  */
    };
  } else {
    jsonResponse = {
      //fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
      // target_page: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>,
      // target_page: "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/b816845c-8a63-49ef-a804-976799d06a69",
      fulfillment_response: {
        messages: [
          {
            text: {
              ////fulfillment text response to be sent to the agent
              text: [
                `There are no fulfillment responses defined for "${tag}"" tag`,
              ],
            },
          },
        ],
      },
    };
  }
  response.json(jsonResponse);
});

// name intent
app.post("/name", (request, response) => {
  console.log(request,'asdfg');
  console.log("*****name*******");
  // console.log(request.body.sessionInfo.parameters.name.name ,'asdfg name here');//also can do this

  let tag = request.body.fulfillmentInfo.tag;
  let jsonResponse = {};
  // *******
  // let targetPage = 'projects/first-f6737/locations/us-central1/agents/6de3bb68-6a10-4353-9b2f-5c5d99c43ef8/flows/00000000-0000-0000-0000-000000000000/pages/20faa8f2-59ce-4681-bf99-464eadd5333b'
  // ***************

  if (tag == "name") {
    //fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
    jsonResponse = {
      // target_page: "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/ed79fb2a-7c08-49ea-875a-06f10ad5244  ",
      target_page:
        "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/ed79fb2a-7c08-49ea-875a-06f10ad5244f",

      fulfillment_response: {
        messages: [
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [
                `your name is .... ${request.body.intentInfo.parameters.name.originalValue} okay`,
              ],
            },
          },
          {
            payload: {
              richContent: [
                [
                  {
                    event: {
                      name: "gdfjhgd",
                    },
                    link: "https://www.google.com/",
                    type: "button",
                    icon: {
                      color: "#FF9800",
                      type: "chevron_right",
                    },
                    text: "submit btn vs code",
                  },
                ],
              ],
            },
          },
        ],
      },
    };
  } else {
    jsonResponse = {
      //fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
      // target_page: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>,
      // target_page: "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/b816845c-8a63-49ef-a804-976799d06a69",
      fulfillment_response: {
        messages: [
          {
            text: {
              ////fulfillment text response to be sent to the agent
              text: [
                `There are no fulfillment responses defined for "${tag}"" tag`,
              ],
            },
          },
        ],
      },
    };
  }
  response.json(jsonResponse);
});

app.post("/yes", (request, response) => {
  // console.log(request,'asdfg');
  console.log("*****yes*******");
  // console.log(request.body.sessionInfo.parameters.name.name ,'asdfg name here');//also can do this

  let tag = request.body.fulfillmentInfo.tag;
  let jsonResponse = {};
  // *******
  // let targetPage = 'projects/first-f6737/locations/us-central1/agents/6de3bb68-6a10-4353-9b2f-5c5d99c43ef8/flows/00000000-0000-0000-0000-000000000000/pages/20faa8f2-59ce-4681-bf99-464eadd5333b'
  // ***************

  if (tag == "yes") {
    //fulfillment response to be sent to the agent if the request tag is equal to "welcome tag"
    jsonResponse = {
      // target_page: "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/ed79fb2a-7c08-49ea-875a-06f10ad5244  ",
      // target_page: "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/ed79fb2a-7c08-49ea-875a-06f10ad5244f",
      fulfillment_response: {
        messages: [
          /*   {
            text: {
              ////fulfillment text response to be sent to the agent
              text: [
                `There are no fulfillment responses defined for "${tag}"" tag`
              ]
            }
          }*/

          {
            payload: {
              richContent: [
                [
                  {
                    title: "webhook responses",
                    image: {
                      src: {
                        rawUrl: "https://picsum.photos/200/300",
                      },
                    },
                    type: "info",
                    actionLink: "https://facebook.com",
                    subtitle: "fulfillment responses",
                  },
                ],
              ],
            },
          },
        ],
      },
    };
  } else {
    jsonResponse = {
      //fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
      // target_page: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>,
      // target_page: "projects/first-f6737/locations/us-central1/agents/6748bebd-c649-434d-8829-2a8e36089eb4/flows/00000000-0000-0000-0000-000000000000/pages/b816845c-8a63-49ef-a804-976799d06a69",
      fulfillment_response: {
        messages: [
          {
            text: {
              ////fulfillment text response to be sent to the agent
              text: [
                `There are no fulfillment responses defined for "${tag}"" tag`,
              ],
            },
          },
        ],
      },
    };
  }
  response.json(jsonResponse);
});

app.listen(6000, () => {
  console.log("server run on ");
});

// const listener = app.listen(process.env.PORT, () => {
//   console.log("Your app is listening on port " + listener.address().port);
// });

/*
richContent: [
  [
    {
      options: [
        {
        text: "piza"
      },
      {
        text: "burger"
      },
    ],
      type: "chips"  
    }
  ]
]
*/

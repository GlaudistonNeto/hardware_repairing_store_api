an api-restful, using the very basics concepts of an API to store services in a list with name and price.

ENDPOINTS
GET /services
This endpoint is possible to return the list of all services stored in the “database”.

Parameters
None

Responses
OK! 200
In case this response happens, you will receive the listing of all services

Response example:

[
   {
   	"id": 1,
   	"name": "serv1",
   	"price": 0.01
   },
   {
   	"id": 2,
   	"name": "serv2",
   	"price": 0.02
   },
   {
   	"id": 3,
   	"name": "serv3",
   	"price": 0.03
   }
]
GET /sertvices/:id
This endpoint is possible to return the list of all services stored in the “database”.

Parameters
Service id registered in the system.

Responses
OK! 200
In case this response happens you will receive the listing of all services.

Response example:

[
{
   	"id": 3,
   	"name": "serv3"
   }
]

Not Found 404
In case the id of the product doesn't exist you will receive the error message Not Found with the error code 404.

Response Example:

Not Found

POST /orders
This endpoint is responsible to register the orders in the “database”.

Parameters
None

Responses
OK! 200
In case this response happens, you will receive the listing of all orders

DELETE /order/:id
This endpoint is responsible to erase the product stored in the “database”.

Parameters
Order id registered in the system.

Responses
OK! 200
In case this response happens you will erase order in the “database”.

Not Found 404
In case the id of the product doesn't exist you will receive the error message Not Found with the error code 404.

Response Example:

Not Found

PUT /order/:id
This endpoint is responsible to edit a field of the order stored in the “database”.

Parameters
Order id registered in the system.

Responses
OK! 200
In case this response happens, you will have edited some field of your stored order in the “database”.

Response Example:


{
   	"cleaning": 0
}

Not Found 404
In case the id of the product doesn't exist you will receive the error message Not Found with the error code 404.

Response Example:

Not Found
export const Mydata ={
    "definitions": {
      "address": {
        "type": "object",
        "properties": {
          "street_address": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "state": {
            "type": "string"
          }
        },
        "required": [
          "street_address",
          "city",
          "state"
        ]
      },
      "node": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "children": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/node"
            }
          }
        }
      },
      "file":{
        "type": "string"
      },
      "fill": {
        "type": "number"
      }
    },
    "type": "object",
    "properties": {
      "billing_address": {
        "title": "Billing address",
        "$ref": "#/definitions/address"
      },
      "shipping_address": {
        "title": "Shipping address",
        "$ref": "#/definitions/address"
      },
      "tree": {
        "title": "Recursive references",
        "$ref": "#/definitions/node"
      }
    }
  }
import React from "react";
import { Mydata } from "./data";
import Form from "@rjsf/core";
import { render } from "@testing-library/react";






function RenderList(){

    return(

        Object.keys(Mydata.definitions).map((obj, i)=>{
            return(
                <div  onClick={()=>setSchema(obj, Mydata.definitions[obj].type)} key={obj}> {obj}</div>
                // <div onClick={()=>console.log("Hello")}> {obj} </div>

            )
        })
    )
}

export function setSchema (name, type){
 let newSchema = {
"title": name, 
"type": "object",
"properties": {
    "types": {
    "enum": [
        "string",
        "number"
    ]
    }
},
"allOf": [
    {
    "if": {
        "properties": {
        "types": {
            "const": "string"
        }
        }
    },
    "then": {
        "properties": {
        "food": {
            "type": "string",
            "enum": [
            "meat",
            "grass",
            "fish"
            ]
        }
        },
        "required": [
        "food"
        ]
    }
    },
    {
    "if": {
        "properties": {
        "types": {
            "const": "number"
        }
        }
    },
    "then": {
        "properties": {
        "food": {
            "type": "string",
            "enum": [
            "insect",
            "worms"
            ]
        },
        "water": {
            "type": "string",
            "enum": [
            "lake",
            "sea"
            ]
        }
        },
        "required": [
        "food",
        "water"
        ]
    }
    },
    {
    "required": [
        "types"
    ]
    }
]
}
render(
    <Form schema={newSchema} />
)

}

export default RenderList
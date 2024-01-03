const jwt=require("jsonwebtoken")
const express=require("express")
const app=express()

// decode,verify,generate

const value={
    name:harkirat,
    accountNumber:2534627
}

//jwt
const token=jwt.sign(value,"secret")
console.log(token)

// this token has been generated using this secret and hence this token can only be verified using this secret
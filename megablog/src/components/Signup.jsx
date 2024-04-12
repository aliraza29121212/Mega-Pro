import React, { useState } from "react";
import authService from "../appwriter/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async(data)=>{
    setError("")
    try {
        const userData = await authService.createAccount(data)
        if(userData){
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(login(userData));
            navigate('/')
        }
    } catch (error) {
        setError(error.message)
    }
  }

  return (
   
  );
}

export default Signup;

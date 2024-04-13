import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register,handleSubmit}=useForm();
    const navi=useNavigate();

    function savaData(data){
        // console.log('data is:--->',data)
        axios.post('http://localhost:5000/users',data);
        // alert ("recor added")
        navi('/user/show/');

    }
  return (
    <>
    <div className='container'>
    <center><h1><u>STUDENT REGISTERATION FORM</u></h1></center>
    <form onSubmit={handleSubmit(savaData)} className='mt-5'>
        <label htmlFor='r'><b>Enter ROll:</b></label>
        <input type='number'id='r' className='form-control'{...register('roll')}></input>
        <br></br>
        <label htmlFor='n'><b>Enter Name:</b></label>
        <input type='text' id='n' className='form-control'{...register('name')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter Mark:</b></label>
        <input type="number" id='m' className='form-control'{...register('mark')}></input>
        <br></br>
        <input type="submit" value="Add Student" className='btn btn-outline-success col-6'></input>
        <input type="reset" value="Reset" className='btn btn-outline-warning col-6'></input>
    </form>
    </div>
    </>
  )
}

export default Add
import React from 'react'
import styled from 'styled-components'
import logo from '../../asset/images/logo1.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../../features/Slide/user/userSlide';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


type FormInputs = {
    email: string;
    password: string | number;
  };

  const fromSchema = yup.object().shape({
    email: yup.string().required("Không được để trống").email("It not Email"),
    password: yup
      .string()
      .required("Không được để trống")
      .min(6, "Phải lớn hơn 6 kí tự"),

  });
  const validation = { resolver: yupResolver(fromSchema) };
  
const Signin = () => {

    const {register, handleSubmit,formState} = useForm<FormInputs>(validation);
    const {errors} = formState;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const onSubmit2:SubmitHandler<FormInputs> = async (user:any) => {
        try {
            console.log(user);
            
           const {payload} = await dispatch(signIn(user))
           console.log(payload);
           if (payload == "Cannot find user") {
            message.error("Email không tồn tại")
           }else if (payload == "Incorrect password") {
            message.error("Mật khẩu không chính xác")
          }else{
            message.success("Đăng nhập thành công !");
            localStorage.setItem("user", JSON.stringify(payload))
                navigate("/")

          }
                
        } catch (error) {
           console.log(error);
           
        }
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit2)}>
                <Col>
                    <Label htmlFor="email">Email</Label><br />
                    <Input type="email" {...register("email", {required:true})} />
                    <Error> {errors.email?.message}</Error>

                    <Label htmlFor="password">Password</Label><br />
                    <Input type="password"   {...register("password", {required:true , minLength:6})}/>
                    <Error> {errors.password?.message}</Error>

                  <Btn>Đăng kí</Btn>
                </Col>
                
               <Col2 >

                    <Logo> 
                        <img src={logo} alt="" style={{maxWidth:"100%"}} width={150} />
                        </Logo>
                   
                
                </Col2>
               
            </Form>
        </Container>
    )
}


const Container = styled.div`
    background-color: #D9D9D9;
    padding: 100px;
    min-height: 800px;
`

const Form = styled.form`
    width: 800px;
    height: 400px;
    margin: auto ;
    background-color: #fff;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 30px;
`

const Col = styled.div`
   padding:60px 30px;
`
const Col2 = styled.div`
    background-color: #F8F8F8;
    position: relative;
    

`
const Logo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
   
    /* top: 50; */
    transform: translate(-50%, -50%);
/* text-align: center; */
`
const Label = styled.label`
    /* font-weight: 600; */
    font-size: 16px;
`
const Input = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid #ddd;
   
`
const Btn = styled.button`
    width: 100%;
    background-color: #FF424E;
    color: #fff;
    padding: 5px;
    border: 1px solid #FF424E;
    margin-top: 20px;
`
const Error = styled.div`
    color: red;
    margin-bottom: 10px;
`

export default Signin
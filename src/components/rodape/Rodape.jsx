import React from 'react'
import { Base } from '../../styled'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Menu(){
    return (
        <Base>
            <p>Copyright &copy; Racionalizando</p>
            <div>
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiFillLinkedin/>
            </div>
        </Base>
)}
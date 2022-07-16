import { Access } from "../Access"
import { Extra } from "../Extra"
import { FooterLogin } from "../FooterLogin"
import { HeaderLogin } from "../HeaderLogin"
import { FromRegistrol } from "../Register/FormRegistrol"
import { FormLogin } from "./FormLogin"

export const Login = () =>{
    return(
        <>
        <HeaderLogin />
        <Access/>
        <FromRegistrol/>
        <Extra/>
        <FooterLogin/>
        </>
    )
}
import Footer from "./footer";
import Nav from "./navbar";

export default function Layout ({children}){
    return <>
<Nav/>
{children}
<Footer/>
    </>
}
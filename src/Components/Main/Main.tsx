import "./Main.scss"
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"


export const Main = () => {
    
    const schema = yup.object().shape({
        email: yup.string().email().required(),
    });
    
    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data:Object) => {
        console.log(data);
    }


    return (
        <main>
            <div id="hero-img"></div>

            <section className="main-content">

                <h1><span>We're</span> <br/> coming <br/>soon</h1>
                <div id="main-text"><p>Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.</p></div>
                
                <div className="input-btn">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">
                            <input type="text" id="email" placeholder="Email Address" {...register("email")} />
                            {/* <p>{errors.email?.message}</p> */}
                            <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/></svg></button>
                        </label>
                        
                    </form>
                </div>
               

                

                

                
            </section>
        </main>
    )
}
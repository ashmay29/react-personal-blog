import InputBox from "../components/input.component"
import googleIcon from "/src/imgs/google.png"
import { Link } from "react-router-dom"
import Animationwrapper from "../common/page-animation"
const UserAuthForm = ({ type }) => {
    return (
        <Animationwrapper>
            <section className="h-cover flex items-center justify-center">
                <form className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-gelasio capitalize text-center mb-24 font-bold">
                        {type == "sign-in" ? "Welcome Back!" : "Join Us Today."}
                    </h1>
                    {
                        type != "sign-in" ?
                            <InputBox
                                name="Full Name"
                                type="text"
                                placeholder="Full name"
                                icon="fi-rr-user"
                            /> : ""
                    }
                    <InputBox
                        name="Email"
                        type="email"
                        placeholder="Email"
                        icon="fi-rr-envelope"
                    />
                    <InputBox
                        name="Password"
                        type="password"
                        placeholder="Password"
                        icon="fi-rr-key"
                    />
                    <button className="btn-dark center mt-14">
                        {type.replace("-", " ")}
                    </button>
                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font bold">
                        <hr className="w-1/2 border-black" />
                        <p>OR</p>
                        <hr className="w-1/2 border-black" />
                    </div>
                    <button className="btn-dark flex items-center justify center gap-4 center">
                        <img src={googleIcon} className="w-5" />
                        continue with google
                    </button>
                    {
                        type == "sign-in" ?
                            <p className="mt-6 text-dark-grey text-xl text-center">Make an account?
                                <Link to="/signup" className="underline text-black text-xl ml-1">
                                    Be a part of the Society
                                </Link>
                            </p>
                            :
                            <p className="mt-6 text-dark-grey text-xl text-center">Already a writer?
                                <Link to="/signin" className="underline text-black text-xl ml-1">
                                    Sign in Here
                                </Link>
                            </p>
                    }
                </form>

            </section>
        </Animationwrapper>

    )
}

export default UserAuthForm
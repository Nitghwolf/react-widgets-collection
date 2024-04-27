import { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => {

    return (
        <div className="min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10">
            <Link to={'/'} className="rounded-md bg-sky-500 px-6 py-2">Home</Link>
        </div>
    )
};

export default ErrorPage;
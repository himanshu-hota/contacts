import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex  flex-col  justify-center items-center text-2xl italic">
            <h1>Oops!</h1>
            <p>You landed on mars </p>
            <p>
                Go to <Link to='..' className="underline">Earth</Link> 
            </p>
        </div>
    );
}


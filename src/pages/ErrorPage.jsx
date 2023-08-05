import { useRouteError } from "react-router-dom";
import errorimg from '../assets/errorimg.jpg'
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="w-screen h-screen flex gap-3 justify-center items-center flex-col" id="error-page">
      <img className="absolute h-screen w-screen object-cover" src={errorimg} />
      <div className="z-10 backdrop-blur-md h-full w-full text-white flex flex-col justify-center items-center gap-6">
        <h1 className="font-Karla text-xl font-bold">Oops!</h1>
        <p className=" w-2/3 text-center">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
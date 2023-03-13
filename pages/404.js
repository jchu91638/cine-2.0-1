import Head from "next/head";

const NotFound = () => (
  <>
    <Head>
      <title>Page Not Found!</title>
    </Head>
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-white">
        I am sorry to inform you that the page or feature that you are
        interacting is not available yet.
      </div>
    </div>
  </>
);

export default NotFound;

import React from 'react';
import Image from "next/image";

const LoadingPage = () => {
    return (
        <div className="flex justify-center items-center h-screen animate-pulse">
            <Image src={"logoipsum-296.svg"} alt={"Loading..."} width={250} height={250} />
        </div>
    );
};

export default LoadingPage;
import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <footer className="flex gap-8 py-4 px-8 bg-black">
            <a className="text-white text-thin text-xl" href="">
                <h1 className="font-extralight">garaji</h1>
            </a>
            <a className="text-white text-thin" href="">
                about us
            </a>
            <a className="text-white text-thin" href="">
                products
            </a>
        </footer>
    );
};

export default Footer;

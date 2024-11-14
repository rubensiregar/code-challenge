import * as React from "react";
import MenuButton from "./MenuButton";

const Footer: React.FunctionComponent = (props) => {
    return (
        <div>
            <div className="flex flex-col h-auto">
                <MenuButton label="services" haref="/services" />
                <MenuButton label="products" haref="/products" />
                <MenuButton label="about us" haref="/about" />
                <MenuButton label="our teams" haref="/teams" />
            </div>
        </div>
    );
};

export default Footer;

import * as React from "react";
import FooterButton from "./FooterButton";

const WAButton: React.FunctionComponent = () => {
    return (
        <div className="fixed p-2 text-xs right-8 bottom-8 z-10 bg-green-400">
            <FooterButton
                label="WA"
                haref="https://wa.me/628982257484"
                target="_blank"
            />
        </div>
    );
};

export default WAButton;

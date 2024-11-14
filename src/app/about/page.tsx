import { Breaker } from "@/components/Breaker";
import * as React from "react";

interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    return <div>
        <Breaker title="so what is garaji"/>
        <Breaker title="you sure already know why you need us"/>
        <Breaker title="not convinced yet? let us hear from our patrons"/>
    </div>;
};

export default AboutPage;

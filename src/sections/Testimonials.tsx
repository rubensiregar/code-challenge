import { Breaker } from "@/components/Breaker";
import ListTesti from "@/components/ListTesti";
import * as React from "react";

const TestimonialSection: React.FunctionComponent = async () => {
    return (
        <div>
            <Breaker title="testimonials" />
            <ListTesti/>
        </div>
    );
};

export default TestimonialSection;

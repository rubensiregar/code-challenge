import * as React from "react";

export interface IBreakerProps {
    title: string;
}

export function Breaker({ title }: IBreakerProps) {
    return (
        <div className="mt-24 w-full text-4xl px-12 py-4 text-center bg-violet-200 uppercase font-thin">
            {title}
        </div>
    );
}

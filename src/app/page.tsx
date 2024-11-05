import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col">
            <nav className="flex gap-8 py-4 px-8 bg-black">
                <a className="text-white text-thin text-8xl" href="">
                    <h1 className="font-extralight">garaji</h1>
                </a>
                <a className="text-white text-thin" href="">about us</a>
                <a className="text-white text-thin" href="">products</a>
            </nav>

            <section id="hero" className="flex h-svh">
                <img
                    className="absolute z-0 w-full"
                    src="./img/hero.jpg"
                    alt="hero"
                />

                <div className="flex h-full items-end absolute p-8 gap-8 ">
                    <div className="flex flex-col rounded-lg w-1/5 p-2 bg-white">
                        <img src="./img/gallery.jpg" alt="" />
                        <h2 className="font-semibold">gallery</h2>
                    </div>
                    <div className="flex flex-col rounded-lg w-1/5 p-2 bg-white">
                        <img src="./img/step.jpg" alt="" />
                        <h2 className="font-semibold">how to</h2>
                    </div>
                </div>
            </section>
            <section></section>
        </div>
    );
}

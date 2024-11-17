import { Breaker } from "@/components/Breaker";
import CardDesc from "@/components/CardDesc";
import ListTesti from "@/components/ListTesti";
import * as React from "react";

const AboutPage: React.FunctionComponent = () => {
    return (
        <div>
            <Breaker title="so what is garaji" />
            <section className="p-8 gap-6 flex flex-col md:gap-12 md:p-16">
                <CardDesc
                    title="quality"
                    desc="Jika kami tau anda tidak akan puas, kami tidak akan berhenti memoles. 
                Alasan tunggal diperlukannya bantuan dari kami adalah 
                agar pelanggan baik dari kelas pemula maupun ahli dapat menikmati potensi terbaik dari model kit yang dimiliki"
                    src="/img/detail/detail-5.webp"
                    alt="effiency detail"
                />
                <CardDesc
                    orientation="a"
                    title="Efficiency"
                    desc="Jika tidak cepat, kami undur diri. Itulah moto kesekian kami yang menekankan bahwa 
                    kami akan merencanakan proses perakitan seoptimal mungkin agar dapat memberikan kualitas yang dijanjikan
                    dengan durasi waktu seminim mungkin"
                    src="/img/detail/detail-3.webp"
                    alt="quality detail"
                />
            </section>
            <Breaker title="you sure are already know why you need us" />
            <section className="p-8 gap-6 flex flex-col md:gap-12 md:p-16">
                <CardDesc
                    title="freeing"
                    desc="Menyerahakn semua beban terberat dalam hobi menyusahkan ini
                    tentu akan sangat melegakan diri dan agenda pribadi. Di samping itu 
                    tidak perlu adanya lagi kekhawatiran akan mengacaukan model kit yang sangat didambakan"
                    src="/img/stand/hor/stand-h-4.webp"
                    alt="effiency detail"
                />
                <CardDesc
                    orientation="a"
                    title="more"
                    desc="Dalam waktu yang lebih singkat, anda dapat mengoleksi lebih banyak model. 
                    Proses pengerjaan pararel kami tentu akan meingkatkan perkembangan koleksi anda secara eksponensial"
                    src="/img/detail/detail-11.webp"
                    alt="quality detail"
                />
            </section>
            <Breaker title="not convinced yet? let us hear from our patrons" />
            <ListTesti />
        </div>
    );
};

export default AboutPage;

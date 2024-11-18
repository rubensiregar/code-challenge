"use client";
import { Breaker } from "@/components/Breaker";
import * as React from "react";
import axios from "axios";
import CardMember from "@/components/CardMember";

const TeamsPage = () => {
    const URL = "https://randomuser.me/api/?results=8";
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get(URL).then((response) => {
            setUsers(response.data.results);
        });
    }, []);
    console.log("DATA RANDOM", users);

    return (
        <div className="">
            <Breaker title="meet our team members" />

            <section className="min-h-[350svh] md:min-h-[175svh] lg:min-h-[100svh]">
                <div className=" md:min-h-screen p-12 gap-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {users.map((u: any, i: number) => (
                        <CardMember
                            src={u.picture.thumbnail}
                            name={`${u.name.first} ${u.name.last}`}
                            city={u.location.city}
                            cell={u.cell}
                            i={i}
                            key={i}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TeamsPage;

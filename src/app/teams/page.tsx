"use client";
import { Breaker } from "@/components/Breaker";
// import { callAPI } from "@/config/axios";
import * as React from "react";
import fetch from "isomorphic-unfetch";
import { callAPI } from "@/config/axios";
import axios from "axios";
import Image from "next/image";
import CardMember from "@/components/CardMember";

const TeamsPage = () => {
    const URL = "https://randomuser.me/api/?results=5";
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get(URL).then((response) => {
            setUsers(response.data.results);
        });
    }, []);
    console.log("DATA RANDOM", users);

    return (
        <div>
            <Breaker title="meet our team members" />

            <section className="p-12 gap-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
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
            </section>
        </div>
    );
};

export default TeamsPage;

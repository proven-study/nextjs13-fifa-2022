"use client";

import { API_URL } from "../../utils/api";
import Standing from "./standing";
import { useRouter, useSearchParams } from "next/navigation";

const getData = async (token: String) => {
  // const res = await fetch(`${API_URL}/standings`, {
  const res = await fetch(
    `http://65.1.169.125:3050/api/v1/cors-resolver?${API_URL}/standings`,
    {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // next: {
      //   revalidate: 10,
      // },
    }
  );
  const data = await res.json();

  console.log("data", data);

  if (data?.error?.length > 0) {
    return {
      status: "error",
      message: data?.error,
      data: null,
    };
  } else {
    return {
      status: "success",
      message: null,
      data: data.data,
    };
  }
};


const Standings = async () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  let token = searchParams.get("token") || "";

  if (token?.length <= 0) {
    const _token = await JSON.parse(localStorage.getItem("token") || "");
    console.log("token", _token);

    if (token?.length > 0) {
      token = _token;
    } else {
      router.push("/login");
    }
  }

  const standings = (await getData(token)) || {};

  console.log("standings", standings);

  return (
    <div>
      {/* {standings?.status === "error" && <p>{standings?.message}</p>}
      {standings?.status === "success" && (
        <div className="grid grid-cols-1 gap-4 mx-2 sm:grid-cols-2">
          {standings?.data?.map(({ _id, group, teams }: any) => (
            <Standing key={_id} id={_id} group={group} teams={teams} />
          ))}
        </div>
      )} */}
      test: {JSON.stringify(standings)}
    </div>
  );
};

export default Standings;

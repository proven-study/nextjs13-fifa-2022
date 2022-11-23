import { API_URL } from "../../utils/api";
import Standing from "./standing";

const getData = async (token: String) => {
  const res = await fetch(`${API_URL}/standings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 10,
    },
  });
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

interface StandingsProps {
  params: any;
  searchParams: any;
}

const Standings = async (
  { params, searchParams }: StandingsProps,
) => {
  console.log("params", params);

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdlMWY3MTU3MDgxNjZkMDdjNDY2NGUiLCJpYXQiOjE2NjkyMTAwMzAsImV4cCI6MTY2OTI5NjQzMH0.CF-YnTb8tc8-gX7JvIBsaVu5HVE99hLrk8coqnytsaw";

  const standings = await getData(token);

  console.log("standings", standings);

  return (
    <div>
      {standings?.status === "error" && <p>{standings?.message}</p>}
      {standings?.status === "success" && (
        <div className="grid grid-cols-2 gap-4">
          {standings?.data?.map(({ _id, group, teams }: any) => (
            <Standing key={_id} id={_id} group={group} teams={teams} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Standings;

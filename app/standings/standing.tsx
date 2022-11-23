import React from "react";

interface Team {
  team_id: String;
  mp: String;
  w: String;
  l: String;
  d: String;
  gf: String;
  ga: String;
  gd: String;
  pts: String;
  name_fa: String;
  name_en: String;
  flag: String;
}

interface StandingProps {
  id: String;
  group: String;
  teams: Array<Team>;
}

const Standing = ({ id, group, teams }: StandingProps) => {
  console.log("teams", teams);
  
  return (
    <div className="p-4 rounded-lg shadow bg-gray-50">
      <div className="grid grid-cols-7 text-xs">
        <p className="col-span-2 font-bold">Group {group}</p>
        <p className="mx-auto">Played</p>
        <p className="mx-auto">Won</p>
        <p className="mx-auto">Lost</p>
        <p className="mx-auto">Draw</p>
        <p className="mx-auto">Points</p>
      </div>
    </div>
  );
};

export default Standing;

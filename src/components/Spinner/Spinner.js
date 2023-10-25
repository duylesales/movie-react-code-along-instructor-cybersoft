import React from "react";
import { SyncLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="h-screen w-screen bg-black fixed z-10 flex justify-center items-center">
      <SyncLoader size={20} color="#36d7b7" />
    </div>
  );
}

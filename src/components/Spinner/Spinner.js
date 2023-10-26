import React from "react";
import { useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerReducer);
  return isLoading ? (
    <div className="h-screen w-screen bg-black fixed z-10 flex justify-center items-center">
      <SyncLoader size={20} color="#36d7b7" />
    </div>
  ) : (
    <></>
  );
}

import React, { useEffect, useState } from "react";
import { movieService } from "../../../service/service";

export default function ListMovie() {
  const [list, setList] = useState([]);
  useEffect(() => {
    movieService
      .getList()
      .then((res) => {
        console.log(res);
        setList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>ListMovie</div>;
}

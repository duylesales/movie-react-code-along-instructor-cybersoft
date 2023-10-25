import React, { useEffect } from "react";
import ListMovie from "./ListMovie/ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import { movieService } from "../../service/service";

export default function HomePage() {
  
  return (
    <div>
      <ListMovie />
      <TabMovie />
    </div>
  );
}

import { useContext } from "react";
import { RoutinesContext } from "../components/routines/RoutinesProvider";

export default function useRoutines() {
  return useContext(RoutinesContext);
}

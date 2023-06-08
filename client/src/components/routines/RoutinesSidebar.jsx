import { Link } from "react-router-dom";
import useRoutines from "../../hooks/useRoutines";
export default function RoutinesSidebar() {
  const { myRoutines } = useRoutines();
  return (
    <div className="bg-slate-400">
      <h1>Routines Sidebar</h1>
      <ul>
        {myRoutines.map((routine) => {
          return (
            <Link key={routine.id} to={`/dashboard/routines/${routine.id}`}>
              <li>{routine.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
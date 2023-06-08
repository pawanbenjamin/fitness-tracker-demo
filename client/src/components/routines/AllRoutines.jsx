import CreateRoutineForm from "./CreateRoutineForm";
export default function AllRoutines({ setMyRoutines }) {
  return (
    <div>
      <h1>All Routines</h1>
      <CreateRoutineForm setMyRoutines={setMyRoutines} />
    </div>
  );
}

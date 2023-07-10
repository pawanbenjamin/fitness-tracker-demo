import { useEffect, useState } from "react";
import { fetchAllActivities } from "../../api/activities";

export default function AllActivities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function getAllActivities() {
      const { data } = await fetchAllActivities();
      setActivities(data);
    }
    getAllActivities();
  }, []);

  return (
    <div>
      {activities.map((act) => {
        return <p>{act.name}</p>;
      })}
    </div>
  );
}

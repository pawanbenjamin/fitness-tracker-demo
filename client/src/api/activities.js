export async function fetchAllActivities() {
  const response = await fetch("/api/activities");
  if (!response.ok) {
    throw {
      message: "Failed to fetch Activities",
    };
  }
  const { success, message, data } = await response.json();
  return { success, message, data };
}

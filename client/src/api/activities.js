export async function fetchAllActivities() {
  const response = await fetch("/api/activities");
  const { success, message, data } = await response.json();
  if (!success) {
    throw {
      message,
    };
  }
  return { success, message, data };
}

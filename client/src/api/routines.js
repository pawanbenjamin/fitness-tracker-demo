export async function createRoutine(name, goal) {
  const response = await fetch("/api/routines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, goal })
  });
  const { success, message, data } = await response.json();
  if (!success) {
    throw {
      message
    };
  }
  return { success, message, data };
}

export async function fetchMyRoutines() {
  const response = await fetch("/api/routines/myRoutines");
  const { success, message, data } = await response.json();
  if (!success) {
    throw {
      message
    };
  }
  return { success, message, data };
}

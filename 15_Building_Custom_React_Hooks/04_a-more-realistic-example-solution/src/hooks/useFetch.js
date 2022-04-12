import { useState, useEffect, useCallback } from "react";

function useFetch(url, method, dataToSend) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method,
        body: dataToSend ? JSON.stringify(dataToSend) : null,
        // headers: dataToSend ? { "Content-Type": "application/json" } : {},
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      if (method.toLowerCase() === "get") {
        const data = await response.json();
        const loadedTasks = [];
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
        setTasks(loadedTasks);
      } else if (method.toLowerCase() === "post") {
        const data = await response.json();
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: dataToSend };
        setTasks(createdTask);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [url, dataToSend, method]);

  useEffect(() => {
    fetchTasks();
  }, [url, dataToSend, method, fetchTasks]);

  return { isLoading, error, tasks };
}

export default useFetch;

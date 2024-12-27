import axios from 'axios';

const DEFAULT_HEADER = {
  "Content-Type": "application/json; charset=utf-8",
};

export const fetchData = async <T, D = unknown>(
  url: string,
  method: string,
  data?: D,
  headers = DEFAULT_HEADER
): Promise<T> => {
  try {
    const response = await axios({
      url,
      method,
      headers,
      data
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

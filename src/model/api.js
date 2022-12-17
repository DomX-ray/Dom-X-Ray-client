import axios from "axios";

export const getParsedData = async (pathName, searchUrl) => {
  try {
    const params = new URLSearchParams([["searchUrl", searchUrl]]);

    const response = await axios.get(
      `${SERVER_URL}${pathName}`,
      { params },
      { withCredentials: true }
    );

    return response.data.parsedData;
  } catch {
    window.location.href = "/";
  }
};

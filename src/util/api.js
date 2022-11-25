import axios from "axios";

export const getParsedData = async (pathName, searchUrl) => {
  const server = process.env.SERVER_URL;
  const params = new URLSearchParams([["searchUrl", searchUrl]]);

  const response = await axios.get(
    `${server}${pathName}`,
    { params },
    { withCredentials: true }
  );

  return response.data.parsedData;
};

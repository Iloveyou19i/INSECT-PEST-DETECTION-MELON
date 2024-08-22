import axios from "axios";
import { detectPlants } from "./detection";

export const POST = async (req) => {
  try {
    const { imageUrl } = await req.json();

    const res = await axios({
      method: "POST",
      url: "https://detect.roboflow.com/pests-in-cucumber-plants-jegly/2",
      params: {
        api_key: "M42WszbMjuYmG5DpSsHL",
        image: imageUrl,
      },
    });

    const data = await res.data;

    // const bufferedOutput = await detectPlants(data, imageUrl);

    return Response.json({ data, bufferedOutput });
  } catch (error) {
    console.error(error);
  }
};

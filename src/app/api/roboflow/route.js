import axios from "axios";
import { detectPlants } from "./detection";
import { auth } from "@/lib/auth";

export const POST = async (req) => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("User unauthorized.");

    const { imageUrl } = await req.json();

    // const res = await axios({
    //   method: "POST",
    //   url: "https://detect.roboflow.com/pests-in-cucumber-plants-jegly/2",
    //   params: {
    //     api_key: "M42WszbMjuYmG5DpSsHL",
    //     image: imageUrl,
    //   },
    // });

    const res = await axios({
      method: "POST",
      url: "https://detect.roboflow.com/melon-cantaloupe-pest/3",
      params: {
        api_key: "M42WszbMjuYmG5DpSsHL",
        image: imageUrl,
      },
    });

    const data = await res.data;

    console.log(data);

    const image = await detectPlants(data, imageUrl);

    return Response.json({ data, image });
  } catch (error) {
    console.error(error);
  }
};

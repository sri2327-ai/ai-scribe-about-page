import axios from "axios";
import { objToForm } from "./objectToForm";
import { environmentVariables as env } from "../environmentVariables";

export const PostApi = async (
  actionVal: any,
  moduleVal: any,
  payloadType: string,
  body: any,
  respType?: string
) => {
  let payload;

  if (payloadType === "formData") {
    payload = objToForm(body);
  }

  console.log("log");

  const url = env.BASE_URL;

  const token = env.TOKEN;

  try {
    const res = await axios({
      method: "post",
      url,
      params: {
        actionVal,
        moduleVal: moduleVal || "Support",
        ...(payloadType === "query" && { ...body }),
      },
      headers: {
        "x-token": token,
      },
      responseType: respType === "arraybuffer" ? "arraybuffer" : "json",
      ...((payloadType === "formData" || payloadType === "reqBody") && {
        data: payloadType === "formData" ? payload : { ...body },
      }),
    });
    return res?.data;
  } catch (error) {
    console.log({ error });
  }
};

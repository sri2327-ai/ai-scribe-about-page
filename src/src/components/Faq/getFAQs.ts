"use server";

import { PostApi } from "@/app/api/PostApi";
import { environmentVariables } from "@/app/environmentVariables";

export async function getFAQs(id: undefined | any) {
  try {
    const data = await PostApi("getFaqList", "Support", "reqBody", {
      OrganizationID: environmentVariables.ORGANIZATION_ID,
      categoryArr: id || [],
    });

    return data || null;
  } catch (error) {
    return null;
  }
}

export const getCategories = async () => {
  const payload = {
    OrganizationID: environmentVariables.ORGANIZATION_ID,
  };
  try {
    const data = await PostApi(
      "getFaqCategoryListV1",
      "Support",
      "reqBody",
      payload
    );

    return data || null;
  } catch (error) {
    return null;
  }
};

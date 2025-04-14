"use server";

import { PostApi } from "@/app/api/PostApi";
import { environmentVariables } from "@/app/environmentVariables";

export const getBlogs = async (
  pageIndex: number,
  categoryId?: number | string | Array<number | string>
) => {
  try {
    const payload = {
      OrganizationID: environmentVariables.ORGANIZATION_ID,
      page: pageIndex,
      limit: 8,
      categoryArr: categoryId || [],
    };

    const data = await PostApi(
      "getOrganizationBlogsV1",
      "Support",
      "reqBody",
      payload
    );

    return data || null;
  } catch (error) {
    return null;
  }
};

export const getCategories = async () => {
  try {
    const payload = {
      OrganizationID: environmentVariables.ORGANIZATION_ID,
    };

    const data = await PostApi(
      "getCategoryListV1",
      "Support",
      "reqBody",
      payload
    );

    return data || null;
  } catch (err) {
    return null;
  }
};

import * as axiosUtility from "../../utility/axiosInstance";

export const whiskeyAction = {
  async requestWhiskeyList(
    page: number = 1,
    perPage: number = 8
  ): Promise<void> {
    const { djangoAxiosInstance } = axiosUtility.createAxiosInstances();

    try {
      const res = await djangoAxiosInstance.get("/whiskey/whiskey-list", {
        params: { page, perPage },
      });
      console.log("Response Data:", res.data);

      this.whiskeyList = res.data.dataList;
      this.totalPages = res.data.totalPages;
      this.currentPage = page;
    } catch (error) {
      console.log("requestWhiskeyList() 중 에러:", error);
    }
  },
  async requestWhiskeyCreate(imageFormData: FormData): Promise<void> {
    console.log(`requestWhiskeyCreate(): ${imageFormData}`);
    const { djangoAxiosInstance } = axiosUtility.createAxiosInstances();

    try {
      const res = await djangoAxiosInstance.post(
        "/whiskey/whiskey-create",
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response Data:", res.data);
    } catch (error) {
      console.log("requestWhiskeyCreate() 중 에러:", error);
    }
  },
  async requestWhiskeyById(id: string): Promise<any> {
    const { djangoAxiosInstance } = axiosUtility.createAxiosInstances();

    try {
      const res = await djangoAxiosInstance.get(`/whiskey/whiskey-read/${id}`);
      console.log("Response Data:", res.data);
      return res.data;
    } catch (error) {
      console.log("requestWhiskeyById() 중 에러:", error);
      throw error;
    }
  },
};

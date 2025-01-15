import * as axiosUtility from "../../utility/axiosInstance";

export const wineAction = {
  async requestWineList(page: number = 1, perPage: number = 8): Promise<void> {
    const { djangoAxiosInstance } = axiosUtility.createAxiosInstances();

    try {
      const res = await djangoAxiosInstance.get("/wine/wine-list", {
        params: { page, perPage },
      });
      console.log("Response Data:", res.data);

      this.wineList = res.data.dataList;
      this.totalPages = res.data.totalPages;
      this.currentPage = page;
    } catch (error) {
      console.log("requestWineList() 중 에러:", error);
    }
  },
  async requestWineCreate(imageFormData: FormData): Promise<void> {
    console.log(`requestWineCreate(): ${imageFormData}`);
    const { djangoAxiosInstance } = axiosUtility.createAxiosInstances();

    try {
      const res = await djangoAxiosInstance.post(
        "/wine/wine-create",
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response Data:", res.data);
    } catch (error) {
      console.log("requestWineCreate() 중 에러:", error);
    }
  },
  async requestWineById(id: string): Promise<any> {
    const { djangoAxiosInstance } = axiosUtility.createAxiosInstances();

    try {
      const res = await djangoAxiosInstance.get(`/wine/wine-read/${id}`);
      console.log("Response Data:", res.data);
      return res.data;
    } catch (error) {
      console.log("requestWineRead() 중 에러:", error);
      throw error;
    }
  },
};

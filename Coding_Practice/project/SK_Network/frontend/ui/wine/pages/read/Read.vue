<template>
  <v-container>
    <h2>상품 세부 사항 보기</h2>

    <!-- 로딩 중일 때 스피너 표시 -->
    <v-row v-if="isLoading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="grey lighten-5" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <!-- 이미지 표시 -->
        <v-img
          :src="getWineImageUrl(wine.image)"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>상품 정보</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="wine.title" readonly label="상품명" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    v-model="wine.description"
                    readonly
                    label="상품 설명"
                    auto-grow
                    rows="3"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="wine.price"
                    readonly
                    label="가격"
                    type="number"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>

        <v-btn
          color="primary"
          @click="onPurchase"
          class="action-button"
          style="float: right"
        >
          <v-icon>mdi-cart</v-icon>
          <span class="button-text">구매하기</span>
        </v-btn>

        <v-btn
          color="success"
          @click="onAddToCart"
          class="action-button"
          style="float: right"
        >
          <v-icon>mdi-cart-plus</v-icon>
          <span class="button-text">장바구니에 추가</span>

          <v-dialog v-model="isCheckoutDialogVisible" max-width="500">
            <v-card>
              <v-card-title>장바구니에 추가</v-card-title>
              <v-card-text>
                장바구니에 추가 되었습니다. 확인하시겠습니까?
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="isCheckoutDialogVisible = false"
                  >취소</v-btn
                >
                <v-btn color="blue darken-1" text @click="goToCart">확인</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
        <!-- 목록으로 돌아가기 -->
        <NuxtLink to="/wine/list" class="router-link no-underline">
          <v-btn color="secondary" class="action-button" style="float: right">
            <v-icon>mdi-arrow-left</v-icon>
            <span class="button-text">목록으로 돌아가기</span>
          </v-btn>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "~/cart/stores/cartStore";
import { useWineStore } from "../../stores/wineStore";

interface ImageModule {
  default: string;
}

const wineStore = useWineStore();
const cartStore = useCartStore();
const isCheckoutDialogVisible = ref(false);
const route = useRoute();
const wineId = route.params.id;
console.log(`현재 읽은 id: ${wineId}`);

const isLoading = ref(true);
const wine = ref({
  id: "",
  title: "",
  price: "",
  description: "",
  image: "",
});

const images = import.meta.glob("@/assets/images/uploadImages/*", {
  eager: true,
}) as Record<string, ImageModule>;

const getWineImageUrl = (imageName: string) => {
  console.log(`imageName: ${imageName}`);
  const imagePathKey = `/assets/images/uploadImages/${imageName}`;
  console.log("Generated image path key:", imagePathKey);
  const imagePath = images[imagePathKey];
  return imagePath ? imagePath.default : "/assets/images/default-image.jpg";
};

const router = useRouter();

const onAddToCart = async () => {
  if (wine.value) {
    isCheckoutDialogVisible.value = true;
    const userToken = localStorage.getItem("userToken") || "";

    const requestForm = {
      id: Number(wine.value.id),
      userToken: userToken,
      quantity: 1,
    };

    try {
      const response = await cartStore.requestCartSave(requestForm);
      console.log(
        "장바구니에 아이템을 성공적으로 추가했습니다.",
        response.data
      );
    } catch (error) {
      console.error("장바구니 추가에 실패했습니다:", error);
    }
  }
};

const onPurchase = async () => {
  if (wine.value) {
    const userToken = localStorage.getItem("userToken") || "";

    const requestForm = {
      id: Number(wine.value.id),
      userToken: userToken,
      quantity: 1,
    };

    try {
      const response = await cartStore.requestCartSave(requestForm);
      console.log(
        "장바구니에 아이템을 성공적으로 추가했습니다.",
        response.data
      );

      router.push("/cart/list");
    } catch (error) {
      console.error("장바구니 추가에 실패했습니다:", error);
    }
  }
};

const goToCart = async () => {
  router.push("/cart/list");
};

onMounted(async () => {
  try {
    const { id } = route.params;

    if (!id) {
      throw new Error("ID is not provided.");
    }

    const fetchedWine = await wineStore.requestWineById(id as string);

    if (fetchedWine) {
      wine.value = fetchedWine;
      console.log("Wine image:", wine.value.image);
    } else {
      console.error("Wine not found for ID:", id);
    }
  } catch (error) {
    console.error("Failed to fetch wine:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped></style>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="beerTitle" label="맥주 이름" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field v-model="beerPrice" label="가격" type="number" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea v-model="beerDescription" label="맥주 정보" auto-grow />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-file-input
          v-model="beerImage"
          label="맥주 이미지 파일"
          prepend-icon="mdi-camera"
        />
      </v-col>
    </v-row>

    <v-row v-if="uploadedFileName">
      <v-col cols="12">
        <p>업로드된 파일: {{ uploadedFileName }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-right">
        <v-btn color="primary" @click="onSubmit">작성 완료</v-btn>
        <v-btn color="error" @click="onCancel" class="ml-2">취소</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
definePageMeta({
  name: "BeerRegisterPage",
});

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useBeerStore } from "../../stores/beerStore";

const router = useRouter();
const beerStore = useBeerStore();

const beerTitle = ref("");
const beerPrice = ref(0);
const beerDescription = ref("");
const beerImage = ref(null);
const uploadedFileName = ref("");

const onSubmit = async () => {
  try {
    if (beerImage.value) {
      const formData = new FormData();
      formData.append("beerTitle", beerTitle.value);
      formData.append("beerPrice", beerPrice.value.toString());
      formData.append("beerDescription", beerDescription.value);
      formData.append("beerImage", beerImage.value);

      await beerStore.requestBeerCreate(formData);

      uploadedFileName.value = beerStore.uploadedFileName;

      router.push({ name: "Beer" });
    } else {
      console.error("이미지 파일을 선택하세요!");
    }
  } catch (error) {
    console.error("상품 등록 실패:", error);
  }
};

const onCancel = () => {
  console.log("취소 버튼 눌렀음");
  router.back();
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="wineTitle" label="와인 이름" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field v-model="winePrice" label="가격" type="number" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea v-model="wineDescription" label="와인 정보" auto-grow />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-file-input
          v-model="wineImage"
          label="와인 이미지 파일"
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
  name: "WineRegisterPage",
});

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useWineStore } from "../../stores/wineStore";

const router = useRouter();
const wineStore = useWineStore();

const wineTitle = ref("");
const winePrice = ref(0);
const wineDescription = ref("");
const wineImage = ref(null);
const uploadedFileName = ref("");

const onSubmit = async () => {
  console.log("상품 등록 버튼 눌렀음");

  try {
    if (wineImage.value) {
      const formData = new FormData();
      formData.append("wineTitle", wineTitle.value);
      formData.append("winePrice", winePrice.value.toString());
      formData.append("wineDescription", wineDescription.value);
      formData.append("wineImage", wineImage.value);

      await wineStore.requestWineCreate(formData);

      uploadedFileName.value = wineStore.uploadedFileName;

      router.push({ name: "Wine" });
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

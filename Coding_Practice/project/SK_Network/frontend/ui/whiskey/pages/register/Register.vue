<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="whiskeyTitle" label="위스키 이름" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-text-field v-model="whiskeyPrice" label="가격" type="number" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="whiskeyDescription"
          label="위스키 정보"
          auto-grow
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-file-input
          v-model="whiskeyImage"
          label="위스키 이미지 파일"
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
  name: "WhiskeyRegisterPage",
});

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useWhiskeyStore } from "../../stores/whiskeyStore";

const router = useRouter();
const whiskeyStore = useWhiskeyStore();

const whiskeyTitle = ref("");
const whiskeyPrice = ref(0);
const whiskeyDescription = ref("");
const whiskeyImage = ref(null);
const uploadedFileName = ref("");

const onSubmit = async () => {
  console.log("상품 등록 버튼 눌렀음");

  try {
    if (whiskeyImage.value) {
      const formData = new FormData();
      formData.append("whiskeyTitle", whiskeyTitle.value);
      formData.append("whiskeyPrice", whiskeyPrice.value.toString());
      formData.append("whiskeyDescription", whiskeyDescription.value);
      formData.append("whiskeyImage", whiskeyImage.value);

      await whiskeyStore.requestWhiskeyCreate(formData);

      uploadedFileName.value = whiskeyStore.uploadedFileName;

      router.push({ name: "Whiskey" });
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

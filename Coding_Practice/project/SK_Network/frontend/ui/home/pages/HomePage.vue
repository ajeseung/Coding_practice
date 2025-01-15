<template>
  <div
    class="pa-0"
    :style="{
      backgroundImage:
        'url(https://www.theguru.co.kr/data/photos/20210728/art_16263394591829_693b10.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '120px',
      width: '100%',
      margin: '0',
    }"
  >
    <v-container>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-col class="text-center">
          <h2 :style="{ color: 'red', fontSize: '48px' }" class="mb-4">
            Check out various alcohol!
          </h2>
        </v-col>
      </v-row>

      <v-row>
        <h2>오늘의 추천</h2>
      </v-row>

      <!-- 기능 카드 섹션 -->
      <v-row class="mt-6" align="start">
        <v-col
          v-for="(item, index) in randomItems"
          :key="index"
          cols="12"
          sm="3"
          md="3"
        >
          <v-card>
            <v-img :src="item.image" height="200"></v-img>
            <v-card-title class="text-h6">{{ item.name }}</v-card-title>
            <v-card-subtitle>Price: ${{ item.price }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text @click="goToDetail(item.id, item.category)"
                >LINK HERE</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Footer 섹션 -->
      <v-row>
        <v-col cols="12" class="text-center">
          <v-divider></v-divider>
          <p>&copy; Drink.alcohol();</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// asset 파일 불러오기기
const images = import.meta.glob(
  "@/assets/images/uploadImages/*.{png,jpg,webp}",
  { eager: true }
);

// 상품 맵핑
const beerProducts = [
  {
    id: 1,
    name: "카스",
    price: 1400,
    image:
      images["/assets/images/uploadImages/cass.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 2,
    name: "테라",
    price: 1980,
    image:
      images["/assets/images/uploadImages/terra.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 3,
    name: "아사히",
    price: 3000,
    image:
      images["/assets/images/uploadImages/asahi.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 4,
    name: "코로나",
    price: 2650,
    image:
      images["/assets/images/uploadImages/corona.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 5,
    name: "타이거",
    price: 3000,
    image:
      images["/assets/images/uploadImages/tiger.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 6,
    name: "삿포로",
    price: 3000,
    image:
      images["/assets/images/uploadImages/saporo.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 7,
    name: "기린 이치방",
    price: 3000,
    image:
      images["/assets/images/uploadImages/kirin.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 8,
    name: "하이트",
    price: 2170,
    image:
      images["/assets/images/uploadImages/hite.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 9,
    name: "켈리",
    price: 2170,
    image:
      images["/assets/images/uploadImages/kelly.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 10,
    name: "기네스",
    price: 3000,
    image:
      images["/assets/images/uploadImages/guinness.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
];

const wineProducts = [
  {
    id: 1,
    name: "룽가로티 루베스코",
    price: 39000,
    image:
      images["/assets/images/uploadImages/sanje.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 2,
    name: "메이오미 피아누",
    price: 90000,
    image:
      images["/assets/images/uploadImages/pinonua.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 3,
    name: "본테라, 메를로",
    price: 60000,
    image:
      images["/assets/images/uploadImages/bontera.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 4,
    name: "소노마 이스테이트 카베르네 소비뇽",
    price: 85000,
    image:
      images["/assets/images/uploadImages/carbernet.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 5,
    name: "19크라임, 매저스트레이트",
    price: 67200,
    image:
      images["/assets/images/uploadImages/shira.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 6,
    name: "데이비드 앤 나디아 슈냉블랑 2017",
    price: 61800,
    image:
      images["/assets/images/uploadImages/blang.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 7,
    name: "100 휴겔 그랑우어 부르군더",
    price: 58000,
    image:
      images["/assets/images/uploadImages/pino.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 8,
    name: "곤트룸, 리슬링 로얄 블루",
    price: 39000,
    image:
      images["/assets/images/uploadImages/reasle.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 9,
    name: "프뤼 드 메르",
    price: 36000,
    image:
      images["/assets/images/uploadImages/sovi.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 10,
    name: "루이자도 부르고뉴 샤도네이",
    price: 35000,
    image:
      images["/assets/images/uploadImages/sale.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
];

const whiskeyProducts = [
  {
    id: 1,
    name: "발렌타인 12년",
    price: 49000,
    image:
      images["/assets/images/uploadImages/bal12.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 2,
    name: "발렌타인 21년",
    price: 177000,
    image:
      images["/assets/images/uploadImages/bal21.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 3,
    name: "발렌타인 30년",
    price: 524900,
    image:
      images["/assets/images/uploadImages/bal30.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 4,
    name: "글렌피딕 12년",
    price: 67500,
    image:
      images["/assets/images/uploadImages/glen12.png"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 5,
    name: "글렌피딕 21년",
    price: 279000,
    image:
      images["/assets/images/uploadImages/glen21.jpg"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 6,
    name: "글렌피딕 30년",
    price: 1250000,
    image:
      images["/assets/images/uploadImages/glen30.webp"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 7,
    name: "조니워커 그린",
    price: 69000,
    image:
      images["/assets/images/uploadImages/jonigreen.webp"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 8,
    name: "조니워커 블랙",
    price: 39000,
    image:
      images["/assets/images/uploadImages/joniblack.webp"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 9,
    name: "조니워커 블루",
    price: 338000,
    image:
      images["/assets/images/uploadImages/joniblue.webp"]?.default ||
      "/assets/images/fixed/default.png",
  },
  {
    id: 10,
    name: "조니워커 레드",
    price: 22000,
    image:
      images["/assets/images/uploadImages/jonired.webp"]?.default ||
      "/assets/images/fixed/default.png",
  },
];

// random item 정의
const randomItems = ref([]);

const router = useRouter();

// 사진 랜덤하게 고르기기
const generateRandomItems = () => {
  const allProducts = [
    ...beerProducts.map((product) => ({ ...product, category: "beer" })),
    ...wineProducts.map((product) => ({ ...product, category: "wine" })),
    ...whiskeyProducts.map((product) => ({ ...product, category: "whiskey" })),
  ];
  const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);
  randomItems.value = shuffledProducts.slice(0, 8);
};

// 상세 페이지
const goToDetail = (id, category) => {
  router.push(`/${category}/read/${id}`);
};

onMounted(() => {
  generateRandomItems();
});
</script>

<style scoped></style>

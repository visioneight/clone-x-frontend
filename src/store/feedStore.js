import { defineStore } from 'pinia'

// 테스트용 초기 피드 데이터
const testData = [
  { id: 11, content: "코딩은 재밌어!", user: { id: 12, name: "테스터" } },
  { id: 10, content: "JS 디버깅 중…", user: { id: 12, name: "테스터" } },
  { id: 9, content: "커피 한 잔의 여유...", user: { id: 13, name: "다미장" } },
  { id: 6, content: "주말에 드라마 몰아보기", user: { id: 13, name: "다미장" } },
  { id: 5, content: "우리 집 강아지 너무 귀여워", user: { id: 13, name: "다미장" } },
  { id: 4, content: "2025년에는 꼭 운동한다!", user: { id: 11, name: "user" } },
  { id: 3, content: "디버깅만 몇 시간째…", user: { id: 11, name: "user" } },
  { id: 2, content: "아침 커피로 하루 시작", user: { id: 11, name: "user" } },
  { id: 1, content: "오늘도 멋진 하루 되세요!", user: { id: 11, name: "user" } },
]

export const useFeedStore = defineStore('feed', {
  state: () => ({
    feedData: [],
  }),

  actions: {
    // action으로 초기 데이터 state에 삽입
    getFeedData() {
      this.feedData = testData
    },
    // 삭제 기능
    removeFeed(id) {
      this.feedData = this.feedData.filter((feed) => feed.id !== id)
    },
  },
})

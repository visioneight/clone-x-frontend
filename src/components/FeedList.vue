<template>
  <div class="feed-list-container">
    <div v-if="feedStore.feedData.length > 0">
      <FeedItem
        v-for="feed in feedStore.feedData"
        :key="feed.id"
        :feed="feed"
      />
    </div>
    <div v-else>
      <div>피드가 없습니다.</div>
    </div>
  </div>
</template>

<script>
import FeedItem from './FeedItem.vue'
import { useFeedStore } from '@/store/feedStore.js'

export default {
  name: "FeedList",
  components: { FeedItem },
  setup() {
    const feedStore = useFeedStore()
    feedStore.getFeedData() // state에 초기 데이터 삽입
    return { feedStore }
  }
}
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}
</style>

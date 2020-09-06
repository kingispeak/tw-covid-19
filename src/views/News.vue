<template>
  <div class="container">
    <div class="text-center m-5">
      <h1>
        COVID-19 News
        <button
          class="btn"
          @click="refresh"
          data-toggle="tooltip"
          data-placement="top"
          title="清除快取"
        >
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </h1>
    </div>
    <div class="card-columns">
      <draggable ghost-class="ghost">
        <div class="card" v-for="(article, key) in articles" :key="key">
          <img
            v-if="article.urlToImage"
            class="card-img-top"
            v-lazy="article.urlToImage"
            alt="new cover"
          />
          <div class="card-body">
            <h5 class="card-title">
              <a :href="article.url" target="_blank">{{ article.title }}</a>
            </h5>
            <p class="card-text">{{ article.description }}</p>
            <p class="card-text">
              <small class="text-muted">
                {{ article.author }} - {{ article.publishedAt }}
              </small>
            </p>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import debounce from 'lodash/debounce';
import storage from '@/utils/LocalStorageExpires';

const STORAGE_KEY = 'NEWS';
const API_KEY = '7ac26046239f41ce9280c78b24fdbd54';
const KEYWORD = '疫情';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=tw&q=${KEYWORD}&apiKey=${API_KEY}`;
let notification = {
  title: 'COVID-19',
  options: {
    body: '新聞已更新'
  },
  events: {}
};

export default {
  name: 'News',
  components: {
    draggable
  },
  data() {
    return {
      articles: null
    };
  },
  created() {
    if (storage.get(STORAGE_KEY)) {
      this.articles = storage.get(STORAGE_KEY);
    } else {
      this.fetchNews();
    }
  },
  mounted() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  methods: {
    fetchNews() {
      this.$http
        .get(NEWS_API_URL)
        .then(response => {
          this.articles = response.data.articles;
          storage.set(STORAGE_KEY, this.articles);
          this.$notification.show(
            notification.title,
            notification.options,
            notification.events
          );
        })
        .catch(error => {
          console.error('Error', error);
        });
    },
    refresh: debounce(function () {
      this.fetchNews();
    }, 3000)
  }
};
</script>

<style scoped lang="scss">
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>

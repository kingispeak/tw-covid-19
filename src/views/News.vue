<template>
  <div class="container">
    <div class="text-center m-5">
      <h1>COVID-19 News</h1>
    </div>
    <div class="card-columns">
      <div class="card" v-for="(article, key) in articles" :key="key">
        <img
          v-if="article.urlToImage"
          class="card-img-top"
          :src="article.urlToImage"
          alt="new cover"
        />
        <div class="card-body">
          <h5 class="card-title">
            <a :href="article.url" target="_blank">{{ article.title}}</a>
          </h5>
          <p class="card-text">{{ article.description}}</p>
          <p class="card-text">
            <small class="text-muted">{{ article.author}} - {{ article.publishedAt}}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      articles: null
    };
  },
  created: function() {
    this.$http
      .get(
        'https://newsapi.org/v2/top-headlines?apiKey=7ac26046239f41ce9280c78b24fdbd54&q=疫情&country=tw'
      )
      .then(response => {
        this.articles = response.data.articles;
      })
      .catch(error => {
        console.error('Error', error);
      });
  }
};
</script>

<style scoped lang="scss">
</style>
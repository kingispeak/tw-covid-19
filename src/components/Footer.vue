<template>
  <footer class="text-center py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          &copy; 2020 -
          <a :href="$conf.URL" target="_blank">
            Fong
          </a>
        </div>
        <div class="col-md-6">
          <ul class="list-inline">
            <li class="list-inline-item">資料來源 :</li>
            <li class="list-inline-item">
              <a href="https://data.gov.tw/dataset/118038" class="text-primary">
                疾管署
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/pomber/covid19" target="_blank">
                pomber/covid19
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>

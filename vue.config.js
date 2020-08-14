module.exports = {
  "pluginOptions": {
    "electronBuilder": {
      "nodeIntegration": true,
      "enableRemoteModule": true
    }
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        "vue$": "vue/dist/vue.esm.js"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
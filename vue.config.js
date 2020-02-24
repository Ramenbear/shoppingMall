module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //起别名
        //@就表示src
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

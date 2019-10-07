
module.exports = {
  siteName: 'Ohlala Paris',
  siteDescription: 'Creperie Ohlala Paris 🇰🇷x🇫🇷 Brunch / Dessert / Beverage AM11:30 _ PM10:30 (월요일 휴무)',
  siteUrl: 'http://ohlalaparis.kr',
  shopAddress: '서울 종로구 서순라길 127',
  shopAddressUrl: 'https://goo.gl/maps/rkkC925a8jKVqaHk8',
  shopTelephone: '070-4128-0008',
  instagramUrl: 'https://www.instagram.com/ohlalaparis__official',
  plugins: [
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'ohlalaparis__official', // Instagram username
        typeName: 'InstagramPhoto' // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      }
    }
  ]
}

# Weather App

## Yayınlandı: https://630f148a08b9a26dcb65be56--rococo-pony-414274.netlify.app/

## Weather App ekran görüntüleri - openweathermap kullanılmıştır. Api 5gün 3saatte bir olmak üzere 5 güne 40 veri sağlamaktadır. Bu veriler her güne ortak bir veri olması için düzenlenmiştir ve 5 günlük canlı hava durumu yapılmıştır. Şehir seçildiğinde ilgili şehir ismi api ile gönderilir. Şehirin gelen api sonucunda coğrafi lat lon değerleri alınıp hava durumu api'ye gönderilmektedir.

![odevweather1](https://user-images.githubusercontent.com/36435160/183669532-120667ca-bdc9-43f8-b61e-2d830284a2f1.png)
![odevweather2](https://user-images.githubusercontent.com/36435160/183669574-df7be313-1861-4193-9c30-0b2b37c0bc16.png)
![odevweather3](https://user-images.githubusercontent.com/36435160/183669609-e3272e09-a873-4181-b798-5905199bdbf0.png)

## Proje tamamen useContext kullanılarak yapılmıştır. Tüm gerekli useContext değerleri tanımlanmıştır.

![odevweather6](https://user-images.githubusercontent.com/36435160/183670886-819fbaf6-cc2d-43a5-b80e-77432cb6dd9c.png)

## Şehir ismi formda seçildikten sonra şehir bilgisi useContext ile kaydedilir. Şehir ismi openweathermap ile gönderilip ilgili apiden ilgili şehirin lat lon değerlerinin dönmesi beklenir. Lat lon değerleri döndükten sonra yine openweathermap ile lat lon değerleri gönderilir ve ilgili şehirin hava durumu bilgisinin dönüşü beklenir. Api 5gün 3saatlik veri sunduğundan 40 adet veri gelmektedir. Veriler 5 eşit parçaya bölünerek 5 ayrı günden belirli saat aralıkları alınmıştır.

![odevweather4](https://user-images.githubusercontent.com/36435160/183671751-6e3a1de6-1722-4727-a198-bcc0812e9ae6.png)

## Formik kullanılmıştır. Şehir değeri seçilir ve handleSubmit ile useContext'te setCity gönderilir. Varsayılan şehir istanbul'dur.

![odevweather5](https://user-images.githubusercontent.com/36435160/183672130-c509fd94-ace2-449b-926d-3dce616988e1.png)

## WeatherDesign componentinde haftanın 7 günü week dizisinde tanımlanmıştır. Bugünün tarihi new Date() getDay ile alınır. Her bir sonraki gün için +1 eklenir ve mod 7 olarak alınır. Böylece günlerin doğru gelmesi sağlanır.

![odevweather7](https://user-images.githubusercontent.com/36435160/183672782-abe604cd-b34c-487c-bf70-fdd7ef49d5aa.png)

## Veriler listelenir. Tüm veriler ardı ardına birbirini yani api'den gelecek bilgiyi bekler. Beklerken LOADING... yazar ve api bilgisi geldiğinde ilgili bilgi gösterilir. Hava durumu resim bilgisi public dosyasına kaydedilmiştir. Api'den gelen hava durumu bilgisi ile aynı isimdedir. Kelvin olarak gelen sıcaklık bilgisi tam sayıya dönüştürülüp santigrat olarak hesaplanmıştır.

![odevweather8](https://user-images.githubusercontent.com/36435160/183673714-830ec902-a49a-4475-8ebb-ed4743f5cd5d.png)

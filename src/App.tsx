import { Row, Typography, Col, Card } from "antd";
import step1 from "./assets/step1.jpeg";
import step2 from "./assets/step2.jpeg";
import step3 from "./assets/step3.jpeg";
import step4 from "./assets/step4.jpeg";
import step5 from "./assets/step5.jpeg";
import step6 from "./assets/step6.jpeg";

const { Meta } = Card;

const { Title, Paragraph } = Typography;

const App = () => (
  <Row justify={"center"} gutter={[24, 36]}>
    <Col span={20}>
      <Title style={{ textAlign: "center" }} level={1}>
        İşe Alım Süreçleri
      </Title>

      <Paragraph>
        İşe alım yazılım sektörü içerisinde yer alan birçok kurum için önemli
        bir süreç. Hayatımıza yeni giren ve adapte olması anlaşılabilmesi
        açısından kuşak farkı yaratmakta. Bununla birlikte sektör içerisinde
        bulunan çok çeşitli yazılım ürünleri ve ürün çeşitliliği bulunmakta bu
        da yetmezmiş gibi personel açısından da dikey/yatay hiyerarşi oluşturma
        konuları çok dallanmakta. Sektördeki yönetim kademesi açısından da proje
        yönetimi insan davranışı yönetiminden öteye geçmiyor. Yine de
        kolaylaştırması açısından aşağıda bazı örnekleri sıralamak mümkün.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        1- Yeni Mezun
      </Title>
      <Paragraph>
        Yeni mezun personel şirketin kendi içerisinde düşük maliyetli eğitim
        sürecinde bir geçiş dönemidir 4-6 ay süresiyle kendisinin bağlı olduğu
        mid/senior veya hangi üst pozisyonda personel varsa onun
        yönlendirmesiyle kendisine söyleneni yapması yeterli olan bir
        personeldir. Bu süre zarfında yaptığı/sorduğu/araştırdığı her konu
        ilerisi için kendisine yardımcı olmakla birlikte yönlendirici faktörü
        önemlidir. Hata yapması hata yapmamasından daha sağlıklıdır.
      </Paragraph>
      <Paragraph>
        Yeni mezun işe alımlarında ara katman oluşturabilmek yani üniversitede
        bulunan son sınıf öğrenciyi uzun dönem stajla daha az riskle ve
        maliyetle şirkette denemek veya proje yarışmalarında gösterebileceği
        hali hazırda zaten kod yazabilen birini bulabilmek veya uzun dönem
        ücretli stajlarla farklı pozisyonları denemek öğrenme sürecini takip
        edebilmek önemlidir. İşe alım sürecinde yapbozun parçalarını verip
        kendisinin birleştirmesini bekleyebileceğiniz caseler isteyebilirsiniz.
        Doküman okuyabilir araştırıp bulabilir ve daha da iyisi yanlış yapabilir
        onunla birlikte düzelttikçe sizde öğrenirsiniz. Hevesli olduğu veya
        bildiğini düşündüğü bir konuyu kısa bir videoyla anlatabilir youtube'a
        yükleyebilir veya sunum yapabilir.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        2- Junior
      </Title>

      <Paragraph>
        Pozisyon olarak bu noktayı yine düşük maliyetli ve az riskli tutmak
        önemli ancak sektöre dair belirli bir bilgi birikimi oluştuğundan 1.
        seviyedeki kurallar geçerli araştırma öğrenme soru sorma hata yapma ve
        bağlı olduğu kişiyle paralel hareket etmek gibi. İşe alımda ise yine
        yukarıdaki gibi olmakla birlikte kendisinin iyi bildiği veya sizin iyi
        bildiğiniz bir konuyu sunum yapmasını isteyebilirsiniz. Sunum sırasında
        da yanlış veya doğru feedbacklerle yönlendirip ezber noktalar neresi
        kendi yorumu neler gibi bilgileri öğrenebilirsiniz.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        3- Mid
      </Title>

      <Paragraph>
        Burada alt ve üst olarak iki katman oluşmakta yani mid level olarak
        gördüğünüz bu ara katman personel hem kendisiyle birlikte çalışabilecek
        yeni mezun veya junior personeli yönlendirebilir hem senior veya proje
        yönetim kademesiyle ilgili fikir belirtebilir. Burada ve bir sonraki
        aşamadaki önemli faktör soru sorulabilir olmak belirli bir dozajı
        geçmeden gerekli araştırmayı yapmış yeterli emeği harcamış birisi
        yapamadığında veya bilmediğinde kendisine yöneltilebilecek bir soruyla
        ilgili zaman ayırabilmesi ve bunu sürekli yapabilmesi gerekir. Burada
        doğrudan cevap vermektense bazen cevabın olduğu bir stackoverflow
        linkini bile atabilirsiniz.
      </Paragraph>
      <Paragraph>
        Bu ve 4. sırada işe alım sürecinde önce ik görüşmesi sonrasında şirket
        içerisinde yer alacağı projenin teknik özelliklerinden oluşan ortalama
        5-6 gün sürecek bir case isteyip sunmasını sonrasında ise teknik görüşme
        gerçekleştirebilirsiniz. Hem sonuç olarak sürecin olumlu ilerlemesiyle
        birlikte case zaten yer alacağı uygulamanın minyatürü gibi olacağından
        inceleme sonrası kod kalitesi olarakta yapmış olması olumlu referans
        olacaktır. Farklı olarak basit bir konuyu sunum şeklinde hem kod hem pdf
        olarak hazırlayıp sunmasını isteyebilirsiniz. Sunum sırasında
        hızlandırma yavaşlatma durdurma soru sorma veya farklı psikolojik
        şekillerde ezber mi veya ne kadarı kendi yorumu öğrenebilirsiniz.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        4- Senior
      </Title>

      <Paragraph>
        3. seviyeyle neredeyse aynı olmakla birlikte burada yeni gelen özellik
        projeyi teknik olarak teslim edeceğiniz kişinin bu kişi olmasıdır. Genel
        yönlendirme feedback müşteri talepleri gibi ürün özellikleri veya daha
        alt pozisyonlardaki personelin gelişimi ve takibi olarak
        düşünebilirsiniz. Burada kod yazmaktan ziyade teknik ve non-teknik iki
        katmanı yılların getirdiği tecrübe ve birikimle daha doğru şekilde
        yönlendirmesi beklenir.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        5- Proje Yöneticisi
      </Title>

      <Paragraph>
        Rol olarak şirketin içerisindeki yapay müşteridir. Müşteri talebini
        doğru şekilde anlayarak bunu müşteri gibi ekibe anlatmakla görevlidir
        süreç takibi ve çıktıları takip etmekte sorumluluğunda olmakla birlikte
        eksik veya yanlış bir durumda ekibi yönlendirmek gerekirse yaptırım
        yapabilmek inisiyatifindedir. Çoğu zaman müşterinin söylediklerinden
        ziyade müşterinin söylemediklerini veya söylemek isteyip farklı şekilde
        söylediklerini anlamak görevi bunu basitleştirmek gerekirse uygulamanın
        veya projenin bitmiş halini gözünde canlandırdığında ürünü kendi projesi
        gibi görüp puzzlın eksik parçalarını tamamlayabilmeli.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        6- Müşteri
      </Title>

      <Paragraph>
        Müşteri günün sonunda ne olursa olsun 1 lira koyup bunun 3 lira olmasını
        bekler ve sürecin ilerlediğini görmek ister. Çünkü bütçesi vardır
        istediği şeyin veya fikrin hem korunarak hem de güvenli bir şekilde
        hayata geçmesini ister teknik bilgisi veya yazılıma uzaktan yakından
        alakası olmayabilir. Bu yüzden ürünün belli başlı parçalarını takip edip
        fikri korumak için belirli kırılım noktalarına geldiğinde daha önce
        söylemediği yeni şeyleri ekleyebilir bunları gelmeden görebilmek
        önemlidir. Çünkü seviye ilerledikçe resim geriye doğru açılır ve bir
        componentten bir modüle bir modülden bir uygulamaya bir uygulamadan
        aslında ne istediğini bilen ve gerekirse yanlışta yönlendiren kişiye
        doğru genişler.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        7- İş veren
      </Title>

      <Paragraph>
        Müşteri ve personel arasındaki köprü olmakla birlikte hem stresli hem
        yorucu ancak yukarıdan aşağıya düşünüldüğünde sadece bir alt
        basamağındaki yönetici grubunu iyi seçmesi ve kendisinin bilgi
        birikiminin yeterli olması yeterli görülebilir.
      </Paragraph>
    </Col>
  </Row>
);

export default App;

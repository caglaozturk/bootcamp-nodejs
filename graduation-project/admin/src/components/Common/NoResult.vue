<template>
    <div class="srch-no-rslt">
        <div class="no-rslt-icon"></div>
        <div class="no-rslt-info">
        <div class="no-rslt-text">
            <span>"<strong>{{ text }}</strong>"aramanız için sonuç bulunamadı.</span>
        </div>
        <div class="no-rslt-sggstn">
            <ul>
                <li>
                    <span>Yukarıda yer alan aramanıza benzer tahminlere göz atın</span>
                </li>
                <li>
                    <span>Yazım kurallarına uyarak daha genel aramalar yapmayı tercih edin</span>
                </li>
                <li>
                    <span>Yazdığınız kelimeyi kontrol ederek tekrar arayabilirsiniz</span>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    text: String
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.srch-no-rslt-cntnr {
  display: flex;
  margin-top: 20px;
  width: 100%;
}
.srch-no-rslt-cntnr .srch-no-rslt {
  background-color: #fff;
  padding-bottom: 40px;
  text-align: center;
  border: 1px solid #e2e2e2;
  width: 100%;
}
.srch-no-rslt-cntnr .srch-no-rslt .no-rslt-icon {
  width: 100%;
  height: 154px;
  background: url('../../assets/img/products/no-result-icon.png') no-repeat bottom center;
}
.srch-no-rslt-cntnr .srch-no-rslt .no-rslt-info .no-rslt-text {
  font-family: source_sans_proregular;
  font-size: 18px;
  margin-top: 20px;
  color: #666;
}
.srch-no-rslt-cntnr .srch-no-rslt .no-rslt-info .no-rslt-text strong {
  font-weight: 600;
}
.srch-no-rslt-cntnr .srch-no-rslt .no-rslt-info .no-rslt-sggstn {
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.srch-no-rslt-cntnr .srch-no-rslt .no-rslt-info .no-rslt-sggstn ul {
  list-style-type: none;
  text-align: left;
  width: 355px;
  margin-left: auto;
  margin-right: auto;
}
.srch-no-rslt-cntnr .srch-no-rslt .no-rslt-info .no-rslt-sggstn ul li {
  position: relative;
  padding: 5px 0 5px 25px;
  color: #ff7100;
  font-size: 20px;
  line-height: 1.27;
}
.srch-no-rslt-cntnr .srch-no-rslt .no-rslt-info .no-rslt-sggstn ul li:before {
  content: '.';
  position: absolute;
  top: -16px;
  left: 0;
  width: 7px;
  height: 7px;
  font-size: 66px;
  color: #ff7100;
  line-height: 28px;
}
.srch-no-rslt-cntnr .srch-no-rslt .no-rslt-info .no-rslt-sggstn ul li span {
  font-size: 14px;
  color: #333;
  display: block;
}
.srch-ttl-cntnr-wrppr .dscrptn h1 {
  display: inline;
}
</style>
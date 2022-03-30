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
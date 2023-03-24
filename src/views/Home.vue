<template>
  <div class="home">
    <header class="banner">
      <img src="@/assets/home/banner.png" alt="" />
    </header>
    <main class="main-box">
      <!-- 新建存证 -->
      <ul class="main-content">
        <div class="main-title"><span class="test">特色专区</span></div>
        <li class="main-item" v-for="(item, index) in list" :key="index">
          <div class="item-left">
            <img
              class="item-img"
              :src="require(`@/assets/home/${item.imgUrl}.png`)"
              alt=""
            />
          </div>
          <div class="item-right">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-content">{{ item.content }}</div>
            <el-button class="item-btn" :type="item.btnType">{{
              item.btnTest
            }}</el-button>
          </div>
        </li>
      </ul>
      <!-- 公证处联系方式 -->
      <div class="contact-box">
        <div class="contact-title">
          <span class="test">公证处信息</span>
        </div>
        <ul class="contact-content">
          <li class="item" v-for="(item, index) in 10" :key="index">
            <div class="item-title">江苏省苏州市苏州公证处</div>
            <div class="item-telephone">
              <i class="el-icon-phone-outline"></i>0512-68083871
            </div>
            <div class="item-address">
              <i class="el-icon-location-outline"></i>
              高新区狮山路6号新创大厦6楼
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer>123</footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      list: [
        {
          imgUrl: "menu_img1",
          title: "公证在线办理",
          content: "足不出户，线上办证足不出户，线上办证足不出户，线上办证足。",
          btnTest: "立即办理",
          btnType: "primary",
        },
        {
          imgUrl: "menu_img2",
          title: "苏州存证",
          content:
            "随时随地存，随时随地证随时随地存，随时随地证随时随地存，随时随地证随时随地存",
          btnTest: "立即办理",
          btnType: "primary",
        },
        {
          imgUrl: "menu_img3",
          title: "金融债权文书赋予强制执行效力公证",
          content:
            "赋能金融，助力执行赋能金融，助力执行赋能金融，助力执行赋能。",
          btnTest: "立即办理",
          btnType: "primary",
        },
        {
          imgUrl: "menu_img4",
          title: "商标转让公证",
          content:
            "在线转让，实时办证，在线转让，实时办证在线转让，实时办证，在线转让，实时办证在线转让，实时办证在线转让，实时办证",
          btnTest: "立即办理",
          btnType: "primary",
        },
      ],
    };
  },
  filters: {},
};
</script>
<style lang="less" scoped>
.home {
  background-color: @backgroundColor;
}
.banner {
  width: 100%;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.main-box {
  .main-content {
    position: relative;
    width: @mainWidth;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    height: 1741px;
    margin: -104px auto 70px;
    .main-title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 167px;
      font-size: 34px;
      font-weight: bold;
      .test {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 8px;
          left: -40px;
          width: 25.46px;
          height: 25.46px;
          border-radius: 1px;
          background-color: #4f86f0;
          transform: rotate(45deg);
        }
        &::after {
          content: "";
          position: absolute;
          top: 8px;
          right: -40px;
          width: 25.46px;
          height: 25.46px;
          border-radius: 1px;
          background-color: #4f86f0;
          transform: rotate(45deg);
        }
      }
    }
    .main-item {
      width: 100%;
      display: flex;
      height: 340px;
      margin-bottom: 50px;
      .item-left {
        box-sizing: border-box;
        width: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 20px 0;
        .item-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          margin: 0 105px;
        }
      }
      .item-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: center;
        margin-left: 70px;
        .item-title {
          font-size: 34px;
          font-weight: bold;
          margin-right: 103px;
        }
        .item-content {
          font-size: 26px;
          margin: 18px 130px 30px 0;
          color: #666666;
        }
        .item-btn {
          width: 140px;
          height: 50px;
          color: #fff;
          font-size: 20px;
        }
      }
    }
    & > li:nth-child(odd) {
      flex-direction: row-reverse;
      .item-right {
        margin: 0;
        margin-right: 70px;
        align-items: flex-end;
        text-align: right;
        .item-content {
          margin: 18px 0 30px 130px;
        }
        .item-title {
          margin: 0;
          margin-left: 103px;
        }
      }
    }
  }
  .contact-box {
    width: @mainWidth;
    margin: 0 auto;
    height: 800px;
    border: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
    .contact-title {
      height: 80px;
      border-bottom: 1px solid #f5f5f6;
      font-size: 30px;
      display: flex;
      align-items: center;
      font-weight: bold;
      .test {
        border-left: 5px solid #0084ff;
        padding: 0 30px;
      }
    }
    .contact-content {
      flex: 1;
      padding: 24px 0 0 30px;
      font-size: 16px;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        flex-shrink: 0;
      }
      .item-title {
        font-size: 20px;
        font-weight: bold;
      }
      .item-telephone {
        margin: 20px 0 10px;
      }
      i {
        color: #0084ff;
        margin-right: 16px;
      }
    }
  }
}
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
        <!--
        <button type="button" class="btn btn-primary" @click="mealTime = 'breakfast'">
          朝
        </button>
        <button type="button" class="btn btn-primary" @click="mealTime = 'lunch'">
          昼
        </button>
        <button type="button" class="btn btn-primary" @click="mealTime = 'dinner'">
          晩
        </button>
        -->
        <div class="form-group">
          <label>
            性別
          </label>
          <select v-model="userInfomations.sex" class="form-control">
            <option disabled value="">
              性別を選択してください(試作品なので男・女のみ)
            </option>
            <option :value="0">
              男
            </option>
            <option :value="1">
              女
            </option>
          </select>
        </div>
        <div v-for="item in items" :key="item.id">
          <div class="form-group">
            <label>
              {{ item.name }}
            </label>
            <select v-model="userInfomations.meal[item.en]" class="form-control">
              <option disabled value="">
                {{ item.name }}を選んでください
              </option>
              <option v-for="data in item.data" :key="data.id" :value="data">
                {{ data.menu }}
              </option>
            </select>
          </div>
        </div>
        <!--
        <button type="button" class="btn btn-primary" @click="sendMeal()">
          送信
        </button>
        -->
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label>
            寝た時間
          </label>
          <VueCtkDateTimePicker
            id="BedTimePicker"
            v-model="userInfomations.bedTime"
            label="Select time"
            color="firebrick"
            format="HH:mm"
            formatted="HH:mm"
            input-size="md"
            minute-interval="5"
            :only-time="true"
            :no-label="true"
          />
        </div>
        <div class="form-group">
          <label>
            起きた時間
          </label>
          <VueCtkDateTimePicker
            id="WakeUpTimePicker"
            v-model="userInfomations.wakeUpTime"
            label="Select time"
            color="firebrick"
            format="HH:mm"
            formatted="HH:mm"
            input-size="md"
            minute-interval="5"
            :only-time="true"
            :no-label="true"
          />
        </div>
        <div class="form-group">
          <label>
            身体活動レベル
          </label>
          <select v-model="userInfomations.physicalActivity" class="form-control">
            <option disabled value="">
              身体活動レベルを選択してください
            </option>
            <option v-for="data in activeList" :key="data.id" :value="data.level">
              {{ data.title }}
            </option>
          </select>
        </div>
        <button type="button" class="btn btn-primary" @click="sendOthers()">
          送信
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import rice from '~/assets/json/rice.json'
import mainDish from '~/assets/json/main_dish.json'
import riceBowl from '~/assets/json/rice_bowl.json'
import sideDish from '~/assets/json/side_dish.json'
import soup from '~/assets/json/soup.json'
import noodles from '~/assets/json/noodles.json'
import dessert from '~/assets/json/dessert.json'

export default {
  data () {
    return {
      accept: null,
      activeList: [
        { title: '生活の大部分を座っていて、静かな活動が中心だった', level: 1 },
        { title: '移動や立ってする仕事がある場合や、通勤・家事・軽いスポーツ等を行った', level: 2 },
        { title: '移動や立ってする仕事が多い場合や、スポーツなどの活発な運動を行った', level: 3 }
      ],
      // mealTime: 'breakfast',
      // 以下のitemsをv-forで表示させる
      items: [
        // importしたjsonをdataに入れる
        { name: 'ごはん', en: 'rice', data: rice },
        { name: '主菜', en: 'main_dish', data: mainDish },
        { name: '丼もの', en: 'rice_bowl', data: riceBowl },
        { name: '副菜', en: 'side_dish', data: sideDish },
        { name: '汁物', en: 'soup', data: soup },
        { name: '麺類', en: 'noodles', data: noodles },
        { name: 'デザート', en: 'dessert', data: dessert }
      ],
      // 実際にサーバーに送るためのjson
      userInfomations: {
        sex: null,
        physicalActivityLevel: null,
        wakeUpTime: null,
        bedTime: null,
        date: new Date(),
        meal: {
          rice: null,
          main_dish: null,
          rice_bowl: null,
          side_dish: null,
          soup: null,
          noodles: null,
          dessert: null
        }
        /* breakfast: {
          rice: null,
          main_dish: null,
          rice_bowl: null,
          side_dish: null,
          soup: null,
          noodles: null,
          dessert: null
        },
        lunch: {
          rice: null,
          main_dish: null,
          rice_bowl: null,
          side_dish: null,
          soup: null,
          noodles: null,
          dessert: null
        },
        dinner: {
          rice: null,
          main_dish: null,
          rice_bowl: null,
          side_dish: null,
          soup: null,
          noodles: null,
          dessert: null
        } */
      }
    }
  },
  methods: {
    mealshow () {
      // デバッグ用のメソッド、コンソールに選択した食事が表示される
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(this.mealInfomations))
    },
    async sendInfomations () {
      await this.$axios.$post('http://localhost:3000/user/meal', this.mealInfomations)
      // this.accept = response.headers.status

      // eslint-disable-next-line no-console
      console.log(this.userInfomations)
    }
  }
}
</script>

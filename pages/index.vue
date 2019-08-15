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
        <div v-for="item in items" :key="item.id">
          <div class="form-group">
            <label for="exampleSelect1exampleFormControlSelect1">
              {{ item.name }}
            </label>
            <select v-model="mealInfomations.meal[item.en]" class="form-control">
              <option disabled value="">
                {{ item.name }}を選んでください
              </option>
              <option v-for="data in item.data" :key="data.id" :value="data">
                {{ data.menu }}
              </option>
            </select>
          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="sendMeal">
          送信
        </button>
      </div>
      <div class="col-sm-6">
        <label>
          起きた時間
        </label>
        <VueCtkDateTimePicker
          id="WakeUpTimePicker"
          v-model="wakeUpTime"
          label="Select time"
          color="firebrick"
          format="hh:mm"
          formatted="hh:mm"
          input-size="md"
          minute-interval="5"
          :only-time="true"
          :no-label="true"
        />
        <label>
          寝た時間
        </label>
        <VueCtkDateTimePicker
          id="BedTimePicker"
          v-model="bedTime"
          label="Select time"
          color="firebrick"
          format="hh:mm"
          formatted="hh:mm"
          input-size="md"
          minute-interval="5"
          :only-time="true"
          :no-label="true"
        />
        <label>
          運動強度
        </label>
        <select v-model="physicalActivity" class="form-control">
          <option disabled value="">
            運動強度を選択してください
          </option>
          <option v-for="data in activeList" :key="data.id" :value="data.id">
            {{ data.title }}
          </option>
        </select>
        <button type="button" class="btn btn-primary" @click="sendOthers">
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
      physicalActivity: null,
      activeList: [
        { title: '座位または立位の静的な活動', id: 'level1' },
        { title: 'ゆっくりした歩行や家事など低強度の活動', id: 'level2' },
        { title: '長時間持続可能な運動・労働など中強度の活動', id: 'level3' },
        { title: '頻繁に休みが必要な運動・労働などの高強度の活動', id: 'level4' }
      ],
      wakeUpTime: null,
      bedTime: null,
      mealTime: 'breakfast',
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
      mealInfomations: {
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
    async sendMeal () {
      const response = await this.$axios.$post('http://localhost:3000/user/meal', this.mealInfomations)
      // this.accept = response.headers.status

      // eslint-disable-next-line no-console
      console.log(response)
    },
    async sendOthers () {
      const response = await this.$axios.$post('http://localhost:3000/user/physical', this.mealInfomations)
      // eslint-disable-next-line no-console
      console.log(response)
    }
  }
}
</script>

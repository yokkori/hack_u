# hack-u

> nuxt app

## Build Setup
以下を試してください。
``` bash
$ npm run install #はじめの1回のみでいい 
$ npm run dev
```
そして、pages/index.vueを確認してください。

## JSON Props 
|Props|Type|Default|value|
|:---|:---|:---|:---|
|sex|String|null|'man' or 'woman'|
|physicalActivityLevel|Int|null|1~3|
|wakeUpTime|String|null|'HH:mm'|
|bedTime|String|null|'HH:mm'|
|date|Date||ex'2019-08-15T07:01:09.057Z'|
|meal|json||||

### About meal
|Props|Type|Default|
|:---|:---|:---|
|rice|json|null|
|main_dish|json|null|
|rice_bowl|json|null|
|side_dish|json|null|
|soup|json|null|
|noodles|json|null|
|dessert|json|null|


### About meal's props
|Props|Type|Description|
|:---|:---|:---|
|menu|String|メニュー名|
|calorie|String|カロリー|
|protein|String|タンパク質|
|lipid|String|脂質|
|carbohydrate|String|炭水化物|
|salt|String|塩分|
|red|String|栄養分類 赤|
|green|String|栄養分類 青|
|yellow|String|栄養分類 黄|


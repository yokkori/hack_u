# hack-u

> nuxt app

## Build Setup
以下を試してください。
``` bash
$ npm run install #はじめの1回のみでいい 
$ npm run dev
```

## JSON Props 
|Props|Type|Default|value|
|:---|:---|:---|:---|
|sex|Int|null|0(man) or 1(woman)|
|physicalActivityLevel|Int|null|1~3|
|wakeUpTime|String|null|'HH:mm'|
|bedTime|String|null|'HH:mm'|
|date|Date||ex'2019-08-15T07:01:09.057Z'|
|meal|Object||||

### About meal
|Props|Type|Default|
|:---|:---|:---|
|rice|Object|null|
|main_dish|Object|null|
|rice_bowl|Object|null|
|side_dish|Object|null|
|soup|Object|null|
|noodles|Object|null|
|dessert|Object|null|


### About meal's props
|Props|Type|Description|
|:---|:---|:---|
|menu|String|メニュー名|
|calorie|Int|カロリー|
|protein|Int|タンパク質|
|lipid|Int|脂質|
|carbohydrate|Int|炭水化物|
|salt|Int|塩分|
|red|Int|栄養分類 赤|
|green|Int|栄養分類 青|
|yellow|Int|栄養分類 黄|


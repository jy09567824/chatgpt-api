## Introduction
使用 NodeJS 自製 ChatGPT API，提供簡易的前台介面給使用者操作。

## Using Packages
1. Open AI
2. Express
3. body-parser 
4. cors

## How to use
執行 index.js 與 index.html 後，透過前端提出問題並送出，使用邏輯與 ChatGPT APP 相同。

## To remind
- 需註冊 ChatGPT API 才可使用
- 首次安裝完專案時 index.js 會無法執行，需從 package.json 中新增 "type": "module"
- 可以從 index.js 中的 completion. 變數賦予模型角色. E.g. {"role": "system", "content": "You are a..."}
- 專案未來規劃導入 Fine Tune 功能

## References
1. https://www.youtube.com/watch?v=LX_DXLlaymg
2. https://platform.openai.com/docs/introduction
3. https://platform.openai.com/docs/api-reference/fine-tunes

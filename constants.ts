
import type { Challenge } from './types';
import { Target } from './types';

export const CHALLENGES: Challenge[] = [
  {
    id: 1,
    text: "數十億至數萬億個參數",
    target: Target.LLM,
    explanation: "人工智慧 - 大型語言模型（LLM）的規模由其參數（權重和偏差）來衡量，範圍可以從數十億到超過一萬億。這是衡量其大小和複雜性的關鍵指標。"
  },
  {
    id: 2,
    text: "約有 860 億個神經元",
    target: Target.Brain,
    explanation: "人腦包含約 860 億個神經元，它們是透過電氣和化學信號處理和傳輸資訊的基本單位。"
  },
  {
    id: 3,
    text: "從海量文本數據中學習",
    target: Target.LLM,
    explanation: "大型語言模型在海量的文本和程式碼數據集上進行訓練，透過優化預測序列中下一個單詞等任務來學習模式、語法和資訊。"
  },
  {
    id: 4,
    text: "透過感官經驗和社交互動學習",
    target: Target.Brain,
    explanation: "大腦從現實世界的感官輸入、運動行為和複雜的社交互動中持續高效地學習，只需少量數據就能快速適應。"
  },
  {
    id: 5,
    text: "極低的能量消耗（約 20 瓦）",
    target: Target.Brain,
    explanation: "儘管人腦具有巨大的計算能力，但其能源效率極高，運行功率約為 20 瓦——相當於一個昏暗燈泡的功率。"
  },
  {
    id: 6,
    text: "能量消耗極高，尤其在訓練期間",
    target: Target.LLM,
    explanation: "訓練和運行大型語言模型需要巨大的計算能力，導致數據中心消耗大量能源。"
  },
  {
    id: 7,
    text: "架構通常基於 Transformer",
    target: Target.LLM,
    explanation: "大多數現代大型語言模型都建立在 Transformer 架構之上，該架構利用注意力機制，在處理像語言這樣的序列數據方面非常有效。"
  },
  {
    id: 8,
    text: "架構是高度遞歸和大規模並行的",
    target: Target.Brain,
    explanation: "大腦的結構是一個複雜的、自我組織的網絡，具有大規模的互連性和並行處理能力，其中不同區域各有專長但又緊密相連。"
  },
  {
    id: 9,
    text: "估計有 100 至 1,000 萬億個突觸",
    target: Target.Brain,
    explanation: "突觸是神經元之間的連接，其龐大的數量是與大型語言模型參數更好的類比。這種大規模的連接性是大腦資訊容量的基礎。"
  },
  {
    id: 10,
    text: "展現通用智能、創造力和情感",
    target: Target.Brain,
    explanation: "人腦擁有廣泛的通用智能，使其能夠學習幾乎任何任務、進行抽象推理，並體驗創造力和情感等複雜狀態，這些都超出了目前人工智慧的能力。"
  }
];

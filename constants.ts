import type { Challenge } from './types';
import { Target, Difficulty, ChallengeCategory } from './types';

export const CHALLENGES: Challenge[] = [
  {
    id: 1,
    text: "數十億至數萬億個參數",
    target: Target.LLM,
    explanation: "人工智慧 - 大型語言模型（LLM）的規模由其參數（權重和偏差）來衡量，範圍可以從數十億到超過一萬億。這是衡量其大小和複雜性的關鍵指標。",
    category: ChallengeCategory.Fact
  },
  {
    id: 2,
    text: "約有 860 億個神經元",
    target: Target.Brain,
    explanation: "人腦包含約 860 億個神經元，它們是透過電氣和化學信號處理和傳輸資訊的基本單位。",
    category: ChallengeCategory.Fact
  },
  {
    id: 3,
    text: "從海量文本數據中學習",
    target: Target.LLM,
    explanation: "大型語言模型在海量的文本和程式碼數據集上進行訓練，透過優化預測序列中下一個單詞等任務來學習模式、語法和資訊。",
    category: ChallengeCategory.Fact
  },
  {
    id: 4,
    text: "透過感官經驗和社交互動學習",
    target: Target.Brain,
    explanation: "大腦從現實世界的感官輸入、運動行為和複雜的社交互動中持續高效地學習，只需少量數據就能快速適應。",
    category: ChallengeCategory.Fact
  },
  {
    id: 5,
    text: "極低的能量消耗（約 20 瓦）",
    target: Target.Brain,
    explanation: "儘管人腦具有巨大的計算能力，但其能源效率極高，運行功率約為 20 瓦——相當於一個昏暗燈泡的功率。",
    category: ChallengeCategory.Fact
  },
  {
    id: 6,
    text: "能量消耗極高，尤其在訓練期間",
    target: Target.LLM,
    explanation: "訓練和運行大型語言模型需要巨大的計算能力，導致數據中心消耗大量能源。",
    category: ChallengeCategory.Fact
  },
  {
    id: 7,
    text: "架構通常基於 Transformer",
    target: Target.LLM,
    explanation: "大多數現代大型語言模型都建立在 Transformer 架構之上，該架構利用注意力機制，在處理像語言這樣的序列數據方面非常有效。",
    category: ChallengeCategory.Fact
  },
  {
    id: 8,
    text: "架構是高度遞歸和大規模並行的",
    target: Target.Brain,
    explanation: "大腦的結構是一個複雜的、自我組織的網絡，具有大規模的互連性和並行處理能力，其中不同區域各有專長但又緊密相連。",
    category: ChallengeCategory.Fact
  },
  {
    id: 9,
    text: "估計有 100 至 1,000 萬億個突觸",
    target: Target.Brain,
    explanation: "突觸是神經元之間的連接，其龐大的數量是與大型語言模型參數更好的類比。這種大規模的連接性是大腦資訊容量的基礎。",
    category: ChallengeCategory.Fact
  },
  {
    id: 10,
    text: "展現通用智能、創造力和情感",
    target: Target.Brain,
    explanation: "人腦擁有廣泛的通用智能，使其能夠學習幾乎任何任務、進行抽象推理，並體驗創造力和情感等複雜狀態，這些都超出了目前人工智慧的能力。",
    category: ChallengeCategory.Fact
  },
  {
    id: 11,
    text: "只需少量範例即可快速學習（單次學習）",
    target: Target.Brain,
    explanation: "人腦擅長從極少的數據中歸納和學習新概念，有時甚至只需要一個例子。這種能力被稱為『單次學習』，與需要大量數據進行訓練的機器學習模型形成鮮明對比。",
    category: ChallengeCategory.Fact
  },
  {
    id: 12,
    text: "需要大量數據和廣泛的微調",
    target: Target.LLM,
    explanation: "大型語言模型需要遍歷龐大的數據集來學習模式，並且通常需要針對特定任務進行進一步的微調，這是一個計算成本高昂的過程，與人類的快速適應能力不同。",
    category: ChallengeCategory.Fact
  },
  {
    id: 13,
    text: "直觀地理解物理和社會情境",
    target: Target.Brain,
    explanation: "人類擁有『常識』和『具身認知』，使我們能夠毫不費力地理解世界運作的方式以及社交互動中的細微差別，這是人工智慧仍在努力解決的領域。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 14,
    text: "以超乎人類的速度處理和合成資訊",
    target: Target.LLM,
    explanation: "大型語言模型可以秒速閱讀和分析數百萬份文件，找出趨勢並總結資訊，其規模和速度遠超任何人類的能力。這使其成為增強人類研究和決策的強大工具。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 15,
    text: "提出新穎的問題並設定創造性方向",
    target: Target.Brain,
    explanation: "人類的好奇心和意圖是創新的驅動力。我們提出『為什麼』和『如果……會怎樣』等問題，為科學發現、藝術創作和技術進步開闢了新的道路，而人工智慧目前則在既定目標下運作。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 16,
    text: "快速生成多樣化的想法以激發人類創造力",
    target: Target.LLM,
    explanation: "作為一個協作工具，大型語言模型可以根據一個提示生成數十種變化、草稿或概念，為人類設計師、作家和策略家提供豐富的起點，從而加速創造過程。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 17,
    text: "在交通尖峰時段，安全地穿越一條充滿不可預測障礙物的繁忙街道。",
    target: Target.Brain,
    explanation: "人腦能出色地整合多種感官輸入（視覺、聽覺、觸覺），並利用常識來預測動態環境中的運動，從而實現即時適應。自動駕駛汽車仍在努力達到同等水平的可靠性。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 18,
    text: "在幾分鐘內分析數千份醫學研究論文，以識別潛在的藥物相互作用。",
    target: Target.LLM,
    explanation: "AI可以以超乎人類的速度處理和交叉引用海量數據集。這使其在藥物發現、基因組學和金融等領域，從龐大資訊中識別模式方面，成為一個無價的工具。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 19,
    text: "透過理解微妙的情感線索和提供有同理心的支持來安慰一位傷心的朋友。",
    target: Target.Brain,
    explanation: "人類擁有高度發達的情感和社交智慧，使我們能夠解讀非語言信號、感受同理心並建立深層的人際聯繫。AI可以模擬同理心，但缺乏真正的情感理解。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 20,
    text: "同時為數百萬名學生生成個性化的學習計劃，並根據他們的進度進行調整。",
    target: Target.LLM,
    explanation: "AI系統可以大規模地分析個人表現數據，為每個學習者量身定制教育內容。這種個性化的方法可以優化學習成果，這是人類教師無法為如此多學生做到的。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 21,
    text: "發明一種全新的音樂流派或藝術形式。",
    target: Target.Brain,
    explanation: "真正的創造力通常源於意圖、個人經驗和抽象思維的結合，從而產生全新的概念。雖然AI可以生成令人印象深刻的作品，但它缺乏推動這種開創性創新的內在動力。",
    category: ChallengeCategory.UseCase
  },
  {
    id: 22,
    text: "即時翻譯兩位說不同語言的人之間的現場對話。",
    target: Target.LLM,
    explanation: "大型語言模型在處理和翻譯語言方面非常出色，能夠實現近乎即時的溝通。它們能夠處理語法、句法和龐大的詞彙量，其速度和準確性是大多數人類無法比擬的。",
    category: ChallengeCategory.UseCase
  }
];

export const DIFFICULTY_LEVELS: Record<Difficulty, number> = {
  [Difficulty.Easy]: 6,
  [Difficulty.Medium]: 10,
  [Difficulty.Hard]: CHALLENGES.length,
};

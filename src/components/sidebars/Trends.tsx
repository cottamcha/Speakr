import { Component, For } from "solid-js"

const randomize = () => Math.floor(Math.random() * 500)

const trends = [
    {
      category: "Sports",
      content: "🏆 Breaking: Underdogs triumph in an epic comeback! Fans go wild as the game enters the history books. #SportsMoment",
      likeCount: randomize()
    },
    {
      category: "Finance",
      content: "💰 Market Watch: Major tech company's stock soars after announcing groundbreaking innovation. Investors bullish. #FinanceUpdate",
      likeCount: randomize()
    },
    {
      category: "Games",
      content: "🎮 New release: Highly anticipated RPG game takes the gaming world by storm. Gamers rejoice! #GameOn",
      likeCount: randomize()
    },
    {
      category: "Health",
      content: "🍎 Wellness tip: Top nutritionists reveal the superfood you should be eating every day. #HealthHacks",
      likeCount: randomize()
    },
    {
      category: "Tech",
      content: "🚀 Futuristic tech: Revolutionary gadget promises to change the way we interact with the digital world. #TechTrends",
      likeCount: randomize()
    },
  ];



const TrendSidebar: Component = () => {

    return(
        <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
                    <div class="flex-it p-4">
                      <span class="text-xl font-bold">Trends</span>
                    </div>
                    <For each={trends}>
                        { (trend) =>
                            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                                <div class="flex-it">
                                <span class="text-lg font-bold">{trend.category}</span>
                                <span class="text-gray-400 text-sm">
                                    {trend.content}
                                </span>
                                <span class="text-gray-400 text-sm">{trend.likeCount} likes</span>
                                </div>
                            </div>
                        }
                    </For>
                  </div>
    )
} 


export default TrendSidebar;
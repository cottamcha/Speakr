import { Component, For } from "solid-js"

const randomize = () => Math.floor(Math.random() * 500)

const trends = [
    {
        category: "sports",
        content: "Something1",
        glideCount: randomize()
    },
    {
        category: "finance",
        content: "Something2",
        glideCount: randomize()
    },
    {
        category: "games",
        content: "Something3",
        glideCount: randomize()
    },
    {
        category: "health",
        content: "Something4",
        glideCount: randomize()
    },
    {
        category: "tech",
        content: "Something5",
        glideCount: randomize()
    },
]



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
                                <span class="text-gray-400 text-sm">
                                    {trend.content}
                                </span>
                                <span class="text-lg font-bold">{trend.category}</span>
                                <span class="text-gray-400 text-sm">{trend.glideCount} likes</span>
                                </div>
                            </div>
                        }
                    </For>
                  </div>
    )
} 


export default TrendSidebar;
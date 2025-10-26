import { useState } from "react";
import { Card } from "@/components/ui/card";
import { LayoutGrid, HelpCircle, User, Briefcase, Star } from "lucide-react";

const tabs = ["About Me", "Experiences", "Recommended"] as const;

const tabIcons = {
  "About Me": User,
  "Experiences": Briefcase,
  "Recommended": Star,
};

const content = {
  "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  Experiences: `I have over 5 years of experience in sales and customer relations. Started my career at a small startup and worked my way up to enterprise sales at Salesforce.

Key achievements include closing deals worth over $2M annually and maintaining a 95% customer satisfaction rate. I specialize in SaaS solutions and cloud infrastructure.`,
  Recommended: `Based on your interests and profile, I'd recommend exploring our latest cloud solutions and AI-powered analytics tools.

These solutions have helped companies like yours increase efficiency by 40% and reduce operational costs significantly. Let's schedule a demo!`,
};

export function ProfileCard() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("About Me");

  return (
    <Card className="bg-widget-bg border-widget-border p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl shadow-2xl w-full">
      <div className="flex flex-col sm:flex-row items-start gap-3 mb-4 md:mb-5">
        <div className="flex flex-col gap-2">
          <button className="p-2 rounded-full bg-secondary/30 border border-widget-border hover:bg-secondary/50 transition-all flex-shrink-0">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full bg-secondary/30 border border-widget-border hover:bg-secondary/50 transition-all flex-shrink-0">
            <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </button>
        </div>
        
        <div className="flex-1 w-full">
          <div className="bg-tab-inactive p-1.5 sm:p-2 rounded-full flex gap-1 w-full">
            {tabs.map((tab) => {
              const Icon = tabIcons[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-3.5 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-1 justify-center ${
                    activeTab === tab
                      ? "bg-tab-active text-foreground shadow-lg"
                      : "text-muted-foreground hover:bg-tab-active/30"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="hidden xs:inline">{tab}</span>
                  <span className="xs:hidden">{tab.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-text-secondary leading-relaxed whitespace-pre-line text-xs sm:text-sm">
        {content[activeTab]}
      </div>
    </Card>
  );
}

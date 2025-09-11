import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb } from "lucide-react";

const PerformanceInsights = () => {
  const insights = [
    {
      title: "QIC Group reports Net Profits of QAR 615 million for the year 2023",
      description: "Qatar Insurance Company (\"QIC Group\", \"QIC\"), the leading insurer in Qatar and the Middle East North Africa (MENA) region, has reported net profits of QAR 615 million for the year 2023, compared to a net loss of QAR 1,183 million for the previous year.",
    },
    {
      title: "QIC Group reports gross written premiums of QAR 9.8 billion for the year 2022",
      description: "Qatar Insurance Company (QIC Group, QIC), the leading insurer in Qatar and the Middle East North African (MENA) region, announced its financial results for the year ended 31 December 2022.",
    },
    {
      title: "QIC Group net profit for the year 2021 jumps 400% to QAR 630 million",
      description: "Qatar Insurance Company (QIC), the leading insurer in Qatar and the Middle East North African (MENA) region, announced its financial results for the year 2021.",
    },
  ];

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          Best Performance Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="border-l-4 border-success pl-4 py-2">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-sm text-gray-900 mb-1">{insight.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PerformanceInsights;
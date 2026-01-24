import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { ClassQuestion } from "@/data/classQuestionsData";
import { ScrollArea } from "@/components/ui/scroll-area";

interface QuestionPanelProps {
  questions: ClassQuestion[];
  onSubmit: (answers: Record<string, number>) => void;
  currentIndex: number;
  onIndexChange: (index: number) => void;
  answers: Record<string, number>;
  onAnswerChange: (questionId: string, optionIndex: number) => void;
  savedQuestions: Set<string>;
  onSave: () => void;
}

const QuestionPanel = ({ 
  questions, 
  currentIndex,
  onIndexChange,
  answers,
  onAnswerChange,
  savedQuestions,
}: QuestionPanelProps) => {
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  if (!currentQuestion || totalQuestions === 0) {
    return (
      <Card className="glass-card h-[50vh] flex items-center justify-center">
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground">No questions available for this class.</p>
        </CardContent>
      </Card>
    );
  }

  const handleSelectOption = (optionIndex: number) => {
    onAnswerChange(currentQuestion.id, optionIndex);
  };

  const selectedAnswer = answers[currentQuestion.id];
  const isSaved = savedQuestions.has(currentQuestion.id);

  // Reorder options: 3rd, 4th on top row; 1st, 2nd on bottom row
  const reorderedOptions = [
    { option: currentQuestion.options[2], originalIndex: 2 }, // 3rd -> top-left
    { option: currentQuestion.options[3], originalIndex: 3 }, // 4th -> top-right
    { option: currentQuestion.options[0], originalIndex: 0 }, // 1st -> bottom-left
    { option: currentQuestion.options[1], originalIndex: 1 }, // 2nd -> bottom-right
  ];

  return (
    <Card className="glass-card h-[50vh] md:h-[60vh] flex flex-col">
      <ScrollArea className="flex-1">
        <CardContent className="p-4 md:p-5">
          {/* Question Header */}
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-xs">
              Question {currentIndex + 1} of {totalQuestions}
            </Badge>
            {isSaved && (
              <Badge className="bg-success/20 text-success border-success/30 gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Saved
              </Badge>
            )}
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-semibold leading-relaxed">
              {currentQuestion.text}
            </h3>
          </div>

          {/* Options in 2x2 Grid: 3rd & 4th on top, 1st & 2nd on bottom */}
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {reorderedOptions.map(({ option, originalIndex }) => (
              <button
                key={originalIndex}
                onClick={() => handleSelectOption(originalIndex)}
                className={`w-full p-2 md:p-3 rounded-lg border text-left transition-all text-xs md:text-sm ${
                  selectedAnswer === originalIndex
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-muted text-[10px] md:text-xs font-medium mr-2">
                  {String.fromCharCode(65 + originalIndex)}
                </span>
                <span className="break-words">{option}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default QuestionPanel;

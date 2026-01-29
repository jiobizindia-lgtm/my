import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, HelpCircle, ArrowLeft, Clock, User, ZoomIn, ZoomOut, X, ChevronDown } from "lucide-react";
import { ClassItem } from "@/data/classesData";
import { getQuestionsByClassId } from "@/data/classQuestionsData";
import QuestionPanel from "./QuestionPanel";
import ActionButtons from "./ActionButtons";
import PdfDropdown from "./PdfDropdown";
import VideoPlayer from "./VideoPlayer";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

interface ClassPlayerProps {
  currentClass: ClassItem;
  onBack: () => void;
  onMobileNavbarHide?: (hide: boolean) => void;
  mobileActionSlot?: React.ReactNode;
   questionsOnly?: boolean;
}

type ViewMode = "video-questions" | "video-only" | "pdf";

const ClassPlayer = ({ currentClass, onBack, onMobileNavbarHide }: ClassPlayerProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>("video-questions");
  const [pdfZoom, setPdfZoom] = useState(100);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  // Quiz state management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [savedQuestions, setSavedQuestions] = useState<Set<string>>(new Set());
  
  const questions = getQuestionsByClassId(currentClass.id);
  const hasQuestions = questions.length > 0;
  const currentQuestion = questions[currentIndex];

  // Always hide navbar in class player mode (both mobile and desktop)
  useEffect(() => {
    if (onMobileNavbarHide) {
      const shouldHide = viewMode === "video-questions" || viewMode === "video-only";
      onMobileNavbarHide(shouldHide);
    }
    return () => {
      if (onMobileNavbarHide) {
        onMobileNavbarHide(false);
      }
    };
  }, [viewMode, onMobileNavbarHide]);

  const handleZoomIn = () => setPdfZoom(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setPdfZoom(prev => Math.max(prev - 25, 50));

  const handleOpenPdfSameTab = () => {
    setViewMode("pdf");
  };

  const handleClosePdf = () => {
    setViewMode("video-questions");
  };

  const handleAnswerChange = (questionId: string, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSave = () => {
    if (currentQuestion && answers[currentQuestion.id] !== undefined) {
      setSavedQuestions(prev => new Set(prev).add(currentQuestion.id));
      toast.success("Answer saved!");
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmitAnswers = () => {
    const totalQuestions = questions.length;
    const answeredCount = Object.keys(answers).length;
    
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    toast.success(
      `Quiz Submitted! You got ${correctCount} out of ${totalQuestions} correct (${Math.round((correctCount / totalQuestions) * 100)}%)`,
      { duration: 5000 }
    );
  };

  const toggleNavbarCollapse = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };


// In ClassPlayer component props
interface ClassPlayerProps {
  currentClass: ClassType;
  onBack: () => void;
  onMobileNavbarHide: (hide: boolean) => void;
  questionsOnly?: boolean; // Add this
}

// Then inside your ClassPlayer component:
const ClassPlayer = ({ currentClass, onBack, onMobileNavbarHide, questionsOnly = false }: ClassPlayerProps) => {
  // ... existing code ...
  
  // You can use questionsOnly to conditionally render only the questions section
  // For example:
  const [showQuestionsOnly, setShowQuestionsOnly] = useState(questionsOnly);
  
  // ... rest of the component ...
  
  return (
    <div className="class-player-container">
      {/* You can add a toggle button to switch between normal view and questions only */}
      {!questionsOnly && (
        <Button onClick={() => setShowQuestionsOnly(!showQuestionsOnly)}>
          {showQuestionsOnly ? "Show Full Class" : "Show Questions Only"}
        </Button>
      )}
      
      {showQuestionsOnly ? (
        // Render only questions section
        <div className="questions-only-view">
          {/* Your questions component */}
        </div>
      ) : (
        // Render normal class player
        <div className="normal-class-view">
          {/* Your existing class player UI */}
        </div>
      )}
    </div>
  );
};

  

  // PDF View
  if (viewMode === "pdf") {
    return (
      <div className="space-y-4 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={handleClosePdf}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h2 className="text-xl font-bold">{currentClass.title}</h2>
              <p className="text-sm text-muted-foreground">PDF Notes</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleZoomOut} disabled={pdfZoom <= 50}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium w-12 text-center">{pdfZoom}%</span>
            <Button variant="ghost" size="icon" onClick={handleZoomIn} disabled={pdfZoom >= 200}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleClosePdf} className="gap-2 ml-2">
              <X className="h-4 w-4" />
              Close PDF
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="overflow-auto bg-muted/30 rounded-lg" style={{ height: '75vh' }}>
              <div style={{ transform: `scale(${pdfZoom / 100})`, transformOrigin: 'top left', width: `${10000 / pdfZoom}%` }}>
                <iframe
                  src={`${currentClass.pdfUrl}#toolbar=0&navpanes=0`}
                  className="w-full border-0"
                  style={{ height: '75vh' }}
                  title="PDF Viewer"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`animate-fade-in flex flex-col ${viewMode === "video-only" ? "h-[calc(10vh-1rem)]" : "space-y-4"}`}>
      {/* Mobile Collapsed Navbar Indicator */}
      {isMobile && isNavbarCollapsed && (
        <button
          onClick={toggleNavbarCollapse}
          className="w-full h-1 bg-primary/30 hover:bg-primary/50 rounded-full transition-colors"
          aria-label="Expand navbar"
        />
      )}

      {/* Header with Controls - Hidden on mobile when collapsed */}
      {(!isMobile || !isNavbarCollapsed) && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg md:text-xl font-bold line-clamp-1">{currentClass.title}</h2>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {currentClass.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {currentClass.teacher}
                  </span>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-2 flex-wrap">

              <Button
                variant={viewMode === "video-only" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("video-only")}
                className="gap-2"
              >
                <Play className="h-4 w-4" />
                <span className="hidden sm:inline">Video Only</span>
              </Button>
              
              {hasQuestions && (
                <Button
                  variant={viewMode === "video-questions" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("video-questions")}
                  className="gap-2"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Questions</span>
                </Button>
              )}

              <PdfDropdown 
                pdfUrl={currentClass.pdfUrl} 
                onOpenSameTab={handleOpenPdfSameTab}
              />

              {/* Mobile collapse toggle */}
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleNavbarCollapse}
                  className="h-8 w-8"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {viewMode === "video-only" ? (
        /* Video Only Mode - Full remaining space */
        <div className="flex-1 flex flex-col min-h-0">
          <Card className="glass-card flex-1 flex flex-col">
            <CardContent className="p-4 flex flex-col flex-1 min-h-0">
              <div className="flex-1 min-h-0">
                <VideoPlayer
                  src={currentClass.videoUrl}
                  poster={currentClass.thumbnail}
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 flex-shrink-0">
                <h3 className="font-semibold">{currentClass.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{currentClass.description}</p>
                {currentClass.isCompleted && (
                  <Badge className="mt-2 bg-success">Completed</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Video + Questions Mode */
        <div className={`grid gap-4 ${hasQuestions ? "lg:grid-cols-2" : ""}`}>
          {/* Video Card */}
          <div className="flex flex-col gap-4">
            <Card className="glass-card">
              <CardContent className="p-4 flex flex-col">
                <VideoPlayer
                  src={currentClass.videoUrl}
                  poster={currentClass.thumbnail}
                  className="aspect-video"
                />
                <div className="mt-4 flex-shrink-0">
                  <h3 className="font-semibold">{currentClass.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{currentClass.description}</p>
                  {currentClass.isCompleted && (
                    <Badge className="mt-2 bg-success">Completed</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Questions Panel */}
          {hasQuestions && (
            <QuestionPanel 
              questions={questions}
              onSubmit={handleSubmitAnswers}
              currentIndex={currentIndex}
              onIndexChange={setCurrentIndex}
              answers={answers}
              onAnswerChange={handleAnswerChange}
              savedQuestions={savedQuestions}
              onSave={handleSave}
            />
          )}

          {/* Action Buttons below - full width on mobile, under questions on desktop */}
          {hasQuestions && (
            <div className="lg:col-span-2">
              <ActionButtons
                onSave={handleSave}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onSubmit={handleSubmitAnswers}
                canSave={currentQuestion && answers[currentQuestion.id] !== undefined}
                canGoPrevious={currentIndex > 0}
                canGoNext={currentIndex < questions.length - 1}
                isMobile={isMobile}
              />
            </div>
          )}
        </div>
      )}

      {/* No questions message */}
      {viewMode === "video-questions" && !hasQuestions && (
        <Card className="glass-card">
          <CardContent className="py-8 text-center">
            <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">No practice questions available for this class yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ClassPlayer;

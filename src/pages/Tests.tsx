import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, FileText, Play, Trophy, ArrowLeft, 
  CheckCircle, XCircle, HelpCircle, AlertCircle, 
  Info, ChevronRight, ChevronLeft, User 
} from "lucide-react";
import { tests, leaderboardData, getTestById } from "@/data/testsData";
import { cn } from "@/lib/utils";

type ViewState = "list" | "instructions" | "exam" | "analysis";

const Tests = () => {
  const [view, setView] = useState<ViewState>("list");
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);
  const [analysisFilter, setAnalysisFilter] = useState<"all" | "correct" | "wrong" | "unattempted">("all");

  const test = selectedTest ? getTestById(selectedTest) : null;
  const currentQuestion = test?.questions[currentQuestionIndex];
  const currentSection = currentQuestion?.section || test?.sections[0];

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (view === "exam" && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [view, timeLeft]);

  const handleStartClick = (testId: string) => {
    setSelectedTest(testId);
    setView("instructions");
  };

  const beginExam = () => {
    if (test) {
      setCurrentQuestionIndex(0);
      setAnswers({});
      setMarkedForReview(new Set());
      setTimeLeft(test.timeLimit * 60);
      setView("exam");
    }
  };

  const selectAnswer = (optionIndex: number) => {
    if (currentQuestion) setAnswers({ ...answers, [currentQuestion.id]: optionIndex });
  };

  const toggleMarkForReview = () => {
    if (currentQuestion) {
      const newMarked = new Set(markedForReview);
      if (newMarked.has(currentQuestion.id)) newMarked.delete(currentQuestion.id);
      else newMarked.add(currentQuestion.id);
      setMarkedForReview(newMarked);
    }
  };

  const getQuestionStatus = (qId: string) => {
    if (markedForReview.has(qId)) return "review";
    if (answers[qId] !== undefined && answers[qId] !== null) return "answered";
    return "not-answered";
  };

  const calculateResults = () => {
    if (!test) return { correct: 0, wrong: 0, skipped: 0, score: 0 };
    let correct = 0, wrong = 0;
    test.questions.forEach(q => {
      if (answers[q.id] === undefined || answers[q.id] === null) return;
      if (answers[q.id] === q.correctAnswer) correct++;
      else wrong++;
    });
    const skipped = test.questions.length - correct - wrong;
    const score = Math.round((correct / test.questions.length) * 100);
    return { correct, wrong, skipped, score };
  };

  // --- VIEW: TEST LIST ---
  if (view === "list") {
    return (
      <div className="space-y-6 animate-fade-in p-4 lg:p-8">
        <div>
          <h1 className="text-2xl font-bold">Mock Tests</h1>
          <p className="text-muted-foreground text-sm">Select a test to begin your practice session.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {tests.map((t) => (
            <Card key={t.id} className="glass-card hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">{t.examType}</Badge>
                <h3 className="font-bold text-lg leading-tight">{t.title}</h3>
                <div className="flex gap-4 mt-3 text-xs text-muted-foreground font-medium">
                  <span className="flex items-center gap-1"><FileText className="h-3 w-3" />{t.totalQuestions} Qs</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{t.timeLimit} min</span>
                </div>
                <Button size="sm" className="w-full mt-4 gradient-primary" onClick={() => handleStartClick(t.id)}>
                  Start Practice
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // 2. INSTRUCTIONS VIEW (Added based on images)
  if (view === "instructions" && test) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-10">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" onClick={() => setView("list")}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Back
          </Button>
          <h2 className="text-xl font-bold">Instructions, Terms & Conditions</h2>
        </div>

        {/* Section 1: Exam Overview */}
        <Card className="glass-card overflow-hidden">
          <div className="bg-muted/50 p-3 border-b">
            <h3 className="font-bold flex items-center gap-2">
              <Info className="h-4 w-4" /> 1. Exam Overview / परीक्षा का संक्षिप्त विवरण
            </h3>
          </div>
          <CardContent className="p-6 space-y-4">
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Duration / समयावधि:</strong> {test.timeLimit} minutes / {test.timeLimit} मिनट</li>
              <li><strong>Total Questions / कुल प्रश्न:</strong> {test.totalQuestions}</li>
              <li><strong>Negative Marking:</strong> 25% marks deducted for each wrong answer. / ऋणात्मक अंकन: प्रत्येक गलत उत्तर पर 25% अंक काटे जाएंगे।</li>
              <li><strong>Sections:</strong> 5 / प्रदर्शित अनुभागों की संख्या: 5</li>
            </ul>

            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground uppercase text-xs">
                  <tr>
                    <th className="px-4 py-2 border-r">Section</th>
                    <th className="px-4 py-2 border-r">Subject</th>
                    <th className="px-4 py-2 border-r">Questions</th>
                    <th className="px-4 py-2">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {["General Intelligence", "General Awareness", "Quantitative Aptitude", "Hindi", "English Language"].map((subj, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-2 border-r font-medium text-primary">Part - {String.fromCharCode(65 + idx)}</td>
                      <td className="px-4 py-2 border-r">{subj}</td>
                      <td className="px-4 py-2 border-r text-center">20</td>
                      <td className="px-4 py-2 text-center">40</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: General Rules */}
        <Card className="glass-card">
          <div className="bg-muted/50 p-3 border-b">
            <h3 className="font-bold flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> 6. Additional Notes / अतिरिक्त निर्देश
            </h3>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4 text-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <p className="flex gap-2"><span>•</span> Maintain silence and do not communicate with other candidates. / परीक्षा कक्ष में शांति बनाए रखें।</p>
                  <p className="flex gap-2"><span>•</span> System auto-saves responses and auto-submits when time ends. / हर उत्तर स्वचालित रूप से सिस्टम में सुरक्षित होता है।</p>
                  <p className="flex gap-2"><span>•</span> Bathroom breaks are not allowed during the exam. / परीक्षा के दौरान बाथरूम ब्रेक की अनुमति नहीं है।</p>
                </div>
                <div className="space-y-3">
                  <p className="flex gap-2"><span>•</span> Inform invigilator immediately in case of technical issues. / तकनीकी समस्या होने पर निरीक्षक को तुरंत सूचित करें।</p>
                  <p className="flex gap-2"><span>•</span> Do not take screenshots or photos of the exam screen. / किसी भी समय परीक्षा स्क्रीन की तस्वीर या स्क्रीनशॉट न लें।</p>
                  <p className="flex gap-2 text-destructive font-semibold"><span>•</span> Unfair means will result in disqualification. / अनुचित साधनों का उपयोग करने पर परीक्षा रद्द कर दी जाएगी।</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center gap-4 py-4">
          <p className="text-sm text-muted-foreground italic text-center">
            By clicking below, you agree that you have read and understood the instructions.
          </p>
          <Button size="lg" className="px-10 gradient-primary h-12 text-lg" onClick={beginExam}>
            I am ready to begin / मैं परीक्षा शुरू करने के लिए तैयार हूँ
          </Button>
        </div>
      </div>
    );
  }
  // --- VIEW: EXAM (FIXED - NO WINDOW SCROLL) ---
  if (view === "exam" && test && currentQuestion) {
    return (
      <div className="fixed inset-0 top-[64px] bg-background flex flex-col overflow-hidden z-50">
        {/* Fixed Header */}
        <div className="h-14 border-b flex items-center justify-between px-4 bg-card shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-1.5 rounded-md"><User className="h-4 w-4 text-primary" /></div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground leading-none">CANDIDATE SECTION</p>
              <p className="text-xs font-bold truncate">{test.title}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right border-x px-4">
              <p className="text-[9px] uppercase font-bold text-muted-foreground">Time Left</p>
              <p className="font-mono font-bold text-destructive text-lg leading-none">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
              </p>
            </div>
            <Button size="sm" variant="destructive" onClick={() => setView("analysis")} className="h-8 text-xs px-4 font-bold">SUBMIT</Button>
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex flex-1 overflow-hidden relative">
          
          {/* Left: Question Content (Scrollable) */}
          <div className={cn("flex flex-col flex-1 transition-all duration-300", isPaletteOpen ? "w-3/4" : "w-full")}>
            <div className="h-10 bg-muted/20 border-b flex items-center px-4 gap-2">
              <Badge className="text-[9px] h-5">{currentSection}</Badge>
              <span className="text-[10px] text-muted-foreground">Question No. {currentQuestion.questionNumber}</span>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-3xl">
                <h2 className="text-lg font-medium leading-relaxed mb-8">{currentQuestion.question}</h2>
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, i) => (
                    <button key={i} onClick={() => selectAnswer(i)}
                      className={cn("w-full p-3.5 rounded-xl border-2 text-left text-sm transition-all flex items-center gap-4 group",
                        answers[currentQuestion.id] === i 
                          ? "border-primary bg-primary/5 ring-1 ring-primary" 
                          : "border-border hover:border-primary/20 hover:bg-muted/50")}>
                      <span className={cn("w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold border-2 transition-colors", 
                          answers[currentQuestion.id] === i ? "bg-primary text-white border-primary" : "bg-background group-hover:bg-primary/10")}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="font-medium">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Controls (Fixed) */}
            <div className="h-14 border-t flex items-center justify-between px-4 bg-card shrink-0">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8 text-xs" 
                  disabled={currentQuestionIndex === 0} 
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}>
                  Previous
                </Button>
                <Button variant="secondary" size="sm" className="h-8 text-xs font-semibold" onClick={toggleMarkForReview}>
                  {markedForReview.has(currentQuestion.id) ? "Marked" : "Mark for Review"}
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => setAnswers({...answers, [currentQuestion.id]: null})}>Clear</Button>
                <Button size="sm" className="h-8 text-xs px-6 gradient-primary font-bold" 
                  onClick={() => currentQuestionIndex < (test.questions.length - 1) && setCurrentQuestionIndex(prev => prev + 1)}>
                  Save & Next
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Collapsible Palette Area */}
          <div className={cn("border-l bg-muted/5 transition-all duration-300 flex flex-col shrink-0 overflow-hidden relative", 
            isPaletteOpen ? "w-72" : "w-0")}>
            
            <div className="p-3 border-b bg-card shrink-0">
              <span className="text-[11px] font-bold uppercase text-muted-foreground tracking-wider">Question Palette</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-4 gap-2">
                {test.questions.map((q, i) => {
                  const status = getQuestionStatus(q.id);
                  return (
                    <button key={q.id} onClick={() => setCurrentQuestionIndex(i)}
                      className={cn("h-9 rounded-md text-[11px] font-bold transition-all border-b-2",
                        i === currentQuestionIndex ? "ring-2 ring-primary ring-offset-2 z-10" : "",
                        status === "answered" ? "bg-success text-white border-green-700" :
                        status === "review" ? "bg-accent text-white border-purple-800" : "bg-card border-gray-300"
                      )}>
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-4 border-t space-y-3">
                <p className="text-[10px] font-bold text-muted-foreground uppercase">Legend</p>
                <div className="grid grid-cols-1 gap-2 text-[10px] font-bold">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-success rounded-sm" /> Answered</div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-accent rounded-sm" /> Marked for Review</div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-card border rounded-sm" /> Not Answered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Button for Palette (Floating) */}
          <button 
            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
            className={cn("absolute top-1/2 -translate-y-1/2 z-50 bg-primary text-white p-1 rounded-l-md shadow-xl hover:bg-primary/90 transition-all", 
              isPaletteOpen ? "right-72" : "right-0")}
          >
            {isPaletteOpen ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </div>
    );
  }

  // --- VIEW: ANALYSIS ---
  if (view === "analysis" && test) {
    const results = calculateResults();
    return (
      <div className="p-4 lg:p-8 space-y-6 animate-fade-in max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => setView("list")}><ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard</Button>
          <h2 className="text-xl font-bold">Performance Analysis</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="glass-card p-4 text-center">
             <Trophy className="h-6 w-6 mx-auto mb-1 text-primary" />
             <p className="text-2xl font-bold">{results.score}%</p>
             <p className="text-[10px] uppercase font-bold text-muted-foreground">Accuracy</p>
          </Card>
          <Card className="glass-card p-4 text-center border-b-4 border-b-success">
             <CheckCircle className="h-6 w-6 mx-auto mb-1 text-success" />
             <p className="text-2xl font-bold">{results.correct}</p>
             <p className="text-[10px] uppercase font-bold text-muted-foreground">Correct</p>
          </Card>
          <Card className="glass-card p-4 text-center border-b-4 border-b-destructive">
             <XCircle className="h-6 w-6 mx-auto mb-1 text-destructive" />
             <p className="text-2xl font-bold">{results.wrong}</p>
             <p className="text-[10px] uppercase font-bold text-muted-foreground">Wrong</p>
          </Card>
          <Card className="glass-card p-4 text-center border-b-4 border-b-muted">
             <HelpCircle className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
             <p className="text-2xl font-bold">{results.skipped}</p>
             <p className="text-[10px] uppercase font-bold text-muted-foreground">Skipped</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 glass-card h-fit">
            <CardHeader className="py-4"><CardTitle className="text-sm">Detailed Review</CardTitle></CardHeader>
            <CardContent className="p-4 pt-0 space-y-4 max-h-[600px] overflow-y-auto">
                <div className="flex gap-2 sticky top-0 bg-background/95 backdrop-blur py-2 z-10 border-b mb-2">
                    {["all", "correct", "wrong", "unattempted"].map((f) => (
                        <Button key={f} size="xs" variant={analysisFilter === f ? "default" : "outline"} 
                        className="text-[10px] h-7 capitalize" onClick={() => setAnalysisFilter(f as any)}>
                            {f}
                        </Button>
                    ))}
                </div>
                {test.questions.map((q) => (
                    <div key={q.id} className="p-4 rounded-lg border bg-muted/10">
                        <p className="text-sm font-bold mb-2">Q{q.questionNumber}. {q.question}</p>
                        <div className="grid gap-2">
                            {q.options.map((o, i) => (
                                <div key={i} className={cn("text-xs p-2 rounded border", 
                                    i === q.correctAnswer ? "bg-success/10 border-success/30 text-success font-bold" : 
                                    i === answers[q.id] ? "bg-destructive/10 border-destructive/30 text-destructive" : "bg-card")}>
                                    {String.fromCharCode(65 + i)}. {o}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
          </Card>

          <Card className="glass-card h-fit">
            <CardHeader className="py-4"><CardTitle className="text-sm">Global Leaderboard</CardTitle></CardHeader>
            <CardContent className="p-4 pt-0 space-y-2">
                {leaderboardData.slice(0, 5).map((u) => (
                    <div key={u.rank} className={cn("flex justify-between p-2 rounded-md text-xs", u.isCurrentUser ? "bg-primary/10 ring-1 ring-primary" : "bg-muted/50")}>
                        <span className="font-bold">#{u.rank} {u.name}</span>
                        <span className="font-mono">{u.score}%</span>
                    </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default Tests;

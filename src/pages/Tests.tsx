import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Play, Trophy, ArrowLeft, CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { tests, leaderboardData, getTestById } from "@/data/testsData";
import { cn } from "@/lib/utils";

type ViewState = "list" | "exam" | "results";

const Tests = () => {
  const [view, setView] = useState<ViewState>("list");
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const test = selectedTest ? getTestById(selectedTest) : null;
  const currentQuestion = test?.questions[currentQuestionIndex];
  const currentSection = currentQuestion?.section || test?.sections[0];

  const startTest = (testId: string) => {
    const t = getTestById(testId);
    if (t) {
      setSelectedTest(testId);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setMarkedForReview(new Set());
      setTimeLeft(t.timeLimit * 60);
      setView("exam");
    }
  };

  const selectAnswer = (optionIndex: number) => {
    if (currentQuestion) {
      setAnswers({ ...answers, [currentQuestion.id]: optionIndex });
    }
  };

  const toggleMarkForReview = () => {
    if (currentQuestion) {
      const newMarked = new Set(markedForReview);
      if (newMarked.has(currentQuestion.id)) newMarked.delete(currentQuestion.id);
      else newMarked.add(currentQuestion.id);
      setMarkedForReview(newMarked);
    }
  };

  const nextQuestion = () => {
    if (test && currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const submitTest = () => {
    setView("results");
    setShowResults(true);
  };

  const getQuestionStatus = (qId: string) => {
    if (markedForReview.has(qId)) return "review";
    if (answers[qId] !== undefined) return "answered";
    return "not-answered";
  };

  const calculateResults = () => {
    if (!test) return { correct: 0, wrong: 0, skipped: 0, score: 0, accuracy: 0 };
    let correct = 0, wrong = 0;
    test.questions.forEach(q => {
      if (answers[q.id] === undefined) return;
      if (answers[q.id] === q.correctAnswer) correct++;
      else wrong++;
    });
    const skipped = test.questions.length - correct - wrong;
    const score = Math.round((correct / test.questions.length) * 100);
    const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
    return { correct, wrong, skipped, score, accuracy };
  };

  if (view === "list") {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Tests</h1>
          <p className="text-muted-foreground">Practice with CAT & SSC style mock tests</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tests.map((t) => (
            <Card key={t.id} className="glass-card hover:shadow-lg transition-all">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline">{t.examType}</Badge>
                  {t.isAttempted && <Badge className="bg-success">Attempted</Badge>}
                </div>
                <h3 className="font-semibold text-lg">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.topic}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><FileText className="h-4 w-4" />{t.totalQuestions} Qs</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{t.timeLimit} min</span>
                </div>
                {t.isAttempted && t.lastScore && (
                  <p className="text-sm mt-2">Last Score: <span className="font-bold text-primary">{t.lastScore}%</span></p>
                )}
                <Button className="w-full mt-4 gradient-primary" onClick={() => startTest(t.id)}>
                  <Play className="h-4 w-4 mr-2" />{t.isAttempted ? "Retake Test" : "Start Test"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (view === "exam" && test && currentQuestion) {
    return (
      <div className="space-y-4 animate-fade-in">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 glass-card rounded-lg">
          <div className="flex items-center gap-4">
            <Badge variant="outline">{currentSection}</Badge>
            <span className="font-medium">{test.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="destructive" className="text-lg px-4 py-1">
              <Clock className="h-4 w-4 mr-2" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </Badge>
            <Button variant="destructive" onClick={submitTest}>Submit Test</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          {/* Question Area */}
          <div className="lg:col-span-3 space-y-4">
            <Card className="glass-card">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Question {currentQuestion.questionNumber} of {test.questions.length}</p>
                <p className="text-lg font-medium mb-6">{currentQuestion.question}</p>
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, i) => (
                    <button key={i} onClick={() => selectAnswer(i)}
                      className={cn("w-full p-4 rounded-lg border text-left transition-all",
                        answers[currentQuestion.id] === i ? "border-primary bg-primary/10" : "border-border hover:border-primary/50")}>
                      <span className="font-medium mr-3">{String.fromCharCode(65 + i)}.</span>{opt}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="flex gap-2">
              <Button variant="outline" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
              <Button variant="outline" onClick={toggleMarkForReview}>
                {markedForReview.has(currentQuestion.id) ? "Unmark Review" : "Mark for Review"}
              </Button>
              <Button onClick={nextQuestion} disabled={currentQuestionIndex === test.questions.length - 1}>Save & Next</Button>
            </div>
          </div>

          {/* Question Palette */}
          <Card className="glass-card h-fit">
            <CardHeader className="pb-2"><CardTitle className="text-sm">Question Palette</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {test.questions.map((q, i) => {
                  const status = getQuestionStatus(q.id);
                  return (
                    <button key={q.id} onClick={() => setCurrentQuestionIndex(i)}
                      className={cn("w-8 h-8 rounded text-sm font-medium transition-all",
                        i === currentQuestionIndex && "ring-2 ring-primary",
                        status === "answered" && "bg-success text-success-foreground",
                        status === "review" && "bg-accent text-accent-foreground",
                        status === "not-answered" && "bg-muted")}>
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 space-y-1 text-xs">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-success" />Answered</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-accent" />Marked for Review</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-muted" />Not Answered</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (view === "results" && test) {
    const results = calculateResults();
    return (
      <div className="space-y-6 animate-fade-in">
        <Button variant="ghost" onClick={() => { setView("list"); setSelectedTest(null); }}>
          <ArrowLeft className="h-4 w-4 mr-2" />Back to Tests
        </Button>
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="glass-card"><CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-3xl font-bold">{results.score}%</p><p className="text-sm text-muted-foreground">Score</p>
          </CardContent></Card>
          <Card className="glass-card"><CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-2 text-success" />
            <p className="text-3xl font-bold">{results.correct}</p><p className="text-sm text-muted-foreground">Correct</p>
          </CardContent></Card>
          <Card className="glass-card"><CardContent className="p-4 text-center">
            <XCircle className="h-8 w-8 mx-auto mb-2 text-destructive" />
            <p className="text-3xl font-bold">{results.wrong}</p><p className="text-sm text-muted-foreground">Wrong</p>
          </CardContent></Card>
          <Card className="glass-card"><CardContent className="p-4 text-center">
            <HelpCircle className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-3xl font-bold">{results.skipped}</p><p className="text-sm text-muted-foreground">Skipped</p>
          </CardContent></Card>
        </div>
        <Card className="glass-card">
          <CardHeader><CardTitle>Leaderboard</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboardData.slice(0, 5).map((entry) => (
                <div key={entry.rank} className={cn("flex items-center justify-between p-3 rounded-lg",
                  entry.isCurrentUser ? "bg-primary/10 border border-primary" : "bg-muted/50")}>
                  <div className="flex items-center gap-3">
                    <span className="font-bold w-6">#{entry.rank}</span>
                    <span>{entry.name}</span>
                  </div>
                  <span className="font-semibold">{entry.score}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default Tests;

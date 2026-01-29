import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Clock, User, BookOpen, ChevronRight } from "lucide-react";
import { subjects, getSubtopicsBySubject, getClassesBySubtopic, classes } from "@/data/classesData";
import ClassPlayer from "@/components/classes/ClassPlayer";
import { useLayout } from "@/components/layout/MainLayout";

type ViewState = "subjects" | "subtopics" | "classes" | "player";

const Classes = () => {
  const [view, setView] = useState<ViewState>("subjects");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [questionsOnly, setQuestionsOnly] = useState<boolean>(false);
  const { setHideNavbar } = useLayout();

  const currentSubtopics = selectedSubject ? getSubtopicsBySubject(selectedSubject) : [];
  const currentClasses = selectedSubtopic ? getClassesBySubtopic(selectedSubtopic) : [];
  const currentClass = selectedClass ? classes.find(c => c.id === selectedClass) : null;

  const handleBack = () => {
    if (view === "player") { 
      setView("classes"); 
      setSelectedClass(null); 
      setQuestionsOnly(false);
    }
    else if (view === "classes") { 
      setView("subtopics"); 
      setSelectedSubtopic(null); 
    }
    else if (view === "subtopics") { 
      setView("subjects"); 
      setSelectedSubject(null); 
    }
  };

  const handleBackFromPlayer = () => {
    setView("classes");
    setSelectedClass(null);
    setQuestionsOnly(false);
  };

  const handleMobileNavbarHide = (hide: boolean) => {
    setHideNavbar(hide);
  };

  const handleClassSelect = (classId: string, questionsOnlyMode: boolean = false) => {
    setSelectedClass(classId);
    setQuestionsOnly(questionsOnlyMode);
    setView("player");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header - Only show for non-player views */}
      {view !== "player" && (
        <div className="flex items-center gap-4">
          {view !== "subjects" && (
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold">Classes</h1>
            <p className="text-muted-foreground">
              {view === "subjects" && "Select a subject to begin"}
              {view === "subtopics" && `${subjects.find(s => s.id === selectedSubject)?.name} - Select a topic`}
              {view === "classes" && `${currentSubtopics.find(s => s.id === selectedSubtopic)?.name} - Available Classes`}
            </p>
          </div>
        </div>
      )}

      {/* Subjects View */}
      {view === "subjects" && (
        <div className="grid md:grid-cols-2 gap-6">
          {subjects.map((subject) => (
            <Card 
              key={subject.id} 
              className="glass-card cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              onClick={() => { setSelectedSubject(subject.id); setView("subtopics"); }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-3xl`}>
                    {subject.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{subject.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{subject.description}</p>
                    <Badge variant="secondary" className="mt-2">{subject.subtopicsCount} Topics</Badge>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Subtopics View */}
      {view === "subtopics" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentSubtopics.map((topic) => (
            <Card 
              key={topic.id} 
              className="glass-card cursor-pointer hover:shadow-lg transition-all"
              onClick={() => { setSelectedSubtopic(topic.id); setView("classes"); }}
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{topic.name}</h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />{topic.classesCount} classes
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />{topic.duration}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Classes List View */}
      {view === "classes" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentClasses.map((cls) => (
            <Card 
              key={cls.id} 
              className="glass-card overflow-hidden cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img src={cls.thumbnail} alt={cls.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Play buttons - Conditionally show questions button if class has questions */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  {/* Questions Only Button - Only show if class supports questions */}
                  {cls.hasQuestions && (
                    <Button 
                      size="icon" 
                      className="rounded-full bg-secondary hover:bg-secondary/80"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClassSelect(cls.id, true);
                      }}
                      title="Questions Only"
                    >
                      <span className="text-xs font-bold">Q</span>
                    </Button>
                  )}
                  
                  {/* Normal Play Button */}
                  <Button 
                    size="icon" 
                    className="rounded-full gradient-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClassSelect(cls.id, false);
                    }}
                    title="Watch Class"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                
                {cls.isCompleted && <Badge className="absolute top-3 left-3 bg-success">Completed</Badge>}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold line-clamp-1">{cls.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />{cls.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />{cls.teacher}
                  </span>
                </div>
                
                {/* Show if class has questions */}
                {cls.hasQuestions && (
                  <div className="mt-3">
                    <Badge variant="outline" className="text-xs">
                      Includes Practice Questions
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Player View */}
      {view === "player" && currentClass && (
        <ClassPlayer 
          currentClass={currentClass} 
          onBack={handleBackFromPlayer}
          onMobileNavbarHide={handleMobileNavbarHide}
          questionsOnly={questionsOnly}
        />
      )}
    </div>
  );
};

export default Classes;

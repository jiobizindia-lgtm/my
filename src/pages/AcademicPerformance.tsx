import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, BookOpen, Target, Calendar } from "lucide-react";
import { testScores, attendanceRecords, classRecords, subjectPerformance } from "@/data/studentData";

const AcademicPerformance = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">Academic Performance</h1>
        <p className="text-muted-foreground">Track your progress across all subjects</p>
      </div>

      {/* Subject Performance */}
      <Card className="glass-card">
        <CardHeader><CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-primary" />Subject-wise Performance</CardTitle></CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjectPerformance.map((sub) => (
              <div key={sub.subject} className="p-4 rounded-lg bg-muted/50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{sub.subject}</h3>
                  {sub.trend === "up" && <TrendingUp className="h-4 w-4 text-success" />}
                  {sub.trend === "down" && <TrendingDown className="h-4 w-4 text-destructive" />}
                  {sub.trend === "stable" && <Minus className="h-4 w-4 text-muted-foreground" />}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm"><span>Accuracy</span><span className="font-medium">{sub.accuracy}%</span></div>
                  <Progress value={sub.accuracy} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Score: {sub.score}%</span><span>{sub.attempts} attempts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Class Records */}
        <Card className="glass-card">
          <CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" />Class Records</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Ongoing Classes</h4>
              {classRecords.ongoing.map((cls) => (
                <div key={cls.id} className="p-3 rounded-lg bg-muted/50 mb-2">
                  <div className="flex justify-between mb-2"><span className="font-medium">{cls.topic}</span><span className="text-sm text-muted-foreground">{cls.subject}</span></div>
                  <Progress value={cls.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">{cls.progress}% complete</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Recently Completed</h4>
              {classRecords.completed.slice(0, 3).map((cls) => (
                <div key={cls.id} className="flex justify-between items-center p-2 border-b border-border last:border-0">
                  <div><p className="font-medium text-sm">{cls.topic}</p><p className="text-xs text-muted-foreground">{cls.subject}</p></div>
                  <Badge variant="secondary">{cls.duration}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Attendance */}
        <Card className="glass-card">
          <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" />Attendance</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceRecords.slice(0, 4).map((rec) => (
                <div key={rec.month} className="flex items-center justify-between">
                  <span className="font-medium w-24">{rec.month}</span>
                  <div className="flex-1 mx-4"><Progress value={rec.percentage} className="h-3" /></div>
                  <div className="text-right">
                    <span className="font-bold">{rec.percentage}%</span>
                    <p className="text-xs text-muted-foreground">{rec.present}/{rec.total} days</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AcademicPerformance;

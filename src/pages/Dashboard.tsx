import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, Trophy, FileText, Bell, TrendingUp, Clock, Calendar } from "lucide-react";
import { testScores, notices, admitCards, attendanceRecords } from "@/data/studentData";

const Dashboard = () => {
  const latestScores = testScores.slice(0, 3);
  const urgentNotices = notices.filter(n => n.isUrgent);
  const latestAdmitCard = admitCards[0];
  const currentAttendance = attendanceRecords[0];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
        </div>
        <Badge variant="outline" className="hidden sm:flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{latestScores[0]?.rank || "-"}</p>
                <p className="text-xs text-muted-foreground">Current Rank</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">{latestScores[0]?.score || "-"}%</p>
                <p className="text-xs text-muted-foreground">Last Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{testScores.length}</p>
                <p className="text-xs text-muted-foreground">Tests Taken</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <FileText className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">{currentAttendance.percentage}%</p>
                <p className="text-xs text-muted-foreground">Attendance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Results Section */}
        <Card className="lg:col-span-2 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Recent Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {latestScores.map((score) => (
              <div key={score.testId} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <p className="font-medium">{score.testName}</p>
                  <p className="text-sm text-muted-foreground">{score.subject}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{score.score}/{score.maxScore}</p>
                  <Badge variant="secondary">Rank #{score.rank}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Admit Card Section */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Admit Card
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {latestAdmitCard && (
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="font-semibold">{latestAdmitCard.examName}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {latestAdmitCard.examDate}
                  </p>
                  <p className="text-sm text-muted-foreground">{latestAdmitCard.examTime}</p>
                </div>
                <div className="text-sm space-y-1">
                  <p><span className="text-muted-foreground">Center:</span> {latestAdmitCard.center}</p>
                  <p><span className="text-muted-foreground">Seat:</span> {latestAdmitCard.seatNumber}</p>
                </div>
                <Button className="w-full gradient-primary">
                  <Download className="h-4 w-4 mr-2" />
                  Download Admit Card
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Notices Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Important Notices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notices.slice(0, 4).map((notice) => (
              <div key={notice.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                {notice.isUrgent && (
                  <Badge variant="destructive" className="mt-0.5">Urgent</Badge>
                )}
                <div className="flex-1">
                  <p className="font-medium">{notice.title}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{notice.content}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{notice.date}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

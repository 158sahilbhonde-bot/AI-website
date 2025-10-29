import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

interface UserInfo {
  name: string;
  age: string;
  gender: string;
  language: string;
}

const VirtualDoctor = () => {
  // Restore session info if available
  const getStoredUserInfo = (): UserInfo | null => {
    try {
      const stored = sessionStorage.getItem("virtualDoctorUserInfo");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  };

  const storedInfo = getStoredUserInfo();
  const [showForm, setShowForm] = useState<boolean>(!storedInfo);
  const [userInfo, setUserInfo] = useState<UserInfo>(
    storedInfo || { name: "", age: "", gender: "", language: "" }
  );
  const [agentTargetId, setAgentTargetId] = useState<string>("did-agent-target");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.age && userInfo.gender && userInfo.language) {
      sessionStorage.setItem(
        "virtualDoctorUserInfo",
        JSON.stringify(userInfo)
      );
      setAgentTargetId(`did-agent-target-${Date.now()}`);
      setShowForm(false);
    }
  };

  useEffect(() => {
    if (showForm) return;
    setAgentTargetId(`did-agent-target-${Date.now()}`);
  }, [showForm]);

  useEffect(() => {
    if (showForm || !agentTargetId) return;

    const clientKey =
      "YXV0aDB8NjhmNTQ5Njc4NGIwYTcyOGI0NGQyODExOmhMaVJ2eHQ0d1Fia1NKTWg1VEJoOA==";
    const englishAgentId = "v2_agt_yrQiTlnz";
    const hindiAgentId = "v2_agt_M-FVJ1Tg";

    const targetContainer = document.getElementById(agentTargetId);
    if (!targetContainer) return;

    // Cleanup previous renders
    document.querySelectorAll("did-agent").forEach((el) => el.remove());
    document.querySelectorAll("iframe[data-did-english]").forEach((el) => el.remove());
    document
      .querySelectorAll('script[src^="https://agent.d-id.com/v2/index.js"]')
      .forEach((s) => s.remove());

    // Show loader
    targetContainer.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px;">
        <div style="height:40px;width:40px;border-radius:50%;border:4px solid rgba(0,0,0,0.08);border-top-color:rgba(99,102,241,1);animation:spin 1s linear infinite;"></div>
        <p style="font-size:14px;color:#6b7280;margin:0;">Loading Virtual Doctor...</p>
      </div>
      <style>@keyframes spin{to{transform:rotate(360deg);}}</style>
    `;

    // Hindi agent → use D-ID script
    if (userInfo.language === "Hindi") {
      const script = document.createElement("script");
      script.type = "module";
      script.src = `https://agent.d-id.com/v2/index.js?v=${Date.now()}`;
      script.setAttribute("data-mode", "full");
      script.setAttribute("data-client-key", clientKey);
      script.setAttribute("data-agent-id", hindiAgentId);
      script.setAttribute("data-name", "did-agent");
      script.setAttribute("data-monitor", "true");
      script.setAttribute("data-target-id", agentTargetId);
      document.body.appendChild(script);

      return () => {
        document
          .querySelectorAll('script[src^="https://agent.d-id.com/v2/index.js"]')
          .forEach((s) => s.remove());
        document.querySelectorAll("did-agent").forEach((el) => el.remove());
        const el = document.getElementById(agentTargetId);
        if (el) el.innerHTML = "";
      };
    }

    // English agent → iframe method
    const iframe = document.createElement("iframe");
    iframe.src = `https://studio.d-id.com/agents/share?id=${encodeURIComponent(
      englishAgentId
    )}&utm_source=copy&key=WVhWMGFEQjhOamhtTlRRNU5qYzROR0l3WVRjeU9HSTBOR1F5T0RFeE9taE1hVkoyZUhRMGQxRmlhMU5LVFdnMVZFSm9PQT09`;
    iframe.allow = "microphone; camera; autoplay";
    iframe.allowFullscreen = true;
    iframe.setAttribute("data-did-english", "true");

    // Responsive landscape frame
    Object.assign(targetContainer.style, {
      position: "relative",
      width: "90vw",
      height: "50vw",
      maxWidth: "1000px",
      maxHeight: "560px",
      margin: "0 auto",
      overflow: "hidden",
      borderRadius: "16px",
      background: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });

    // Centered, less zoom, fits container width
    Object.assign(iframe.style, {
      width: "1500px",
      height: "900px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0.78)", // ✅ reduced zoom
      transformOrigin: "center center",
      border: "none",
    });

    targetContainer.innerHTML = "";
    targetContainer.appendChild(iframe);

    // Cleanup on unmount
    return () => {
      document
        .querySelectorAll("iframe[data-did-english]")
        .forEach((el) => el.remove());
      document.querySelectorAll("did-agent").forEach((el) => el.remove());
      document
        .querySelectorAll('script[src^="https://agent.d-id.com/v2/index.js"]')
        .forEach((s) => s.remove());
      const el = document.getElementById(agentTargetId);
      if (el) el.innerHTML = "";
    };
  }, [showForm, userInfo.language, agentTargetId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Virtual Doctor
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your AI-powered healthcare companion, available 24/7
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {showForm ? (
              <Card className="overflow-hidden shadow-2xl border-border/50 p-8">
                <div className="max-w-md mx-auto space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">
                      Let's Get Started
                    </h2>
                    <p className="text-muted-foreground">
                      Please provide some basic information to begin your consultation
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={userInfo.name}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={userInfo.age}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, age: e.target.value })
                        }
                        required
                        min="1"
                        max="150"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select
                        value={userInfo.gender}
                        onValueChange={(value) =>
                          setUserInfo({ ...userInfo, gender: value })
                        }
                        required
                      >
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language</Label>
                      <Select
                        value={userInfo.language}
                        onValueChange={(value) =>
                          setUserInfo({ ...userInfo, language: value })
                        }
                        required
                      >
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Hindi">Hindi</SelectItem>
                          <SelectItem value="English">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Continue to Virtual Doctor
                    </Button>
                  </form>
                </div>
              </Card>
            ) : (
              <Card className="overflow-hidden shadow-2xl border-border/50">
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-center">
                        AIHealthHappiness Virtual Assistant
                      </h2>
                      <p className="text-center text-white/90 mt-2">
                        Powered by advanced AI technology
                      </p>
                    </div>
                    <div className="ml-4 flex items-center gap-3">
                      <span className="text-white/90 font-medium text-sm">Select Language:</span>
                      <Select
                        value={userInfo.language}
                        onValueChange={(value) => {
                          const updatedInfo = { ...userInfo, language: value };
                          setUserInfo(updatedInfo);
                          sessionStorage.setItem(
                            "virtualDoctorUserInfo",
                            JSON.stringify(updatedInfo)
                          );
                          setAgentTargetId(`did-agent-target-${Date.now()}`);
                        }}
                      >
                        <SelectTrigger className="w-[140px] bg-white text-foreground border-white/20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-border z-50">
                          <SelectItem value="English">🇬🇧 English</SelectItem>
                          <SelectItem value="Hindi">🇮🇳 Hindi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-secondary/20 to-primary/5">
                  <div
                    id={agentTargetId}
                    key={agentTargetId}
                    className="w-full aspect-video flex items-center justify-center text-muted-foreground text-lg"
                    style={{ minHeight: "500px" }}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 p-4">
                      <div className="h-10 w-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
                      <p className="text-sm">Loading Virtual Doctor...</p>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/30 p-6 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-medium">
                      Virtual Doctor is online and ready to help
                    </span>
                  </div>
                </div>
              </Card>
            )}

            <Card className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">
                    Important Healthcare Notice
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This virtual doctor service provides health information and preliminary guidance only.
                    It is not a substitute for professional medical advice, diagnosis, or treatment. Always
                    consult with qualified healthcare providers for medical concerns.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>In case of emergency:</strong> Call your local emergency services immediately.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VirtualDoctor;
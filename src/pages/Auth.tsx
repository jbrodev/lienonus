import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<"weak" | "neutral" | "strong">("weak");
  const navigate = useNavigate();

  const validatePassword = (pass: string): boolean => {
    if (pass.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
      setPasswordError("Password must contain at least one special character");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const calculatePasswordStrength = (pass: string): "weak" | "neutral" | "strong" => {
    if (pass.length === 0) return "weak";
    
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (pass.length >= 12) strength++;
    if (/[a-z]/.test(pass)) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength++;
    
    if (strength <= 2) return "weak";
    if (strength <= 4) return "neutral";
    return "strong";
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && !validatePassword(password)) {
      return;
    }
    
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success("Logged in successfully!");
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
          },
        });
        if (error) throw error;
        toast.success("Account created! You can now log in.");
        setIsLogin(true);
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isLogin ? "Welcome Back" : "Create Account"}</CardTitle>
          <CardDescription>
            {isLogin
              ? "Sign in to access your admin dashboard"
              : "Sign up to get started"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!isLogin) {
                    validatePassword(e.target.value);
                    setPasswordStrength(calculatePasswordStrength(e.target.value));
                  }
                }}
                required
                minLength={8}
              />
              {!isLogin && password && (
                <div className="space-y-2">
                  <div className="flex gap-1 h-1">
                    <div className={`flex-1 rounded-full transition-colors ${
                      passwordStrength === "weak" ? "bg-destructive" : 
                      passwordStrength === "neutral" ? "bg-yellow-500" : 
                      "bg-green-500"
                    }`} />
                    <div className={`flex-1 rounded-full transition-colors ${
                      passwordStrength === "neutral" || passwordStrength === "strong" ? 
                      passwordStrength === "neutral" ? "bg-yellow-500" : "bg-green-500" : 
                      "bg-muted"
                    }`} />
                    <div className={`flex-1 rounded-full transition-colors ${
                      passwordStrength === "strong" ? "bg-green-500" : "bg-muted"
                    }`} />
                  </div>
                  <p className="text-xs text-muted-foreground capitalize">
                    {passwordStrength}
                  </p>
                </div>
              )}
              {!isLogin && passwordError && (
                <p className="text-sm text-destructive">{passwordError}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-foreground hover:underline"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
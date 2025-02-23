import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "@/components/firebase/firebase";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Email/Password Login
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Success",
        description: "Signed in successfully",
        variant: "default",
        duration: 1000,
        style: { backgroundColor: 'black', color: 'white' }
      });
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      toast({
        title: "Error",
        description: "Invalid email or password",
        variant: "destructive",
        duration: 1500,
        style: { backgroundColor: 'black', color: 'white' }
      });
    }
  };

  // Google Login
  const handleGoogleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      toast({
        title: "Success",
        description: "Signed in with Google",
        variant: "default",
        duration: 1500,
        style: { backgroundColor: 'black', color: 'white' }
      });
      navigate("/");
    } catch (error) {
      console.error("Google Sign-in failed:", error);
      toast({
        title: "Error",
        description: "Google authentication failed",
        variant: "destructive",
        duration: 1500,
        style: { backgroundColor: 'black', color: 'white' }
      });
    }
  };

  return (
    <AuthLayout>
      <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-6">Sign in</h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:text-primary/90 underline"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember-me"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
            />
            <Label
              htmlFor="remember-me"
              className="text-sm text-muted-foreground"
            >
              Remember me
            </Label>
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:text-primary/90 underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">or</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Button
              variant="default"
              className="w-full flex items-center justify-center"
              onClick={handleGoogleSignIn}
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://www.google.com/favicon.ico"
                alt="Google logo"
              />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

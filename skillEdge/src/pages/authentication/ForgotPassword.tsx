import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@/components/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail } from 'lucide-react';
import { auth } from '@/components/firebase/firebase'; 
import { sendPasswordResetEmail } from 'firebase/auth'; 

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending reset email:', error);
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <AuthLayout>
        <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#3b82f6]" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Check your email</h2>
            <p className="text-muted-foreground mb-6">
              We've sent a password reset link to<br />
              <span className="text-primary font-medium">{email}</span>
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/signin">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to sign in
              </Link>
            </Button>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-2">Forgot password?</h2>
        <p className="text-muted-foreground mb-6">
          No worries, we'll send you reset instructions.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Reset password'}
          </Button>

          <Button asChild variant="outline" className="w-full">
            <Link to="/signin">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign in
            </Link>
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}

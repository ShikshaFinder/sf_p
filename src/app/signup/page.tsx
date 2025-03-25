import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/80 via-blue-100/50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">
            Create an Account
          </CardTitle>
          <p className="text-center text-gray-600">
            Join Shiksha Finder to explore quality education
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0066FF] hover:bg-blue-700 text-white"
            >
              Sign Up
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{" "}
            <Link
              href="/login"
              className="text-[#0066FF] hover:underline font-semibold"
            >
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

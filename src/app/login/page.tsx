import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/80 via-blue-300/50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">
            Welcome Back
          </CardTitle>
          <p className="text-center text-gray-600">
            Login to access your Shiksha Finder account
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-[#0066FF] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0066FF] hover:bg-blue-700 text-white"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                Google
              </Button>
              <Button variant="outline" className="w-full">
                Microsoft
              </Button>
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">Don't have an account?</span>{" "}
            <Link
              href="/signup"
              className="text-[#0066FF] hover:underline font-semibold"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

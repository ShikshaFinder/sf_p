import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroVideoDialogDemo } from "@/components/video";
import { Footer } from "@/components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/80 via-blue-300/50 to-white min-h-[90vh] flex items-center ">
        <div className="container mx-auto px-4 mt-12 md:mt-26">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Shiksha Finder
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-6">
              Promote the quality of your education
            </p>
            <p className="text-xl text-gray-600 mb-12">
              Upload Demo Lectures of your schools and Education platform so
              that students can explore the Quality of Education You Are
              Providing.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-[#0066FF] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
                >
                  Get Started
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-700 text-gray-700 px-8 py-6 text-lg rounded-lg hover:bg-gray-100"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-12">
              <HeroVideoDialogDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12">Our Vision</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Shiksha Finder Is a Platform for bridging the gap between
              Educational Platform and students by taking the quality of
              education at our first priority.
            </p>
            <p className="text-2xl text-gray-600 dark:text-gray-300">
              We solve the problem of finding the right educational institution
              by providing a centralized platform where students and parents can
              discover and compare schools, coaching classes, and skill centers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Demo Lectures</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Experience teaching quality firsthand through demo lectures
                  before making a commitment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Easy Admission</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Fill out admission forms directly through our platform after
                  finding your perfect match.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Free Access</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Free for students to explore institutions and for educational
                  platforms to showcase their offerings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            People Love Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  "Shiksha Finder is amazing! It helped me find the perfect
                  school and coaching class for my needs. I highly recommend
                  it!"
                </p>
                <p className="font-semibold">Harsh Jani</p>
                <p className="text-sm text-gray-500">Student</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  "As a school owner, I'm always looking for ways to improve the
                  quality of education we provide. Shiksha Finder has been a
                  game-changer for us!"
                </p>
                <p className="font-semibold">Gyan Guru Classes</p>
                <p className="text-sm text-gray-500">School</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  "Shiksha Finder is a valuable tool for educators. It helps
                  connect students with the best learning resources. I highly
                  recommend it!"
                </p>
                <p className="font-semibold">Vigyasa</p>
                <p className="text-sm text-gray-500">Edtech</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  "I'm impressed with Shiksha Finder's ability to streamline the
                  school selection process. It's an invaluable resource for
                  students and parents alike."
                </p>
                <p className="font-semibold">Computer Technology Foundation</p>
                <p className="text-sm text-gray-500">Principal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg">
                  Is Shiksha Finder free for educational institutions?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-600 dark:text-gray-300">
                  Yes! Shiksha Finder is and will always be completely free for
                  educational institutions. You can register your institution,
                  upload demo lectures, and receive admission forms from
                  students without any charges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg">
                  Is it free for students to use Shiksha Finder?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-600 dark:text-gray-300">
                  Absolutely! Students can browse institutions, watch demo
                  lectures, and submit admission forms completely free of
                  charge. We believe in making quality education accessible to
                  everyone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg">
                  How does online admission work?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-600 dark:text-gray-300">
                  Students can directly fill out and submit admission forms
                  through our platform after exploring demo lectures and
                  institution details. The forms are automatically sent to the
                  respective institutions for processing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg">
                  What types of institutions can register?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-600 dark:text-gray-300">
                  We welcome all types of educational institutions including
                  schools, coaching classes, skill development centers, and
                  educational platforms. If you're dedicated to providing
                  quality education, Shiksha Finder is for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg">
                  How do demo lectures work?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-600 dark:text-gray-300">
                  Institutions can upload sample lectures showcasing their
                  teaching methodology and quality. Students can watch these
                  demos to get a real feel for the teaching style and make
                  informed decisions about their education.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Find Your Perfect Educational Match?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students who have found their ideal educational
            institution through Shiksha Finder.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

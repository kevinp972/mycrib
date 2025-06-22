import Link from "next/link"

export default function AboutContent() {
  return (
    <div className="w-full px-8 pb-40">
        <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with resume link */}
            <div className="flex flex-col items-start">
              <a 
                href="/Xueshan_Kevin_Peng_Resume.pdf"
                download
                className="text-blue-600 hover:text-blue-800 underline text-xl font-light"
              >
                Get My Resume
              </a>
            </div>

            {/* Right column with text content (2/3) */}
            <div className="space-y-6 text-xl font-light md:col-span-2">
            <p>Hey there,</p>
            
            <p>I&apos;m Kevin. I&apos;m passionate about building elegant analytics solutions to help organizations solve complex business problems with clarity and impact.</p>
            
            <p>I&apos;m currently working on building contemporaneous models of housing market dynamics at <a href="https://jbrec.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">John Burns Research and Consulting</a>.</p>
            
            <p>My approach to analytics is pragmatic – choosing the <strong className="font-medium">most effective</strong>, and often the simplest, method that <strong className="font-medium">solves the problem</strong> and <strong className="font-medium">speaks to the demand of cross-functional teams</strong>. With experience in machine learning, causal inference, optimization, customer analytics, and GenAI applications, I specialize in delivering actionable insights tailored to your organization&apos;s goals.</p>
            
            <p>
                <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline">
                Explore my projects here.
                </Link>
            </p>
            
            <p>Please don&apos;t hesitate to reach out – <a href="mailto:kevinpeng2025@gmail.com" className="text-blue-600 hover:text-blue-800">kevinpeng2025@gmail.com</a></p>
            
            <p>Outside of work, I like to spend my time playing <Link href="/music" className="text-blue-600 hover:text-blue-800">music</Link>, playing tennis, taking <Link href="/gallery" className="text-blue-600 hover:text-blue-800">photos</Link>, watching films, and cooking good food to share with friends.</p>
            </div>
        </div>
        </div>
    </div>
  )
} 
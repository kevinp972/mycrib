import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="w-full px-8">
      {/* About Section */}
      <div className="max-w-6xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with resume link */}
            <div className="flex flex-col items-start">
              <a 
                href="/Xueshan_Kevin_Peng_Resume.pdf"
                download
                className="text-blue-600 hover:text-blue-800 underline text-2xl min-[460px]:text-xl font-light"
              >
                Get My Resume
              </a>
            </div>

            {/* Right column with text content (2/3) */}
            <div className="space-y-6 text-lg min-[460px]:text-xl font-light md:col-span-2">
            <p>Hey there,</p>
            
            <p>I&apos;m Kevin. I&apos;m passionate about building elegant analytics solutions to help organizations solve complex business problems with clarity and impact.</p>
            
            <p>I&apos;m currently working on building contemporaneous models of housing market dynamics at <a href="https://jbrec.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">John Burns Research and Consulting</a>.</p>
            
            <p>My approach to analytics is pragmatic – choosing the <strong className="font-medium">most effective</strong>, and often the simplest, method that <strong className="font-medium">solves the problem</strong> and <strong className="font-medium">speaks to the demand of cross-functional teams</strong>. With experience in machine learning, causal inference, optimization, customer analytics, and GenAI applications, I specialize in delivering actionable insights tailored to your organization&apos;s goals.</p>
            
            <p>
                <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline">
                Explore my projects here.
                </Link>
            </p>
            
            <p>Let&apos;s get to know each other – <a href="mailto:kevinpeng2025@gmail.com" className="text-blue-600 hover:text-blue-800">kevinpeng2025@gmail.com</a></p>
            
            <p>Outside of work, I like to spend my time playing <Link href="/music" className="text-blue-600 hover:text-blue-800">music</Link>, playing tennis, taking <Link href="/gallery" className="text-blue-600 hover:text-blue-800">photos</Link>, watching films, and cooking good food to share with friends.</p>
            </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with title */}
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-light">Skills</h2>
            </div>

            {/* Right column with skills content (2/3) */}
            <div className="space-y-8 text-lg min-[460px]:text-xl font-light md:col-span-2">
              <div>
                <h3 className="font-medium mb-2">Programming & Tools</h3>
                <p>Python (NumPy, pandas, scikit-learn, Dash) · R · SQL · Gurobi</p>
                <p>Jupyter Notebooks · Git · Tableau · Power BI · Advanced Excel</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Statistical & Machine Learning Methods</h3>
                <p>Linear & Logistic Regression · Classification · Clustering · Ensemble Methods</p>
                <p>Feature Engineering · Regularization (L1, L2) · Wrapper Methods</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Causal Inference & Experimental Design</h3>
                <p>A/B Testing · Difference-in-Differences (DiD) · Regression Discontinuity (RDD) · Instrumental Variables (IV) · Panel Data Analysis</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">AI & Automation Workflows</h3>
                <p>OpenAI APIs (File Search, Thread) · Prompt Engineering · JSON Parsing · PDF Extraction · Concurrent Processing · Python Automation</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Data Science Foundations</h3>
                <p>Statistics · Machine Learning · Causal Inference · Optimization · Data Management · Data Visualization</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Applied Analytics</h3>
                <p>Customer Analytics · Operations Analytics · Competitive Intelligence</p>
              </div>
            </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left column with title */}
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-light">Education</h2>
            </div>

            {/* Right column with education content (2/3) */}
            <div className="space-y-8 text-lg min-[460px]:text-xl font-light md:col-span-2">
              <div>
                <h3 className="font-medium">UCLA Anderson School of Management</h3>
                <p className="italic">Master of Science in Business Analytics</p>
              </div>

              <div>
                <h3 className="font-medium">University of California, San Diego</h3>
                <p className="italic">B.S. in Mathematics–Economics, Minor in Music</p>
              </div>

              <div>
                <h3 className="font-medium">Shanghai High School International Division</h3>
                <p className="italic">High School Diploma</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}